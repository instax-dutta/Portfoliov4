# GEO Audit Report: sdad.pro

**Audit Date:** 2026-11-25
**URL:** https://sdad.pro (working copy: http://localhost:3000)
**Business Type:** Personal brand / portfolio (Agency-Services + Publisher hybrid)
**Pages Analyzed:** 30 URLs considered (8 core routes + 22 project pages); 9 deeply fetched

---

## Executive Summary

**Overall GEO Score: 73/100 (Fair)**

The site has strong technical foundations: AI crawlers are allowed, `llms.txt` and `llms-full.txt` are served, all 30 question-form answer blocks render server-side, JSON-LD is valid on every page, and security headers are solid. The main weakness is trust consistency: the deployed site still serves retired projects and old metrics, while the working copy mixes "20+" with the canonical 22 and contains several unverifiable superlatives. Brand authority is limited by a dead venture domain, alias drift, and no Wikipedia/Reddit/YouTube footprint.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 74/100 | 25% | 18.5 |
| Brand Authority | 66/100 | 20% | 13.2 |
| Content E-E-A-T | 63/100 | 20% | 12.6 |
| Technical GEO | 96/100 | 15% | 14.4 |
| Schema & Structured Data | 89/100 | 10% | 8.9 |
| Platform Optimization | 55/100 | 10% | 5.5 |
| **Overall GEO Score** | | | **73.1/100** |

---

## Critical Issues (Fix Immediately)

1. **Deployed site is stale.** Live `sdad.pro` still contains ornith-flight, AgentLoop, Hinglish-Bench, Forensic-Recovery, The Watcher, Visitor Analytics, Auralyn, 3D Web Contents, and CL-Chat Reborn, plus 85+/46+/22+ old metrics. AI crawlers hitting the public domain quote the old portfolio. Fix: deploy the current build, then resubmit URLs for index refresh.
2. **Dead venture entity.** `maelis.sdad.pro` does not resolve. The live Maelis site is `https://maelis.in`. Fix: replace all 9 references and add the real URL to the Organization `url`/`sameAs`.

## High Priority Issues

1. **"20+" contradicts canonical 22** across metadata, stat cards, answer blocks, and advisory copy. Fix: derive from `projects.length` / `STATS.shippedSystems`.
2. **Unverifiable flagship claims**: C99 35B-on-8GB achievement, "first commercial Odia-specific AI API", "3x more efficient tokenizer", DPIIT/IndiaAI recognition. Fix: remove or qualify with linked evidence.
3. **False absolute claim**: "Everything he ships is open source" and "every one of his 22 systems links back to a public repository" are contradicted by website-only entries and per-artifact licenses. Fix: qualify.
4. **FAQPage schema on only 3 of 8 pages** hides 19 of 30 answer passages from JSON-LD consumers. Fix: add FAQPage JSON-LD to about, projects, experience, skills, credentials.
5. **14 answer passages below the 134-167 word extraction window**, especially projects and skills pages. Fix: expand them.

## Medium Priority Issues

1. `sameAs` inconsistency: stale `twitter.com` and missing Hugging Face in about/contact schema.
2. Invalid `employee`/`organization` properties on `OrganizationRole` nodes.
3. Timeline `ItemList` declares 6 items but emits no `itemListElement`.
4. Duplicate organization entity IDs between layout and experience page.
5. Alias drift across SDAD, instax-dutta, R4C3R0P, RACER IS OP, AbhishekDash69.
6. No owned YouTube, Reddit, or Wikipedia/Wikidata entity.

## Low Priority Issues

1. Duplicate `Claude-User` UA group in `robots.ts`.
2. Home canonical has trailing slash while sitemap `loc` does not.
3. `llms.txt` says "November 2026" while sitemap uses exact `2026-11-25`.
4. CCBot blocked in `robots.ts` (intentional, but limits Common Crawl-derived retrieval).
5. Historical `GEO-CITABILITY-SCORE.md` still references removed projects.

---

## Category Deep Dives

### AI Citability (74/100)

30 question-form H2 headings render server-side as `sr-only` answer blocks. Entity-first phrasing and concrete numbers are strong. Weaknesses: 14 passages under 134 words, "20+" inconsistency, duplicated sentences in the "Where can I find" passage, and FAQPage schema on only 3 pages. `llms*.txt` are hand-maintained indexes rather than mirrors of `answerSections`, creating a second framing of the same identity.

### Brand Authority (66/100)

Verified public surfaces: GitHub (108 public repos, 28 followers), LinkedIn (837 followers), Hugging Face (130 artifacts, 66 followers), X handle, and a stable Person `@graph`. Gaps: dead Maelis domain, no Wikipedia/Wikidata entity, no owned YouTube/Reddit profile, thin third-party press, and conflicting location/date signals between profiles.

### Content E-E-A-T (63/100)

Strong timelines, named ventures, and 22 specific project entries. Trust is reduced by unverifiable superlatives, mislabeled "credentials" tiles that are mostly metrics, and "verified educational background" metadata with no badge or certificate link.

### Technical GEO (96/100)

robots.txt allows all major citation crawlers; `llms.txt`, `llms-full.txt`, `advisory.md`, and `security.txt` return 200 with correct content types. All pages are statically prerendered with canonical URLs, HSTS, CSP, and clean 404/308 handling. 32 sitemap URLs carry `lastmod=2026-11-25`. Production CSP correctly omits `unsafe-eval`; dev includes it.

### Schema & Structured Data (89/100)

All JSON-LD parses. Present: Person, WebSite, Organization, ItemList, SoftwareSourceCode, SoftwareApplication, BreadcrumbList, FAQPage, ProfilePage, Service, hasCredential. Issues: inconsistent sameAs, invalid OrganizationRole properties, empty timeline ItemList, and fragmented organization IDs.

### Platform Optimization (55/100)

Strong on GitHub, LinkedIn, Hugging Face, and X. Missing owned YouTube/Reddit presence and Wikipedia/Wikidata entity. Third-party mentions exist but are sparse and self-referential.

---

## Quick Wins (Implement This Week)

1. Deploy current build and resubmit sitemap for index refresh.
2. Replace `maelis.sdad.pro` with `maelis.in` everywhere.
3. Replace all "20+" with 22 and derive from `projects.length`.
4. Remove or qualify the C99, "first commercial", "3x", DPIIT, and IndiaAI claims.
5. Add FAQPage JSON-LD to the five pages that render answer blocks without it.

## 30-Day Action Plan

### Week 1: Consistency
- [x] Canonicalize 22 projects / 8 skills / 225+ repos / 130+ HF artifacts
- [x] Fix dead Maelis domain and alias set
- [x] Remove unverifiable claims and false absolutes

### Week 2: Schema and citability
- [x] Add FAQPage JSON-LD to all eight core pages
- [x] Expand undersized answer passages
- [x] Fix sameAs, organization entities, and timeline ItemList

### Week 3: External entity signals
- [ ] Create or claim YouTube, Reddit, and Wikidata entity where genuine
- [ ] Add LinkedIn company URLs to Organization sameAs
- [ ] Seek one independent interview or mention

### Week 4: Measurement
- [ ] Re-audit after deployment
- [ ] Track AI citations with test queries in ChatGPT/Perplexity/Gemini
- [ ] Refresh snapshot dates in llms files

## Post-Remediation Estimate

After the fixes above, the estimated GEO score rises to **81/100 (Good)**: Citability 85, Brand 72, E-E-A-T 78, Technical 96, Schema 95, Platform 55. This is an internal estimate, not a re-audit. The remaining ceiling is external: stale deployed pages, missing Wikipedia/Reddit/YouTube entities, and limited independent press.

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| / | Founder & Engineer | 20+ vs 22, dead Maelis URL, undersized answer blocks |
| /about | About | stale sameAs, "20+", FAQPage absent |
| /projects | Shipped Products | "20+", FAQPage absent, 8 undersized answer blocks |
| /projects/[slug] (22) | Project detail | website-only links, licensing hedging |
| /experience | Builder Timeline | invalid OrganizationRole props, empty ItemList, duplicate org IDs, FAQPage absent |
| /skills | Engineering Toolkit | undersized answer blocks, FAQPage absent |
| /credentials | Credentials | metrics mixed with credentials, "Verified" metadata, FAQPage absent |
| /advisory | Advisory | C99 claim, "3x" claim, "20+" in advisory.md |
| /contact | Contact | stale sameAs, missing HF sameAs |
