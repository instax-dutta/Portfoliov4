import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ProjectsClient = dynamic(() => import("./ProjectsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "Portfolio: AI, Security & Full Stack Projects",
    description: "Explore Sai Dutta Abhishek Dash's production-ready projects: RedisKeeper (Redis Activity Guard), Tooner (Doc Tokenization), RPi Persona (Server Health), and 25+ more. Expertise in React, Next.js, Python, ML, and Security Architecture.",
    keywords: [
        "Sai Dutta Abhishek Dash Projects",
        "RedisKeeper",
        "Redis Activity Guard",
        "AI Portfolio",
        "Security Engineering Showcase",
        "Python Full Stack Apps",
        "Tooner AI",
        "Open Source Security Tools",
        "Next.js Production Examples"
    ],
}

export default function ProjectsPage() {
    return (
        <>
            <ProjectsClient />
            <div className="sr-only" aria-hidden="true">
                <p>Sai Dutta Abhishek Dash has built 20+ production-ready applications spanning AI agents, document tokenization (Tooner), zero-knowledge encryption (Binify), cloud storage (Sensory), Discord bots (VeronicaBot, Auralyn, AMZRelay), AI content generation (WordAI), prompt engineering tools (OneShotAI), Pterodactyl panel themes (Elden, Elipso, Elysium), and security tooling (Ultimate-Firewall, SecPassGen). Technologies used include React, Next.js, Python, TypeScript, TensorFlow, Docker, and AWS.</p>
                <p>Stats: 20+ production applications | 9 live demo links | 7 open-source repos | Last updated: June 2026</p>
            </div>
        </>
    )
}
