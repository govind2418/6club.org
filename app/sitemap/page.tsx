import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { TableOfContents } from '@/components/TableOfContents';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Cta } from '@/components/Cta';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, webPageSchema, faqSchema } from '@/lib/schema';
import { buildBreadcrumbSchema } from '@/lib/breadcrumb';
import { createLinkifyTracker, linkifyBrandOnce } from '@/lib/linkify';
import pagesData from '@/data/pages.data';
import navData from '@/data/nav.data';
import * as blog from '@/data/blog.data';

const page = pagesData['/sitemap'];

export const metadata: Metadata = buildMeta({
  title: page.metaTitle,
  description: page.metaDescription,
  path: '/sitemap',
  keywords: page.keywords || []
});

export default function SiteMapPage() {
  const breadcrumb = [{ label: 'Home', url: '/' }, { label: page.h1, url: null }];

  const schemas = [
    organizationSchema(),
    webPageSchema({ title: page.metaTitle, description: page.metaDescription, path: '/sitemap' }),
    buildBreadcrumbSchema(breadcrumb),
    faqSchema(page.faqs || [])
  ];

  const groups = [
    {
      label: 'Main',
      links: [
        { label: 'Home', url: '/' },
        { label: '6 Club Official Website Guide', url: '/6club' },
        { label: 'About', url: '/about-us' },
        { label: 'Features', url: '/features' },
        { label: 'Sister Sites', url: '/sister-sites' }
      ]
    },
    {
      label: 'Games',
      links: navData.footer.games.concat([
        { label: '6 Club Game Guide', url: '/6clubgame' },
        { label: 'Game Categories', url: '/games' },
        { label: 'New Games', url: '/games/new' }
      ])
    },
    {
      label: 'Rewards & VIP',
      links: [
        { label: 'Rewards', url: '/rewards' },
        { label: 'Daily Rewards', url: '/rewards/daily' },
        { label: 'Weekly Rewards', url: '/rewards/weekly' },
        { label: 'Monthly Rewards', url: '/rewards/monthly' },
        { label: 'VIP Program', url: '/vip' },
        { label: 'Promotions', url: '/promotions' },
        { label: 'Gift Codes', url: '/gift-code' }
      ]
    },
    {
      label: 'Earn With 6 Club',
      links: [
        { label: 'Referral Program', url: '/referral-program' },
        { label: 'Affiliate Program', url: '/affiliate-program' },
        { label: 'Agent Program', url: '/agent-program' }
      ]
    },
    { label: 'Account', links: navData.footer.account },
    { label: 'Support & Legal', links: navData.footer.support.concat(navData.footer.legal) },
    {
      label: 'Blog',
      links: [
        { label: 'All Articles', url: '/blog' },
        ...blog.categories.map((c) => ({ label: `Category: ${c.name}`, url: `/blog/category/${c.slug}` })),
        ...blog.authors.map((author) => ({ label: `Articles by ${author.name}`, url: `/blog/author/${author.slug}` })),
        ...blog.getAllTags().map((tag) => ({ label: `Tag: ${tag.name}`, url: `/blog/tag/${tag.slug}` })),
        ...blog.getAllPosts().map((post) => ({ label: post.title, url: `/blog/${post.slug}` }))
      ]
    }
  ];

  const listedUrls = new Set(groups.flatMap((group) => group.links.map((link) => link.url)));
  const unlistedPages = Object.entries(pagesData)
    .filter(([url]) => !listedUrls.has(url))
    .map(([url, entry]) => ({ label: entry.h1, url }));
  if (unlistedPages.length > 0) groups.push({ label: 'More Guides', links: unlistedPages });

  const tocHeadings = groups.map((group, i) => ({ id: `group-${i}`, label: group.label }));
  const tocFaqs = (page.faqs || []).map((faq, i) => ({ id: `faq-item-${i}`, label: faq.q }));

  return (
    <>
      <JsonLd schemas={schemas} />
      <Breadcrumb breadcrumb={breadcrumb} />
      <PageHero
        h1={page.h1}
        intro={linkifyBrandOnce(page.intro || '', createLinkifyTracker())}
        pageEyebrow={page.eyebrow}
      />
      <TableOfContents headings={tocHeadings} faqs={tocFaqs} className="mx-auto mt-10 max-w-6xl px-5 lg:px-8" />

      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <div key={i} id={`group-${i}`} className="card-surface scroll-mt-24 p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">{group.label}</h2>
              <ul className="space-y-2 text-sm text-grey">
                {group.links.map((link, li) => (
                  <li key={li}>
                    <a href={link.url} className="hover:text-gold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {page.faqs && page.faqs.length > 0 && (
        <FaqAccordion faqs={page.faqs} faqTitle={`${page.h1} FAQs`} faqHeadingId="sitemap-faq" />
      )}

      <Cta />
    </>
  );
}
