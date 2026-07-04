# 🌟 Camilla's Game Zone

A fun website by Camilla, built with SvelteKit, TypeScript, and KAPLAY.

## Tech Stack

| Layer | What we used |
|---|---|
| **Framework** | [SvelteKit](https://kit.svelte.dev/) — modern, fast, easy to learn |
| **Language** | [TypeScript](https://www.typescriptlang.org/) — typed JavaScript |
| **Game Engine** | [KAPLAY](https://kaplayjs.com/) — the fun 2D game library (successor of Kaboom) |
| **Deploy** | GitHub Pages via GitHub Actions |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server (open http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the build
npm run preview
```

## 📁 Project Structure

```
camilla/
├── src/
│   ├── routes/              # Pages (home, games, each game)
│   │   ├── +page.svelte     # Home page
│   │   ├── games/           # Games listing
│   │   │   └── dino/        # Dino Jumper game
│   ├── lib/
│   │   ├── games/           # Game logic files
│   │   └── index.ts         # Shared exports
├── static/                  # Images, sprites, sounds
├── .github/workflows/       # GitHub Actions deploy
├── svelte.config.js
├── vite.config.ts
└── package.json
```

## 🌐 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to your repo Settings → Pages
3. Set source to **GitHub Actions**
4. Push to `main` — the action builds & deploys automatically

Or do it manually:
```bash
npm run build
# Upload the build/ folder to any static host
```

## 🎮 Adding a New Game

1. Create a new game file in `src/lib/games/yourgame.ts`
2. Export a function like `launchYourGame(container)`
3. Create a page at `src/routes/games/yourgame/+page.svelte`
4. Add it to the games listing at `src/routes/games/+page.svelte`

Happy coding! 💖
