import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ExperienceClient = dynamic(() => import("./ExperienceClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Professional Journey & Experience | Sai Dutta Abhishek Dash",
  description: "Explore the career history of Sai Dutta Abhishek Dash. Spanning startup leadership at RacerNodes, enterprise engineering at Tech Mahindra, and open-source developer tooling.",
  keywords: [
    "Experience Timeline",
    "Tech Mahindra Associate",
    "RacerNodes founder",
    "Software Engineering career",
    "AI systems history",
    "Systems Engineer",
    "AI Infrastructure",
    "Security Engineering",
    "Developer Tooling"
  ],
  alternates: {
    canonical: "https://sdad.pro/experience",
  },
  openGraph: {
    title: "Professional Journey & Experience | Sai Dutta Abhishek Dash",
    description: "Explore the career history of Sai Dutta Abhishek Dash. Spanning startup leadership, enterprise experience, and open-source development.",
    url: "https://sdad.pro/experience",
    siteName: "Sai Dutta Abhishek Dash Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Experience of Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Journey & Experience | Sai Dutta Abhishek Dash",
    description: "Career journey of Sai Dutta Abhishek Dash, from Tech Mahindra to founding RacerNodes.",
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
      "@id": "https://sdad.pro/experience/#techmahindra",
      "name": "Tech Mahindra",
      "url": "https://www.techmahindra.com"
    },
    {
      "@type": "Organization",
      "@id": "https://sdad.pro/experience/#racernodes",
      "name": "RacerNodes",
      "description": "Game server hosting startup."
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
        <p>Sai Dutta Abhishek Dash has professional experience spanning freelance full-stack development, an Associate role at Tech Mahindra, multiple machine learning and software engineering internships, and entrepreneurship as CEO & Co-Founder of RacerNodes. His career highlights focus on AI systems, security engineering, and developer infrastructure.</p>
        <p>Last updated: June 2026</p>
      </div>
    </>
  )
}
