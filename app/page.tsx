import type { Metadata } from "next"
import dynamic from "next/dynamic"
const HomeClient = dynamic(() => import("./components/HomeClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer",
  description: "Official portfolio of Sai Dutta Abhishek Dash, AI Infrastructure & Security Engineer. Expert in LLM gateways, code security agents, distributed systems, and self-hosted developer tools. Built 20 production platforms including Epoxy, Vulscany, and MarkItDownJS.",
  keywords: [
    "AI Infrastructure Engineer",
    "Security Engineering",
    "Developer Tooling",
    "Open Source Software",
    "Self-Hosted Applications",
    "Distributed Systems",
    "Full Stack Engineering",
    "Software Architecture",
    "Sai Dutta Abhishek Dash",
    "sdad.pro",
    "Bhubaneswar Tech Expert",
    "India Software Engineer",
    "LLM proxy",
    "P2P encrypted chat",
    "zero-knowledge",
    "privacy-first"
  ],
  alternates: {
    canonical: "https://sdad.pro/",
  },
  openGraph: {
    title: "Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer",
    description: "Official portfolio of Sai Dutta Abhishek Dash, AI Infrastructure & Security Engineer. Builder of LLM gateways, code security agents, and self-hosted platforms.",
    url: "https://sdad.pro/",
    siteName: "Sai Dutta Abhishek Dash Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer",
    description: "Official portfolio of Sai Dutta Abhishek Dash. Builder of LLM gateways, code security agents, and self-hosted platforms.",
    images: ["/og-image.png"],
  }
}

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
      ],
      "email": "contact@sdad.pro",
      "jobTitle": "AI Infrastructure & Security Engineer",
      "knowsAbout": [
        "AI Infrastructure",
        "Security Engineering",
        "Developer Tooling",
        "Self-Hosted Platforms",
        "Open Source Software",
        "Distributed Systems",
        "Cloud Architecture",
        "Privacy Engineering"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sdad.pro/#website",
      "url": "https://sdad.pro",
      "name": "Sai Dutta Abhishek Dash - AI Infrastructure & Security Engineer Portfolio",
      "publisher": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://sdad.pro/#profile",
      "url": "https://sdad.pro",
      "name": "Sai Dutta Abhishek Dash Professional Profile Page",
      "mainEntity": { "@id": "https://sdad.pro/#person" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }} />
      <HomeClient />
      <div className="sr-only" aria-hidden="true">
        <p>Sai Dutta Abhishek Dash is an AI Infrastructure & Security Engineer based in Bhubaneswar, India. He builds high-performance, privacy-focused, and self-hosted open-source software, including LLM gateways, code security agents, distributed systems, and developer tooling. With 20 production systems deployed worldwide, his technical capabilities cover Python, Next.js, React, Rust, AWS, Docker, Kubernetes, and cryptographic security.</p>
        <p>Stats: 20 production systems | 5 professional roles | AWS Certified | Available for consulting and collaboration | Last updated: June 2026</p>
      </div>
    </>
  )
}
