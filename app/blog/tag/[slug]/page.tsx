import type { Metadata } from 'next';
import { BlogListingPage } from '@/components/blog/BlogListingPage';
import { buildBlogListing } from '@/lib/blog-listing';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, webPageSchema } from '@/lib/schema';
import * as blog from '@/data/blog.data';

function tagName(tagSlug: string) {
  return tagSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generateStaticParams() {
  return blog.getAllTags().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = tagName(slug);
  return buildMeta({
    title: `${name} Articles | BDG Win Blog`,
    description: `BDG Win blog articles tagged ${name}.`,
    path: `/blog/tag/${slug}`
  });
}

export default async function BlogTagPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: tagSlug } = await params;
  const name = tagName(tagSlug);
  const path = `/blog/tag/${tagSlug}`;
  const title = `${name} Articles | BDG Win Blog`;
  const description = `BDG Win blog articles tagged ${name}.`;
  const listing = buildBlogListing({ posts: blog.getPostsByTag(tagSlug), path, heading: `#${name}` });
  const schemas = [organizationSchema(), webPageSchema({ title, description, path })];

  return <BlogListingPage eyebrow="Tag" heading={`#${name}`} path={path} listing={listing} schemas={schemas} />;
}
