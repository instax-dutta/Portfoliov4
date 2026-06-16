"use client"
import { motion } from "framer-motion"
import { Code, Brain, Server, Zap } from "lucide-react"
import Navigation from "../components/Navigation"
import { containerVariants, itemVariants } from "../lib/animation"
import {
  SiHtml5, SiPython, SiCss, SiSqlite, SiJavascript, SiOpenjdk, SiCplusplus,
  SiR, SiRust, SiGo, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiKeras,
  SiOpencv, SiPlotly, SiHuggingface, SiGooglecloud,
  SiDocker, SiGit, SiGithubactions, SiGnubash, SiLinux,
  SiNetlify, SiVercel, SiJenkins, SiKubernetes,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { TbChartDots, TbChartBar, TbChartLine } from "react-icons/tb"
import { GiArtificialIntelligence } from "react-icons/gi"

const techIconMap: Record<string, React.ReactNode> = {
  HTML: <SiHtml5 />,
  Python: <SiPython />,
  CSS: <SiCss />,
  SQL: <SiSqlite />,
  JavaScript: <SiJavascript />,
  Java: <SiOpenjdk />,
  "C++": <SiCplusplus />,
  R: <SiR />,
  Rust: <SiRust />,
  Go: <SiGo />,
  TypeScript: <SiTypescript />,
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <SiNodedotjs />,
  TensorFlow: <SiTensorflow />,
  PyTorch: <SiPytorch />,
  "scikit-learn": <SiScikitlearn />,
  NumPy: <SiNumpy />,
  Pandas: <SiPandas />,
  Keras: <SiKeras />,
  XGBoost: <TbChartDots />,
  OpenCV: <SiOpencv />,
  Matplotlib: <TbChartLine />,
  Seaborn: <TbChartBar />,
  Plotly: <SiPlotly />,
  Ollama: <GiArtificialIntelligence />,
  "Hugging Face": <SiHuggingface />,
  "Google Vertex": <SiGooglecloud />,
  AWS: <FaAws />,
  Docker: <SiDocker />,
  Git: <SiGit />,
  "CI/CD": <SiGithubactions />,
  Bash: <SiGnubash />,
  Linux: <SiLinux />,
  Netlify: <SiNetlify />,
  Vercel: <SiVercel />,
  "GitHub Actions": <SiGithubactions />,
  Jenkins: <SiJenkins />,
  Kubernetes: <SiKubernetes />,
  "Problem Solving": <TbChartDots />,
  Communication: <TbChartDots />,
  Adaptability: <TbChartDots />,
  Collaboration: <TbChartDots />,
  Leadership: <TbChartDots />,
  "Time Management": <TbChartDots />,
  "Critical Thinking": <TbChartDots />,
  Creativity: <TbChartDots />,
  Empathy: <TbChartDots />,
  "Conflict Resolution": <TbChartDots />,
  "Decision Making": <TbChartDots />,
  Teamwork: <TbChartDots />,
}

const skills = [
  {
    category: "Languages & Frameworks",
    icon: <Code className="w-5 h-5" />,
    items: ["Python", "SQL", "JavaScript", "Java", "C++", "Rust", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    category: "AI & Data",
    icon: <Brain className="w-5 h-5" />,
    items: ["TensorFlow", "PyTorch", "scikit-learn", "NumPy", "Pandas", "Keras", "XGBoost", "OpenCV", "Matplotlib", "Seaborn", "Plotly", "Ollama", "Hugging Face", "Google Vertex"],
  },
  {
    category: "Infrastructure",
    icon: <Server className="w-5 h-5" />,
    items: ["AWS", "Docker", "Git", "CI/CD", "Bash", "Linux", "Netlify", "Vercel", "GitHub Actions", "Jenkins", "Kubernetes"],
  },
  {
    category: "Specializations",
    icon: <Zap className="w-5 h-5" />,
    items: ["AI Infrastructure", "Security Engineering", "Developer Tooling", "Self-Hosted Platforms", "Open Source", "Distributed Systems", "Cloud Architecture", "Privacy Engineering"],
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
          <h1 className="bmw-display-lg mb-4">Engineering Toolkit</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            Technologies, platforms, and tools I use to build AI infrastructure, security products, developer tooling, and production-grade applications.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-3" variants={containerVariants}>
          {skills.map((skill) => (
            <motion.div key={skill.category} variants={itemVariants} className="bg-bmw-surface-card p-6">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-bmw-hairline">
                <div className="text-bmw-m-blue-light">{skill.icon}</div>
                <h2 className="text-bmw-ink text-sm font-bold tracking-machined uppercase">{skill.category}</h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skill.items.map((item) =>
                  skill.category === "Specializations" ? (
                    <span key={item} className="px-3 py-1.5 text-xs text-bmw-muted bg-bmw-surface-soft">
                      {item}
                    </span>
                  ) : (
                    <span
                      key={item}
                      title={item}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-lg text-lg text-bmw-muted bg-bmw-surface-soft hover:bg-bmw-surface-hover hover:text-bmw-ink transition-colors"
                    >
                      {techIconMap[item]}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
      <div className="m-stripe" />
    </div>
  )
}
