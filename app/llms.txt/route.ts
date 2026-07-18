import { NextResponse } from 'next/server';
import { siteConfig as site } from '@/lib/site.config';
import pagesData from '@/data/pages.data';
import * as blog from '@/data/blog.data';

export const dynamic = 'force-static';

/**
 * llms.txt (see llmstxt.org) gives AI answer engines and agent crawlers a compact,
 * structured map of the site so they can cite BDG Win accurately instead of guessing
 * from partial crawls. Built from the same page/blog data that drives sitemap.xml.
 */
export async function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.siteName}`);
  lines.push('');
  lines.push(`> ${site.defaultDescription}`);
  lines.push('');
  lines.push(
    'BDG Win is an online gaming platform covering casino, slot, lottery, Color Prediction, sports, ' +
      'crash, fishing and arcade games under a single account, wallet and rewards system.'
  );
  lines.push('');

  const section = (title: string, entries: { label: string; path: string; description: string }[]) => {
    lines.push(`## ${title}`);
    entries.forEach(({ label, path, description }) => {
      lines.push(`- [${label}](${site.siteUrl}${path}): ${description}`);
    });
    lines.push('');
  };

  section('Account', [
    { label: 'Register', path: '/register', description: pagesData['/register'].metaDescription },
    { label: 'Login', path: '/login', description: pagesData['/login'].metaDescription },
    { label: 'Forgot Password', path: '/forgot-password', description: pagesData['/forgot-password'].metaDescription },
    { label: 'Download', path: '/download', description: pagesData['/download'].metaDescription }
  ]);

  section('Games', [
    { label: 'Game Categories', path: '/games', description: pagesData['/games'].metaDescription },
    { label: 'Casino Games', path: '/games/casino', description: pagesData['/games/casino'].metaDescription },
    { label: 'Slot Games', path: '/games/slots', description: pagesData['/games/slots'].metaDescription },
    {
      label: 'Lottery & Color Prediction',
      path: '/games/lottery',
      description: pagesData['/games/lottery'].metaDescription
    },
    { label: 'Sports Games', path: '/games/sports', description: pagesData['/games/sports'].metaDescription },
    { label: 'Crash Games', path: '/games/crash', description: pagesData['/games/crash'].metaDescription },
    { label: 'Fishing Games', path: '/games/fishing', description: pagesData['/games/fishing'].metaDescription },
    { label: 'Arcade Games', path: '/games/arcade', description: pagesData['/games/arcade'].metaDescription },
    { label: 'Popular Games', path: '/games/popular', description: pagesData['/games/popular'].metaDescription }
  ]);

  section('Rewards & Programs', [
    { label: 'Rewards', path: '/rewards', description: pagesData['/rewards'].metaDescription },
    { label: 'VIP Program', path: '/vip', description: pagesData['/vip'].metaDescription },
    { label: 'Promotions', path: '/promotions', description: pagesData['/promotions'].metaDescription },
    { label: 'Gift Code', path: '/gift-code', description: pagesData['/gift-code'].metaDescription },
    {
      label: 'Referral Program',
      path: '/referral-program',
      description: pagesData['/referral-program'].metaDescription
    },
    {
      label: 'Affiliate Program',
      path: '/affiliate-program',
      description: pagesData['/affiliate-program'].metaDescription
    },
    { label: 'Agent Program', path: '/agent-program', description: pagesData['/agent-program'].metaDescription }
  ]);

  section('Payments & Security', [
    { label: 'Payment Methods', path: '/payment-methods', description: pagesData['/payment-methods'].metaDescription },
    { label: 'Deposit Guide', path: '/deposit-guide', description: pagesData['/deposit-guide'].metaDescription },
    {
      label: 'Withdrawal Guide',
      path: '/withdrawal-guide',
      description: pagesData['/withdrawal-guide'].metaDescription
    },
    { label: 'Security', path: '/security', description: pagesData['/security'].metaDescription },
    { label: 'Fair Play', path: '/fair-play', description: pagesData['/fair-play'].metaDescription },
    {
      label: 'Responsible Gaming',
      path: '/responsible-gaming',
      description: pagesData['/responsible-gaming'].metaDescription
    }
  ]);

  section(
    'Blog',
    blog.getAllPosts().map((post) => ({ label: post.title, path: `/blog/${post.slug}`, description: post.excerpt }))
  );

  section('Support & Policies', [
    { label: 'FAQs', path: '/faqs', description: pagesData['/faqs'].metaDescription },
    { label: 'Help Center', path: '/help-center', description: pagesData['/help-center'].metaDescription },
    { label: 'Contact', path: '/contact', description: pagesData['/contact'].metaDescription },
    { label: 'Privacy Policy', path: '/privacy-policy', description: pagesData['/privacy-policy'].metaDescription },
    { label: 'Terms & Conditions', path: '/terms', description: pagesData['/terms'].metaDescription }
  ]);

  return new NextResponse(lines.join('\n').trim() + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
