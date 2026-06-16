import type { Metadata } from "next"
import dynamic from "next/dynamic"
const SkillsClient = dynamic(() => import("./SkillsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
  title: "Engineering Toolkit & Tech Stack | Sai Dutta Abhishek Dash",
  description: "Complete tech stack of Sai Dutta Abhishek Dash. Expertise in Python, React, Next.js, Rust, AWS (Certified), TensorFlow, Docker, and cryptography.",
  keywords: [
    "Tech Stack 2026",
    "Programming Languages",
    "AI frameworks",
    "Infrastructure tools",
    "Cryptography skills",
    "Linux administration",
    "Developer capabilities",
    "AI Infrastructure",
    "Security Engineering"
  ],
  alternates: {
    canonical: "https://sdad.pro/skills",
  },
  openGraph: {
    title: "Engineering Toolkit & Tech Stack | Sai Dutta Abhishek Dash",
    description: "Complete tech stack of Sai Dutta Abhishek Dash. Spanning languages, AI & data, infrastructure, and security engineering.",
    url: "https://sdad.pro/skills",
    siteName: "Sai Dutta Abhishek Dash Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skills Toolkit - Sai Dutta Abhishek Dash",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Toolkit & Tech Stack | Sai Dutta Abhishek Dash",
    description: "Complete tech stack of Sai Dutta Abhishek Dash. Spanning languages, AI & data, infrastructure, and security engineering.",
    images: ["/og-image.png"],
  }
}

const skillsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": "https://sdad.pro/skills/#article",
      "headline": "Technical Skills of Sai Dutta Abhishek Dash",
      "description": "Comprehensive engineering stack including Python, TypeScript, React, Next.js, AWS, TensorFlow, and security engineering tools.",
      "author": {
        "@type": "Person",
        "@id": "https://sdad.pro/#person",
        "name": "Sai Dutta Abhishek Dash",
        "url": "https://sdad.pro",
        "sameAs": [
          "https://github.com/instax-dutta",
          "https://www.linkedin.com/in/sdabhishekdash/",
          "https://twitter.com/abhishekdash69"
        ]
      },
      "about": [
        { "@type": "Thing", "name": "Python" },
        { "@type": "Thing", "name": "TypeScript" },
        { "@type": "Thing", "name": "React" },
        { "@type": "Thing", "name": "Next.js" },
        { "@type": "Thing", "name": "AWS" },
        { "@type": "Thing", "name": "Docker" },
        { "@type": "Thing", "name": "Kubernetes" },
        { "@type": "Thing", "name": "Cryptography" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sdad.pro/skills/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Skills", item: "https://sdad.pro/skills" }
      ]
    }
  ]
}

export default function SkillsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsStructuredData) }} />
      <SkillsClient />
      <div className="sr-only" aria-hidden="true">
        <p>Sai Dutta Abhishek Dash's technical toolkit includes Languages & Frameworks (Python, TypeScript, JavaScript, React, Next.js, Node.js, PostgreSQL, MongoDB, Java, C++, Rust, SQL), AI & Data (PyTorch, TensorFlow, scikit-learn, Ollama, Hugging Face, LangChain, OpenCV, NumPy, Pandas, Mistral AI, Gemini API), Infrastructure (Docker, Linux, AWS, GitHub Actions, Nginx, Bash, Kubernetes, Vercel, Netlify), and Specializations (AI Infrastructure, Security Engineering, Developer Tooling, Self-Hosted Platforms, Open Source, Distributed Systems, Cloud Architecture, Privacy Engineering).</p>
        <p>Last updated: June 2026</p>
      </div>
    </>
  )
}
