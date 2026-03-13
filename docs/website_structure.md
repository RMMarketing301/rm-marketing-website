# Website Structure

## Project type
Static marketing website with three HTML pages, one shared stylesheet, one shared script, and root-level image assets.

## Root pages

### `index.html`
- Primary landing page and main entry point.
- Loads `style.css`, `script.js`, Google Fonts, and `favicon.png`.
- Contains anchored sections: `#inicio`, `#servicios`, `#paquetes`, `#puntuales`, `#sobre`, and `#contacto`.
- Includes the main contact form posting to Formspree at `https://formspree.io/f/maqpwkbo`.
- Links to `politica.html` from the footer.
- Uses these image assets: `logo.png`, `Cityview.JPG`, `Analisis.jpg`, `Lupeconcamara.PNG`, `Daniel.png`, `Lupe2.PNG`, `favicon.png`.

### `gracias.html`
- Standalone thank-you / successful payment page.
- Loads `style.css`, Google Fonts, and `favicon.png`.
- Contains page-specific inline styles in a `<style>` block.
- Reuses the main brand logo and links back into sections of `index.html`.
- Uses these image assets: `logo.png`, `favicon.png`.

### `politica.html`
- Standalone privacy and personal data policy page.
- Loads `style.css` and Google Fonts.
- Contains page-specific inline styles in a `<style>` block.
- Reuses the main brand logo and links back into sections of `index.html`.
- Uses these image assets: `logo.png`.

## Shared code files

### `style.css`
- Global stylesheet for layout, branding, buttons, sections, footer, mobile nav, animations, and responsive behavior.
- Defines shared CSS variables in `:root`.
- Supports page-specific markup used by `index.html`, `gracias.html`, and `politica.html`.

### `script.js`
- Handles fixed-nav scroll state.
- Handles mobile navigation open/close behavior via `.nav-toggle`, `.nav-links`, and the `nav-open` class.
- Adds IntersectionObserver-based reveal animation classes to cards, packages, chips, images, blockquotes, and titles.

## Image assets

### `logo.png`
- Brand logo shown in site navigation.
- Used by `index.html`, `gracias.html`, and `politica.html`.

### `favicon.png`
- Browser tab icon.
- Used by `index.html` and `gracias.html`.

### `Cityview.JPG`
- Hero banner image on `index.html`.

### `Analisis.jpg`
- Strategy / analysis section image on `index.html`.

### `Lupeconcamara.PNG`
- Main team image in the About section on `index.html`.

### `Daniel.png`
- Team sub-image in the About section on `index.html`.

### `Lupe2.PNG`
- Team sub-image in the About section on `index.html`.

## Notes for future agents
- All runtime website files currently live at the project root.
- The `docs/`, `system/`, and `config/` folders are support folders and are not part of the website runtime.
- Preserve current root-relative file paths unless a broader restructuring is explicitly requested.
