"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { ExternalLink, Github } from "lucide-react"
import { transitionSmooth } from "../lib/animation"
import { projects } from "../lib/projects"


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
        <article>
        <motion.div className="mb-12" variants={itemVariants}>
          <span className="bmw-label inline-block mb-4">Projects</span>
          <h1 className="bmw-display-lg mb-4">Shipped Products</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            Production systems spanning AI infrastructure, language technology, security, developer tooling, and AI agent skills. Built with conviction, shipped at scale. Explore the <Link href="/skills" className="underline hover:text-bmw-m-blue-light transition-colors">engineering toolkit</Link> behind these, or discuss <Link href="/contact" className="underline hover:text-bmw-m-blue-light transition-colors">collaboration</Link>.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="bg-bmw-surface-card group"
              itemScope
              itemType="https://schema.org/SoftwareSourceCode"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="mb-3">
                  <h2 className="text-bmw-ink text-sm font-bold uppercase tracking-machined mb-1" itemProp="name">{project.title}</h2>
                  <p className="text-bmw-muted text-xs uppercase tracking-[0.5px]">{project.subtitle}</p>
                </div>
                <p className="text-bmw-body text-sm leading-relaxed mb-4 flex-1" itemProp="description">{project.description}</p>
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
            </motion.article>
          ))}
        </motion.div>
        </article>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
