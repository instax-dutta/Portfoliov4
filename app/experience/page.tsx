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
      <section className="border-t border-bmw-hairline py-4 px-6 bg-bmw-surface-soft">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-bmw-body text-xs leading-relaxed max-w-4xl">
            Sai Dutta Abhishek Dash has 12 professional experiences across 10+ companies spanning 3+ years. 
            His career includes freelance full-stack development (Sep 2025 – Present), an Associate role at Tech Mahindra, 
            8 machine learning engineering internships at companies including CodeAlpha, CognoRise InfoTech, and Encryptix, 
            and founding RacerNodes as CEO &amp; Co-Founder (May 2022 – Jul 2023). He achieved rapid promotion from 
            Associate Trainee to Associate at Tech Mahindra.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-bmw-muted">
            <span className="text-[11px]">12 professional experiences</span>
            <span className="text-[11px]">10+ companies</span>
            <span className="text-[11px]">3+ years</span>
            <span className="text-[11px]">Rapid promotion at Tech Mahindra</span>
            <span className="text-[11px]">Founded RacerNodes</span>
            <span className="text-[11px]">Last updated: June 2026</span>
          </div>
        </div>
      </section>
    </>
  )
}
