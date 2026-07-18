/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    minimumCacheTTL: 31536000,
    deviceSizes: [128, 256, 384, 640, 750, 828, 1080, 1200, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 112, 128, 256],
    qualities: [60, 75],
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/terms', destination: '/terms-conditions', permanent: true }
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ]
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
      }
    ];
  }
};

module.exports = nextConfig;
