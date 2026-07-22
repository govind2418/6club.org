import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { buildMeta } from '@/lib/seo';

export const metadata: Metadata = buildMeta({
  title: 'Page Not Found | 6 Club',
  description:
    'The page you were looking for is not part of the 6 Club platform. Browse our casino, slot, lottery and sports game categories or head back to the homepage.',
  noindex: true
});

export default function NotFound() {
  return (
    <>
      <Breadcrumb breadcrumb={[{ label: 'Home', url: '/' }, { label: 'Not Found', url: null }]} />
      <section className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-5 py-20 text-center lg:px-8">
        <p className="section-eyebrow">404</p>
        <h1 className="text-balance mt-4 text-3xl font-bold text-white lg:text-4xl">
          This 6 Club page could not be found.
        </h1>
        <p className="mt-4 max-w-md text-sm text-grey">
          The page you were looking for may have moved. Browse our game categories or head back to the 6 Club
          homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="/" className="btn-gold">
            Back to Home
          </a>
          <a href="/games" className="btn-outline">
            Browse Games
          </a>
        </div>
      </section>
    </>
  );
}
