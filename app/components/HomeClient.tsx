"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"
import { transitionSmooth } from "../lib/animation"

const AerodynamicStream = dynamic(() => import("./AerodynamicStream"), {
  ssr: false,
})

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-bmw-canvas flex flex-col">
      <Navigation />

      <section className="flex-1 flex flex-col justify-center px-6 pt-16 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full relative z-10">
          {/* 3D Component - AerodynamicStream (can be easily removed/commented) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[45%] h-[350px] lg:h-[550px] pointer-events-none z-0 opacity-60">
            <AerodynamicStream />
          </div>
          <div className="max-w-5xl">
            <motion.span
              className="bmw-label inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transitionSmooth }}
            >
              AI Infrastructure Engineer
            </motion.span>

            <motion.h1
              className="bmw-display-xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: transitionSmooth.ease }}
            >
              Sai Dutta<br />Abhishek Dash
            </motion.h1>

            <motion.p
              className="text-bmw-body text-lg max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: transitionSmooth.ease }}
            >
              Building open-source AI infrastructure, developer tools, and security products used by engineers, creators, and self-hosters worldwide.
              <span className="block text-bmw-muted text-sm mt-4 font-normal">
                20+ deployed products • 50+ public repositories • AI, Security & Infrastructure
              </span>
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: transitionSmooth.ease }}
            >
              <Link href="/projects" className="bmw-btn group">
                Explore Projects
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
              transition={{ duration: 0.6, delay: 0.6, ease: transitionSmooth.ease }}
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
