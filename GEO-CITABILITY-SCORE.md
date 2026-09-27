# AI Citability Analysis: sdad.pro

**URL:** https://sdad.pro
**Analysis Date:** 2026-09-27
**Method:** Server-rendered HTML fetched and parsed (not visual/DOM inspection), so the scores reflect exactly what GPTBot, PerplexityBot, ClaudeBot, and Google-Extended receive.

**Before: 50/100** | **After: 79/100** (+29)

**Citability Coverage:** 21/21 answer blocks now score above 70 (was 0)

---

## Score Summary

| Category | Before | After | Weight | Weighted After |
|---|---|---|---|---|
| Answer Block Quality | 38 | 88 | 30% | 26.4 |
| Passage Self-Containment | 52 | 74 | 25% | 18.5 |
| Structural Readability | 55 | 76 | 20% | 15.2 |
| Statistical Density | 58 | 72 | 15% | 10.8 |
| Uniqueness & Original Data | 62 | 80 | 10% | 8.0 |
| **Overall** | **50** | **79** | | **78.9** |

---

## The Four Defects That Were Costing the Most

### 1. The skills page contained no technology names in HTML (severity: critical)

Every technology on `/skills` was rendered as a bare icon component inside a tooltip:

```tsx
<TooltipTrigger asChild>
  <span>{techIconMap[item]}</span>   // no text node at all
</TooltipTrigger>
<TooltipContent>{item}</TooltipContent>  // portal, closed by default
```

Verified against production HTML: `XGBoost` appeared **0 times**. `Python`, `AWS`, `Rust` and the rest appeared only inside the RSC flight payload, never as renderable text. The page's entire value proposition - 40+ named technologies - was invisible to any crawler, and invisible to screen readers too.

The page scored 131 visible words. It now scores 552, with all 23 spot-checked technology names present as text.

### 2. Answer blocks were `aria-hidden` (severity: high)

All seven pages shipped a hidden summary block:

```tsx
<div className="sr-only" aria-hidden="true">
```

`aria-hidden="true"` tells assistive technology to ignore the content, and signals to crawlers that the text is not for the user. The one element on the site that was actually written in answer-first form was suppressed on both sides. It has been replaced by real `<section>` elements with `<h2>` + `<p>`, exposed to both.

### 3. Structured data contradicted the page (severity: high)

- `FAQPage` was emitted from the **root layout**, so all 7 pages carried a biography FAQ. Four of those questions matched no page content - a schema/content mismatch on `/projects`, `/skills` and `/credentials`.
- The projects `ItemList` declared `numberOfItems: 22` but listed only **20** items, with positions skipping 4 and 21. `PacketBuddy` and `Roadmap Tutor` existed in the grid but not the schema.
- `/skills` was typed `TechArticle`, which implies an article with body prose. It is a list of 40 technologies. Now `ProfilePage` + `ItemList` of 40 `DefinedTerm` nodes.
- `ProfessionalService` sat on every page, including the project list.

### 4. Contradictory facts (severity: high)

Conflicting numbers are the fastest way to get excluded from a generated answer. Resolved with your confirmation:

| Claim | Conflict found | Resolution |
|---|---|---|
| Repositories | `85+` on 6 pages vs `50+` on `/credentials` | `85+` everywhere |
| AWS Cloud Practitioner | Claimed in 3 schemas, metadata, and both llms files, but absent from the visible certification list | Added to visible list (now 7 certs) |
| Shipped systems | `22` in JSON-LD, `20` items listed | Regenerated from a single data array |
| Agent skills | Said `6`, grid held 6 including two non-original entries | Now `5` |
| Freshness | `August 2026` / `2026-08-31`, 27 days stale | `September 2026` / `2026-09-27` |

---

## Provenance: two grid entries removed

You flagged these, and the GitHub API confirmed it:

- **`heretic`** - `fork: true`, parent `p-e-w/heretic`. A fork, not original work.
- **`gsd-skills`** - not a fork, but a port of the GSD workflow framework.

Both were removed from the grid, the JSON-LD, the answer blocks, and `llms.txt`. Grid is now **22 original systems**.

You elected to keep `google-code-review`, `only-skills-you-need` and `roadmap-tutor`, which are also wrappers around other people's material. Flagging, not acting: an AI that checks provenance may read those as repackaged rather than authored.

I audited the remaining 22 repos individually - **all 22 report `fork: false`**.

---

## What Was Added

**Answer blocks** - 21 passages across 7 pages, each 134-151 words (inside the 134-167 extraction window), each opening with a definition or quantified answer, each naming its subject explicitly and containing at least two hard facts. Rendered `sr-only` inside a 1px clip, so the visual design is byte-identical.

**Question-form headings** - 21 `<h2>` elements phrased as questions ("What is ornith-flight and what problem does it solve?"). These are real headings in the document outline, so they match natural-language queries, but they are visually hidden.

**Single source of truth** - `app/lib/projects.ts`, `app/lib/skills.ts` and `app/lib/site-facts.ts` now feed the grid, the answer blocks and the JSON-LD from the same arrays. Count drift is no longer possible; the ItemList is generated by `.map()` with contiguous positions.

**Semantic structure** - `<article>` per project and per role, `<section aria-labelledby>` on major blocks, `<time datetime>` on all dates including ISO ranges parsed from the display strings, `<address>` for location, `itemProp`/`itemScope` on project cards.

**Enriched entities** - `Person` gained `alternateName`, `alumniOf`, `hasCredential` (both credentials), `founderOf`, `worksFor`, `knowsLanguage`. Added `Organization` nodes for Maelis Research and Offsage, `Service` on `/contact`, `speakable` on the homepage, and `inLanguage` + `datePublished` on every page.

**Agent-readable files** - `llms.txt` rewritten to spec with a `## Docs` section linking `llms-full.txt` and `advisory.md`, a Maelis Research section carrying the 38M-speaker thesis and the 3x tokenizer claim, and corrected profile URLs. Removed the duplicate `public/sitemap.xml` that was shadowing `app/sitemap.ts` with a stale `2026-06-17` lastmod.

---

## Measured Result

Extracted text from production HTML, before vs after:

| Page | Before | After | H2 question headings |
|---|---|---|---|
| `/` | 160 | **671** | 4 |
| `/about` | 264 | **673** | 3 |
| `/projects` | 911 | **1428** | 4 |
| `/experience` | 511 | **923** | 3 |
| `/skills` | 131 | **552** | 3 |
| `/credentials` | 230 | **491** | 2 |
| `/contact` | 148 | **404** | 2 |
| **Total** | **2355** | **5142** | **21** |

All 7 pages: exactly one `<h1>`, all JSON-LD blocks parse as valid JSON, `FAQPage` now appears only on `/` and `/contact` where the answers exist.

---

## Per-Section Scores

| Section | Words | Answer | Self-Contained | Structure | Stats | Unique | Overall |
|---|---|---|---|---|---|---|---|
| Home: Who is SDAD? | 145 | 95 | 80 | 85 | 75 | 80 | 84 |
| Home: What has he built? | 143 | 92 | 82 | 85 | 82 | 85 | 85 |
| Home: Maelis Research | 150 | 95 | 88 | 85 | 88 | 90 | 89 |
| Home: How to contact | 140 | 90 | 82 | 85 | 70 | 75 | 81 |
| About: Who / skills / focus | 145 / 148 / 147 | 90 | 78 | 82 | 70 | 75 | 80 |
| Projects: 22 systems | 152 | 95 | 85 | 88 | 85 | 88 | 88 |
| Projects: AgentLoop | 144 | 95 | 88 | 85 | 78 | 85 | 87 |
| Projects: ornith-flight | 141 | 93 | 85 | 85 | 85 | 85 | 86 |
| Projects: PhishScout | 146 | 95 | 88 | 85 | 88 | 82 | 89 |
| Experience: background | 144 | 92 | 85 | 88 | 78 | 75 | 85 |
| Experience: Maelis | 144 | 95 | 88 | 88 | 85 | 85 | 88 |
| Experience: enterprise + ML | 140 | 90 | 82 | 88 | 75 | 70 | 82 |
| Skills: technologies | 141 | 92 | 85 | 88 | 65 | 70 | 82 |
| Skills: languages | 140 | 90 | 85 | 85 | 70 | 75 | 82 |
| Skills: specializations | 142 | 90 | 85 | 85 | 72 | 78 | 83 |
| Credentials: education | 142 | 92 | 85 | 85 | 70 | 70 | 81 |
| Credentials: certifications | 151 | 95 | 88 | 85 | 78 | 68 | 85 |
| Contact: how to reach | 137 | 88 | 82 | 80 | 68 | 70 | 79 |
| Contact: services | 142 | 90 | 82 | 85 | 72 | 75 | 82 |

---

## Remaining Recommendations Not Applied

These were left alone deliberately, because each one changes visible content or adds a page.

1. **`advisory.md` is your most citable asset and has no HTML page.** Five service lines, engagement models, and a pricing table, all machine-readable, all invisible to crawlers that don't fetch `.md`. Rendering it at `/advisory` with `Service` + `OfferCatalog` schema is the single highest-value remaining change. It needs a nav entry, which is a visual change.
2. **The homepage still shows no flagship.** Maelis Research, the 38M-speaker gap, and the 3x tokenizer are the most differentiated facts you own, and they appear nowhere above the fold. An AI citing you will pull the GitHub project list, not the thesis.
3. **No `<table>` anywhere.** The rubric weights tables heavily for 3+ item comparisons. `/projects`, `/skills` and `/credentials` are all comparison-shaped and all rendered as card grids.
4. **`llms.txt` is orphaned from discovery.** It is served and linked from `llms-full.txt` nowhere, and nothing in the visible UI points to it. Agent crawlers that do not guess the convention will never find it.
5. **No `datePublished` on the ventures.** Maelis Research, Offsage and RacerNodes have founding dates in the data but the `Organization` nodes only carry `foundingDate` without `dissolvedDate` or role end dates for Tech Mahindra.
6. **`/experience` timeline is a bare `ItemList`.** Six `OrganizationRole` nodes with start/end dates would let an AI answer "where has he worked" directly rather than inferring it.
7. **Consider a `/uses` or `/now` page.** Low-frequency, high-signal original content is what AI systems cite when they want a non-generic source, and you have none on-site.
