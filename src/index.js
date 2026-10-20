#!/usr/bin/env node
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const os = require('os');

const OUTPUT_FILE = path.join(process.cwd(), 'keys.txt');
const BACKUP_ROOT = path.join(os.homedir(), '.keyforge-cli', 'backups');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyDirRecursive(src, dest) {
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function backupNodeModules() {
  const nm = path.join(process.cwd(), 'node_modules');
  if (!fs.existsSync(nm)) {
    console.log('⚠️  node_modules not found in current folder, skipping backup.');
    return null;
  }

  ensureDir(BACKUP_ROOT);
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\..+/, '')
    .slice(0, 14);
  const backupDir = path.join(BACKUP_ROOT, `backup_${timestamp}`);

  copyDirRecursive(nm, backupDir);
  return backupDir;
}

function showHelp() {
  console.log(`
KeyForge CLI - Secret Key Generator

Usage:
  keyforge --create -jwt          Generate a JWT key
  keyforge -c -session            Generate a session key (shortcut)
  keyforge -c -session -save      Generate and save the key to keys.txt + backup node_modules
  keyforge --create -api          Generate an API key
  keyforge --create -secret       Generate a general secret key

Options:
  -c, --create   Start the generation command
  -jwt           Key type: JWT
  -session       Key type: Session
  -api           Key type: API
  -secret        Key type: Secret
  -save          Save the key to keys.txt and backup node_modules
  -h, --help     Show this help message
  -v, --version  Show version
`);
}

function generateKey(type) {
  switch (type) {
    case 'jwt':
      return crypto.randomBytes(32).toString('base64url');
    case 'session':
      return crypto.randomBytes(32).toString('hex');
    case 'api':
      return crypto.randomBytes(24).toString('base64url');
    case 'secret':
      return crypto.randomBytes(48).toString('hex');
    default:
      return crypto.randomBytes(32).toString('hex');
  }
}

function saveKey(type, key) {
  const now = new Date();
  const timestamp = now.toISOString().replace('T', ' ').substring(0, 19);
  const line = `[${timestamp}] [${type}] ${key}\n`;
  fs.appendFileSync(OUTPUT_FILE, line, { encoding: 'utf8' });
  return line;
}

const args = process.argv.slice(2);
let command = null;
let type = null;
let save = false;

for (const arg of args) {
  const a = arg.toLowerCase();
  if (a === '--create' || a === '-c') {
    command = 'create';
  } else if (a === '--jwt' || a === '-jwt') {
    type = 'jwt';
  } else if (a === '--session' || a === '-session') {
    type = 'session';
  } else if (a === '--api' || a === '-api') {
    type = 'api';
  } else if (a === '--secret' || a === '-secret') {
    type = 'secret';
  } else if (a === '--save' || a === '-save') {
    save = true;
  } else if (a === '--help' || a === '-h') {
    showHelp();
    process.exit(0);
  } else if (a === '--version' || a === '-v') {
    console.log('KeyForge v0.1.1');
    process.exit(0);
  }
}

if (!command) {
  showHelp();
  process.exit(1);
}

if (!type) {
  console.error('Please specify a key type: -jwt, -session, -api, or -secret');
  process.exit(1);
}

const key = generateKey(type);
console.log(`🔑 Key (${type}): ${key}`);

if (save) {
  saveKey(type, key);
  console.log('✅ Saved to keys.txt');

  const backupDir = backupNodeModules();
  if (backupDir) {
    console.log(`📦 node_modules backed up to: ${backupDir}`);
  }
}
