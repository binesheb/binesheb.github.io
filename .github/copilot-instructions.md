# AI Coding Guidelines - binesheb.github.io

## Project Overview
This is a personal portfolio website ("Selfer" theme) built as a static single-page application. It uses **Bootstrap 4** for layout, **PostCSS** for styling, and **jQuery** for interactivity.

## Architecture & Key Patterns

### Styling System
- **PostCSS workflow**: Styles compiled from `assets/pcss/style.pcss` → CSS
- **Config**: [assets/pcss/postcss.config.js](../assets/pcss/postcss.config.js) includes autoprefixer, nesting, mixins, and sass-color-functions
- **Structure**: 
  - `components/` — UI components (buttons, cards, hero, navbar, etc.)
  - `helpers/` — Utility classes for spacing, colors, animations, positioning (`ts-*` prefix)
  - `template-specific/` — Page-specific styling
- **Naming convention**: `.ts-*` prefix for custom classes (e.g., `.ts-block`, `.ts-circle__sm`)
- **Bootstrap integration**: Used for grid, responsive utilities (position-absolute, ml-3, mb-4, etc.)

### HTML & Data Attributes
- **Data-driven styling**: Custom JS reads `data-*` attributes for dynamic backgrounds/effects:
  - `data-bg-color`, `data-bg-image`, `data-bg-size`, `data-bg-position`, `data-bg-blend-mode`
  - `data-bg-particles-line-color`, `data-bg-particles-dot-color`, `data-bg-parallax`
  - `data-animate` — triggers scroll animations (via `scrolla` plugin)
- **Page structure**: Single-page with sections (hero, expertise, about, portfolio, testimonials, contact)
- **Scroll navigation**: Links use `#` anchors; `.ts-scroll` class for smooth scrolling behavior

### JavaScript Architecture
- **Location**: [assets/js/](../assets/js/) — document-ready jQuery patterns, no framework
- **Key files**:
  - [custom.js](../assets/js/custom.js) — Main interactivity (backgrounds, particles, animations, form validation)
  - [custom.hero.js](../assets/js/custom.hero.js) — Hero section full-screen height
- **Plugin dependencies**: jquery.particleground (particles effect), scrolla (scroll animations), magnific-popup (lightbox), owl.carousel (sliders), odometer (number counters)
- **Key behaviors**:
  - Hero title rotation animation (3s interval, 800ms transition)
  - Viewport-triggered animations via `isInViewport()` plugin
  - Particle backgrounds initialized on elements with particle data attributes
  - Form validation with jQuery.validate

## Development Workflow

### CSS Compilation
PostCSS processes `assets/pcss/style.pcss` into `assets/css/style.css`. When modifying PCSS:
1. Edit files in `assets/pcss/` (components/ or helpers/)
2. Run PostCSS build (check for build scripts in project root or use postcss CLI)
3. Compiled output goes to `assets/css/style.css`

### Adding New Sections
- Create component PCSS file in `components/` or inline in [style.pcss](../assets/pcss/style.pcss)
- Use `.ts-*` prefix for custom classes
- Add HTML section to [index.html](../index.html) with proper anchor ID for navigation
- Link jQuery interactions if needed in [custom.js](../assets/js/custom.js)

### Common Modifications
- **Change colors**: Edit CSS variable or specific class (e.g., `#f26c4f` is primary orange)
- **Adjust spacing**: Use Bootstrap or `.ts-padding__*`, `.ts-margin__*` helpers
- **Add animations**: Use `[data-animate]` attribute; configure in scrolla plugin call
- **Add particles effect**: Add `data-bg-particles-line-color` and `data-bg-particles-dot-color` to element

## File Organization
- `index.html` — Main single page (1075 lines)
- `assets/css/` — Compiled stylesheets
- `assets/pcss/` — Source PostCSS files (~20 components, ~20 helpers)
- `assets/js/` — jQuery scripts and vendor plugins
- `assets/bootstrap/` — Bootstrap 4 CSS/JS files
- `assets/font-awesome/` — Font Awesome 5 icons
- `documentation/` — Separate docs site

## Critical Details
- **Responsive design**: Bootstrap classes + custom `.ts-*` helpers handle breakpoints
- **Smooth scrolling**: Handled by custom JS binding `.ts-scroll` links to anchor navigation
- **Performance**: Lazy images with `imagesLoaded` plugin; parallax disabled on mobile
- **No build step required**: PostCSS config exists but HTML/JS run as-is once CSS compiled
