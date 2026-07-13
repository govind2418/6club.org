import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site.config';
import pagesData from '@/data/pages.data';
import * as blog from '@/data/blog.data';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().slice(0, 10);

  return [
    { url: `${siteConfig.siteUrl}/`, lastModified: today, changeFrequency: 'daily', priority: 1.0 },
    { url: `${siteConfig.siteUrl}/blog`, lastModified: today, changeFrequency: 'daily', priority: 0.9 },
    { url: `${siteConfig.siteUrl}/sister-sites`, lastModified: today, changeFrequency: 'monthly', priority: 0.3 },
    ...Object.keys(pagesData).map((slug) => ({
      url: `${siteConfig.siteUrl}${slug}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    })),
    ...blog.getAllPosts().map((post) => ({
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      lastModified: post.dateModified || post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    ...blog.categories.map((cat) => ({
      url: `${siteConfig.siteUrl}/blog/category/${cat.slug}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.5
    })),
    ...blog.getAllTags().map((tag) => ({
      url: `${siteConfig.siteUrl}/blog/tag/${tag.slug}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.4
    })),
    ...blog.authors.map((author) => ({
      url: `${siteConfig.siteUrl}/blog/author/${author.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.4
    }))
  ];
}
