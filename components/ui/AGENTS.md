# components/ui

## Purpose

Vendored shadcn/ui and Radix primitives, plus custom animated visual widgets used by the portfolio.

## Ownership

- Generated primitives (`button.tsx`, `dialog.tsx`, `form.tsx`, `sidebar.tsx`, etc.).
- Custom widgets (`animated-project-card.tsx`, `animated-text.tsx`, `chroma-grid.tsx`, `container-scroll-animation.tsx`, `display-cards.tsx`, `gooey-text-morphing.tsx`, `interactive-hover-button.tsx`, `pattern-text.tsx`, `projects-grid.tsx`, `tech-stack.tsx`, `timeline.tsx`, `tubelight-navbar.tsx`).
- `demo.tsx` is a showcase only.

## Local Contracts

- Treat generated primitives as vendored code. Regenerate with the shadcn CLI or extend props/variants; avoid broad rewrites that break upstream updates.
- Custom widgets may import `framer-motion`, `three`, or `lucide-react`; keep them client-safe and free of route imports.
- `demo.tsx` is not imported by any route. Do not wire it into the site without an explicit request.
- Follow `components.json` aliases and the `cn()` helper.
- Preserve the README design rules: sharp corners, no shadows, `bmw-*` palette.

## Work Guidance

- Check actual usage before editing a primitive; many are unused library surface.
- Keep animation props and exported variant names stable for existing callers.

## Verification

- `npm run build` passes.
- For used widgets, visually verify hover, focus, and mobile behavior on the routes that import them.

## Child DOX Index

None.
