# app/lib

## Purpose

Single source of truth for portfolio content and shared client animation constants.

## Ownership

- `site-facts.ts` - SITE identity, derived project counts, AI answer sections.
- `projects.ts` - canonical project list, groups, links, highlights.
- `skills.ts` - skill categories and icon keys.
- `advisory.ts` - service lines, engagement models, domains, achievements, credentials.
- `animation.ts` - shared Framer Motion variants and easing.

## Local Contracts

- `projects.ts` is canonical. `app/projects/[slug]/page.tsx`, `app/sitemap.ts`, and `site-facts.ts` counts derive from it; add or edit a project here only.
- `site-facts.ts` builds counts and prose from `projects.ts`. Keep derived numbers computed, not hand-written.
- Bump `SITE.dateModified` and the affected `ROUTE_LASTMOD` entry in `app/sitemap.ts` when public content changes.
- `answerSections` drives hidden AI answer blocks, page schema, and `public/llms*.txt`. Update all copies together.
- Keep claims verifiable and consistent with public repositories and deployments. No invented metrics or dates.
- `animation.ts` is the shared motion vocabulary; page-specific variants stay local.

## Work Guidance

- Prefer adding a field to the existing type over introducing a parallel data file.
- Keep exported names stable; pages and client components import them directly.

## Verification

- `npm run build` passes.
- Project count in generated pages and schema matches `projects.length`.
- Spot-check `/llms.txt`, `/llms-full.txt`, and page JSON-LD after content edits.

## Child DOX Index

None.
