# Content Rules

## Editing pages
- Read `docs/website_structure.md` before changing any HTML, CSS, or JS.
- Make focused edits that preserve the current static-site architecture and root-level file paths.
- Keep Spanish marketing copy, section flow, and current navigation anchors unless the task explicitly requires structural changes.
- Preserve working links, especially `index.html` anchor links, the Formspree form action, WhatsApp links, email links, and `politica.html`.
- If a page has inline styles (`gracias.html`, `politica.html`), edit them carefully and avoid duplicating rules that already exist in `style.css`.

## Naming conventions
- Keep existing filenames unchanged unless explicitly instructed otherwise.
- Use lowercase kebab-case for any new documentation or support files, for example `new-guide.md`.
- Reuse existing HTML IDs and CSS class names when extending current sections.
- For new non-runtime documentation, store prompts in `system/`, site docs in `docs/`, and project configuration notes in `config/`.

## Asset placement
- Do not move current assets from the project root.
- If new website assets are ever added, place them in a clearly named asset folder only when a full asset migration is requested; otherwise keep compatibility with the current root-based paths.
- Document every new asset in `docs/website_structure.md` with its filename, purpose, and page usage.

## Keeping the structure clean
- Avoid adding duplicate pages, duplicate styles, or parallel versions of the same component without a clear reason.
- Prefer updating shared styles in `style.css` over scattering repeated inline CSS, unless a page is intentionally self-contained.
- Prefer small JS changes that keep existing selectors and behavior stable.
- Keep support documentation current whenever page structure, links, assets, or editing rules change.
