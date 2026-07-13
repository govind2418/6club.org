import { Icon } from './Icon';

export interface GameCategoryItem {
  title: string;
  description: string;
  icon: string;
  url: string;
}

export function GameCategoryGrid({ categories }: { categories: GameCategoryItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat, i) => (
        <a key={i} href={cat.url} className="card-surface group relative overflow-hidden p-6">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-transparent text-gold">
            <Icon name={cat.icon} className="h-6 w-6" />
          </div>
          <h3 className="mb-1 text-base font-semibold text-white group-hover:text-gold">{cat.title}</h3>
          <p className="text-sm leading-relaxed text-grey">{cat.description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold btn-font">
            Explore <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </span>
        </a>
      ))}
    </div>
  );
}
