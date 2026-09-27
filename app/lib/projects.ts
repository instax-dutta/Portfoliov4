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
    title: "ornith-flight",
    slug: "ornith-flight",
    group: "AI & Language Infrastructure",
    subtitle: "C99 Inference Engine for 35B MoE on Consumer Hardware",
    description:
      "Expert-streaming C99 inference engine for Ornith 35B MoE — runs 20 GB models on 8 GB Apple Silicon via per-layer streaming I/O. Zero Python, pure systems engineering.",
    highlights: [
      "Targets the Ornith 35B mixture-of-experts architecture and streams experts per layer rather than loading the full parameter set.",
      "Written in C99 with zero Python dependencies, as pure systems engineering.",
    ],
    technologies: ["C99", "MoE", "Apple Silicon", "Inference", "Systems Programming"],
    github: "https://github.com/instax-dutta/ornith-flight",
    category: "LLM Inference",
    language: "C",
  },
  {
    title: "AgentLoop",
    slug: "agentloop",
    group: "AI & Language Infrastructure",
    subtitle: "Self-Verifying Autonomy Wrapper for Coding Agents",
    description:
      "Harness-agnostic, self-verifying autonomy wrapper for coding agents. Drives OpenCode/Kilo/Claude/Aider/Codex in a verify-gated loop with a held-out oracle — so the agent actually finishes and proves it is correct.",
    highlights: [
      "Drives OpenCode, Kilo, Claude, Aider, and Codex through a single unmodified wrapper.",
      "Uses a held-out oracle the agent cannot read, so verification is genuinely independent.",
    ],
    technologies: ["Python", "LLM Agents", "Verification", "Autonomy"],
    github: "https://github.com/instax-dutta/agentloop",
    category: "AI Agent Infrastructure",
    language: "Python",
  },
  {
    title: "PhishScout",
    slug: "phishscout",
    group: "AI & Language Infrastructure",
    subtitle: "131 KB On-Device Phishing URL Detector",
    description:
      "90% precision, ~4ms per lookup. Sub-100KB on-device ML model for network-level scam protection. Trained and benchmarked with reproducible pipeline on Hugging Face.",
    highlights: [
      "Trained on curated phishing datasets from OpenPhish, Phishing.Database, and PhishStats.",
      "Small enough to run on home routers, browser extensions, and lightweight VPS instances.",
    ],
    technologies: ["Python", "On-Device ML", "Model Quantization", "Edge Inference"],
    link: "https://huggingface.co/saidutta69/PhishScout",
    github: "https://github.com/instax-dutta/PhishScout",
    category: "On-Device ML",
    language: "Python",
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
    title: "CL-Chat Reborn",
    slug: "cl-chat-reborn",
    group: "Security & Systems",
    subtitle: "P2P Encrypted Command-Line Chat",
    description:
      "Peer-to-peer command-line chat with X25519 ECDH encryption and ChaCha20-Poly1305 AEAD. Serverless mesh propagation, TOFU fingerprint verification, full input sanitization.",
    highlights: [
      "Uses X25519 ECDH key exchange with ChaCha20-Poly1305 AEAD and HKDF-SHA256 derivation.",
      "Covers all cryptographic operations with 81 pytest tests, plus TOFU fingerprint verification.",
    ],
    technologies: ["Python", "X25519 ECDH", "ChaCha20", "HKDF-SHA256", "Cryptography"],
    github: "https://github.com/instax-dutta/cl-chat-reborn",
    category: "Cryptography / P2P",
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
    title: "Hinglish-Bench",
    slug: "hinglish-bench",
    group: "AI & Language Infrastructure",
    subtitle: "Reference-Free Benchmark for Hinglish LLM Generation",
    description:
      "34 prompts, 8 categories, CMI/M-Index/SyMCoM metrics with LLM judge. lm-evaluation-harness integration for evaluating Hindi-English code-mixed text generation.",
    highlights: [
      "Scores generations with CMI, M-Index, and SyMCoM, plus an LLM judge.",
      "Integrates with lm-evaluation-harness for standardized evaluation pipelines.",
    ],
    technologies: ["Python", "NLP", "Benchmarking", "Language Evaluation", "lm-eval-harness"],
    github: "https://github.com/instax-dutta/hinglish-bench",
    category: "NLP Benchmarking",
    language: "Python",
  },
  {
    title: "Forensic-Recovery",
    slug: "forensic-recovery",
    group: "Security & Systems",
    subtitle: "Forensically-Sound Digital Evidence Acquisition",
    description:
      "PowerShell digital evidence acquisition tool with SHA-256 chain-of-custody verification. Automated system file exclusion, audit logs, dry-run mode, and multi-drive triage.",
    highlights: [
      "Verifies a SHA-256 chain of custody over every piece of acquired evidence.",
      "Adds automated system file exclusion, audit logs, dry-run mode, and multi-drive triage.",
    ],
    technologies: ["PowerShell", "SHA-256", "Digital Forensics", "Windows"],
    github: "https://github.com/instax-dutta/Forensic-Recovery",
    category: "Digital Forensics",
    language: "PowerShell",
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
    title: "The Watcher",
    slug: "the-watcher",
    group: "Platforms & Products",
    subtitle: "Reddit Used-Tech Intelligence Bot",
    description:
      "Stalks 13 Indian used-tech subreddits 24/7, snipes WTS posts, LLM-extracts price/specs/condition, and drops rich embeds in Discord. Automated market intelligence.",
    highlights: [
      "Monitors 13 Indian used-tech subreddits continuously for WTS posts.",
      "LLM-extracts price, specs, and condition, then posts rich embeds to Discord.",
    ],
    technologies: ["Python", "Reddit API", "LLM Extraction", "Discord", "Automation"],
    github: "https://github.com/instax-dutta/The-Watcher",
    category: "Data Engineering / AI",
    language: "Python",
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
    title: "Ansora",
    slug: "ansora",
    group: "Platforms & Products",
    subtitle: "Self-Hostable Serverless Blogging Platform",
    description:
      "Every post is a Markdown file, every save is a git commit. No database, no SaaS CMS — deploy to Netlify, Vercel, Docker, or your own VPS.",
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
    title: "Visitor Analytics",
    slug: "visitor-analytics",
    group: "Platforms & Products",
    subtitle: "Privacy-Preserving Analytics SDK",
    description:
      "Production-ready, framework-agnostic analytics SDK for web applications. Tracks visitors, page views, performance, and interactions — all anonymous, zero PII.",
    highlights: [
      "Tracks visitors, page views, performance, and interactions without storing personal data.",
      "Framework agnostic, so it drops into any web application without a rebuild.",
    ],
    technologies: ["TypeScript", "Analytics", "Privacy-First", "Framework-Agnostic"],
    github: "https://github.com/instax-dutta/visitor-analytics",
    category: "Privacy / Developer Tooling",
    language: "TypeScript",
  },
  {
    title: "Auralyn",
    slug: "auralyn",
    group: "Platforms & Products",
    subtitle: "Discord Music Bot with Integrated Lavalink",
    description:
      "Zero-infrastructure Discord music bot with a bundled Lavalink server. High-fidelity playback, smart search, and single-container Docker deployment.",
    highlights: [
      "Ships a bundled Lavalink server in a single container, so no external audio setup is needed.",
      "Provides high-fidelity playback, smart search, and queue management through Discord.js.",
    ],
    technologies: ["JavaScript", "Discord.js", "Lavalink", "Docker"],
    link: "https://auralyn.sdad.pro",
    github: "https://github.com/instax-dutta/Auralyn",
    category: "Discord Bot",
    language: "JavaScript",
  },
  {
    title: "3D Web Contents",
    slug: "3d-web-contents",
    group: "Creative Coding",
    subtitle: "Zero-Dep React Three.js Components",
    description:
      "8 copy-paste 3D components for React + Three.js — CSS3DCard, ParticleField, MorphingBlob, WarpSpeed, TunnelScroll, GeometryRepel, LightingReflection, BarChart3D.",
    highlights: [
      "Ships eight copy-paste components including ParticleField, MorphingBlob, and WarpSpeed.",
      "Zero npm dependencies, so you own the source outright instead of inheriting a package.",
    ],
    technologies: ["React", "Three.js", "WebGL", "3D Graphics"],
    github: "https://github.com/instax-dutta/3d-web-contents",
    category: "Frontend / Creative Coding",
    language: "JavaScript",
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
