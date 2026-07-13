import type { BlogAuthor } from '@/data/blog.data';

export function AuthorBio({ author }: { author: BlogAuthor }) {
  return (
    <div className="card-surface mt-12 flex items-start gap-4 p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-lg font-semibold text-gold">
        {author.name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-semibold text-white">
          <a href={`/blog/author/${author.slug}`} className="hover:text-gold">
            {author.name}
          </a>
        </p>
        <p className="text-xs text-grey">Author</p>
        <p className="mt-2 text-sm text-grey">{author.bio}</p>
      </div>
    </div>
  );
}
