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
    default: "Sai Dutta Abhishek Dash — Founder & Engineer | AI, Language Infrastructure & Security",
    template: "%s | Sai Dutta Abhishek Dash",
  },
  description: "Founder and engineer building AI infrastructure, language technology for underserved markets, and security systems at production scale. 20+ shipped products spanning on-device ML, LLM inference engines, privacy-first platforms, and developer tooling. Active across multiple ventures in deep-tech AI.",
  keywords: [
    "Founder",
    "Builder",
    "AI Infrastructure",
    "Language AI",
    "Indic Language Technology",
    "On-Device ML",
    "Security Engineering",
    "Developer Tooling",
    "Open Source Software",
    "Production Systems",
    "Product Engineering",
    "LLM Inference",
    "Edge AI",
    "Privacy Engineering",
    "Deep Tech",
    "Startup Founder",
    "Python",
    "TypeScript",
    "Rust",
    "C++",
    "Docker",
    "AWS",
    "Odisha",
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
    type: "profile",
    locale: "en_US",
    url: "https://sdad.pro",
    siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
    title: "Sai Dutta Abhishek Dash — Founder & Engineer | AI, Language Infrastructure & Security",
    description: "Founder and engineer building AI infrastructure, language technology for underserved markets, and security systems. 85+ repositories, 46+ Hugging Face models, 20+ shipped products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash — Founder & Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Dutta Abhishek Dash — Founder & Engineer",
    description: "Building AI infrastructure, language technology, and security systems. 85+ repos, 46+ HF models, 20+ shipped products.",
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
        "text": "Sai Dutta Abhishek Dash is a founder and engineer based in Odisha, India, building AI infrastructure, language technology for underserved markets, and security systems. He has shipped 20+ production products and maintains 85+ public repositories."
      }
    },
    {
      "@type": "Question",
      "name": "What does Sai Dutta Abhishek Dash build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He builds across the full stack: LLM inference engines, on-device ML models, language AI infrastructure, code security agents, privacy-first platforms, developer tooling, and open-source systems. His work spans Python, TypeScript, Rust, C++, and production infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "Is Sai Dutta Abhishek Dash open to investment or collaboration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. He is actively building multiple ventures in deep-tech AI and is open to investment conversations, technical collaborations, and strategic partnerships across AI infrastructure, language technology, and security."
      }
    },
    {
      "@type": "Question",
      "name": "What has Sai Dutta Abhishek Dash shipped?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "He has shipped production systems including AgentLoop (self-verifying coding agents), ornith-flight (C99 inference engine), Vulscany (AI code security agent), MarkItDownJS (universal document converter), PhishScout (on-device phishing detector), and 6 AI agent skills used by developers worldwide."
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
      "description": "Founder and engineer building AI infrastructure, language technology for underserved markets, and security systems at production scale. 20+ shipped products.",
      "sameAs": [
        "https://github.com/instax-dutta",
        "https://www.linkedin.com/in/sdabhishekdash/",
        "https://twitter.com/abhishekdash69",
        "https://huggingface.co/saidutta69"
      ],
      "jobTitle": "Founder & Engineer",
      "knowsAbout": [
        "AI Infrastructure",
        "Language AI",
        "On-Device ML",
        "Security Engineering",
        "Developer Tooling",
        "LLM Inference",
        "Tokenizer Optimization",
        "Privacy Engineering",
        "Product Engineering",
        "Open Source Software",
        "Startup Building"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Odisha",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://sdad.pro/#website",
      "url": "https://sdad.pro",
      "name": "Sai Dutta Abhishek Dash — Founder & Engineer",
      "dateModified": "2026-08-31",
      "publisher": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "ProfessionalService",
      "name": "Sai Dutta Abhishek Dash — Engineering & Advisory Services",
      "image": "https://sdad.pro/og-image.png",
      "url": "https://sdad.pro",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Odisha",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      },
      "areaServed": "Worldwide",
      "serviceType": [
        "AI Infrastructure Engineering",
        "Language Technology Development",
        "Security Engineering",
        "Product Architecture",
        "Technical Advisory"
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
