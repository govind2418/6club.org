export function Newsletter() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 text-center lg:px-8">
      <div className="card-surface p-8 lg:p-10">
        <p className="section-eyebrow">Stay Updated</p>
        <h2 className="mt-3 text-xl font-semibold text-white lg:text-2xl">
          Get 6 Club News, Bonus Codes &amp; Updates
        </h2>
        <p className="mt-2 text-sm text-grey">
          Subscribe for new game launches, promotion alerts and gift code drops from 6 Club.
        </p>
        <form method="post" action="/newsletter" className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-full border border-goldline bg-black/40 px-5 py-3 text-sm text-white placeholder:text-grey/60 focus:border-gold"
          />
          <button type="submit" className="btn-gold whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
