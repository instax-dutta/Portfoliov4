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
            <section className="border-t border-bmw-hairline py-4 px-6 bg-bmw-surface-soft">
                <div className="max-w-[1440px] mx-auto">
                    <p className="text-bmw-body text-xs leading-relaxed max-w-4xl">
                        Sai Dutta Abhishek Dash has built 20+ production-ready applications spanning AI agents, 
                        document tokenization (Tooner), zero-knowledge encryption (Binify), cloud storage (Sensory), 
                        Discord bots (VeronicaBot, Auralyn, AMZRelay), AI content generation (WordAI), 
                        prompt engineering tools (OneShotAI), Pterodactyl panel themes (Elden, Elipso, Elysium), 
                        and security tooling (Ultimate-Firewall, SecPassGen). Technologies used include React, 
                        Next.js, Python, TypeScript, TensorFlow, Docker, and AWS.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-bmw-muted">
                        <span className="text-[11px]">20+ production applications</span>
                        <span className="text-[11px]">9 live demo links</span>
                        <span className="text-[11px]">7 open-source repos</span>
                        <span className="text-[11px]">Last updated: June 2026</span>
                    </div>
                </div>
            </section>
        </>
    )
}
