'use client';

import { useEffect, useRef, useState } from 'react';

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(`0${suffix}`);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(value * eased);
        setDisplay(
          progress < 1 ? current.toLocaleString('en-IN') + suffix : value.toLocaleString('en-IN') + suffix
        );
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref}>
      {display}
    </span>
  );
}

export function Stats({ stats }: { stats: StatItem[] }) {
  return (
    <section className="border-y border-goldline bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <p className="gold-text font-heading text-3xl font-bold lg:text-4xl">
              <StatCounter value={stat.value} suffix={stat.suffix || ''} />
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-grey lg:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
