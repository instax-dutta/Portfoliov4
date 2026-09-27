"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Navigation from "../../components/Navigation"
import { containerVariants, itemVariants } from "../../lib/animation"
import type { Project } from "../../lib/projects"
import { projects } from "../../lib/projects"

export default function ProjectDetail({ project }: { project: Project }) {
  const siblings = projects.filter((p) => p.slug !== project.slug && p.technologies[0] === project.technologies[0])

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
            <span className="bmw-label inline-block mb-4">{project.group}</span>
            <h1 className="bmw-display-lg mb-4">{project.title}</h1>
            <p className="text-bmw-muted text-sm uppercase tracking-[0.5px] mb-6">{project.subtitle}</p>
            <p className="text-bmw-body text-base max-w-3xl leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bmw-btn group"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bmw-btn"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              )}
              <Link href="/projects" className="bmw-text-link text-[11px]">
                <ArrowLeft className="w-3 h-3" />
                All Projects
              </Link>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs text-bmw-muted bg-bmw-surface-soft">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.section variants={itemVariants} aria-labelledby="project-facts">
            <h2 id="project-facts" className="bmw-display-md mb-8">
              Project Facts
            </h2>
            <div className="bg-bmw-surface-card overflow-x-auto">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-bmw-hairline">
                    <th scope="row" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase w-48">
                      Name
                    </th>
                    <td className="p-4 text-bmw-body text-sm">{project.title}</td>
                  </tr>
                  <tr className="border-b border-bmw-hairline">
                    <th scope="row" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase w-48">
                      Category
                    </th>
                    <td className="p-4 text-bmw-body text-sm">{project.group}</td>
                  </tr>
                  {project.language && (
                    <tr className="border-b border-bmw-hairline">
                      <th scope="row" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase w-48">
                        Primary Language
                      </th>
                      <td className="p-4 text-bmw-body text-sm">{project.language}</td>
                    </tr>
                  )}
                  <tr className="border-b border-bmw-hairline">
                    <th scope="row" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase w-48">
                      Technologies
                    </th>
                    <td className="p-4 text-bmw-body text-sm">
                      {project.technologies.join(", ")}
                    </td>
                  </tr>
                  {project.github && (
                    <tr className="border-b border-bmw-hairline">
                      <th scope="row" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase w-48">
                        Source
                      </th>
                      <td className="p-4 text-bmw-body text-sm break-all">{project.github}</td>
                    </tr>
                  )}
                  {project.link && (
                    <tr className="border-b border-bmw-hairline last:border-b-0">
                      <th scope="row" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase w-48">
                        Live At
                      </th>
                      <td className="p-4 text-bmw-body text-sm break-all">{project.link}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.section>

          {siblings.length > 0 && (
            <motion.section className="mt-20" variants={itemVariants} aria-labelledby="project-siblings">
              <h2 id="project-siblings" className="bmw-display-md mb-8">
                More in {project.group}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {siblings.map((sibling) => (
                  <Link
                    key={sibling.slug}
                    href={`/projects/${sibling.slug}`}
                    className="bg-bmw-surface-card p-6 block"
                  >
                    <h3 className="text-bmw-ink text-sm font-bold uppercase tracking-machined mb-1">
                      {sibling.title}
                    </h3>
                    <p className="text-bmw-muted text-xs uppercase tracking-[0.5px]">{sibling.subtitle}</p>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </article>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
