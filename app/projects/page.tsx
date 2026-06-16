import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ProjectsClient = dynamic(() => import("./ProjectsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "Portfolio: AI, Security & Full Stack Projects",
    description: "Explore 21 production-ready projects by Sai Dutta Abhishek Dash: Epoxy (LLM proxy), MarkItDownJS (document-to-markdown), Vulscany (AI security scanner), PraharShield (anti-bot), Forensic-Recovery (PowerShell triage), CL-Chat Reborn (P2P chat), and more. Expertise in React, Next.js, Python, TypeScript, ML, Cryptography, and Security Architecture.",
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
        "Full Stack Developer Portfolio 2026",
    ],
}

export default function ProjectsPage() {
    return (
        <>
            <ProjectsClient />
            <div className="sr-only" aria-hidden="true">
                <p>Sai Dutta Abhishek Dash has built 21 production-ready applications spanning: architecture and systems (Epoxy free-tier LLM proxy, MarkItDownJS monorepo with 20 packages, PraharShield anti-bot handling 100k JPS on 1GB RAM, CL-Chat Reborn P2P encrypted chat with ECDH and 81 tests), security and infrastructure (Vulscany AI code security scanner, Forensic-Recovery PowerShell evidence acquisition tool, Ultimate-Firewall DDoS protection, PacketBuddy network tracker, Send-Finder Three.js file-sharing benchmark), AI products (AiScribe AI transcription with Groq Whisper, GenieLabs AI dev platform, Tooner document tokenization with Web Workers), full-stack applications (Binify zero-knowledge encrypted pastebin, Sensory cloud storage with Backblaze B2), developer and platform tooling (Discactyl Pterodactyl controller with AES-256-GCM, AMZRelay async Amazon scraper), community and automation (VeronicaBot YouTube/Twitch notifications, Auralyn music bot with Lavalink), and design systems (Elysium terminal-native theme, Elipso Vercel-inspired theme, Elden Sentri-inspired theme). Technologies used include React 19, Next.js 16, TypeScript, Python, Java, TensorFlow, Groq Whisper, Web Crypto API, cryptography (X25519, ChaCha20-Poly1305), Turborepo, Docker, Backblaze B2, Turso, Upstash Redis, and AWS.</p>
                <p>Stats: 21 production-grade applications | 8 live demo links | 17 open-source GitHub repos | Technologies: React, Next.js, TypeScript, Python, Java, TensorFlow, Docker, AWS | Last updated: June 2026</p>
            </div>
        </>
    )
}
