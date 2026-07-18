import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { TableOfContents } from '@/components/TableOfContents';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Cta } from '@/components/Cta';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, webPageSchema, faqSchema, itemListSchema } from '@/lib/schema';
import { buildBreadcrumbSchema } from '@/lib/breadcrumb';
import { createLinkifyTracker, linkifyBrandOnce } from '@/lib/linkify';
import { siteConfig as site } from '@/lib/site.config';
import pagesData from '@/data/pages.data';

export function generateStaticParams() {
  return Object.keys(pagesData).map((slug) => ({
    slug: slug.replace(/^\//, '').split('/')
  }));
}

function getPage(slugParts: string[]) {
  const path = `/${slugParts.join('/')}`;
  return { path, page: pagesData[path] };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const { path, page } = getPage(slug);
  if (!page) return {};
  return buildMeta({ title: page.metaTitle, description: page.metaDescription, path, keywords: page.keywords || [] });
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const { path, page } = getPage(slug);
  if (!page) notFound();

  const breadcrumb = [{ label: 'Home', url: '/' }, ...page.breadcrumbTrail, { label: page.h1, url: null }];

  const schemas = [
    organizationSchema(),
    webPageSchema({ title: page.metaTitle, description: page.metaDescription, path }),
    buildBreadcrumbSchema(breadcrumb),
    faqSchema(page.faqs || []),
    page.itemList
      ? itemListSchema({ items: page.itemList.map((item) => ({ name: item.label, url: `${site.siteUrl}${item.url}` })) })
      : null
  ];

  const tocHeadings = (page.sections || [])
    .map((section, i) => (section.heading ? { id: `section-${i}`, label: section.heading } : null))
    .filter((item): item is { id: string; label: string } => item !== null);
  const tocFaqs = (page.faqs || []).map((faq, i) => ({ id: `faq-item-${i}`, label: faq.q }));
  const linkTracker = createLinkifyTracker();

  return (
    <>
      <JsonLd schemas={schemas} />
      <Breadcrumb breadcrumb={breadcrumb} />
      <PageHero h1={page.h1} intro={page.intro || ''} pageEyebrow={page.eyebrow} />
      <TableOfContents headings={tocHeadings} faqs={tocFaqs} className="mx-auto mt-10 max-w-3xl px-5 lg:px-8" />

      {page.itemList && page.itemList.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 pt-10 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.itemList.map((item, i) => (
              <a key={i} href={item.url} className="card-surface p-5">
                <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-grey">{item.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}

      {page.sections && page.sections.length > 0 && (
        <article className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
          <div className="space-y-10">
            {page.sections.map((section, i) => (
              <div key={i} id={`section-${i}`} className="scroll-mt-24">
                {section.heading && (
                  <h2 className="mb-3 text-xl font-semibold text-white lg:text-2xl">{section.heading}</h2>
                )}
                {(section.paragraphs || []).map((p, pi) => (
                  <p key={pi} className="mb-4 text-sm leading-relaxed text-grey lg:text-base">
                    {linkifyBrandOnce(p, linkTracker)}
                  </p>
                ))}
                {section.list && section.list.length > 0 && (
                  <ul className="mb-4 list-inside list-disc space-y-2 text-sm text-grey lg:text-base">
                    {section.list.map((item, li) => (
                      <li key={li}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.image && (
                  <figure className="card-surface mx-auto mt-6 max-w-xs overflow-hidden p-3">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={800}
                      height={1448}
                      sizes="(min-width: 640px) 320px, 90vw"
                      className="w-full rounded-xl"
                    />
                    <figcaption className="mt-3 text-xs leading-relaxed text-grey">{section.image.caption}</figcaption>
                  </figure>
                )}
              </div>
            ))}
          </div>
        </article>
      )}

      {page.related && page.related.length > 0 && (
        <section className="mx-auto max-w-3xl px-5 pb-14 lg:px-8">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">Related BDG Win Pages</h2>
          <div className="flex flex-wrap gap-3">
            {page.related.map((link, i) => (
              <a
                key={i}
                href={link.url ?? '#'}
                className="rounded-full border border-goldline px-4 py-2 text-sm text-grey hover:border-gold hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      )}

      {page.faqs && page.faqs.length > 0 && (
        <FaqAccordion faqs={page.faqs} faqTitle={`${page.h1} FAQs`} faqHeadingId="page-faq" />
      )}

      <Cta />
    </>
  );
}
