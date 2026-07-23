'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';
import type { NavItem } from '@/data/nav.data';

export function Header({ primary }: { primary: NavItem[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      data-site-header
      className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-2 shrink-0" aria-label="6 Club home">
          <img src="/images/logo.png" alt="6 Club" width={232} height={100} className="h-9 w-auto lg:h-10" />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primary.map((item) => (
              <li key={item.url} className="group relative">
                <a
                  href={item.url}
                  className="btn-font flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-grey transition-colors hover:text-gold"
                >
                  {item.label}
                  {item.children && <Icon name="chevron-down" className="h-3.5 w-3.5" />}
                </a>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-goldline bg-card p-2 opacity-0 shadow-glow transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <a
                        key={child.url}
                        href={child.url}
                        className="block rounded-lg px-3 py-2 text-sm text-grey hover:bg-white/5 hover:text-gold"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/login" className="btn-outline !px-5 !py-2 text-xs">
            Login
          </a>
          <a href="/go" className="btn-gold !px-5 !py-2 text-xs">
            Register
          </a>
        </div>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-goldline text-gold lg:hidden"
        >
          <Icon name="menu" className="h-5 w-5" />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`${menuOpen ? 'flex' : 'hidden'} flex-col gap-1 border-t border-goldline bg-black/95 px-5 py-4 lg:hidden`}
      >
        {primary.map((item) => (
          <a
            key={item.url}
            href={item.url}
            onClick={() => setMenuOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-grey hover:bg-white/5 hover:text-gold"
          >
            {item.label}
          </a>
        ))}
        <div className="mt-3 flex gap-3 border-t border-goldline pt-3">
          <a href="/login" className="btn-outline flex-1 !py-2 text-xs">
            Login
          </a>
          <a href="/go" className="btn-gold flex-1 !py-2 text-xs">
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}
