import type { Metadata } from "next"
import dynamic from "next/dynamic"
import AnswerBlocks from "../components/AnswerBlocks"
import { SITE, faqSchema } from "../lib/site-facts"
const ExperienceClient = dynamic(() => import("./ExperienceClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Builder Timeline — Sai Dutta Abhishek Dash",
  description: "Building across AI infrastructure, language technology, security systems, and product engineering. From founder-led ventures to enterprise experience and open-source development at scale.",
  keywords: [
    "Founder Timeline",
    "Builder Journey",
    "AI Infrastructure",
    "Language AI",
    "Security Engineering",
    "Product Engineering",
    "Open Source Development",
    "Enterprise Experience",
    "Startup Building"
  ],
  alternates: {
    canonical: "https://sdad.pro/experience",
  },
  openGraph: {
    title: "Builder Timeline — Sai Dutta Abhishek Dash",
    description: "Founder at Maelis Research, Co-Founder at Offsage, and enterprise experience at Tech Mahindra. Building across AI infrastructure and language technology.",
    url: "https://sdad.pro/experience",
    siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash — Builder Timeline",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builder Timeline — Sai Dutta Abhishek Dash",
    description: "Building across AI infrastructure, language technology, and product engineering at scale.",
    images: ["/og-image.png"],
  }
}

const experienceStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": "https://sdad.pro/experience/#timeline",
      "name": "Builder timeline of Sai Dutta Abhishek Dash",
      "inLanguage": "en",
      "datePublished": SITE.datePublished,
      "dateModified": SITE.dateModified,
      "numberOfItems": 6,
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Founder, Maelis Research" },
        { "@type": "ListItem", position: 2, name: "Co-Founder, Offsage" },
        { "@type": "ListItem", position: 3, name: "Associate, Tech Mahindra" },
        { "@type": "ListItem", position: 4, name: "Associate Trainee, Tech Mahindra" },
        { "@type": "ListItem", position: 5, name: "Machine Learning and Software Engineering Internships" },
        { "@type": "ListItem", position: 6, name: "CEO and Co-Founder, RacerNodes" }
      ],
      "author": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "@id": "https://sdad.pro/credentials/#degree",
      "name": "Bachelor's Degree in Computer Science",
      "credentialCategory": "degree",
      "educationalLevel": "Bachelor",
      "about": { "@id": "https://sdad.pro/#person" },
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "GIET University Gunupur",
        "url": "https://www.giet.edu"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://sdad.pro/experience/#techmahindra",
      "name": "Tech Mahindra",
      "url": "https://www.techmahindra.com"
    },
    faqSchema("experience", "https://sdad.pro/experience"),
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/experience/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Experience", item: "https://sdad.pro/experience" }
      ]
    }
  ]
}

export default function ExperiencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceStructuredData) }} />
      <ExperienceClient />
      <AnswerBlocks page="experience" />
    </>
  )
}
