import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ProjectsClient = dynamic(() => import("./ProjectsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Shipped Products | Sai Dutta Abhishek Dash — Founder & Engineer",
  description: "20+ production systems shipped by Sai Dutta Abhishek Dash — LLM inference engines, on-device ML models, code security agents, language benchmarks, privacy-first platforms, and developer tooling. All open-source.",
  keywords: [
    "Shipped Products",
    "Production Systems",
    "AI Infrastructure",
    "LLM Inference",
    "On-Device ML",
    "Code Security",
    "Language AI",
    "Privacy Engineering",
    "Open Source Software",
    "AgentLoop",
    "MarkItDownJS",
    "Vulscany",
    "PhishScout",
    "ornith-flight"
  ],
  alternates: {
    canonical: "https://sdad.pro/projects",
  },
  openGraph: {
    title: "Shipped Products — Sai Dutta Abhishek Dash",
    description: "20+ production systems — LLM inference engines, on-device ML, code security agents, language benchmarks, and developer tooling. All open-source.",
    url: "https://sdad.pro/projects",
    siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash — Shipped Products",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipped Products | Sai Dutta Abhishek Dash — Founder & Engineer",
    description: "20+ production systems — LLM inference, on-device ML, code security, language AI, and developer tooling.",
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
      "name": "Shipped Products — Sai Dutta Abhishek Dash",
      "description": "Production systems shipped by Sai Dutta Abhishek Dash spanning AI infrastructure, language technology, security, and AI agent skills.",
      "dateModified": "2026-08-31",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 22,
        "itemListElement": [
          {
            "@type": "ListItem", "position": 1, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "AgentLoop", "programmingLanguage": "Python",
              "description": "Harness-agnostic, self-verifying autonomy wrapper for coding agents with verify-gated loops.",
              "codeRepository": "https://github.com/instax-dutta/agentloop"
            }
          },
          {
            "@type": "ListItem", "position": 2, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "ornith-flight", "programmingLanguage": "C",
              "description": "Expert-streaming C99 inference engine for Ornith 35B MoE — runs 20 GB models on 8 GB Apple Silicon.",
              "codeRepository": "https://github.com/instax-dutta/ornith-flight"
            }
          },
          {
            "@type": "ListItem", "position": 3, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "MarkItDownJS", "programmingLanguage": "TypeScript",
              "description": "Universal document-to-Markdown conversion engine for TypeScript/JavaScript.",
              "codeRepository": "https://github.com/instax-dutta/MarkItDownJS"
            }
          },
          {
            "@type": "ListItem", "position": 5, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Vulscany", "programmingLanguage": "TypeScript",
              "description": "Private, self-hostable AI-powered code security agent with automated fix generation.",
              "codeRepository": "https://github.com/instax-dutta/vulscany"
            }
          },
          {
            "@type": "ListItem", "position": 6, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "PhishScout", "programmingLanguage": "Python",
              "description": "131 KB on-device phishing URL detector. 90% precision, ~4ms per lookup.",
              "codeRepository": "https://github.com/instax-dutta/PhishScout",
              "url": "https://huggingface.co/saidutta69/PhishScout"
            }
          },
          {
            "@type": "ListItem", "position": 7, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Hinglish-Bench", "programmingLanguage": "Python",
              "description": "Reference-free benchmark for measuring LLM Hinglish text generation.",
              "codeRepository": "https://github.com/instax-dutta/hinglish-bench"
            }
          },
          {
            "@type": "ListItem", "position": 8, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "PraharShield", "programmingLanguage": "Java",
              "description": "High-performance bot filtering plugin for Minecraft Velocity proxies.",
              "codeRepository": "https://github.com/instax-dutta/PraharShield"
            }
          },
          {
            "@type": "ListItem", "position": 9, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "CL-Chat Reborn", "programmingLanguage": "Python",
              "description": "Peer-to-peer command-line chat with ECDH encryption and ChaCha20-Poly1305 AEAD.",
              "codeRepository": "https://github.com/instax-dutta/cl-chat-reborn"
            }
          },
          {
            "@type": "ListItem", "position": 10, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Forensic-Recovery", "programmingLanguage": "PowerShell",
              "description": "Forensically-sound digital evidence acquisition with SHA-256 chain-of-custody.",
              "codeRepository": "https://github.com/instax-dutta/Forensic-Recovery"
            }
          },
          {
            "@type": "ListItem", "position": 11, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "DadGuard", "programmingLanguage": "C#",
              "description": "Lightweight Windows security watchdog for protecting non-technical family members.",
              "codeRepository": "https://github.com/instax-dutta/DadGuard"
            }
          },
          {
            "@type": "ListItem", "position": 12, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Binify", "programmingLanguage": "TypeScript",
              "description": "Zero-knowledge encrypted pastebin with client-side encryption.",
              "url": "https://bin.sdad.pro",
              "codeRepository": "https://github.com/instax-dutta/binify"
            }
          },
          {
            "@type": "ListItem", "position": 13, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Ansora", "programmingLanguage": "TypeScript",
              "description": "Self-hostable serverless blogging platform. Every post is a Markdown file, every save is a git commit.",
              "url": "https://blog.sdad.pro",
              "codeRepository": "https://github.com/instax-dutta/ansora"
            }
          },
          {
            "@type": "ListItem", "position": 14, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "The Watcher", "programmingLanguage": "Python",
              "description": "Reddit used-tech intelligence bot with LLM extraction.",
              "codeRepository": "https://github.com/instax-dutta/The-Watcher"
            }
          },
          {
            "@type": "ListItem", "position": 15, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Visitor Analytics", "programmingLanguage": "TypeScript",
              "description": "Privacy-preserving, framework-agnostic analytics SDK.",
              "codeRepository": "https://github.com/instax-dutta/visitor-analytics"
            }
          },
          {
            "@type": "ListItem", "position": 16, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Auralyn", "programmingLanguage": "JavaScript",
              "description": "Zero-infrastructure Discord music bot with bundled Lavalink server.",
              "url": "https://auralyn.sdad.pro",
              "codeRepository": "https://github.com/instax-dutta/Auralyn"
            }
          },
          {
            "@type": "ListItem", "position": 17, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "3D Web Contents", "programmingLanguage": "JavaScript",
              "description": "Zero-dep drop-in 3D components for React + Three.js.",
              "codeRepository": "https://github.com/instax-dutta/3d-web-contents"
            }
          },
          {
            "@type": "ListItem", "position": 18, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Brand Vibes",
              "description": "AI agent skill: apply any company's design language while vibecoding. 66 brand profiles.",
              "codeRepository": "https://github.com/instax-dutta/brand-vibes"
            }
          },
          {
            "@type": "ListItem", "position": 19, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Market Validator",
              "description": "AI agent skill: validate SaaS ideas by scraping real user complaints across 10+ platforms.",
              "codeRepository": "https://github.com/instax-dutta/market-validator"
            }
          },
          {
            "@type": "ListItem", "position": 20, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Google Code Review",
              "description": "Google's official code review best practices as an AI agent skill.",
              "codeRepository": "https://github.com/instax-dutta/google-code-review"
            }
          },
          {
            "@type": "ListItem", "position": 22, "item": {
              "@type": ["SoftwareSourceCode", "CreativeWork"], "name": "Only Skills You Need",
              "description": "One install command for every coding AI tool. Curated skills stack.",
              "codeRepository": "https://github.com/instax-dutta/only-skills-you-need"
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
        <p>Production systems shipped by Sai Dutta Abhishek Dash, spanning AI infrastructure (AgentLoop self-verifying agents, ornith-flight C99 inference engine, MarkItDownJS document converter, Heretic LLM censorship removal), security tools (Vulscany AI code security, PhishScout on-device phishing detector, PraharShield, CL-Chat Reborn encrypted chat, Forensic-Recovery, DadGuard), language AI (Hinglish-Bench), platforms (Binify, Ansora, The Watcher, Visitor Analytics), creative tools (Auralyn, 3D Web Components), and AI agent skills (Brand Vibes, Market Validator, Google Code Review, GSD Skills, Only Skills You Need, Roadmap Tutor, PacketBuddy).</p>
        <p>Last updated: August 2026</p>
      </div>
    </>
  )
}
