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

const shot = 'h-36 w-24 shrink-0 rounded-xl border border-goldline object-cover object-top shadow-[0_12px_35px_rgba(244,200,74,.2)] sm:h-40 sm:w-28';

export const metadata: Metadata = buildMeta({
  title: '6 Club Official Website | 6 Club Login, Register & Games Platform',
  description:
    '6 Club Official Website — 6club is an online gaming platform for casino, slots, lottery, sports and crash games. Register in minutes, deposit securely and claim daily, weekly and VIP rewards.',
  path: '/',
  type: 'website',
  keywords: ['6 Club', '6club', '6 Club Official Website', '6 Club Login', '6 Club Register', '6 Club App', '6 Club Download', '6 Club Games', '6 Club Bonus', '6 Club Gift Code', '6 Club VIP']
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
    { id: 'section-about', label: 'What Is 6 Club' },
    { id: 'section-categories', label: 'One 6 Club Account, Every Game' },
    { id: 'section-why-choose-us', label: 'Why Players Stick With 6 Club' },
    { id: 'section-download', label: 'Play 6 Club Anywhere' },
    { id: 'section-rewards', label: 'A 6 Club Bonus for Every Stage of Play' },
    { id: 'section-referral', label: 'Invite Friends, Earn on 6 Club' },
    { id: 'section-security', label: "Is 6 Club Safe? Account Protection" },
    { id: 'section-getting-started', label: 'What to Expect in Your First Session' }
  ];
  const homeFaqToc = homeData.faqs.map((faq, i) => ({ id: `faq-item-${i}`, label: faq.q }));

  return (
    <>
      <JsonLd schemas={schemas} />

      {/* 6Club Banner */}
      <section className="relative overflow-hidden pt-20 lg:pt-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <a href="/login" aria-label="6Club Login" className="block overflow-hidden rounded-2xl border border-goldline shadow-glow">
            <Image
              src="/images/6club-hero-banner.png"
              alt="6club login"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 1280px, 100vw"
              className="h-auto w-full object-cover"
              quality={75}
              priority
              fetchPriority="high"
            />
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-10 lg:pt-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 22% 20%, rgba(244,200,74,.16), transparent 55%), radial-gradient(circle at 82% 60%, rgba(142,98,18,.18), transparent 50%)'
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
              <span className="gold-text">6 Club</span>
              <br />
              One ID. All Games.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">
              {linkifyBrandOnce(
                "One 6 Club account unlocks casino tables, slot reels, lottery draws, sports markets and crash rounds — no separate logins, no separate wallets. Finish 6 Club Register in under a minute, fund your wallet through a verified payment method, and watch every bonus land in a single rewards dashboard built for quick, modern play.",
                createLinkifyTracker()
              )}
            </p>

            <ul className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-grey lg:mx-0 lg:justify-start">
              <li className="flex items-center gap-2">
                <Icon name="zap" className="h-4 w-4 text-gold" /> Quick 6 Club Registration
              </li>
              <li className="flex items-center gap-2">
                <Icon name="shield-check" className="h-4 w-4 text-gold" /> Secure 6 Club Platform
              </li>
              <li className="flex items-center gap-2">
                <Icon name="sparkles" className="h-4 w-4 text-gold" /> Modern Play Experience
              </li>
              <li className="flex items-center gap-2">
                <Icon name="gift" className="h-4 w-4 text-gold" /> Premium 6 Club Rewards
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="/register" className="btn-gold animate-pulseGlow">
                Register on 6 Club
              </a>
              <a href="/login" className="btn-outline">
                6 Club Login
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-xl items-center justify-center lg:max-w-none">
            <div className="animate-floaty w-full">
              <Image
                src="/images/6club-login.webp"
                alt="6 Club gold logo with casino chips, playing cards, dice and a VIP host"
                width={1373}
                height={1001}
                sizes="(min-width: 1024px) 620px, 90vw"
                className="h-auto w-full drop-shadow-[0_20px_60px_rgba(244,200,74,.25)]"
                quality={75}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <TableOfContents headings={homeToc} faqs={homeFaqToc} className="mx-auto mb-0 max-w-7xl px-5 lg:px-8" />

      {/* What Is 6 Club */}
      <section id="section-about" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="section-eyebrow text-center">Get Started</p>
          <h2 className="mt-3 text-center text-2xl font-semibold text-white lg:text-3xl">What Is 6 Club</h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-grey lg:text-base">
            <p>
              6 Club — also written 6club, and this is the 6 Club Official Website — is a single-account gaming
              platform covering casino tables, slot reels, lottery draws, sports markets, crash rounds, fishing
              games and arcade titles. Rather than separate logins for separate game types, one 6 Club Register
              gives you one wallet, one balance and one rewards ladder across the whole platform. 6 Club has been
              running since 2021, and its game lineup has grown around what players actually play rather than a
              catalog fixed in advance. Whether you&apos;re backing a live match, watching a crash multiplier
              climb, or picking numbers on a lottery draw, the account and deposit process behind it never
              changes.
            </p>
            <p>
              Players sometimes shorten the whole catalog to just &ldquo;6 Club Games&rdquo; — it isn&apos;t a
              separate product, just shorthand for everything inside a 6 Club account: live-dealer casino tables,
              themed slot reels, fast-settling lottery and Colour Prediction rounds, pre-match and live sports
              markets, Aviator-style crash games, skill-based fishing rounds and quick arcade sessions. New
              categories join this same account rather than launching as standalone apps, so a player registered
              for Slots today can open a Sports market or a Lottery draw tomorrow without creating a second
              account or moving money between wallets.
            </p>
            <p>
              Every category further down this page links out to its own dedicated guide, with rules, odds and a
              direct way to start playing. Before that, here&apos;s how 6 Club Login, 6 Club Register and the
              account itself actually work.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-goldline bg-goldline/60">
            <dl className="grid grid-cols-2 gap-px sm:grid-cols-3">
              {[
                { label: 'Platform Type', value: 'Online gaming platform' },
                { label: 'Operating Since', value: '2021' },
                { label: 'Account Model', value: 'One account, one wallet' },
                { label: 'Available On', value: 'Android, iOS, desktop' },
                { label: 'Registration Time', value: 'Under a minute' },
                { label: 'Reward Structure', value: 'Daily, weekly, monthly, VIP' }
              ].map((fact) => (
                <div key={fact.label} className="bg-bg p-4 sm:p-5">
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-gold">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wide text-gold">
              Explore 6 Club
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: '6 Club Login', url: '/login', icon: 'log-in' },
                { label: '6 Club Register', url: '/register', icon: 'user-plus' },
                { label: '6 Club Download', url: '/download', icon: 'download' },
                { label: '6 Club App', url: '/download', icon: 'smartphone' },
                { label: '6 Club Game', url: '/games', icon: 'gamepad-2' },
                { label: '6 Club Bonus', url: '/promotions', icon: 'percent' },
                { label: '6 Club Gift Code', url: '/gift-code', icon: 'gift' },
                { label: '6 Club VIP', url: '/vip', icon: 'crown' }
              ].map((link) => (
                <a
                  key={link.url + link.label}
                  href={link.url}
                  className="inline-flex items-center gap-2 rounded-full border border-goldline px-4 py-2 text-xs font-semibold text-grey transition-colors hover:border-gold hover:text-gold sm:text-sm"
                >
                  <Icon name={link.icon} className="h-3.5 w-3.5 text-gold" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="card-surface flex items-start gap-5 p-6">
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-white">6 Club Login</h3>
              <p className="mt-2 text-sm leading-relaxed text-grey">
                Returning players use 6 Club Login with their registered mobile number and password. Sessions
                stay encrypted end to end, and a password-reset shortcut sits right on the sign-in screen if your
                credentials slip your mind.
              </p>
              <a href="/login" className="btn-outline mt-4 inline-flex">
                Go to Login
              </a>
            </div>
            <Image
              src="/images/screenshots/login-screen.webp"
              alt="6 Club login screen with phone number and password fields"
              width={800}
              height={1448}
              sizes="112px"
              className={shot}
            />
          </div>
          <div className="card-surface flex items-start gap-5 p-6">
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-white">6 Club Register</h3>
              <p className="mt-2 text-sm leading-relaxed text-grey">
                First-time players use 6 Club Register to open an account with a mobile number, a password and a
                quick OTP check — usually done in under a minute, with no deposit required to finish signing up.
              </p>
              <a href="/register" className="btn-gold mt-4 inline-flex">
                Create an Account
              </a>
            </div>
            <Image
              src="/images/screenshots/register-screen.webp"
              alt="6 Club registration form asking for phone number, password and invite code"
              width={800}
              height={1448}
              sizes="112px"
              className={shot}
            />
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
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="section-eyebrow">Game Categories</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">One 6 Club Account, Every Game</h2>
            <p className="mt-3 max-w-2xl text-sm text-grey">
              Pick a lane — live casino, themed slots, Colour Prediction, Sports or Aviator-style crash rounds —
              and jump straight in from your 6 Club dashboard.
            </p>
          </div>
          <Image
            src="/images/screenshots/home-game-categories.webp"
            alt="6 Club home screen with all game categories one tap away"
            width={800}
            height={1448}
            sizes="112px"
            className={shot}
          />
        </div>
        <GameCategoryGrid categories={homeData.categories} />
      </section>

      {/* Why Choose Us */}
      <section id="section-why-choose-us" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">Why Choose Us</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">Why Players Stick With 6 Club</h2>
          </div>
          <FeatureGrid features={homeData.whyChooseUs} gridCols={4} />
          <div className="mx-auto mt-6 grid max-w-5xl gap-6 sm:grid-cols-2">
            <div className="card-surface group relative flex items-center gap-5 overflow-hidden p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-success/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative min-w-0 flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-success">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                  Live
                </span>
                <h4 className="mt-3 text-base font-semibold text-white">Live Chat, Anytime</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-grey">
                  Round-the-clock live chat sits inside the 6 Club App, ready for account and payment questions
                  any time of day or night.
                </p>
              </div>
              <div className="relative shrink-0">
                <div aria-hidden="true" className="absolute inset-3 rounded-xl bg-gold/25 blur-xl" />
                <Image
                  src="/images/screenshots/live-chat-support.webp"
                  alt="Live chat support inside the 6 Club app"
                  width={800}
                  height={1448}
                  sizes="112px"
                  className={`${shot} relative`}
                />
              </div>
            </div>
            <div className="card-surface group relative flex items-center gap-5 overflow-hidden p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative min-w-0 flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  <Icon name="crown" className="h-3 w-3" />
                  VIP
                </span>
                <h4 className="mt-3 text-base font-semibold text-white">VIP Progress</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-grey">
                  6 Club VIP tier progress climbs automatically as your activity grows, unlocking better rates
                  without any extra sign-up.
                </p>
              </div>
              <div className="relative shrink-0">
                <div aria-hidden="true" className="absolute inset-3 rounded-xl bg-accent/25 blur-xl" />
                <Image
                  src="/images/screenshots/vip-tier-progress.webp"
                  alt="6 Club VIP tier progress and benefits screen"
                  width={800}
                  height={1448}
                  sizes="112px"
                  className={`${shot} relative`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section id="section-download" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 divide-y divide-goldline overflow-hidden rounded-2xl border border-goldline lg:order-1">
            {[
              { icon: 'smartphone', label: 'Android APK' },
              { icon: 'apple', label: 'iOS Guide' },
              { icon: 'monitor', label: 'Desktop' }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-white">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-start gap-5">
              <div className="min-w-0 flex-1">
                <p className="section-eyebrow">6 Club Download</p>
                <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">Play 6 Club Anywhere</h2>
                <p className="mt-4 text-sm leading-relaxed text-grey">
                  Grab the 6 Club APK for Android, follow the iOS install guide on your iPhone, or skip the
                  download entirely and play 6 Club straight from a desktop browser.
                </p>
                <a href="/download" className="btn-gold mt-6 inline-flex">
                  Get the 6 Club App
                </a>
              </div>
              <Image
                src="/images/screenshots/guest-landing-rewards.webp"
                alt="6 Club app before logging in, with event rewards ready to unlock"
                width={800}
                height={1448}
                sizes="112px"
                className={`${shot} hidden sm:block`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section id="section-rewards" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">6 Club Rewards</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">A 6 Club Bonus for Every Stage of Play</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-grey">
              Active 6 Club players earn through daily login streaks, weekly cashback, monthly milestones and a
              VIP ladder that speeds up withdrawals the higher you climb.
            </p>
          </div>
          <FeatureGrid features={homeData.rewards} gridCols={4} />
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="card-surface flex items-center gap-4 p-5">
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-white">Attendance Bonus</h4>
                <p className="mt-1 text-xs leading-relaxed text-grey">
                  A 6 Club Daily Bonus that grows the longer your login streak stays unbroken.
                </p>
              </div>
              <Image
                src="/images/screenshots/attendance-bonus-calendar.webp"
                alt="6 Club attendance bonus screen showing rewards by consecutive login day"
                width={800}
                height={1448}
                sizes="112px"
                className={shot}
              />
            </div>
            <div className="card-surface flex items-center gap-4 p-5">
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-white">Win Streak Bonus</h4>
                <p className="mt-1 text-xs leading-relaxed text-grey">
                  An added percentage on top of your stake, credited after a run of consecutive wins.
                </p>
              </div>
              <Image
                src="/images/screenshots/win-streak-bonus.webp"
                alt="6 Club Streak Bonus paying an extra percentage after consecutive wins"
                width={800}
                height={1448}
                sizes="112px"
                className={shot}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section id="section-referral" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Referral Program</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">
              Invite Friends, Earn on 6 Club
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-grey">
              Share your 6 Club Invite Code or referral link, and earn a cut of your friends&apos; activity for as
              long as they keep playing. Your account dashboard tracks every invite, pending payout and total
              earned so far.
            </p>
            <a href="/referral-program" className="btn-gold mt-6 inline-flex">
              View Referral Program
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className="grid min-w-0 flex-1 grid-cols-2 gap-x-4 gap-y-8">
              {[
                { n: 1, label: 'Share your link' },
                { n: 2, label: 'Friend registers' },
                { n: 3, label: 'They play games' },
                { n: 4, label: 'You earn rewards' }
              ].map((step) => (
                <div key={step.n} className="text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-heading text-lg font-bold text-gold">
                    {step.n}
                  </span>
                  <p className="mt-3 text-xs text-grey">{step.label}</p>
                </div>
              ))}
            </div>
            <Image
              src="/images/screenshots/invite-poster-commission.webp"
              alt="Shareable 6 Club referral poster with a scannable invite QR code and commission rate"
              width={800}
              height={1448}
              sizes="112px"
              className={`${shot} hidden sm:block`}
            />
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="section-security" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="section-eyebrow">Security</p>
            <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">Is 6 Club Safe? Here&apos;s How Your Account Is Protected</h2>
            <p className="mt-4 text-sm leading-relaxed text-grey">
              Every 6 Club account runs behind encrypted sessions, verified payment partners and withdrawal
              checks. The full Security and Fair Play pages break down exactly how outcomes and payouts get
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
          <div className="flex items-center gap-5">
            <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { icon: 'lock', label: 'Encrypted Sessions' },
                { icon: 'badge-check', label: 'Verified Payments' },
                { icon: 'eye', label: 'Fair Play Audits' },
                { icon: 'life-buoy', label: 'Responsible Gaming Tools' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium text-white">{item.label}</p>
                </div>
              ))}
            </div>
            <Image
              src="/images/screenshots/account-wallet-overview.webp"
              alt="6 Club account overview showing UID, VIP tier and total wallet balance"
              width={800}
              height={1448}
              sizes="112px"
              className={`${shot} hidden sm:block`}
            />
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="section-getting-started" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-eyebrow">New to 6 Club</p>
          <h2 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">What to Expect in Your First Session</h2>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-start">
          <div className="min-w-0 flex-1 space-y-6 text-sm leading-relaxed text-grey lg:text-base">
            <p>
              Most players spend their first few minutes on 6 Club browsing game categories before ever making a
              deposit — funding your wallet isn&apos;t required right after you register. When you do deposit, it
              usually posts within minutes, and the entire game catalog is available immediately rather than
              unlocking in stages.
            </p>
            <p>
              Your first 6 Club session is also when the Daily Bonus cycle starts counting, so returning the next
              day keeps that streak alive. Weekly and monthly rewards build on top of that same activity without
              asking for anything beyond normal play.
            </p>
            <p>
              If something&apos;s unclear, the 6 Club Help Center organizes guides by topic — account setup,
              payments and individual games — so most first-session questions already have a direct answer
              without needing to contact Support.
            </p>
          </div>
          <Image
            src="/images/screenshots/gift-code-redeem.webp"
            alt="6 Club gift code redemption screen"
            width={800}
            height={1448}
            sizes="112px"
            className={`${shot} mx-auto hidden sm:mx-0 sm:block`}
          />
        </div>
      </section>

      {/* Promo Banner */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <Image
          src="/images/6club-promo-banner.webp"
          alt="6 Club — one account, endless possibilities. Play more, win more."
          width={1536}
          height={1024}
          sizes="(min-width: 1024px) 1280px, 100vw"
          className="h-auto w-full rounded-2xl border border-goldline object-cover shadow-glow"
          loading="lazy"
        />
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={homeData.testimonials} />

      {/* FAQs */}
      <FaqAccordion faqs={homeData.faqs} faqTitle="6 Club Frequently Asked Questions" faqHeadingId="home-faq" />

      {/* CTA */}
      <Cta
        ctaEyebrow="Get Started"
        ctaTitle="Join 6 Club and Create Your Account Today"
        ctaDescription="6 Club Register takes under a minute — verify your number, claim your 6 Club Welcome Bonus, and pick a game category to start playing."
        ctaPrimaryLabel="Register on 6 Club"
        ctaPrimaryUrl="/register"
        ctaSecondaryLabel="6 Club Login"
        ctaSecondaryUrl="/login"
      />
    </>
  );
}
