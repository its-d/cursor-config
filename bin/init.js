#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';

function log(msg) { console.log(msg); }
function success(msg) { log(`${GREEN}✓${RESET} ${msg}`); }
function info(msg) { log(`${CYAN}${msg}${RESET}`); }
function warn(msg) { log(`${YELLOW}⚠ ${msg}${RESET}`); }

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src).filter(f => f !== 'README.md');
  const results = { copied: [], skipped: [] };

  for (const file of files) {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    if (fs.existsSync(destFile)) {
      results.skipped.push(file);
    } else {
      fs.copyFileSync(srcFile, destFile);
      results.copied.push(file);
    }
  }

  return results;
}

function init() {
  const cwd = process.cwd();
  const packageRoot = path.join(__dirname, '..');

  const commandsSrc = path.join(packageRoot, 'docs', 'commands');
  const rulesSrc    = path.join(packageRoot, 'docs', 'rules');

  log('');
  log(`${BOLD}cursor-suite init${RESET}`);
  log(`${DIM}Setting up Cursor commands and rules in your project...${RESET}`);
  log('');

  if (!fs.existsSync(path.join(cwd, 'package.json')) &&
      !fs.existsSync(path.join(cwd, '.git'))) {
    warn('No package.json or .git found. Make sure you are running this from your project root.');
    log('');
  }

  const commandsDest = path.join(cwd, '.cursor', 'commands');
  const commandsResult = copyDir(commandsSrc, commandsDest);

  if (commandsResult.copied.length > 0) {
    success(`Copied ${commandsResult.copied.length} commands → .cursor/commands/`);
    for (const f of commandsResult.copied) log(`  ${DIM}+ ${f}${RESET}`);
  }
  if (commandsResult.skipped.length > 0) {
    warn(`Skipped ${commandsResult.skipped.length} commands (already exist):`);
    for (const f of commandsResult.skipped) log(`  ${DIM}  ${f}${RESET}`);
  }

  log('');

  const rulesDest = path.join(cwd, '.cursor', 'rules');
  const rulesResult = copyDir(rulesSrc, rulesDest);

  if (rulesResult.copied.length > 0) {
    success(`Copied ${rulesResult.copied.length} rules → .cursor/rules/`);
    for (const f of rulesResult.copied) log(`  ${DIM}+ ${f}${RESET}`);
  }
  if (rulesResult.skipped.length > 0) {
    warn(`Skipped ${rulesResult.skipped.length} rules (already exist):`);
    for (const f of rulesResult.skipped) log(`  ${DIM}  ${f}${RESET}`);
  }

  log('');

  const totalCopied = commandsResult.copied.length + rulesResult.copied.length;
  const totalSkipped = commandsResult.skipped.length + rulesResult.skipped.length;

  if (totalCopied === 0 && totalSkipped > 0) {
    info('Nothing to do — all files already exist.');
  } else {
    log(`${GREEN}${BOLD}Done.${RESET} ${totalCopied} files added${totalSkipped > 0 ? `, ${totalSkipped} skipped` : ''}.`);
  }

  log('');
  log(`${BOLD}Next steps:${RESET}`);
  log(`  1. Open Cursor in this project`);
  log(`  2. Set Composer to ${BOLD}Agent mode${RESET}`);
  log(`  3. Type ${CYAN}/${RESET} to see available commands`);
  log('');
  log(`${DIM}Docs: https://github.com/its-d/cursor-config${RESET}`);
  log('');
}

init();