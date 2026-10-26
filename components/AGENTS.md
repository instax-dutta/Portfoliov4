# components

## Purpose

Repository-level UI library: shadcn/ui and Radix primitives plus custom visual components shared across the app.

## Ownership

- Owns `components/ui/` primitives and custom widgets.
- Owns `components/theme-provider.tsx`.
- Does not own route composition or content; those live in `app/`.

## Local Contracts

- Path aliases from `components.json`: `@/components`, `@/components/ui`, `@/lib/utils`, `@/hooks`.
- Tailwind config and CSS variables live in `tailwind.config.ts` and `app/globals.css`; primitives must use those tokens.
- `components.json` pins shadcn style `default`, RSC enabled, neutral base color, lucide icons, and the `@react-bits` registry.
- Most primitives are unused by current routes. Do not assume a component is wired up because it exists.
- Use `cn()` from `lib/utils.ts` for conditional classes.
- Preserve no-border-radius and no-shadow design rules on visible surfaces.

## Work Guidance

- Prefer regenerating or extending a shadcn primitive over rewriting it ad hoc.
- Keep custom components self-contained; avoid importing route files or content modules.

## Verification

- `npm run build` passes after component changes.
- If a primitive changes, check every route that imports it; there is no component test suite.

## Child DOX Index

- `components/ui/AGENTS.md` - generated shadcn/Radix primitives and custom animated UI widgets.
