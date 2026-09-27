export type SkillCategory = {
  category: string
  /** Key resolved to a lucide icon inside the client component. */
  icon: "code" | "brain" | "server" | "zap"
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    icon: "code",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "Java",
      "C++",
      "Rust",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    category: "AI & Data",
    icon: "brain",
    items: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Keras",
      "XGBoost",
      "OpenCV",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Ollama",
      "Hugging Face",
      "Google Vertex",
    ],
  },
  {
    category: "Infrastructure",
    icon: "server",
    items: [
      "AWS",
      "Docker",
      "Git",
      "CI/CD",
      "Bash",
      "Linux",
      "Netlify",
      "Vercel",
      "GitHub Actions",
      "Jenkins",
      "Kubernetes",
    ],
  },
  {
    category: "Specializations",
    icon: "zap",
    items: [
      "AI Infrastructure",
      "Security Engineering",
      "Developer Tooling",
      "Self-Hosted Platforms",
      "Open Source",
      "Distributed Systems",
      "Cloud Architecture",
      "Privacy Engineering",
    ],
  },
]

export const totalSkills = skillCategories.reduce((n, c) => n + c.items.length, 0)
