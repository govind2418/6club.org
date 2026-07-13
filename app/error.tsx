'use client';

import { useEffect } from 'react';
import { Breadcrumb } from '@/components/Breadcrumb';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Breadcrumb breadcrumb={[{ label: 'Home', url: '/' }, { label: 'Error', url: null }]} />
      <section className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-5 py-20 text-center lg:px-8">
        <p className="section-eyebrow">Error</p>
        <h1 className="text-balance mt-4 text-3xl font-bold text-white lg:text-4xl">
          Something went wrong on our end. Please try again shortly.
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button type="button" onClick={reset} className="btn-gold">
            Try Again
          </button>
          <a href="/" className="btn-outline">
            Back to Home
          </a>
        </div>
      </section>
    </>
  );
}
