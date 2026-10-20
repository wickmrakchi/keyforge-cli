# 🔑 KeyForge CLI (`keyforge`)

<p align="center">
  <img src="https://img.shields.io/badge/npm-v0.1.0-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm version">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20Linux%20%7C%20macOS-000000?style=for-the-badge" alt="Platform">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
</p>

<p align="center">
  <b>A powerful command-line tool to generate secret keys (SESSION, JWT, API, etc.) and save them with timestamp and type.</b>
</p>

<p align="center">
  <b>Open Source • Zero Dependencies • Ready for Production</b>
</p>

---

## ✨ Features

- 🔐 **Cryptographically secure** key generation using Node.js `crypto` module
- 🔑 Support multiple key types: **JWT**, **Session**, **API**, **Secret**
- ⚡ Shortcut flag `-c` instead of `--create`
- 💾 `-save` flag to append the key to `keys.txt` **and** automatically backup your `node_modules`
- 📅 Every saved key includes: **timestamp**, **key type**, and the **generated value**
- 📦 **Zero external dependencies** — uses only Node.js built-in modules
- 🌍 Works on Windows, Linux, and macOS
- 📄 MIT License

---

## 🚀 Installation

### From npm (Recommended)

```bash
npm install -g keyforge-cli
```

### From Source (Development)

```bash
git clone https://github.com/wickmrakchi/keyforge-cli.git
cd keyforge-cli
npm install
node bin/keyforge --create -jwt
```

### Link Globally (Local Development)

```bash
npm link
```

---

## 📖 Usage Examples

| Command | Description |
|---------|-------------|
| `keyforge --create -jwt` | Generate and display a JWT key |
| `keyforge -c -session` | Generate and display a session key (shortcut) |
| `keyforge -c -session -save` | Generate, display, save session key to `keys.txt`, and backup `node_modules` |
| `keyforge --create -api -save` | Generate, display, and save an API key + backup |
| `keyforge --create -secret -save` | Generate, display, and save a general secret key + backup |
| `keyforge -h` or `--help` | Show help message |
| `keyforge -v` or `--version` | Show version number |

### Output Example

```
🔑 Key (session): 4e4e6c50aaeed1bf193fbe1106fa891e40604391fdb55998cbdc9e5f9acd9b07
✅ Saved to keys.txt
📦 node_modules backed up to: .keyforge-cli/backups/backup_<timestamp>
```

---

## 📁 Where Files Are Created

| File / Folder | Location |
|---------------|----------|
| `keys.txt` | In the **current folder** where you run the command |
| `node_modules` backup | In your user home folder under `.keyforge-cli/backups/` |

### `keys.txt` Format

Each saved key is appended as a new line:

```
[2026-10-20 14:30:00] [session] 4e4e6c50aaeed1bf...
[2026-10-20 14:35:00] [jwt]     x7y8z9a1b2c3d4...
[2026-10-20 14:40:00] [api]     abc123def456ghi789...
```

Each line contains:
- **Timestamp**: Date and time of generation
- **Type**: `session`, `jwt`, `api`, or `secret`
- **Key**: The generated cryptographically secure string

---

## 📂 Project Structure

```
keyforge-cli/
├── package.json          # npm package metadata and bin entry
├── bin/
│   └── keyforge          # Executable CLI entry point
├── src/
│   └── index.js          # Core logic: key generation, parsing, saving, backup
├── .gitignore            # Git ignore rules
├── .npmignore            # npm publish exclusion rules
├── LICENSE               # MIT License
└── README.md             # This documentation
```

---

## 🔗 Links

- 📦 **npm Package**: [https://www.npmjs.com/package/keyforge-cli](https://www.npmjs.com/package/keyforge-cli)
- 🐙 **GitHub Repository**: [https://github.com/wickmrakchi/keyforge-cli](https://github.com/wickmrakchi/keyforge-cli)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on GitHub.

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

<p align="center">
  <img src="https://img.shields.io/badge/Mrakchi.dev-000000?style=for-the-badge" alt="Hamza Mrakchi">
</p>

<p align="center">
  <b>Hamza Mrakchi</b> — Full-Stack Developer & System Architect
</p>

<p align="center">
  <a href="https://github.com/wickmrakchi">
    <img src="https://img.shields.io/badge/GitHub-wickmrakchi-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://www.instagram.com/mrakchi_5/">
    <img src="https://img.shields.io/badge/Instagram-@mrakchi__5-E4405F?style=for-the-badge&logo=instagram" alt="Instagram">
  </a>
  <a href="mailto:hessamgrati@gmail.com">
    <img src="https://img.shields.io/badge/Email-hessamgrati@gmail.com-D14836?style=for-the-badge&logo=gmail" alt="Email">
  </a>
  <a href="https://www.paypal.com/paypalme/Essamgrati">
    <img src="https://img.shields.io/badge/PayPal-Support%20the%20Project-00457C?style=for-the-badge&logo=paypal&logoColor=white" alt="PayPal">
  </a>
  <a href="https://discord.gg/VyX7RTWxm4">
    <img src="https://img.shields.io/badge/Discord-wicks-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord">
  </a>
</p>

---

<p align="center">
  <img src="https://img.shields.io/badge/⭐_Star_this_repo_if_you_found_it_useful!-FFD700?style=for-the-badge" alt="Star">
</p>
