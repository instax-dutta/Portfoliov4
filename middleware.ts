import { NextResponse, type NextRequest } from "next/server"

const removedProjects = new Set([
  "ornith-flight",
  "agentloop",
  "cl-chat-reborn",
  "hinglish-bench",
  "forensic-recovery",
  "the-watcher",
  "visitor-analytics",
  "auralyn",
  "3d-web-contents",
])

export function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2]
  if (removedProjects.has(slug)) {
    return new Response("Gone", { status: 410 })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/projects/:path*"],
}
