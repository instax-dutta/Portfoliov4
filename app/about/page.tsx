import type { Metadata } from "next"
import dynamic from "next/dynamic"
import AnswerBlocks from "../components/AnswerBlocks"
import { SITE } from "../lib/site-facts"
const AboutClient = dynamic(() => import("./AboutClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "About | Sai Dutta Abhishek Dash — Founder & Engineer",
  description: "Building AI infrastructure, language technology, and security systems at production scale. 20+ shipped products. Active across multiple deep-tech ventures. Open to investment and partnerships.",
  keywords: [
    "Founder Profile",
    "Builder",
    "AI Infrastructure",
    "Language AI",
    "Security Engineering",
    "Product Engineering",
    "Open Source",
    "Deep Tech",
    "Investment Ready",
    "Sai Dutta Abhishek Dash"
  ],
  alternates: {
    canonical: "https://sdad.pro/about",
  },
  openGraph: {
    title: "About — Sai Dutta Abhishek Dash",
    description: "Building AI infrastructure, language technology for underserved markets, and security systems. 85+ repos, 46+ HF models, 20+ shipped products.",
    url: "https://sdad.pro/about",
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
    title: "About | Sai Dutta Abhishek Dash — Founder & Engineer",
    description: "Building AI infrastructure, language technology, and security systems. 20+ shipped products.",
    images: ["/og-image.png"],
  }
}

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://sdad.pro/about/#webpage",
      "url": "https://sdad.pro/about",
      "name": "About Sai Dutta Abhishek Dash — Founder & Engineer",
      "description": "Founder and engineer building AI infrastructure, language technology for underserved markets, and security systems at production scale. 85+ public repositories, 46+ Hugging Face models.",
      "inLanguage": "en",
      "datePublished": SITE.datePublished,
      "dateModified": SITE.dateModified,
      "mainEntity": {
        "@type": "Person",
        "@id": "https://sdad.pro/#person",
        "name": "Sai Dutta Abhishek Dash",
        "url": "https://sdad.pro",
        "image": "https://sdad.pro/og-image.png",
        "description": "Founder and engineer building AI infrastructure, language technology for underserved markets, and security systems at production scale.",
        "jobTitle": "Founder & Engineer",
        "nationality": {
          "@type": "Country",
          "name": "India"
        },
        "knowsAbout": [
          "AI Infrastructure",
          "Language AI",
          "On-Device ML",
          "Security Engineering",
          "LLM Inference",
          "Tokenizer Optimization",
          "Privacy Engineering",
          "Open Source Software"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "AWS Certified Cloud Practitioner",
            "recognizedBy": { "@type": "Organization", "name": "Amazon Web Services" }
          }
        ],
        "sameAs": [
          "https://github.com/instax-dutta",
          "https://www.linkedin.com/in/sdabhishekdash/",
          "https://twitter.com/abhishekdash69",
          "https://huggingface.co/saidutta69"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/about/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://sdad.pro/about" }
      ]
    }
  ]
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }} />
      <AboutClient />
      <AnswerBlocks page="about" />
    </>
  )
}
