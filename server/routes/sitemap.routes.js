const express = require('express');
const site = require('../config/site.config');
const pages = require('../data/pages.data');
const blog = require('../data/blog.data');

const router = express.Router();

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>\n    <loc>${site.siteUrl}${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

router.get('/sitemap.xml', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [];

  urls.push(urlEntry('/', today, 'daily', '1.0'));
  urls.push(urlEntry('/blog', today, 'daily', '0.9'));

  Object.keys(pages).forEach((slug) => {
    urls.push(urlEntry(slug, today, 'weekly', '0.8'));
  });

  blog.getAllPosts().forEach((post) => {
    urls.push(urlEntry(`/blog/${post.slug}`, post.dateModified || post.date, 'monthly', '0.7'));
  });

  blog.categories.forEach((cat) => {
    urls.push(urlEntry(`/blog/category/${cat.slug}`, today, 'weekly', '0.5'));
  });

  blog.getAllTags().forEach((tag) => {
    urls.push(urlEntry(`/blog/tag/${tag.slug}`, today, 'weekly', '0.4'));
  });

  blog.authors.forEach((author) => {
    urls.push(urlEntry(`/blog/author/${author.slug}`, today, 'monthly', '0.4'));
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

  res.type('application/xml').send(xml);
});

module.exports = router;
