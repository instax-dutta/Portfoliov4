import type { Metadata } from "next"
import dynamic from "next/dynamic"
const CredentialsClient = dynamic(() => import("./CredentialsClient"), {
  loading: () => null,
})

export const metadata: Metadata = {
    title: "Credentials & Certifications | Sai Dutta Abhishek Dash",
    description: "Verified academic background and professional certifications from AWS, GIET University, and leading tech platforms. Proof of expertise in Cloud Architecture, AI, and Engineering.",
    keywords: ["Verified Credentials", "AWS Certified Cloud Practitioner", "GIET University Alumni", "Computer Science Degree", "Software Engineering Certifications"],
    alternates: {
        canonical: "/credentials",
    },
}

const credentialsStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": "Credentials of Sai Dutta Abhishek Dash",
    "credentialCategory": "Certification",
    "author": { "@id": "https://sdad.pro/#person" },
    "about": [
        { "@type": "EducationalOccupationalCredential", name: "AWS Certified Cloud Practitioner" },
        { "@type": "EducationalOccupationalCredential", name: "Bachelor's Degree in Computer Science" },
    ]
}

const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sdad.pro" },
        { "@type": "ListItem", position: 2, name: "Credentials", item: "https://sdad.pro/credentials" },
    ],
}

export default function CredentialsPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(credentialsStructuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
            <CredentialsClient />
            <section className="border-t border-bmw-hairline py-4 px-6 bg-bmw-surface-soft">
                <div className="max-w-[1440px] mx-auto">
                    <p className="text-bmw-body text-xs leading-relaxed max-w-4xl">
                        Sai Dutta Abhishek Dash holds a Bachelor's Degree in Computer Science from GIET University Gunupur (2025), 
                        completed Intermediate at Delhi Public School Dhenkanal (2021), and High School at Maharshi Vidya Mandir 
                        Rayagada (2019). He holds 8 professional certifications including AWS Certified Cloud Practitioner, 
                        Amazon Bedrock Getting Started, Amazon Q Developer, and AWS Cloud Practitioner from AWS/Udemy (2024).
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-bmw-muted">
                        <span className="text-[11px]">1 degree</span>
                        <span className="text-[11px]">3 institutions</span>
                        <span className="text-[11px]">8 certifications</span>
                        <span className="text-[11px]">AWS Certified Cloud Practitioner</span>
                        <span className="text-[11px]">Latest credential: 2025</span>
                        <span className="text-[11px]">Last updated: June 2026</span>
                    </div>
                </div>
            </section>
        </>
    )
}
