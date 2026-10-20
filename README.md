# KeyForge CLI (`keyforge`)

A command-line interface (CLI) tool to generate secret keys such as **SESSION**, **JWT**, **API**, and general secrets, and save them to a local `keys.txt` file with timestamp and type.

Open source and free for everyone.

---

## Features

- Generate cryptographically secure random keys using Node.js `crypto` module
- Support multiple key types: JWT, Session, API, Secret
- Shortcut flag `-c` instead of `--create`
- Optional `-save` flag to append the key to `keys.txt` **and backup `node_modules`**
- Each saved key includes: timestamp, key type, and the generated value
- Zero external dependencies (uses only Node.js built-in modules)
- MIT License

---

## Installation

### From npm (recommended)

```bash
npm install -g keyforge-cli
```

### From source (for development or self-hosting)

```bash
# Clone the repository
git clone https://github.com/wickmrakchi/keyforge-cli.git
cd keyforge-cli

# Install dependencies
npm install

# Run directly
node bin/keyforge --create -jwt
```

### Link globally (for local development)

```bash
npm link
```

After linking, you can use the `keyforge` command from any terminal:

```bash
keyforge --create -jwt
keyforge -c -session
keyforge -c -session -save
```

---

## Usage Examples

| Command | Description |
|---------|-------------|
| `keyforge --create -jwt` | Generate and display a JWT key |
| `keyforge -c -session` | Generate and display a session key (shortcut) |
| `keyforge -c -session -save` | Generate, display, save session key to `keys.txt`, and backup `node_modules` |
| `keyforge --create -api -save` | Generate, display, and save an API key + backup |
| `keyforge --create -secret -save` | Generate, display, and save a general secret key + backup |
| `keyforge -h` or `--help` | Show help message |
| `keyforge -v` or `--version` | Show version number |

### Output example

```
🔑 Key (session): 4e4e6c50aaeed1bf193fbe1106fa891e40604391fdb55998cbdc9e5f9acd9b07
✅ Saved to keys.txt
📦 node_modules backed up to: .keyforge-cli/backups/backup_<timestamp>
```

### Where files are created

| File/Folder | Location |
|-------------|----------|
| `keys.txt` | In the current folder where you run the command |
| `node_modules` backup | In your user home folder under `.keyforge-cli/backups/` |

Each line in `keys.txt`:
```
[2026-10-20 14:30:00] [session] 4e4e6c50aaeed1bf...
[2026-10-20 14:35:00] [jwt]     x7y8z9a1b2c3d4...
```

Each line contains:
- **Timestamp**: Date and time of generation
- **Type**: `session`, `jwt`, `api`, or `secret`
- **Key**: The generated cryptographically secure string

---

## Project Structure

```
keyforge/
├── package.json          # npm package metadata and bin entry
├── bin/
│   └── keyforge          # Executable CLI entry point
├── src/
│   └── index.js          # Core logic: key generation, parsing, saving, backup
├── .gitignore            # Git ignore rules
├── LICENSE               # MIT License
└── README.md             # This documentation
```

---

## Source Code

The source code is available on GitHub: https://github.com/wickmrakchi/keyforge-cli

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on GitHub.

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Made with ❤️ for the open-source community.
