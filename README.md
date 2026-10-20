# KeyForge CLI (`keyforge`)

A command-line interface (CLI) tool to generate secret keys such as **SESSION**, **JWT**, **API**, and general secrets, and save them to a local `keys.txt` file with timestamp and type.

Open source and free for everyone.

---

## Features

- Generate cryptographically secure random keys using Node.js `crypto` module
- Support multiple key types: JWT, Session, API, Secret
- Shortcut flag `-c` instead of `--create`
- Optional `-save` flag to append the key to `keys.txt`
- Each saved key includes: timestamp, key type, and the generated value
- Zero external dependencies (uses only Node.js built-in modules)
- MIT License

---

## Installation

### Local usage (without publishing)

```bash
# Navigate to the project folder
cd ""

# Install dependencies (none required, just Node.js)
npm install

# Run the tool directly
node bin/keyforge --create -jwt
```

### Global usage (run from anywhere)

```bash
# Link the binary globally
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
| `keyforge -c -session -save` | Generate, display, and save session key to `keys.txt` |
| `keyforge --create -api -save` | Generate, display, and save an API key |
| `keyforge --create -secret -save` | Generate, display, and save a general secret key |
| `keyforge -h` or `--help` | Show help message |
| `keyforge -v` or `--version` | Show version number |

### Output example

```
🔑 Key (session): 4e4e6c50aaeed1bf193fbe1106fa891e40604391fdb55998cbdc9e5f9acd9b07
✅ Saved to keys.txt
```

### `keys.txt` format

Each saved key is appended as a new line in `keys.txt`:

```
[2026-10-19 14:30:00] [session] 4e4e6c50aaeed1bf193fbe1106fa891e40604391fdb55998cbdc9e5f9acd9b07
[2026-10-19 14:35:00] [jwt]     x7y8z9a1b2c3d4e5f6g7h8i9j0k1l2m3
[2026-10-19 14:40:00] [api]     abc123def456ghi789jkl012mno345pqr
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
│   └── index.js          # Core logic: key generation, parsing, saving
├── .gitignore            # Git ignore rules
├── LICENSE               # MIT License
└── README.md             # This documentation
```

---

## Publishing to GitHub

```bash
cd ""

git init
git add .
git commit -m "Initial release: KeyForge CLI key generator"
git branch -M main
git remote add origin https://github.com/wickmrakchi/keyforge-cli.git
git push -u origin main
```

Replace `wickmrakchi` with your actual GitHub username.

---

## Publishing to npm

The package name `keyforge-cli` is currently available on npm.

```bash
npm login
npm publish
```

If `keyforge-cli` is taken by the time you publish, change the `"name"` field in `package.json` to an available name and try again.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on GitHub.

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

Made with ❤️ for the open-source community.
