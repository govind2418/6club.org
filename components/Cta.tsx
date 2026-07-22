export function Cta({
  ctaEyebrow = 'Join 6 Club',
  ctaTitle = 'Create your 6 Club account and start playing today',
  ctaDescription = 'Registration takes under a minute. Verify your number, claim your welcome bonus and pick a game category to begin.',
  ctaPrimaryLabel = 'Register on 6 Club',
  ctaPrimaryUrl = '/register',
  ctaSecondaryLabel = 'Login to Your Account',
  ctaSecondaryUrl = '/login'
}: {
  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryUrl?: string;
}) {
  return (
    <section
      className="relative mx-auto my-10 max-w-6xl overflow-hidden rounded-3xl border border-goldline px-6 py-14 text-center lg:px-16"
      style={{ background: 'radial-gradient(circle at 50% 0%, rgba(244,200,74,.12), transparent 60%), #0B0B0D' }}
    >
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />

      <p className="section-eyebrow">{ctaEyebrow}</p>
      <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold text-white lg:text-3xl">{ctaTitle}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-grey">{ctaDescription}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href={ctaPrimaryUrl} className="btn-gold">
          {ctaPrimaryLabel}
        </a>
        <a href={ctaSecondaryUrl} className="btn-outline">
          {ctaSecondaryLabel}
        </a>
      </div>
    </section>
  );
}
