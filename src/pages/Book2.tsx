import { useEffect, useState } from 'react';
import { CheckCircle2, Clock, ShieldCheck, Star } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionIndex } from '../components/SectionIndex';
import { Seo } from '../components/Seo';
import { SITE_URL, CAL_LINK, PROJECTS } from '../config';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const BOOK_DESCRIPTION =
  'Book a free 20-minute website review with Forge Digital. Practical feedback on what is losing you enquiries and what to fix first — no pressure, no pitch.';

const PAINS = [
  'Traffic comes in but almost nobody enquires.',
  "Your site looks fine but doesn't say why you're the right choice.",
  'You compete on price because nothing sets you apart.',
  "You're not sure what to fix first, so nothing gets fixed.",
];

const GET = [
  'A live walkthrough of your current site or plan.',
  'The single biggest thing costing you enquiries.',
  'A short, prioritised list of what to fix first.',
  'An honest answer on whether we can help — or who can.',
];

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Book a review', item: `${SITE_URL}/book2` },
    ],
  },
];

/** Inline Cal.com embed for the funnel. Mounts on load — this page exists to book. */
function CalEmbed() {
  const [ready, setReady] = useState(false);
  const placeholder = CAL_LINK.includes('YOUR_CAL_USERNAME');

  useEffect(() => {
    if (placeholder) return;
    let cancelled = false;
    (async () => {
      const cal = await getCalApi();
      if (cancelled) return;
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      setReady(true);
    })().catch(() => setReady(true));
    return () => {
      cancelled = true;
    };
  }, [placeholder]);

  if (placeholder) {
    return (
      <p className="grid min-h-[420px] place-content-center px-6 text-center text-sm leading-loose text-ink-soft">
        Set <code className="mx-1 rounded bg-paper-2 px-1.5 py-0.5">CAL_LINK</code> in
        <code className="mx-1 rounded bg-paper-2 px-1.5 py-0.5">src/config.ts</code> to load the
        live calendar.
      </p>
    );
  }

  return (
    <div className="relative min-h-[500px] w-full">
      {!ready && (
        <p className="absolute inset-0 flex items-center justify-center text-sm text-ink-soft">
          Loading calendar…
        </p>
      )}
      <Cal
        calLink={CAL_LINK}
        style={{ width: '100%', height: '100%', minHeight: 500, overflow: 'hidden' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}

export default function Book2() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Seo
        title="Book a Free Website Review | Forge Digital"
        description={BOOK_DESCRIPTION}
        path="/book2"
        jsonLd={JSON_LD}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-24">
          <div className="grid gap-10 md:gap-14">
            {/* Hero copy spread full-width: statement left, supporting column right */}
            <div className="grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-end md:gap-16">
              <div>
                <p
                  className="home-fade-up inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-forge uppercase"
                  style={{ animationDelay: '0.05s' }}
                >
                  <Clock size={14} aria-hidden="true" /> 20 minutes — free
                </p>
                <h1
                  className="home-fade-up mt-5 text-4xl leading-[1.03] text-balance sm:text-5xl md:text-6xl"
                  style={{ ...serif, animationDelay: '0.15s' }}
                >
                  Find out why your website isn't bringing you enquiries.
                </h1>
              </div>
              <div>
                <p
                  className="home-fade-up text-base leading-relaxed text-ink-soft md:text-lg"
                  style={{ animationDelay: '0.3s' }}
                >
                  Book a free review and we'll look at your current site or plan together, then tell
                  you honestly what's costing you enquiries and what to fix first. No pressure, no
                  pitch.
                </p>
                <ul
                  className="home-fade-up mt-6 flex flex-col gap-3"
                  style={{ animationDelay: '0.4s' }}
                >
                  {[
                    'Practical feedback in plain English',
                    'A prioritised fix list you keep either way',
                    'No obligation to work with us',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm md:text-base">
                      <CheckCircle2 size={18} className="shrink-0 text-forge" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  className="home-fade-up mt-6 flex items-center gap-5 text-sm text-ink-soft"
                  style={{ animationDelay: '0.5s' }}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-forge" aria-hidden="true" /> No hard sell
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Star size={16} className="text-forge" aria-hidden="true" /> 5 sites shipped
                  </span>
                </div>
              </div>
            </div>

            {/* Booking card — capped to the calendar's natural width so the
                month_view embed fills it instead of floating in empty space. */}
            <div
              id="book"
              className="home-fade-up mx-auto w-full max-w-[980px] scroll-mt-24 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[6px_6px_0_0_var(--color-ink,#0e0d0a)]"
              style={{ animationDelay: '0.25s' }}
            >
              <div className="border-b border-line px-5 py-4">
                <p className="text-sm font-bold tracking-wide">Pick a time</p>
                <p className="mt-0.5 text-xs text-ink-soft">Free 20-minute website review call</p>
              </div>
              <CalEmbed />
            </div>
          </div>
        </section>

        {/* 01 — Who this is for */}
        <section aria-labelledby="pains-heading" className="border-t border-line">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-24">
            <SectionIndex num="01" label="Sound familiar?" />
            <h2
              id="pains-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Book this call if any of these are true.
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {PAINS.map((pain) => (
                <div key={pain} className="bg-paper px-6 py-8">
                  <p className="text-base leading-relaxed md:text-lg" style={serif}>
                    {pain}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 — What you get */}
        <section aria-labelledby="get-heading" className="border-t border-line">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-24">
            <SectionIndex num="02" label="What you get" />
            <h2
              id="get-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              You leave with a plan, not a sales pitch.
            </h2>
            <ul className="mt-10 divide-y divide-line border-t border-b border-line">
              {GET.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 py-6">
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none text-forge md:text-3xl"
                    style={serif}
                  >
                    0{i + 1}
                  </span>
                  <span className="text-base leading-relaxed md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 — Proof */}
        <section aria-labelledby="proof-heading" className="border-t border-line">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-24">
            <SectionIndex num="03" label="Recent work" />
            <h2
              id="proof-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Real sites, built to bring in enquiries.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-transform duration-150 hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-paper-2">
                    <img
                      src={p.cover}
                      alt={`${p.name} website`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] font-bold tracking-[0.15em] text-forge uppercase">
                      {p.sector}
                    </p>
                    <p className="mt-2 text-lg" style={serif}>
                      {p.name}
                    </p>
                    <p className="mt-1 text-sm text-ink-soft">{p.result}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section aria-labelledby="final-heading" className="border-t border-line bg-[#0e0d0a]">
          <div className="mx-auto max-w-[1280px] px-5 py-16 text-center md:px-8 md:py-24">
            <h2
              id="final-heading"
              className="mx-auto max-w-2xl text-3xl leading-tight tracking-tight text-white md:text-5xl"
              style={serif}
            >
              Twenty minutes could change what your website is worth.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-sm leading-relaxed text-white/70 md:text-base">
              Grab a time above. If it turns out we're not the right fit, we'll still tell you what
              to fix.
            </p>
            <div className="mt-9">
              <a
                href="#book"
                className="inline-flex min-h-11 items-center justify-center border-2 border-white bg-white px-8 py-3 text-sm font-bold tracking-wide text-[#0e0d0a] transition-transform duration-150 hover:translate-x-1 hover:translate-y-1"
              >
                Pick a time
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
