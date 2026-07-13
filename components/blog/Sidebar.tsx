import type { BlogTagCount } from '@/data/blog.data';

export interface SidebarCategory {
  slug: string;
  name: string;
  count: number;
}

export interface SidebarRecentPost {
  slug: string;
  title: string;
  date: string;
}

export function Sidebar({
  categories,
  tags,
  recentPosts
}: {
  categories: SidebarCategory[];
  tags: BlogTagCount[];
  recentPosts: SidebarRecentPost[];
}) {
  return (
    <aside className="space-y-8">
      <div className="card-surface p-6">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">Categories</h2>
        <ul className="space-y-2 text-sm text-grey">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <a href={`/blog/category/${cat.slug}`} className="flex items-center justify-between hover:text-gold">
                <span>{cat.name}</span>
                <span className="text-xs text-grey/60">{cat.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-surface p-6">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag.slug}
              href={`/blog/tag/${tag.slug}`}
              className="rounded-full border border-goldline px-3 py-1 text-xs text-grey hover:border-gold hover:text-gold"
            >
              {tag.name}
            </a>
          ))}
        </div>
      </div>

      <div className="card-surface p-6">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">Recent Posts</h2>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`} className="text-sm font-medium text-white hover:text-gold">
                {post.title}
              </a>
              <p className="mt-1 text-xs text-grey/70">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
