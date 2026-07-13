'use client';

import { useState } from 'react';
import { Icon } from './Icon';

export interface TocItem {
  id: string;
  label: string;
}

export function TableOfContents({
  headings = [],
  faqs = [],
  className = 'mx-auto mb-10 max-w-3xl px-5 lg:px-8'
}: {
  headings?: TocItem[];
  faqs?: TocItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  if (!headings.length && !faqs.length) return null;

  return (
    <div className={className}>
      <nav aria-label="Table of contents" className="card-surface p-6">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 text-left"
          aria-expanded={open}
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">On This Page</span>
          <Icon name="chevron-down" className={`h-4 w-4 shrink-0 text-gold transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="mt-4 space-y-4">
            {headings.length > 0 && (
              <ol className="space-y-2 text-sm text-grey">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="hover:text-gold">
                      {h.label}
                    </a>
                  </li>
                ))}
              </ol>
            )}

            {faqs.length > 0 && (
              <div>
                {headings.length > 0 && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold">FAQs</p>
                )}
                <ol className="space-y-2 text-sm text-grey">
                  {faqs.map((f) => (
                    <li key={f.id}>
                      <a href={`#${f.id}`} className="hover:text-gold">
                        {f.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
