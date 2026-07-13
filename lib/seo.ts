import type { Metadata } from 'next';
import { siteConfig as site } from './site.config';

export interface BuildMetaOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageWidth?: string;
  imageHeight?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  keywords?: string[];
}

/**
 * Builds a single, consistent Next.js Metadata object.
 * Every route should pass through this function so title/description/canonical/OG/Twitter
 * tags stay structurally identical across all 48+ pages.
 */
export function buildMeta({
  title,
  description,
  path = '/',
  image = site.ogImage,
  imageWidth = '1200',
  imageHeight = '630',
  type = 'website',
  noindex = false,
  keywords = []
}: BuildMetaOptions): Metadata {
  const canonical = `${site.siteUrl}${path === '/' ? '' : path}`;
  const fullImage = image.startsWith('http') ? image : `${site.siteUrl}${image}`;
  const imageAlt = `${site.siteName} — ${site.tagline}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    // max-snippet/max-image-preview/max-video-preview opt every indexable page into
    // full-length snippets, which is what Google draws on for AI Overviews and other
    // answer-engine surfaces — omitting them defaults to a truncated snippet.
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          'max-snippet': -1,
          'max-image-preview': 'large',
          'max-video-preview': -1
        },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.siteName,
      locale: site.locale,
      type,
      images: [{ url: fullImage, width: Number(imageWidth), height: Number(imageHeight), alt: imageAlt }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
      site: site.social.twitter
    }
  };
}
