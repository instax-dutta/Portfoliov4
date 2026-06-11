import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ProjectsClient = dynamic(() => import("./ProjectsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "Portfolio: AI, Security & Full Stack Projects",
    description: "Explore 25 production-ready projects by Sai Dutta Abhishek Dash: MarkItDownJS (document-to-markdown engine), PraharShield (Minecraft anti-bot), CL-Chat Reborn (P2P encrypted chat), Tooner (doc tokenization), Binify (zero-knowledge encryption), and more. Expertise in React, Next.js, Python, TypeScript, ML, Cryptography, and Security Architecture.",
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
        "Minecraft Plugin Development",
        "Full Stack Developer Portfolio 2026",
    ],
}

export default function ProjectsPage() {
    return (
        <>
            <ProjectsClient />
            <div className="sr-only" aria-hidden="true">
                <p>Sai Dutta Abhishek Dash has built 25 production-ready applications spanning: architecture and systems (MarkItDownJS monorepo with 20 packages, PraharShield anti-bot handling 100k JPS on 1GB RAM, CL-Chat Reborn P2P encrypted chat with ECDH and 81 tests), full-stack and security (Tooner document tokenization with Web Workers, Binify zero-knowledge encrypted pastebin, Sensory cloud storage with Backblaze B2, AiScribe AI transcription with Groq Whisper), AI and machine learning (WordAI SEO content generation, OneShotAI prompt engineering, GenieLabs AI dev platform, AI Vedic MatchMaker with TensorFlow.js, AI Tarot Reader, CV Extractor ML resume parser, Product Review Analyser NLP sentiment), Discord and dev tooling (Discactyl Pterodactyl controller with AES-256-GCM, Auralyn music bot with Lavalink, VeronicaBot YouTube/Twitch notifications, AMZRelay async Amazon scraper), design systems (Elipso Vercel-inspired theme, Elden Sentri-inspired theme, Elysium terminal-native theme), and infrastructure (PacketBuddy network tracker, MaxArchiver FFmpeg automation, Ultimate-Firewall DDoS protection, SecPassGen password generator with zxcvbn). Technologies used include React 19, Next.js 16, TypeScript, Python, Java, TensorFlow, Groq Whisper, Web Crypto API, cryptography (X25519, ChaCha20-Poly1305), Turborepo, Docker, Backblaze B2, Turso, Upstash Redis, and AWS.</p>
                <p>Stats: 25 production-grade applications | 12 live demo links | 13 open-source GitHub repos | Technologies: React, Next.js, TypeScript, Python, Java, TensorFlow, Docker, AWS | Last updated: June 2026</p>
            </div>
        </>
    )
}
