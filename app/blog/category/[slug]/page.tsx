import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BlogListingPage } from '@/components/blog/BlogListingPage';
import { buildBlogListing } from '@/lib/blog-listing';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, collectionPageSchema } from '@/lib/schema';
import * as blog from '@/data/blog.data';

export function generateStaticParams() {
  return blog.categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = blog.getCategory(slug);
  if (!category) return {};
  return buildMeta({
    title: `${category.name} Articles | BDG Win Blog`,
    description: `Read BDG Win blog articles filed under ${category.name}.`,
    path: `/blog/category/${category.slug}`
  });
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = blog.getCategory(slug);
  if (!category) notFound();

  const path = `/blog/category/${category.slug}`;
  const title = `${category.name} Articles | BDG Win Blog`;
  const description = `Read BDG Win blog articles filed under ${category.name}.`;
  const listing = buildBlogListing({ posts: blog.getPostsByCategory(category.slug), path, heading: category.name });
  const schemas = [organizationSchema(), collectionPageSchema({ title, description, path })];

  return <BlogListingPage eyebrow="Category" heading={category.name} path={path} listing={listing} schemas={schemas} />;
}
