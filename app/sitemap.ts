import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site.config';
import pagesData, { defaultLastUpdatedISO } from '@/data/pages.data';
import * as blog from '@/data/blog.data';

function latestPostDate(posts: { date: string; dateModified?: string }[]) {
  return posts.reduce((latest, post) => {
    const modified = post.dateModified || post.date;
    return modified > latest ? modified : latest;
  }, defaultLastUpdatedISO);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blog.getAllPosts();

  return [
    { url: `${siteConfig.siteUrl}/`, lastModified: defaultLastUpdatedISO, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteConfig.siteUrl}/blog`, lastModified: latestPostDate(posts), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteConfig.siteUrl}/sister-sites`, lastModified: defaultLastUpdatedISO, changeFrequency: 'monthly', priority: 0.3 },
    ...Object.keys(pagesData).map((slug) => ({
      url: `${siteConfig.siteUrl}${slug}`,
      lastModified: pagesData[slug].lastUpdatedISO || defaultLastUpdatedISO,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      lastModified: post.dateModified || post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    ...blog.categories.map((cat) => ({
      url: `${siteConfig.siteUrl}/blog/category/${cat.slug}`,
      lastModified: latestPostDate(blog.getPostsByCategory(cat.slug)),
      changeFrequency: 'weekly' as const,
      priority: 0.5
    })),
    ...blog.getAllTags().map((tag) => ({
      url: `${siteConfig.siteUrl}/blog/tag/${tag.slug}`,
      lastModified: latestPostDate(blog.getPostsByTag(tag.slug)),
      changeFrequency: 'weekly' as const,
      priority: 0.4
    })),
    ...blog.authors.map((author) => ({
      url: `${siteConfig.siteUrl}/blog/author/${author.slug}`,
      lastModified: latestPostDate(blog.getPostsByAuthor(author.slug)),
      changeFrequency: 'monthly' as const,
      priority: 0.4
    }))
  ];
}
