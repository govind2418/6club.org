const site = require('../config/site.config');

/**
 * items: [{ label, url }]  -> last item should have url: null (current page)
 */
function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.url ? { item: `${site.siteUrl}${item.url}` } : {})
    }))
  };
}

module.exports = { buildBreadcrumbSchema };
