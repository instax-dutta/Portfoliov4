"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"
import Navigation from "../components/Navigation"
import { containerVariants, itemVariants } from "../lib/animation"
import {
  achievements,
  credentials,
  domains,
  engagementModels,
  serviceLines,
} from "../lib/advisory"

export default function Advisory() {
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
            <span className="bmw-label inline-block mb-4">Advisory</span>
            <h1 className="bmw-display-lg mb-4">Advisory &amp; Engineering Services</h1>
            <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
              Five service lines, four engagement models, and a technical record built on{" "}
              <Link href="/projects" className="underline hover:text-bmw-m-blue-light transition-colors">
                22 shipped open-source systems
              </Link>{" "}
              rather than abstract capability. Discuss{" "}
              <Link href="/contact" className="underline hover:text-bmw-m-blue-light transition-colors">
                an engagement
              </Link>{" "}
              or read the{" "}
              <Link href="/experience" className="underline hover:text-bmw-m-blue-light transition-colors">
                builder timeline
              </Link>
              .
            </p>
          </motion.div>

          <motion.section className="mb-20" variants={itemVariants} aria-labelledby="advisory-services">
            <h2 id="advisory-services" className="bmw-display-md mb-8">
              Service Lines
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {serviceLines.map((service) => (
                <section key={service.slug} className="bg-bmw-surface-card p-6">
                  <h3 className="text-bmw-ink text-sm font-bold tracking-machined uppercase mb-3">
                    {service.title}
                  </h3>
                  <p className="text-bmw-body text-sm leading-relaxed mb-4">{service.summary}</p>
                  <ul className="space-y-1.5 mb-4">
                    {service.offerings.map((offering) => (
                      <li key={offering} className="flex items-start gap-2 text-bmw-muted text-sm">
                        <span className="w-1.5 h-1.5 bg-bmw-m-blue-dark shrink-0 mt-1.5" />
                        {offering}
                      </li>
                    ))}
                  </ul>
                  <p className="text-bmw-muted text-xs leading-relaxed border-t border-bmw-hairline pt-3">
                    <span className="text-bmw-ink">Best for:</span> {service.bestFor}
                  </p>
                </section>
              ))}
            </div>
          </motion.section>

          <motion.section className="mb-20" variants={itemVariants} aria-labelledby="advisory-engagement">
            <h2 id="advisory-engagement" className="bmw-display-md mb-8">
              Engagement Models
            </h2>
            <div className="bg-bmw-surface-card overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-bmw-hairline">
                    <th scope="col" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase">
                      Model
                    </th>
                    <th scope="col" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase">
                      Duration
                    </th>
                    <th scope="col" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase">
                      Format
                    </th>
                    <th scope="col" className="p-4 text-bmw-ink text-xs font-bold tracking-machined uppercase">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {engagementModels.map((model) => (
                    <tr key={model.model} className="border-b border-bmw-hairline last:border-b-0">
                      <th scope="row" className="p-4 text-bmw-ink text-sm font-bold">
                        {model.model}
                      </th>
                      <td className="p-4 text-bmw-body text-sm">{model.duration}</td>
                      <td className="p-4 text-bmw-body text-sm">{model.format}</td>
                      <td className="p-4 text-bmw-muted text-sm">{model.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          <motion.section className="mb-20" variants={itemVariants} aria-labelledby="advisory-domains">
            <h2 id="advisory-domains" className="bmw-display-md mb-8">
              Industries &amp; Domains
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {domains.map((entry) => (
                <div key={entry.domain} className="bg-bmw-surface-soft p-6">
                  <h3 className="text-bmw-ink text-sm font-bold tracking-machined uppercase mb-2">
                    {entry.domain}
                  </h3>
                  <p className="text-bmw-muted text-sm leading-relaxed">{entry.experience}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section className="mb-20" variants={itemVariants} aria-labelledby="advisory-achievements">
            <h2 id="advisory-achievements" className="bmw-display-md mb-8">
              Notable Technical Achievements
            </h2>
            <ul className="space-y-2">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-bmw-body text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-bmw-m-blue-dark shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} aria-labelledby="advisory-credentials">
            <h2 id="advisory-credentials" className="bmw-display-md mb-8">
              Technical Credentials
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {credentials.map((item) => (
                <div key={item.label} className="bg-bmw-surface-soft p-6 text-center">
                  <div className="text-bmw-ink text-2xl font-bold mb-1">{item.value}</div>
                  <div className="bmw-label text-[10px]">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-16 mb-8">
              <Link href="/contact" className="bmw-btn group">
                Start a Conversation
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="mailto:contact@sdad.pro"
                className="flex items-center gap-2 text-bmw-muted hover:text-bmw-ink transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@sdad.pro
              </a>
            </div>
          </motion.section>
        </article>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
