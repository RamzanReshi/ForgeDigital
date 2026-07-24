import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cal from '@calcom/embed-react';
import { Menu, X } from 'lucide-react';
import { BRAND, CAL_LINK, PROJECTS, PROCESS, COMPARISON } from '../config';
import { ProjectModal } from '../components/ProjectModal';

type Project = (typeof PROJECTS)[number];

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const BOOKING_FACTS = ['20 minutes', 'Google Meet', 'Practical feedback', 'No pressure'];

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Book', href: '#book' },
];

/** Stamp button: rectangular, 2px ink border, solid ink block offset behind. */
function Stamp({
  href,
  children,
  filled = false,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  filled?: boolean;
  light?: boolean;
}) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden="true"
        className={`absolute inset-0 translate-x-1 translate-y-1 ${light ? 'bg-white' : 'bg-ink'}`}
      />
      <a
        href={href}
        className={`relative inline-flex min-h-11 items-center justify-center border-2 px-6 py-2.5 text-sm font-bold tracking-wide transition-transform duration-150 hover:translate-x-1 hover:translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-forge focus-visible:ring-offset-2 ${
          light
            ? 'border-white bg-[#0e0d0a] text-white'
            : filled
              ? 'border-ink bg-ink text-paper'
              : 'border-ink bg-paper text-ink'
        }`}
      >
        {children}
      </a>
    </span>
  );
}

/** Section index eyebrow: rule + numbered uppercase label + ghosted numeral. */
function SectionIndex({ num, label }: { num: string; label: string }) {
  return (
    <div className="relative border-t border-line pt-3">
      <p className="text-[11px] font-bold tracking-[0.2em] text-ink-soft uppercase">
        {num} — {label}
      </p>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-0 text-7xl leading-none text-ink opacity-[0.07] select-none md:text-9xl"
        style={serif}
      >
        {num}
      </span>
    </div>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <nav
          aria-label="Main"
          className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-5 md:h-16 md:px-8"
        >
          <a href="#top" className="text-lg tracking-tight" style={serif}>
            {BRAND}
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-ink-soft transition hover:text-ink">
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
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
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

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-28">
          <p
            className="home-fade-up text-[11px] font-bold tracking-[0.2em] text-forge uppercase"
            style={{ animationDelay: '0.05s' }}
          >
            Web design studio — UK &amp; T&uuml;rkiye
          </p>
          <h1
            className="home-fade-up mt-6 max-w-4xl text-4xl leading-[1.02] text-balance sm:text-5xl md:text-7xl"
            style={{ ...serif, animationDelay: '0.15s' }}
          >
            Professional websites that build trust and bring in clients.
          </h1>
          <p
            className="home-fade-up mt-6 max-w-[60ch] text-base leading-relaxed text-ink-soft md:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            We design conversion-focused websites for service businesses that want more enquiries,
            stronger credibility and a clearer customer journey.
          </p>
          <div
            className="home-fade-up mt-9 flex flex-wrap gap-5"
            style={{ animationDelay: '0.45s' }}
          >
            <Stamp href="#book" filled>
              Book Your Free Website Review
            </Stamp>
            <Stamp href="#work">See the work</Stamp>
          </div>
          <ul
            className="home-fade-up mt-10 flex flex-wrap divide-x divide-line border-t border-b border-line text-xs font-medium tracking-wide text-ink-soft uppercase"
            style={{ animationDelay: '0.55s' }}
          >
            <li className="px-4 py-3 first:pl-0">5 live client sites</li>
            <li className="px-4 py-3">Service businesses</li>
            <li className="px-4 py-3">UK &amp; T&uuml;rkiye</li>
          </ul>
        </section>

        {/* 01 — Selected Work */}
        <section id="work" aria-labelledby="work-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-28">
            <SectionIndex num="01" label="Selected Work" />
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="work-heading" className="text-3xl tracking-tight md:text-5xl" style={serif}>
                Selected work
              </h2>
              <p className="relative z-10 bg-paper px-1 text-sm text-ink-soft">
                Live client sites earning their keep.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
              {PROJECTS.map((project, i) => (
                <li key={project.name} className={i === 0 ? 'col-span-2' : undefined}>
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    aria-label={`View details for ${project.name}`}
                    className="group block w-full border border-line bg-white text-left transition hover:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-forge"
                  >
                    <div
                      className={`overflow-hidden border-b border-line ${
                        i === 0 ? 'aspect-[16/7]' : 'aspect-[4/3]'
                      }`}
                    >
                      <img
                        src={project.cover}
                        alt={`${project.name} website preview`}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base tracking-tight md:text-lg" style={serif}>
                        {project.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-bold tracking-[0.14em] text-ink-soft uppercase">
                        {project.sector}
                      </p>
                      <p className="mt-1.5 text-xs text-ink-soft md:text-sm">{project.result}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 02 — What changes */}
        <section id="compare" aria-labelledby="compare-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-28">
            <SectionIndex num="02" label="What Changes" />
            <div className="mt-6 grid gap-8 md:grid-cols-[1fr_2fr]">
              <h2
                id="compare-heading"
                className="text-3xl tracking-tight md:text-5xl"
                style={serif}
              >
                What changes
              </h2>
              <ul className="divide-y divide-line border-t border-b border-line">
                {COMPARISON.map((row) => (
                  <li key={row.after} className="flex items-baseline gap-4 py-4">
                    <span className="w-1/2 text-sm text-ink-soft line-through md:text-base">
                      {row.before}
                    </span>
                    <span aria-hidden="true" className="text-forge">
                      &rarr;
                    </span>
                    <span className="text-sm font-bold text-ink md:text-base">{row.after}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 03 — Process */}
        <section id="process" aria-labelledby="process-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-28">
            <SectionIndex num="03" label="Process" />
            <h2
              id="process-heading"
              className="mt-6 text-3xl tracking-tight md:text-5xl"
              style={serif}
            >
              How we work
            </h2>
            <ol className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-line">
              {PROCESS.map((step, i) => (
                <li key={step.title} className="md:px-6 md:first:pl-0 md:last:pr-0">
                  <span
                    aria-hidden="true"
                    className="block text-5xl leading-none text-forge md:text-6xl"
                    style={serif}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg tracking-tight md:text-xl" style={serif}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 04 — Book */}
        <section id="book" aria-labelledby="book-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-28">
            <SectionIndex num="04" label="Book a Call" />
            <h2
              id="book-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Book your free website review.
            </h2>
            <ul className="mt-8 flex flex-wrap divide-x divide-line border-t border-b border-line text-xs font-bold tracking-wide text-ink uppercase md:text-sm">
              {BOOKING_FACTS.map((fact) => (
                <li key={fact} className="px-4 py-3 first:pl-0">
                  {fact}
                </li>
              ))}
            </ul>
            <div className="mt-10 h-[70vh] min-h-[560px] rounded-none border border-line bg-white">
              <Cal
                calLink={CAL_LINK}
                config={{ layout: 'month_view' }}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </section>
      </main>

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
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
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
                {['Web design', 'Conversion strategy', 'SEO', 'Care & updates'].map((s) => (
                  <li key={s}>
                    <a
                      href="#book"
                      className="text-xs text-white/60 transition hover:text-white md:text-sm"
                    >
                      {s}
                    </a>
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

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
