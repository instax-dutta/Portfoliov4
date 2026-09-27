import type { Metadata } from "next"
import dynamic from "next/dynamic"
import AnswerBlocks from "../components/AnswerBlocks"
import { SITE } from "../lib/site-facts"
import { skillCategories } from "../lib/skills"
const SkillsClient = dynamic(() => import("./SkillsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Engineering Toolkit — Sai Dutta Abhishek Dash",
  description: "Complete tech stack of Sai Dutta Abhishek Dash. Expertise in Python, React, Next.js, Rust, AWS (Certified), TensorFlow, Docker, and cryptography.",
  keywords: [
    "Tech Stack 2026",
    "Programming Languages",
    "AI frameworks",
    "Infrastructure tools",
    "Cryptography skills",
    "Linux administration",
    "Developer capabilities",
    "AI Infrastructure",
    "Security Engineering"
  ],
  alternates: {
    canonical: "https://sdad.pro/skills",
  },
  openGraph: {
    title: "Engineering Toolkit — Sai Dutta Abhishek Dash",
    description: "Python, TypeScript, Rust, C/C++, PyTorch, TensorFlow, Docker, AWS. Full-stack AI infrastructure and security engineering toolkit.",
    url: "https://sdad.pro/skills",
    siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash — Engineering Toolkit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Toolkit — Sai Dutta Abhishek Dash",
    description: "Complete tech stack of Sai Dutta Abhishek Dash. Spanning languages, AI & data, infrastructure, and security engineering.",
    images: ["/og-image.png"],
  }
}

const skillTerms = skillCategories.flatMap((group) =>
  group.items.map((item) => ({ category: group.category, name: item }))
)

const skillsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://sdad.pro/skills/#webpage",
      "url": "https://sdad.pro/skills",
      "name": "Engineering Toolkit \u2014 Sai Dutta Abhishek Dash",
      "description": "Complete engineering stack of Sai Dutta Abhishek Dash, spanning languages, AI and data, infrastructure, and security engineering.",
      "inLanguage": "en",
      "datePublished": SITE.datePublished,
      "dateModified": SITE.dateModified,
      "isPartOf": { "@id": "https://sdad.pro/#website" },
      "about": { "@id": "https://sdad.pro/#person" },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Engineering toolkit of Sai Dutta Abhishek Dash",
        "numberOfItems": skillTerms.length,
        "itemListElement": skillCategories.map((group) => ({
          "@type": "ListItem",
          "position": skillCategories.indexOf(group) + 1,
          "name": group.category,
          "itemListElement": group.items.map((item, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "DefinedTerm",
              "name": item,
              "description": `${item} \u2014 used by Sai Dutta Abhishek Dash in the ${group.category} category.`,
              "inDefinedTermSet": { "@id": "https://sdad.pro/skills/#toolkit" }
            }
          }))
        }))
      }
    },
    {
      "@type": "DefinedTermSet",
      "@id": "https://sdad.pro/skills/#toolkit",
      "name": "Engineering Toolkit",
      "description": "Languages, AI and data tooling, infrastructure, and engineering specializations used by Sai Dutta Abhishek Dash.",
      "inLanguage": "en",
      "creator": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/skills/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sdad.pro" },
        { "@type": "ListItem", "position": 2, "name": "Skills", "item": "https://sdad.pro/skills" }
      ]
    }
  ]
}

export default function SkillsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsStructuredData) }} />
      <SkillsClient />
      <AnswerBlocks page="skills" />
    </>
  )
}
