export type Project = {
  title: string
  /** URL segment for /projects/[slug]. */
  slug: string
  subtitle: string
  description: string
  technologies: string[]
  /** Two specific, verifiable facts about the system. */
  highlights: string[]
  link?: string
  github?: string
  category: string
  group: string
  language?: string
}

export const projects: Project[] = [
  {
    title: "sysone-bench",
    slug: "sysone-bench",
    group: "AI & Language Infrastructure",
    subtitle: "Independent Benchmark for System One Decision Models",
    description:
      "Byte-identical head-to-head benchmark for System One decision models, with 50 distinct measurements, sealed manifests, checksummed artifacts, and seed-42 reproducibility.",
    highlights: [
      "Scores a closed Jev reference at 0.9065 and the best open model at 0.8702 under the same protocol.",
      "Ships 36 test files, CI, public results, and reproducibility tooling.",
    ],
    technologies: ["Python", "LLM Evaluation", "Benchmarking", "Reproducibility", "CI"],
    link: "https://sysone.sdad.pro",
    category: "AI Benchmarking",
    language: "Python",
  },
  {
    title: "T4-Bench",
    slug: "t4-bench",
    group: "AI & Language Infrastructure",
    subtitle: "Measured AI Workloads on Consumer Tesla T4 GPUs",
    description:
      "Benchmark suite for LLM inference, fine-tuning, image, video, and agent workloads on two consumer Kaggle Tesla T4 GPUs. Preserves raw results, logs, reports, and generated media.",
    highlights: [
      "Records LFM2.5-8B-A1B at 119 tok/s and FLUX.2 klein at 374 images/hour on the measured T4 setup.",
      "Compares Unsloth NF4 at 7.1 GB against 14.9 GB stock in the recorded fine-tuning run.",
    ],
    technologies: ["Python", "GPU Benchmarking", "LLM Inference", "Fine-Tuning", "Reproducibility"],
    link: "https://t4b.sdad.pro",
    category: "AI Benchmarking",
    language: "Python",
  },
  {
    title: "finetune-llm",
    slug: "finetune-llm",
    group: "AI Agent Skills",
    subtitle: "Hardware-Aware, Verification-Gated LLM Fine-Tuning",
    description:
      "AI agent skill that probes the GPU before choosing an engine, prepares deterministic data, smoke-tests the run, trains with instrumentation, and verifies the adapter with a neutral evaluator.",
    highlights: [
      "A controlled four-arm 2x T4 benchmark measures Unsloth native at 7,111 MiB while stock Hugging Face OOMs around 14.8 GB.",
      "Enforces hardware probes, deterministic manifests, nonzero adapters, and held-out evaluation.",
    ],
    technologies: ["Python", "LLM Fine-Tuning", "QLoRA", "GPU Automation", "AI Skills"],
    github: "https://github.com/instax-dutta/finetune-llm",
    category: "AI Agent Skills",
    language: "Python",
  },
  {
    title: "truemotion",
    slug: "truemotion",
    group: "Platforms & Products",
    subtitle: "Local MCP Motion-Graphics Studio",
    description:
      "Local MCP motion-graphics studio where agents author HTML/GSAP scenes, inspect rendered frames, receive measured feedback, and export frame-accurate MP4s without cloud services.",
    highlights: [
      "Ships 11 MCP tools with deterministic seek-safe timelines and resumable rendering.",
      "Includes 103 tests plus golden-frame, crash, audio, CSP, schema, and concurrency suites.",
    ],
    technologies: ["JavaScript", "MCP", "GSAP", "FFmpeg", "Agent Tooling"],
    github: "https://github.com/instax-dutta/truemotion",
    category: "Agent Infrastructure",
    language: "JavaScript",
  },
  {
    title: "gmail-automator",
    slug: "gmail-automator",
    group: "Platforms & Products",
    subtitle: "Quota-Safe Gmail Gateway for AI Agents",
    description:
      "Self-hosted Gmail MCP/REST gateway with encrypted OAuth custody, durable queues, rolling 24-hour quota accounting, and paced sending that stays below Gmail's daily limits.",
    highlights: [
      "Ships 14 tools and enforces an 85% quota ceiling with terminal handling for daily-limit rejections.",
      "Includes 61 test files, CI, and release workflows.",
    ],
    technologies: ["Python", "Gmail API", "MCP", "OAuth", "Queueing"],
    github: "https://github.com/instax-dutta/gmail-automator",
    category: "Agent Infrastructure",
    language: "Python",
  },
  {
    title: "MarkItDownJS",
    slug: "markitdownjs",
    group: "AI & Language Infrastructure",
    subtitle: "Universal Document-to-Markdown Conversion Engine",
    description:
      "AST-first document ingestion and conversion platform for TypeScript. Converts PDFs, Office docs, images, audio, and archives into structured AI-ready Markdown with RAG chunking.",
    highlights: [
      "Handles PDFs, DOCX, PPTX, XLSX, HTML, CSV, JSON, XML, images, audio, EPUB, and archives.",
      "Built as a Turborepo monorepo with RAG-ready chunking applied to the output.",
    ],
    technologies: ["TypeScript", "Node.js", "Turborepo", "pnpm", "Vite"],
    github: "https://github.com/instax-dutta/MarkItDownJS",
    category: "Document Processing",
    language: "TypeScript",
  },
  {
    title: "PhishScout",
    slug: "phishscout",
    group: "AI & Language Infrastructure",
    subtitle: "On-Device Phishing Detection and Data Pipeline",
    description:
      "Security system pairing a compact phishing classifier with PhishTrap, an auto-refreshing dataset pipeline with canonical deduplication, freshness tracking, deterministic splits, and publication gates.",
    highlights: [
      "PhishTrap refreshes from OpenPhish, Phishing.Database, PhishStats, and Tranco every six hours, then validates before publishing.",
      "PhishScout runs locally for router, browser-extension, and edge-device deployment.",
    ],
    technologies: ["Python", "Phishing Detection", "On-Device ML", "Data Pipelines", "Security"],
    link: "https://huggingface.co/datasets/saidutta69/PhishTrap",
    github: "https://github.com/instax-dutta/PhishScout",
    category: "Security Data Engineering",
    language: "Python",
  },
  {
    title: "Gupshup",
    slug: "gupshup",
    group: "AI & Language Infrastructure",
    subtitle: "Privacy-Scrubbed Hinglish Chat Corpus",
    description:
      "Original privacy-scrubbed corpus of observed Roman-script Hinglish chat, including community emote tokens. Author hashing, mention/link redaction, abuse filtering, and deterministic splits.",
    highlights: [
      "Contains 353,843 messages split into 318,458 training and 35,385 test rows.",
      "Ships as 35.3 MB Parquet with documented anonymisation and source handling.",
    ],
    technologies: ["Hinglish", "NLP", "Dataset Engineering", "Privacy", "Language Data"],
    link: "https://huggingface.co/datasets/saidutta69/Gupshup",
    category: "Language Dataset",
  },
  {
    title: "Vulscany",
    slug: "vulscany",
    group: "Security & Systems",
    subtitle: "AI-Powered Code Security Agent",
    description:
      "Private, self-hostable AI code scanner with automated fix generation. Multi-language scanning, real-time CVE matching, and GitHub OAuth with zero database dependencies.",
    highlights: [
      "Born from a venture-backed startup codebase, now open source and fully self-hostable.",
      "Runs entirely locally with zero database dependencies, using Mistral AI and Ollama.",
    ],
    technologies: ["Next.js", "TypeScript", "Mistral AI", "Ollama", "GitHub OAuth"],
    github: "https://github.com/instax-dutta/vulscany",
    category: "Security Engineering",
    language: "TypeScript",
  },
  {
    title: "PraharShield",
    slug: "praharshield",
    group: "Security & Systems",
    subtitle: "Minecraft Velocity Anti-Bot Filter",
    description:
      "High-performance bot filtering plugin for Minecraft Velocity proxies. CAPTCHA handshakes and client fingerprinting to block 100k join-flood JPS attacks on 1GB RAM VPS.",
    highlights: [
      "Blocks 100k join-flood JPS attacks on a 1GB RAM VPS.",
      "Uses CAPTCHA handshakes and client fingerprinting on top of LimboAPI.",
    ],
    technologies: ["Java", "Velocity", "LimboAPI", "Gradle"],
    github: "https://github.com/instax-dutta/PraharShield",
    category: "Security Engineering",
    language: "Java",
  },
  {
    title: "DadGuard",
    slug: "dadguard",
    group: "Security & Systems",
    subtitle: "Windows Security Watchdog for Family Members",
    description:
      "Lightweight Windows security watchdog for protecting non-technical family members. Real-time threat monitoring with minimal system overhead.",
    highlights: [
      "Watches for suspicious processes and raises alerts in real time.",
      "Targets non-technical family members, so it stays deliberately lightweight on system overhead.",
    ],
    technologies: ["C#", "Windows Security", "Real-time Monitoring"],
    github: "https://github.com/instax-dutta/DadGuard",
    category: "Windows Security",
    language: "C#",
  },
  {
    title: "Binify",
    slug: "binify",
    group: "Platforms & Products",
    subtitle: "Zero-Knowledge Encrypted Pastebin",
    description:
      "Zero-knowledge encrypted pastebin with client-side encryption ensuring absolute privacy. Built with Next.js, Turso, Upstash Redis, and Web Crypto API.",
    highlights: [
      "Encrypts in the browser with the Web Crypto API, so the server never receives plaintext.",
      "Uses Turso for storage and Upstash Redis for rate limiting.",
    ],
    technologies: ["Next.js", "Turso", "Upstash Redis", "Web Crypto API", "TypeScript"],
    link: "https://bin.sdad.pro",
    github: "https://github.com/instax-dutta/binify",
    category: "Privacy Infrastructure",
    language: "TypeScript",
  },
  {
    title: "Ansora",
    slug: "ansora",
    group: "Platforms & Products",
    subtitle: "Self-Hostable Serverless Blogging Platform",
    description:
      "Every post is a Markdown file, every save is a git commit. No database, no SaaS CMS - deploy to Netlify, Vercel, Docker, or your own VPS.",
    highlights: [
      "Every post is a Markdown file and every save is a git commit, so content is version controlled natively.",
      "Deploys to Netlify, Vercel, Docker, or any VPS with no database at all.",
    ],
    technologies: ["TypeScript", "Git", "Serverless", "Markdown"],
    link: "https://blog.sdad.pro",
    github: "https://github.com/instax-dutta/ansora",
    category: "Developer Platform",
    language: "TypeScript",
  },
  {
    title: "winnow",
    slug: "winnow",
    group: "Platforms & Products",
    subtitle: "Self-Hosted Lead Generation for Agencies",
    description:
      "Self-hosted lead generation and cold-email platform for agencies. Finds published business emails, keeps prospect data local, and sends campaigns through owned mailboxes with tenant isolation and abuse controls.",
    highlights: [
      "Ships 218 tests, 14 release gates, and 75 tenant-isolation checks.",
      "Includes SSRF redirect protection, secret-store isolation, an SBOM, and checksummed release artifacts.",
    ],
    technologies: ["Java", "Lead Generation", "Cold Email", "Tenant Isolation", "Security"],
    github: "https://github.com/instax-dutta/winnow",
    category: "Self-Hosted Product",
    language: "Java",
  },
  {
    title: "PacketBuddy",
    slug: "packetbuddy",
    group: "Platforms & Products",
    subtitle: "Cross-Platform Network Usage Monitor",
    description:
      "Ultra-lightweight bandwidth monitor and network traffic tracker with real-time analytics. Runs silently in the background with zero configuration.",
    highlights: [
      "Runs silently in the background with zero configuration required.",
      "Pairs Python and JavaScript with NeonDB storage and Chart.js dashboards.",
    ],
    technologies: ["Python", "JavaScript", "Shell", "NeonDB", "Chart.js"],
    github: "https://github.com/instax-dutta/packet-buddy",
    category: "Network Monitoring",
    language: "Python",
  },
  {
    title: "Brand Vibes",
    slug: "brand-vibes",
    group: "AI Agent Skills",
    subtitle: "Apply Any Company's Design Language While Vibecoding",
    description:
      "AI agent skill: ships a library of 66 full brand design profiles (Stripe, Linear, Vercel, Apple, Claude, Nike, Ferrari...) plus an off-library DNA-extraction workflow.",
    highlights: [
      "Ships 66 full brand design profiles, including Stripe, Linear, Vercel, Apple, and Nike.",
      "Adds an off-library DNA-extraction workflow for brands not in the collection.",
    ],
    technologies: ["Design Systems", "Brand DNA", "Tailwind CSS", "AI Skills"],
    github: "https://github.com/instax-dutta/brand-vibes",
    category: "AI Agent Skills",
  },
  {
    title: "Market Validator",
    slug: "market-validator",
    group: "AI Agent Skills",
    subtitle: "Validate Ideas with Real User Complaints",
    description:
      "AI agent skill: scrapes real user complaints from Reddit, Twitter, G2, Quora, HackerNews, ProductHunt, V2EX, XiaoHongShu, Bilibili, and YouTube using agent-reach.",
    highlights: [
      "Scrapes real user complaints from 10+ platforms including Reddit, G2, HackerNews, and YouTube.",
      "Replaces guesswork with evidence drawn from actual user pain points.",
    ],
    technologies: ["Market Research", "Data Scraping", "AI Skills", "Multi-Platform"],
    github: "https://github.com/instax-dutta/market-validator",
    category: "AI Agent Skills",
  },
  {
    title: "darpa-audit",
    slug: "darpa-audit",
    group: "AI Agent Skills",
    subtitle: "Deterministic Startup and Project Idea Audit",
    description:
      "Agent skill that applies the Heilmeier Catechism as a deterministic startup/project audit, forcing ideas through jargon stripping, status-quo analysis, failure modes, and week-4/week-12 tests.",
    highlights: [
      "Runs five ordered prompts and stops at the first failed gate.",
      "Returns an explicit SURVIVES / DOES NOT SURVIVE verdict with a revival condition.",
    ],
    technologies: ["Startup Validation", "Decision Frameworks", "AI Skills", "Heilmeier Catechism"],
    github: "https://github.com/instax-dutta/darpa-audit",
    category: "AI Agent Skills",
  },
  {
    title: "flash-compare",
    slug: "flash-compare",
    group: "AI Agent Skills",
    subtitle: "Evidence-First Product Comparison",
    description:
      "Agent skill for evidence-first product comparison: validates shortlisted products against OEM specs, owner reports, independent load tests, verified buyer reviews, and multiple stores.",
    highlights: [
      "Rejects seeded reviews and inflated listings, then keeps at most two candidates.",
      "Uses agent-reach first with web-search fallback and no affiliate links.",
    ],
    technologies: ["Product Research", "Agent-Reach", "Review Verification", "AI Skills"],
    github: "https://github.com/instax-dutta/flash-compare",
    category: "AI Agent Skills",
  },
  {
    title: "Google Code Review",
    slug: "google-code-review",
    group: "AI Agent Skills",
    subtitle: "Google's Code Review Best Practices as an AI Skill",
    description:
      "Google's official code review best practices, packaged as an AI agent skill. Covers reviewer perspective, developer perspective, CL descriptions, handling feedback, and conflict resolution.",
    highlights: [
      "Covers both the reviewer and the developer side of code review.",
      "Includes guidance on changelist descriptions, handling feedback, and resolving conflicts.",
    ],
    technologies: ["Code Review", "AI Skills", "Engineering Practices"],
    github: "https://github.com/instax-dutta/google-code-review",
    category: "AI Agent Skills",
  },
  {
    title: "Only Skills You Need",
    slug: "only-skills-you-need",
    group: "AI Agent Skills",
    subtitle: "One Install Command for Every Coding AI Tool",
    description:
      "Curated skills stack for daily use: full-stack dev, frontend/React, SEO, GSD workflow, and code review. Works on opencode, Claude Code, Antigravity, Kilocode.",
    highlights: [
      "Installs a curated daily skills stack with a single command.",
      "Works across opencode, Claude Code, Antigravity, and Kilocode.",
    ],
    technologies: ["AI Skills", "Full-Stack", "Multi-Tool"],
    github: "https://github.com/instax-dutta/only-skills-you-need",
    category: "AI Agent Skills",
  },
  {
    title: "Roadmap Tutor",
    slug: "roadmap-tutor",
    group: "AI Agent Skills",
    subtitle: "Learn Any roadmap.sh Roadline One Topic at a Time",
    description:
      "Hermes Agent skill: learn any roadmap.sh roadmap one topic at a time, tracked across sessions. Stdlib-only Python, runs on a Raspberry Pi.",
    highlights: [
      "Tracks progress across sessions on any roadmap.sh roadmap, one topic at a time.",
      "Stdlib-only Python, so it runs on a Raspberry Pi.",
    ],
    technologies: ["Python", "AI Skills", "Learning System", "Raspberry Pi"],
    github: "https://github.com/instax-dutta/roadmap-tutor",
    category: "AI Agent Skills",
    language: "Python",
  },
]
