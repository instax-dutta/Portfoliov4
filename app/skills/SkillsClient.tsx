"use client"
import { motion } from "framer-motion"
import { Code, Brain, Server, Zap } from "lucide-react"
import Navigation from "../components/Navigation"
import { containerVariants, itemVariants } from "../lib/animation"

const skills = [
  {
    category: "Programming",
    icon: <Code className="w-5 h-5" />,
    items: ["HTML", "Python", "CSS", "SQL", "JavaScript", "Java", "C++", "R", "Rust", "Go", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    category: "AI / ML",
    icon: <Brain className="w-5 h-5" />,
    items: ["TensorFlow", "PyTorch", "scikit-learn", "NumPy", "Pandas", "Keras", "XGBoost", "OpenCV", "Matplotlib", "Seaborn", "Plotly", "Ollama", "Hugging Face", "Google Vertex"],
  },
  {
    category: "DevOps & Cloud",
    icon: <Server className="w-5 h-5" />,
    items: ["AWS", "Docker", "Git", "CI/CD", "Bash", "Linux", "Netlify", "Vercel", "GitHub Actions", "Jenkins", "Kubernetes"],
  },
  {
    category: "Soft Skills",
    icon: <Zap className="w-5 h-5" />,
    items: ["Problem Solving", "Communication", "Adaptability", "Collaboration", "Leadership", "Time Management", "Critical Thinking", "Creativity", "Empathy", "Conflict Resolution", "Decision Making", "Teamwork"],
  },
]

export default function Skills() {
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
          <span className="bmw-label inline-block mb-4">Skills</span>
          <h1 className="bmw-display-lg mb-4">Technical Expertise</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            A comprehensive overview of my technical abilities and professional competencies.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-3" variants={containerVariants}>
          {skills.map((skill) => (
            <motion.div key={skill.category} variants={itemVariants} className="bg-bmw-surface-card p-6">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-bmw-hairline">
                <div className="text-bmw-m-blue-light">{skill.icon}</div>
                <h2 className="text-bmw-ink text-sm font-bold tracking-machined uppercase">{skill.category}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 text-xs text-bmw-muted bg-bmw-surface-soft">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
