import Image from 'next/image';
import { Icon } from './Icon';

export interface GameCategoryItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
}

export function GameCategoryGrid({ categories }: { categories: GameCategoryItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat, i) => (
        <a key={i} href={cat.url} className="card-surface group relative overflow-hidden p-6">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-transparent">
            <Image src={cat.image} alt={cat.imageAlt} width={152} height={121} className="h-auto w-14 object-contain" />
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
