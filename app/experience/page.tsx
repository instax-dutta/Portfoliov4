import type { Metadata } from "next"
import dynamic from "next/dynamic"
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
      "@type": "Person",
      "@id": "https://sdad.pro/#person",
      "name": "Sai Dutta Abhishek Dash",
      "url": "https://sdad.pro",
      "email": "contact@sdad.pro",
      "jobTitle": "Founder & Engineer",
      "dateModified": "2026-08-31",
      "sameAs": [
        "https://github.com/instax-dutta",
        "https://www.linkedin.com/in/sdabhishekdash/",
        "https://twitter.com/abhishekdash69"
      ]
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
      "@id": "https://sdad.pro/experience/#maelisresearch",
      "name": "Maelis Research",
      "description": "Language AI infrastructure for Odia and low-resource Indian languages. Building tokenizer optimization, LLMs, speech recognition, and translation APIs.",
      "url": "https://maelis.sdad.pro",
      "foundingDate": "2026",
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
      "@type": "OrganizationRole",
      "@id": "https://sdad.pro/experience/#maelisresearch-role",
      "roleName": "Founder",
      "description": "Building language AI infrastructure for 38 million Odia speakers. Developing Odia-optimized tokenizer, Lekhani model family, Shruti speech recognition, and Anuvada translation.",
      "startDate": "2026-08",
      "organization": { "@id": "https://sdad.pro/experience/#maelisresearch" },
      "employee": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "Organization",
      "@id": "https://sdad.pro/experience/#offsage",
      "name": "Offsage",
      "description": "Smart engineering for ambitious brands. Digital and technical agency specializing in business automation, SaaS development, and web engineering for startups and scaling teams.",
      "url": "https://offsage.com",
      "sameAs": [
        "https://offsage.com"
      ]
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://sdad.pro/experience/#offsage-role",
      "roleName": "Co-Founder",
      "description": "Co-founded a technical agency eliminating operational friction for startups and scaling teams — from first automation to full-scale SaaS.",
      "startDate": "2025-09",
      "organization": { "@id": "https://sdad.pro/experience/#offsage" },
      "employee": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "Organization",
      "@id": "https://sdad.pro/experience/#techmahindra",
      "name": "Tech Mahindra",
      "url": "https://www.techmahindra.com"
    },
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
      <div className="sr-only" aria-hidden="true">
        <p>Sai Dutta Abhishek Dash is building across AI infrastructure, language technology, security systems, and product engineering. His timeline includes founder-led ventures in deep-tech AI and language infrastructure, co-founding a technical agency, enterprise experience at Tech Mahindra, and multiple ML and software engineering internships.</p>
        <p>Last updated: August 2026</p>
      </div>
    </>
  )
}
