import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Globe2,
  Video,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, CAL_LINK, PROJECTS } from '../config';
import { Seo } from '../components/Seo';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const REVIEW_ITEMS = [
  'Where visitors are losing confidence',
  'What is making your offer harder to understand',
  'The highest-impact change we would make first',
];

const FAQ = [
  {
    question: 'Is this a sales call?',
    answer:
      'It is a practical website review first. If we are a good fit, we can explain how we would help. There is no pressure and no obligation.',
  },
  {
    question: 'Do I need to prepare anything?',
    answer:
      'Just bring your current website link and a rough idea of what you want the site to achieve. We will guide the rest.',
  },
  {
    question: 'What if I do not have a website yet?',
    answer:
      'That is fine. We can review your offer, current customer journey and any examples you like, then suggest the clearest way forward.',
  },
];

function Calendar() {
  const placeholder = CAL_LINK.includes('YOUR_CAL_USERNAME');

  useEffect(() => {
    if (placeholder) return;
    getCalApi()
      .then((cal) => {
        cal('ui', {
          hideEventTypeDetails: false,
          layout: 'month_view',
          styles: { branding: { brandColor: '#16150f' } },
        });
      })
      .catch(() => undefined);
  }, [placeholder]);

  if (placeholder) {
    return (
      <div className="grid min-h-[560px] place-items-center px-8 text-center text-sm leading-relaxed text-ink-soft">
        Connect the Cal.com event in <code>src/config.ts</code> to show available times.
      </div>
    );
  }

  return (
    <Cal
      calLink={CAL_LINK}
      config={{ layout: 'month_view' }}
      style={{ width: '100%', height: '100%', overflow: 'auto' }}
    />
  );
}

export default function Book1() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f3ec] text-ink">
      <Seo
        title="Book your free website review — Forge Digital"
        description="Choose a time for a practical 20-minute review of your website, offer and booking journey. No pressure and no obligation."
        path="/book1"
      />

      <header className="border-b border-ink/15">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
          <Link
            to="/"
            className="text-lg tracking-tight transition-opacity hover:opacity-70 md:text-xl"
            style={serif}
            aria-label={`${BRAND} home`}
          >
            {BRAND}
          </Link>
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] uppercase sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#b4542a]" aria-hidden="true" />
            Free 20-minute review
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-[1400px] lg:grid-cols-[minmax(0,0.82fr)_minmax(560px,1.18fr)]">
          <div className="flex flex-col border-ink/15 px-5 py-12 md:px-10 md:py-16 lg:min-h-[calc(100vh-5rem)] lg:border-r lg:py-20 xl:px-16">
            <div className="max-w-[650px]">
              <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.18em] text-forge uppercase">
                <span className="h-px w-8 bg-forge" aria-hidden="true" />
                Free website review
              </p>
              <h1
                className="mt-7 text-[clamp(2.8rem,5.1vw,5.6rem)] leading-[0.96] tracking-[-0.035em] text-balance"
                style={serif}
              >
                See what is holding your website back.
              </h1>
              <p className="mt-7 max-w-[56ch] text-base leading-relaxed text-ink-soft md:text-lg">
                In 20 minutes, we will review your website through a customer&apos;s eyes and
                show you the clearest opportunities to improve trust, enquiries and bookings.
              </p>
            </div>

            <div className="mt-10 border-y border-ink/15 py-6 md:mt-12">
              <p className="text-[10px] font-bold tracking-[0.16em] text-ink-soft uppercase">
                You will leave with
              </p>
              <ul className="mt-5 space-y-4">
                {REVIEW_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium md:text-base">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-white">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 text-sm sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: Clock3, label: '20 minutes' },
                { icon: Video, label: 'Google Meet' },
                { icon: Globe2, label: 'UK & Türkiye' },
                { icon: CalendarDays, label: 'No pressure' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-ink-soft">
                  <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <a
              href="#choose-time"
              className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-bold text-forge lg:hidden"
            >
              Choose a time <ArrowDown size={16} aria-hidden="true" />
            </a>

            <p className="mt-auto hidden pt-12 text-xs leading-relaxed text-ink-soft lg:block">
              No generic audit report. No obligation. Just a clear conversation about what
              would make your website work harder.
            </p>
          </div>

          <div id="choose-time" className="bg-[#ebe4d8] p-3 sm:p-6 lg:p-8 xl:p-12">
            <div className="mx-auto overflow-hidden border border-ink/15 bg-white shadow-[0_18px_60px_rgba(22,21,15,0.08)] lg:sticky lg:top-6">
              <div className="flex flex-col gap-4 border-b border-ink/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.16em] text-forge uppercase">
                    Step 1 of 1
                  </p>
                  <h2 className="mt-1.5 text-xl tracking-tight sm:text-2xl" style={serif}>
                    Choose a time that works for you
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-soft">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                  </span>
                  Live availability
                </div>
              </div>
              <div className="h-[700px] min-h-[620px] w-full">
                <Calendar />
              </div>
              <p className="border-t border-ink/10 px-5 py-4 text-center text-[11px] leading-relaxed text-ink-soft">
                Your details stay private. You will receive a calendar invite and Google Meet
                link immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-ink/15 bg-ink text-white">
          <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-16">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold tracking-[0.18em] text-white/50 uppercase">
                  The work behind the advice
                </p>
                <h2 className="mt-3 max-w-xl text-3xl leading-tight md:text-4xl" style={serif}>
                  Real websites. Clear customer journeys.
                </h2>
              </div>
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-white"
              >
                View selected work <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-9 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-3">
              {PROJECTS.slice(0, 3).map((project) => (
                <li key={project.name} className="bg-ink p-5 md:p-7">
                  <p className="text-[10px] font-bold tracking-[0.14em] text-white/45 uppercase">
                    {project.sector}
                  </p>
                  <h3 className="mt-8 text-xl" style={serif}>
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{project.result}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-[1000px] px-5 py-16 md:px-10 md:py-24">
          <p className="text-center text-[10px] font-bold tracking-[0.18em] text-forge uppercase">
            Before you book
          </p>
          <h2 className="mx-auto mt-4 max-w-xl text-center text-3xl tracking-tight md:text-5xl" style={serif}>
            A few honest answers.
          </h2>
          <div className="mt-10 border-t border-ink/15">
            {FAQ.map((item, index) => (
              <details key={item.question} className="group border-b border-ink/15 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold marker:content-none md:text-lg">
                  <span>
                    <span className="mr-4 text-xs text-forge">0{index + 1}</span>
                    {item.question}
                  </span>
                  <span className="text-2xl font-normal text-ink-soft group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="max-w-[65ch] pt-4 pl-10 text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <a
            href="#choose-time"
            className="mx-auto mt-10 flex min-h-12 w-fit items-center justify-center gap-2 bg-ink px-6 text-sm font-bold text-white transition hover:bg-forge focus:outline-none focus-visible:ring-2 focus-visible:ring-forge focus-visible:ring-offset-4"
          >
            Book your free review <CalendarDays size={16} aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className="border-t border-ink/15 px-5 py-6 text-center text-[10px] tracking-[0.14em] text-ink-soft uppercase md:px-10">
        © 2026 {BRAND} · Practical advice, no pressure
      </footer>
    </div>
  );
}
