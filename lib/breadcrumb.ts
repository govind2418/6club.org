import { siteConfig as site } from './site.config';

export interface BreadcrumbItem {
  label: string;
  url: string | null;
}

/**
 * items: last item should have url: null (current page)
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
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
