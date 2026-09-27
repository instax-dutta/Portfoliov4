import type React from "react"
import Link from "next/link"
import { answerSections, type AnswerSection } from "../lib/site-facts"

/**
 * Renders question-form headings and answer-first passages that AI systems and
 * assistive technology can both read. Visually hidden, so the design is unchanged.
 *
 * Answers may contain inline links written as `[label](/path)` or
 * `[label](https://external.example)`. Internal links become real anchors so
 * crawlers can traverse the internal link graph; they carry `tabIndex={-1}`
 * because a focusable element inside a 1px clip would be an invisible tab stop.
 */
const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g

export function stripLinkMarkup(text: string): string {
  return text.replace(INLINE_LINK, "$1")
}

function renderInline(text: string) {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  INLINE_LINK.lastIndex = 0
  while ((match = INLINE_LINK.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))
    const [, label, href] = match
    nodes.push(
      href.startsWith("/") ? (
        <Link key={key++} href={href} tabIndex={-1}>
          {label}
        </Link>
      ) : (
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
          {label}
        </a>
      )
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}

function AnswerSectionBlock({ section, id }: { section: AnswerSection; id: string }) {
  const headingId = `answer-${id}`

  return (
    <section aria-labelledby={headingId} className="sr-only">
      <h2 id={headingId}>{section.question}</h2>
      <p>{renderInline(section.answer)}</p>
    </section>
  )
}

export default function AnswerBlocks({ page }: { page: keyof typeof answerSections }) {
  const sections = answerSections[page]
  if (!sections) return null

  return (
    <div data-answer-blocks={page}>
      {sections.map((section, index) => (
        <AnswerSectionBlock key={section.question} section={section} id={`${page}-${index}`} />
      ))}
    </div>
  )
}
