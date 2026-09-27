import type { Metadata } from "next"
import dynamic from "next/dynamic"
import AnswerBlocks from "../components/AnswerBlocks"
import { projects } from "../lib/projects"
import { SITE } from "../lib/site-facts"
const ProjectsClient = dynamic(() => import("./ProjectsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Shipped Products | Sai Dutta Abhishek Dash — Founder & Engineer",
  description: "20+ production systems shipped by Sai Dutta Abhishek Dash — LLM inference engines, on-device ML models, code security agents, language benchmarks, privacy-first platforms, and developer tooling. All open-source.",
  keywords: [
    "Shipped Products",
    "Production Systems",
    "AI Infrastructure",
    "LLM Inference",
    "On-Device ML",
    "Code Security",
    "Language AI",
    "Privacy Engineering",
    "Open Source Software",
    "AgentLoop",
    "MarkItDownJS",
    "Vulscany",
    "PhishScout",
    "ornith-flight"
  ],
  alternates: {
    canonical: "https://sdad.pro/projects",
  },
  openGraph: {
    title: "Shipped Products — Sai Dutta Abhishek Dash",
    description: "20+ production systems — LLM inference engines, on-device ML, code security agents, language benchmarks, and developer tooling. All open-source.",
    url: "https://sdad.pro/projects",
    siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Dutta Abhishek Dash — Shipped Products",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipped Products | Sai Dutta Abhishek Dash — Founder & Engineer",
    description: "20+ production systems — LLM inference, on-device ML, code security, language AI, and developer tooling.",
    images: ["/og-image.png"],
  }
}

/** Projects deployed as running web applications, as opposed to published source. */
const liveApps = projects.filter(
  (project) => project.link && !project.link.startsWith("https://huggingface.co/")
)

const projectsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://sdad.pro/projects/#webpage",
      "url": "https://sdad.pro/projects",
      "name": "Shipped Products \u2014 Sai Dutta Abhishek Dash",
      "description": "Production systems shipped by Sai Dutta Abhishek Dash spanning AI infrastructure, language technology, security, and AI agent skills.",
      "inLanguage": "en",
      "datePublished": SITE.datePublished,
      "dateModified": SITE.dateModified,
      "author": { "@id": "https://sdad.pro/#person" },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Production systems shipped by Sai Dutta Abhishek Dash",
        "numberOfItems": projects.length,
        "itemListElement": projects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": ["SoftwareSourceCode", "CreativeWork"],
            "@id": `${SITE.url}/projects/${project.slug}#project`,
            "name": project.title,
            ...(project.language ? { programmingLanguage: project.language } : {}),
            "description": project.description,
            "url": `${SITE.url}/projects/${project.slug}`,
            ...(project.github ? { codeRepository: project.github } : {}),
            ...(project.link ? { sameAs: project.link } : {}),
            "keywords": project.technologies.join(", "),
            "genre": project.group,
            "author": { "@id": "https://sdad.pro/#person" }
          }
        }))
      }
    },
    ...liveApps.map((app) => ({
      "@type": "SoftwareApplication",
      "@id": `${SITE.url}/projects/${app.slug}#app`,
      "name": app.title,
      "url": app.link,
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "description": app.description,
      "author": { "@id": "https://sdad.pro/#person" }
    })),
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/projects/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sdad.pro" },
        { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://sdad.pro/projects" }
      ]
    }
  ]
}

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }} />
      <ProjectsClient />
      <AnswerBlocks page="projects" />
    </>
  )
}
