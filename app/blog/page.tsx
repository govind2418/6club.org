import type { Metadata } from 'next';
import { BlogListingPage } from '@/components/blog/BlogListingPage';
import { buildBlogListing } from '@/lib/blog-listing';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, webPageSchema } from '@/lib/schema';
import * as blog from '@/data/blog.data';

const TITLE = 'BDG Win Blog – Guides, Tips and Platform Updates';
const DESCRIPTION =
  'The BDG Win blog covers game guides, payment tips, rewards explainers and responsible gaming articles.';
const PATH = '/blog';

export const metadata: Metadata = buildMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function BlogIndexPage() {
  const listing = buildBlogListing({ posts: blog.getAllPosts(), path: PATH, heading: 'BDG Win Blog' });
  const schemas = [organizationSchema(), webPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH })];

  return (
    <BlogListingPage eyebrow="BDG Win Blog" heading="BDG Win Blog" path={PATH} listing={listing} schemas={schemas} />
  );
}
