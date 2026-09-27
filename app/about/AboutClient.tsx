"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Brain, Server, Zap, Target, TrendingUp, Lightbulb, Globe } from "lucide-react"
import Navigation from "../components/Navigation"
import { containerVariants, itemVariants } from "../lib/animation"

const skills = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Languages & Frameworks",
    items: ["Python", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Java", "C++", "Rust", "SQL"],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI & Data",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Ollama", "Hugging Face", "LangChain", "OpenCV", "NumPy", "Pandas", "Mistral AI", "Gemini API"],
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "Infrastructure",
    items: ["Docker", "Linux", "AWS", "GitHub Actions", "Nginx", "Bash", "Kubernetes", "Vercel", "Netlify"],
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Specializations",
    items: ["AI Infrastructure", "Language AI", "On-Device ML", "Security Engineering", "Developer Tooling", "Open Source", "Product Engineering", "Privacy Engineering"],
  },
]

const focusAreas = [
  {
    icon: <Target className="w-4 h-4" />,
    title: "AI & Language Infrastructure",
    desc: "Building LLM inference engines, on-device ML models, tokenizer optimization, and language AI for underserved markets.",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Security & Privacy",
    desc: "Developing code security agents, on-device threat detection, forensic tooling, and privacy-first systems.",
  },
  {
    icon: <Lightbulb className="w-4 h-4" />,
    title: "Product Engineering",
    desc: "Shipping production systems from concept to deployment — full-stack, AI-powered, and built to scale.",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    title: "Open Source & Community",
    desc: "85+ public repositories. Maintaining tools across AI, infrastructure, security, and developer ecosystems.",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-bmw-canvas">
      <Navigation />
      <motion.main
        className="max-w-[1440px] mx-auto px-6 pt-28 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <article>
        <motion.div className="mb-16" variants={itemVariants}>
          <span className="bmw-label inline-block mb-4">About</span>
          <h1 className="bmw-display-lg mb-4">Builder Profile</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            I build AI infrastructure, language technology for underserved markets, and security systems at production scale. 20+ shipped products, 85+ public repositories, and multiple active ventures in deep-tech AI. My work spans LLM inference engines, on-device ML models, code security agents, privacy-first platforms, and <Link href="/projects" className="underline hover:text-bmw-m-blue-light transition-colors">open-source tools</Link> used by engineers worldwide.
          </p>
        </motion.div>

        <motion.section className="mb-20" variants={itemVariants} aria-labelledby="about-expertise">
          <h2 id="about-expertise" className="bmw-display-md mb-8">Core Expertise</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div key={skill.title} className="bg-bmw-surface-card p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-bmw-m-blue-light">{skill.icon}</div>
                  <h3 className="text-bmw-ink text-sm font-bold tracking-machined uppercase">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 text-xs text-bmw-muted bg-bmw-surface-soft">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} aria-labelledby="about-focus">
          <p className="text-bmw-muted text-xs mb-8"><time dateTime="2026-09-27">Last updated: September 2026</time></p>
          <h2 id="about-focus" className="bmw-display-md mb-8">Focus Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-bmw-surface-soft p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-bmw-m-blue-light shrink-0">{area.icon}</div>
                  <h3 className="text-bmw-ink text-sm font-bold tracking-machined uppercase">{area.title}</h3>
                </div>
                <p className="text-bmw-muted text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
        </article>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
