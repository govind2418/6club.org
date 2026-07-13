import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { siteConfig } from '@/lib/site.config';
import navData from '@/data/nav.data';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.siteName,
  description: siteConfig.defaultDescription,
  verification: {
    google: siteConfig.googleSiteVerification
  },
  icons: {
    icon: [
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/images/apple-touch-icon.png'
  }
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: 'dark'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-white antialiased pb-20 lg:pb-0">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header primary={navData.primary} />
        <main id="main-content">{children}</main>
        <Footer nav={navData} />
        <MobileStickyCta />
      </body>
    </html>
  );
}
