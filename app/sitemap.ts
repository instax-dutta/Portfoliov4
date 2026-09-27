import { MetadataRoute } from 'next'
import { projects } from './lib/projects'

/**
 * Real per-route modification dates. Using `new Date()` for every route on
 * every build tells crawlers all pages changed today, which erodes trust in
 * lastmod and triggers needless recrawls.
 */
const ROUTE_LASTMOD: Record<string, string> = {
    '': '2026-09-27',
    '/about': '2026-09-27',
    '/projects': '2026-09-27',
    '/experience': '2026-09-27',
    '/skills': '2026-09-27',
    '/credentials': '2026-09-27',
    '/contact': '2026-09-27',
    '/advisory': '2026-09-27',
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sdad.pro'

    const routes: {
        url: string
        lastModified: string
        changeFrequency: 'weekly' | 'monthly' | 'yearly'
        priority: number
    }[] = [
        { url: '', lastModified: ROUTE_LASTMOD[''], changeFrequency: 'weekly', priority: 1 },
        { url: '/about', lastModified: ROUTE_LASTMOD['/about'], changeFrequency: 'monthly', priority: 0.8 },
        { url: '/projects', lastModified: ROUTE_LASTMOD['/projects'], changeFrequency: 'weekly', priority: 1 },
        { url: '/experience', lastModified: ROUTE_LASTMOD['/experience'], changeFrequency: 'monthly', priority: 0.9 },
        { url: '/skills', lastModified: ROUTE_LASTMOD['/skills'], changeFrequency: 'monthly', priority: 0.7 },
        { url: '/credentials', lastModified: ROUTE_LASTMOD['/credentials'], changeFrequency: 'monthly', priority: 0.6 },
        { url: '/advisory', lastModified: ROUTE_LASTMOD['/advisory'], changeFrequency: 'monthly', priority: 0.9 },
        { url: '/contact', lastModified: ROUTE_LASTMOD['/contact'], changeFrequency: 'monthly', priority: 0.8 },
    ]

    const projectRoutes = projects.map((project) => ({
        url: `/projects/${project.slug}`,
        lastModified: ROUTE_LASTMOD['/projects'],
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    const agentRoutes = [
        { url: '/llms.txt', lastModified: '2026-09-27', changeFrequency: 'monthly' as const, priority: 0.5 },
        { url: '/llms-full.txt', lastModified: '2026-09-27', changeFrequency: 'monthly' as const, priority: 0.5 },
    ]

    return [...routes, ...projectRoutes, ...agentRoutes].map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: route.lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}
