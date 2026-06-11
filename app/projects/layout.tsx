import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Portfolio Showcase | Freelance Full Stack Developer",
  description: "Explore my portfolio of innovative projects including AI-powered applications, web development solutions, and machine learning implementations. View 25+ production-ready projects built with React, Next.js, Python, and modern technologies. Available for freelance projects.",
  keywords: [
    "Portfolio Projects",
    "Full Stack Developer Projects",
    "React Projects",
    "Next.js Projects",
    "AI Projects",
    "Machine Learning Projects",
    "Web Development Portfolio",
    "Freelance Developer Portfolio",
    "Python Projects",
    "TypeScript Projects",
    "Project Showcase",
    "Software Development Portfolio",
    "Available for Hire",
    "Freelance Projects",
  ],
  openGraph: {
    title: "Projects - Portfolio Showcase | Freelance Full Stack Developer",
    description: "Explore my portfolio of 25+ innovative projects including AI-powered applications, web development solutions, and machine learning implementations.",
    url: "https://sdad.pro/projects",
    type: "website",
    images: [
      {
        url: "https://sdad.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "Projects Portfolio - Freelance Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Portfolio Showcase | Freelance Full Stack Developer",
    description: "Explore my portfolio of 25+ innovative projects including AI-powered applications and web development solutions.",
    images: ["https://sdad.pro/og-image.png"],
  },
  alternates: {
    canonical: "/projects",
  },
}

const projectsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects Portfolio - Sai Dutta Abhishek Dash",
  description: "Portfolio showcasing 25 production-grade web development, AI/ML, security, and infrastructure projects built with React, Next.js, Python, TypeScript, Java, and modern technologies",
  url: "https://sdad.pro/projects",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 25,
    itemListElement: [
      {
        "@type": "ListItem", position: 1, item: {
          "@type": "SoftwareApplication", name: "MarkItDownJS", applicationCategory: "DeveloperApplication", operatingSystem: "Cross-Platform",
          description: "AST-first document ingestion and conversion platform for TypeScript. Convert PDF, DOCX, PPTX, XLSX, HTML, EPUB, CSV, JSON, XML, images, audio, and archives into structured AI-ready Markdown. Plugin architecture, 20 packages, chunking for RAG.",
          url: "https://github.com/instax-dutta/MarkItDownJS", programmingLanguage: ["TypeScript", "Node.js"],
        },
      },
      {
        "@type": "ListItem", position: 2, item: {
          "@type": "SoftwareApplication", name: "PraharShield", applicationCategory: "SecurityApplication", operatingSystem: "Linux",
          description: "High-performance bot filtering plugin for Minecraft Velocity proxies. Layered limbo-based handshake with CAPTCHA, client fingerprinting, and IP rate limiting. Handles 100k JPS join-flood attacks on 1 GB RAM VPS.",
          url: "https://github.com/instax-dutta/PraharShield", programmingLanguage: ["Java", "Velocity", "Gradle"],
        },
      },
      {
        "@type": "ListItem", position: 3, item: {
          "@type": "SoftwareApplication", name: "CL-Chat Reborn", applicationCategory: "CommunicationApplication", operatingSystem: "Linux",
          description: "Peer-to-peer command-line chat with per-connection ECDH (X25519) encryption, ChaCha20-Poly1305 AEAD, mesh message propagation, TOFU fingerprint verification, and input sanitization. 81 pytest tests.",
          url: "https://github.com/instax-dutta/cl-chat-reborn", programmingLanguage: ["Python", "Cryptography"],
        },
      },
      {
        "@type": "ListItem", position: 4, item: {
          "@type": "SoftwareApplication", name: "Tooner", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "Privacy-first, client-side document tokenization platform. Convert PDF, DOCX, CSV into token-optimized .toon files for LLMs with zero server-side storage using Web Workers.",
          url: "https://tooner.sdad.pro", programmingLanguage: ["React", "TypeScript", "Vite"],
        },
      },
      {
        "@type": "ListItem", position: 5, item: {
          "@type": "SoftwareApplication", name: "Binify", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "Zero-knowledge encrypted pastebin with client-side encryption ensuring absolute privacy. Built with Next.js 15, Turso, Upstash Redis, and Web Crypto API.",
          url: "https://bin.sdad.pro", programmingLanguage: ["Next.js", "TypeScript", "Web Crypto API"],
        },
      },
      {
        "@type": "ListItem", position: 6, item: {
          "@type": "SoftwareApplication", name: "Sensory", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "Scalable cloud storage with efficient database management and advanced rate limiting. Built with Next.js 15, Backblaze B2, Turso, and Upstash Redis.",
          url: "https://mirror.sdad.pro", programmingLanguage: ["Next.js", "React", "TypeScript"],
        },
      },
      {
        "@type": "ListItem", position: 7, item: {
          "@type": "SoftwareApplication", name: "AiScribe", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "AI audio transcription with drag-and-drop upload, multiple Whisper models, language auto-detect, and export to TXT or SRT. Secure server-side Groq proxy.",
          url: "https://ais.sdad.pro", programmingLanguage: ["Next.js", "TypeScript", "Groq Whisper"],
        },
      },
      {
        "@type": "ListItem", position: 8, item: {
          "@type": "SoftwareApplication", name: "WordAI", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "AI content generation platform that produces SEO-optimized articles in seconds. No sign-up required.",
          url: "https://wordai.sdad.pro", programmingLanguage: ["React", "Redux", "JavaScript"],
        },
      },
      {
        "@type": "ListItem", position: 9, item: {
          "@type": "SoftwareApplication", name: "OneShotAI", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "Prompt engineering tool that streamlines workflows and optimizes AI model interactions for better results.",
          url: "https://osai.sdad.pro", programmingLanguage: ["Next.js", "React", "TypeScript"],
        },
      },
      {
        "@type": "ListItem", position: 10, item: {
          "@type": "SoftwareApplication", name: "GenieLabs", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "AI-powered development platform for code generation, analysis, and optimization with workflow automation.",
          url: "https://genielabs.sdad.pro", programmingLanguage: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
      },
      {
        "@type": "ListItem", position: 11, item: {
          "@type": "SoftwareApplication", name: "AI Vedic MatchMaker", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "AI-driven matchmaking using Vedic astrology for comprehensive compatibility analysis and relationship insights.",
          url: "https://aim.numbervibes.in", programmingLanguage: ["Next.js", "TensorFlow.js", "Mistral AI"],
        },
      },
      {
        "@type": "ListItem", position: 12, item: {
          "@type": "SoftwareApplication", name: "AI Tarot Reader", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "AI-powered tarot readings with personalized insights using advanced ML and NLP technologies.",
          url: "https://ait.numbervibes.in", programmingLanguage: ["Next.js", "TensorFlow.js", "TypeScript"],
        },
      },
      {
        "@type": "ListItem", position: 13, item: {
          "@type": "SoftwareApplication", name: "CV Extractor", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "ML-powered resume parser that automatically extracts key information from uploaded documents.",
          url: "https://github.com/instax-dutta/CvExtractor-Webapp", programmingLanguage: ["Flask", "Python", "ML"],
        },
      },
      {
        "@type": "ListItem", position: 14, item: {
          "@type": "SoftwareApplication", name: "Product Review Analyser", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "ML-powered sentiment analysis tool transforming product reviews into actionable business insights.",
          url: "https://github.com/instax-dutta/ProductReviewSentimentAnalyser", programmingLanguage: ["Flask", "Python", "NLP"],
        },
      },
      {
        "@type": "ListItem", position: 15, item: {
          "@type": "SoftwareApplication", name: "Discactyl", applicationCategory: "DeveloperApplication", operatingSystem: "Linux",
          description: "Pterodactyl Panel Discord controller. Manage servers, users, nodes, and backups through slash commands with role-based access and AES-256-GCM encryption.",
          url: "https://github.com/instax-dutta/discactyl", programmingLanguage: ["TypeScript", "Discord.js", "Node.js"],
        },
      },
      {
        "@type": "ListItem", position: 16, item: {
          "@type": "SoftwareApplication", name: "Auralyn", applicationCategory: "WebApplication", operatingSystem: "Linux",
          description: "Zero-infrastructure Discord music bot with bundled Lavalink server. High-fidelity playback, interactive controls, single-container deployment.",
          url: "https://auralyn.sdad.pro", programmingLanguage: ["JavaScript", "Discord.js", "Lavalink"],
        },
      },
      {
        "@type": "ListItem", position: 17, item: {
          "@type": "SoftwareApplication", name: "VeronicaBot", applicationCategory: "WebApplication", operatingSystem: "Linux",
          description: "Privacy-first Discord bot for real-time YouTube and Twitch live notifications. Self-hosted, zero telemetry, no cloud lock-in.",
          url: "https://github.com/instax-dutta/VeronicaBot", programmingLanguage: ["Node.js", "Discord.js", "SQLite", "Redis"],
        },
      },
      {
        "@type": "ListItem", position: 18, item: {
          "@type": "SoftwareApplication", name: "AMZRelay", applicationCategory: "WebApplication", operatingSystem: "Linux",
          description: "High-performance Discord bot that finds Amazon India products marked as non-returnable. Async scraping with aiohttp, smart JSON caching, interactive pagination.",
          url: "https://github.com/instax-dutta/AMZRelay", programmingLanguage: ["Python", "aiohttp", "BeautifulSoup"],
        },
      },
      {
        "@type": "ListItem", position: 19, item: {
          "@type": "SoftwareApplication", name: "Elipso Theme", applicationCategory: "ThemeApplication", operatingSystem: "Linux",
          description: "Vercel-inspired dark theme for Pterodactyl Panel with Geist typography, mesh gradient auth pages, and fully dark-themed React client.",
          url: "https://github.com/instax-dutta/elipso-theme", programmingLanguage: ["CSS", "TypeScript", "Tailwind CSS", "Blade"],
        },
      },
      {
        "@type": "ListItem", position: 20, item: {
          "@type": "SoftwareApplication", name: "Elden Theme", applicationCategory: "ThemeApplication", operatingSystem: "Linux",
          description: "Sentry-inspired dark theme for Pterodactyl Panel with midnight violet canvas, electric lime accents, neon border glows, and custom Monaco-style terminal controls.",
          url: "https://github.com/instax-dutta/elden-theme", programmingLanguage: ["CSS", "Tailwind CSS", "Blade", "JavaScript"],
        },
      },
      {
        "@type": "ListItem", position: 21, item: {
          "@type": "SoftwareApplication", name: "Elysium", applicationCategory: "ThemeApplication", operatingSystem: "Linux",
          description: "Terminal-native dark theme for Pterodactyl Panel with JetBrains Mono typography and Apple HIG semantic colors.",
          url: "https://github.com/instax-dutta/elysium", programmingLanguage: ["CSS", "Tailwind CSS", "Blade"],
        },
      },
      {
        "@type": "ListItem", position: 22, item: {
          "@type": "SoftwareApplication", name: "PacketBuddy", applicationCategory: "WebApplication", operatingSystem: "Cross-Platform",
          description: "Ultra-lightweight bandwidth monitor and network traffic tracker with real-time stats and zero configuration.",
          url: "https://github.com/instax-dutta/packet-buddy", programmingLanguage: ["Python", "JavaScript", "Shell"],
        },
      },
      {
        "@type": "ListItem", position: 23, item: {
          "@type": "SoftwareApplication", name: "MaxArchiver", applicationCategory: "DeveloperApplication", operatingSystem: "Cross-Platform",
          description: "FFmpeg-based automation scripts to compress large video libraries with hardware acceleration support across NVIDIA NVENC, Apple VideoToolbox, and libx265.",
          url: "https://github.com/instax-dutta/MaxArchiver", programmingLanguage: ["Bash", "Batch", "FFmpeg"],
        },
      },
      {
        "@type": "ListItem", position: 24, item: {
          "@type": "SoftwareApplication", name: "Ultimate-Firewall", applicationCategory: "SecurityApplication", operatingSystem: "Linux",
          description: "Enterprise firewall with comprehensive IP table rules and DDoS protection techniques for Linux systems.",
          url: "https://github.com/instax-dutta/Ultimate-Firewall", programmingLanguage: ["Bash", "Linux"],
        },
      },
      {
        "@type": "ListItem", position: 25, item: {
          "@type": "SoftwareApplication", name: "SecPassGen", applicationCategory: "WebApplication", operatingSystem: "Web",
          description: "Secure password generator with strength analysis using zxcvbn and industry-standard cryptographic practices.",
          url: "https://passwords.sdad.pro", programmingLanguage: ["Flask", "Python", "zxcvbn"],
        },
      },
    ],
  },
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sdad.pro",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://sdad.pro/projects",
    },
  ],
}

import DOMPurify from "isomorphic-dompurify"

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(projectsStructuredData)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(breadcrumbStructuredData)) }}
      />
      {children}
    </>
  )
}
