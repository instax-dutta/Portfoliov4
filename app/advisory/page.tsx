import type { Metadata } from "next"
import dynamic from "next/dynamic"
import AnswerBlocks, { stripLinkMarkup } from "../components/AnswerBlocks"
import { SITE, answerSections } from "../lib/site-facts"
import { achievements, domains, engagementModels, serviceLines } from "../lib/advisory"

const AdvisoryClient = dynamic(() => import("./AdvisoryClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Advisory & Engineering Services — Sai Dutta Abhishek Dash",
  description:
    "Five advisory and engineering service lines from Sai Dutta Abhishek Dash: AI infrastructure consulting, security engineering, language technology, full-stack product engineering, and technical advisory. Four engagement models, from monthly retainers to 1-5 day workshops.",
  keywords: [
    "AI Infrastructure Consulting",
    "Security Engineering Advisory",
    "Language AI Consulting",
    "Technical Due Diligence",
    "Fractional CTO",
    "LLM Integration Consulting",
    "Edge Inference Consulting",
    "AI Advisory",
  ],
  alternates: {
    canonical: "https://sdad.pro/advisory",
  },
  openGraph: {
    title: "Advisory & Engineering Services — Sai Dutta Abhishek Dash",
    description:
      "5 service lines and 4 engagement models, grounded in 22 shipped open-source systems and 85+ public repositories. AI infrastructure, security, language technology, product engineering, and technical advisory.",
    url: "https://sdad.pro/advisory",
    siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash — Advisory & Engineering Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advisory & Engineering Services — Sai Dutta Abhishek Dash",
    description:
      "5 service lines, 4 engagement models. AI infrastructure, security, language technology, and technical advisory.",
    images: ["/og-image.png"],
  },
}

const advisoryStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://sdad.pro/advisory/#service",
      "name": "AI Infrastructure, Security, and Language Technology Advisory",
      "alternateName": "Advisory & Engineering Services",
      "url": "https://sdad.pro/advisory",
      "description":
        "Advisory and engineering services covering LLM integration, inference optimization, on-device machine learning, AI agent architecture, code security scanning, privacy-first architecture, forensic tooling, low-resource language AI, and full-stack product engineering.",
      "serviceType": serviceLines.map((s) => s.title),
      "provider": { "@id": "https://sdad.pro/#person" },
      "areaServed": "Worldwide",
      "availableLanguage": ["en", "Odia"],
      "audience": {
        "@type": "BusinessAudience",
        "name": "Startups, enterprises, investors, and NGOs working on AI, security, and low-resource languages",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Advisory and engineering service lines",
        "itemListElement": [
          ...serviceLines.map((s) => ({
            "@type": "Offer",
            "position": serviceLines.indexOf(s) + 1,
            "itemOffered": {
              "@type": "Service",
              "name": s.title,
              "description": s.summary,
              "serviceType": s.title,
              "audience": { "@type": "Audience", "audienceType": s.bestFor },
              "provider": { "@id": "https://sdad.pro/#person" },
            },
          })),
          {
            "@type": "Offer",
            "position": serviceLines.length + 1,
            "itemOffered": {
              "@type": "Service",
              "name": "Advisory engagement models",
              "description":
                "Four engagement models: a monthly advisory retainer for ongoing technical guidance, project engagements of 2 to 12 weeks at full-time capacity, technical audits of 1 to 2 weeks delivered as a written report, and live workshops of 1 to 5 days.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Engagement models",
                "itemListElement": engagementModels.map((m, i) => ({
                  "@type": "Offer",
                  "position": i + 1,
                  "itemOffered": {
                    "@type": "Service",
                    "name": m.model,
                    "description": `${m.model} — ${m.duration}, ${m.format}. ${m.bestFor}.`,
                  },
                })),
              },
            },
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://sdad.pro/advisory/#achievements",
      "name": "Notable technical achievements by Sai Dutta Abhishek Dash",
      "itemListElement": achievements.map((a, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": { "@type": "Thing", "name": a, "subjectOf": { "@id": "https://sdad.pro/#person" } },
      })),
    },
    {
      "@type": "ItemList",
      "@id": "https://sdad.pro/advisory/#domains",
      "name": "Industries and domains covered by Sai Dutta Abhishek Dash",
      "itemListElement": domains.map((d, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": { "@type": "Thing", "name": d.domain, "description": d.experience },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://sdad.pro/advisory/#faq",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://sdad.pro/advisory/#webpage" },
      "mainEntity": answerSections.advisory.map((section) => ({
        "@type": "Question",
        "name": section.question,
        "acceptedAnswer": { "@type": "Answer", "text": stripLinkMarkup(section.answer) },
      })),
    },
    {
      "@type": "WebPage",
      "@id": "https://sdad.pro/advisory/#webpage",
      "url": "https://sdad.pro/advisory",
      "name": "Advisory & Engineering Services — Sai Dutta Abhishek Dash",
      "inLanguage": "en",
      "datePublished": SITE.datePublished,
      "dateModified": SITE.dateModified,
      "isPartOf": { "@id": "https://sdad.pro/#website" },
      "about": { "@id": "https://sdad.pro/advisory/#service" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/advisory/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sdad.pro" },
        { "@type": "ListItem", "position": 2, "name": "Advisory", "item": "https://sdad.pro/advisory" },
      ],
    },
  ],
}

export default function AdvisoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(advisoryStructuredData) }}
      />
      <AdvisoryClient />
      <AnswerBlocks page="advisory" />
    </>
  )
}
