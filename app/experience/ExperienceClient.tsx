"use client"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import { Calendar, Building2, Zap } from "lucide-react"
import { transitionSmooth } from "../lib/animation"

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    date: "September 2025 – Present",
    type: "Freelance",
    location: "Remote",
    description: "Providing full-stack development services to clients, building scalable web applications, and delivering end-to-end solutions from frontend to backend.",
    skills: ["Full Stack Development", "Web Applications", "Client Services", "Project Management", "React", "Node.js", "Database Design"],
    achievements: ["Delivering custom web solutions", "Working with diverse client projects", "Building scalable applications"],
  },
  {
    title: "Associate",
    company: "Tech Mahindra",
    date: "June 2025 – September 2025",
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
    type: "Training Program",
    location: "Bhubaneswar, India",
    description: "Completed comprehensive training program covering enterprise technologies, software development practices, and industry standards.",
    skills: ["Enterprise Technologies", "Software Development", "Industry Standards", "Professional Development"],
    achievements: ["Successfully completed training program", "Quick promotion to Associate"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "CodeAlpha",
    date: "June 2024 – July 2024",
    type: "Internship",
    location: "Remote",
    description: "Developed and implemented machine learning models for data analysis and predictive analytics projects.",
    skills: ["Python", "Machine Learning", "Data Analysis", "TensorFlow", "Scikit-learn"],
    achievements: ["Built 3 ML models", "Improved prediction accuracy by 15%"],
  },
  {
    title: "Python Developer Intern",
    company: "OctaNet Services Pvt Ltd.",
    date: "June 2024 – July 2024",
    type: "Internship",
    location: "Remote",
    description: "Developed Python applications and automated workflows, contributing to backend development projects.",
    skills: ["Python", "Backend Development", "API Development", "Automation", "Database Management"],
    achievements: ["Created automation scripts", "Reduced manual work by 40%"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "CognoRise InfoTech",
    date: "June 2024 – July 2024",
    type: "Internship",
    location: "Remote",
    description: "Focused on computer vision and natural language processing projects, implementing cutting-edge ML algorithms.",
    skills: ["Computer Vision", "NLP", "Deep Learning", "OpenCV", "NLTK"],
    achievements: ["Implemented CV solutions", "Developed NLP models"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "TechnoHacks EduTech Official",
    date: "May 2024 – June 2024",
    type: "Internship",
    location: "Remote",
    description: "Worked on educational technology solutions using machine learning to enhance learning experiences.",
    skills: ["EdTech Solutions", "Machine Learning", "Data Science", "Educational Analytics"],
    achievements: ["Built learning recommendation system", "Analyzed student performance data"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "CodSoft",
    date: "May 2024 – June 2024",
    type: "Internship",
    location: "Remote",
    description: "Developed machine learning solutions for business intelligence and data-driven decision making.",
    skills: ["Business Intelligence", "Data Mining", "Predictive Analytics", "Machine Learning"],
    achievements: ["Created BI dashboards", "Implemented predictive models"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Cognifyz Technologies",
    date: "May 2024 – June 2024",
    type: "Internship",
    location: "Remote",
    description: "Specialized in developing AI-powered applications and integrating machine learning models into production systems.",
    skills: ["AI Applications", "Model Deployment", "Production Systems", "MLOps"],
    achievements: ["Deployed ML models to production", "Optimized model performance"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Encryptix",
    date: "April 2024 – May 2024",
    type: "Internship",
    location: "Remote",
    description: "Focused on developing secure ML applications with emphasis on data privacy and security in AI systems.",
    skills: ["Secure ML", "Data Privacy", "Encryption", "AI Security", "Privacy-Preserving ML"],
    achievements: ["Implemented secure ML pipeline", "Enhanced data privacy measures"],
  },
  {
    title: "Python Developer Intern",
    company: "Cognifyz Technologies",
    date: "Feb 2024 – March 2024",
    type: "Internship",
    location: "Remote",
    description: "Early internship experience focusing on Python development fundamentals and software engineering practices.",
    skills: ["Python", "Software Engineering", "Web Development", "Database Design"],
    achievements: ["Built web applications", "Learned industry best practices"],
  },
  {
    title: "CEO & Co-Founder",
    company: "RacerNodes",
    date: "May 2022 – July 2023",
    type: "Entrepreneurship",
    location: "India",
    description: "Founded and led a technology startup, managing team operations, product development, and strategic planning.",
    skills: ["Leadership", "Entrepreneurship", "Strategic Planning", "Team Management", "Product Development"],
    achievements: ["Led team of 5+ members", "Launched successful product", "Managed startup operations"],
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
          <h1 className="bmw-display-lg mb-4">Professional Journey</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            A comprehensive journey through my professional experiences, from entrepreneurship to machine learning engineering,
            showcasing growth, learning, and impact across diverse technology domains.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="border-t border-bmw-hairline py-8 first:border-t-0">
              <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
                <div>
                  <span className="text-bmw-muted text-sm font-normal">{exp.date}</span>
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
            </div>
          ))}
        </motion.div>

        <motion.div className="mt-20 grid grid-cols-3 gap-3" variants={itemVariants}>
          {[
            { value: experiences.length.toString(), label: "Total Experiences" },
            { value: "10+", label: "Companies" },
            { value: "3+", label: "Years" },
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
