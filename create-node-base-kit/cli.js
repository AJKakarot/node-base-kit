#!/usr/bin/env node

const path = require("path");
const { spawnSync } = require("child_process");

let cliPath;
try {
  cliPath = require.resolve("node-base-kit/bin/cli.js");
} catch {
  cliPath = path.join(__dirname, "..", "bin", "cli.js");
}

const result = spawnSync(process.execPath, [cliPath], {
  stdio: "inherit",
  cwd: process.cwd(),
});

process.exit(result.status ?? 1);
