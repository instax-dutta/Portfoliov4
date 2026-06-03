import type React from "react"
import { Suspense } from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import LenisProvider from "./components/LenisProvider"

import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "700"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Sai Dutta Abhishek Dash - Full Stack Developer | AI/ML Engineer | Security Expert",
    template: "%s | Sai Dutta Abhishek Dash",
  },
  description: "Expert Full Stack Developer & AI/ML Engineer specializing in Security Engineering, Cloud Architecture, and Production Applications. Built 20+ apps including Binify (zero-knowledge encryption), GenieLabs (AI dev platform), Sensory (cloud storage), and PacketBuddy (network monitoring). Expertise in Python, React, Next.js, TypeScript, AWS, TensorFlow. AWS Certified Cloud Practitioner available for innovative projects.",
  keywords: [
    "Full Stack Developer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Security Engineer",
    "DevOps Engineer",
    "Cloud Architect",
    "Python Developer",
    "React Developer",
    "Next.js Developer",
    "NLP Engineer",
    "Cybersecurity Specialist",
    "Data Engineer",
    "Systems Automation Specialist",
    "Cryptography Expert",
    "Zero-Knowledge Encryption",
    "React 19",
    "Next.js 15",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Python 3.11",
    "Flask",
    "FastAPI",
    "REST API",
    "GraphQL",
    "TensorFlow",
    "PyTorch",
    "scikit-learn",
    "Hugging Face",
    "OpenAI",
    "Prompt Engineering",
    "NLP",
    "Sentiment Analysis",
    "Machine Learning Models",
    "AWS",
    "AWS Certified",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Vercel",
    "Cloud Architecture",
    "Security Vulnerability Scanner",
    "Penetration Testing",
    "Cryptography",
    "Web Security",
    "Application Security",
    "DDoS Protection",
    "Firewall Configuration",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Turso",
    "Upstash",
    "SQLite",
    "Freelance Developer",
    "Remote Developer",
    "Hire Full Stack Developer",
    "Contract Developer",
    "Web Development Services",
    "AI Development Services",
    "Security Consulting",
    "AI-Powered Applications",
    "Security Solutions",
    "Enterprise Web Apps",
    "SaaS Development",
    "API Development",
    "Cloud Migration",
    "Performance Optimization",
    "Remote Work",
    "Available for Hire",
    "Bhubaneswar Developer",
    "India Developer",
    "Global Projects",
    "Credentials",
    "Education",
    "Certifications",
    "Academic Background",
    "Professional Certifications",
    "Sai Dutta Abhishek Dash",
    "SDAD",
  ],
  authors: [{ name: "Sai Dutta Abhishek Dash", url: "https://sdad.pro" }],
  creator: "Sai Dutta Abhishek Dash",
  publisher: "Sai Dutta Abhishek Dash",
  metadataBase: new URL("https://sdad.pro"),
  alternates: {
    canonical: "https://sdad.pro/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdad.pro",
    siteName: "Sai Dutta Abhishek Dash - Developer Portfolio",
    title: "Sai Dutta Abhishek Dash - Full Stack Developer | AI Engineer | Security Expert",
    description: "Security-focused Full Stack Developer & AI/ML Engineer with 20+ production applications. Built Binify (zero-knowledge encryption), GenieLabs (AI platform), Sensory (cloud storage), PacketBuddy (network monitoring). Python - React - Next.js - AWS - TensorFlow - TypeScript",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash - Full Stack Developer, AI Engineer, Security Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Dutta Abhishek Dash - Full Stack Developer | AI Engineer | Security Expert",
    description: "Security-focused Full Stack Developer & AI/ML Engineer. Built 20+ apps: Binify (encryption), GenieLabs (AI), Sensory (cloud), PacketBuddy (monitoring). Python - React - Next.js - AWS - TensorFlow",
    images: ["/og-image.png"],
    creator: "@abhishekdash69",
    site: "@abhishekdash69",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
  other: {
    "theme-color": "#000000",
    "format-detection": "telephone=no",
    "og:logo": "https://sdad.pro/favicon.svg",
  },
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Sai Dutta Abhishek Dash?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sai Dutta Abhishek Dash is a Full Stack Engineer & AI Specialist based in Bhubaneswar, India. He builds production-ready applications at the intersection of full-stack engineering, AI/ML, and security. He has delivered 20+ production applications serving thousands of users and is AWS Certified."
      }
    },
    {
      "@type": "Question",
      "name": "What does Sai Dutta Abhishek Dash specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He specializes in full-stack development with Python, TypeScript, React, and Next.js; AI/ML engineering with TensorFlow, PyTorch, and LangChain; cloud architecture on AWS; security engineering including zero-knowledge encryption and DDoS protection; and DevOps with Docker, Kubernetes, and CI/CD pipelines."
      }
    },
    {
      "@type": "Question",
      "name": "Is Sai Dutta Abhishek Dash available for freelance work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Sai Dutta Abhishek Dash is available for remote freelance work worldwide. He offers full-stack development, AI/ML implementation, security auditing, and custom web application services. Response time is within 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What projects has Sai Dutta Abhishek Dash built?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He has built 20+ production applications including Tooner (document tokenization for LLMs), Binify (zero-knowledge encrypted pastebin), GenieLabs (AI-powered development platform), Sensory (scalable cloud storage), Auralyn (Discord music bot), and PacketBuddy (network usage tracker)."
      }
    },
    {
      "@type": "Question",
      "name": "What certifications does Sai Dutta Abhishek Dash hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He holds an AWS Certified Cloud Practitioner certification, Amazon Bedrock Getting Started from AWS, Amazon Q Developer from AWS, and a Bachelor's Degree in Computer Science from GIET University Gunupur."
      }
    }
  ]
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sdad.pro/#person",
      "name": "Sai Dutta Abhishek Dash",
      "url": "https://sdad.pro",
      "image": "https://sdad.pro/og-image.png",
      "description": "Security-focused Full Stack Developer & AI/ML Engineer. Specialist in Python, Next.js, and AWS Cloud Architecture.",
      "sameAs": [
        "https://github.com/instax-dutta",
        "https://www.linkedin.com/in/sdabhishekdash/",
        "https://twitter.com/abhishekdash69"
      ],
      "jobTitle": "Full Stack Engineer & AI Specialist",
      "knowsAbout": [
        "Full Stack Web Development",
        "Machine Learning",
        "AI Agent Development",
        "Security Engineering",
        "Cloud Architecture (AWS)",
        "Zero-Knowledge Encryption",
        "NLP & Sentiment Analysis",
        "Automation Systems"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://sdad.pro/#website",
      "url": "https://sdad.pro",
      "name": "Sai Dutta Abhishek Dash Portfolio",
      "publisher": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "ProfessionalService",
      "name": "Sai Dutta Abhishek Dash - Development Services",
      "image": "https://sdad.pro/og-image.png",
      "url": "https://sdad.pro",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      },
      "priceRange": "$$",
      "areaServed": "Worldwide",
      "serviceType": [
        "SaaS Development",
        "AI/ML Implementation",
        "Security Auditing",
        "Custom Web Applications"
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter text-bmw-body bg-bmw-canvas min-h-screen relative overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <Suspense fallback={null}>
          <LenisProvider>
            {children}
          </LenisProvider>
        </Suspense>
      </body>
    </html>
  )
}
