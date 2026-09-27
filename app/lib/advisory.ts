export type ServiceLine = {
  slug: string
  title: string
  summary: string
  offerings: string[]
  bestFor: string
}

export const serviceLines: ServiceLine[] = [
  {
    slug: "ai-infrastructure-consulting",
    title: "AI Infrastructure Consulting",
    summary:
      "Deploy, fine-tune, and optimize language models for production use, from edge inference to full agent architectures.",
    offerings: [
      "LLM integration",
      "Inference optimization",
      "On-device ML, model quantization, distillation, and edge deployment",
      "AI agent architecture with verification loops and multi-agent systems",
      "Language AI: tokenizer optimization, model distillation, language-specific tooling",
    ],
    bestFor: "Startups building AI products, enterprises integrating LLMs, teams needing edge inference",
  },
  {
    slug: "security-engineering",
    title: "Security Engineering",
    summary:
      "AI-assisted vulnerability detection, privacy-first architecture, and forensic tooling built from shipped production systems.",
    offerings: [
      "Code security scanning with automated fix generation",
      "Privacy-first architecture: zero-knowledge systems, client-side encryption, on-device processing",
      "Forensic tooling with chain-of-custody verification",
      "Network security: bot filtering, DDoS protection, threat monitoring",
    ],
    bestFor: "Fintech, healthtech, privacy-focused products, incident response teams",
  },
  {
    slug: "language-technology",
    title: "Language Technology",
    summary:
      "AI tooling for languages the commercial market has ignored, including tokenization, evaluation, and speech.",
    offerings: [
      "Low-resource language AI: tokenizer, LLMs, speech, translation",
      "NLP pipelines: benchmarking, evaluation, and optimization for non-English languages",
      "Cultural adaptation and language-specific content processing",
    ],
    bestFor: "Government projects, regional businesses, NGOs, language preservation initiatives",
  },
  {
    slug: "full-stack-product-engineering",
    title: "Full-Stack Product Engineering",
    summary:
      "Production systems taken from concept to deployment, using the same stack that ships 22 open-source products.",
    offerings: [
      "Web applications with Next.js, React, TypeScript, Node.js",
      "Developer tools: CLI tools, SDKs, APIs, documentation platforms",
      "Infrastructure: Docker, Kubernetes, AWS, Vercel, CI/CD pipelines",
      "Open source maintenance across 85+ public repositories",
    ],
    bestFor: "Startups needing CTO-level technical leadership, teams building developer-facing products",
  },
  {
    slug: "advisory-roles",
    title: "Advisory Roles",
    summary:
      "Independent technical judgement for founders, boards, and investors evaluating AI architecture and security posture.",
    offerings: [
      "Technical due diligence on AI infrastructure, security posture, and architecture",
      "Product strategy: technical roadmap, technology selection, build vs buy decisions",
      "Startup advisory for deep-tech AI, language technology, and privacy-first companies",
      "Investment evaluation: technical assessment of AI/ML startups for investors",
    ],
    bestFor: "VCs evaluating AI startups, accelerators, founders seeking technical advisors",
  },
]

export type EngagementModel = {
  model: string
  duration: string
  format: string
  bestFor: string
}

export const engagementModels: EngagementModel[] = [
  { model: "Advisory retainer", duration: "Monthly", format: "Async + calls", bestFor: "Ongoing technical guidance" },
  { model: "Project engagement", duration: "2-12 weeks", format: "Full-time", bestFor: "Specific product or engineering work" },
  { model: "Technical audit", duration: "1-2 weeks", format: "Async + report", bestFor: "Architecture review, security audit" },
  { model: "Workshop", duration: "1-5 days", format: "Live training", bestFor: "Team upskilling on AI, ML, and security" },
]

export const credentials = [
  { value: "AWS Certified", label: "Cloud Practitioner (2024)" },
  { value: "46+", label: "Models on Hugging Face" },
  { value: "22+", label: "Public datasets" },
  { value: "85+", label: "Public repositories" },
  { value: "20+", label: "Products shipped" },
  { value: "3", label: "Active ventures" },
]

export const achievements = [
  "Built a C99 inference engine that runs 35B parameter mixture-of-experts models on 8GB Apple Silicon",
  "Created a 131KB on-device ML model with 90% precision for phishing detection",
  "Designed a 3x more efficient tokenizer for Brahmic scripts (Odia language)",
  "Shipped a self-verifying coding agent with oracle-gated verification loops",
  "Built zero-knowledge encrypted systems with client-side Web Crypto API",
]

export const domains = [
  { domain: "AI/ML", experience: "LLM integration, model optimization, on-device inference, NLP" },
  { domain: "Security", experience: "Code security, network protection, forensics, privacy engineering" },
  { domain: "Language Tech", experience: "Low-resource languages, tokenization, speech, translation" },
  { domain: "Developer Tools", experience: "CLIs, SDKs, APIs, documentation, open source" },
  { domain: "Web Platforms", experience: "Full-stack apps, SaaS, real-time systems" },
  { domain: "Infrastructure", experience: "Cloud, containers, CI/CD, self-hosted" },
]
