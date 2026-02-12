#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { execSync } from "node:child_process";
import { LokaliseApi } from "@lokalise/node-api";

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, ".env.local");
const MESSAGES_DIR = path.join(ROOT, "messages");

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

  for (const filename of files) {
    const lang_iso = filename.replace(/\.json$/, "");
    const fullPath = path.join(MESSAGES_DIR, filename);
    const data = fs.readFileSync(fullPath);

    await client.files().upload(projectId, {
      data: data.toString("base64"),
      filename,
      lang_iso,
      detect_icu_plurals: true,
      cleanup_mode: false,
      replace_modified: true,
    });

    console.log(`⬆️  Uploaded ${filename} (${lang_iso})`);
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
