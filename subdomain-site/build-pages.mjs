import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, pages } from './site-data.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const nav = [
  ['Home', '/'],
  ['6 Club Login', '/6club-login/'],
  ['6 Club Games', '/6club-game/'],
  ['6 Club App', '/6club-app/'],
  ['About', '/about-us/'],
  ['Responsible Gaming', '/responsible-gaming/']
];
const policies = [
  ['Disclaimer', '/disclaimer/'],
  ['Privacy Policy', '/privacy-policy/'],
  ['Terms of Use', '/terms-and-conditions/']
];

const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);
const canonicalFor = (slug) => slug ? `${SITE.url}/${slug}/` : `${SITE.url}/`;

function header() {
  return `<header class="site-header"><div class="header-inner">
    <a class="brand" href="/" aria-label="6 Club home"><img src="/assets/images/logo.png" width="174" height="75" alt="6 Club logo"></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span class="sr-only">Open menu</span><i></i><i></i><i></i></button>
    <nav class="site-nav" id="site-nav" aria-label="Main navigation">${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}<a class="nav-cta" href="${SITE.loginUrl}">Login</a></nav>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-inner">
    <div class="footer-about"><a href="/" aria-label="6 Club home"><img src="/assets/images/logo.png" width="150" height="65" alt="6 Club logo"></a><p>Clear, practical guides for 6 Club login, games, mobile access and responsible use.</p></div>
    <div><h2>Explore guides</h2><ul>${pages.slice(0, 4).map((page) => `<li><a href="/${page.slug}/">${escapeHtml(page.title.replace(/:.*/, ''))}</a></li>`).join('')}<li><a href="/about-us/">About 6 Club</a></li></ul></div>
    <div><h2>Policies</h2><ul>${policies.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}<li><a href="/responsible-gaming/">Responsible Gaming</a></li></ul></div>
  </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} 6 Club Guides</span><a href="/sitemap.xml">XML sitemap</a><a href="/">Home</a></div></footer>`;
}

function faqSchema(faqs) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  };
}

function pageJsonLd(page, canonical) {
  const nodes = [
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.name },
    { '@type': 'Organization', '@id': `${SITE.url}/#organization`, name: SITE.name, url: `${SITE.url}/`, logo: `${SITE.url}${SITE.logo}` },
    { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: page.title, description: page.description, isPartOf: { '@id': `${SITE.url}/#website` } }
  ];
  if (page.faqs?.length) nodes.push(faqSchema(page.faqs));
  return { '@context': 'https://schema.org', '@graph': nodes };
}

function hero(page, home = false) {
  const image = page.image
    ? `<img class="hero-art" src="${page.image}" width="1536" height="1024" alt="${escapeHtml(page.imageAlt)}" ${home ? 'fetchpriority="high"' : 'loading="eager"'}>`
    : '';
  const actions = `<div class="hero-actions"><a class="button button-primary" href="${SITE.loginUrl}">6 Club Login</a><a class="button button-secondary" href="${SITE.registerUrl}" target="_blank" rel="sponsored noopener noreferrer">Register Now</a></div>`;
  return `<section class="hero ${home ? 'home-hero' : ''} ${page.image ? 'with-image' : 'text-hero'}"><div class="hero-inner">
    <div class="hero-copy"><p class="eyebrow">${escapeHtml(page.eyebrow)}</p><h1>${escapeHtml(page.title)}</h1><p class="hero-intro">${escapeHtml(page.intro)}</p>${actions}</div>
    ${image ? `<div class="hero-media">${image}</div>` : ''}
  </div></section>`;
}

function contentsNav(sections, faqs) {
  return `<nav class="contents" aria-label="On this page"><details><summary>On this page</summary><ol>${sections.map((section, index) => `<li><a href="#section-${index + 1}">${escapeHtml(section.heading)}</a></li>`).join('')}<li><a href="#faqs">Frequently asked questions</a></li></ol></details></nav>`;
}

function sectionHtml(section, index) {
  return `<section class="content-section" id="section-${index + 1}"><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}${section.points ? `<ul>${section.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul>` : ''}</section>`;
}

function faqHtml(faqs, title) {
  return `<section class="faq-section" id="faqs"><p class="eyebrow">Quick answers</p><h2>${escapeHtml(title)} FAQs</h2><div class="faq-list">${faqs.map(([question, answer], index) => `<details class="faq-item" id="faq-${index + 1}"><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join('')}</div></section>`;
}

function relatedHtml(related = []) {
  const links = [...related, ['6 Club home page', '/']];
  return `<section class="related-section"><h2>More 6 Club guides</h2><div class="related-links">${links.map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`).join('')}</div></section>`;
}

function htmlDocument(page, body, slug = '', home = false) {
  const canonical = canonicalFor(slug);
  const image = page.image || '/assets/images/home-hero.webp';
  const imageAlt = page.imageAlt || `6 Club ${page.title}`;
  const json = JSON.stringify(pageJsonLd(page, canonical)).replace(/</g, '\\u003c');
  return `<!doctype html>
<html lang="en-IN"><head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)}</title><meta name="description" content="${escapeHtml(page.description)}">
  <meta name="keywords" content="${escapeHtml(page.keywords.join(', '))}"><meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}"><link rel="icon" href="/assets/images/favicon.png" type="image/png">
  <link rel="stylesheet" href="/assets/css/site.css">
  <meta property="og:type" content="website"><meta property="og:site_name" content="6 Club"><meta property="og:title" content="${escapeHtml(page.title)}"><meta property="og:description" content="${escapeHtml(page.description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${SITE.url}${image}"><meta property="og:image:alt" content="${escapeHtml(imageAlt)}">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(page.title)}"><meta name="twitter:description" content="${escapeHtml(page.description)}"><meta name="twitter:image" content="${SITE.url}${image}">
  <script type="application/ld+json">${json}</script>
</head><body>${header()}<main id="main-content">${home ? '' : `<div class="breadcrumbs"><a href="/">Home</a><span aria-hidden="true">/</span><span>${escapeHtml(page.title)}</span></div>`}${body}</main>${footer()}<script src="/assets/js/site.js" defer></script></body></html>`;
}

const home = {
  slug: '',
  title: '6 Club Official Website: Login, Games and App Guides',
  description: 'Explore 6 Club login help, game categories, mobile app guidance and responsible gaming information in one easy-to-navigate guide website.',
  keywords: ['6 Club', '6club', '6club login', '6 Club games', '6 Club app', '6 Club official website'],
  eyebrow: '6 Club information hub',
  intro: 'Find clear guides to 6 Club account access, game categories and mobile use. Review the details, understand the risks and choose the page that matches what you need.',
  image: '/assets/images/home-hero.webp',
  imageAlt: '6 Club website guide hero with an illuminated gold digital portal',
  sections: [
    { heading: 'A clear starting point for 6 Club', paragraphs: [
      'This independent guide hub organizes essential 6 Club topics in one place. Use the login guide for sign-in safety, browse the game guide to understand categories, or read the app guide before installing software on a device.',
      'Information on this site is general. It does not access player accounts, process transactions or guarantee that a particular feature is currently available.'
    ] },
    { heading: '6club login and account safety', paragraphs: [
      'Before entering account details, confirm that the sign-in address is the one you intended to open. Use a unique password, keep one-time codes private and sign out when using a shared device.',
      'If access fails, use the account recovery controls shown by the service. This guide never needs your password or OTP.'
    ] },
    { heading: 'Explore 6 Club games with care', paragraphs: [
      'Game categories may include casino, slots, lottery-style formats, sports, crash, fishing and arcade titles. Rules and outcomes differ between games, so read each game’s current instructions before deciding to participate.',
      'Games involve uncertainty. Set a time and spending limit, and do not treat play as a source of income.'
    ] },
    { heading: 'Mobile access and responsible use', paragraphs: [
      'The mobile guide explains browser access, download-source checks and device security basics. Use updated software and avoid app packages from unfamiliar file-sharing links.',
      'Only use gaming services if you meet applicable age requirements and local rules. If play stops being enjoyable or begins to affect daily life, pause and seek support.'
    ] }
  ],
  faqs: [
    ['What is this 6 Club website for?', 'It is an information hub with guides to login, games, mobile access, policies and responsible play.'],
    ['Can I log in from this guide website?', 'Use the Login button to open the separate 6 Club login page. This guide site does not collect credentials.'],
    ['Does this website provide an official app download?', 'No installer is hosted here. Check the current official service for app availability and verify every source.'],
    ['Are game outcomes guaranteed?', 'No. Outcomes are uncertain and past results do not guarantee future results.']
  ]
};

function homeBody() {
  const pageCards = pages.map((page) => `<a class="guide-card" href="/${page.slug}/"><span class="guide-kicker">${escapeHtml(page.eyebrow)}</span><h3>${escapeHtml(page.title)}</h3><p>${escapeHtml(page.description)}</p><span class="guide-arrow">Read guide <span aria-hidden="true">→</span></span></a>`).join('');
  return `${hero(home, true)}
    <section class="guide-hub section-wrap" aria-labelledby="guide-heading"><div class="section-heading"><p class="eyebrow">Browse by topic</p><h2 id="guide-heading">6 Club guides for the questions you have</h2><p>Every guide page is linked here, so you can move from account access to games, mobile safety or site policies without searching the whole site.</p></div><div class="guide-grid">${pageCards}</div></section>
    ${contentsNav(home.sections, home.faqs)}
    <article class="article-wrap">${home.sections.map(sectionHtml).join('')}
      <section class="link-panel"><h2>Choose your next step</h2><p>Open the login guide, review game categories, or learn what to check before using a mobile app.</p><div class="related-links"><a href="/6club-login/">6 Club Login</a><a href="/6club-game/">6 Club Games</a><a href="/6club-app/">6 Club App</a><a href="/responsible-gaming/">Responsible Gaming</a></div></section>
    </article>
    ${faqHtml(home.faqs, '6 Club')}`;
}

function contentBody(page) {
  return `${hero(page)}${contentsNav(page.sections, page.faqs)}<article class="article-wrap">${page.sections.map(sectionHtml).join('')}${relatedHtml(page.related)}</article>${faqHtml(page.faqs, page.title)}`;
}

await mkdir(path.join(root, 'assets/css'), { recursive: true });
await mkdir(path.join(root, 'assets/js'), { recursive: true });
await writeFile(path.join(root, 'index.html'), htmlDocument(home, homeBody(), '', true));
for (const page of pages) {
  const folder = path.join(root, page.slug);
  await mkdir(folder, { recursive: true });
  await writeFile(path.join(folder, 'index.html'), htmlDocument(page, contentBody(page), page.slug));
}
await writeFile(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[home, ...pages].map((page) => `  <url><loc>${canonicalFor(page.slug)}</loc><changefreq>${page.slug ? 'monthly' : 'weekly'}</changefreq><priority>${page.slug ? '0.8' : '1.0'}</priority></url>`).join('\n')}\n</urlset>\n`);
