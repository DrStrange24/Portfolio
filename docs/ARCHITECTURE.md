# Architecture

## Component Flow

- src/index.tsx mounts the app and loads src/index.scss.
- src/App.tsx composes global providers and renders the Home page plus Toasts.
- src/pages/Home.tsx lays out the navigation and section components in order.

## Providers

- ThemeProvider
  - Stores a user theme choice in localStorage.
  - Resolves system theme when set to "system".
  - Applies data-theme on the document element for CSS variables.
- SpinnerProvider
  - Exposes show/hide helpers for a global blocking spinner.
  - Renders a full-screen overlay when active.

## Data Flow

- UI sections are data-driven via src/data/*.ts files.
- Components map over data arrays to render content cards and lists.
- No server or global state manager is used; state is limited to UI helpers.

## Styling and Theming

- src/styles/variables.scss defines CSS variables for light and dark themes.
- src/styles/global.scss applies layout styles and theme-aware colors.
- ThemeProvider toggles the data-theme attribute to switch theme tokens.

## Notifications

- Toasts are rendered once at the app root (src/components/Toast.tsx).
- The toast theme is synchronized with the resolved theme.
