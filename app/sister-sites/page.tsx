import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHero } from '@/components/PageHero';
import { Cta } from '@/components/Cta';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, webPageSchema } from '@/lib/schema';
import { buildBreadcrumbSchema } from '@/lib/breadcrumb';
import { createLinkifyTracker, linkifyBrandOnce } from '@/lib/linkify';

const PATH = '/sister-sites';
const TITLE = '6 Club Sister Sites – Partner Gaming Platforms';
const DESCRIPTION =
  '6 Club sister and partner gaming platforms, including Sikkim Game, DG Club, Daman Game and more.';

export const metadata: Metadata = buildMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ['6 Club Sister Sites', '6 Club Partners']
});

const sisterSites: { name: string; url: string }[] = [
  { name: 'Sikkim Game', url: 'https://sikkimgame.co.in' },
  { name: 'DG Club', url: 'https://dgclub.in' },
  { name: 'Daman Game', url: 'https://damangame.in' },
  { name: 'Diuwin', url: 'https://diuwin.in.net' },
  { name: 'IN999', url: 'https://in999.in.net' },
  { name: 'DMWin', url: 'https://dmwingame.in.net' },
  { name: 'Raja Game', url: 'https://rajaagame.com' },
  { name: 'Tashanwin', url: 'https://tasanwin.com' },
  { name: '91Club', url: 'https://91clubapp.com' },
  { name: '13L Game', url: 'https://13l.in' },
  { name: 'Raxiwin', url: 'https://rexigame.com' }
];

export default function SisterSitesPage() {
  const breadcrumb = [{ label: 'Home', url: '/' }, { label: 'Sister Sites', url: null }];

  const schemas = [
    organizationSchema(),
    webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH }),
    buildBreadcrumbSchema(breadcrumb)
  ];

  return (
    <>
      <JsonLd schemas={schemas} />
      <Breadcrumb breadcrumb={breadcrumb} />
      <PageHero
        h1="6 Club Sister Sites"
        intro={linkifyBrandOnce(
          '6 Club is part of a wider family of gaming platforms. Explore our sister and partner sites below.',
          createLinkifyTracker()
        )}
        pageEyebrow="Partners"
      />

      <section className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sisterSites.map((site) => (
            <a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="card-surface flex items-center justify-between gap-3 p-6"
            >
              <span className="text-base font-semibold text-white">{site.name}</span>
              <span className="btn-outline !px-4 !py-2 text-xs">Visit</span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs leading-relaxed text-grey/60">
          These are independent partner platforms. 6 Club is not responsible for the content, availability or
          practices of external sites linked above.
        </p>
      </section>

      <Cta />
    </>
  );
}
