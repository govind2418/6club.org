import type { Metadata } from 'next';
import { BlogListingPage } from '@/components/blog/BlogListingPage';
import { buildBlogListing } from '@/lib/blog-listing';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, collectionPageSchema } from '@/lib/schema';
import * as blog from '@/data/blog.data';

const TITLE = '6 Club Blog – Guides, Tips and Platform Updates';
const DESCRIPTION =
  'The 6 Club blog covers game guides, payment tips, rewards explainers and responsible gaming articles.';
const PATH = '/blog';

export const metadata: Metadata = buildMeta({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function BlogIndexPage() {
  const listing = buildBlogListing({ posts: blog.getAllPosts(), path: PATH, heading: '6 Club Blog' });
  const schemas = [organizationSchema(), collectionPageSchema({ title: TITLE, description: DESCRIPTION, path: PATH })];

  return (
    <BlogListingPage eyebrow="6 Club Blog" heading="6 Club Blog" path={PATH} listing={listing} schemas={schemas} />
  );
}
