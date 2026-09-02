One-line: the full-screen About panel — a 200px close X at the top, then stacked 42px statements on black.

```jsx
<Overlay open={open} onClose={() => setOpen(false)} paragraphs={["…", "…"]} />
```

Needs a `position: relative` parent; it fills that box, not the viewport.
