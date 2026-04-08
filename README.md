# node-base-kit

Scaffold a new **Express.js** and **MongoDB** (Mongoose) API from the terminal: folder layout, env samples, error handling, `asyncHandler`, and starter user routes (register, login, JWT).

**Requirements:** Node.js 18 or newer. Generated apps need a MongoDB instance (local or hosted).

## Benefits (simple)

- **Saves time:** You skip repeating the same Express and Mongo setup for every small project or assignment.
- **Clear structure:** You see how routes, controllers, models, and middleware fit together in a real-style API.
- **Less setup mistakes:** Scripts, `.env` samples, and basic error handling are already in place.
- **Room to practice:** You can focus on adding features, APIs, or database ideas instead of boilerplate.

## Helpful for placement and interview prep

- **Portfolio projects:** You can spin up a backend quickly and spend energy on what makes your project interesting on a resume or GitHub.
- **Concepts you can explain:** The generated code touches REST APIs, JWT auth, Mongoose models, middleware, and environment-based config. Interviewers often ask about these topics for backend or full-stack roles.
- **Hands-on revision:** Run the scaffold, read the files line by line, change behavior, and break things on purpose. That kind of practice is easier than starting from a blank folder.
- **Talking points:** You can describe how you structure an API, handle errors, and connect to MongoDB using a concrete project you built or extended.

## Installation

You do not need to install this package globally. Use `npx`:

```bash
npx node-base-kit
```

To install as a dev dependency in an existing repo (unusual for a scaffold CLI):

```bash
npm install node-base-kit --save-dev
```

## Usage

Run the CLI and enter a project name when prompted:

```bash
npx node-base-kit
```

It creates a directory with that name, writes the template files, and runs `npm install` inside it.

Then:

```bash
cd your-project-name
cp .env.example .env
```

Edit `.env` and set at least `MONGO_URI` and `JWT_SECRET`. Start MongoDB, then:

```bash
npm run dev
```

The server listens on the port in `.env` (default 3000). Try `GET /health`.

## What you get

Rough layout of the generated project:

- `server.js` – Express app, middleware, routes, listen
- `src/config/db.js` – MongoDB connection
- `src/routes`, `src/controllers`, `src/models` – example user module
- `src/middlewares` – 404 and error handler
- `src/utils/asyncHandler.js` – wrap async route handlers
- `.env.example`, `.gitignore`, `package.json` with `dev` / `start` scripts

## npm init

If the package `create-node-base-kit` is published, you can run:

```bash
npm init node-base-kit
```

Same behavior as `npx node-base-kit`.

## CLI development (from source)

```bash
git clone https://github.com/AJKakarot/node-base-kit.git
cd node-base-kit
npm link
npx node-base-kit
```

## Repository

Source and issues: [github.com/AJKakarot/node-base-kit](https://github.com/AJKakarot/node-base-kit)

## License

MIT
