# app

## Purpose

Next.js App Router surface for sdad.pro: route pages, route metadata and JSON-LD, and app-level client components. The site is static-first and deploys to Vercel.

## Ownership

- Owns every route under `app/` (`/`, `/about`, `/advisory`, `/contact`, `/credentials`, `/experience`, `/projects`, `/projects/[slug]`, `/skills`), `layout.tsx`, `robots.ts`, `sitemap.ts`, and `globals.css`.
- Owns app-level components in `app/components/`.
- Content data belongs to `app/lib/`; UI primitives belong to the repo-level `components/` tree.

## Local Contracts

- Route pattern: `page.tsx` is a server component that exports `metadata` (and JSON-LD) and renders a sibling `*Client.tsx` that holds interactivity. Keep that boundary; do not add `"use client"` to `page.tsx`.
- No API routes, server actions, or server-side form handling. The contact form posts directly to Web3Forms from the browser.
- Do not hardcode copy that already exists in `app/lib/*`; import it so pages, schema, and answer blocks stay consistent.
- JSON-LD is injected with `dangerouslySetInnerHTML` from typed local data only. Never pass user input or fetched content into it.
- New public routes must be added to `app/sitemap.ts` with a real `ROUTE_LASTMOD` date and, when navigable, to `app/components/Navigation.tsx`.
- Heavy client-only widgets use `next/dynamic` (see `app/advisory/page.tsx`) to keep first load small.
- `app/globals.css` is the live stylesheet. `styles/globals.css` is not imported.
- Design language is defined in `README.md`: black canvas, `bmw-*` Tailwind tokens, zero border radius, no shadows, M tricolor only as a divider.

## Work Guidance

- Follow the README design-system rules for all UI work; do not add colors outside the `bmw-*` palette.
- Keep AI-facing answer blocks (`app/components/AnswerBlocks.tsx`) screen-reader-only and accurate; do not make them visible.
- Keep metadata descriptions factual and aligned with `app/lib/site-facts.ts`.

## Verification

- `npm run build` must pass and list every expected route as static (`○`) or SSG (`●`).
- After route or content changes, check `/sitemap.xml` and `/robots.txt` locally with `npm run start`.
- Visual changes: manually verify desktop and mobile layouts; there is no visual regression suite.

## Child DOX Index

- `app/lib/AGENTS.md` - canonical content and data modules consumed by pages, schema, sitemap, and AI answer blocks.
- `app/components/AGENTS.md` - app-level client components (navigation, hero/WebGL, Lenis, answer blocks).
