import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // ── AI search & citation bots ──
            {
                userAgent: ['GPTBot', 'ChatGPT-User'],
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: ['ClaudeBot', 'anthropic-ai'],
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            // ── AI platform crawlers ──
            {
                userAgent: 'Bytespider',
                allow: '/',
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
            },
            {
                userAgent: 'Amazonbot',
                allow: '/',
            },
            {
                userAgent: 'meta-externalagent',
                allow: '/',
            },
            {
                userAgent: ['Omgilibot', 'Diffbot'],
                allow: '/',
            },
            // ── Training-only crawlers — block ──
            {
                userAgent: 'CCBot',
                disallow: '/',
            },
            // ── General crawlers ──
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/admin', '/private', '/tmp', '/cache'],
            },
        ],
        sitemap: 'https://sdad.pro/sitemap.xml',
        host: 'https://sdad.pro',
    }
}
