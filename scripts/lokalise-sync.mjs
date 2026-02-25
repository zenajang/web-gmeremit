#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { execSync } from "node:child_process";
import { LokaliseApi } from "@lokalise/node-api";

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, ".env.local");
const MESSAGES_DIR = path.join(ROOT, "messages");
const LANG_ISO_MAP = {
  bn: ["bn_BD", "bn_IN", "bn"],
  hi: ["hi_IN", "hi"],
  id: ["id_ID", "id"],
  ja: ["ja_JP", "ja"],
  km: ["km_KH", "km"],
  mn: ["mn_MN", "mn"],
  my: ["my-MM", "my_MM", "my","my-mm"],
  ne: ["ne_NP", "ne"],
  si: ["si_LK", "si"],
  th: ["th_TH", "th"],
  tl: ["fil_PH", "tl_PH", "tl"], // Filipino often uses 'fil'
  ur: ["ur_PK", "ur_IN", "ur"],
  uz: ["uz_UZ", "uz"],
  vi: ["vi_VN", "vi"],
  zh: ["zh_CN", "zh_TW", "zh"],
};

function langCandidates(code) {
  return LANG_ISO_MAP[code] ? LANG_ISO_MAP[code] : [code];
}

async function getProjectLangs(client, projectId) {
  const res = await client.languages().list({ project_id: projectId });
  return res.items.map((l) => ({
    lang_iso: l.lang_iso,
    lang_name: l.lang_name,
  }));
}

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, "utf8");
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const idx = line.indexOf("=");
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

function required(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env: ${name}`);
  return v;
}

function downloadToFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Download failed: HTTP ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => reject(err));
      });
  });
}

async function pull(client, projectId) {
  const tmpZip = path.join(ROOT, ".lokalise-download.zip");

  const process = await client.files().download(projectId, {
    format: "json",
    original_filenames: true,
    directory_prefix: "messages/",
    bundle_structure: "%LANG_ISO%.json",
    indentation: "2sp",
    include_description: false,
  });

  await downloadToFile(process.bundle_url, tmpZip);
  execSync(`unzip -o ${JSON.stringify(tmpZip)} -d ${JSON.stringify(ROOT)}`, { stdio: "inherit" });
  fs.unlinkSync(tmpZip);
  console.log("✅ Pulled translations from Lokalise into messages/*.json");
}

async function push(client, projectId) {
  const files = fs
    .readdirSync(MESSAGES_DIR)
    .filter((f) => f.endsWith(".json"));

  const projectLangs = await getProjectLangs(client, projectId);
  const projectLangIso = new Set(projectLangs.map((l) => l.lang_iso));

  const failed = [];
  for (const filename of files) {
    const code = filename.replace(/\.json$/, "");
    const fullPath = path.join(MESSAGES_DIR, filename);
    const data = fs.readFileSync(fullPath);

    let uploaded = false;
    let lastErr = null;

    // Prefer a lang_iso that actually exists in the Lokalise project
    const candidates = langCandidates(code);
    let chosen = candidates.find((c) => projectLangIso.has(c));
    if (!chosen) {
      // Try prefix match like "xx_YY"
      const prefixMatch = projectLangs.find((l) => l.lang_iso.startsWith(`${code}_`));
      if (prefixMatch) chosen = prefixMatch.lang_iso;
    }

    if (chosen) {
      try {
        await client.files().upload(projectId, {
          data: data.toString("base64"),
          filename,
          lang_iso: chosen,
          detect_icu_plurals: true,
          cleanup_mode: false,
          replace_modified: true,
        });
        console.log(`⬆️  Uploaded ${filename} (${chosen})`);
        uploaded = true;
      } catch (err) {
        lastErr = err?.message || String(err);
        if (!String(lastErr).includes("Invalid `lang_iso` parameter")) throw err;
      }
    }

    if (!uploaded) {
      failed.push({
        filename,
        code,
        error: lastErr || "Language not found in Lokalise project",
        candidates,
      });
    }
  }

  if (failed.length) {
    const details = failed
      .map(
        (f) =>
          `${f.filename} (${f.code}) -> ${f.error}. Candidates tried: ${f.candidates.join(", ")}`
      )
      .join("\n");
    throw new Error(
      `Some files failed to upload. Check if these languages exist in Lokalise project:\n${details}`
    );
  }

  console.log("✅ Pushed messages/*.json to Lokalise");
}

async function main() {
  loadEnv(ENV_PATH);
  const token = required("LOKALISE_API_TOKEN");
  const projectId = required("LOKALISE_PROJECT_ID");

  const action = process.argv[2];
  if (!action || !["pull", "push"].includes(action)) {
    console.log("Usage: node scripts/lokalise-sync.mjs <pull|push>");
    process.exit(1);
  }

  const client = new LokaliseApi({ apiKey: token });

  if (action === "pull") await pull(client, projectId);
  if (action === "push") await push(client, projectId);
}

main().catch((err) => {
  console.error("❌ Lokalise sync failed:", err.message);
  process.exit(1);
});
