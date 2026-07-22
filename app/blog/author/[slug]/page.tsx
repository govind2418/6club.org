import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BlogListingPage } from '@/components/blog/BlogListingPage';
import { buildBlogListing } from '@/lib/blog-listing';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, collectionPageSchema } from '@/lib/schema';
import * as blog from '@/data/blog.data';

export function generateStaticParams() {
  return blog.authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = blog.getAuthor(slug);
  if (!author) return {};
  return buildMeta({
    title: `Articles by ${author.name} | 6 Club Blog`,
    description: `6 Club blog articles written by ${author.name}, ${author.role}.`,
    path: `/blog/author/${author.slug}`
  });
}

export default async function BlogAuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = blog.getAuthor(slug);
  if (!author) notFound();

  const path = `/blog/author/${author.slug}`;
  const title = `Articles by ${author.name} | 6 Club Blog`;
  const description = `6 Club blog articles written by ${author.name}, ${author.role}.`;
  const listing = buildBlogListing({ posts: blog.getPostsByAuthor(author.slug), path, heading: author.name });
  const schemas = [organizationSchema(), collectionPageSchema({ title, description, path })];

  return <BlogListingPage eyebrow="Author" heading={author.name} path={path} listing={listing} schemas={schemas} />;
}
