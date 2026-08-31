import type { Metadata } from "next"
import dynamic from "next/dynamic"
const HomeClient = dynamic(() => import("./components/HomeClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Sai Dutta Abhishek Dash — Founder & Engineer | AI, Language Infrastructure & Security",
  description: "Founder and engineer building AI infrastructure, language technology for underserved markets, and security systems at production scale. 20+ shipped products spanning on-device ML, LLM inference engines, privacy-first platforms, and developer tooling. Active across multiple deep-tech ventures.",
  keywords: [
    "Founder",
    "Builder",
    "AI Infrastructure",
    "Language AI",
    "Indic Languages",
    "On-Device ML",
    "Security Engineering",
    "Developer Tooling",
    "Production Systems",
    "Open Source",
    "LLM Inference",
    "Edge AI",
    "Privacy Engineering",
    "Deep Tech",
    "Sai Dutta Abhishek Dash",
    "sdad.pro",
    "Odisha",
    "India"
  ],
  alternates: {
    canonical: "https://sdad.pro/",
  },
  openGraph: {
    title: "Sai Dutta Abhishek Dash — Founder & Engineer",
    description: "Building AI infrastructure, language technology for underserved markets, and security systems. 85+ repos, 46+ HF models, 20+ shipped products.",
    url: "https://sdad.pro/",
    siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash — Founder & Engineer",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Dutta Abhishek Dash — Founder & Engineer",
    description: "Building AI infrastructure, language technology, and security systems. 85+ repos, 46+ HF models.",
    images: ["/og-image.png"],
  }
}

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sdad.pro/#person",
      "name": "Sai Dutta Abhishek Dash",
      "url": "https://sdad.pro",
      "image": "https://sdad.pro/og-image.png",
      "description": "Founder and engineer building AI infrastructure, language technology, and security systems at production scale.",
      "sameAs": [
        "https://github.com/instax-dutta",
        "https://www.linkedin.com/in/sdabhishekdash/",
        "https://twitter.com/abhishekdash69",
        "https://huggingface.co/saidutta69"
      ],
      "email": "contact@sdad.pro",
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
      ]
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
      "@type": "ProfilePage",
      "@id": "https://sdad.pro/#profile",
      "url": "https://sdad.pro",
      "name": "Sai Dutta Abhishek Dash — Founder & Engineer Profile",
      "mainEntity": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }} />
      <HomeClient />
      <div className="sr-only" aria-hidden="true">
        <p>Sai Dutta Abhishek Dash is a founder and engineer based in Odisha, India, building AI infrastructure, language technology for underserved markets, and security systems. He has shipped production products and maintains 85+ public repositories spanning LLM inference engines, on-device ML models, code security agents, privacy-first platforms, developer tooling, and 6 AI agent skills. His technical capabilities cover Python, TypeScript, Rust, C++, Next.js, AWS, Docker, and production infrastructure.</p>
        <p>Stats: 20+ shipped products | 85+ public repositories | 6 AI agent skills | Multiple ventures in deep-tech AI | Open to investment and strategic partnerships | Last updated: August 2026</p>
      </div>
    </>
  )
}
