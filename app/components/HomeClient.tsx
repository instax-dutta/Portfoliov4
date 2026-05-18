"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-bmw-canvas flex flex-col">
      <Navigation />

      <section className="flex-1 flex flex-col justify-center px-6 pt-16">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="max-w-5xl">
            <motion.span
              className="bmw-label inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Full Stack Engineer & AI Specialist
            </motion.span>

            <motion.h1
              className="bmw-display-xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Sai Dutta<br />Abhishek Dash
            </motion.h1>

            <motion.p
              className="text-bmw-body text-lg max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I build production-ready applications at the intersection of full-stack engineering,
              AI/ML, and security. Based in Bhubaneswar — available worldwide.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            >
              <Link href="/projects" className="bmw-btn group">
                View Projects
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link href="/contact" className="bmw-btn">
                Contact
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="https://github.com/instax-dutta" target="_blank" rel="noopener noreferrer" className="text-bmw-muted hover:text-bmw-ink transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sdabhishekdash/" target="_blank" rel="noopener noreferrer" className="text-bmw-muted hover:text-bmw-ink transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/abhishekdash69" target="_blank" rel="noopener noreferrer" className="text-bmw-muted hover:text-bmw-ink transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@sdad.pro" className="text-bmw-muted hover:text-bmw-ink transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <span className="w-px h-5 bg-bmw-hairline mx-1" />
              <span className="text-bmw-muted text-sm">contact@sdad.pro</span>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="m-stripe" />
    </main>
  )
}
