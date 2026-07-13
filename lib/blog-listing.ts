import { paginate, type Pagination } from './pagination';
import * as blog from '@/data/blog.data';
import type { BlogPost } from '@/data/blog.data';
import type { BreadcrumbItem } from './breadcrumb';

export const BLOG_PER_PAGE = 6;

export interface BlogListingParams {
  posts: BlogPost[];
  path: string;
  heading: string;
  page?: number;
}

export interface BlogListingResult {
  pagination: Pagination<BlogPost>;
  breadcrumb: BreadcrumbItem[];
  categories: ReturnType<typeof blog.getCategoriesWithCounts>;
  tags: ReturnType<typeof blog.getAllTags>;
  recentPosts: { slug: string; title: string; date: string }[];
}

export function buildBlogListing({ posts, path, heading, page = 1 }: BlogListingParams): BlogListingResult {
  const pagination = paginate(posts, page, BLOG_PER_PAGE);
  const breadcrumb: BreadcrumbItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Blog', url: path === '/blog' ? null : '/blog' },
    ...(path === '/blog' ? [] : [{ label: heading, url: null }])
  ];

  return {
    pagination,
    breadcrumb,
    categories: blog.getCategoriesWithCounts(),
    tags: blog.getAllTags().slice(0, 12),
    recentPosts: blog
      .getAllPosts()
      .slice(0, 5)
      .map((p) => ({ slug: p.slug, title: p.title, date: p.date }))
  };
}
