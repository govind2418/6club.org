import { Icon } from './Icon';

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export function FeatureGrid({ features, gridCols = 4 }: { features: FeatureItem[]; gridCols?: 2 | 3 | 4 }) {
  const gridColsClass = gridCols === 2 ? 'lg:grid-cols-2' : gridCols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4';

  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${gridColsClass}`}>
      {features.map((feature, i) => (
        <div key={i} className="card-surface fade-in p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
            <Icon name={feature.icon} className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-base font-semibold text-white">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-grey">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
