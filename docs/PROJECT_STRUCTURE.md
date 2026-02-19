# Project Structure

## Top Level

- public/ - Static assets and HTML shell.
- src/ - Application source.
- docs/ - Project documentation.
- package.json - Dependencies and scripts.
- tsconfig.json - TypeScript configuration.

## src/

- App.tsx - Root component wiring providers and routes.
- index.tsx - ReactDOM bootstrap and global styles.
- pages/ - Page-level composition (Home).
- components/ - UI sections and shared UI helpers.
- data/ - Content data for sections (projects, work experience, etc.).
- styles/ - Global SCSS and theme variables.
- assets/ - Images and static media.
- utils/ - Shared utilities (date formatting).

## Key Files

- src/components/ThemeProvider.tsx - Theme context and system-theme handling.
- src/components/SpinnerProvider.tsx - Global spinner overlay.
- src/components/Toast.tsx - Toast container with theme sync.
- src/components/Contact.tsx - Contact section and EmailJS feedback form.
- src/data/*.ts - Site content data sources.
