require('dotenv').config();

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT, 10) || 3000,
  SITE_URL: (process.env.SITE_URL || 'https://bdgwin.ai').replace(/\/$/, ''),
  SITE_NAME: process.env.SITE_NAME || 'BDG Win',
  CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'support@bdgwin.ai',
  TRUST_PROXY: process.env.TRUST_PROXY || '1',
  isProd: (process.env.NODE_ENV || 'development') === 'production'
};

module.exports = env;
