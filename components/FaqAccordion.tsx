'use client';

import { useState } from 'react';
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
            <div key={index} data-open={isOpen} className="card-surface overflow-hidden">
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
