"use client"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { ExternalLink, Github } from "lucide-react"
import { transitionSmooth } from "../lib/animation"

const projects = [
  // Architecture & Systems — strongest signal anchors skill perception
  {
    title: "MarkItDownJS",
    subtitle: "Universal Document-to-Markdown Engine",
    description: "AST-first document ingestion and conversion platform for TypeScript. Convert PDF, DOCX, PPTX, XLSX, HTML, EPUB, CSV, JSON, XML, images, audio, and archives into structured AI-ready Markdown. Plugin architecture, 20 packages, chunking for RAG, runs in Node, Bun, Deno, and browsers.",
    technologies: ["TypeScript", "Node.js", "Turborepo", "pnpm", "Vite"],
    link: "https://github.com/instax-dutta/MarkItDownJS",
    github: "https://github.com/instax-dutta/MarkItDownJS",
  },
  {
    title: "PraharShield",
    subtitle: "Minecraft Velocity Anti-Bot Filter",
    description: "High-performance bot filtering plugin for Minecraft Velocity proxies built on LimboAPI. Layered limbo-based handshake with falling check, CAPTCHA, client brand/settings fingerprinting, and IP rate limiting. Handles 100k JPS join-flood attacks on 1 GB RAM VPS.",
    technologies: ["Java", "Velocity", "LimboAPI", "Gradle", "AGPLv3"],
    link: "https://github.com/instax-dutta/PraharShield",
    github: "https://github.com/instax-dutta/PraharShield",
  },
  {
    title: "CL-Chat Reborn",
    subtitle: "P2P Encrypted Command-Line Chat",
    description: "Peer-to-peer command-line chat with per-connection ECDH (X25519) encryption, ChaCha20-Poly1305 AEAD, mesh message propagation with UUID dedup sliding window, TOFU fingerprint verification against MITM, nickname system, rate limiting, and full input sanitization. No servers, no accounts, no logs. 81 pytest tests across all modules.",
    technologies: ["Python", "Cryptography", "X25519 ECDH", "ChaCha20-Poly1305", "HKDF-SHA256", "pytest"],
    link: "https://github.com/instax-dutta/cl-chat-reborn",
    github: "https://github.com/instax-dutta/cl-chat-reborn",
  },
  // Full-Stack & Security — modern web depth
  {
    title: "Tooner",
    subtitle: "Lightning-Fast Document Tokenization",
    description: "Privacy-first, client-side platform to convert any document (PDF, DOCX, CSV) into token-optimized .toon files for LLMs with zero server-side storage.",
    technologies: ["React 19", "Vite 6", "TypeScript 5", "Web Workers", "TOON Format"],
    link: "https://tooner.sdad.pro",
  },
  {
    title: "Binify",
    subtitle: "Zero-Knowledge Encrypted Pastebin",
    description: "Zero-knowledge encrypted pastebin with client-side encryption ensuring absolute privacy.",
    technologies: ["Next.js 15", "Turso", "Upstash Redis", "Web Crypto API", "TypeScript"],
    link: "https://bin.sdad.pro",
  },
  {
    title: "Sensory",
    subtitle: "Scalable Cloud Storage",
    description: "Scalable cloud storage with efficient database management and advanced rate limiting for optimal performance.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Backblaze B2", "Turso", "Upstash Redis"],
    link: "https://mirror.sdad.pro",
  },
  {
    title: "AiScribe",
    subtitle: "AI Audio Transcription",
    description: "Transcribe audio files instantly using AI. Free to start, no account needed. Features drag-and-drop upload, multiple Whisper models, language auto-detect, and export to TXT or SRT with a secure server-side Groq proxy.",
    technologies: ["Next.js 16", "TypeScript 5", "Groq Whisper", "Lenis", "Vanilla CSS"],
    link: "https://ais.sdad.pro",
    github: "https://github.com/instax-dutta/aiscribe",
  },
  {
    title: "Vulscany",
    subtitle: "AI-Powered Code Security Agent",
    description: "Private, self-hostable AI-powered code security scanner — originally the core product of a venture-backed startup, now open-sourced. Features AI-powered fix generation, multi-language scanning (React, Next.js, TypeScript, JavaScript, Python), real-time CVE matching and GitHub Advisory correlation, batch scanning for entire orgs with severity-sorted summaries, GitHub OAuth integration, and automated PR creation. Privacy-first architecture — source code never leaves the machine. Zero external services: no database, no Redis, no cloud dependencies — just npm run dev.",
    technologies: ["Next.js 16", "TypeScript", "Mistral AI", "Ollama", "Tailwind CSS", "GitHub OAuth"],
    link: "https://github.com/instax-dutta/vulscany",
    github: "https://github.com/instax-dutta/vulscany",
  },
  {
    title: "Send-Finder",
    subtitle: "Find the Fastest Send Server Near You",
    description: "Benchmarks 23+ community-hosted encrypted file sharing (Send) servers directly from your browser with an interactive 3D globe visualization. Fully zero-knowledge and client-side — no data is sent to any server during benchmarking. Helps users discover the geographically closest and fastest Send instance for peer-to-peer encrypted file transfers.",
    technologies: ["JavaScript", "Three.js", "Web API"],
    link: "https://ssf.sdad.pro",
    github: "https://github.com/instax-dutta/Send-Finder",
  },
  // AI & Machine Learning — breadth across AI
  {
    title: "GenieLabs",
    subtitle: "AI-Powered Dev Platform",
    description: "AI-powered development platform for code generation, analysis, and optimization with workflow automation.",
    technologies: ["AI Agent", "Next.js 14", "React 18", "Tailwind CSS", "TypeScript"],
    link: "https://genielabs.sdad.pro",
  },
  {
    title: "Epoxy",
    subtitle: "Free-tier LLM Proxy for Hermes Agent",
    description: "Unified OpenAI-compatible proxy that pools free-tier Groq, Ollama Cloud & Mistral API keys behind a single endpoint. Features automatic key rotation (round-robin, fill-first, least-used, random), intelligent cooldown handling (429→1h, 402→24h, 401→permanent removal), cross-provider fallback, keyword-based model routing, and hot-reload via .env monitoring. Deploy via Docker or Pterodactyl with multi-arch images for amd64 and arm64.",
    technologies: ["Python", "Docker", "Groq", "Ollama Cloud", "Mistral AI"],
    link: "https://github.com/instax-dutta/epoxy",
    github: "https://github.com/instax-dutta/epoxy",
  },
  // Discord & Dev Tooling — automation & integrations
  {
    title: "Discactyl",
    subtitle: "Pterodactyl Panel Discord Controller",
    description: "Stop switching tabs. Control your entire Pterodactyl panel directly from Discord — manage servers, users, nodes, and backups through slash commands and interactive components with role-based access.",
    technologies: ["TypeScript", "Discord.js", "Node.js", "SQLite", "Docker", "AES-256-GCM"],
    link: "https://github.com/instax-dutta/discactyl",
    github: "https://github.com/instax-dutta/discactyl",
  },
  {
    title: "Auralyn",
    subtitle: "Discord Music Bot with Integrated Lavalink",
    description: "Zero-infrastructure Discord music bot with bundled Lavalink server. High-fidelity playback, smart track resolution with priority-based search, interactive controls, and single-container deployment for Pelican/Pterodactyl panels.",
    technologies: ["JavaScript", "Discord.js", "Lavalink", "Node.js", "Docker"],
    link: "https://auralyn.sdad.pro",
    github: "https://github.com/instax-dutta/Auralyn",
  },
  {
    title: "VeronicaBot",
    subtitle: "Discord Bot for YouTube/Twitch",
    description: "Privacy-first Discord bot for real‑time YouTube & Twitch live notifications. Self‑hosted. Zero telemetry. No cloud lock‑in.",
    technologies: ["Node.js", "Discord.js", "SQLite", "Upstash Redis", "Express.js", "Docker"],
    link: "https://github.com/instax-dutta/VeronicaBot",
    github: "https://github.com/instax-dutta/VeronicaBot",
  },
  {
    title: "AMZRelay",
    subtitle: "Amazon Non-Returnable Products Finder",
    description: "A high-performance Discord bot that finds products on Amazon India explicitly marked as non-returnable. Async scraping with aiohttp, smart JSON caching, interactive pagination, and 10-50x faster than Selenium-based alternatives.",
    technologies: ["Python", "aiohttp", "BeautifulSoup", "py-cord", "Asyncio"],
    link: "https://discord.com/api/oauth2/authorize?client_id=1509572599422910626&permissions=0&scope=bot%20applications.commands",
    github: "https://github.com/instax-dutta/AMZRelay",
  },
  // Design Systems — visual & UI craft
  {
    title: "Elipso Theme",
    subtitle: "Vercel Dark Theme for Pterodactyl",
    description: "A Vercel-inspired dark theme for Pterodactyl Panel featuring near-black canvas, Geist & Geist Mono typography, mesh gradient auth pages, and fully dark-themed React client and admin panel.",
    technologies: ["CSS", "TypeScript", "Tailwind CSS", "Blade", "Shell", "Geist"],
    link: "https://github.com/instax-dutta/elipso-theme",
    github: "https://github.com/instax-dutta/elipso-theme",
  },
  {
    title: "Elden Theme",
    subtitle: "Sentri Dark Theme for Pterodactyl",
    description: "A premium dark theme for Pterodactyl Panel inspired by Sentry's design language — midnight violet canvas, electric lime accents, neon border glows, and custom Monaco-style terminal controls.",
    technologies: ["CSS", "Tailwind CSS", "Blade", "Shell", "JavaScript"],
    link: "https://github.com/instax-dutta/elden-theme",
    github: "https://github.com/instax-dutta/elden-theme",
  },
  {
    title: "Elysium",
    subtitle: "Monospaced Pterodactyl Panel Theme",
    description: "A terminal-native dark theme for Pterodactyl Panel inspired by OpenCode — 100% JetBrains Mono typography, flat-with-hairline design, ASCII-bracket glyphs, and Apple HIG semantic colors.",
    technologies: ["CSS", "JetBrains Mono", "Blade", "Shell", "Tailwind CSS", "Terminal UI"],
    link: "https://github.com/instax-dutta/elysium",
    github: "https://github.com/instax-dutta/elysium",
  },
  // Infrastructure & Utility — closes on reliability signal
  {
    title: "PacketBuddy",
    subtitle: "Network Usage Tracker",
    description: "Ultra-lightweight bandwidth monitor and network traffic tracker with real-time stats and zero configuration.",
    technologies: ["Python", "JavaScript", "Shell", "NeonDB", "Chart.js"],
    link: "https://github.com/instax-dutta/packet-buddy",
  },
  {
    title: "Ultimate-Firewall",
    subtitle: "Enterprise DDoS Protection",
    description: "Enterprise firewall with comprehensive IP table rules and DDoS protection techniques.",
    technologies: ["IP tables", "DDoS Protection", "Linux", "Bash"],
    link: "https://github.com/instax-dutta/Ultimate-Firewall",
  },
  {
    title: "Forensic-Recovery",
    subtitle: "Forensically-Sound Digital Evidence Acquisition Tool",
    description: "Windows PowerShell tool for forensically-sound digital evidence acquisition. Targets user-generated files (documents, images, videos, audio) across multiple drives while automatically excluding system artifacts (Windows, Program Files, Recycle Bin, System Volume Information). Features SHA-256 chain-of-custody verification on every file copy, audit-grade timestamped logging with per-file CSV reports, dry-run mode, space pre-flight check with 10% headroom warning, and multi-drive triage (C:, D: by default). Built for incident responders, forensic examiners, and law enforcement — read-only acquisition with no source files modified or deleted.",
    technologies: ["PowerShell", "SHA-256", "Windows"],
    link: "https://github.com/instax-dutta/Forensic-Recovery",
    github: "https://github.com/instax-dutta/Forensic-Recovery",
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
          <h1 className="bmw-display-lg mb-4">Portfolio</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            Production-ready applications spanning AI/ML, security, cloud infrastructure, and full-stack web development.
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
