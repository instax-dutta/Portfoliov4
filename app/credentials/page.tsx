import type { Metadata } from "next"
import dynamic from "next/dynamic"
const CredentialsClient = dynamic(() => import("./CredentialsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Academic Credentials & Certifications | Sai Dutta Abhishek Dash",
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
    title: "Academic Credentials & Certifications | Sai Dutta Abhishek Dash",
    description: "Verified educational background and industry certifications from AWS, GIET University, and leading tech institutions.",
    url: "https://sdad.pro/credentials",
    siteName: "Sai Dutta Abhishek Dash Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Credentials - Sai Dutta Abhishek Dash",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academic Credentials & Certifications | Sai Dutta Abhishek Dash",
    description: "Verified educational background and industry certifications from AWS, GIET University, and leading tech institutions.",
    images: ["/og-image.png"],
  }
}

const credentialsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sdad.pro/#person",
      "name": "Sai Dutta Abhishek Dash",
      "url": "https://sdad.pro",
      "sameAs": [
        "https://github.com/instax-dutta",
        "https://www.linkedin.com/in/sdabhishekdash/",
        "https://twitter.com/abhishekdash69"
      ]
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
      <div className="sr-only" aria-hidden="true">
        <p>Sai Dutta Abhishek Dash holds a Bachelor's Degree in Computer Science from GIET University Gunupur (2025). He completed Intermediate at Delhi Public School Dhenkanal (2021) and High School at Maharshi Vidya Mandir Rayagada (2019). Professional development includes AWS Bedrock, Amazon Q Developer, and Python for Data Science and Machine Learning.</p>
        <p>Last updated: June 2026</p>
      </div>
    </>
  )
}
