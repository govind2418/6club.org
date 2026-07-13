const express = require('express');
const site = require('../config/site.config');
const pages = require('../data/pages.data');
const blog = require('../data/blog.data');

const router = express.Router();

/**
 * llms.txt (see llmstxt.org) gives AI answer engines and agent crawlers a compact,
 * structured map of the site so they can cite BDG Win accurately instead of guessing
 * from partial crawls. Built from the same page/blog data that drives sitemap.xml.
 */
router.get('/llms.txt', (req, res) => {
  const lines = [];

  lines.push(`# ${site.siteName}`);
  lines.push('');
  lines.push(`> ${site.defaultDescription}`);
  lines.push('');
  lines.push(
    'BDG Win is an online gaming platform covering casino, slot, lottery, Color Prediction, sports, ' +
      'crash, fishing and arcade games under a single account, wallet and rewards system.'
  );
  lines.push('');

  const section = (title, entries) => {
    lines.push(`## ${title}`);
    entries.forEach(({ label, path, description }) => {
      lines.push(`- [${label}](${site.siteUrl}${path}): ${description}`);
    });
    lines.push('');
  };

  section('Account', [
    { label: 'Register', path: '/register', description: pages['/register'].metaDescription },
    { label: 'Login', path: '/login', description: pages['/login'].metaDescription },
    { label: 'Forgot Password', path: '/forgot-password', description: pages['/forgot-password'].metaDescription },
    { label: 'Download', path: '/download', description: pages['/download'].metaDescription }
  ]);

  section('Games', [
    { label: 'Game Categories', path: '/games', description: pages['/games'].metaDescription },
    { label: 'Casino Games', path: '/games/casino', description: pages['/games/casino'].metaDescription },
    { label: 'Slot Games', path: '/games/slots', description: pages['/games/slots'].metaDescription },
    { label: 'Lottery & Color Prediction', path: '/games/lottery', description: pages['/games/lottery'].metaDescription },
    { label: 'Sports Games', path: '/games/sports', description: pages['/games/sports'].metaDescription },
    { label: 'Crash Games', path: '/games/crash', description: pages['/games/crash'].metaDescription }
  ]);

  section('Rewards & Programs', [
    { label: 'Rewards', path: '/rewards', description: pages['/rewards'].metaDescription },
    { label: 'VIP Program', path: '/vip', description: pages['/vip'].metaDescription },
    { label: 'Referral Program', path: '/referral-program', description: pages['/referral-program'].metaDescription },
    { label: 'Affiliate Program', path: '/affiliate-program', description: pages['/affiliate-program'].metaDescription },
    { label: 'Agent Program', path: '/agent-program', description: pages['/agent-program'].metaDescription }
  ]);

  section('Payments & Security', [
    { label: 'Payment Methods', path: '/payment-methods', description: pages['/payment-methods'].metaDescription },
    { label: 'Deposit Guide', path: '/deposit-guide', description: pages['/deposit-guide'].metaDescription },
    { label: 'Withdrawal Guide', path: '/withdrawal-guide', description: pages['/withdrawal-guide'].metaDescription },
    { label: 'Security', path: '/security', description: pages['/security'].metaDescription },
    { label: 'Fair Play', path: '/fair-play', description: pages['/fair-play'].metaDescription },
    { label: 'Responsible Gaming', path: '/responsible-gaming', description: pages['/responsible-gaming'].metaDescription }
  ]);

  section(
    'Blog',
    blog.getAllPosts().map((post) => ({ label: post.title, path: `/blog/${post.slug}`, description: post.excerpt }))
  );

  section('Support & Policies', [
    { label: 'FAQs', path: '/faqs', description: pages['/faqs'].metaDescription },
    { label: 'Help Center', path: '/help-center', description: pages['/help-center'].metaDescription },
    { label: 'Contact', path: '/contact', description: pages['/contact'].metaDescription },
    { label: 'Privacy Policy', path: '/privacy-policy', description: pages['/privacy-policy'].metaDescription },
    { label: 'Terms & Conditions', path: '/terms', description: pages['/terms'].metaDescription }
  ]);

  res.type('text/plain').send(lines.join('\n').trim() + '\n');
});

module.exports = router;
