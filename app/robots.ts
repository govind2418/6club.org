import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site.config';

const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'PerplexityBot',
  'Applebot-Extended',
  'Bingbot'
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      ...AI_CRAWLERS.map((agent) => ({ userAgent: agent, allow: '/' }))
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`
  };
}
