import { useEffect, useState } from 'react';
import { ArrowUp, Check, Clock, ShieldCheck, Sparkles, X } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SectionIndex } from '../components/SectionIndex';
import { Seo } from '../components/Seo';
import { SITE_URL, CAL_LINK, PROJECTS } from '../config';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const BOOK_DESCRIPTION =
  'Book a free 20-minute website review with Forge Digital. See exactly what is losing you enquiries and what to fix first — then decide. No pitch, no pressure.';

/** before → after contrast that drives the whole argument. */
const SHIFTS = [
  { from: 'Visitors land, glance, and leave', to: 'Visitors understand your offer in seconds' },
  { from: 'You compete on price alone', to: 'You stand out and charge what you are worth' },
  { from: 'The site looks fine but nobody enquires', to: 'One clear path turns visits into enquiries' },
  { from: "You don't know what to fix first", to: 'You have a prioritised list you can act on' },
];

const STEPS = [
  { n: '01', t: 'Grab a slot', b: 'Pick any free 20-minute time above. Zero commitment.' },
  { n: '02', t: 'We look together', b: 'A live walkthrough of your site or plan — the real bottleneck.' },
  { n: '03', t: 'You leave with a plan', b: 'A short, prioritised fix list you keep whether we work together or not.' },
];

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Book a review', item: `${SITE_URL}/book3` },
    ],
  },
];

/** Inline Cal.com embed. Mounts on load — this page exists to book. */
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
    <div className="relative min-h-[520px] w-full">
      {!ready && (
        <p className="absolute inset-0 flex items-center justify-center text-sm text-ink-soft">
          Loading calendar…
        </p>
      )}
      <Cal
        calLink={CAL_LINK}
        style={{ width: '100%', height: '100%', minHeight: 520, overflow: 'hidden' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}

export default function Book3() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Seo
        title="Book Your Free Website Review | Forge Digital"
        description={BOOK_DESCRIPTION}
        path="/book3"
        jsonLd={JSON_LD}
      />
      <Header />

      <main>
        {/* ============ BOOK FIRST — dark header + calendar at the very top ==== */}
        <section id="book" className="scroll-mt-20 bg-[#0e0d0a] text-white">
          <div className="mx-auto max-w-[1080px] px-5 py-14 text-center md:px-8 md:py-20">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-forge uppercase">
              <Clock size={14} aria-hidden="true" /> Free · 20 minutes · no pitch
            </p>
            <h1
              className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.02] text-balance sm:text-5xl md:text-6xl"
              style={serif}
            >
              Pick a time. Find out what your website is really costing you.
            </h1>
            <p className="mx-auto mt-5 max-w-[56ch] text-base leading-relaxed text-white/70 md:text-lg">
              A short, honest review of your current site or plan — and the one change that would
              bring in more enquiries. Choose a slot below; the rest of this page explains why it's
              worth 20 minutes.
            </p>

            {/* Calendar right under the heading */}
            <div className="mx-auto mt-10 w-full max-w-[980px] overflow-hidden rounded-2xl border border-white/10 bg-white text-ink shadow-2xl">
              <div className="border-b border-line px-5 py-4 text-left">
                <p className="text-sm font-bold tracking-wide">Pick a time</p>
                <p className="mt-0.5 text-xs text-ink-soft">Free 20-minute website review call</p>
              </div>
              <CalEmbed />
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/60">
              <ShieldCheck size={16} className="text-forge" aria-hidden="true" /> No hard sell —
              you keep the plan either way.
            </p>
          </div>
        </section>

        {/* ============ THE FUNNEL — why it's worth it ======================== */}

        {/* 01 — Pain / desire shift */}
        <section aria-labelledby="shift-heading" className="border-b border-line">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-24">
            <SectionIndex num="01" label="Why this call" />
            <h2
              id="shift-heading"
              className="mt-6 max-w-3xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Most sites don't fail because they're ugly. They fail because they don't sell.
            </h2>
            <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-ink-soft md:text-base">
              You're paying for hosting, maybe ads, and the traffic arrives — but the enquiries
              don't. In 20 minutes we find where that leak is. Here's the shift we're after.
            </p>

            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
              {SHIFTS.map((s) => (
                <div key={s.from} className="flex flex-col gap-4 bg-paper px-6 py-7">
                  <p className="flex items-start gap-3 text-sm text-ink-soft md:text-base">
                    <X size={18} className="mt-0.5 shrink-0 text-ink/40" aria-hidden="true" />
                    <span className="line-through decoration-ink/30">{s.from}</span>
                  </p>
                  <p className="flex items-start gap-3 text-base md:text-lg" style={serif}>
                    <Check size={18} className="mt-1 shrink-0 text-forge" aria-hidden="true" />
                    {s.to}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 — How it works */}
        <section aria-labelledby="how-heading" className="border-b border-line">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-24">
            <SectionIndex num="02" label="How it works" />
            <h2
              id="how-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Three steps. Twenty minutes. No homework.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="border-t-2 border-ink pt-5">
                  <span className="text-4xl leading-none text-forge md:text-5xl" style={serif}>
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-xl tracking-tight md:text-2xl" style={serif}>
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Proof */}
        <section aria-labelledby="proof-heading" className="border-b border-line">
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

        {/* ============ CLOSING CTA — copy + button back up to the calendar === */}
        <section aria-labelledby="close-heading" className="bg-[#0e0d0a] text-white">
          <div className="mx-auto max-w-[1280px] px-5 py-16 text-center md:px-8 md:py-28">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-forge uppercase">
              <Sparkles size={14} aria-hidden="true" /> Your move
            </p>
            <h2
              id="close-heading"
              className="mx-auto mt-6 max-w-3xl text-3xl leading-tight tracking-tight text-white md:text-5xl"
              style={serif}
            >
              Twenty minutes now could change what every visitor is worth for years.
            </h2>
            <p className="mx-auto mt-5 max-w-[54ch] text-sm leading-relaxed text-white/70 md:text-base">
              Worst case, you leave with a clear plan and a second opinion — free. Best case, we fix
              the thing that's been quietly costing you enquiries. Grab a time.
            </p>
            <div className="mt-9">
              <a
                href="#book"
                className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-white bg-white px-8 py-3 text-sm font-bold tracking-wide text-[#0e0d0a] transition-transform duration-150 hover:translate-x-1 hover:translate-y-1"
              >
                <ArrowUp size={16} aria-hidden="true" /> Pick my time
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
