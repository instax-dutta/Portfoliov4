const projectsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects Portfolio - Freelance Full Stack Developer",
  description: "Portfolio showcasing 25+ innovative web development and AI/ML projects built with React, Next.js, Python, and modern technologies",
  url: "https://sdad.pro/projects",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 25,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "AI Tarot Card Reader",
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          description: "Advanced AI-powered tarot card reading application that provides personalized insights using machine learning and natural language processing",
          url: "https://ait.numbervibes.in",
          programmingLanguage: ["Next.js", "React", "TypeScript", "AI", "TensorFlow"],
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "AI Powered Vedic MatchMaker",
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          description: "Intelligent matchmaking platform leveraging AI and Vedic astrology principles",
          url: "https://aim.numbervibes.in",
          programmingLanguage: ["Next.js", "React", "AI", "TensorFlow", "Mistral AI"],
        },
      },
    ],
  },
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sdad.pro",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://sdad.pro/projects",
    },
  ],
}

import DOMPurify from "isomorphic-dompurify"

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(projectsStructuredData)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(breadcrumbStructuredData)) }}
      />
      {children}
    </>
  )
}
