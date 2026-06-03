import type { Metadata } from "next"
import dynamic from "next/dynamic"
const ContactClient = dynamic(() => import("./ContactClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "Hire Me & Collaboration | Sai Dutta Abhishek Dash",
    description: "Ready to scale your next project? Contact Sai Dutta Abhishek Dash for freelance full-stack development, AI/ML consulting, or security auditing. Based in Bhubaneswar, serving worldwide.",
    keywords: ["Hire Full Stack Developer", "AI Consultant", "Freelance Software Engineer Bhubaneswar", "Secure Web Development Services"],
    alternates: {
        canonical: "/contact",
    },
}

const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sai Dutta Abhishek Dash",
    description: "Contact page for freelance development and AI/ML consulting services.",
    url: "https://sdad.pro/contact",
    mainEntity: { "@id": "https://sdad.pro/#person" }
}

const contactFaqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How can I hire Sai Dutta Abhishek Dash?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the contact form on this page or email contact@sdad.pro. He is available for remote freelance full-stack development, AI/ML implementation, security auditing, and custom web application projects."
            }
        },
        {
            "@type": "Question",
            "name": "Where is Sai Dutta Abhishek Dash based?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "He is based in Bhubaneswar, India and is available for remote work worldwide."
            }
        },
        {
            "@type": "Question",
            "name": "What is the response time for inquiries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Response time is within 24 hours for all inquiries."
            }
        },
        {
            "@type": "Question",
            "name": "What types of projects does Sai Dutta Abhishek Dash take on?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "He takes on full-stack web development, AI/ML integration, security auditing, custom SaaS development, API development, cloud migration, performance optimization, and automation systems."
            }
        }
    ]
}

const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://sdad.pro/contact" },
    ],
}

export default function ContactPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageStructuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqStructuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <ContactClient />
            <section className="border-t border-bmw-hairline py-4 px-6 bg-bmw-surface-soft">
                <div className="max-w-[1440px] mx-auto">
                    <p className="text-bmw-muted text-[11px]">
                        Sai Dutta Abhishek Dash is available for remote freelance work worldwide. 
                        Contact via email at contact@sdad.pro or use the contact form. Typical response time is within 24 hours. 
                        Services include full-stack development, AI/ML implementation, security auditing, and custom web applications.
                    </p>
                    <p className="text-bmw-muted text-[11px] mt-1">Last updated: June 2026</p>
                </div>
            </section>
        </>
    )
}
