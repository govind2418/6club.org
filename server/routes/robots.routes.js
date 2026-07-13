const express = require('express');
const site = require('../config/site.config');

const router = express.Router();

// Reputable AI/answer-engine crawlers are explicitly allowed so BDG Win can be
// cited accurately in AI Overviews, ChatGPT/Perplexity answers and similar
// answer-engine surfaces, rather than relying on a bare wildcard rule.
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

router.get('/robots.txt', (req, res) => {
  const lines = ['User-agent: *', 'Allow: /', 'Disallow: /api/', ''];

  AI_CRAWLERS.forEach((agent) => {
    lines.push(`User-agent: ${agent}`, 'Allow: /', '');
  });

  lines.push(`Sitemap: ${site.siteUrl}/sitemap.xml`);

  res.type('text/plain').send(lines.join('\n'));
});

module.exports = router;
