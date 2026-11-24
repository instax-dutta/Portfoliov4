# GEO Analysis: sdad.pro

**Date:** 2026-11-25
**Skill:** Claude SEO `seo-geo` v2.6.2
**Target:** `https://sdad.pro`
**Evidence:** installed skill runtime scripts `fetch_page.py`, `parse_html.py`, `page_checks.py`, `transport_check.py`, `agentic_check.py`, plus GSC exports already analyzed in `docs/GSC-SEARCH-CONSOLE-REPORT.md`.

---

## GEO Readiness Score: 77/100

This is the skill's heuristic checklist score, not a predicted citation rate.

| Category | Weight | Score | Weighted |
|---|---:|---:|---:|
| Citability | 25% | 21/25 | 21 |
| Structural readability | 20% | 18/20 | 18 |
| Multi-modal content | 15% | 8/15 | 8 |
| Authority and brand signals | 20% | 12/20 | 12 |
| Technical accessibility | 20% | 18/20 | 18 |
| **Total** | 100% | | **77** |

---

## Platform Breakdown

No paid AI-visibility API was used, so ChatGPT, Perplexity, and Google AI platform citation rates were **not measured**. The following is qualitative readiness only.

- **Google AI Overviews:** foundational readiness is good. Pages rank in classic Search, FAQPage JSON-LD is present on all core pages, and the homepage has GSC Generative AI impressions.
- **ChatGPT:** no verified citation. Direct Claude session testing showed no reliable knowledge of current projects; ChatGPT direct testing was blocked by Cloudflare. Treat as low outside exact-name queries.
- **Perplexity:** not measured. robots.txt allows `PerplexityBot`, but no citation data was collected.
- **Google AI Mode:** GSC Generative AI impressions are growing but small: 67 over 6 months for exact `https://sdad.pro`, 194 property-wide over 3 months.

---

## AI Crawler Access Status

Each crawler is reported separately because training access and search citability are different capabilities.

| Crawler | Capability governed | Status |
|---|---|---|
| `OAI-SearchBot` | ChatGPT Search citability | Newly added with explicit allow in source; wildcard also allows. Not yet deployed. |
| `GPTBot` | OpenAI model training | Allowed. Licensing choice, not search-citability evidence. |
| `Claude-SearchBot` | Claude search-result citability | Newly added with explicit allow in source; wildcard also allows. Not yet deployed. |
| `ClaudeBot` | Anthropic model training | Allowed. Training choice, not a search-citability claim. |
| `PerplexityBot` | Perplexity AI search | Allowed. |
| `Googlebot` | Google Search and AI Overviews index | Allowed by wildcard. |
| `Google-Extended` | Gemini/Vertex training and grounding | Allowed. Not a Google Search ranking signal. |
| `CCBot` | Common Crawl training data | Blocked. Deliberate training-data choice. |
| `Applebot` | Siri, Spotlight, Safari discovery | Allowed. |
| `Applebot-Extended` | Apple Intelligence training opt-out | Allowed. Training choice. |

The live deployment at audit time had explicit groups for GPTBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, and CCBot. The source has now been updated to add `OAI-SearchBot` and `Claude-SearchBot` explicitly and remove the duplicate `Claude-User` group.

---

## llms.txt Status

`/llms.txt` is present, reachable, and machine-readable. The `agentic_check.py` P1 `llms-txt` check passes.

Google states that `llms.txt` is not needed for Google Search and does not help or hurt visibility or rankings. It may still serve non-Google systems, so keep it as a convenience file, not as a ranking lever.

---

## Brand Mention Analysis

From the GSC Latest links export and the earlier web sweep:

- **LinkedIn:** present, 837 followers, indexed
- **GitHub:** present, 95 non-fork public repos
- **Hugging Face:** present, 130+ artifacts, 66 followers
- **YouTube:** no owned channel; only incidental "channel managed by" credits
- **Reddit:** no meaningful brand presence; only isolated project links
- **Wikipedia/Wikidata:** no entity found
- **Third-party useful links:** buildinpublic profile, aionedge sysone-bench page, hostingbyte Ansora page
- **Weak / misaligned links:** 72 Ollama pages for derivative Heretic models under the `R4C3R` alias

Brand mentions correlate more strongly with AI visibility than backlinks in third-party research, but none of these are citations in a live AI answer. Do not create Wikipedia or Wikidata entries until independent notability sources exist.

---

## Passage-Level Citability

- 30 question-form H2 passages render server-side as `sr-only` answer blocks on the core pages
- Many passages were expanded toward the 130 to 170 word heuristic; this is a readability heuristic, not a Google rule
- Home and project answers front-load entity names, concrete numbers, and artifact URLs
- FAQPage JSON-LD is emitted on all eight core pages
- Answer blocks are hidden visually, but present in raw HTML, so crawlers can read them

Remaining weakness: project detail pages have thin visible bodies beyond title, description, highlights, and links. Unique primary data, tables, and "what we verified" sections would improve citability.

---

## Server-Side Rendering Check

`agentic_check.py` and `fetch_page.py` both found primary content without JavaScript:

- Words without JS: 956 on the homepage
- JS shell marker: false
- P0 `server-rendered`: pass

This keeps content available to raw-HTML AI crawlers as well as Googlebot.

---

## Deterministic Check Results

`page_checks.py` on the live site before the latest fixes found 2 medium issues:

- Title too long: 85 characters
- Meta description too long: 345 characters

After the local fixes, `page_checks.py` on the built output found:

- Title: 54 characters
- Meta description: 131 characters
- Findings: none

`transport_check.py` found:

- TLS 1.3, valid certificate for `sdad.pro`, 63 days to expiry
- HSTS valid
- nosniff, X-Frame-Options DENY, Referrer-Policy present and valid
- Medium: `www.sdad.pro` and `sdad.pro` ended on different URLs. A permanent host-based redirect from www to apex has been added in source and verified locally with a 308 to `https://sdad.pro/`.
- Low: CSP uses `'unsafe-inline'` in `script-src`. This is accepted for now because Next.js requires inline bootstrap scripts without a nonce implementation.

`agentic_check.py` summary: 3 P0 passes, 5 P1 passes/info, no failures. WebMCP and advanced `.well-known` items are not applicable or not implemented.

---

## Top 5 Highest-Impact Changes

1. **Deploy the current uncommitted changes** so the live site serves the updated titles, descriptions, internal links, robots rules, schema fixes, and www redirect.
2. **Resubmit `https://sdad.pro/sitemap.xml` in Search Console** and use URL Inspection on the homepage, `/projects`, `/llms.txt`, `/llms-full.txt`, and the six flagship project pages.
3. **Fix sitemap indexation:** 29 of 32 sitemap URLs are discovered but not indexed. Add more unique, substantive content to project pages and secure more internal links from visible page copy.
4. **Build real brand mentions on YouTube, Reddit, and India-focused government/education directories.** Use consistent entity facts and no fabricated credentials.
5. **Publish original research** with tables, raw numbers, and methods. Unique data is the strongest citability asset.

---

## Schema Recommendations

Applied in source:

- `mainEntity` node references now have explicit `@type`
- `dateModified` and `datePublished` use full ISO datetimes
- Person node has `subjectOf` links to six flagship projects
- FAQPage JSON-LD on all eight core pages
- Organization `sameAs` includes LinkedIn company pages

Open:

- Search Console still reports one Dataset missing `license`; no matching Dataset schema exists in this repo, so the affected URL must be identified first
- Optional Content-Signal line in robots.txt is a preference, not enforcement; Google says it does not act on it

---

## Content Reformatting Suggestions

- Keep homepage title at 54 characters and meta description at 131 characters. Do not re-expand them.
- Project detail H1s now include the category phrase, for example `sysone-bench: Byte-Identical Model Benchmark for System One`.
- Add a short table to each flagship project page: metric, value, method, date.
- Add a "What we verified" block with 3 to 5 bullets and a "Where this could be wrong" limit statement.
- Keep one canonical alias set: Sai Dutta Abhishek Dash, SDAD, instax-dutta, R4C3R0P, RACER IS OP, AbhishekDash69.
- Do not add `llms.txt` links as a Google ranking tactic. Keep the file for non-Google consumers only.

---

## Verification Commands

```bash
~/.claude/skills/seo/scripts/claude-seo doctor
~/.claude/skills/seo/scripts/claude-seo run page_checks.py --file <saved-home.html> --base-url https://sdad.pro/ --json
~/.claude/skills/seo/scripts/claude-seo run transport_check.py https://sdad.pro --json
~/.claude/skills/seo/scripts/claude-seo run agentic_check.py https://sdad.pro --json
```
