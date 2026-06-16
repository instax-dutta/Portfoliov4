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
    default: "Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer",
    template: "%s | Sai Dutta Abhishek Dash",
  },
  description: "AI Infrastructure, Security Engineering & Developer Tooling Specialist. Builder of LLM gateways, code security agents, distributed systems, and open-source platforms. Expert in Python, Next.js, TypeScript, AWS, Rust, Docker, and cryptography.",
  keywords: [
    "AI Infrastructure Engineer",
    "Security Engineering",
    "Developer Tooling",
    "Open Source Software",
    "Self-Hosted Applications",
    "Distributed Systems",
    "Full Stack Engineering",
    "Software Architecture",
    "LLM gateways",
    "code security agents",
    "privacy engineering",
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Python",
    "Rust",
    "Docker",
    "Kubernetes",
    "AWS",
    "cryptography",
    "zero-knowledge",
    "P2P encrypted chat",
    "Bhubaneswar",
    "India",
    "Sai Dutta Abhishek Dash",
    "SDAD"
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
    siteName: "Sai Dutta Abhishek Dash - Portfolio",
    title: "Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer",
    description: "AI Infrastructure, Security Engineering & Developer Tooling Specialist. Builder of LLM gateways, code security agents, distributed systems, and open-source tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer",
    description: "AI Infrastructure, Security Engineering & Developer Tooling Specialist. Builder of LLM gateways, code security agents, and open-source tools.",
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
        "text": "Sai Dutta Abhishek Dash is an AI Infrastructure, Security, and Developer Tooling Engineer based in Bhubaneswar, India. He builds high-performance, privacy-focused, and self-hosted open-source software used by developers worldwide."
      }
    },
    {
      "@type": "Question",
      "name": "What does Sai Dutta Abhishek Dash specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He specializes in AI infrastructure (LLM gateways, inference pipelines), security engineering (code security agents, cryptography, anti-bot filtering), developer platforms, distributed systems, self-hosted software, and open-source development."
      }
    },
    {
      "@type": "Question",
      "name": "Is Sai Dutta Abhishek Dash available for collaboration or consulting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, he is open to opportunities, collaborations, and technical consulting across AI infrastructure, security engineering, developer tooling, and self-hosted platforms."
      }
    },
    {
      "@type": "Question",
      "name": "What systems has Sai Dutta Abhishek Dash built?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He has built 20 production systems including Epoxy (LLM gateway proxy), Vulscany (AI code security agent), MarkItDownJS (document ingestion engine), PraharShield (DDoS anti-bot proxy filter), and CL-Chat Reborn (encrypted P2P CLI chat)."
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
      "description": "AI Infrastructure, Security Engineering & Developer Tooling Specialist. Creator of LLM gateways, code security agents, and distributed open-source tools.",
      "sameAs": [
        "https://github.com/instax-dutta",
        "https://www.linkedin.com/in/sdabhishekdash/",
        "https://twitter.com/abhishekdash69"
      ],
      "jobTitle": "AI Infrastructure & Security Engineer",
      "knowsAbout": [
        "AI Infrastructure",
        "Security Engineering",
        "Developer Tooling",
        "Self-Hosted Platforms",
        "Open Source Software",
        "Distributed Systems",
        "Cloud Architecture",
        "Privacy Engineering"
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
      "name": "Sai Dutta Abhishek Dash - Engineering Services",
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
        "AI Infrastructure Integration",
        "Security Auditing",
        "Developer Tooling Development",
        "Custom SaaS Systems"
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
