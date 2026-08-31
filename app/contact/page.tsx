import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ContactClient = dynamic(() => import("./ContactClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Contact — Sai Dutta Abhishek Dash",
  description: "Get in touch with Sai Dutta Abhishek Dash for investment conversations, strategic partnerships, technical collaborations, and advisory roles across AI infrastructure, language technology, and security.",
  keywords: [
    "Contact Founder",
    "Investment Inquiries",
    "Strategic Partnership",
    "Technical Collaboration",
    "AI Infrastructure Advisory",
    "Language AI Partnerships",
    "Security Engineering Consulting"
  ],
  alternates: {
    canonical: "https://sdad.pro/contact",
  },
  openGraph: {
    title: "Contact — Sai Dutta Abhishek Dash",
    description: "Investment conversations, strategic partnerships, technical collaborations, and advisory roles. Active across deep-tech AI ventures.",
    url: "https://sdad.pro/contact",
    siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash — Contact",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Sai Dutta Abhishek Dash",
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
      "description": "Contact page for investment conversations, strategic partnerships, technical collaborations, and advisory roles.",
      "dateModified": "2026-08-31",
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
        <p>Get in touch with Sai Dutta Abhishek Dash for investment conversations, strategic partnerships, technical collaborations, and advisory roles. Based in Odisha, India. Active across multiple deep-tech AI ventures. Contact via email at contact@sdad.pro or the submit form.</p>
        <p>Last updated: August 2026</p>
      </div>
    </>
  )
}
