import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // ── AI search & citation crawlers ──
            {
                userAgent: ['GPTBot', 'ChatGPT-User'],
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: ['ClaudeBot', 'Claude-User', 'anthropic-ai'],
                allow: '/',
            },
            {
                userAgent: ['Google-Extended', 'Google-CloudVertexBot', 'GoogleOther'],
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'Applebot',
                allow: '/',
            },
            // ── User-triggered fetchers (fired when a user asks a model to read the page) ──
            {
                userAgent: 'Perplexity-User',
                allow: '/',
            },
            {
                userAgent: 'Claude-User',
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
                userAgent: ['Omgilibot', 'Diffbot', 'cohere-ai', 'ai2bot', 'YouBot'],
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
