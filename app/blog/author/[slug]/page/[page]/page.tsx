import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { BlogListingPage } from '@/components/blog/BlogListingPage';
import { buildBlogListing, BLOG_PER_PAGE } from '@/lib/blog-listing';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, collectionPageSchema } from '@/lib/schema';
import * as blog from '@/data/blog.data';

export function generateStaticParams() {
  const params: { slug: string; page: string }[] = [];
  blog.authors.forEach((a) => {
    const count = blog.getPostsByAuthor(a.slug).length;
    const totalPages = Math.max(1, Math.ceil(count / BLOG_PER_PAGE));
    for (let p = 2; p <= totalPages; p++) params.push({ slug: a.slug, page: String(p) });
  });
  return params;
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const author = blog.getAuthor(params.slug);
  if (!author) return {};
  return buildMeta({
    title: `Articles by ${author.name} | BDG Win Blog`,
    description: `BDG Win blog articles written by ${author.name}, ${author.role}.`,
    path: `/blog/author/${author.slug}`
  });
}

export default async function BlogAuthorPagePaginated({
  params
}: {
  params: Promise<{ slug: string; page: string }>;
}) {
  const { slug, page } = await params;
  const author = blog.getAuthor(slug);
  if (!author) notFound();

  const path = `/blog/author/${author.slug}`;
  if (page === '1') redirect(path);

  const pageNum = parseInt(page, 10);
  const title = `Articles by ${author.name} | BDG Win Blog`;
  const description = `BDG Win blog articles written by ${author.name}, ${author.role}.`;
  const listing = buildBlogListing({
    posts: blog.getPostsByAuthor(author.slug),
    path,
    heading: author.name,
    page: pageNum
  });
  if (!pageNum || pageNum < 2 || pageNum > listing.pagination.totalPages) notFound();

  const schemas = [organizationSchema(), collectionPageSchema({ title, description, path })];

  return <BlogListingPage eyebrow="Author" heading={author.name} path={path} listing={listing} schemas={schemas} />;
}
