import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ProjectsClient = dynamic(() => import("./ProjectsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Production Projects | Sai Dutta Abhishek Dash - AI & Security Tooling",
  description: "Showcase of 20 production-grade open-source systems built by Sai Dutta Abhishek Dash. Spanning LLM gateways, code security scanners, P2P encryption, and DevOps tooling.",
  keywords: [
    "Sai Dutta Abhishek Dash Projects",
    "MarkItDownJS",
    "PraharShield",
    "CL-Chat Reborn",
    "Tooner Document Tokenization",
    "Binify Encrypted Pastebin",
    "AI Portfolio",
    "Security Engineering Showcase",
    "Python Full Stack Apps",
    "Open Source Security Tools",
    "Next.js Production Examples",
    "P2P Encrypted Chat",
    "Minecraft Proxy Security",
    "AI Infrastructure",
    "Developer Tooling"
  ],
  alternates: {
    canonical: "https://sdad.pro/projects",
  },
  openGraph: {
    title: "Production Projects | Sai Dutta Abhishek Dash - AI & Security Tooling",
    description: "Showcase of 20 production-grade applications including LLM gateways, security scanners, P2P encryption, and dev platforms.",
    url: "https://sdad.pro/projects",
    siteName: "Sai Dutta Abhishek Dash Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Projects Portfolio - Sai Dutta Abhishek Dash",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Projects | Sai Dutta Abhishek Dash - AI & Security Tooling",
    description: "Showcase of 20 production-grade applications by Sai Dutta Abhishek Dash.",
    images: ["/og-image.png"],
  }
}

const projectsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://sdad.pro/projects/#webpage",
      "url": "https://sdad.pro/projects",
      "name": "Projects Portfolio - Sai Dutta Abhishek Dash",
      "description": "Portfolio showcasing 20 production-grade web development, AI/ML, security, and infrastructure projects built with React, Next.js, Python, TypeScript, Java, and modern technologies",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 20,
        "itemListElement": [
          {
            "@type": "ListItem", "position": 1, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Epoxy", "programmingLanguage": "Python",
              "description": "Unified OpenAI-compatible proxy that pools free-tier Groq, Ollama Cloud & Mistral API keys behind a single endpoint. Features automatic key rotation and cooldown handling.",
              "codeRepository": "https://github.com/instax-dutta/epoxy"
            }
          },
          {
            "@type": "ListItem", "position": 2, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "MarkItDownJS", "programmingLanguage": "TypeScript",
              "description": "AST-first document ingestion and conversion platform for TypeScript. Converts PDFs, Office docs, images, and audio into structured AI-ready Markdown with RAG chunking.",
              "codeRepository": "https://github.com/instax-dutta/MarkItDownJS"
            }
          },
          {
            "@type": "ListItem", "position": 3, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "PraharShield", "programmingLanguage": "Java",
              "description": "High-performance bot filtering plugin for Minecraft Velocity proxies. Features CAPTCHA handshakes and client fingerprinting to block 100k join-flood JPS attacks.",
              "codeRepository": "https://github.com/instax-dutta/PraharShield"
            }
          },
          {
            "@type": "ListItem", "position": 4, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "CL-Chat Reborn", "programmingLanguage": "Python",
              "description": "Peer-to-peer command-line chat with per-connection ECDH (X25519) encryption, ChaCha20-Poly1305 AEAD, and input sanitization.",
              "codeRepository": "https://github.com/instax-dutta/cl-chat-reborn"
            }
          },
          {
            "@type": "ListItem", "position": 5, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Vulscany", "programmingLanguage": "TypeScript",
              "description": "Private, self-hostable AI code vulnerability scanner with AI-powered fix generation, multi-language scanning, and GitHub OAuth integration.",
              "codeRepository": "https://github.com/instax-dutta/vulscany"
            }
          },
          {
            "@type": "ListItem", "position": 6, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Forensic-Recovery", "programmingLanguage": "PowerShell",
              "description": "Windows PowerShell tool for forensically-sound digital evidence acquisition with SHA-256 chain-of-custody verification.",
              "codeRepository": "https://github.com/instax-dutta/Forensic-Recovery"
            }
          },
          {
            "@type": "ListItem", "position": 7, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Ultimate-Firewall", "programmingLanguage": "Bash",
              "description": "Enterprise firewall with comprehensive IP table rules and DDoS protection techniques for Linux systems.",
              "codeRepository": "https://github.com/instax-dutta/Ultimate-Firewall"
            }
          },
          {
            "@type": "ListItem", "position": 8, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "PacketBuddy", "programmingLanguage": "Python",
              "description": "Ultra-lightweight bandwidth monitor and network traffic tracker with real-time stats and zero configuration.",
              "codeRepository": "https://github.com/instax-dutta/packet-buddy"
            }
          },
          {
            "@type": "ListItem", "position": 9, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Send-Finder", "programmingLanguage": "JavaScript",
              "description": "Benchmarks 23+ community-hosted encrypted file sharing (Send) servers directly from your browser with an interactive 3D globe visualization.",
              "codeRepository": "https://github.com/instax-dutta/Send-Finder",
              "url": "https://ssf.sdad.pro"
            }
          },
          {
            "@type": "ListItem", "position": 10, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "AiScribe", "programmingLanguage": "TypeScript",
              "description": "AI audio transcription with drag-and-drop upload, multiple Whisper models, language auto-detect, and export to TXT or SRT.",
              "codeRepository": "https://github.com/instax-dutta/aiscribe",
              "url": "https://ais.sdad.pro"
            }
          },
          {
            "@type": "ListItem", "position": 11, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "GenieLabs", "programmingLanguage": "TypeScript",
              "description": "AI-powered development platform for code generation, analysis, and optimization with workflow automation.",
              "url": "https://genielabs.sdad.pro"
            }
          },
          {
            "@type": "ListItem", "position": 12, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Tooner", "programmingLanguage": "TypeScript",
              "description": "Privacy-first client-side document tokenization platform. Convert PDF, DOCX, CSV into token-optimized .toon files for LLMs using Web Workers.",
              "url": "https://tooner.sdad.pro"
            }
          },
          {
            "@type": "ListItem", "position": 13, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Binify", "programmingLanguage": "TypeScript",
              "description": "Zero-knowledge encrypted pastebin with client-side encryption ensuring absolute privacy. Built with Next.js 15, Turso, Upstash Redis, and Web Crypto API.",
              "url": "https://bin.sdad.pro"
            }
          },
          {
            "@type": "ListItem", "position": 14, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Sensory", "programmingLanguage": "TypeScript",
              "description": "Scalable cloud storage with efficient database management and advanced rate limiting. Built with Next.js 15, Backblaze B2, Turso, and Upstash Redis.",
              "url": "https://mirror.sdad.pro"
            }
          },
          {
            "@type": "ListItem", "position": 15, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "AMZRelay", "programmingLanguage": "Python",
              "description": "High-performance Discord bot that finds Amazon India products marked as non-returnable. Async scraping with aiohttp, smart JSON caching, interactive pagination.",
              "codeRepository": "https://github.com/instax-dutta/AMZRelay"
            }
          },
          {
            "@type": "ListItem", "position": 16, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "VeronicaBot", "programmingLanguage": "JavaScript",
              "description": "Privacy-first Discord bot for real-time YouTube and Twitch live notifications. Self-hosted, zero telemetry, no cloud lock-in.",
              "codeRepository": "https://github.com/instax-dutta/VeronicaBot"
            }
          },
          {
            "@type": "ListItem", "position": 17, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Auralyn", "programmingLanguage": "JavaScript",
              "description": "Zero-infrastructure Discord music bot with bundled Lavalink server. High-fidelity playback, interactive controls, single-container deployment.",
              "codeRepository": "https://github.com/instax-dutta/Auralyn",
              "url": "https://auralyn.sdad.pro"
            }
          },
          {
            "@type": "ListItem", "position": 18, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Elysium", "programmingLanguage": "CSS",
              "description": "Terminal-native dark theme for Pterodactyl Panel with JetBrains Mono typography and Apple HIG semantic colors.",
              "codeRepository": "https://github.com/instax-dutta/elysium"
            }
          },
          {
            "@type": "ListItem", "position": 19, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Elipso Theme", "programmingLanguage": "CSS",
              "description": "Vercel-inspired dark theme for Pterodactyl Panel with Geist typography, mesh gradient auth pages, and fully dark-themed React client.",
              "codeRepository": "https://github.com/instax-dutta/elipso-theme"
            }
          },
          {
            "@type": "ListItem", "position": 20, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Elden Theme", "programmingLanguage": "CSS",
              "description": "Sentry-inspired dark theme for Pterodactyl Panel with midnight violet canvas, electric lime accents, neon border glows, and custom Monaco-style terminal controls.",
              "codeRepository": "https://github.com/instax-dutta/elden-theme"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/projects/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Projects", item: "https://sdad.pro/projects" }
      ]
    }
  ]
}

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }} />
      <ProjectsClient />
      <div className="sr-only" aria-hidden="true">
        <p>Explore 20 production-grade open-source systems built by Sai Dutta Abhishek Dash, spanning AI infrastructure (LLM gateways like Epoxy, document tokenizers like Tooner, document parser engines like MarkItDownJS), security tools (code vulnerability scanners like Vulscany, forensic evidence recovery tools like Forensic-Recovery, firewalls like Ultimate-Firewall, encrypted P2P chats like CL-Chat Reborn), and self-hosted cloud storage (Sensory, Binify). Projects use React, Next.js, TypeScript, Python, and AWS.</p>
        <p>Last updated: June 2026</p>
      </div>
    </>
  )
}
