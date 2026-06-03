import type { Metadata } from "next"
import dynamic from "next/dynamic"
const HomeClient = dynamic(() => import("./components/HomeClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Sai Dutta Abhishek Dash | Full Stack Engineer & AI/ML Specialist",
  description: "Official portfolio of Sai Dutta Abhishek Dash. Expert in Security-first Full Stack Development, AI/ML Engineering, and Cloud Architecture. Explore 25+ production-ready projects including Tooner and Binify. Specialized in Python, React, Next.js, and AWS.",
  keywords: [
    "Sai Dutta Abhishek Dash",
    "sdad.pro",
    "Full Stack Engineer Bhubaneswar",
    "AI/ML Engineer India",
    "Security Researcher",
    "Python Developer",
    "React Expert",
    "Next.js Specialist",
    "AWS Certified Developer",
    "Freelance Software Engineer",
    "Hire Full Stack Developer",
    "Bhubaneswar Tech Expert"
  ],
  alternates: {
    canonical: "https://sdad.pro/",
  }
}

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <HomeClient />
      <section className="border-t border-bmw-hairline py-5 px-6 bg-bmw-surface-soft">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-bmw-body text-xs leading-relaxed max-w-4xl">
            Sai Dutta Abhishek Dash is a Full Stack Engineer &amp; AI Specialist based in Bhubaneswar, India. 
            He builds production-ready applications at the intersection of full-stack engineering, AI/ML, and security. 
            With 20+ production applications and 12 professional experiences across 10+ companies, he specializes in 
            Python, React, Next.js, Node.js, AWS, TensorFlow, and zero-knowledge encryption. AWS Certified and 
            available for remote freelance work worldwide.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-bmw-muted">
            <span className="text-[11px]">20+ production applications</span>
            <span className="text-[11px]">12 professional experiences</span>
            <span className="text-[11px]">AWS Certified Cloud Practitioner</span>
            <span className="text-[11px]">Available worldwide</span>
            <span className="text-[11px]">Last updated: June 2026</span>
          </div>
        </div>
      </section>
    </>
  )
}
