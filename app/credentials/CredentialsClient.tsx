"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, School, Award, Calendar } from "lucide-react"
import Navigation from "../components/Navigation"

const education = [
  {
    degree: "Bachelor's Degree, Computer Science",
    institution: "GIET University Gunupur",
    year: "2025",
    description: "Specialized in Computer Science with focus on AI/ML and Software Engineering",
    location: "Gunupur, Odisha",
  },
  {
    degree: "Intermediate",
    institution: "Delhi Public School (DPS)",
    year: "2021",
    description: "Science stream with Mathematics and Computer Science",
    location: "Dhenkanal, Odisha",
  },
  {
    degree: "High School",
    institution: "Maharshi Vidya Mandir",
    year: "2019",
    description: "Foundation in Science and Mathematics",
    location: "Rayagada, Odisha",
  },
]

const certifications = [
  { title: "AWS Bedrock Workshop - Build a Gen AI Chatbot", issuer: "Udemy", year: "2024" },
  { title: "Amazon Bedrock Getting Started", issuer: "Amazon Web Services (AWS)", year: "2024" },
  { title: "Amazon Q Developer", issuer: "Amazon Web Services (AWS)", year: "2024" },
  { title: "AWS Cloud Practitioner", issuer: "Udemy", year: "2024" },
  { title: "Learn to Code in Python 3", issuer: "Udemy", year: "2024" },
  { title: "Planning a Machine Learning Project", issuer: "Amazon Web Services (AWS)", year: "2024" },
  { title: "Python for Data Science and Machine Learning", issuer: "Udemy", year: "2024" },
  { title: "Project Management", issuer: "Career Ninja | LearnTube", year: "2024" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function Credentials() {
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
          <span className="bmw-label inline-block mb-4">Credentials</span>
          <h1 className="bmw-display-lg mb-4">Education & Certifications</h1>
          <p className="text-bmw-body text-base max-w-3xl leading-relaxed">
            Academic foundation and continuous professional development.
          </p>
        </motion.div>

        <motion.div className="mb-20" variants={itemVariants}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 flex items-center justify-center border border-bmw-hairline">
              <GraduationCap className="w-5 h-5 text-bmw-ink" />
            </div>
            <h2 className="text-bmw-ink text-lg font-bold uppercase tracking-machined">Education</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {education.map((edu, index) => (
              <div key={index} className="bg-bmw-surface-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-bmw-muted" />
                  <span className="text-bmw-muted text-xs">{edu.year}</span>
                </div>
                <h3 className="text-bmw-ink text-sm font-bold uppercase mb-2">{edu.degree}</h3>
                <p className="text-bmw-body text-xs mb-3">{edu.description}</p>
                <div className="border-t border-bmw-hairline pt-3 mt-auto">
                  <p className="text-bmw-muted text-xs">{edu.institution}</p>
                  <p className="text-bmw-muted text-[10px] mt-0.5">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 flex items-center justify-center border border-bmw-hairline">
              <Award className="w-5 h-5 text-bmw-ink" />
            </div>
            <h2 className="text-bmw-ink text-lg font-bold uppercase tracking-machined">Certifications</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-bmw-surface-soft p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-4 h-4 rounded-full border border-bmw-m-blue-dark shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 bg-bmw-m-blue-dark" />
                  </div>
                  <h3 className="text-bmw-ink text-xs font-bold uppercase leading-tight">{cert.title}</h3>
                </div>
                <p className="text-bmw-muted text-[11px] mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-bmw-muted text-[10px]">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3" variants={itemVariants}>
          {[
            { value: "1", label: "Degree" },
            { value: "3", label: "Institutions" },
            { value: "8", label: "Certifications" },
            { value: "2025", label: "Latest" },
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
