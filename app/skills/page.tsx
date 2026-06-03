import type { Metadata } from "next"
import dynamic from "next/dynamic"
const SkillsClient = dynamic(() => import("./SkillsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "Tech Stack & Specialized Skills | Sai Dutta Abhishek Dash",
    description: "Deep dive into the technical expertise of Sai Dutta Abhishek Dash. Mastering Python, Next.js 15, React 19, AWS (Certified), TensorFlow, and high-performance security auditing tools.",
    keywords: ["Tech Stack 2024", "Modern Web Development Skills", "AI/ML Engineering Tools", "Cybersecurity Expertise", "AWS Certified Practitioner"],
    alternates: {
        canonical: "/skills",
    },
}

const skillsStructuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Technical Skills of Sai Dutta Abhishek Dash",
    description: "Comprehensive tech stack including Python, TypeScript, React, Next.js, AWS, TensorFlow, and security engineering tools.",
    author: { "@id": "https://sdad.pro/#person" },
    about: [
        { "@type": "Thing", name: "Python" },
        { "@type": "Thing", name: "TypeScript" },
        { "@type": "Thing", name: "React" },
        { "@type": "Thing", name: "Next.js" },
        { "@type": "Thing", name: "AWS" },
        { "@type": "Thing", name: "TensorFlow" },
    ]
}

const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Skills", item: "https://sdad.pro/skills" },
    ],
}

export default function SkillsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsStructuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <SkillsClient />
            <div className="sr-only" aria-hidden="true">
                <p>Sai Dutta Abhishek Dash's technical expertise spans four domains: Programming (Python, TypeScript, JavaScript, React, Next.js, Node.js, Rust, Go, Java, C++), AI/ML (TensorFlow, PyTorch, scikit-learn, LangChain, Hugging Face, Ollama, Google Vertex AI, Mistral AI), DevOps & Cloud (AWS Certified, Docker, Kubernetes, Terraform, Ansible, GitHub Actions, CI/CD), and Soft Skills (Problem Solving, Leadership, Communication, Critical Thinking, Project Management, Agile).</p>
                <p>Stats: 15+ programming languages & frameworks | 15+ AI/ML tools & libraries | 10+ DevOps & cloud platforms | AWS Certified Cloud Practitioner | Last updated: June 2026</p>
            </div>
        </>
    )
}
