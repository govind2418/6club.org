import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { BlogListingPage } from '@/components/blog/BlogListingPage';
import { buildBlogListing, BLOG_PER_PAGE } from '@/lib/blog-listing';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, collectionPageSchema } from '@/lib/schema';
import * as blog from '@/data/blog.data';

export function generateStaticParams() {
  const params: { slug: string; page: string }[] = [];
  blog.categories.forEach((c) => {
    const count = blog.getPostsByCategory(c.slug).length;
    const totalPages = Math.max(1, Math.ceil(count / BLOG_PER_PAGE));
    for (let p = 2; p <= totalPages; p++) params.push({ slug: c.slug, page: String(p) });
  });
  return params;
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = blog.getCategory(params.slug);
  if (!category) return {};
  return buildMeta({
    title: `${category.name} Articles | 6 Club Blog`,
    description: `Read 6 Club blog articles filed under ${category.name}.`,
    path: `/blog/category/${category.slug}`
  });
}

export default async function BlogCategoryPagePaginated({
  params
}: {
  params: Promise<{ slug: string; page: string }>;
}) {
  const { slug, page } = await params;
  const category = blog.getCategory(slug);
  if (!category) notFound();

  const path = `/blog/category/${category.slug}`;
  if (page === '1') redirect(path);

  const pageNum = parseInt(page, 10);
  const title = `${category.name} Articles | 6 Club Blog`;
  const description = `Read 6 Club blog articles filed under ${category.name}.`;
  const listing = buildBlogListing({
    posts: blog.getPostsByCategory(category.slug),
    path,
    heading: category.name,
    page: pageNum
  });
  if (!pageNum || pageNum < 2 || pageNum > listing.pagination.totalPages) notFound();

  const schemas = [organizationSchema(), collectionPageSchema({ title, description, path })];

  return <BlogListingPage eyebrow="Category" heading={category.name} path={path} listing={listing} schemas={schemas} />;
}
