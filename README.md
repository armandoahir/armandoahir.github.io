# arma's webpage

Personal site. Books read, birds spotted, countries visited.  
No frameworks, no build step, no tracking. Just HTML, CSS, and a bit of JS.

→ **[armandoahir.github.io](https://armandoahir.github.io)**

---

## Structure

```
.
├── index.html
├── about.html
├── books.html
├── birding-list.html
├── places.html
├── css/
│   └── style.css
└── assets/
    ├── js/
    │   ├── components.js   ← shared nav + footer (edit here)
    │   ├── books.js        ← book entries data
    │   ├── birds.js        ← bird entries data
    │   └── places.js       ← places entries data
    └── media/
        └── ...
```

## How it works

**Nav and footer are centralised** in `assets/js/components.js`. Every page loads it at the top of `<body>` — it injects the nav, highlights the active link, and appends the footer (with current year and a monthly visit counter via `localStorage`). To change the nav or footer across the whole site, edit that one file.

Each page declares its identity via a `data-page` attribute on `<body>`:

```html
<body data-page="about">
<script src="assets/js/components.js"></script>
```

Content data (books, birds, places) lives in separate JS files under `assets/js/` and is rendered client-side.

## Adding a new page

1. Create `yourpage.html`.
2. Add `data-page="yourpage"` to `<body>`.
3. Load `components.js` as the first script inside `<body>`.
4. If you want the page linked in the nav, add an entry to the `links` array in `components.js`.

## Stack

- Vanilla HTML/CSS/JS — no dependencies
- [Lora](https://fonts.google.com/specimen/Lora) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- Hosted on GitHub Pages

## License

Content is mine. Do whatever you want with the code.
