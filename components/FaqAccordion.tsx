'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icon';

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({
  faqs,
  faqTitle = 'Frequently Asked Questions',
  faqHeadingId = 'faq-heading'
}: {
  faqs: FaqItem[];
  faqTitle?: string;
  faqHeadingId?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Opens the matching FAQ item when a table-of-contents link (#faq-item-N) is followed,
  // since the accordion answer is collapsed by default and a bare anchor jump wouldn't reveal it.
  useEffect(() => {
    const openFromHash = () => {
      const match = window.location.hash.match(/^#faq-item-(\d+)$/);
      if (match) setOpenIndex(Number(match[1]));
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8" aria-labelledby={faqHeadingId}>
      <div className="mb-10 text-center">
        <p className="section-eyebrow">FAQs</p>
        <h2 id={faqHeadingId} className="mt-3 text-2xl font-semibold text-white lg:text-3xl">
          {faqTitle}
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} id={`faq-item-${index}`} data-open={isOpen} className="card-surface overflow-hidden scroll-mt-24">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-sm font-semibold text-white lg:text-base">{faq.q}</span>
                <Icon name="plus" className="h-4 w-4 shrink-0 text-gold" />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="overflow-hidden px-5 text-sm leading-relaxed text-grey transition-[max-height] duration-300"
                style={{ maxHeight: isOpen ? '1000px' : '0px' }}
              >
                <p className="pb-5">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
