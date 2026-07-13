import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { Icon } from '@/components/Icon';
import { GameCategoryGrid } from '@/components/GameCategoryGrid';
import { FeatureGrid } from '@/components/FeatureGrid';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { TableOfContents } from '@/components/TableOfContents';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Cta } from '@/components/Cta';
import { buildMeta } from '@/lib/seo';
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  webPageSchema,
  faqSchema
} from '@/lib/schema';
import homeData from '@/data/home.data';

export const metadata: Metadata = buildMeta({
  title: 'BDG Win – Play Casino, Slots, Lottery & Sports Games Online',
  description:
    'BDG Win is an online gaming platform for casino, slots, lottery, sports and crash games. Register in minutes, deposit securely and claim daily, weekly and VIP rewards.',
  path: '/',
  type: 'website',
  keywords: ['BDG Win', 'BDG Win Game', 'BDG Win App', 'BDG Win Login', 'BDG Win Register', 'BDG Win Bonus']
});

export default function HomePage() {
  const schemas = [
    organizationSchema(),
    websiteSchema(),
    softwareApplicationSchema(),
    webPageSchema({ title: metadata.title as string, description: metadata.description as string, path: '/' }),
    faqSchema(homeData.faqs)
  ];

  const homeToc = [
    { id: 'section-categories', label: 'Every BDG Win Game, One Account' },
    { id: 'section-features', label: 'Built for Fast, Secure Play' },
    { id: 'section-why-choose-us', label: 'What Sets BDG Win Apart' },
    { id: 'section-rewards', label: 'A Reward for Every Stage of Play' },
    { id: 'section-referral', label: 'Earn by Inviting Friends to BDG Win' },
    { id: 'section-download', label: 'Take BDG Win With You' },
    { id: 'section-security', label: 'Your BDG Win Account, Protected' }
  ];
  const homeFaqToc = homeData.faqs.map((faq, i) => ({ id: `faq-item-${i}`, label: faq.q }));

  return (
    <>
      <JsonLd schemas={schemas} />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-32 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 22% 20%, rgba(244,197,66,.16), transparent 55%), radial-gradient(circle at 82% 60%, rgba(139,94,23,.18), transparent 50%)'
          }}
        />

        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="particle h-1.5 w-1.5 animate-drift" style={{ left: '8%', bottom: '10%', animationDelay: '0s' }} />
          <span className="particle h-1 w-1 animate-drift" style={{ left: '18%', bottom: '20%', animationDelay: '1.4s' }} />
          <span className="particle h-2 w-2 animate-drift" style={{ left: '32%', bottom: '5%', animationDelay: '2.8s' }} />
          <span className="particle h-1 w-1 animate-drift" style={{ left: '60%', bottom: '15%', animationDelay: '.8s' }} />
          <span className="particle h-1.5 w-1.5 animate-drift" style={{ left: '74%', bottom: '8%', animationDelay: '3.6s' }} />
          <span className="particle h-1 w-1 animate-drift" style={{ left: '90%', bottom: '22%', animationDelay: '2s' }} />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <div className="fade-in text-center lg:text-left">
            <p className="section-eyebrow">Online Gaming Platform</p>
            <h1 className="text-balance mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="gold-text">BDG Win</span>
              <br />
              Play Bold. Win Big.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">
              BDG Win brings casino tables, slot reels, lottery draws, sports markets and crash games into a
              single secure account. Register in under a minute, deposit through verified payment methods and
              track every reward from one dashboard built for fast, modern play.
            </p>

            <ul className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-grey lg:mx-0 lg:justify-start">
              <li className="flex items-center gap-2">
                <Icon name="zap" className="h-4 w-4 text-gold" /> Fast Registration
              </li>
              <li className="flex items-center gap-2">
                <Icon name="shield-check" className="h-4 w-4 text-gold" /> Secure Platform
              </li>
              <li className="flex items-center gap-2">
                <Icon name="sparkles" className="h-4 w-4 text-gold" /> Modern Experience
              </li>
              <li className="flex items-center gap-2">
                <Icon name="gift" className="h-4 w-4 text-gold" /> Premium Rewards
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="/register" className="btn-gold animate-pulseGlow">
                Register on BDG Win
              </a>
              <a href="/login" className="btn-outline">
                Login
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-md items-center justify-center lg:max-w-none">
            <div className="animate-floaty">
              <Image
                src="/images/hero-visual.png"
                alt="BDG Win gold trophy, casino chips and coins"
                width={640}
                height={720}
                className="h-auto w-full max-w-md drop-shadow-[0_20px_60px_rgba(244,197,66,.25)] lg:max-w-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <TableOfContents headings={homeToc} faqs={homeFaqToc} className="mx-auto mb-0 max-w-7xl px-5 lg:px-8" />

      {/* Game Categories */}
      <section id="section-categories" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-eyebrow">Game Categories</p>
          <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">Every BDG Win Game, One Account</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-grey">
            From live casino tables to BDG Win Color Prediction rounds, pick a category and jump straight in.
          </p>
        </div>
        <GameCategoryGrid categories={homeData.categories} />
      </section>

      {/* Features */}
      <section id="section-features" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">Why Players Choose BDG Win</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">Built for Fast, Secure Play</h2>
          </div>
          <FeatureGrid features={homeData.features} gridCols={4} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="section-why-choose-us" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">What Sets BDG Win Apart</h2>
        </div>
        <FeatureGrid features={homeData.whyChooseUs} gridCols={4} />
      </section>

      {/* Statistics */}
      <Stats stats={homeData.stats} />

      {/* Rewards */}
      <section id="section-rewards" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-eyebrow">BDG Win Rewards</p>
          <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">A Reward for Every Stage of Play</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-grey">
            BDG Win rewards active players with daily streaks, weekly cashback, monthly milestones and a VIP
            ladder that unlocks faster withdrawals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeData.rewards.map((r, i) => (
            <a key={i} href={r.url} className="card-surface p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Icon name={r.icon} className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{r.title}</h3>
              <p className="text-sm leading-relaxed text-grey">{r.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Referral Program */}
      <section id="section-referral" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="section-eyebrow">Referral Program</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">
              Earn by Inviting Friends to BDG Win
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-grey">
              Share your BDG Win referral link, and earn a share of your invited friends&apos; activity for as
              long as they play. Track invites, pending earnings and paid-out totals from your account
              dashboard.
            </p>
            <a href="/referral-program" className="btn-gold mt-6 inline-flex">
              View Referral Program
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card-surface p-6 text-center">
              <p className="gold-text text-3xl font-bold">1</p>
              <p className="mt-2 text-xs text-grey">Share your link</p>
            </div>
            <div className="card-surface p-6 text-center">
              <p className="gold-text text-3xl font-bold">2</p>
              <p className="mt-2 text-xs text-grey">Friend registers</p>
            </div>
            <div className="card-surface p-6 text-center">
              <p className="gold-text text-3xl font-bold">3</p>
              <p className="mt-2 text-xs text-grey">They play games</p>
            </div>
            <div className="card-surface p-6 text-center">
              <p className="gold-text text-3xl font-bold">4</p>
              <p className="mt-2 text-xs text-grey">You earn rewards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section id="section-download" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 grid grid-cols-3 gap-4 lg:order-1">
            <div className="card-surface flex flex-col items-center gap-3 p-6 text-center">
              <Icon name="smartphone" className="h-7 w-7 text-gold" />
              <p className="text-xs text-grey">Android APK</p>
            </div>
            <div className="card-surface flex flex-col items-center gap-3 p-6 text-center">
              <Icon name="apple" className="h-7 w-7 text-gold" />
              <p className="text-xs text-grey">iOS Guide</p>
            </div>
            <div className="card-surface flex flex-col items-center gap-3 p-6 text-center">
              <Icon name="monitor" className="h-7 w-7 text-gold" />
              <p className="text-xs text-grey">Desktop</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="section-eyebrow">Download BDG Win</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">Take BDG Win With You</h2>
            <p className="mt-4 text-sm leading-relaxed text-grey">
              Install the BDG Win APK on Android, follow our iOS installation guide, or play instantly from any
              desktop browser without downloading anything.
            </p>
            <a href="/download" className="btn-gold mt-6 inline-flex">
              Get the BDG Win App
            </a>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="section-security" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="section-eyebrow">Security</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">Your BDG Win Account, Protected</h2>
            <p className="mt-4 text-sm leading-relaxed text-grey">
              BDG Win protects every account with encrypted sessions, verified payment partners and withdrawal
              checks. Read our full Security and Fair Play pages for details on how outcomes and payouts are
              verified.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/security" className="btn-outline">
                Security Details
              </a>
              <a href="/fair-play" className="btn-outline">
                Fair Play
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card-surface p-6">
              <Icon name="lock" className="h-6 w-6 text-gold" />
              <p className="mt-3 text-sm font-semibold text-white">Encrypted Sessions</p>
            </div>
            <div className="card-surface p-6">
              <Icon name="badge-check" className="h-6 w-6 text-gold" />
              <p className="mt-3 text-sm font-semibold text-white">Verified Payments</p>
            </div>
            <div className="card-surface p-6">
              <Icon name="eye" className="h-6 w-6 text-gold" />
              <p className="mt-3 text-sm font-semibold text-white">Fair Play Audits</p>
            </div>
            <div className="card-surface p-6">
              <Icon name="life-buoy" className="h-6 w-6 text-gold" />
              <p className="mt-3 text-sm font-semibold text-white">Responsible Gaming Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={homeData.testimonials} />

      {/* FAQs */}
      <FaqAccordion faqs={homeData.faqs} faqTitle="BDG Win Frequently Asked Questions" faqHeadingId="home-faq" />

      {/* CTA */}
      <Cta
        ctaEyebrow="Get Started"
        ctaTitle="Create Your BDG Win Account Today"
        ctaDescription="Registration takes under a minute. Verify your number, claim your welcome bonus and choose a game category to begin."
        ctaPrimaryLabel="Register on BDG Win"
        ctaPrimaryUrl="/register"
        ctaSecondaryLabel="Login to Your Account"
        ctaSecondaryUrl="/login"
      />
    </>
  );
}
