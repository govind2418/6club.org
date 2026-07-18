import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { Icon } from '@/components/Icon';
import { GameCategoryGrid } from '@/components/GameCategoryGrid';
import { FeatureGrid } from '@/components/FeatureGrid';
import { Testimonials } from '@/components/Testimonials';
import { TableOfContents } from '@/components/TableOfContents';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Cta } from '@/components/Cta';
import { buildMeta } from '@/lib/seo';
import { createLinkifyTracker, linkifyBrandOnce } from '@/lib/linkify';
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  webPageSchema,
  faqSchema
} from '@/lib/schema';
import homeData from '@/data/home.data';

export const metadata: Metadata = buildMeta({
  title: 'BDG Win | BDG Win Login, Register & BDG Game Platform',
  description:
    'BDG Win is an online gaming platform for casino, slots, lottery, sports and crash games. Register in minutes, deposit securely and claim daily, weekly and VIP rewards.',
  path: '/',
  type: 'website',
  keywords: [
    'BDG Win',
    'BDGWin',
    'BDG',
    'BDG Game',
    'BDG Play',
    'BDG Win Game',
    'BDG Win App',
    'BDG Win Login',
    'BDG Win Register',
    'BDG Win Bonus'
  ]
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
    { id: 'section-about', label: 'What Is BDG Win' },
    { id: 'section-categories', label: 'Every BDG Win Game, One Account' },
    { id: 'section-why-choose-us', label: 'What Sets BDG Win Apart' },
    { id: 'section-download', label: 'Take BDG Win With You' },
    { id: 'section-rewards', label: 'A Reward for Every Stage of Play' },
    { id: 'section-referral', label: 'Earn by Inviting Friends to BDG Win' },
    { id: 'section-security', label: 'Your BDG Win Account, Protected' },
    { id: 'section-getting-started', label: 'What to Expect in Your First Session' }
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
              {linkifyBrandOnce(
                'BDG Win brings casino tables, slot reels, lottery draws, sports markets and crash games into a single secure account. Register in under a minute, deposit through verified payment methods and track every reward from one dashboard built for fast, modern play.',
                createLinkifyTracker()
              )}
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
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <TableOfContents headings={homeToc} faqs={homeFaqToc} className="mx-auto mb-0 max-w-7xl px-5 lg:px-8" />

      {/* What Is BDG Win */}
      <section id="section-about" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="section-eyebrow text-center">Get Started</p>
          <h2 className="mt-3 text-center text-2xl font-semibold text-white lg:text-3xl">What Is BDG Win</h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-grey lg:text-base">
            <p>
              BDG Win is an online gaming platform that brings casino tables, slot reels, lottery draws, sports
              markets, crash rounds, fishing games and arcade titles into a single account. Instead of juggling
              separate logins for separate game types, you register once and use one wallet, one balance and one
              rewards ladder across every category on the site. The platform has been running since 2021, and
              game categories have been added over time based on what players actually use, so the current lineup
              reflects that history rather than a fixed catalog decided upfront. Whether you&apos;re placing a bet
              on a live match, watching a crash multiplier climb, or picking numbers in a lottery draw, the
              account and deposit process behind it stays exactly the same.
            </p>
            <p>
              Players often refer to the whole catalog collectively as &ldquo;BDG Game&rdquo; — it isn&apos;t a
              separate product, just shorthand for everything available inside a BDG Win account. That includes
              live-dealer casino tables, themed slot reels, fast-settling lottery and color prediction rounds,
              pre-match and live sports markets, crash games, skill-based fishing rounds and short arcade
              sessions. New categories get added to this same account structure rather than launched as
              standalone apps, so a player who registers for slots today can open a sports market or a lottery
              draw tomorrow without creating anything new or moving funds between wallets.
            </p>
            <p>
              Each category further down this page links to its own dedicated page with full rules, odds
              information and a direct way to start playing. Before you get there, here&apos;s how to log in,
              register and what the account itself is built around.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="card-surface overflow-hidden p-6">
            <Image
              src="/images/screenshots/login-screen.webp"
              alt="BDG Win login screen with phone number and password fields"
              width={800}
              height={1448}
              className="mb-4 w-full rounded-xl"
            />
            <h3 className="text-lg font-semibold text-white">BDG Win Login</h3>
            <p className="mt-2 text-sm leading-relaxed text-grey">
              Returning players sign in from the BDG Win Login page using their registered mobile number and
              password. Sessions are encrypted, and a password reset option sits directly on the login screen if
              you can&apos;t remember your credentials. Once logged in, every game category, your wallet balance
              and your reward status are all accessible from the same dashboard.
            </p>
            <a href="/login" className="btn-outline mt-4 inline-flex">
              Go to Login
            </a>
          </div>
          <div className="card-surface overflow-hidden p-6">
            <Image
              src="/images/screenshots/register-screen.webp"
              alt="BDG Win registration form asking for phone number, password and invite code"
              width={800}
              height={1448}
              className="mb-4 w-full rounded-xl"
            />
            <h3 className="text-lg font-semibold text-white">BDG Win Register</h3>
            <p className="mt-2 text-sm leading-relaxed text-grey">
              New players use the BDG Win Register page to create an account with a mobile number, a password and
              an OTP verification step that usually takes under a minute. There&apos;s no requirement to deposit
              immediately after registering — you can browse game categories first and fund your wallet whenever
              you&apos;re ready.
            </p>
            <a href="/register" className="btn-gold mt-4 inline-flex">
              Create an Account
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="section-eyebrow">Key Features</p>
          <h3 className="mt-3 text-xl font-semibold text-white lg:text-2xl">Built for Fast, Secure Play</h3>
        </div>
        <div className="mt-8">
          <FeatureGrid features={homeData.features} gridCols={4} />
        </div>
      </section>

      {/* Game Categories */}
      <section id="section-categories" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-eyebrow">Game Categories</p>
          <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">Every BDG Win Game, One Account</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-grey">
            From live casino tables to color prediction rounds, pick a category and jump straight in.
          </p>
        </div>
        <figure className="card-surface mx-auto mb-10 max-w-sm overflow-hidden p-3">
          <Image
            src="/images/screenshots/home-game-categories.webp"
            alt="BDG Win home screen with all game categories one tap away"
            width={800}
            height={1448}
            className="w-full rounded-xl"
          />
          <figcaption className="mt-3 text-center text-xs leading-relaxed text-grey">
            Every category — Popular, Lottery, Slots, Sports, Casino, Rummy, Fishing and more — sits one tap away
            from the BDG Win home screen.
          </figcaption>
        </figure>
        <GameCategoryGrid categories={homeData.categories} />
      </section>

      {/* Why Choose Us */}
      <section id="section-why-choose-us" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">Why Choose Us</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">What Sets BDG Win Apart</h2>
          </div>
          <FeatureGrid features={homeData.whyChooseUs} gridCols={4} />
          <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
            <figure className="card-surface overflow-hidden p-3">
              <Image
                src="/images/screenshots/live-chat-support.webp"
                alt="Live chat support inside the BDG Win app"
                width={800}
                height={1448}
                className="w-full rounded-xl"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-grey">
                Live chat support inside the BDG Win app, available around the clock for account and payment
                questions.
              </figcaption>
            </figure>
            <figure className="card-surface overflow-hidden p-3">
              <Image
                src="/images/screenshots/vip-tier-progress.webp"
                alt="BDG Win VIP tier progress and benefits screen"
                width={800}
                height={1448}
                className="w-full rounded-xl"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-grey">
                VIP tier progress and benefits, unlocked automatically as your account activity grows.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section id="section-download" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-3 gap-4">
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
            <figure className="card-surface mt-4 overflow-hidden p-3">
              <Image
                src="/images/screenshots/guest-landing-rewards.webp"
                alt="BDG Win app before logging in, with event rewards ready to unlock"
                width={800}
                height={1448}
                className="w-full rounded-xl"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-grey">
                The BDG Win app the moment it opens — event rewards are visible right away and unlock as soon as
                you log in.
              </figcaption>
            </figure>
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

      {/* Rewards */}
      <section id="section-rewards" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
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
          <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
            <figure className="card-surface overflow-hidden p-3">
              <Image
                src="/images/screenshots/attendance-bonus-calendar.webp"
                alt="BDG Win attendance bonus screen showing rewards by consecutive login day"
                width={800}
                height={1448}
                className="w-full rounded-xl"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-grey">
                Daily attendance rewards on BDG Win — the bonus grows the longer your login streak runs.
              </figcaption>
            </figure>
            <figure className="card-surface overflow-hidden p-3">
              <Image
                src="/images/screenshots/win-streak-bonus.webp"
                alt="BDG Win Streak Bonus paying an extra percentage after consecutive wins"
                width={800}
                height={1448}
                className="w-full rounded-xl"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-grey">
                A BDG Win Streak Bonus, paying an extra percentage of your betting amount after consecutive wins.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section id="section-referral" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
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
          <div>
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
            <figure className="card-surface mt-4 overflow-hidden p-3">
              <Image
                src="/images/screenshots/invite-poster-commission.webp"
                alt="Shareable BDG Win referral poster with a scannable invite QR code and commission rate"
                width={800}
                height={1448}
                className="w-full rounded-xl"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-grey">
                A shareable BDG Win referral poster with a scannable invite QR code, ready to send straight to
                friends.
              </figcaption>
            </figure>
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
          <div>
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
            <figure className="card-surface mt-4 overflow-hidden p-3">
              <Image
                src="/images/screenshots/account-wallet-overview.webp"
                alt="BDG Win account overview showing UID, VIP tier and total wallet balance"
                width={800}
                height={1448}
                className="w-full rounded-xl"
              />
              <figcaption className="mt-3 text-xs leading-relaxed text-grey">
                Your BDG Win account dashboard — balance, VIP tier and login activity in one encrypted view.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="section-getting-started" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-eyebrow">New to BDG Win</p>
          <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">What to Expect in Your First Session</h2>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 text-sm leading-relaxed text-grey lg:text-base">
          <p>
            Most new players spend their first few minutes exploring game categories before making a deposit —
            there&apos;s no requirement to fund your wallet immediately after registering. Once you do deposit,
            it typically posts within minutes, and every game category becomes available right away rather than
            unlocking gradually.
          </p>
          <p>
            Your first session is also when the daily reward cycle starts tracking, so logging in again the next
            day keeps that streak moving. From there, weekly and monthly rewards build on the same activity
            without needing anything extra from you beyond normal play.
          </p>
          <p>
            If anything is unclear along the way, the Help Center groups guides by topic — account setup,
            payments and individual game categories — so most first-session questions have a direct answer
            without needing to contact support.
          </p>
        </div>
        <figure className="card-surface mx-auto mt-8 max-w-xs overflow-hidden p-3">
          <Image
            src="/images/screenshots/gift-code-redeem.webp"
            alt="BDG Win gift code redemption screen"
            width={800}
            height={1448}
            className="w-full rounded-xl"
          />
          <figcaption className="mt-3 text-center text-xs leading-relaxed text-grey">
            Redeeming a BDG Win gift code from the Gifts screen — one of several small rewards new players run
            into during their first session.
          </figcaption>
        </figure>
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
