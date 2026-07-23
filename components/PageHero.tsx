import type { ReactNode } from 'react';
import Image from 'next/image';
import { Icon } from '@/components/Icon';

export function PageHero({
  h1,
  intro,
  pageEyebrow,
  lastUpdated
}: {
  h1: string;
  intro: ReactNode;
  pageEyebrow?: string;
  lastUpdated?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-goldline">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/page-header-cover.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-10 text-center lg:px-8 lg:pt-14 lg:text-left">
        <div className="heading-box">
          <p className="section-eyebrow">{pageEyebrow ?? '6 Club'}</p>
          <h1 className="text-balance mx-auto mt-2 max-w-2xl text-3xl font-bold text-white lg:mx-0 lg:text-5xl">
            {h1}
          </h1>
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">{intro}</p>
        {lastUpdated && (
          <p className="mx-auto mt-4 flex w-fit items-center gap-1.5 text-xs text-grey lg:mx-0">
            <Icon name="calendar-days" className="h-3.5 w-3.5 text-gold" />
            Last Updated: {lastUpdated}
          </p>
        )}
      </div>
    </section>
  );
}
