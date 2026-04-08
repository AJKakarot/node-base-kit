#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");
const readline = require("readline");
const { spawnSync } = require("child_process");

const TEMPLATES_DIR = path.join(__dirname, "..", "templates");

function question(rl, prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function toSlug(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9._-]/g, "");
}

async function pathExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function mapTemplateFileName(fileName) {
  const base = fileName.toLowerCase().endsWith(".template")
    ? fileName.slice(0, -".template".length)
    : fileName;
  const dotFiles = {
    gitignore: ".gitignore",
    env: ".env",
    "env.example": ".env.example",
  };
  return dotFiles[base] ?? base;
}

async function copyTemplateTree(relDir, destRoot, vars) {
  const src = path.join(TEMPLATES_DIR, relDir);
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const ent of entries) {
    const from = path.join(src, ent.name);

    if (ent.isDirectory()) {
      const to = path.join(destRoot, ent.name);
      await fs.mkdir(to, { recursive: true });
      await copyTemplateTree(path.join(relDir, ent.name), to, vars);
      continue;
    }

    const outName = mapTemplateFileName(ent.name);
    const to = path.join(destRoot, outName);
    let content = await fs.readFile(from, "utf8");
    for (const [key, val] of Object.entries(vars)) {
      content = content.split(`__${key}__`).join(val);
    }
    await fs.writeFile(to, content, "utf8");
  }
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let projectName;
  try {
    const raw = await question(rl, "Project name: ");
    projectName = toSlug(raw || "");
    if (!projectName) {
      console.error("Please enter a valid project name.");
      process.exitCode = 1;
      return;
    }
  } finally {
    rl.close();
  }

  const cwd = process.cwd();
  const targetDir = path.join(cwd, projectName);

  if (await pathExists(targetDir)) {
    console.error(`Folder already exists: ${targetDir}`);
    process.exitCode = 1;
    return;
  }

  await fs.mkdir(targetDir, { recursive: true });
  await copyTemplateTree(".", targetDir, { PROJECT_NAME: projectName });

  console.log("\nInstalling dependencies…\n");
  const result = spawnSync("npm", ["install"], {
    cwd: targetDir,
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    console.error("\nnpm install failed. Run `npm install` inside the project folder.");
    process.exitCode = result.status ?? 1;
    return;
  }

  console.log(`
Scaffold complete: ${projectName}

Next steps:
  cd ${projectName}
  Copy env: cp .env.example .env  (then set MONGO_URI and JWT_SECRET)
  npm run dev

Production:
  npm start

Scaffold again anytime with:
  npx node-base-kit
  npm init node-base-kit
`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
