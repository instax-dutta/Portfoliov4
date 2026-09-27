import type { Metadata } from "next"
import dynamic from "next/dynamic"
import AnswerBlocks from "../components/AnswerBlocks"
import { SITE } from "../lib/site-facts"
const CredentialsClient = dynamic(() => import("./CredentialsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Credentials — Sai Dutta Abhishek Dash",
  description: "Verified educational background and industry certifications from AWS, GIET University, and leading tech institutions. Focus on AI, security, and cloud systems.",
  keywords: [
    "AWS Certified Cloud Practitioner",
    "Computer Science degree",
    "Academic background",
    "Professional certifications",
    "Continuing education",
    "GIET University Gunupur",
    "AWS Certifications",
    "Developer Credentials"
  ],
  alternates: {
    canonical: "https://sdad.pro/credentials",
  },
  openGraph: {
    title: "Credentials — Sai Dutta Abhishek Dash",
    description: "AWS Certified Cloud Practitioner, Bachelor's in Computer Science from GIET University. Certifications in Bedrock, Amazon Q, and ML.",
    url: "https://sdad.pro/credentials",
    siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash — Credentials",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credentials — Sai Dutta Abhishek Dash",
    description: "Verified educational background and industry certifications from AWS, GIET University, and leading tech institutions.",
    images: ["/og-image.png"],
  }
}

const credentialsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://sdad.pro/credentials/#webpage",
      "url": "https://sdad.pro/credentials",
      "name": "Education & Credentials \u2014 Sai Dutta Abhishek Dash",
      "inLanguage": "en",
      "datePublished": SITE.datePublished,
      "dateModified": SITE.dateModified,
      "isPartOf": { "@id": "https://sdad.pro/#website" },
      "mainEntity": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "@id": "https://sdad.pro/credentials/#aws-ccp",
      "name": "AWS Certified Cloud Practitioner",
      "credentialCategory": "Certification",
      "about": { "@id": "https://sdad.pro/#person" },
      "recognizedBy": {
        "@type": "Organization",
        "name": "Amazon Web Services (AWS)",
        "url": "https://aws.amazon.com"
      }
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
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/credentials/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Credentials", item: "https://sdad.pro/credentials" }
      ]
    }
  ]
}

export default function CredentialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialsStructuredData) }} />
      <CredentialsClient />
      <AnswerBlocks page="credentials" />
    </>
  )
}
