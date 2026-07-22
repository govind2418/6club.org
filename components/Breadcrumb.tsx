import type { BreadcrumbItem } from '@/lib/breadcrumb';

export function Breadcrumb({ breadcrumb }: { breadcrumb: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-goldline/60 bg-black/40 pt-20 lg:pt-24">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-3 text-xs text-grey lg:px-8">
        {breadcrumb.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.url ? (
              <a href={item.url} className="hover:text-gold">
                {item.label}
              </a>
            ) : (
              <span className="text-gold" aria-current="page">
                {item.label}
              </span>
            )}
            {index < breadcrumb.length - 1 && <span className="text-grey/40">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
