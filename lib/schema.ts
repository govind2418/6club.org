import { siteConfig as site } from './site.config';
import type { BlogFaq } from '@/data/blog.data';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.siteName,
    url: site.siteUrl,
    logo: `${site.siteUrl}${site.logo}`,
    foundingDate: String(site.foundingYear),
    sameAs: [site.social.facebook, site.social.instagram, site.social.telegram].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      email: site.contactEmail,
      contactType: 'customer support'
    }
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.siteName,
    url: site.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.siteUrl}/help-center?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function faqSchema(faqs: BlogFaq[] = []) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };
}

export function articleSchema({
  title,
  description,
  image,
  path,
  datePublished,
  dateModified,
  authorName
}: {
  title: string;
  description: string;
  image: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image.startsWith('http') ? image : `${site.siteUrl}${image}`,
    author: {
      '@type': 'Person',
      name: authorName || site.siteName
    },
    publisher: {
      '@type': 'Organization',
      name: site.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${site.siteUrl}${site.logo}`
      }
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${site.siteUrl}${path}`
    }
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: site.siteName,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Android, iOS, Windows, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };
}

export function webPageSchema({
  title,
  description,
  path,
  dateModified
}: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${site.siteUrl}${path}`,
    ...(dateModified ? { dateModified } : {}),
    isPartOf: {
      '@type': 'WebSite',
      name: site.siteName,
      url: site.siteUrl
    }
  };
}

export function itemListSchema({ items }: { items: { name: string; url: string }[] }) {
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url
    }))
  };
}

export function collectionPageSchema({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${site.siteUrl}${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: site.siteName,
      url: site.siteUrl
    }
  };
}
