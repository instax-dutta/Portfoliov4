# docs

## Purpose

Internal research, audit reports, and build artefacts for the portfolio. Nothing in this folder is served by Next.js.

## Ownership

- `GEO-AUDIT-REPORT.md`: GEO audit scores, findings, and remediation plan.
- `GEO-CITABILITY-SCORE.md`: earlier citability audit snapshot. Retained as history; it contains old projects and counts and must not be treated as current.
- `KEYWORD-RANKING-AI-VISIBILITY-REPORT.md`: keyword ranking sweep and AI-reference evidence.
- `GSC-SEARCH-CONSOLE-REPORT.md`: Search Console export analysis, coverage reasons, schema issues, and filtered-data requests.
- `GEO-ANALYSIS.md`: Claude SEO skill output for AI-search readiness and crawler access.
- `build_output.txt`: captured build output. Historical artefact, not a source of truth.

## Local Contracts

- Reports stay in this folder. Do not copy them into `public/` or reference them from rendered pages.
- Current claims come from `app/lib/site-facts.ts`, `app/lib/projects.ts`, `app/layout.tsx`, and `public/llms*.txt`. A report that disagrees with those files is stale, not authoritative.
- Update a report when new evidence changes its conclusion; do not leave two versions of the same audit at the root.
- No cover images, source code, secrets, environment files, or generated site output belong here.

## Work Guidance

- Keep reports concise, dated, and evidence-backed.
- State the tools and limitations used for any ranking or visibility claim.
- When a report recommends a code change, apply the change in its owning subtree and verify it there, rather than editing the report as a substitute.

## Verification

- `npm run build` must still pass after any docs change that touches a path referenced by the site.
- Confirm no report file is present under `public/`.

## Child DOX Index

None. This folder holds flat files.
