# Olive — oliveseries.com

Bar-based lecture series in Madrid. This repo is the live site, served via GitHub Pages.

## Structure

- `index.html` — English homepage (default, served at `/`)
- `es/index.html` — Spanish homepage (served at `/es/`)
- `styles.css` — shared stylesheet for both languages
- `assets/` — images used by both languages
- `CNAME` — tells GitHub Pages this repo serves `oliveseries.com`
- `.nojekyll` — required so GitHub doesn't run Jekyll processing on this repo (Jekyll silently ignores underscore-prefixed files by default)

Plain HTML/CSS, no build step, no framework. Both language pages are hand-edited directly — there's no templating between them.

## Editing content

- English copy → `index.html`
- Spanish copy → `es/index.html`
- Colors/fonts/spacing → `styles.css` (CSS variables at the top)

## Adding a new page

Copy the pattern used by `es/` — a new folder with its own `index.html`, referencing the shared root `styles.css` and `assets/` via relative paths (`../styles.css`, `../assets/...`).

## Deploying changes

Push to `main` (or upload via GitHub's web UI) → GitHub Pages rebuilds automatically, usually live within a minute. Check the **Actions** tab if a change doesn't appear.
