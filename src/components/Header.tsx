import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../config';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const HASH_LINKS = [
  { label: 'Work', hash: '#work' },
  { label: 'Process', hash: '#process' },
  { label: 'Book', hash: '#book' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const withHash = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-5 md:h-16 md:px-8"
      >
        <a href={isHome ? '#top' : '/'} className="text-lg tracking-tight" style={serif}>
          {BRAND}
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link to="/services" className="text-ink-soft transition hover:text-ink">
            Services
          </Link>
          {HASH_LINKS.map((l) => (
            <a
              key={l.hash}
              href={withHash(l.hash)}
              className="text-ink-soft transition hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <Link to="/landing" className="text-forge transition hover:opacity-80">
            The experience &rarr;
          </Link>
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
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="border-b border-line py-4 text-3xl text-ink"
            style={serif}
          >
            Services
          </Link>
          {HASH_LINKS.map((l) => (
            <a
              key={l.hash}
              href={withHash(l.hash)}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-4 text-3xl text-ink"
              style={serif}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/landing"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-3xl text-forge"
            style={serif}
          >
            The experience &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
