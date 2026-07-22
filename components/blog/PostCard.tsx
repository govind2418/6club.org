export function PostCard({ post }: { post: { slug: string; date: string; title: string; excerpt: string } }) {
  return (
    <a href={`/blog/${post.slug}`} className="card-surface flex flex-col overflow-hidden">
      <img
        src="/images/blog-cover.webp"
        alt=""
        width={800}
        height={450}
        loading="lazy"
        className="h-36 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-wide text-gold">{post.date}</p>
        <h2 className="mt-2 text-base font-semibold text-white">{post.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-grey">{post.excerpt}</p>
      </div>
    </a>
  );
}
