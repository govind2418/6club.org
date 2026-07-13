const site = require('../config/site.config');

/**
 * Builds a single, consistent meta object consumed by the <head> partial.
 * Every route should pass through this function so title/description/canonical/OG/Twitter
 * tags stay structurally identical across all 48+ pages.
 */
function buildMeta({
  title,
  description,
  path = '/',
  image = site.ogImage,
  imageWidth = '1200',
  imageHeight = '630',
  type = 'website',
  noindex = false,
  keywords = []
} = {}) {
  const canonical = `${site.siteUrl}${path === '/' ? '' : path}`;
  const fullImage = image.startsWith('http') ? image : `${site.siteUrl}${image}`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    canonical,
    path,
    // max-snippet/max-image-preview/max-video-preview:-1|large opt every indexable page
    // into full-length snippets, which is what Google draws on for AI Overviews and
    // other answer-engine surfaces — omitting them defaults to a truncated snippet.
    robots: noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    og: {
      title,
      description,
      url: canonical,
      image: fullImage,
      imageWidth,
      imageHeight,
      imageAlt: `${site.siteName} — ${site.tagline}`,
      type,
      siteName: site.siteName,
      locale: site.locale
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: fullImage,
      site: site.social.twitter
    }
  };
}

module.exports = { buildMeta };
