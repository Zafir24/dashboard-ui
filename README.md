# Dashboard UI

A modern, component-driven analytics dashboard built with VueJs, TypeScript, Tailwind CSS, and ApexCharts.

This project is designed for both developer experience (Storybook + reusable UI components) and real-world deployment (subpath hosting like `/Dashboard-UI/`).

## Features

- Reusable UI component library (buttons, lists, cards, table, menu, avatar, input)
- Data visualization with ApexCharts
- Responsive dashboard layout with sticky sidebar navigation
- Login page with username-only entry flow
- Lightweight auth store (`authStore`) using `localStorage`
- Redirect flow: Login -> Dashboard
- Logout from dashboard profile menu -> Login
- Storybook setup for component development and documentation
- Production-ready Vite build configured for subpath deployment

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Tailwind CSS
- Storybook
- ApexCharts (`vue3-apexcharts`)
- Reka UI
- Class Variance Authority (cva) 

## Getting Started

### Prerequisites

- Node.js `^22.18.0` or `>=24.12.0`
- npm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Type-check and build production assets
- `npm run preview` - Preview production build locally
- `npm run lint` - Run configured linters
- `npm run test:e2e` - Run Playwright end-to-end tests
- `npm run storybook` - Start Storybook locally
- `npm run build-storybook` - Build Storybook static files

## Project Structure

```text
src/
  components/
    Login/
      Login.vue
      Login.stories.ts
    dashboard-ui/
      Dashboard.vue
    avatar/
    button/
    card/
    chart/
    input/
    list/
    menu/
    table/
  router/
    index.ts
  stores/
    authStore.ts
  assets/
```

## App Routes

- `/` -> redirects to `/login`
- `/login` -> Login page
- `/dashboard` -> Dashboard page

## Login and Store Flow

- User enters a name on the Login page and clicks Continue.
- Continue button is disabled when the input is empty.
- Username is saved in `localStorage` through `src/stores/authStore.ts`.
- User is redirected to `/dashboard` after successful submit.
- Dashboard reads the stored username and shows it in the welcome message.
- Logout menu action clears the stored username and routes back to `/login`.

## Deployment

### Deploy Dashboard Under `/Dashboard-UI/`

This project is configured with:

- `base: '/Dashboard-UI/'` in `vite.config.ts`

Build and upload:

```bash
npm run build
```

Upload the contents of `dist/` into your hosting directory:

```text
public_html/Dashboard-UI/
```

Final URL example:

```text
https://www.example.com/Dashboard-UI/
```

### SPA Rewrite (Apache / cPanel / FastHosts)

Create `public_html/Dashboard-UI/.htaccess`:

```apacheconf
RewriteEngine On
RewriteBase /Dashboard-UI/
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /Dashboard-UI/index.html [L]
```

## Storybook Publishing

Build Storybook:

```bash
npm run build-storybook
```

Upload `storybook-static/` contents to something like:

```text
public_html/storybook/
```

Then access:

```text
https://www.example.com/storybook/
```

## Notes

- Build logs may show `INVALID_ANNOTATION` warnings from dependencies. These are non-fatal and do not block deployment.
