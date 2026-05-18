# Portfolio Identity & Design System

This file defines the visual identity, design tokens, and component conventions for this portfolio. Future agents MUST reference this when adding or editing any component or page.

---

## Design Philosophy

BMW M-inspired: **engineered precision, not decoration.**

- Black canvas (`#000000`) everywhere. No light mode.
- White typography. Heavy (700) headlines, light (300) body. All-caps with 1.5px tracking for labels.
- The M tricolor stripe (`#0066b1` → `#1c69d4` → `#e22718`) is the only decorative element — used as 4px dividers and brand signature. Never as buttons or fills.
- Zero border radius on everything except circular icon buttons.
- No drop shadows. Depth comes from surface contrast (`#1a1a1a` cards on `#000000` canvas).
- Photography and clean typography do the visual work. No gradients, no decorative backdrops.

---

## Color System

CSS variables in `app/globals.css`. Tailwind classes use `bmw-*` prefix.

| Token | CSS Variable | Hex | Usage |
|-------|-------------|-----|-------|
| canvas | `--bmw-canvas` | `#000000` | Page background |
| ink | `--bmw-ink` | `#ffffff` | Primary text, headings |
| body | `--bmw-body` | `#bbbbbb` | Body paragraphs |
| body-strong | `--bmw-body-strong` | `#e6e6e6` | Emphasized body text |
| muted | `--bmw-muted` | `#7e7e7e` | Secondary labels, captions |
| hairline | `--bmw-hairline` | `#3c3c3c` | 1px borders, dividers |
| hairline-strong | `--bmw-hairline-strong` | `#262626` | Stronger borders |
| surface-card | `--bmw-surface-card` | `#1a1a1a` | Card backgrounds |
| surface-elevated | `--bmw-surface-elevated` | `#262626` | Nested cards |
| surface-soft | `--bmw-surface-soft` | `#0d0d0d` | Spec cells, tag backgrounds |
| m-blue-light | `--bmw-m-blue-light` | `#0066b1` | M stripe start |
| m-blue-dark | `--bmw-m-blue-dark` | `#1c69d4` | M stripe middle |
| m-red | `--bmw-m-red` | `#e22718` | M stripe end |
| carbon | `--bmw-carbon` | `#2b2b2b` | Technical specs |

Tailwind usage: `bg-bmw-canvas`, `text-bmw-ink`, `text-bmw-body`, `text-bmw-muted`, `bg-bmw-surface-card`, `border-bmw-hairline`, `text-bmw-m-blue-light`.

---

## Typography

Font: **Inter** (via `next/font/google`, variable `--font-inter`).

| Token | CSS Class | Size | Weight | Letter-spacing | Use |
|-------|-----------|------|--------|----------------|-----|
| display-xl | `bmw-display-xl` | clamp(40, 5.5vw, 80px) | 700 | 0 | Hero heading |
| display-lg | `bmw-display-lg` | clamp(32, 4vw, 56px) | 700 | 0 | Section headings |
| display-md | `bmw-display-md` | clamp(28, 3vw, 40px) | 700 | 0 | Sub-section heads |
| label | `bmw-label` | 14px | 700 | 1.5px | Section labels, "machined" look |
| body | default `p` or `text-bmw-body` | 16px | 300 | 0 | Body paragraphs |
| button | `bmw-btn` or `bmw-text-link` | 14px | 700 | 1.5px | All buttons and text links |

- **Headlines always UPPERCASE, weight 700.**
- **Body always sentence-case, weight 300.**
- **Labels always uppercase with 1.5px tracking.** The "machined" feel is non-negotiable.
- Never bold body text. Never use weight 400 or 500 for body.

---

## Spacing

- **Section padding:** 96px (`py-24` via `bmw-section`)
- **Card padding:** 24px (`p-6`)
- **Max content width:** 1440px (`max-w-[1440px] mx-auto px-6`)
- **Card grid gaps:** 3 (`gap-3` = 12px)
- **Section bottom margin:** `mb-16` or `mb-20`

---

## Component Patterns

### Navigation (`app/components/Navigation.tsx`)
- Fixed top, 64px tall (`h-16`), z-50
- Transparent until scrolled → `bg-bmw-canvas border-b border-bmw-hairline`
- Logo: "SDAD" in `text-bmw-ink text-sm font-bold uppercase` with M-stripe underline
- Links: `text-bmw-muted` → `text-bmw-ink` on active/hover
- Mobile: hamburger menu, full-width dropdown
- Wrapped in `React.memo`

### Buttons
- **Outline:** `bmw-btn` — transparent bg, white 1px border, uppercase 14px/700/1.5px tracking, 48px height, 16px/32px padding, no border-radius
- **Primary:** `bmw-btn bmw-btn-primary` — white bg, black text, no border
- **Text link:** `bmw-text-link` — uppercase 14px/700/1.5px tracking, no underline, inline-flex with gap-2

### Cards
- Background `bg-bmw-surface-card`, no border-radius, padding `p-6`
- Tags/chips inside cards: `px-3 py-1 text-xs text-bmw-muted bg-bmw-surface-soft`
- Dividers: `border-t border-bmw-hairline` or `bmw-hairline` div

### M Stripe
- Horizontal: `<div className="m-stripe" />` — 4px gradient from m-blue-light → m-blue-dark → m-red
- Always full-width, placed at bottom of page sections
- Never used as a button fill or background

### Keyboard (`app/components/SkillsClient.tsx`)
- Grid of cards, each with icon + category title + tag list
- Tags in flex-wrap, small uppercase labels

### Experience (`app/components/ExperienceClient.tsx`)
- Vertical timeline list with border-top dividers
- Date column on left (140px on md+), content on right
- Skills as tags, achievements as bullet list
- Stat cards at bottom: `bg-bmw-surface-soft p-6 text-center`, large number + small label

### Contact (`app/contact/ContactClient.tsx`)
- Two-column grid: contact info (left) + form (right)
- Form inputs: `h-12 px-4 bg-bmw-surface-soft border border-bmw-hairline text-bmw-ink text-sm`, no border-radius
- Input focus: `focus:border-bmw-ink`
- Submit button: full-width `bmw-btn` with Send icon

### Projects (`app/components/ProjectsClient.tsx`)
- 3-column grid at lg, 2 at md
- Card with title, subtitle, description, tech tags, and View/Code links
- Links use `bmw-text-link` style

---

## Responsive Breakpoints

- **Mobile:** `< 768px` — single column, hamburger nav
- **Tablet:** `768-1024px` — 2-up grids
- **Desktop:** `1024px+` — 3-up grids, full nav
- **Content max:** 1440px centered

---

## SEO Rules (from Vercel Best Practices)

1. Every page MUST export `metadata: Metadata` with title, description, and `alternates.canonical`
2. Layout files that define metadata MUST `import type { Metadata } from "next"`
3. Client components use `"use client"` directive
4. All pages use `dynamic(() => import(...))` for client components
5. Use ternary (`? :`) for conditional rendering, never `&&`

---

## Do's

- Use `bmw-*` CSS variables via Tailwind (`text-bmw-ink`, `bg-bmw-canvas`, etc.)
- Headlines: uppercase, weight 700, letter-spacing 0
- Labels: uppercase, weight 700, letter-spacing 1.5px
- Body: sentence-case, weight 300
- Buttons: no border-radius, uppercase 14px, 1.5px tracking
- Cards: `bg-bmw-surface-card`, no border-radius, `p-6`
- M-stripe: only as 4px horizontal divider at section ends

## Don'ts

- Don't add decorative gradients, glows, or background effects
- Don't round card or button corners (except circular icon buttons)
- Don't use the M tricolor as a button fill or action surface
- Don't bold body text — weight 300 always
- Don't add drop shadows
- Don't introduce new brand colors outside the defined palette
- Don't reference or credit getdesign.md in any code, comments, or documentation beyond the README
