import type { Metadata } from 'next';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { Icon } from '@/components/Icon';
import { GameCategoryGrid } from '@/components/GameCategoryGrid';
import { FeatureGrid } from '@/components/FeatureGrid';
import { NumberedFeatureList } from '@/components/NumberedFeatureList';
import { Testimonials } from '@/components/Testimonials';
import { TableOfContents } from '@/components/TableOfContents';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Cta } from '@/components/Cta';
import { buildMeta } from '@/lib/seo';
import { siteConfig } from '@/lib/site.config';
import { createLinkifyTracker, linkifyBrandOnce } from '@/lib/linkify';
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  webPageSchema,
  faqSchema
} from '@/lib/schema';
import homeData from '@/data/home.data';

const shotFrame =
  'inline-block shrink-0 rounded-2xl border border-goldline bg-card/40 p-3 shadow-[0_20px_45px_rgba(244,200,74,.15)]';
const shot = 'h-auto w-32 rounded-xl object-cover sm:w-40 lg:w-48';

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
    { id: 'section-highlights', label: 'Features Of 6 Club' },
    { id: 'section-tips', label: 'Tips To Maximize Winning On 6 Club' },
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
            <p className="section-eyebrow">Official Gaming Platform</p>
            <h1 className="text-balance mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="gold-text">6 Club Official Website</span>
              <br />
              Login Once. Play Every Category.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">
              {linkifyBrandOnce(
                "6 Club is an all-in-one gaming platform where a single account gives you access to casino games, slots, lottery, sports, and more. Register in minutes, manage your wallet from one dashboard, unlock platform rewards, and enjoy a secure experience across every supported device.",
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
              <a href={siteConfig.registerUrl} className="btn-gold animate-pulseGlow">
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
          <div className="text-center">
            <div className="heading-box">
              <p className="section-eyebrow">Get Started</p>
              <h2 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">What Is 6 Club?</h2>
            </div>
          </div>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-grey lg:text-base">
            <p>
              6 Club is an all-in-one online gaming platform where players can access multiple game categories
              through a single account. From account registration and secure login to wallet management, rewards,
              and game discovery, every feature is connected within one streamlined platform.
            </p>
            <p>
              Built with a mobile-first approach, 6 Club delivers a fast and responsive experience across
              smartphones, tablets, and desktop browsers. Players can switch between different game categories
              without creating multiple accounts or managing separate wallets, making the platform simple to
              navigate for both new and returning users.
            </p>
            <p>
              Beyond gameplay, 6 Club brings together promotions, VIP benefits, referral rewards, account
              security, and customer support in one place. Whether you&apos;re exploring the platform for the
              first time or returning to continue your experience, everything is designed around one connected
              ecosystem that keeps your account, activity, and rewards synchronized.
            </p>
            <p>
              The sections below provide detailed guides covering 6 Club Login, Registration, App Download,
              Games, Wallet, Bonuses, Security, and other essential platform features to help you get started
              quickly.
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

        <div className="mx-auto mt-14 max-w-5xl space-y-14">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-white lg:text-2xl">6 Club Login</h3>
              <ol className="mx-auto mt-3 max-w-md list-decimal space-y-2 pl-5 text-left text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">
                <li>Open 6 Club on the app, mobile browser or desktop and tap Login.</li>
                <li>Enter your registered mobile number.</li>
                <li>Type your password — use Forgot Password if you don&apos;t remember it.</li>
                <li>Tap Login to confirm and sign in.</li>
                <li>You&apos;re dropped straight onto your dashboard, with wallet balance, VIP tier and pending bonuses exactly where you left them.</li>
              </ol>
              <a href="/login" className="btn-outline mt-5 inline-flex">
                Go to Login
              </a>
            </div>
            <div className={`${shotFrame} mx-auto lg:ml-auto lg:mr-0`}>
              <Image
                src="/images/screenshots/6club-login-screen.webp"
                alt="6 Club login screen with phone number and password fields"
                width={800}
                height={1448}
                sizes="(min-width: 1024px) 192px, 160px"
                className={shot}
              />
            </div>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className={`${shotFrame} order-2 mx-auto lg:order-1 lg:ml-0 lg:mr-auto`}>
              <Image
                src="/images/screenshots/6club-register-screen.webp"
                alt="6 Club registration form asking for phone number, password and invite code"
                width={800}
                height={1448}
                sizes="(min-width: 1024px) 192px, 160px"
                className={shot}
              />
            </div>
            <div className="order-1 text-center lg:order-2 lg:text-left">
              <h3 className="text-xl font-semibold text-white lg:text-2xl">6 Club Register</h3>
              <ol className="mx-auto mt-3 max-w-md list-decimal space-y-2 pl-5 text-left text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">
                <li>Open 6 Club Register and enter your mobile number.</li>
                <li>Confirm the OTP sent to your device.</li>
                <li>Set a password for your account.</li>
                <li>Add an invite code if you have one — it&apos;s optional, not mandatory.</li>
                <li>Submit to finish — no deposit is required to complete registration.</li>
                <li>Your account is live immediately, with every game category, payment method and reward ladder unlocked right away.</li>
              </ol>
              <a href={siteConfig.registerUrl} className="btn-gold mt-5 inline-flex">
                Create an Account
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div className="heading-box">
            <p className="section-eyebrow">Key Features</p>
            <h3 className="mt-2 text-xl font-semibold text-white lg:text-2xl">Built for Fast, Secure Play</h3>
          </div>
        </div>
        <div className="mt-8">
          <FeatureGrid features={homeData.features} gridCols={4} />
        </div>
      </section>

      {/* Game Categories */}
      <section id="section-categories" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <div className="heading-box">
              <p className="section-eyebrow">Game Categories</p>
              <h2 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">One 6 Club Account, Every Game</h2>
            </div>
            <p className="mt-4 max-w-2xl text-sm text-grey">
              Pick a lane — live casino, themed slots, Colour Prediction, Sports or Aviator-style crash rounds —
              and jump straight in from your 6 Club dashboard. Every category sits behind the same home screen tap,
              so switching from a slot reel to a live table or a crash round never means logging into a different
              account or moving your balance around.
            </p>
          </div>
          <div className={shotFrame}>
            <Image
              src="/images/screenshots/6club-home-game-categories.webp"
              alt="6 Club home screen with all game categories one tap away"
              width={800}
              height={1448}
              sizes="(min-width: 1024px) 192px, 160px"
              className={shot}
            />
          </div>
        </div>
        <GameCategoryGrid categories={homeData.categories} />
      </section>

      {/* Feature Highlights */}
      <section id="section-highlights" className="scroll-mt-24 mx-auto px-5 py-16 lg:px-8">
        <NumberedFeatureList
          bannerTitle="Features Of 6 Club"
          intro="6 Club is more than just a betting app — it's a complete gaming account built for speed, security and rewards that keep paying out."
          pillLabel="Here's what makes 6 Club stand out:"
          items={[
            {
              title: 'Wide Game Variety',
              description: 'From lottery and Colour Prediction to slots, fishing, live casino and sports betting, all in one account.'
            },
            {
              title: 'Instant Deposits & Withdrawals',
              description: 'Enjoy seamless transactions with verified, secure payment gateways and same-day payouts.'
            },
            {
              title: 'Advanced Security',
              description: 'Encrypted sessions and strict privacy policies keep your data and money safe.'
            },
            {
              title: 'Exclusive Bonuses & Promotions',
              description: 'Daily attendance rewards, welcome bonuses, win-streak bonuses and referral income, all in one rewards tab.'
            },
            {
              title: 'Lightweight & Fast App',
              description: 'A smooth gaming experience with minimal data usage and quick loading times, even on a slow connection.'
            },
            {
              title: 'Fair Play Guarantee',
              description: 'A certified random number generator (RNG) keeps every round independently verified and unbiased.'
            },
            {
              title: '24/7 Customer Support',
              description: 'A friendly, responsive live chat and support team available anytime you need help.'
            }
          ]}
        />
      </section>

      {/* Winning Tips */}
      <section id="section-tips" className="scroll-mt-24 mx-auto px-5 py-16 lg:px-8">
        <NumberedFeatureList
          bannerTitle="Tips To Maximize Winning On 6 Club"
          intro="Winning on 6 Club is about more than just luck. Smart strategies and disciplined play can significantly boost your chances of success — here are a few worth building into your routine."
          pillLabel="Here are some expert tips to help you play smarter:"
          items={[
            {
              title: 'Start with Low-Risk Games',
              description: 'If you’re new, try games with lower volatility like Lottery or Colour Prediction to understand patterns before moving to high-reward games like Aviator or Slots.'
            },
            {
              title: 'Manage Your Bankroll',
              description: 'Set a daily or weekly budget and stick to it. Never chase losses — consistent play with control leads to better results in the long run.'
            },
            {
              title: 'Use Bonuses Wisely',
              description: 'Take advantage of welcome bonuses, daily attendance rewards and referral income from the Rewards tab to play more without using extra funds.'
            },
            {
              title: 'Know When to Cash Out',
              description: 'In crash-style games like Aviator, timing is everything. Cash out at a target multiplier rather than waiting for maximum risk.'
            },
            {
              title: 'Learn Game Rules & Patterns',
              description: 'Every game has its own logic. Spend time understanding rules and payout structures before betting big.'
            },
            {
              title: 'Stay Calm & Focused',
              description: 'Avoid impulsive moves. Take breaks to keep your mind fresh and your decision-making sharp.'
            }
          ]}
        />
      </section>

      {/* Why Choose Us */}
      <section id="section-why-choose-us" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <div className="heading-box">
              <p className="section-eyebrow">Why Choose Us</p>
              <h2 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">Why Players Stick With 6 Club</h2>
            </div>
          </div>
          <FeatureGrid features={homeData.whyChooseUs} gridCols={4} />
          <div className="mx-auto mt-14 max-w-5xl space-y-14">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-success">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                  Live
                </span>
                <h4 className="mt-3 text-xl font-semibold text-white lg:text-2xl">Live Chat, Anytime</h4>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">
                  Round-the-clock live chat sits inside the 6 Club App, ready for account and payment questions
                  any time of day or night. Agents can see your account context the moment a chat opens, so you
                  don&apos;t need to re-explain a deposit or a pending withdrawal from scratch. If a question needs
                  more digging, it gets escalated instead of leaving you stuck in a queue.
                </p>
              </div>
              <div className={`${shotFrame} mx-auto lg:ml-auto lg:mr-0`}>
                <Image
                  src="/images/screenshots/6club-live-chat-support.webp"
                  alt="Live chat support inside the 6 Club app"
                  width={800}
                  height={1448}
                  sizes="(min-width: 1024px) 192px, 160px"
                  className={shot}
                />
              </div>
            </div>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className={`${shotFrame} order-2 mx-auto lg:order-1 lg:ml-0 lg:mr-auto`}>
                <Image
                  src="/images/screenshots/6club-vip-tier-progress.webp"
                  alt="6 Club VIP tier progress and benefits screen"
                  width={800}
                  height={1448}
                  sizes="(min-width: 1024px) 192px, 160px"
                  className={shot}
                />
              </div>
              <div className="order-1 text-center lg:order-2 lg:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  <Icon name="crown" className="h-3 w-3" />
                  VIP
                </span>
                <h4 className="mt-3 text-xl font-semibold text-white lg:text-2xl">VIP Progress</h4>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">
                  6 Club VIP tier progress climbs automatically as your activity grows, unlocking better rates
                  without any extra sign-up. Every deposit and wager counts toward your tier, higher tiers clear
                  withdrawals faster and unlock a dedicated support line, and nothing about the ladder resets just
                  for taking a short break from play.
                </p>
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
                <div className="heading-box">
                  <p className="section-eyebrow">6 Club Download</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">Play 6 Club Anywhere</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-grey">
                  Grab the 6 Club APK for Android, follow the iOS install guide on your iPhone, or skip the
                  download entirely and play 6 Club straight from a desktop browser. All three routes land on the
                  exact same account, so a game you started on mobile picks up right where you left off on
                  desktop. Even before you log in, event rewards and the current welcome bonus are visible from
                  the guest landing screen.
                </p>
                <a href="/download" className="btn-gold mt-6 inline-flex">
                  Get the 6 Club App
                </a>
              </div>
              <div className={`${shotFrame} hidden sm:block`}>
                <Image
                  src="/images/screenshots/6club-guest-landing-rewards.webp"
                  alt="6 Club app before logging in, with event rewards ready to unlock"
                  width={800}
                  height={1448}
                  sizes="192px"
                  className={shot}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section id="section-rewards" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-10 text-center">
            <div className="heading-box">
              <p className="section-eyebrow">6 Club Rewards</p>
              <h2 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">A 6 Club Bonus for Every Stage of Play</h2>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-grey">
              Active 6 Club players earn through daily login streaks, weekly cashback, monthly milestones and a
              VIP ladder that speeds up withdrawals the higher you climb.
            </p>
          </div>
          <FeatureGrid features={homeData.rewards} gridCols={4} />
          <div className="mx-auto mt-14 max-w-5xl space-y-14">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-semibold text-white lg:text-2xl">Attendance Bonus</h4>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">
                  A 6 Club Daily Bonus that grows the longer your login streak stays unbroken. Each consecutive day
                  bumps the payout a step further up the calendar, and missing a single day resets the count back
                  to day one — so the streak itself is worth protecting. The calendar screen always shows exactly
                  how many days until the next tier pays out.
                </p>
              </div>
              <div className={`${shotFrame} mx-auto lg:ml-auto lg:mr-0`}>
                <Image
                  src="/images/screenshots/attendance-bonus-calendar.webp"
                  alt="6 Club attendance bonus screen showing rewards by consecutive login day"
                  width={800}
                  height={1448}
                  sizes="(min-width: 1024px) 192px, 160px"
                  className={shot}
                />
              </div>
            </div>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className={`${shotFrame} order-2 mx-auto lg:order-1 lg:ml-0 lg:mr-auto`}>
                <Image
                  src="/images/screenshots/6club-win-streak-bonus.webp"
                  alt="6 Club Streak Bonus paying an extra percentage after consecutive wins"
                  width={800}
                  height={1448}
                  sizes="(min-width: 1024px) 192px, 160px"
                  className={shot}
                />
              </div>
              <div className="order-1 text-center lg:order-2 lg:text-left">
                <h4 className="text-xl font-semibold text-white lg:text-2xl">Win Streak Bonus</h4>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-grey lg:mx-0 lg:text-base">
                  An added percentage on top of your stake, credited after a run of consecutive wins. The bonus
                  scales with the length of the streak, applies automatically the moment it qualifies, and pays
                  out alongside your regular winnings — no separate claim step or waiting for a manual credit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section id="section-referral" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="heading-box">
              <p className="section-eyebrow">Referral Program</p>
              <h2 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">
                Invite Friends, Earn on 6 Club
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-grey">
              Share your 6 Club Invite Code or referral link, and earn a cut of your friends&apos; activity for as
              long as they keep playing. Your account dashboard tracks every invite, pending payout and total
              earned so far. Commission builds up automatically in the background — there&apos;s no cap on how
              many friends you invite, and payouts land in the same wallet you already play from.
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
            <div className={`${shotFrame} hidden sm:block`}>
              <Image
                src="/images/screenshots/invite-poster-commission.webp"
                alt="Shareable 6 Club referral poster with a scannable invite QR code and commission rate"
                width={800}
                height={1448}
                sizes="192px"
                className={shot}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="section-security" className="scroll-mt-24 border-y border-goldline bg-card/30">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="heading-box">
              <p className="section-eyebrow">Security</p>
              <h2 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">Is 6 Club Safe? Here&apos;s How Your Account Is Protected</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-grey">
              Every 6 Club account runs behind encrypted sessions, verified payment partners and withdrawal
              checks. The full Security and Fair Play pages break down exactly how outcomes and payouts get
              verified. Random number generation on every game is independently certified, and responsible
              gaming tools like deposit limits and self-exclusion sit right in your account settings if you ever
              want more control over your own play.
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
            <div className={`${shotFrame} hidden sm:block`}>
              <Image
                src="/images/screenshots/6club-account-wallet-overview.webp"
                alt="6 Club account overview showing UID, VIP tier and total wallet balance"
                width={800}
                height={1448}
                sizes="192px"
                className={shot}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="section-getting-started" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <div className="heading-box">
            <p className="section-eyebrow">New to 6 Club</p>
            <h2 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">What to Expect in Your First Session</h2>
          </div>
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
          <div className={`${shotFrame} mx-auto hidden sm:mx-0 sm:block`}>
            <Image
              src="/images/screenshots/gift-code-redeem.webp"
              alt="6 Club gift code redemption screen"
              width={800}
              height={1448}
              sizes="192px"
              className={shot}
            />
          </div>
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

      {/* Player Experience */}
      <section id="section-experience" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-10 text-center">
          <div className="heading-box">
            <p className="section-eyebrow">Player Story</p>
            <h2 className="mt-2 text-2xl font-semibold text-white lg:text-3xl">My Experience With 6 Club</h2>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-grey lg:text-base">
          <p>As part of the 6 Club community for a while now, my time on the platform has been nothing short of enjoyable.</p>
          <p>
            From the first session, what stood out was how smooth the app felt — deposits and withdrawals cleared
            fast, and there was enough game variety that I never felt boxed into one category.
          </p>
          <p>
            I started with simple lottery and Colour Prediction rounds to get a feel for how everything worked,
            then gradually moved on to faster-paced options like Aviator-style crash games and slots.
          </p>
          <p>
            What kept me around was how transparent it all felt — results came through instantly, odds matched
            what was promised, and bonuses actually added value instead of feeling like a gimmick.
          </p>
          <p>Support was another strong point — every query I raised got a quick, straightforward answer.</p>
          <p>
            Over time I got better at managing my bankroll, using bonuses smartly and knowing when to cash out,
            which made the whole experience a lot more consistent.
          </p>
          <p>
            Playing on 6 Club hasn&apos;t just been about the wins — it&apos;s been about a platform that feels
            safe, fair and worth coming back to.
          </p>
          <p>
            If you&apos;re curious about earning beyond gameplay, the{' '}
            <a href="/referral-program" className="text-gold underline underline-offset-2 hover:text-white">
              6 Club Referral Program
            </a>{' '}
            is worth a look.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <FaqAccordion faqs={homeData.faqs} faqTitle="6 Club Frequently Asked Questions" faqHeadingId="home-faq" />

      {/* CTA */}
      <Cta
        ctaEyebrow="Get Started"
        ctaTitle="Join 6 Club and Create Your Account Today"
        ctaDescription="6 Club Register takes under a minute — verify your number, claim your 6 Club Welcome Bonus, and pick a game category to start playing."
        ctaPrimaryLabel="Register on 6 Club"
        ctaSecondaryLabel="6 Club Login"
        ctaSecondaryUrl="/login"
      />
    </>
  );
}
