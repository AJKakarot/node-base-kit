# node-base-kit

## What is this?

**node-base-kit** is a small command-line tool (CLI) you run in the terminal. It **creates a new folder** with a ready-made **Node.js API** using **Express** and **MongoDB** (Mongoose), so you do not have to set up the same files every time.

The generated project includes folders for routes, controllers, models, middleware, basic **sign up / log in** (with JWT), and a **MongoDB connection** helper.

## How does it work?

1. You run **`npx node-base-kit`** (after it is published on npm, or from a local clone with `npm link`).
2. The tool **asks you for a project name** (for example `my-api`).
3. It **creates a folder** with that name and **copies template files** into it (server, `src/` layout, `.env` examples, etc.).
4. It runs **`npm install`** inside that folder so dependencies are installed.
5. You open the folder, set **`.env`** (database URL and secret), start MongoDB, and run **`npm run dev`** to start the server.

So: **one command → new project folder → install deps → you add your features.**

## Quick start

```bash
npx node-base-kit
```

Then:

```bash
cd my-api
cp .env.example .env
# Put your MONGO_URI and JWT_SECRET in .env
npm run dev
```

You need **Node.js 18+** and a **MongoDB** database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

## Optional: `npm init`

If **`create-node-base-kit`** is on npm:

```bash
npm init node-base-kit
```

Same flow as above.

## Develop this CLI locally

```bash
git clone https://github.com/AJKakarot/node-base-kit.git
cd node-base-kit
npm link
npx node-base-kit
```

## License

MIT
