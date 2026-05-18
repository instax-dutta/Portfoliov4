const experienceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Sai Dutta Abhishek Dash",
    jobTitle: "Freelance Full Stack Developer & Machine Learning Engineer",
    url: "https://sdad.pro/experience",
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Machine Learning",
      "Web Development",
      "Software Development",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Freelance Full Stack Developer",
        occupationLocation: {
          "@type": "City",
          name: "Remote",
        },
        datePosted: "2025-09-01",
        validThrough: "2026-12-31",
      },
    ],
  },
}

import DOMPurify from "isomorphic-dompurify"

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(JSON.stringify(experienceStructuredData)) }}
      />
      {children}
    </>
  )
}
