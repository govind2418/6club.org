import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { BlogListingPage } from '@/components/blog/BlogListingPage';
import { buildBlogListing, BLOG_PER_PAGE } from '@/lib/blog-listing';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, webPageSchema } from '@/lib/schema';
import * as blog from '@/data/blog.data';

const TITLE = 'BDG Win Blog – Guides, Tips and Platform Updates';
const DESCRIPTION =
  'The BDG Win blog covers game guides, payment tips, rewards explainers and responsible gaming articles.';
const PATH = '/blog';

export function generateStaticParams() {
  const totalPages = Math.max(1, Math.ceil(blog.getAllPosts().length / BLOG_PER_PAGE));
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({ page: String(i + 2) }));
}

export function generateMetadata(): Metadata {
  return buildMeta({ title: TITLE, description: DESCRIPTION, path: PATH });
}

export default async function BlogIndexPagePaginated({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  if (page === '1') redirect(PATH);

  const pageNum = parseInt(page, 10);
  const posts = blog.getAllPosts();
  const listing = buildBlogListing({ posts, path: PATH, heading: 'BDG Win Blog', page: pageNum });
  if (!pageNum || pageNum < 2 || pageNum > listing.pagination.totalPages) notFound();

  const schemas = [organizationSchema(), webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH })];

  return (
    <BlogListingPage eyebrow="BDG Win Blog" heading="BDG Win Blog" path={PATH} listing={listing} schemas={schemas} />
  );
}
