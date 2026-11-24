# Keyword Ranking and AI Reference Sweep

**Date:** 2026-11-25
**Target:** Sai Dutta Abhishek Dash / SDAD / `https://sdad.pro`
**Tools used:** Firecrawl MCP (`firecrawl_search`, `firecrawl_scrape`, `firecrawl_map`), Google-oriented `websearch`, agent-reach routing, Obscura browser, direct HTTP checks, GitHub/Hugging Face public data.

---

## Executive Summary

The brand has **strong exact-name visibility** but **weak category visibility**. The exact quoted name ranks `sdad.pro` at position 1 in the web index; the unquoted name returns unrelated people (Abhishek Bachchan, other Abhisheks). Project visibility is uneven: `sysone-bench` is well indexed and has several third-party citations, while `T4-Bench`, `truemotion`, `gmail-automator`, `PhishTrap`, and `Gupshup` are dominated by unrelated projects or name collisions.

A major external problem remains: **search indexes still show the pre-deployment portfolio**. Queries such as `ornith-flight`, `AgentLoop`, `Hinglish-Bench`, `Forensic-Recovery`, `The Watcher`, `Visitor Analytics`, `Auralyn`, and `3D Web Contents` still return `sdad.pro` pages and `llms.txt` snippets with removed projects and old metrics, even though the live site now returns 404 for those slugs. This is the single biggest branding risk because AI systems and search users can retrieve cached stale text.

Direct verification of ChatGPT/Claude references was **not possible**: both require login and no OpenAI/Anthropic API key is present in the environment. Publicly indexed `chatgpt.com` and `claude.ai` pages contain no relevant shared conversations, and the DataForSEO LLM mention tracker has no page for `sdad.pro`, `maelis.in`, or `sysone-bench`. There is no positive evidence that ChatGPT or Claude are recommending the work by brand; there is evidence that the work exists in surfaces they commonly cite (GitHub, Hugging Face, LinkedIn, MCP/skill directories, Jev directories).

agent-reach (Exa) also serves the stale homepage text: its #1 result for the quoted full name still contains `20+`, `85+`, `46+`, `22+`, ornith-flight, AgentLoop, Hinglish-Bench, and the old Apache 2.0 claim. agent-reach YouTube search found no owned channel, only two incidental "channel managed by Sai Dutta Abhishek Dash" credits on another creator's Odia music videos.

---

## Method and Limitations

- Direct Google SERP access through Obscura was blocked by Google's automated-traffic CAPTCHA (IP `106.215.147.95`, 2026-11-24T21:39Z), so positions below come from the Google-oriented `websearch` integration and Firecrawl's web index, not a manually solved Google SERP.
- Firecrawl hit a 10-request/minute cap during bulk sweeps; remaining keywords were checked with `websearch`.
- Positions are as returned by the respective index on 2026-11-25 and will drift.
- ChatGPT/Claude direct testing was blocked by login walls; `OPENAI_API_KEY` and `ANTHROPIC_API_KEY` are unset. No credentials were requested or used.
- "Not in top 10" means no target domain appeared in the inspected results, not that the site is absent from the entire index.

---

## Full Keyword Set Swept

### Entity / alias keywords
`Sai Dutta Abhishek Dash`, `"Sai Dutta Abhishek Dash"`, `Sai Dutta Dash founder engineer`, `"Sai Dutta Abhishek Dash" AI engineer`, `instax-dutta`, `R4C3R0P`, `RACER IS OP`, `AbhishekDash69`, `sdad.pro`, `site:sdad.pro`

### Venture / domain keywords
`Maelis Research`, `Maelis Research Odia`, `maelis.in`, `Offsage`, `Odia AI API`, `Odia tokenizer`, `odia-eval-benchmark`

### Current project keywords
`sysone-bench`, `T4-Bench`, `PhishScout`, `PhishTrap`, `truemotion MCP`, `gmail-automator MCP`, `winnow lead generation self-hosted`, `finetune-llm`, `darpa-audit`, `flash-compare`, `Gupshup Hinglish corpus`, `MarkItDownJS`, `Vulscany`, `Binify`, `Ansora`, `PacketBuddy`, `Brand Vibes`, `Market Validator`, `Roadmap Tutor`

### Removed / stale project keywords
`AgentLoop coding agent`, `ornith-flight`, `Hinglish-Bench`, `CL-Chat Reborn`, `Forensic-Recovery`, `The Watcher subreddit bot`, `Visitor Analytics SDK`, `Auralyn`, `3D Web Contents`

### Category / intent keywords
`on-device phishing detector`, `byte-identical model benchmark`, `Tesla T4 benchmark LLM`

---

## Google / Web Index Position Table

| Keyword | Target results and positions | Assessment |
|---|---|---|
| `Sai Dutta Abhishek Dash` (unquoted) | None in top 10. Top results: Abhishek Bachchan, Abhishek Dubey, other Abhisheks. | Entity ambiguous without quotes or surname combination. |
| `"Sai Dutta Abhishek Dash"` | `sdad.pro/` **#1**, `offsage.com/about` #4, `sdad.pro/about` #5, `github.com/instax-dutta` #6, `sdad.pro/skills` #8. | Strong exact-name ownership. |
| `Sai Dutta Dash founder engineer` | `sdad.pro/` **#1**, `sdad.pro/about` #2, `offsage.com/about` #4, `sdad.pro/projects` #5, `sdad.pro/skills` #9. | Strong role-aligned query. |
| `"Sai Dutta Abhishek Dash" AI engineer` | LinkedIn #1, GitHub profile #2/#5, sdad.pro #3, buildinpublic #7. | Good, but third-party profiles outrank own site. |
| `instax-dutta` | GitHub profile #8; instax.com and unrelated skill discussions above. | Handle is not distinctive. |
| `R4C3R0P` | No relevant result in top 10. | No search equity. |
| `RACER IS OP` | No relevant result in top 10. | No search equity. |
| `AbhishekDash69` | Instagram #1, buildinpublic #2, `sdad.pro/` #6, GitHub gist #7. | Own site present but social handles dominate. |
| `sdad.pro` | No `sdad.pro` result in top 5; `defkey.com/download/staad-pro` and similar noise. | Domain-name query is polluted. |
| `site:sdad.pro` | Firecrawl returned no rows for the operator; websearch showed home, about, projects, skills, contact, blog. | Domain is indexed but operator support differs by backend. |
| `Maelis Research Odia` | GitHub org #1, `maelis.in` #2, `maelis.org` #3, `sdad.pro/about` #4, `sdad.pro/` #5. | Good venture visibility; own site not #1. |
| `maelis.in` | No target in top 5; `maelis.info` noise. | Domain query still ambiguous. |
| `Offsage` | No target in top 5; unrelated `offstageco.com` and Facebook pages. | Weak. |
| `Odia AI API` | No target in top 5. | Category keyword unclaimed. |
| `Odia tokenizer` | No target in top 5. | Category keyword unclaimed. |
| `odia-eval-benchmark` | `saidutta69/odia-eval-benchmark` HF #1/#2; Maelis HF dataset not top 5; sdad.pro llms.txt present in websearch. | Duplicate personal dataset outranks the canonical Maelis dataset. |
| `on-device phishing detector` | Generic vendors; no target in top 5. | Category keyword unclaimed. |
| `byte-identical model benchmark` | `blog.sdad.pro/blog/sysone-bench-laya-vs-jev-byte-identical` **#5**. | Own blog ranks; project page does not. |
| `Tesla T4 benchmark LLM` | Medium/Reddit/fitmyllm; no target in top 5. | `T4-Bench` name collides with furniture and t4db. |
| `PhishScout` | `phishscout.net` and PhishRod dominate; HF model card appears around #5. | Severe name collision. Must disambiguate with full name. |
| `sysone-bench` | GitHub repo **#1**, docs #2, results #3, README #4, report #5, calibrateddecisions #6, `sysone.sdad.pro` #7. | Best-indexed project with multiple third-party citations. |
| `T4-Bench` | No target in top 10. Furniture/t4db/Reddit dominate. | Needs a unique query and stronger title. |
| `truemotion MCP` | Hinge Health TrueMotion and telematics dominate; no target. | Name collision; needs "truemotion MCP motion graphics sdad". |
| `gmail-automator MCP` | mcpmarket #1, glama #2, lobehub #6, Agentery #9, LinkedIn post #10. GitHub not top 10. | Third-party directories rank; own site absent. |
| `winnow lead generation` | GitHub repo **#1**; other Winnow products follow. | Good but name collision. |
| `finetune-llm` | skills.sh #1, GitHub repo #5, skillmd tutorials #7/#8. | Good distribution, own site absent. |
| `darpa-audit` | Skill Leaderboard #1, GitHub **#2**. | Good. |
| `flash-compare` | Skill Leaderboard #1, skills.pub #2, GitHub **#3**. | Good, but energy-comparison brand collides. |
| `Gupshup Hinglish corpus` | EMNLP/midas-research GupShup dominates; user's HF corpus not top 10. | Severe name collision. |
| `MarkItDownJS` | GitHub repo **#1**, npm packages #2-6, tooner #4. | Strong. |
| `Vulscany` | `sdad.pro/projects/vulscany` **#1**, projects #2, llms.txt #3, skills #4, home #5. | Own domain owns the keyword. |
| `Binify` | `sdad.pro/projects/binify` **#1**, `bin.sdad.pro` #2, llms.txt #3, projects #4. | Own domain owns the keyword. |
| `Ansora` | GitHub **#1**, `sdad.pro/skills` #2, `sdad.pro/projects/ansora` #3. | Good. |
| `PacketBuddy` | `sdad.pro/projects/packetbuddy` **#1**, GitHub README #2, GitHub repo #4. | Own domain owns the keyword. |
| `Brand Vibes` | `sdad.pro/projects/brand-vibes` **#1**, skills.pub #2, GitHub #3. | Good. |
| `Market Validator` | `sdad.pro/projects/market-validator` **#1**, skill directories #3+, GitHub README #4. | Good. |
| `Roadmap Tutor` | awesome-hermes issue #1, Socket #2, `sdad.pro/projects/roadmap-tutor` #3, GitHub #4. | Good but third-party issue outranks. |

---

## Stale / Removed Project Rankings

These are still indexed against `sdad.pro` despite live 404s:

| Removed keyword | Stale target still appearing |
|---|---|
| `AgentLoop coding agent` | GitHub gist #1, GitHub repo #2, stale `sdad.pro/projects/agentloop` #3 |
| `ornith-flight` | stale `sdad.pro/skills` #1, stale `sdad.pro/projects/ornith-flight` #2, stale projects/home/llms pages #3-6, GitHub topics #7 |
| `Hinglish-Bench` | stale `sdad.pro` home #1, gist #2, HF dataset #3, stale llms/projects #4-7 |
| `CL-Chat Reborn` | GitHub #1/#2, stale `sdad.pro/projects` #3, stale skills #4 |
| `Forensic-Recovery` | stale `sdad.pro/projects/forensic-recovery` #1, GitHub #2/#3 |
| `The Watcher` | stale `sdad.pro/projects/the-watcher` #1, stale llms/home/projects #2-5 |
| `Visitor Analytics` | stale `www.sdad.pro/projects` #1, stale project page #3 |
| `Auralyn` | GitHub #1, stale `sdad.pro/projects/auralyn` #2, stale projects #4 |
| `3D Web Contents` | stale `sdad.pro/projects/3d-web-contents` #1, stale llms files #2/#3 |

Live verification from the previous deployment check: these URLs return **404** on `https://sdad.pro`, so the ranking is stale-index residue, not a live content problem.

---

## ChatGPT and Claude Reference Check

### Direct access
- `https://chatgpt.com/` loads a login/signup wall. It does not permit anonymous prompting.
- `https://claude.ai/` loads a sign-in page.
- `OPENAI_API_KEY` and `ANTHROPIC_API_KEY` are unset, so no API-based answer test was run.

### Publicly indexed conversation/share pages
- `site:chatgpt.com "sdad.pro"` returned no relevant shared conversation; results were generic ChatGPT plan/plugin pages.
- `site:claude.ai "sdad.pro"` returned no relevant shared conversation; results were generic Claude artifacts/directory pages.
- `"sysone-bench" ChatGPT` returned GitHub, awesome-jev, CSDN and JevDirectory pages, not a ChatGPT answer citing the work.
- `"Sai Dutta Abhishek Dash" ChatGPT Claude` returned the user's own GitHub/HF/LinkedIn/blog pages, not third-party AI answers.

### Third-party LLM mention tracker
- DataForSEO's LLM mention tracker returned `404` for `/sdad.pro`, `/maelis.in`, and `/sysone-bench`.
- Its sitemap of tracked entities contains hundreds of brands but none of the user's entities. This is not proof of zero mentions, but it means there is no measured LLM mention score for the brand.

### Verdict
There is **no verifiable evidence** that ChatGPT or Claude currently refer to the user, `sdad.pro`, or specific projects in response to relevant prompts. There is also no evidence of a total absence of training-data presence: GitHub, Hugging Face, LinkedIn, MCP directories, skill directories, Jev directories, and the user's own blog are all crawlable and contain the work. Treat AI reference visibility as **unmeasured and probably low outside exact project-name queries**.

---

## Strongest and Weakest Assets

### Strong
- Exact-name queries: `sdad.pro` is #1 for the quoted full name and founder-engineer variant.
- `sysone-bench` has the best ecosystem footprint: GitHub #1, multiple independent directories, dedicated site.
- `Vulscany`, `Binify`, `PacketBuddy`, `Brand Vibes`, and `Market Validator` are owned by `sdad.pro` in search.
- `finetune-llm`, `darpa-audit`, `flash-compare`, `gmail-automator`, and `roadmap-tutor` are distributed through third-party skill/MCP directories.

### Weak
- Generic alias queries (`R4C3R0P`, `RACER IS OP`, `instax-dutta`) have almost no equity.
- Category queries (`Odia AI API`, `Odia tokenizer`, `on-device phishing detector`, `Tesla T4 benchmark LLM`) are unclaimed.
- `T4-Bench` and `truemotion` have severe name collisions.
- `Gupshup` and `PhishScout` collide with much larger unrelated entities.
- Stale search snippets still advertise removed projects and old numbers.
- No YouTube, Reddit, Wikipedia, or Wikidata entity with meaningful presence.
- No measured ChatGPT/Claude mention data.

---

## Optimization Plan

### Priority 1: Force index refresh
1. Resubmit `https://sdad.pro/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
2. Use URL Inspection on `/`, `/projects`, `/llms.txt`, `/llms-full.txt`, and each new project page.
3. Consider returning `410 Gone` for permanently removed project slugs to accelerate deindexing.
4. Add fresh `lastmod` to all project detail pages if not already present.

### Priority 2: Win exact category queries
- Rename page titles/H1s to include the category phrase:
  - `sysone-bench: Independent Byte-Identical Model Benchmark`
  - `T4-Bench: Measured Tesla T4 LLM and Image Benchmarks`
  - `PhishScout by SDAD: On-Device Phishing URL Detection`
  - `truemotion: MCP Motion-Graphics Studio for Coding Agents`
- Add those exact phrases to the first 50 words of each answer block and `llms.txt`.
- Keep full-name disambiguation in titles and descriptions.

### Priority 3: Build third-party citation surfaces
- Get `T4-Bench` listed in awesome-LLM-benchmark, LocalLLaMA, Kaggle GPU writeups, and Jev/System One directories.
- Get `truemotion` listed in MCP directories and motion-graphics communities under a unique name.
- Submit `PhishTrap` and `PhishScout` to cybersecurity newsletters and arXiv/OSINT directories.
- Continue publishing technical posts on `blog.sdad.pro`; it already ranks for `byte-identical model benchmark`.

### Priority 4: Strengthen entity graph
- Use one canonical alias set everywhere: Sai Dutta Abhishek Dash, SDAD, instax-dutta, R4C3R0P, RACER IS OP, AbhishekDash69.
- Ensure GitHub, Hugging Face, LinkedIn, X, Maelis, and Offsage profile URLs are all in `sameAs`.
- Add the exact project names as `subjectOf`/`sameAs` links from the Person node where relevant.
- Do not create Wikipedia/Wikidata claims without real notability; create them only with independent sources.

### Priority 5: Measure AI visibility properly
- Use DataForSEO LLM Mentions API or a similar paid tracker with the exact keyword set.
- Test ChatGPT/Claude with logged-in accounts or API keys for a fixed prompt set, monthly.
- Track whether responses cite `sdad.pro`, GitHub repos, HF datasets, MCP directories, or no source at all.

---

## Appendix: Evidence Snapshots

### Firecrawl exact-name search
Query `"Sai Dutta Abhishek Dash"` returned `sdad.pro/` at position 1, `offsage.com/about/` at 4, `sdad.pro/about` at 5, `github.com/instax-dutta/instax-dutta` at 6, and `sdad.pro/skills` at 8.

### Firecrawl domain-filter search
`includeDomains: ["sdad.pro"]` for `Sai Dutta Abhishek Dash` returned 10 indexed pages: `/`, `/about`, `/skills`, `/contact`, `/projects`, blog pages. For `sysone-bench`, only `blog.sdad.pro/blog/sysone-bench-laya-vs-jev-byte-identical` appeared. For `gmail-automator` and `PhishTrap`, no `sdad.pro` result appeared.

### Google block
Obscura navigation to `https://www.google.com/search?q=%22Sai+Dutta+Abhishek+Dash%22` returned the automated-traffic CAPTCHA page, IP `106.215.147.95`, time `2026-11-24T21:39:03Z`.

### ChatGPT/Claude login
Obscura at `chatgpt.com/` returned "Log in / Sign up for free"; at `claude.ai/` returned "Sign in or create an account". Environment check: `OPENAI_API_KEY UNSET`, `ANTHROPIC_API_KEY UNSET`.

### LLM tracker
`firecrawl_map` of `llm.dataforseo.com` returned 50 tracked entity pages; none were the user's domains. Direct scrapes of `/sdad.pro`, `/maelis.in`, and `/sysone-bench` returned HTTP 404 "Page Not Found".

### Live vs index mismatch
Live `https://sdad.pro/projects/agentloop` and `/projects/ornith-flight` return 404, but search indexes still show them as current portfolio pages.

### agent-reach evidence
`agent-reach web search '"Sai Dutta Abhishek Dash"' --limit 5` returned `https://sdad.pro/` at #1 with stale text (20+/85+/46+/22+, ornith-flight, AgentLoop, Hinglish-Bench, Apache 2.0 claim), LinkedIn #2, `sdad.pro/about` #3, `sdad.pro/experience` #4, and `maelis.in` #5. `agent-reach youtube search 'Sai Dutta Abhishek Dash' --limit 5` returned no owned channel; two results were Odia music videos whose descriptions say "channel managed by Sai Dutta Abhishek Dash".
