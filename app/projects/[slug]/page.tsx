import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { SITE } from "../../lib/site-facts"
import { projects, type Project } from "../../lib/projects"

const ProjectDetailClient = dynamic(() => import("./ProjectDetailClient"), {
  loading: () => null,
})

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}

  const title = `${project.title} — ${project.subtitle}`
  const url = `${SITE.url}/projects/${project.slug}`

  return {
    title,
    description: project.description,
    keywords: [project.title, project.group, ...project.technologies],
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Sai Dutta Abhishek Dash`,
      description: project.description,
      url,
      siteName: "Sai Dutta Abhishek Dash — Founder & Engineer",
      locale: "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${project.title} — Sai Dutta Abhishek Dash`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Sai Dutta Abhishek Dash`,
      description: project.description,
      images: ["/og-image.png"],
    },
  }
}

function projectSchema(project: Project) {
  const url = `${SITE.url}/projects/${project.slug}`
  const isLiveApp = Boolean(project.link && !project.link.startsWith("https://huggingface.co/"))

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SoftwareSourceCode", "CreativeWork"],
        "@id": `${url}#project`,
        "name": project.title,
        "alternateName": project.subtitle,
        "url": url,
        "description": project.description,
        "keywords": project.technologies.join(", "),
        "genre": project.group,
        ...(project.language ? { programmingLanguage: project.language } : {}),
        ...(project.github ? { codeRepository: project.github } : {}),
        ...(project.link ? { sameAs: project.link } : {}),
        "author": { "@id": "https://sdad.pro/#person" },
        "isPartOf": { "@id": "https://sdad.pro/projects/#webpage" },
      },
      ...(isLiveApp
        ? [
            {
              "@type": "SoftwareApplication",
              "@id": `${url}#app`,
              "name": project.title,
              "url": project.link,
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web",
              "description": project.description,
              "author": { "@id": "https://sdad.pro/#person" },
            },
          ]
        : []),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": `${project.title} — ${project.subtitle}`,
        "inLanguage": "en",
        "datePublished": SITE.datePublished,
        "dateModified": SITE.dateModified,
        "isPartOf": { "@id": "https://sdad.pro/#website" },
        "mainEntity": { "@id": `${url}#project` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.url },
          { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${SITE.url}/projects` },
          { "@type": "ListItem", "position": 3, "name": project.title, "item": url },
        ],
      },
    ],
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema(project)) }}
      />
      <ProjectDetailClient project={project} />
      <AnswerBlocksPage project={project} />
    </>
  )
}

function AnswerBlocksPage({ project }: { project: Project }) {
  return (
    <div className="sr-only">
      <section aria-labelledby={`answer-project-${project.slug}`}>
        <h2 id={`answer-project-${project.slug}`}>What is {project.title}?</h2>
        <p>{projectAnswer(project)}</p>
      </section>
    </div>
  )
}

function projectAnswer(project: Project): string {
  const siblings = projects
    .filter((p) => p.group === project.group && p.slug !== project.slug)
    .map((p) => p.title)

  const parts: string[] = []
  parts.push(
    `${project.title} is an open-source project by Sai Dutta Abhishek Dash, a founder and engineer based in Odisha, India.`
  )
  parts.push(`It belongs to the ${project.group} category, and is a ${project.subtitle}. ${project.description}`)
  if (project.language) {
    parts.push(`The primary implementation language is ${project.language}.`)
  }
  if (project.technologies.length) {
    parts.push(`It uses ${project.technologies.join(", ")}.`)
  }
  parts.push(`${project.highlights[0]} ${project.highlights[1]}`)
  if (siblings.length) {
    parts.push(
      `Other systems in the same track are ${siblings.slice(0, -1).join(", ")}${siblings.length > 1 ? ", and " : ""}${siblings[siblings.length - 1]}.`
    )
  }
  if (project.link) {
    parts.push(`A live instance or published model is available at ${project.link}.`)
  }
  if (project.github) {
    parts.push(`The full source code is public at ${project.github}.`)
  }
  parts.push(
    `Sai Dutta Abhishek Dash has shipped ${projects.length} open-source production systems, maintains 85+ public repositories on GitHub, and has published 46+ models and 22+ datasets on Hugging Face.`
  )

  // Keep every passage inside the 134-167 word extraction window. Only shorter
  // answers get the closing line, so no page overflows.
  const MIN_WORDS = 134
  const count = parts.join(" ").trim().split(/\s+/).length
  if (count < MIN_WORDS) {
    parts.push(`He is available for advisory roles and technical collaborations via contact@sdad.pro.`)
  }
  return parts.join(" ")
}
