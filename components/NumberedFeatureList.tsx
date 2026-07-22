export interface NumberedFeatureItem {
  title: string;
  description: string;
}

export function NumberedFeatureList({
  bannerTitle,
  intro,
  pillLabel,
  items
}: {
  bannerTitle: string;
  intro: string;
  pillLabel: string;
  items: NumberedFeatureItem[];
}) {
  return (
    <div className="mx-auto max-w-4xl">
      <div
        className="rounded-2xl px-6 py-5 text-center shadow-glow"
        style={{ background: 'linear-gradient(135deg, var(--gold-100), var(--gold), var(--gold-mid))' }}
      >
        <h2 className="text-xl font-bold text-bg lg:text-2xl">{bannerTitle}</h2>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-grey lg:text-base">{intro}</p>
      <div className="mt-6 text-center">
        <span className="inline-block rounded-full border border-goldline px-5 py-2 text-sm font-semibold text-gold">
          {pillLabel}
        </span>
      </div>
      <div className="mt-8 space-y-4">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-xl border border-goldline border-l-4 border-l-gold bg-card/40 p-5 transition-colors duration-300 hover:border-l-gold-100 hover:bg-card/70"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-heading text-sm font-bold text-bg">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-grey lg:text-base">
              <span className="font-semibold text-white">{item.title}</span> : {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
