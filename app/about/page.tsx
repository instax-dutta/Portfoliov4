import type { Metadata } from "next"
import dynamic from "next/dynamic"
const AboutClient = dynamic(() => import("./AboutClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "About Me | Sai Dutta Abhishek Dash - AI Infrastructure & Systems",
  description: "Learn about the engineering philosophy of Sai Dutta Abhishek Dash. Specializing in high-performance AI infrastructure, developer platforms, and privacy-focused systems.",
  keywords: [
    "Engineering Profile",
    "AI Infrastructure",
    "Security Engineering",
    "Developer Tooling",
    "Privacy Engineering",
    "Distributed Systems",
    "Cloud Architecture",
    "Self-Hosted Platforms",
    "Sai Dutta Abhishek Dash Background",
    "Open Source Developer"
  ],
  alternates: {
    canonical: "https://sdad.pro/about",
  },
  openGraph: {
    title: "About Me | Sai Dutta Abhishek Dash - AI Infrastructure & Systems",
    description: "Learn about the engineering philosophy of Sai Dutta Abhishek Dash. Specializing in high-performance AI infrastructure, developer platforms, and privacy-focused systems.",
    url: "https://sdad.pro/about",
    siteName: "Sai Dutta Abhishek Dash Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Sai Dutta Abhishek Dash - AI Infrastructure & Systems",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me | Sai Dutta Abhishek Dash - AI Infrastructure & Systems",
    description: "Engineering philosophy of Sai Dutta Abhishek Dash, specializing in AI infrastructure and developer platforms.",
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
      "name": "About Sai Dutta Abhishek Dash",
      "description": "Engineering profile and background of Sai Dutta Abhishek Dash, AI Infrastructure & Security Engineer.",
      "mainEntity": {
        "@type": "Person",
        "@id": "https://sdad.pro/#person",
        "name": "Sai Dutta Abhishek Dash",
        "url": "https://sdad.pro",
        "image": "https://sdad.pro/og-image.png",
        "description": "AI Infrastructure, Security Engineering & Developer Tooling Specialist.",
        "sameAs": [
          "https://github.com/instax-dutta",
          "https://www.linkedin.com/in/sdabhishekdash/",
          "https://twitter.com/abhishekdash69"
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
      <div className="sr-only" aria-hidden="true">
        <p>Sai Dutta Abhishek Dash is an AI Infrastructure & Security Engineer. He builds self-hosted developer platforms, LLM gateways, and privacy-focused systems. His toolkit spans Python, React, Next.js, Rust, AWS, and Docker. Learn about his focus areas, including AI infrastructure, security engineering, and open-source tooling.</p>
        <p>Last updated: June 2026</p>
      </div>
    </>
  )
}
