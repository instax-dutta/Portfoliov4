# public

## Purpose

Static assets served directly from the site root. Everything here is public and URL-addressable.

## Ownership

- AI/SEO artifacts: `llms.txt`, `llms-full.txt`, `advisory.md`.
- Brand and metadata assets: `favicon.svg`, `og-image.png`, placeholders.
- `fonts/achiko.otf`, `fonts/mooxy.ttf`.
- `/.well-known/security.txt`.

## Local Contracts

- Never place secrets, credentials, internal notes, source files, database dumps, or `.DS_Store` here. Anything added is downloadable by anyone.
- `llms.txt` and `llms-full.txt` are maintained copies of the public content in `app/lib/`; update them together with content changes.
- `advisory.md` mirrors the advisory service lines in `app/lib/advisory.ts`; keep them consistent.
- `next.config.mjs` rewrites `/.well-known/llms.txt` to `/llms.txt`; keep that destination present.
- Do not rename or delete `og-image.png`, `favicon.svg`, or font files without updating `app/layout.tsx`, metadata, and CSS references.
- `security.txt` follows RFC 9116; refresh the `Expires` field before it lapses.

## Work Guidance

- Prefer adding new public files under a descriptive folder (for example `.well-known/`) rather than the root.
- Optimize image weights before committing; `og-image.png` is already large and affects crawlers and social previews.

## Verification

- With `npm run start`, request each changed path directly and confirm `200` and correct content type.
- Confirm no hidden/system files (`find public -name ".DS_Store"`) and no unintended files are present before committing.

## Child DOX Index

None.
