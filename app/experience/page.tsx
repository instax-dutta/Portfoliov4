import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ExperienceClient = dynamic(() => import("./ExperienceClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Experience & Professional Journey | Sai Dutta Abhishek Dash",
  description: "Explore the professional history of Sai Dutta Abhishek Dash. From building Aeglyn/VullScanny to full-stack engineering at scale, see the milestones of a dedicated AI & Security engineer.",
  keywords: ["Software Engineering Experience", "AI/ML Work History", "Freelance Full Stack Milestone", "Professional Developer Resume"],
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
    { "@type": "ListItem", position: 2, name: "Experience", item: "https://sdad.pro/experience" },
  ],
}

export default function ExperiencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <ExperienceClient />
    </>
  )
}
