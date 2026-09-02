# Olive — Design System

**Olive** is a bar-based lecture series in Madrid: professors and experts give short talks in bars. This system covers the brand's visual language and its marketing website.

## Sources

- **Figma file:** `oliveseries.com.fig`, mounted read-only for this build. One page (`Page-1`) with four frames: `Cover` (5:453), `Styles` (4003:2618), `overlay / Desktop` (4012:865), `responsive_set / Desktop` (0:4).
- The file defines **zero Figma component sets**, **one Variable** (`Background`) and **zero named text styles**. Everything below is transcribed from the frames themselves — exact pixel values, no rounding, no snapping to a 4/8px grid.
- The sample content in the source belongs to an unrelated placeholder brand; only the *visual system* was taken from it. Copy here is written for Olive.

## No logo

The source contains **no drawn logo or brand mark**. The wordmark is type: Rubik Bubbles at 199/182px, or Rubik Black at 182/112/46px. Use `<Wordmark>` wherever a mark would go. Do not commission an SVG mark from this system without new source material.

---

## CONTENT FUNDAMENTALS

**Voice.** Flat, factual, slightly deadpan. Statements of fact do the emotional work; no adjectives are spent on excitement. "A lecture series in bars" is the whole pitch, and it is written exactly that way — lowercase article, no exclamation, no verb.

**Casing.** Two registers, strictly separated:
- **UPPERCASE** — everything set in Rubik: nav, headings, tile words, footer legal, the newsletter line. `ABOUT`, `DIRECTIONS`, `SIGN UP FOR OUR NEWSLETTER`, `OLIVE© 2026 ALL RIGHTS RESERVED`.
- **sentence case, often lowercase** — everything set in Fragment Mono: taglines, answers in the fact row, captions. `may 11th 20:00`, `a lecture in a bar`, `Calle de la Reina 16,  Madrid`.

**Person.** Mostly no person at all — labels and facts, not sentences. Where a sentence appears, it is "we/our" toward the reader ("Sign Up for our Newsletter", "Follow Us on Substack"). The manifesto statement speaks about the brand in the third person: "Olive is …".

**Sentence shapes to copy.**
- Fact row: a colon label, then a lowercase answer. `What:` / `a lecture in a bar`. `When:` / `may 11th 20:00`.
- Link labels: name the destination plainly. `Google Maps Link`, `Browse the Instagram`, `Follow Us on Substack`.
- Tile words: one noun. `Charlas`, `Ciencia`, `Filosofía`, `Historia`.
- Caption pair: thing + period, dimmed. `Poster` · `Mayo 26’` (curly apostrophe, not a straight quote).
- Manifesto: one long declarative sentence, 60px, centred, ending in a full stop.

**Punctuation quirks kept from the source.** Em dashes with no spaces (`No trends, no seasons—just…`); double space after a comma in addresses (`Calle de la Reina 16,  Madrid`); the copyright glyph glued to the name (`Olive© 2026`).

**Emoji: never.** No emoji, no unicode decorations, no exclamation marks. Spanish and English mix freely — Spanish for category nouns, English for interface labels.

---

## VISUAL FOUNDATIONS

**Colour.** Black on white, then a small set of flat, slightly dusty fills used one-per-tile: cream `#F8EDDE`, sage `#969F7D`, clay `#D3C8BA`, ink `#252525`, navy `#1B234B`, oxblood `#4F1212`, blush `#EEA6A6`, fog `#F1F1F1`, mist `#ECECEC`, periwinkle `#D7DCE7`. Two high-voltage accents exist and are almost never used: signal red `#CA1E08` and highlighter `#FFFF77`. Rules are a single hairline `#E9E9E9`. Never gradient a fill; the only gradient in the file is a flat 20% black scrim over photography.

**Type.** Two families, three jobs.

| Role | Family | Weight / style |
| --- | --- | --- |
| Wordmark, display, headings | **Inter** | 800 ExtraBold, **uppercase** |
| Body copy, statements | **Nunito** | Regular |
| Taglines, asides | **Nunito** | Regular *Italic* |
| Labels, timestamps, kickers, footer metadata | **Nunito** | 500–600 |

Sizes are unchanged from the source: wordmark 199/182/112/46px, headings 38/36/30/24/16px, statements 60 and 42px, labels 26/20/14/13/12px. Tracking is negative throughout (−1% to −2%). Line height 0.9 on the hero, 1.1 on headings, 1.2 default, 1.3 on statements and body, 1.4 on captions.

Italic is reserved: it marks a tagline or an aside, never emphasis inside a sentence. Uppercase is reserved too — only Inter is ever uppercased; Nunito labels stay uppercase only where they inherit a heading slot (nav, kickers, legal).

**Spacing.** Not a grid — literal values: 7, 10, 11, 13, 14, 16, 17, 20, 21, 22, 24, 30, 40, 43, 74, 80, 88, 100, 112, 157, 200. Page is 1280px wide with 22px top / 10px side / 20px bottom padding; content blocks cap at 1500px and centre; inline gutters are 30px. Grid gap is 10px. Tiles are 400px tall, 360px minimum wide, padded 21px vertical / 13px horizontal, and flex-grow to fill their row.

**Backgrounds.** White page, full stop. Depth comes from the tiles: flat colour, a photograph, or a cut-out object floating on colour. No patterns, no textures, no noise, no illustration. One full-bleed photograph sits above the footer at 386px tall.

**Imagery.** Warm, direct, flash-lit-looking photography and hard-edged PNG cut-outs of objects. Cut-outs use `contain` and float with air around them; scene photos use `cover` and bleed to the tile edge. Any photo carrying text gets `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))` over it — the system's only protection device. There are no capsules, no blurs, no backdrop-filters anywhere.

**Corners & borders.** Radius is 0 on every rectangle in the file. The single round object is the 103px palette dot (50%). Borders are always exactly 1px: `#E9E9E9` hairlines on spec labels, and a black `inset 0 0 0 1px` outline on the newsletter bar. Cards do not exist as a form — a "card" here is an unbordered, unrounded, unshadowed block of colour.

**Shadows.** None. No drop shadows, no inner shadows, no elevation model. Separation is done with colour blocks and 10px gaps.

**Transparency & blur.** Two uses only: 60% opacity on the secondary half of a caption pair, and the 20% black photo scrim. Blur is never used.

**Buttons.** There are none. The only affordances are underlined mono links, an outlined 160px newsletter bar, and tiles that are themselves links with an arrow-up-right in the corner.

**Motion & states.** The source is static, so keep motion minimal and honest: `opacity .15s linear` on links (hover 0.6, press 0.4). No scaling, no colour transitions, no bounce, no easing curves with personality. Overlays appear and disappear; they do not slide.

**Layout rules.** Nav is two words pushed to opposite edges — never centred, never a bar, never sticky. Hero wordmark is always full-width and centred. The fact row is always three equal columns. The grid wraps freely. Footer always ends with the wordmark and a two-corner legal row.

---

## ICONOGRAPHY

The source defines **exactly two marks**, both hairline vector strokes, both unfilled:

1. **arrow-up-right** — a diagonal line plus an L, in a square hit area. Every outbound link tile carries one at 48px; the newsletter bar carries one at 157px.
2. **close (X)** — two crossed strokes, 100px inside a 200px hit area, used once, to dismiss the About overlay. The raw vector is copied to `assets/icon-close.svg`.

There is no icon font, no icon library, no sprite sheet, and no third-party set (no Lucide, no Heroicons). **Do not add one** — if a new glyph is genuinely needed, draw it in the same language: 1px stroke, no fill, no rounded caps, sized inside a square that is roughly 2.4× the glyph. Emoji and unicode dingbats are never used.

Both marks ship as `<Icon name="arrow-up-right" | "close">`.

---

## Index

- `styles.css` — the entry point; imports everything below.
- `tokens/` — `fonts.css` (Google Fonts for all five families), `colors.css`, `typography.css` (tokens + `.olive-*` text-style classes), `spacing.css`, `base.css`.
- `assets/` — photography, PNG cut-outs, the cover image, `icon-close.svg`. All copied verbatim from the .fig.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — the reusable primitives, below.
- `ui_kits/website/` — the marketing-site recreation (`index.html`, `Home.jsx`, `About.jsx`, `README.md`).
- `SKILL.md` — Agent-Skills wrapper.

### Components

Derived from the repeated structures in the source frames (the file defines no Figma component sets, so these families ARE the source's inventory of repeated patterns):

| Group | Components |
| --- | --- |
| `components/brand/` | `Wordmark`, `SectionLabel`, `ColorDot` |
| `components/type/` | `Statement`, `FactRow` |
| `components/tiles/` | `TileGrid`, `ColorTile`, `ObjectTile`, `LinkTile`, `PhotoTile` |
| `components/media/` | `PhotoLink` |
| `components/layout/` | `NavBar`, `PageHeader`, `NewsletterBar`, `SiteFooter`, `Overlay` |
| `components/icons/` | `Icon` |

### Intentional additions

- **`Icon`** — a wrapper so the file's two loose vectors (arrow-up-right, close) have one API. No new glyphs were invented.
- **`TileGrid`** — the grid container is an unnamed frame in the source; it is promoted to a component because every tile depends on its 10px gap and wrap behaviour.

### Substitutions to confirm

- The type system was **redirected away from the source file's faces** at your instruction: Rubik / Rubik Bubbles / Fragment Mono / Figtree / Roboto Mono are replaced by **Inter** (display + headings, 800 uppercase) and **Nunito** (body, taglines, labels). Both load from **Google Fonts**; drop binaries in `assets/fonts/` and swap `tokens/fonts.css` for `@font-face` rules if self-hosting.
- Token names kept their original stems for compatibility: `--font-mono`, `--font-mono-alt` and `--font-ui` are now aliases onto `--font-body` / `--font-label`. Prefer `--font-display`, `--font-heading`, `--font-body`, `--font-label` in new work.
