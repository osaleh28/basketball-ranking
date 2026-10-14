# Basketball Ranking Card

A simple React card asking "Who is the best basketball player?" Rank Kobe Bryant, Michael Jordan, and LeBron James in 1st, 2nd, and 3rd place.

Each player can occupy one spot. The Reset button clears all three selections.

## Open the page

Open `basketball-card.html` in your browser. This version loads React from a CDN and requires an internet connection.

## Run the React project

With Node.js installed:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To build the project, run `npm run build`.

## Files

- `src/App.jsx`: the React app and ranking card.
- `src/ranking.js`: player choices and ranking update logic.
- `src/styles.css`: page styling.
- `src/main.jsx`: React entry point.
- `standalone.js`: the React version that runs without a build step.
- `basketball-card.html`: ready-to-open page.

After changing `standalone.js` or the styles, regenerate the standalone page with:

```sh
node build-standalone.mjs
```

## Public webpage

The standalone build also creates `docs/index.html` for GitHub Pages. In the repository's Settings > Pages, select "Deploy from a branch", the `main` branch, and the `/docs` folder, then save.

For `osaleh28/basketball-ranking`, the expected page URL after deployment is https://osaleh28.github.io/basketball-ranking/.
