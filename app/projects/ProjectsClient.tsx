"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { ExternalLink, Github } from "lucide-react"
import { transitionSmooth } from "../lib/animation"

const projects = [
  {
    title: "ornith-flight",
    subtitle: "C99 Inference Engine for 35B MoE on Consumer Hardware",
    description: "Expert-streaming C99 inference engine for Ornith 35B MoE — runs 20 GB models on 8 GB Apple Silicon via per-layer streaming I/O. Zero Python, pure systems engineering.",
    technologies: ["C99", "MoE", "Apple Silicon", "Inference", "Systems Programming"],
    github: "https://github.com/instax-dutta/ornith-flight",
  },
  {
    title: "AgentLoop",
    subtitle: "Self-Verifying Autonomy Wrapper for Coding Agents",
    description: "Harness-agnostic, self-verifying autonomy wrapper for coding agents. Drives OpenCode/Kilo/Claude/Aider/Codex in a verify-gated loop with a held-out oracle — so the agent actually finishes and proves it is correct.",
    technologies: ["Python", "LLM Agents", "Verification", "Autonomy"],
    github: "https://github.com/instax-dutta/agentloop",
  },
  {
    title: "PhishScout",
    subtitle: "131 KB On-Device Phishing URL Detector",
    description: "90% precision, ~4ms per lookup. Sub-100KB on-device ML model for network-level scam protection. Trained and benchmarked with reproducible pipeline on Hugging Face.",
    technologies: ["Python", "On-Device ML", "Model Quantization", "Edge Inference"],
    link: "https://huggingface.co/saidutta69/PhishScout",
    github: "https://github.com/instax-dutta/PhishScout",
  },
  {
    title: "Vulscany",
    subtitle: "AI-Powered Code Security Agent",
    description: "Private, self-hostable AI code scanner with automated fix generation. Multi-language scanning, real-time CVE matching, and GitHub OAuth with zero database dependencies.",
    technologies: ["Next.js", "TypeScript", "Mistral AI", "Ollama", "GitHub OAuth"],
    github: "https://github.com/instax-dutta/vulscany",
  },
  {
    title: "CL-Chat Reborn",
    subtitle: "P2P Encrypted Command-Line Chat",
    description: "Peer-to-peer command-line chat with X25519 ECDH encryption and ChaCha20-Poly1305 AEAD. Serverless mesh propagation, TOFU fingerprint verification, full input sanitization.",
    technologies: ["Python", "X25519 ECDH", "ChaCha20", "HKDF-SHA256", "Cryptography"],
    github: "https://github.com/instax-dutta/cl-chat-reborn",
  },
  {
    title: "MarkItDownJS",
    subtitle: "Universal Document-to-Markdown Conversion Engine",
    description: "AST-first document ingestion and conversion platform for TypeScript. Converts PDFs, Office docs, images, audio, and archives into structured AI-ready Markdown with RAG chunking.",
    technologies: ["TypeScript", "Node.js", "Turborepo", "pnpm", "Vite"],
    github: "https://github.com/instax-dutta/MarkItDownJS",
  },
  {
    title: "Binify",
    subtitle: "Zero-Knowledge Encrypted Pastebin",
    description: "Zero-knowledge encrypted pastebin with client-side encryption ensuring absolute privacy. Built with Next.js, Turso, Upstash Redis, and Web Crypto API.",
    technologies: ["Next.js", "Turso", "Upstash Redis", "Web Crypto API", "TypeScript"],
    link: "https://bin.sdad.pro",
    github: "https://github.com/instax-dutta/binify",
  },
  {
    title: "Hinglish-Bench",
    subtitle: "Reference-Free Benchmark for Hinglish LLM Generation",
    description: "34 prompts, 8 categories, CMI/M-Index/SyMCoM metrics with LLM judge. lm-evaluation-harness integration for evaluating Hindi-English code-mixed text generation.",
    technologies: ["Python", "NLP", "Benchmarking", "Language Evaluation", "lm-eval-harness"],
    github: "https://github.com/instax-dutta/hinglish-bench",
  },
  {
    title: "Forensic-Recovery",
    subtitle: "Forensically-Sound Digital Evidence Acquisition",
    description: "PowerShell digital evidence acquisition tool with SHA-256 chain-of-custody verification. Automated system file exclusion, audit logs, dry-run mode, and multi-drive triage.",
    technologies: ["PowerShell", "SHA-256", "Digital Forensics", "Windows"],
    github: "https://github.com/instax-dutta/Forensic-Recovery",
  },
  {
    title: "PraharShield",
    subtitle: "Minecraft Velocity Anti-Bot Filter",
    description: "High-performance bot filtering plugin for Minecraft Velocity proxies. CAPTCHA handshakes and client fingerprinting to block 100k join-flood JPS attacks on 1GB RAM VPS.",
    technologies: ["Java", "Velocity", "LimboAPI", "Gradle"],
    github: "https://github.com/instax-dutta/PraharShield",
  },
  {
    title: "The Watcher",
    subtitle: "Reddit Used-Tech Intelligence Bot",
    description: "Stalks 13 Indian used-tech subreddits 24/7, snipes WTS posts, LLM-extracts price/specs/condition, and drops rich embeds in Discord. Automated market intelligence.",
    technologies: ["Python", "Reddit API", "LLM Extraction", "Discord", "Automation"],
    github: "https://github.com/instax-dutta/The-Watcher",
  },
  {
    title: "DadGuard",
    subtitle: "Windows Security Watchdog for Family Members",
    description: "Lightweight Windows security watchdog for protecting non-technical family members. Real-time threat monitoring with minimal system overhead.",
    technologies: ["C#", "Windows Security", "Real-time Monitoring"],
    github: "https://github.com/instax-dutta/DadGuard",
  },
  {
    title: "Ansora",
    subtitle: "Self-Hostable Serverless Blogging Platform",
    description: "Every post is a Markdown file, every save is a git commit. No database, no SaaS CMS — deploy to Netlify, Vercel, Docker, or your own VPS.",
    technologies: ["TypeScript", "Git", "Serverless", "Markdown"],
    link: "https://blog.sdad.pro",
    github: "https://github.com/instax-dutta/ansora",
  },
  {
    title: "Visitor Analytics",
    subtitle: "Privacy-Preserving Analytics SDK",
    description: "Production-ready, framework-agnostic analytics SDK for web applications. Tracks visitors, page views, performance, and interactions — all anonymous, zero PII.",
    technologies: ["TypeScript", "Analytics", "Privacy-First", "Framework-Agnostic"],
    github: "https://github.com/instax-dutta/visitor-analytics",
  },
  {
    title: "Auralyn",
    subtitle: "Discord Music Bot with Integrated Lavalink",
    description: "Zero-infrastructure Discord music bot with a bundled Lavalink server. High-fidelity playback, smart search, and single-container Docker deployment.",
    technologies: ["JavaScript", "Discord.js", "Lavalink", "Docker"],
    link: "https://auralyn.sdad.pro",
    github: "https://github.com/instax-dutta/Auralyn",
  },
  {
    title: "Brand Vibes",
    subtitle: "Apply Any Company's Design Language While Vibecoding",
    description: "AI agent skill: ships a library of 66 full brand design profiles (Stripe, Linear, Vercel, Apple, Claude, Nike, Ferrari...) plus an off-library DNA-extraction workflow.",
    technologies: ["Design Systems", "Brand DNA", "Tailwind CSS", "AI Skills"],
    github: "https://github.com/instax-dutta/brand-vibes",
  },
  {
    title: "Market Validator",
    subtitle: "Validate Ideas with Real User Complaints",
    description: "AI agent skill: scrapes real user complaints from Reddit, Twitter, G2, Quora, HackerNews, ProductHunt, V2EX, XiaoHongShu, Bilibili, and YouTube using agent-reach.",
    technologies: ["Market Research", "Data Scraping", "AI Skills", "Multi-Platform"],
    github: "https://github.com/instax-dutta/market-validator",
  },
  {
    title: "3D Web Contents",
    subtitle: "Zero-Dep React Three.js Components",
    description: "8 copy-paste 3D components for React + Three.js — CSS3DCard, ParticleField, MorphingBlob, WarpSpeed, TunnelScroll, GeometryRepel, LightingReflection, BarChart3D.",
    technologies: ["React", "Three.js", "WebGL", "3D Graphics"],
    github: "https://github.com/instax-dutta/3d-web-contents",
  },
  {
    title: "PacketBuddy",
    subtitle: "Cross-Platform Network Usage Monitor",
    description: "Ultra-lightweight bandwidth monitor and network traffic tracker with real-time analytics. Runs silently in the background with zero configuration.",
    technologies: ["Python", "JavaScript", "Shell", "NeonDB", "Chart.js"],
    github: "https://github.com/instax-dutta/packet-buddy",
  },
  {
    title: "Google Code Review",
    subtitle: "Google's Code Review Best Practices as an AI Skill",
    description: "Google's official code review best practices, packaged as an AI agent skill. Covers reviewer perspective, developer perspective, CL descriptions, handling feedback, and conflict resolution.",
    technologies: ["Code Review", "AI Skills", "Engineering Practices"],
    github: "https://github.com/instax-dutta/google-code-review",
  },
  {
    title: "Only Skills You Need",
    subtitle: "One Install Command for Every Coding AI Tool",
    description: "Curated skills stack for daily use: full-stack dev, frontend/React, SEO, GSD workflow, and code review. Works on opencode, Claude Code, Antigravity, Kilocode.",
    technologies: ["AI Skills", "Full-Stack", "Multi-Tool"],
    github: "https://github.com/instax-dutta/only-skills-you-need",
  },
  {
    title: "Roadmap Tutor",
    subtitle: "Learn Any roadmap.sh Roadline One Topic at a Time",
    description: "Hermes Agent skill: learn any roadmap.sh roadmap one topic at a time, tracked across sessions. Stdlib-only Python, runs on a Raspberry Pi.",
    technologies: ["Python", "AI Skills", "Learning System", "Raspberry Pi"],
    github: "https://github.com/instax-dutta/roadmap-tutor",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: transitionSmooth.ease },
  },
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-bmw-canvas">
      <Navigation />
      <motion.main
        className="max-w-[1440px] mx-auto px-6 pt-28 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-12" variants={itemVariants}>
          <span className="bmw-label inline-block mb-4">Projects</span>
          <h1 className="bmw-display-lg mb-4">Shipped Products</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            Production systems spanning AI infrastructure, language technology, security, developer tooling, and AI agent skills. Built with conviction, shipped at scale. Explore the <Link href="/skills" className="underline hover:text-bmw-m-blue-light transition-colors">engineering toolkit</Link> behind these, or discuss <Link href="/contact" className="underline hover:text-bmw-m-blue-light transition-colors">collaboration</Link>.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-bmw-surface-card group"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="mb-3">
                  <h2 className="text-bmw-ink text-sm font-bold uppercase tracking-machined mb-1">{project.title}</h2>
                  <p className="text-bmw-muted text-xs uppercase tracking-[0.5px]">{project.subtitle}</p>
                </div>
                <p className="text-bmw-body text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] text-bmw-muted bg-bmw-surface-soft">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-bmw-hairline">
                  {project.link && !project.link.startsWith("https://github.com/") && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bmw-text-link text-[11px] group/link"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View
                    </a>
                  )}
                  {(project.github || project.link?.startsWith("https://github.com/")) && (
                    <a
                      href={project.github || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bmw-text-link text-[11px]"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
