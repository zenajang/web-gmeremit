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
  fr: ["fr_FR", "fr"],
  ar: ["ar_SA", "ar_AE", "ar"],
  es: ["es_ES", "es_MX", "es"],
  ru: ["ru_RU", "ru"],
  lo: ["lo_LA", "lo"],
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

async function waitForQueuedProcess(client, projectId, processId, { timeoutMs = 5 * 60 * 1000, intervalMs = 2000 } = {}) {
  const start = Date.now();
  while (true) {
    const proc = await client.queuedProcesses().get(processId, { project_id: projectId });
    if (proc.status === "finished") return proc;
    if (proc.status === "failed" || proc.status === "cancelled") {
      throw new Error(`Lokalise process ${processId} ${proc.status}: ${proc.message || "no message"}`);
    }
    if (Date.now() - start > timeoutMs) {
      throw new Error(`Lokalise process ${processId} timed out after ${timeoutMs / 1000}s (last status: ${proc.status})`);
    }
    process.stdout.write(".");
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }
}

async function pull(client, projectId) {
  const tmpZip = path.join(ROOT, ".lokalise-download.zip");

  console.log("⏳ Requesting async export from Lokalise...");
  const queued = await client.files().async_download(projectId, {
    format: "json",
    original_filenames: true,
    directory_prefix: "messages/",
    bundle_structure: "%LANG_ISO%.json",
    indentation: "2sp",
    include_description: false,
  });

  console.log(`⏳ Waiting for export (process ${queued.process_id})`);
  const finished = await waitForQueuedProcess(client, projectId, queued.process_id);
  process.stdout.write("\n");

  const downloadUrl = finished.details?.download_url;
  if (!downloadUrl) {
    throw new Error("Lokalise async export finished but no download_url was returned");
  }

  await downloadToFile(downloadUrl, tmpZip);
  execSync(`unzip -o ${JSON.stringify(tmpZip)} -d ${JSON.stringify(ROOT)}`, { stdio: "inherit" });
  fs.unlinkSync(tmpZip);

  // Lokalise downloads files as %LANG_ISO%.json (e.g. fr_FR.json, ja_JP.json),
  // but the codebase imports short codes (fr.json, ja.json). Rename to short codes.
  // Build a reverse map: full lang_iso -> short code.
  const reverseMap = {};
  for (const [shortCode, candidates] of Object.entries(LANG_ISO_MAP)) {
    for (const c of candidates) reverseMap[c] = shortCode;
  }

  const downloaded = fs.readdirSync(MESSAGES_DIR).filter((f) => f.endsWith(".json"));
  for (const filename of downloaded) {
    const langIso = filename.replace(/\.json$/, "");
    const shortCode = reverseMap[langIso];
    if (!shortCode || shortCode === langIso) continue;
    const from = path.join(MESSAGES_DIR, filename);
    const to = path.join(MESSAGES_DIR, `${shortCode}.json`);
    fs.renameSync(from, to);
    console.log(`📝 Renamed ${filename} → ${shortCode}.json`);
  }

  console.log("✅ Pulled translations from Lokalise into messages/*.json");
}

function flattenKeys(value, prefix = "", out = new Set()) {
  for (const [key, child] of Object.entries(value)) {
    const full = prefix ? `${prefix}.${key}` : key;
    if (Array.isArray(child)) {
      child.forEach((item, index) => {
        if (item && typeof item === "object") flattenKeys(item, `${full}.${index}`, out);
        else out.add(`${full}.${index}`);
      });
    } else if (child && typeof child === "object") {
      flattenKeys(child, full, out);
    } else {
      out.add(full);
    }
  }
  return out;
}

async function getProjectKeyNames(client, projectId) {
  const names = new Set();
  for (let page = 1; ; page += 1) {
    const res = await client.keys().list({ project_id: projectId, limit: 500, page });
    for (const item of res.items) {
      const name = item.key_name ?? item.keyName;
      const value = typeof name === "string" ? name : name?.web ?? name?.other ?? null;
      if (value) names.add(value);
    }
    const more = typeof res.hasNextPage === "function" ? res.hasNextPage() : res.items.length === 500;
    if (!more) break;
  }
  return names;
}

/**
 * 로컬에서 지운 키를 Lokalise 에서도 지우려면 cleanup_mode 가 필요하다.
 * 언어 파일마다 키 집합이 다르면 뒤 업로드가 앞 업로드의 키를 지워버리므로
 * 삭제 모드에서는 모든 언어 파일의 키 집합이 같은지 먼저 확인한다.
 */
function assertSameKeySets(files) {
  const perFile = files.map((filename) => {
    const json = JSON.parse(fs.readFileSync(path.join(MESSAGES_DIR, filename), "utf8"));
    return { filename, keys: flattenKeys(json) };
  });
  const base = perFile[0];
  const problems = [];
  for (const entry of perFile.slice(1)) {
    const missing = [...base.keys].filter((k) => !entry.keys.has(k));
    const extra = [...entry.keys].filter((k) => !base.keys.has(k));
    if (missing.length || extra.length) {
      problems.push(
        `${entry.filename}: ${base.filename} 대비 없음 ${missing.length}개, 더 있음 ${extra.length}개` +
          (missing.length ? `\n    없음 예: ${missing.slice(0, 5).join(", ")}` : "") +
          (extra.length ? `\n    더 있음 예: ${extra.slice(0, 5).join(", ")}` : "")
      );
    }
  }
  if (problems.length) {
    throw new Error(
      "삭제 모드는 모든 언어 파일의 키 집합이 같아야 합니다. 먼저 아래를 맞추세요.\n  " +
        problems.join("\n  ")
    );
  }
  return base.keys;
}

async function push(client, projectId, { deleteRemoved = false } = {}) {
  const files = fs
    .readdirSync(MESSAGES_DIR)
    .filter((f) => f.endsWith(".json"));

  let localKeys = null;
  if (deleteRemoved) {
    localKeys = assertSameKeySets(files);
    const remoteKeys = await getProjectKeyNames(client, projectId);
    const toDelete = [...remoteKeys].filter((k) => !localKeys.has(k));
    console.log(`🗑  삭제 모드: Lokalise ${remoteKeys.size}개 / 로컬 ${localKeys.size}개`);
    if (toDelete.length) {
      console.log(`   사라질 키 ${toDelete.length}개`);
      toDelete.slice(0, 20).forEach((k) => console.log(`     - ${k}`));
      if (toDelete.length > 20) console.log(`     … 외 ${toDelete.length - 20}개`);
    } else {
      console.log("   사라질 키 없음");
    }
  }

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
          cleanup_mode: deleteRemoved,
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

  console.log(
    deleteRemoved
      ? "✅ Pushed messages/*.json to Lokalise (로컬에 없는 키 삭제됨)"
      : "✅ Pushed messages/*.json to Lokalise"
  );
}

async function main() {
  loadEnv(ENV_PATH);
  const token = required("LOKALISE_API_TOKEN");
  const projectId = required("LOKALISE_PROJECT_ID");

  const args = process.argv.slice(2);
  const action = args[0];
  const deleteRemoved = args.includes("--delete");
  if (!action || !["pull", "push"].includes(action)) {
    console.log("Usage: node scripts/lokalise-sync.mjs <pull|push> [--delete]");
    console.log("  --delete  로컬에 없는 키를 Lokalise 에서도 삭제 (push 전용)");
    process.exit(1);
  }

  const client = new LokaliseApi({ apiKey: token });

  if (action === "pull") await pull(client, projectId);
  if (action === "push") await push(client, projectId, { deleteRemoved });
}

main().catch((err) => {
  console.error("❌ Lokalise sync failed:", err.message);
  process.exit(1);
});
