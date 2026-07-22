import { Icon } from './Icon';

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export function Testimonials({ testimonials }: { testimonials: TestimonialItem[] }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-10 text-center">
        <p className="section-eyebrow">Player Voices</p>
        <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">What 6 Club Players Are Saying</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="card-surface p-6">
            <div className="mb-4 flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Icon key={starIndex} name="star" className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-sm leading-relaxed text-grey">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-sm font-semibold text-gold">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-grey">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
