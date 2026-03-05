# CLAUDE.md — Reytek Alta Costura Dental

Guidance for AI assistants working in this repository.

## Project Overview

**Reytek** is a premium dental laboratory landing page targeting specialist dentists in Mexico. The site positions Reytek as an elite clinical partner with 40 years of expertise. Content is in Spanish.

- **Package name:** `reytek-alta-costura-dental` v1.5.2
- **Type:** Single-page marketing/landing application
- **Stack:** React 18 + TypeScript + Vite + Three.js

---

## Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Production build → dist/
npm run build

# Preview production build locally
npm run preview
```

There is no test runner. There are no lint or format scripts configured.

---

## Architecture

### Entry Points

| File | Purpose |
|------|---------|
| `index.html` | HTML shell — loads Tailwind CDN, Google Fonts, CSS variables |
| `index.tsx` | React 18 root mount with StrictMode |
| `App.tsx` | Top-level component; manages scroll state; composes all sections |

### Component Layout (render order in `App.tsx`)

```
Header          – Fixed navigation; receives isScrolled prop for glass effect
Hero            – Full-viewport CTA with SVG precision pattern overlay
TrustBar        – Credibility indicators
WhyReytek       – Value propositions
Difference      – Competitive differentiators
Testimonial     – Client social proof
Process         – Service workflow steps
DigitalSection  – Interactive 3D crown model (Three.js canvas)
Certifications  – Credentials display
CTASection      – Conversion call-to-action
Footer          – Company info, links, contact
WhatsAppFloat   – Persistent floating WhatsApp widget
```

All components are stateless functional components exported as named exports, except `App` (default export) and `Header` (receives `isScrolled: boolean` prop).

### 3D Visualization (`components/DigitalSection.tsx`)

- Uses `@react-three/fiber` Canvas with `@react-three/drei` helpers
- `CrownModel` builds a procedural dental crown via `THREE.Shape` + `ExtrudeGeometry`, memoized with `useMemo`
- `OrbitControls` with `autoRotate` enabled; pan disabled; distance clamped to [3, 8]
- Wrapped in `<Suspense>` with a custom `ModelLoading` fallback component

---

## Tech Stack

| Technology | Version | Role |
|------------|---------|------|
| React | 18.3.1 | UI library |
| TypeScript | 5.6.3 | Type checking |
| Vite | 6.0.0 | Dev server + bundler |
| Three.js | 0.169.0 | 3D graphics |
| @react-three/fiber | 8.17.10 | React renderer for Three.js |
| @react-three/drei | 9.114.0 | Three.js helper components |
| @google/genai | 1.37.0 | Google Generative AI SDK (present but unused) |
| Tailwind CSS | CDN | Utility-first CSS (loaded from CDN, not built) |
| terser | 5.37.0 | JS minifier for production builds |

---

## Styling Conventions

### CSS Custom Properties (defined in `index.html`)

```css
--navy: #0a1628         /* Dark primary background */
--navy-light: #1a2d4a   /* Lighter navy */
--gold: #c9a962         /* Primary accent */
--gold-light: #dfc78a   /* Lighter gold */
--cream: #faf9f7        /* Page background */
--cream-dark: #f0ede8   /* Slightly darker cream */
--white: #ffffff
--text: #2c3e50         /* Primary body text */
--text-light: #64748b   /* Secondary/muted text */
```

Always use these variables instead of hardcoded hex values for brand colors.

### Typography

- **Serif font:** `Cormorant Garamond` — used for headings, display text, large numbers
- **Sans font:** `Outfit` — used for body text, labels, UI elements
- Luxury kerning class: `kerning-luxury` (letter-spacing: 0.3em)
- Section labels follow pattern: `text-[10px] uppercase tracking-[0.6em] text-slate-400 font-bold mb-10 italic`

### Utility Classes

| Class | Effect |
|-------|--------|
| `.glass-effect` | White semi-transparent background with backdrop blur |
| `.technical-grid` | Radial dot grid background pattern |
| `.silver-line` | 1px horizontal gradient divider |
| `.gold-glow` | Box shadow with gold tint |
| `.transition-premium` | Smooth cubic-bezier transition |
| `.animate-fade-in-up` | 0.6s fade-up entrance animation |
| `.animate-zoom` | 25s subtle scale zoom (used on Hero image) |

### Layout Patterns

- Sections use `py-32` or `py-40` vertical padding
- Container: `container mx-auto px-8`
- Grids commonly use `lg:grid-cols-12` with named span allocations

---

## TypeScript Configuration

- **Strict mode** enabled — no implicit any, strict null checks
- **Target:** ESNext
- **JSX:** `react-jsx` (no explicit React import needed)
- **Module resolution:** Node
- **No emit** — Vite handles compilation
- `isolatedModules: true` — each file must be independently compilable

---

## Build Configuration (`vite.config.ts`)

- Output: `dist/` (emptied before each build)
- Minifier: terser
- Source maps: disabled in production
- Manual chunks for optimal caching:
  - `vendor` → `react`, `react-dom`
  - `three-core` → `three`, `@react-three/fiber`, `@react-three/drei`

---

## Key Conventions

### Component Structure

```tsx
// Named export, typed with React.FC
export const ComponentName: React.FC = () => {
  return (
    <section className="..." id="anchor-name">
      {/* content */}
    </section>
  );
};
```

### Inline Styles vs Tailwind

Use CSS variables via inline styles when referencing brand colors:
```tsx
style={{ backgroundColor: 'var(--cream)' }}
style={{ color: 'var(--gold)' }}
```

Use Tailwind utilities for spacing, typography scale, layout, and responsive breakpoints.

### Content Language

All visible text content is in **Spanish**. Keep new content in Spanish unless explicitly instructed otherwise.

### No Tests

There is no test infrastructure. TypeScript type-checking (`tsc --noEmit`) is the only static validation available. After changes, run `npm run build` to verify the production build compiles without errors.

---

## Environment Variables

No `.env` files are committed. The `@google/genai` package is installed but not yet wired to any component. If integrating the Gemini API, add:

```
GEMINI_API_KEY=your_key_here
```

Vite exposes env vars prefixed with `VITE_` to client code via `import.meta.env`.

---

## Git & Branch Strategy

- **Main branch:** `master`
- **Feature/fix branches:** `claude/<descriptor>-<session-id>` (AI-generated branches follow this pattern)
- Commits use conventional commit prefixes: `feat:`, `fix:`, `chore:`
- Push command: `git push -u origin <branch-name>`

---

## What Does NOT Exist

- No test framework (Jest, Vitest, etc.)
- No ESLint or Prettier configuration
- No CI/CD pipeline (no GitHub Actions, Dockerfile, etc.)
- No routing (single-page, no React Router)
- No state management library (no Redux, Zustand, etc.)
- No `dist/` folder in the repository (generated on build)
- No `.env` files committed
