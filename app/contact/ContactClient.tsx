"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, MapPin, Clock, Send } from "lucide-react"
import Navigation from "../components/Navigation"
import { containerVariants, itemVariants } from "../lib/animation"

const socialLinks = [
  { icon: Github, href: "https://github.com/instax-dutta", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sdabhishekdash/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/abhishekdash69", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@sdad.pro", label: "Email" },
]

const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, "").replace(/javascript:/gi, "").replace(/on\w+=/gi, "").trim()
}

export default function Contact() {
  const [result, setResult] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = sanitizeInput(formData.get("name") as string || "")
    const email = sanitizeInput(formData.get("email") as string || "")
    const message = sanitizeInput(formData.get("message") as string || "")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) { setResult("Please enter a valid email address"); return }
    if (!name || !email || !message) { setResult("Please fill in all required fields"); return }

    setResult("Sending...")

    const sanitized = new FormData()
    sanitized.append("name", name)
    sanitized.append("email", email)
    sanitized.append("message", message)
    sanitized.append("access_key", "19f3f5f2-bed7-452c-ae94-55018f2c7418")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: sanitized,
        headers: { Accept: "application/json" },
      })
      const data = await response.json()
      if (data.success) {
        setResult("Message sent successfully.")
        form.reset()
      } else {
        setResult(data.message || "Failed to send.")
      }
    } catch {
      setResult("An error occurred. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-bmw-canvas">
      <Navigation />
      <motion.main
        className="max-w-[1440px] mx-auto px-6 pt-28 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-16" variants={itemVariants}>
          <span className="bmw-label inline-block mb-4">Contact</span>
          <h1 className="bmw-display-lg mb-4">Get In Touch</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="bg-bmw-surface-card p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-bmw-hairline shrink-0">
                  <Mail className="w-4 h-4 text-bmw-ink" />
                </div>
                <div>
                  <p className="bmw-label text-[10px] mb-1">Email</p>
                  <a href="mailto:contact@sdad.pro" className="text-bmw-ink text-sm no-underline hover:text-bmw-muted transition-colors">
                    contact@sdad.pro
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-bmw-hairline shrink-0">
                  <MapPin className="w-4 h-4 text-bmw-ink" />
                </div>
                <div>
                  <p className="bmw-label text-[10px] mb-1">Location</p>
                  <p className="text-bmw-ink text-sm">Bhubaneswar, India</p>
                  <p className="text-bmw-muted text-xs mt-0.5">Available for remote work</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-bmw-hairline shrink-0">
                  <Clock className="w-4 h-4 text-bmw-ink" />
                </div>
                <div>
                  <p className="bmw-label text-[10px] mb-1">Response Time</p>
                  <p className="text-bmw-ink text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-bmw-surface-card p-6">
              <p className="bmw-label text-[10px] mb-4">Connect</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-bmw-hairline text-bmw-muted hover:text-bmw-ink hover:border-bmw-ink transition-all duration-200"
                      aria-label={link.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-bmw-surface-card p-6">
            <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="bmw-label text-[10px] block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full h-12 px-4 bg-bmw-surface-soft border border-bmw-hairline text-bmw-ink text-sm placeholder:text-bmw-muted focus:outline-none focus:border-bmw-ink transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="bmw-label text-[10px] block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full h-12 px-4 bg-bmw-surface-soft border border-bmw-hairline text-bmw-ink text-sm placeholder:text-bmw-muted focus:outline-none focus:border-bmw-ink transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="bmw-label text-[10px] block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-bmw-surface-soft border border-bmw-hairline text-bmw-ink text-sm placeholder:text-bmw-muted focus:outline-none focus:border-bmw-ink transition-colors resize-none"
                />
              </div>
              <button type="submit" className="bmw-btn w-full group">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
              {result ? (
                <div className={`text-sm text-center ${result.includes("successfully") ? "text-bmw-m-blue-dark" : "text-bmw-m-red"}`}>
                  {result}
                </div>
              ) : null}
            </form>
          </motion.div>
        </div>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
