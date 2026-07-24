import { Link, useLocation } from 'react-router-dom';
import { BRAND, CAL_LINK } from '../config';
import { Stamp } from './Stamp';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const HASH_LINKS = [
  { label: 'Work', hash: '#work' },
  { label: 'Process', hash: '#process' },
  { label: 'Book', hash: '#book' },
];

const SERVICE_LINKS = [
  { label: 'Web Design', to: '/services#web-design' },
  { label: 'SEO & GEO', to: '/services#seo-geo' },
  { label: 'Conversion Strategy', to: '/services#conversion-strategy' },
  { label: 'Care & Updates', to: '/services#care-updates' },
  { label: 'All services', to: '/services' },
];

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const withHash = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="bg-[#0e0d0a] py-10 sm:py-12">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl text-white" style={serif}>
              {BRAND}
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Conversion-focused websites for service businesses that need more enquiries and
              stronger credibility.
            </p>
          </div>
          <nav aria-label="Footer">
            <h3 className="text-[10px] font-black tracking-widest text-white uppercase md:text-[11px]">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/services"
                  className="text-xs text-white/60 transition hover:text-white md:text-sm"
                >
                  Services
                </Link>
              </li>
              {HASH_LINKS.map((l) => (
                <li key={l.hash}>
                  <a
                    href={withHash(l.hash)}
                    className="text-xs text-white/60 transition hover:text-white md:text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/landing"
                  className="text-xs text-white/60 transition hover:text-white md:text-sm"
                >
                  The experience
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="text-[10px] font-black tracking-widest text-white uppercase md:text-[11px]">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-xs text-white/60 transition hover:text-white md:text-sm"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-[10px] font-black tracking-widest text-white uppercase md:text-[11px]">
              Book a call
            </h3>
            <p className="mt-4 max-w-xs text-xs text-white/60 md:text-sm">
              20 minutes, practical feedback, no pressure.
            </p>
            <div className="mt-5">
              <Stamp href={`https://cal.com/${CAL_LINK}`} light>
                Book on Cal.com
              </Stamp>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-[10px] tracking-widest text-white/30 uppercase sm:flex-row">
          <p>&copy; 2026 {BRAND}</p>
          <p>Websites that earn trust</p>
        </div>
      </div>
    </footer>
  );
}
