const env = require('./env');

module.exports = {
  siteName: env.SITE_NAME,
  siteUrl: env.SITE_URL,
  tagline: 'Play Bold. Win Big.',
  defaultDescription:
    'BDG Win gives players across India instant access to live casino tables, slot reels, lottery draws, sports markets and crash games, with same-day withdrawals, verified fair-play odds and a rewards ladder that pays back every session.',
  contactEmail: env.CONTACT_EMAIL,
  social: {
    twitter: '@bdgwin',
    facebook: 'https://www.facebook.com/bdgwin',
    instagram: 'https://www.instagram.com/bdgwin',
    telegram: 'https://t.me/bdgwin'
  },
  logo: '/images/logo.svg',
  ogImage: '/images/og-cover.png',
  themeColor: '#F4C542',
  locale: 'en_US',
  foundingYear: 2021,
  // Live registration funnel — used by the sticky mobile CTA bar.
  registerUrl: 'https://bdgwin98.com/#/register?invitationCode=136448806011',
  googleSiteVerification: 'rn_rfqq235UecvQYC_SbCzxYyAq7YzcemQQR-1XNH9s'
};
