"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { Calendar, Building2, Zap } from "lucide-react"
import { transitionSmooth } from "../lib/animation"

type Experience = {
  title: string
  company: string
  date: string
  start: string
  end?: string
  type: string
  location: string
  description: string
  skills: string[]
  achievements: string[]
}

const experiences: Experience[] = [
  {
    title: "Founder",
    company: "Maelis Research",
    date: "August 2026 – Present",
    start: "2026-08",
    type: "Founder",
    location: "Dhenkanal, Odisha",
    description: "Building language AI infrastructure for Odia and low-resource Indian languages. Developing an Odia-optimized tokenizer (3x more efficient than generic alternatives), a family of Odia-exclusive LLMs (Lekhani), speech recognition (Shruti), and translation (Anuvada) APIs. All research released under Apache 2.0.",
    skills: ["Language AI", "Tokenizer Optimization", "Model Distillation", "On-Device ML", "NLP", "Low-Resource Languages", "Product Strategy", "Research"],
    achievements: [
      "Building the first commercial Odia-specific AI API",
      "3x more efficient tokenizer for Brahmic scripts",
      "Odia-exclusive LLM family with Apache 2.0 licensing",
      "Published unified Odia evaluation benchmark on Hugging Face"
    ],
  },
  {
    title: "Co-Founder",
    company: "Offsage",
    date: "September 2025 – Present",
    start: "2025-09",
    type: "Startup",
    location: "Remote",
    description: "Co-founded a technical agency eliminating operational friction for startups and scaling teams — from first automation to full-scale SaaS. Discipline-first web engineering, measured animation systems, and conversion-optimized infrastructure. Built in India, deployed globally.",
    skills: ["Technical Leadership", "SaaS Development", "Business Automation", "Web Engineering", "Client Delivery", "Product Architecture"],
    achievements: [
      "Built and led engineering delivery for startups and scaling teams",
      "Delivered end-to-end automation and SaaS solutions",
      "Established discipline-first web engineering practice"
    ],
  },
  {
    title: "Associate",
    company: "Tech Mahindra",
    date: "June 2025 – September 2025",
    start: "2025-06",
    end: "2025-09",
    type: "Full-time",
    location: "Bhubaneswar, India",
    description: "Worked as an Associate, contributing to enterprise software solutions and digital transformation initiatives.",
    skills: ["Enterprise Solutions", "Digital Transformation", "Team Collaboration", "Client Management"],
    achievements: ["Promoted from Associate Trainee", "Contributed to key projects"],
  },
  {
    title: "Associate Trainee",
    company: "Tech Mahindra",
    date: "May 2025 – June 2025",
    start: "2025-05",
    end: "2025-06",
    type: "Training Program",
    location: "Bhubaneswar, India",
    description: "Completed comprehensive training program covering enterprise technologies, software development practices, and industry standards.",
    skills: ["Enterprise Technologies", "Software Development", "Industry Standards", "Professional Development"],
    achievements: ["Successfully completed training program", "Quick promotion to Associate"],
  },
  {
    title: "Machine Learning & Software Engineering Internships",
    company: "Various Companies",
    date: "February 2024 – July 2024",
    start: "2024-02",
    end: "2024-07",
    type: "Internship",
    location: "Remote",
    description: "Completed multiple internships focused on machine learning, software engineering, automation, NLP, computer vision, and backend development. Built production-ready projects, deployed ML models, and gained hands-on experience across diverse technology stacks.",
    skills: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Backend Development", "Automation", "MLOps", "TensorFlow", "Scikit-learn", "OpenCV"],
    achievements: [
      "Completed 8 industry internships",
      "Built and deployed multiple ML applications",
      "Worked across NLP, computer vision, and predictive analytics projects",
      "Developed production-ready automation and backend solutions"
    ],
  },
  {
    title: "CEO & Co-Founder",
    company: "RacerNodes",
    date: "May 2022 – July 2023",
    start: "2022-05",
    end: "2023-07",
    type: "Entrepreneurship",
    location: "India",
    description: "Founded and led a technology startup, managing team operations, product development, and strategic planning.",
    skills: ["Leadership", "Entrepreneurship", "Strategic Planning", "Team Management", "Product Development"],
    achievements: [
      "Founded and operated a game server hosting startup",
      "Managed infrastructure, customer support, and product delivery",
      "Built and maintained services used by paying customers"
    ],
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: transitionSmooth.ease },
  },
}

export default function Experience() {
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
          <span className="bmw-label inline-block mb-4">Experience</span>
          <h1 className="bmw-display-lg mb-4">Builder Timeline</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            Building across AI infrastructure, language technology, security systems, and product engineering — from founder-led ventures to enterprise experience and open-source development at scale. See what I ship in the <Link href="/projects" className="underline hover:text-bmw-m-blue-light transition-colors">projects showcase</Link>.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-0">
          {experiences.map((exp) => {
            const [expStart, expEnd] = exp.date.split(" \u2013 ")
            return (
            <article key={exp.title} className="border-t border-bmw-hairline py-8 first:border-t-0">
              <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
                <div>
                  <span className="text-bmw-muted text-sm font-normal">
                    <time dateTime={exp.start}>{expStart}</time>
                    {expEnd ? <> &#8211; <time dateTime={exp.end}>{expEnd}</time></> : null}
                  </span>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="bmw-label text-[10px]">{exp.type}</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-bmw-ink text-lg font-bold uppercase mb-1">{exp.title}</h2>
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-bmw-muted text-sm">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <span className="w-px h-3 bg-bmw-hairline" />
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-bmw-body text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 text-[11px] text-bmw-muted bg-bmw-surface-soft">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {exp.achievements.length > 0 ? (
                    <div className="border-t border-bmw-hairline pt-4">
                      <h3 className="text-bmw-ink text-xs font-bold tracking-machined uppercase mb-3 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-bmw-muted" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-center gap-2 text-bmw-muted text-sm">
                            <span className="w-1.5 h-1.5 bg-bmw-m-blue-dark shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
            )
          })}
        </motion.div>

        <motion.div className="mt-20 grid grid-cols-3 gap-3" variants={itemVariants}>
          {[
            { value: "3", label: "Active Ventures" },
            { value: "20+", label: "Products Shipped" },
            { value: "85+", label: "Public Repositories" },
          ].map((stat) => (
            <div key={stat.label} className="bg-bmw-surface-soft p-6 text-center">
              <div className="text-bmw-ink text-3xl font-bold mb-1">{stat.value}</div>
              <div className="bmw-label text-[10px]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
