import { Icon } from './Icon';

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  url?: string;
}

export function FeatureGrid({ features, gridCols = 4 }: { features: FeatureItem[]; gridCols?: 2 | 3 | 4 }) {
  const gridColsClass = gridCols === 2 ? 'lg:grid-cols-2' : gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${gridColsClass}`}>
      {features.map((feature, i) => {
        const Tag = feature.url ? 'a' : 'div';
        return (
          <Tag
            key={i}
            {...(feature.url ? { href: feature.url } : {})}
            className="card-surface fade-in group relative block overflow-hidden p-6"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-4 select-none font-heading text-7xl font-bold text-gold/[.05] transition-colors duration-500 group-hover:text-gold/[.12]"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />

            <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 via-gold/10 to-transparent ring-1 ring-gold/30 transition-all duration-500 group-hover:ring-gold/60">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gold/20 opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
              <Icon name={feature.icon} className="h-6 w-6 text-gold" />
            </div>

            <h3 className="relative mb-2 text-base font-semibold text-white">{feature.title}</h3>
            <p className="relative text-sm leading-relaxed text-grey">{feature.description}</p>

            <span className="relative mt-4 block h-px w-10 bg-gradient-to-r from-gold via-gold/60 to-transparent transition-all duration-500 group-hover:w-16" />
          </Tag>
        );
      })}
    </div>
  );
}
