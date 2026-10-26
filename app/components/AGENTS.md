# app/components

## Purpose

Client components that are specific to the portfolio application shell and homepage experience.

## Ownership

- `Navigation.tsx` - shared top navigation and mobile menu.
- `LenisProvider.tsx` - smooth-scroll provider wrapped around the app.
- `HomeClient.tsx` - homepage hero and CTAs.
- `AerodynamicStream.tsx` - Three.js/WebGL hero background.
- `AnswerBlocks.tsx` - screen-reader-only AI answer sections and inline link rendering.

## Local Contracts

- Mark `"use client"` only when browser APIs, state, or animation libraries require it.
- `Navigation` is rendered per page; adding a route to the main nav means updating its `menuItems` and `app/sitemap.ts`.
- `LenisProvider` wraps all children in `app/layout.tsx`; do not add a second scroll provider.
- `AerodynamicStream` owns WebGL resources and must dispose renderer, geometry, and materials on unmount.
- `AnswerBlocks` must stay `sr-only`, keep `tabIndex={-1}` on generated links, and only render text from `app/lib/site-facts.ts`.
- Use `bmw-*` tokens and shared variants from `app/lib/animation.ts`; do not introduce page-specific palettes.

## Work Guidance

- Respect reduced-motion expectations for large animations where practical.
- Keep hero animation client-only and out of the critical server render path.

## Verification

- `npm run build` passes.
- Manually verify navigation, mobile menu, and hero animation at desktop and mobile widths.
- Confirm the homepage still renders with JavaScript disabled (server markup remains readable).

## Child DOX Index

None.
