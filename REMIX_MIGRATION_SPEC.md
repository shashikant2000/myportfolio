# CRA → Remix Migration Spec

## Overview

Migrate the portfolio site from **Create React App (react-scripts 5)** to **Remix (v2)** with Vite. The app is a static portfolio with 6 routes, no backend API, and deploys to GitHub Pages.

---

## Effort Summary

| Area                        | Effort   | Hours (est.) |
|-----------------------------|----------|--------------|
| Project scaffolding & config| Low      | 2–3          |
| Route conversion (6 routes) | Low      | 2–3          |
| Layout & shared components  | Low      | 1–2          |
| Context → loader migration  | Low      | 2–3          |
| Styling (Tailwind + fonts)  | Low      | 1            |
| Third-party lib compat      | Medium   | 3–4          |
| SEO / meta tags             | Low      | 1–2          |
| Deployment (GH Pages)       | Medium   | 2–3          |
| Testing migration           | Low      | 1–2          |
| QA & polish                 | Medium   | 3–4          |
| **Total**                   | **Low–Medium** | **~18–26 hours** |

**Overall assessment:** This is a straightforward migration. The app has no backend, no auth, no complex state, and all data is static. The main friction points are (1) adapting client-only libraries (framer-motion, react-typed, tsparticles, react-countup) to work with SSR, and (2) configuring GitHub Pages deployment for a non-SPA framework.

---

## 1. Project Scaffolding

### Remove
- `react-scripts` (CRA)
- `src/index.js` (CRA entry point)
- `src/reportWebVitals.js`
- `public/index.html` (replaced by Remix `root.tsx`)
- `build/` directory
- `src/css/main.css` (compiled Tailwind output — Vite handles this)

### Add
- `@remix-run/node`, `@remix-run/react`, `@remix-run/serve`
- `vite`, `@remix-run/dev` (Remix Vite plugin)
- `vite.config.ts`

### Keep
- `tailwindcss`, `postcss`, `autoprefixer`, `@tailwindcss/forms`
- All runtime deps (framer-motion, react-icons, react-typed, etc.)

### Config changes
- `tailwind.config.js` → update `content` paths to `./app/**/*.{js,jsx,ts,tsx}`
- `postcss.config.js` → keep as-is (Vite uses it automatically)
- Remove `--openssl-legacy-provider` hacks from scripts
- Remove `homepage` field (not needed for Remix)

---

## 2. Directory Structure

```
app/
├── root.jsx              ← html shell, meta, dark mode, global CSS
├── entry.client.jsx      ← client hydration
├── entry.server.jsx      ← SSR rendering
├── routes/
│   ├── _index.jsx        ← Home  (currently src/pages/Home.jsx)
│   ├── projects._index.jsx ← Projects list
│   ├── projects.$slug.jsx  ← Single project (dynamic)
│   ├── about.jsx         ← About
│   ├── resume.jsx        ← Resume
│   ├── contact.jsx       ← Contact
│   └── $.jsx             ← 404 catch-all
├── components/           ← move from src/components/ (no changes needed)
│   ├── shared/
│   ├── about/
│   ├── projects/
│   ├── contact/
│   └── reusable/
├── context/              ← keep or replace with loaders
├── data/                 ← move from src/data/ (unchanged)
├── hooks/                ← move from src/hooks/
├── css/                  ← App.css (fonts), tailwind.css
├── fonts/                ← move from src/fonts/
└── images/               ← move from src/images/
public/
├── favicon.png
├── manifest.json
├── robots.txt
└── files/                ← downloadable files
```

---

## 3. Route Conversion

| Current (React Router)        | Remix File Route              | Loader needed? |
|-------------------------------|-------------------------------|----------------|
| `/` → `Home.jsx`             | `app/routes/_index.jsx`      | No (static data) |
| `/projects` → `Projects.jsx` | `app/routes/projects._index.jsx` | No |
| `/projects/:slug` → `ProjectSingle.jsx` | `app/routes/projects.$slug.jsx` | Yes (lookup by slug) |
| `/about` → `AboutMe.jsx`    | `app/routes/about.jsx`       | No |
| `/resume` → `Resume.jsx`    | `app/routes/resume.jsx`      | No |
| `/contact` → `Contact.jsx`  | `app/routes/contact.jsx`     | No |
| `*` → 404                   | `app/routes/$.jsx`           | No |

### Key changes
- **Remove `HashRouter`** — Remix uses file-based routing natively
- **Remove `React.lazy()` + `Suspense`** — Remix handles code splitting per route automatically
- **Remove `ScrollToTop` component** — use Remix's `<ScrollRestoration />` in root
- **Remove `LoadingSpinner` Suspense fallback** — Remix handles transitions

### Loader example (projects.$slug.jsx)
```jsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { projectsData } from "~/data/projects";

export function loader({ params }) {
  const project = projectsData.find(p => p.slug === params.slug);
  if (!project) throw new Response("Not Found", { status: 404 });
  return json(project.data);
}

export default function ProjectSingle() {
  const projectData = useLoaderData();
  // render ProjectHeader, ProjectGallery, ProjectInfo...
}
```

---

## 4. Layout & Shared Components

### root.jsx
Replaces `public/index.html` + `App.js`. Renders:
- `<html lang="en" class="dark">` (dark mode default)
- All `<meta>` tags (SEO, OG, Twitter — currently in index.html)
- CSS imports (`tailwind.css`, `App.css`)
- Font preloads
- `<AppHeader />`
- `<Outlet />` (Remix page content)
- `<AppFooter />`
- `<ScrollRestoration />`
- `<Scripts />`

### Components that move unchanged
All components in `src/components/` move to `app/components/` with **zero logic changes**:
- `AppHeader.jsx`, `AppFooter.jsx`, `AppBanner.jsx`
- `HireMeModal.jsx`, `BackToTop.jsx`
- All `about/`, `contact/`, `projects/`, `reusable/` components

Import paths change from `../components/...` to `~/components/...`.

---

## 5. Context → Loader Migration

| Context              | Migration path                              |
|----------------------|---------------------------------------------|
| `SingleProjectContext` | **Remove.** Replace with route `loader` in `projects.$slug.jsx`. Data lookup moves server-side. |
| `ProjectsContext`      | **Keep as client context.** Search/filter is client-side interactivity — loaders don't help here. |
| `AboutMeContext`       | **Remove.** Import `aboutMeData` and `clientsData` directly in `about.jsx` or use a loader. Data is static. |

---

## 6. Styling

### No major changes needed
- Tailwind works with Remix + Vite out of the box
- Import `tailwind.css` in `root.jsx` via `import "~/css/tailwind.css"`
- Import `App.css` (font-face declarations) in `root.jsx`
- Remove compiled `main.css` — Vite + PostCSS processes Tailwind at build time
- `darkMode: 'class'` — unchanged, `useThemeSwitcher` hook works as-is

### Font loading
Move `@font-face` declarations to `App.css` (already there). Font files in `app/fonts/` — reference with relative URLs or move to `public/fonts/`.

---

## 7. Third-Party Library Compatibility

| Library            | SSR-safe? | Migration action |
|--------------------|-----------|------------------|
| `framer-motion`    | Yes       | Works in Remix. No changes. |
| `react-icons`      | Yes       | No changes. |
| `react-typed`      | No        | Wrap in `ClientOnly` from `remix-utils`, or use `lazy` + `useEffect` pattern. |
| `react-countup`    | Partial   | Wrap in `ClientOnly` — uses `IntersectionObserver`. |
| `react-scroll`     | No        | Wrap in `ClientOnly` or replace with native `scrollIntoView`. |
| `@tsparticles/react` | No      | Wrap in `ClientOnly`. |
| `dompurify`        | No (needs DOM) | Use `isomorphic-dompurify` or run only client-side. |

### ClientOnly pattern
```jsx
import { ClientOnly } from "remix-utils/client-only";

<ClientOnly fallback={<div>Loading...</div>}>
  {() => <ReactTyped strings={[...]} />}
</ClientOnly>
```

---

## 8. SEO & Meta Tags

Remix provides `meta` exports per route — much better than a single `index.html`.

### root.jsx (global defaults)
```jsx
export const meta = () => [
  { charset: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "author", content: "Shashikant Kumar" },
  { property: "og:type", content: "website" },
];
```

### Per-route meta (e.g., projects.$slug.jsx)
```jsx
export const meta = ({ data }) => [
  { title: `${data.ProjectHeader.title} | Shashikant Kumar` },
  { name: "description", content: data.ProjectInfo.ObjectivesDetails },
];
```

This is an **upgrade** — currently all pages share the same meta from `index.html`.

---

## 9. Deployment (GitHub Pages)

### Challenge
GitHub Pages serves **static files only**. Remix is designed for a server runtime. Two options:

#### Option A: SPA Mode (Recommended)
Remix v2 supports [SPA Mode](https://remix.run/docs/en/main/guides/spa-mode) — generates a fully static client-rendered app, like CRA but with Remix routing.

```ts
// vite.config.ts
import { vitePlugin as remix } from "@remix-run/dev";

export default {
  plugins: [remix({ ssr: false })],
};
```

- Output: static `build/client/` directory → deploy to GH Pages
- No server needed
- Keeps current deployment flow (`gh-pages -d build/client`)
- Since all data is static, no SSR benefit is lost

#### Option B: Pre-rendering (Static Site)
Use a pre-rendering approach to generate HTML at build time. More complex setup, but provides real SSR benefits (SEO, faster first paint).

**Recommendation: Option A (SPA Mode)** — minimal friction, matches current architecture, zero deployment changes.

### Updated deploy scripts
```json
{
  "scripts": {
    "dev": "remix vite:dev",
    "build": "remix vite:build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build/client"
  }
}
```

---

## 10. Testing

| Current                     | Remix                                    |
|-----------------------------|------------------------------------------|
| Jest + React Testing Library| Same — compatible with Remix             |
| `react-scripts test`        | Use `vitest` (recommended with Vite) or keep Jest with config |
| 2 test files (Banner, Modal)| Update imports (`~/components/...`), wrap with `MemoryRouter` → `createRemixStub` |

### Recommended: Switch to Vitest
- Native Vite integration, faster than Jest
- Same API as Jest (mostly drop-in)
- Add `vitest`, `@testing-library/react`, `jsdom`

### Test migration scope
- 2 existing test files — minimal effort
- Update component import paths
- Replace router wrapping with `createRemixStub` or `MemoryRouter`

---

## 11. Migration Order (Step-by-Step)

1. **Scaffold Remix project** — `npx create-remix@latest`, copy vite/tailwind config
2. **Create `root.jsx`** — port `index.html` meta + `App.js` layout (header/footer)
3. **Move static assets** — fonts, images, public files
4. **Convert routes** — one route at a time, starting with `_index.jsx` (Home)
5. **Port components** — copy `components/` directory, fix import paths
6. **Wire up data** — move data files, create loaders where needed
7. **Handle client-only libs** — wrap react-typed, tsparticles, react-countup
8. **Port hooks** — `useThemeSwitcher`, `useScrollToTop` (if still needed)
9. **Remove contexts** — replace `SingleProjectContext` with loader, keep `ProjectsContext`
10. **Migrate tests** — update to vitest, fix imports
11. **Update deployment** — `gh-pages -d build/client`
12. **QA** — test all routes, dark mode, mobile responsiveness, animations

---

## 12. Risks & Considerations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Client-only libraries break in SSR | Medium | Use SPA mode (no SSR) or `ClientOnly` wrappers |
| GitHub Pages 404 handling | Low | Add `404.html` that redirects to `index.html` (same as current) |
| Tailwind class purging differences | Low | Vite + Tailwind JIT handles this — actually fixes current purge issues |
| framer-motion version | Low | v4 is old; consider upgrading to v11 during migration |
| Build size increase | Low | Remix + Vite produces smaller bundles than CRA |
| `react-scripts` removal breaks existing CI | Low | Update CI scripts to use `remix vite:build` |

---

## 13. Benefits of Migration

- **Faster builds** — Vite HMR vs CRA webpack (seconds vs minutes)
- **Per-route code splitting** — automatic, no manual `React.lazy()`
- **Per-route meta tags** — proper SEO for each page
- **File-based routing** — no manual route config in `App.js`
- **Tailwind JIT** — fixes current class purging issues (e.g., `flex-wrap` missing)
- **Modern tooling** — Vite, ESM, no OpenSSL legacy hacks
- **Future-proof** — CRA is unmaintained; Remix is actively developed

---

## Decision

This migration is **low-to-medium effort (~3–4 days)**. The app is simple, all data is static, and SPA mode eliminates SSR complexity. The biggest wins are faster dev experience, proper per-route SEO, and escaping the unmaintained CRA toolchain.
