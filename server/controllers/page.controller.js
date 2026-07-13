const { renderPage } = require('../helpers/render.helper');
const { buildMeta } = require('../helpers/seo.helper');
const { buildBreadcrumbSchema } = require('../helpers/breadcrumb.helper');
const {
  organizationSchema,
  websiteSchema,
  webPageSchema,
  faqSchema,
  softwareApplicationSchema
} = require('../helpers/schema.helper');
const homeData = require('../data/home.data');
const pages = require('../data/pages.data');
const nav = require('../data/nav.data');
const blog = require('../data/blog.data');

async function getHome(req, res) {
  const meta = buildMeta({
    title: 'BDG Win – Play Casino, Slots, Lottery & Sports Games Online',
    description:
      'BDG Win is an online gaming platform for casino, slots, lottery, sports and crash games. Register in minutes, deposit securely and claim daily, weekly and VIP rewards.',
    path: '/',
    type: 'website',
    keywords: ['BDG Win', 'BDG Win Game', 'BDG Win App', 'BDG Win Login', 'BDG Win Register', 'BDG Win Bonus']
  });

  const schemas = [
    organizationSchema(),
    websiteSchema(),
    softwareApplicationSchema(),
    webPageSchema({ title: meta.title, description: meta.description, path: '/' }),
    faqSchema(homeData.faqs)
  ].filter(Boolean);

  await renderPage(req, res, 'home', { meta, schemas, home: homeData });
}

async function getPageBySlug(req, res, next) {
  const slug = req.params[0] ? `/${req.params[0]}` : '/';
  const page = pages[slug];

  if (!page) {
    return next();
  }

  const meta = buildMeta({
    title: page.metaTitle,
    description: page.metaDescription,
    path: slug,
    keywords: page.keywords || []
  });

  const breadcrumb = [{ label: 'Home', url: '/' }, ...page.breadcrumbTrail, { label: page.h1, url: null }];

  const schemas = [
    organizationSchema(),
    webPageSchema({ title: page.metaTitle, description: page.metaDescription, path: slug }),
    buildBreadcrumbSchema(breadcrumb),
    faqSchema(page.faqs)
  ].filter(Boolean);

  await renderPage(req, res, 'generic', { meta, schemas, page, breadcrumb });
}

async function getSiteMap(req, res) {
  const page = pages['/sitemap'];

  const meta = buildMeta({
    title: page.metaTitle,
    description: page.metaDescription,
    path: '/sitemap',
    keywords: page.keywords || []
  });

  const breadcrumb = [{ label: 'Home', url: '/' }, { label: page.h1, url: null }];

  const schemas = [
    organizationSchema(),
    webPageSchema({ title: page.metaTitle, description: page.metaDescription, path: '/sitemap' }),
    buildBreadcrumbSchema(breadcrumb),
    faqSchema(page.faqs)
  ].filter(Boolean);

  const groups = [
    { label: 'Main', links: [{ label: 'Home', url: '/' }, { label: 'About', url: '/about' }, { label: 'Features', url: '/features' }] },
    { label: 'Games', links: nav.footer.games.concat([{ label: 'Game Categories', url: '/games' }, { label: 'New Games', url: '/games/new' }]) },
    { label: 'Rewards & VIP', links: [
      { label: 'Rewards', url: '/rewards' },
      { label: 'Daily Rewards', url: '/rewards/daily' },
      { label: 'Weekly Rewards', url: '/rewards/weekly' },
      { label: 'Monthly Rewards', url: '/rewards/monthly' },
      { label: 'VIP Program', url: '/vip' },
      { label: 'Promotions', url: '/promotions' },
      { label: 'Gift Codes', url: '/gift-code' }
    ] },
    { label: 'Earn With BDG Win', links: [
      { label: 'Referral Program', url: '/referral-program' },
      { label: 'Affiliate Program', url: '/affiliate-program' },
      { label: 'Agent Program', url: '/agent-program' }
    ] },
    { label: 'Account', links: nav.footer.account },
    { label: 'Support & Legal', links: nav.footer.support.concat(nav.footer.legal) },
    { label: 'Blog', links: [{ label: 'All Articles', url: '/blog' }].concat(
      blog.categories.map((c) => ({ label: `Category: ${c.name}`, url: `/blog/category/${c.slug}` }))
    ) }
  ];

  await renderPage(req, res, 'sitemap', { meta, schemas, page, breadcrumb, groups });
}

module.exports = { getHome, getPageBySlug, getSiteMap };
