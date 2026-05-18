"use client"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Tooner",
    subtitle: "Lightning-Fast Document Tokenization",
    description: "Privacy-first, client-side platform to convert any document (PDF, DOCX, CSV) into token-optimized .toon files for LLMs with zero server-side storage.",
    technologies: ["React 19", "Vite 6", "TypeScript 5", "Web Workers", "TOON Format"],
    link: "https://tooner.sdad.pro",
  },
  {
    title: "Ignition",
    subtitle: "Reddit to LLM Extraction Engine",
    description: "High-performance extraction engine transforming Reddit discussions into TOON format for LLM ingestion. 50-70% token reduction.",
    technologies: ["Vite 5", "React 18", "TypeScript 5", "Zustand", "TanStack Query", "Netlify Functions"],
    link: "https://ignition.sdad.pro",
    github: "https://github.com/instax-dutta/project-ignition",
  },
  {
    title: "GenieLabs",
    subtitle: "AI-Powered Dev Platform",
    description: "AI-powered development platform for code generation, analysis, and optimization with workflow automation.",
    technologies: ["AI Agent", "Next.js 14", "React 18", "Tailwind CSS", "TypeScript"],
    link: "https://genielabs.sdad.pro",
  },
  {
    title: "WordAI",
    subtitle: "AI SEO Content Generation",
    description: "AI content generation that produces SEO-optimized articles in seconds. No sign-up required.",
    technologies: ["AI Agent", "React 18", "Vite 5", "Redux Toolkit", "NLP"],
    link: "https://wordai.sdad.pro",
  },
  {
    title: "OneShotAI",
    subtitle: "Prompt Engineering Tool",
    description: "Streamline prompt engineering workflows and optimize AI model interactions for better results.",
    technologies: ["AI", "Prompt Engineering", "Next.js 14", "React 18", "NLP"],
    link: "https://osai.sdad.pro",
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
    title: "MaxArchiver",
    subtitle: "Video Compression Automation",
    description: "FFmpeg-based automation scripts to compress large video libraries with hardware acceleration support.",
    technologies: ["FFmpeg", "Bash", "Batch", "NVIDIA NVENC", "Apple VideoToolbox", "libx265"],
    link: "https://github.com/instax-dutta/MaxArchiver",
    github: "https://github.com/instax-dutta/MaxArchiver",
  },
  {
    title: "Binify",
    subtitle: "Zero-Knowledge Encrypted Pastebin",
    description: "Zero-knowledge encrypted pastebin with client-side encryption ensuring absolute privacy.",
    technologies: ["Next.js 15", "Turso", "Upstash Redis", "Web Crypto API", "TypeScript"],
    link: "https://bin.sdad.pro",
  },
  {
    title: "RedisKeeper",
    subtitle: "Redis Activity Guard",
    description: "Privacy-first tool preventing free-tier Redis databases from auto-deletion via weekly encrypted pings.",
    technologies: ["Next.js 15", "TypeScript", "NeonDB", "Prisma", "TweetNaCl.js"],
    link: "https://github.com/instax-dutta/rediskeeper",
    github: "https://github.com/instax-dutta/rediskeeper",
  },
  {
    title: "Sensory",
    subtitle: "Scalable Cloud Storage",
    description: "Scalable cloud storage with efficient database management and advanced rate limiting for optimal performance.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Backblaze B2", "Turso", "Upstash Redis"],
    link: "https://mirror.sdad.pro",
  },
  {
    title: "PacketBuddy",
    subtitle: "Network Usage Tracker",
    description: "Ultra-lightweight bandwidth monitor and network traffic tracker with real-time stats and zero configuration.",
    technologies: ["Python", "JavaScript", "Shell", "NeonDB", "Chart.js"],
    link: "https://github.com/instax-dutta/packet-buddy",
  },
  {
    title: "AI Vedic MatchMaker",
    subtitle: "AI & Astrology Compatibility",
    description: "AI-driven matchmaking using Vedic astrology for comprehensive compatibility analysis and relationship insights.",
    technologies: ["Next.js 13", "TensorFlow.js", "Mistral AI", "React 18"],
    link: "https://aim.numbervibes.in",
  },
  {
    title: "AI Tarot Reader",
    subtitle: "ML-Powered Card Readings",
    description: "AI-powered tarot readings with personalized insights using advanced ML and NLP technologies.",
    technologies: ["Next.js 13", "TensorFlow.js", "AI", "React 18", "TypeScript"],
    link: "https://ait.numbervibes.in",
  },
  {
    title: "CV Extractor",
    subtitle: "ML Resume Parser",
    description: "ML-powered resume parser that automatically extracts key information from uploaded documents.",
    technologies: ["Flask", "Python", "python-docx", "PyPDF2", "openpyxl", "ML"],
    link: "https://github.com/instax-dutta/CvExtractor-Webapp",
  },
  {
    title: "Ultimate-Firewall",
    subtitle: "Enterprise DDoS Protection",
    description: "Enterprise firewall with comprehensive IP table rules and DDoS protection techniques.",
    technologies: ["IP tables", "DDoS Protection", "Linux", "Bash"],
    link: "https://github.com/instax-dutta/Ultimate-Firewall",
  },
  {
    title: "SecPassGen",
    subtitle: "Secure Password Generator",
    description: "Secure password generator with strength analysis using zxcvbn and industry-standard cryptographic practices.",
    technologies: ["Flask", "zxcvbn", "SQLite", "Python"],
    link: "https://passwords.sdad.pro",
    github: "https://github.com/instax-dutta/SecPassGenV2",
  },
  {
    title: "Product Review Analyser",
    subtitle: "NLP Sentiment Tool",
    description: "ML-powered sentiment analysis tool transforming product reviews into actionable business insights.",
    technologies: ["Flask", "BeautifulSoup", "Python", "NLP", "Sentiment Analysis"],
    link: "https://github.com/instax-dutta/ProductReviewSentimentAnalyser",
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
    transition: { duration: 0.4, ease: "easeOut" },
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
