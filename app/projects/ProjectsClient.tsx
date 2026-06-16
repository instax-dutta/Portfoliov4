"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { ExternalLink, Github } from "lucide-react"
import { transitionSmooth } from "../lib/animation"

const projects = [
  // 1. Architecture & Systems
  {
    title: "Epoxy",
    subtitle: "Free-tier LLM Proxy for Hermes Agent",
    description: "OpenAI-compatible LLM proxy that pools free-tier keys with automatic rotation and cooldown handling. Features keyword routing, .env hot-reloads, and Docker/Pterodactyl support.",
    technologies: ["Python", "Docker", "Groq", "Ollama Cloud", "Mistral AI"],
    link: "https://github.com/instax-dutta/epoxy",
    github: "https://github.com/instax-dutta/epoxy",
  },
  {
    title: "MarkItDownJS",
    subtitle: "Universal Document-to-Markdown Engine",
    description: "AST-first document ingestion and conversion platform for TypeScript. Converts PDFs, Office docs, images, and audio into structured AI-ready Markdown with RAG chunking.",
    technologies: ["TypeScript", "Node.js", "Turborepo", "pnpm", "Vite"],
    link: "https://github.com/instax-dutta/MarkItDownJS",
    github: "https://github.com/instax-dutta/MarkItDownJS",
  },
  {
    title: "PraharShield",
    subtitle: "Minecraft Velocity Anti-Bot Filter",
    description: "High-performance bot filtering plugin for Minecraft Velocity proxies. Features CAPTCHA handshakes and client fingerprinting to block 100k join-flood JPS attacks on 1GB RAM VPS.",
    technologies: ["Java", "Velocity", "LimboAPI", "Gradle", "AGPLv3"],
    link: "https://github.com/instax-dutta/PraharShield",
    github: "https://github.com/instax-dutta/PraharShield",
  },
  {
    title: "CL-Chat Reborn",
    subtitle: "P2P Encrypted Command-Line Chat",
    description: "P2P command-line chat with X25519 ECDH encryption and ChaCha20-Poly1305 AEAD. Features serverless mesh propagation, TOFU fingerprint verification, and full input sanitization.",
    technologies: ["Python", "Cryptography", "X25519 ECDH", "ChaCha20-Poly1305", "HKDF-SHA256", "pytest"],
    link: "https://github.com/instax-dutta/cl-chat-reborn",
    github: "https://github.com/instax-dutta/cl-chat-reborn",
  },

  // 2. Security & Infrastructure
  {
    title: "Vulscany",
    subtitle: "AI-Powered Code Security Agent",
    description: "Private, self-hostable AI code scanner with automated fix generation. Features multi-language scanning, real-time CVE matching, and GitHub OAuth with zero database dependencies.",
    technologies: ["Next.js 16", "TypeScript", "Mistral AI", "Ollama", "Tailwind CSS", "GitHub OAuth"],
    link: "https://github.com/instax-dutta/vulscany",
    github: "https://github.com/instax-dutta/vulscany",
  },
  {
    title: "Forensic-Recovery",
    subtitle: "Forensically-Sound Digital Evidence Acquisition Tool",
    description: "PowerShell digital evidence acquisition tool with SHA-256 chain-of-custody verification. Features automated system file exclusion, audit logs, dry-run mode, and multi-drive triage.",
    technologies: ["PowerShell", "SHA-256", "Windows"],
    link: "https://github.com/instax-dutta/Forensic-Recovery",
    github: "https://github.com/instax-dutta/Forensic-Recovery",
  },
  {
    title: "Ultimate-Firewall",
    subtitle: "Enterprise DDoS Protection",
    description: "Enterprise firewall with comprehensive IP table rules and DDoS protection techniques.",
    technologies: ["IP tables", "DDoS Protection", "Linux", "Bash"],
    link: "https://github.com/instax-dutta/Ultimate-Firewall",
  },
  {
    title: "PacketBuddy",
    subtitle: "Network Usage Tracker",
    description: "Ultra-lightweight bandwidth monitor and network traffic tracker with real-time stats and zero configuration.",
    technologies: ["Python", "JavaScript", "Shell", "NeonDB", "Chart.js"],
    link: "https://github.com/instax-dutta/packet-buddy",
  },
  {
    title: "Send-Finder",
    subtitle: "Find the Fastest Send Server Near You",
    description: "Browser-based benchmark tool for 23+ community Send servers with a 3D globe visualization. 100% client-side and zero-knowledge to discover the fastest file-sharing instance.",
    technologies: ["JavaScript", "Three.js", "Web API"],
    link: "https://ssf.sdad.pro",
    github: "https://github.com/instax-dutta/Send-Finder",
  },

  // 3. AI Products
  {
    title: "AiScribe",
    subtitle: "AI Audio Transcription",
    description: "Instant AI audio transcription featuring drag-and-drop upload, language auto-detection, and export to TXT/SRT formats via a secure server-side Groq proxy.",
    technologies: ["Next.js 16", "TypeScript 5", "Groq Whisper", "Lenis", "Vanilla CSS"],
    link: "https://ais.sdad.pro",
    github: "https://github.com/instax-dutta/aiscribe",
  },
  {
    title: "GenieLabs",
    subtitle: "AI-Powered Dev Platform",
    description: "AI-powered development platform for code generation, analysis, and optimization with workflow automation.",
    technologies: ["AI Agent", "Next.js 14", "React 18", "Tailwind CSS", "TypeScript"],
    link: "https://genielabs.sdad.pro",
  },
  {
    title: "Tooner",
    subtitle: "Lightning-Fast Document Tokenization",
    description: "Privacy-first, client-side platform to convert any document (PDF, DOCX, CSV) into token-optimized .toon files for LLMs with zero server-side storage.",
    technologies: ["React 19", "Vite 6", "TypeScript 5", "Web Workers", "TOON Format"],
    link: "https://tooner.sdad.pro",
  },

  // 4. Full-Stack Applications
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

  // 5. Developer & Platform Tooling
  {
    title: "AMZRelay",
    subtitle: "Amazon Non-Returnable Products Finder",
    description: "Discord bot that scans Amazon India for non-returnable products using fast aiohttp scraping. Features smart JSON caching and interactive pagination.",
    technologies: ["Python", "aiohttp", "BeautifulSoup", "py-cord", "Asyncio"],
    link: "https://discord.com/api/oauth2/authorize?client_id=1509572599422910626&permissions=0&scope=bot%20applications.commands",
    github: "https://github.com/instax-dutta/AMZRelay",
  },

  // 6. Community & Automation
  {
    title: "VeronicaBot",
    subtitle: "Discord Bot for YouTube/Twitch",
    description: "Privacy-first Discord bot for real‑time YouTube & Twitch live notifications. Self‑hosted. Zero telemetry. No cloud lock‑in.",
    technologies: ["Node.js", "Discord.js", "SQLite", "Upstash Redis", "Express.js", "Docker"],
    link: "https://github.com/instax-dutta/VeronicaBot",
    github: "https://github.com/instax-dutta/VeronicaBot",
  },
  {
    title: "Auralyn",
    subtitle: "Discord Music Bot with Integrated Lavalink",
    description: "Zero-infrastructure Discord music bot with a bundled Lavalink server. Features high-fidelity playback, smart search, and single-container Docker deployment.",
    technologies: ["JavaScript", "Discord.js", "Lavalink", "Node.js", "Docker"],
    link: "https://auralyn.sdad.pro",
    github: "https://github.com/instax-dutta/Auralyn",
  },

  // 7. Design Systems
  {
    title: "Elysium",
    subtitle: "Monospaced Pterodactyl Panel Theme",
    description: "Terminal-native monospaced theme for Pterodactyl Panel. Features 100% JetBrains Mono typography, flat-with-hairline layout, and Apple HIG semantic colors.",
    technologies: ["CSS", "JetBrains Mono", "Blade", "Shell", "Tailwind CSS", "Terminal UI"],
    link: "https://github.com/instax-dutta/elysium",
    github: "https://github.com/instax-dutta/elysium",
  },
  {
    title: "Elipso Theme",
    subtitle: "Vercel Dark Theme for Pterodactyl",
    description: "Vercel-inspired dark theme for Pterodactyl Panel. Features a near-black canvas, Geist typography, mesh gradient auth pages, and fully dark-themed panels.",
    technologies: ["CSS", "TypeScript", "Tailwind CSS", "Blade", "Shell", "Geist"],
    link: "https://github.com/instax-dutta/elipso-theme",
    github: "https://github.com/instax-dutta/elipso-theme",
  },
  {
    title: "Elden Theme",
    subtitle: "Sentri Dark Theme for Pterodactyl",
    description: "Premium dark theme for Pterodactyl Panel inspired by Sentry. Features a midnight violet canvas, electric lime accents, neon glows, and custom terminal controls.",
    technologies: ["CSS", "Tailwind CSS", "Blade", "Shell", "JavaScript"],
    link: "https://github.com/instax-dutta/elden-theme",
    github: "https://github.com/instax-dutta/elden-theme",
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
            Production-ready applications spanning AI/ML, security, cloud infrastructure, and full-stack web development. Discover the technologies powering these projects in my <Link href="/skills" className="underline hover:text-bmw-m-blue-light transition-colors">engineering toolkit</Link>, or discuss collaboration ideas on the <Link href="/contact" className="underline hover:text-bmw-m-blue-light transition-colors">contact page</Link>.
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
