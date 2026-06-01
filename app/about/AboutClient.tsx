"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Code, Brain, Server, Zap, Target, TrendingUp, Lightbulb, Globe } from "lucide-react"
import Navigation from "../components/Navigation"
import { containerVariants, itemVariants } from "../lib/animation"

const skills = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Programming",
    items: ["Python", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "HTML/CSS", "SQL", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Java", "C++", "Rust", "Go", "Tailwind CSS", "Redux"],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI / ML",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "NumPy", "Pandas", "OpenCV", "Hugging Face", "Ollama", "Keras", "XGBoost", "Matplotlib", "NLTK", "spaCy", "LangChain", "Google Vertex AI", "Mistral AI", "Gemini API"],
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "DevOps & Cloud",
    items: ["AWS", "Docker", "Git", "CI/CD", "Kubernetes", "GitHub Actions", "Vercel", "Netlify", "Linux", "Bash", "Terraform", "Ansible", "Nginx", "EC2", "S3", "Lambda", "CloudWatch", "IAM"],
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Soft Skills",
    items: ["Problem Solving", "Leadership", "Communication", "Teamwork", "Adaptability", "Creativity", "Time Management", "Critical Thinking", "Decision Making", "Conflict Resolution", "Empathy", "Mentoring", "Project Management", "Agile"],
  },
]

const objectives = [
  {
    icon: <Target className="w-4 h-4" />,
    title: "Problem Solving",
    desc: "Expert in analyzing complex technical challenges and delivering innovative, scalable solutions across multiple projects.",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Continuous Learning",
    desc: "Committed to staying ahead of industry trends, regularly upskilling in AI/ML, cloud technologies, and modern frameworks.",
  },
  {
    icon: <Lightbulb className="w-4 h-4" />,
    title: "Impactful Work",
    desc: "Delivered 20+ production-ready applications serving thousands of users. Specialized in AI-powered solutions.",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    title: "Client-Focused",
    desc: "Experienced in remote collaboration with international clients. Translating technical concepts to stakeholders effectively.",
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
        <motion.div className="mb-16" variants={itemVariants}>
          <span className="bmw-label inline-block mb-4">About</span>
          <h1 className="bmw-display-lg mb-4">Professional Profile</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            I am a dynamic and results-driven Freelance Full Stack Developer with a strong foundation in Python, machine
            learning, and DevOps. My entrepreneurial drive and technical proficiency enable me to deliver innovative solutions
            for clients across the tech industry.
          </p>
        </motion.div>

        <motion.div className="mb-20" variants={itemVariants}>
          <h2 className="bmw-display-md mb-8">Technical Capabilities</h2>
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
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="bmw-display-md mb-8">Professional Objectives</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {objectives.map((obj) => (
              <div key={obj.title} className="bg-bmw-surface-soft p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-bmw-m-blue-light shrink-0">{obj.icon}</div>
                  <h3 className="text-bmw-ink text-sm font-bold tracking-machined uppercase">{obj.title}</h3>
                </div>
                <p className="text-bmw-muted text-sm leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
