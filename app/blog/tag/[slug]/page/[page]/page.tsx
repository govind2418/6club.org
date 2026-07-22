import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { BlogListingPage } from '@/components/blog/BlogListingPage';
import { buildBlogListing, BLOG_PER_PAGE } from '@/lib/blog-listing';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, collectionPageSchema } from '@/lib/schema';
import * as blog from '@/data/blog.data';

function tagName(tagSlug: string) {
  return tagSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generateStaticParams() {
  const params: { slug: string; page: string }[] = [];
  blog.getAllTags().forEach((t) => {
    const count = blog.getPostsByTag(t.slug).length;
    const totalPages = Math.max(1, Math.ceil(count / BLOG_PER_PAGE));
    for (let p = 2; p <= totalPages; p++) params.push({ slug: t.slug, page: String(p) });
  });
  return params;
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const name = tagName(params.slug);
  return buildMeta({
    title: `${name} Articles | 6 Club Blog`,
    description: `6 Club blog articles tagged ${name}.`,
    path: `/blog/tag/${params.slug}`
  });
}

export default async function BlogTagPagePaginated({ params }: { params: Promise<{ slug: string; page: string }> }) {
  const { slug: tagSlug, page } = await params;
  const path = `/blog/tag/${tagSlug}`;
  if (page === '1') redirect(path);

  const pageNum = parseInt(page, 10);
  const name = tagName(tagSlug);
  const title = `${name} Articles | 6 Club Blog`;
  const description = `6 Club blog articles tagged ${name}.`;
  const listing = buildBlogListing({ posts: blog.getPostsByTag(tagSlug), path, heading: `#${name}`, page: pageNum });
  if (!pageNum || pageNum < 2 || pageNum > listing.pagination.totalPages) notFound();

  const schemas = [organizationSchema(), collectionPageSchema({ title, description, path })];

  return <BlogListingPage eyebrow="Tag" heading={`#${name}`} path={path} listing={listing} schemas={schemas} />;
}
