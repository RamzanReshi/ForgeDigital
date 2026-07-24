import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Stamp } from './Stamp';
import { CAL_LINK } from '../config';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const ROUTE_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navLinks = isHome ? ROUTE_LINKS : [{ label: 'Home', to: '/' }, ...ROUTE_LINKS];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-5 md:h-16 md:px-8"
      >
        <a href={isHome ? '#top' : '/'} className="text-lg tracking-tight text-ink" style={serif}>
          Forge <span className="text-forge">Digital</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-ink-soft transition hover:text-ink">
              {l.label}
            </Link>
          ))}
          <Stamp calLink={CAL_LINK} hold>Book a free consultation</Stamp>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 top-14 z-40 flex flex-col gap-2 bg-paper px-5 pt-10 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-4 text-3xl text-ink"
              style={serif}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4" onClick={() => setMenuOpen(false)}>
            <Stamp calLink={CAL_LINK} hold>Book a free consultation</Stamp>
          </div>
        </div>
      )}
    </header>
  );
}
