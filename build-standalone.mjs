import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const styles = readFileSync(new URL('./src/styles.css', import.meta.url), 'utf8');
const script = readFileSync(new URL('./standalone.js', import.meta.url), 'utf8');
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Courtside - Basketball Rankings</title>
<style>${styles}</style>
</head>
<body>
<div id="root"><p style="padding: 30px; font-family: sans-serif">Loading your basketball ranking card... If this message remains, check your internet connection and reload the page.</p></div>
<script crossorigin src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script crossorigin src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script>${script}</script>
</body>
</html>
`;
writeFileSync(new URL('./basketball-card.html', import.meta.url), html, 'utf8');
mkdirSync(new URL('./docs/', import.meta.url), { recursive: true });
writeFileSync(new URL('./docs/index.html', import.meta.url), html, 'utf8');
writeFileSync(new URL('./docs/.nojekyll', import.meta.url), '', 'utf8');
