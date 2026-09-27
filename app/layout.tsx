import type React from "react"
import { Suspense } from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import LenisProvider from "./components/LenisProvider"
import { SITE } from "./lib/site-facts"

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
    types: {
      "application/llms.txt": "https://sdad.pro/llms.txt",
    },
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sdad.pro/#person",
      "name": "Sai Dutta Abhishek Dash",
      "alternateName": ["SDAD", "instax-dutta"],
      "url": "https://sdad.pro",
      "image": "https://sdad.pro/og-image.png",
      "email": "contact@sdad.pro",
      "description": "Founder and engineer building AI infrastructure, language technology for underserved markets, and security systems at production scale. 20+ shipped products, 85+ public repositories, 46+ Hugging Face models.",
      "jobTitle": "Founder & Engineer",
      "sameAs": SITE.sameAs,
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
      "knowsLanguage": ["en", "Odia"],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "GIET University Gunupur",
        "url": "https://www.giet.edu"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "AWS Certified Cloud Practitioner",
          "credentialCategory": "Certification",
          "dateCreated": "2024",
          "recognizedBy": { "@type": "Organization", "name": "Amazon Web Services", "url": "https://aws.amazon.com" }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Bachelor's Degree in Computer Science",
          "credentialCategory": "degree",
          "dateCreated": "2025",
          "recognizedBy": { "@type": "CollegeOrUniversity", "name": "GIET University Gunupur", "url": "https://www.giet.edu" }
        }
      ],
      "founderOf": [
        { "@id": "https://sdad.pro/#maelisresearch" },
        { "@id": "https://sdad.pro/#offsage" }
      ],
      "worksFor": { "@id": "https://sdad.pro/#maelisresearch" },
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
      "name": "Sai Dutta Abhishek Dash \u2014 Founder & Engineer",
      "inLanguage": "en",
      "datePublished": SITE.datePublished,
      "dateModified": SITE.dateModified,
      "publisher": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "Organization",
      "@id": "https://sdad.pro/#maelisresearch",
      "name": "Maelis Research",
      "url": "https://maelis.sdad.pro",
      "description": "Language AI infrastructure for Odia and low-resource Indian languages. Building an Odia-optimized tokenizer 3x more efficient than generic alternatives, the Lekhani Odia-exclusive LLM family, Shruti speech recognition, and Anuvada translation for 38 million Odia speakers.",
      "foundingDate": "2026",
      "founder": { "@id": "https://sdad.pro/#person" },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhenkanal",
        "addressRegion": "Odisha",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://maelis.sdad.pro",
        "https://huggingface.co/MaelisResearch"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://sdad.pro/#offsage",
      "name": "Offsage",
      "url": "https://offsage.com",
      "description": "Technical agency delivering business automation, SaaS development, and web engineering for startups and scaling teams.",
      "foundingDate": "2025",
      "founder": { "@id": "https://sdad.pro/#person" },
      "sameAs": ["https://offsage.com"]
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
        <Suspense fallback={null}>
          <LenisProvider>
            {children}
          </LenisProvider>
        </Suspense>
      </body>
    </html>
  )
}
