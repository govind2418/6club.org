export const siteConfig = {
  siteName: process.env.SITE_NAME || '6 Club',
  siteUrl: (process.env.SITE_URL || 'https://6club.org.in').replace(/\/$/, ''),
  tagline: 'One ID. All Games.',
  defaultDescription:
    '6 Club gives players across India instant access to live casino tables, slot reels, lottery draws, sports markets and crash games, with same-day withdrawals, verified fair-play odds and a rewards ladder that pays back every session.',
  contactEmail: process.env.CONTACT_EMAIL || 'support@6club.org.in',
  social: {
    twitter: '@6club',
    facebook: 'https://www.facebook.com/6club',
    instagram: 'https://www.instagram.com/6club',
    telegram: 'https://t.me/6club'
  },
  logo: '/images/logo.png',
  ogImage: '/images/og-cover.jpg',
  themeColor: '#F4C84A',
  locale: 'en_US',
  foundingYear: 2021,
  registerUrl: 'https://bdgwin98.com/#/register?invitationCode=136448806011',
  googleSiteVerification: 'wVWdHRlXfEvgqVx2FV9f_WEA5p_R7DCnhAso8LJA5Ac'
};

export type SiteConfig = typeof siteConfig;
