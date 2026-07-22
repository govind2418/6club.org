import { Icon } from '@/components/Icon';
import { siteConfig } from '@/lib/site.config';
import type { NavData } from '@/data/nav.data';

export function Footer({ nav }: { nav: NavData }) {
  return (
    <footer className="border-t border-goldline bg-[#0B0B0D]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="mb-4 inline-flex items-center gap-2" aria-label="6 Club home">
              <img src="/images/logo.png" alt="6 Club" width={205} height={90} className="h-9 w-auto" />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-grey">
              6 Club is an online gaming platform where players across India play casino, slot, lottery, sports
              and crash games, track rewards and manage deposits and withdrawals from one secure account.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="6 Club on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-goldline text-gold hover:border-gold"
              >
                <Icon name="facebook" className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="6 Club on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-goldline text-gold hover:border-gold"
              >
                <Icon name="instagram" className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.telegram}
                aria-label="6 Club on Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-goldline text-gold hover:border-gold"
              >
                <Icon name="send" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="section-eyebrow mb-4">Platform</h2>
            <ul className="space-y-2 text-sm text-grey">
              {nav.footer.platform.map((link) => (
                <li key={link.url}>
                  <a href={link.url} className="hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="section-eyebrow mb-4">Games</h2>
            <ul className="space-y-2 text-sm text-grey">
              {nav.footer.games.map((link) => (
                <li key={link.url}>
                  <a href={link.url} className="hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="section-eyebrow mb-4">Account</h2>
            <ul className="space-y-2 text-sm text-grey">
              {nav.footer.account.map((link) => (
                <li key={link.url}>
                  <a href={link.url} className="hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="section-eyebrow mb-4">Support</h2>
            <ul className="space-y-2 text-sm text-grey">
              {nav.footer.support.map((link) => (
                <li key={link.url}>
                  <a href={link.url} className="hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <div className="flex flex-col gap-4 text-xs text-grey/80 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; {new Date().getFullYear()} 6 Club. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.footer.legal.map((link) => (
              <li key={link.url}>
                <a href={link.url} className="hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-grey/60">
          6 Club promotes responsible gaming. Players must be 18 years or older to register. Please review our{' '}
          <a href="/responsible-gaming" className="underline hover:text-gold">
            Responsible Gaming
          </a>{' '}
          guidance and set personal deposit and time limits before you play.
        </p>
      </div>
    </footer>
  );
}
