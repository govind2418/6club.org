const site = require('../config/site.config');

function organizationSchema() {
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

function websiteSchema() {
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

function faqSchema(faqs = []) {
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

function articleSchema({ title, description, image, path, datePublished, dateModified, authorName }) {
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

function softwareApplicationSchema() {
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
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '18240'
    }
  };
}

function webPageSchema({ title, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
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

module.exports = {
  organizationSchema,
  websiteSchema,
  faqSchema,
  articleSchema,
  softwareApplicationSchema,
  webPageSchema
};
