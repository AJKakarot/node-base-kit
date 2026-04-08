# node-base-kit

CLI that scaffolds a **Express.js + MongoDB** backend: structured `src/`, Mongoose config in `src/config`, error handling, `asyncHandler`, and starter user routes (register / login / JWT).

## Requirements

- Node.js **18+**
- MongoDB (local or Atlas) for generated apps

## Usage

```bash
npx node-base-kit
```

Enter a project name when prompted. The tool creates a folder, writes all files, and runs **`npm install`** for you.

Then:

```bash
cd your-project-name
cp .env.example .env
# Edit .env: MONGO_URI, JWT_SECRET
npm run dev
```

## npm init (optional)

If you publish **`create-node-base-kit`** to npm:

```bash
npm init node-base-kit
```

## Local development

```bash
git clone https://github.com/AJKakarot/node-base-kit.git
cd node-base-kit
npm link
npx node-base-kit
```

## Publish to npm

1. Enable **2FA** on [npmjs.com](https://www.npmjs.com) (required to publish).
2. `npm login`
3. From repo root: `npm publish`
4. From `create-node-base-kit/`: `npm publish` (after `node-base-kit` is on the registry)

## License

MIT
