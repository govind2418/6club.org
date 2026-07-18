import { JsonLd } from '@/components/JsonLd';
import { Breadcrumb } from '@/components/Breadcrumb';
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';
import { Sidebar } from './Sidebar';
import { Newsletter } from './Newsletter';
import { buildBreadcrumbSchema } from '@/lib/breadcrumb';
import { itemListSchema } from '@/lib/schema';
import { siteConfig as site } from '@/lib/site.config';
import type { BlogListingResult } from '@/lib/blog-listing';

export function BlogListingPage({
  eyebrow,
  heading,
  path,
  listing,
  schemas
}: {
  eyebrow: string;
  heading: string;
  path: string;
  listing: BlogListingResult;
  schemas: (object | null)[];
}) {
  const { pagination, breadcrumb, categories, tags, recentPosts } = listing;

  const allSchemas = [
    ...schemas,
    buildBreadcrumbSchema(breadcrumb),
    itemListSchema({
      items: pagination.items.map((post) => ({ name: post.title, url: `${site.siteUrl}/blog/${post.slug}` }))
    })
  ];

  return (
    <>
      <JsonLd schemas={allSchemas} />
      <Breadcrumb breadcrumb={breadcrumb} />

      <section className="relative overflow-hidden border-b border-goldline pb-12 pt-32 lg:pt-40">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1 className="text-balance mt-4 text-3xl font-bold text-white lg:text-5xl">{heading}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            {!pagination.items.length && <p className="text-sm text-grey">No articles found in this section yet.</p>}
            <div className="grid gap-6 sm:grid-cols-2">
              {pagination.items.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            <Pagination pagination={pagination} baseUrl={path} />
          </div>

          <Sidebar categories={categories} tags={tags} recentPosts={recentPosts} />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
