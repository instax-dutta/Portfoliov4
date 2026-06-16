import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ContactClient = dynamic(() => import("./ContactClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Connect & Collaborate | Sai Dutta Abhishek Dash",
  description: "Get in touch with Sai Dutta Abhishek Dash for consulting, projects, or collaborations in AI infrastructure, security engineering, and developer tooling.",
  keywords: [
    "Contact Developer",
    "Consulting Inquiries",
    "Open Source Collaboration",
    "Bhubaneswar Software Engineer",
    "Hire Systems Engineer",
    "AI Infrastructure Consultation",
    "Security Auditing Inquiries"
  ],
  alternates: {
    canonical: "https://sdad.pro/contact",
  },
  openGraph: {
    title: "Connect & Collaborate | Sai Dutta Abhishek Dash",
    description: "Get in touch with Sai Dutta Abhishek Dash for consulting, projects, or collaborations in AI infrastructure, security engineering, and developer tooling.",
    url: "https://sdad.pro/contact",
    siteName: "Sai Dutta Abhishek Dash Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Sai Dutta Abhishek Dash",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect & Collaborate | Sai Dutta Abhishek Dash",
    description: "Connect with Sai Dutta Abhishek Dash for projects in AI infrastructure and security engineering.",
    images: ["/og-image.png"],
  }
}

const contactStructuredData = {
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
      "@type": "ContactPage",
      "@id": "https://sdad.pro/contact/#webpage",
      "url": "https://sdad.pro/contact",
      "name": "Contact Sai Dutta Abhishek Dash",
      "description": "Contact page for consulting, collaborations, and engineering inquiries across AI infrastructure, security, and developer platforms.",
      "mainEntity": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/contact/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://sdad.pro/contact" }
      ]
    }
  ]
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }} />
      <ContactClient />
      <div className="sr-only" aria-hidden="true">
        <p>Get in touch with Sai Dutta Abhishek Dash for technical collaborations, consulting, and project opportunities in AI infrastructure, security engineering, developer tooling, and self-hosted platforms. Typical response time is within 24 hours. Contact via email at contact@sdad.pro or the submit form.</p>
        <p>Last updated: June 2026</p>
      </div>
    </>
  )
}
