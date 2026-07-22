import type { ReactNode } from 'react';

export function PageHero({
  h1,
  intro,
  pageEyebrow
}: {
  h1: string;
  intro: ReactNode;
  pageEyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-goldline pb-14 pt-32 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 20% -10%, rgba(244,200,74,.14), transparent 55%)' }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="section-eyebrow">{pageEyebrow ?? '6 Club'}</p>
        <h1 className="text-balance mt-4 text-3xl font-bold text-white lg:text-5xl">{h1}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-grey lg:text-base">{intro}</p>
      </div>
    </section>
  );
}
