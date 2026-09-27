import type { Metadata } from "next"
import dynamic from "next/dynamic"
import AnswerBlocks, { stripLinkMarkup } from "./components/AnswerBlocks"
import { SITE, answerSections } from "./lib/site-facts"
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
    { "@type": "Person", "@id": "https://sdad.pro/#person" },
    { "@type": "WebSite", "@id": "https://sdad.pro/#website" },
    {
      "@type": "ProfilePage",
      "@id": "https://sdad.pro/#profile",
      "url": "https://sdad.pro",
      "name": "Sai Dutta Abhishek Dash \u2014 Founder & Engineer Profile",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://sdad.pro/#website" },
      "datePublished": SITE.datePublished,
      "dateModified": SITE.dateModified,
      "mainEntity": { "@id": "https://sdad.pro/#person" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["#answer-home-0 h2", "#answer-home-0 p"]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://sdad.pro/#faq",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://sdad.pro/#profile" },
      "mainEntity": answerSections.home.map((section) => ({
        "@type": "Question",
        "name": section.question,
        "acceptedAnswer": { "@type": "Answer", "text": stripLinkMarkup(section.answer) }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sdad.pro" }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }} />
      <HomeClient />
      <AnswerBlocks page="home" />
    </>
  )
}
