import { useState } from 'react';
import { Star } from 'lucide-react';
import { BRAND, CAL_LINK, SITE_URL, PROJECTS, PROCESS } from '../config';
import { LANDING_TESTIMONIALS } from '../config.landing';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Stamp } from '../components/Stamp';
import { SectionIndex } from '../components/SectionIndex';
import { Seo } from '../components/Seo';
import { IntakeForm } from '../components/IntakeForm';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const LANDING_DESCRIPTION =
  'A website built to bring your business new customers every week, not a page that just sits there.';

const PROBLEMS = [
  "Your site looks dated and people don't trust it before they've read a word",
  "You're hard to find on Google Maps and local search",
  'Visitors leave without calling, messaging, or booking',
  "You rely on word of mouth alone, and growth has stalled",
  'The site is slow or awkward to use on a phone, where most visitors are',
  "You have no way to tell what's actually working",
];

const OUTCOMES = [
  {
    stat: '3-5x',
    label: 'More qualified enquiries',
    desc: 'Turns visits into real calls and messages',
  },
  {
    stat: '#1-3',
    label: 'Local Google rankings',
    desc: 'Helps customers find you before competitors',
  },
  {
    stat: '< 30s',
    label: 'From visit to message',
    desc: 'One-tap paths to WhatsApp or a call',
  },
  {
    stat: '24/7',
    label: 'Working while you sleep',
    desc: 'Makes the case when you are offline',
  },
];

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND,
    url: SITE_URL,
    description: LANDING_DESCRIPTION,
    areaServed: ['United Kingdom', 'Türkiye'],
  },
];

export default function Landing() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Seo
        title="Get a free website quote | Forge Digital"
        description={LANDING_DESCRIPTION}
        path="/landing"
        jsonLd={JSON_LD}
      />
      <Header />

      <main id="top">
        <section id="hero" aria-labelledby="hero-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <h1
              id="hero-heading"
              className="home-fade-up mt-6 max-w-4xl text-4xl leading-[1.02] text-balance sm:text-5xl md:text-7xl"
              style={{ ...serif, animationDelay: '0.15s' }}
            >
              <span className="block text-ink">A website isn't a brochure.</span>
              <span className="block text-forge">It's your best salesperson.</span>
            </h1>
            <p
              className="home-fade-up mt-6 max-w-[60ch] text-base leading-relaxed text-ink-soft md:text-lg"
              style={{ animationDelay: '0.3s' }}
            >
              {LANDING_DESCRIPTION}
            </p>
            <div
              className="home-fade-up mt-9 flex flex-wrap gap-5"
              style={{ animationDelay: '0.45s' }}
            >
              <Stamp filled onClick={() => setQuoteOpen(true)}>
                Get My Free Quote
              </Stamp>
              <Stamp href="#work">See the work</Stamp>
            </div>
            <div
              className="home-fade-up mt-10 grid grid-cols-1 divide-y divide-line border-t border-b border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
              style={{ animationDelay: '0.55s' }}
            >
              {['Reply within 24 hours', 'Fixed price, no surprises', 'Most sites live in 7-14 days'].map(
                (item) => (
                  <div
                    key={item}
                    className="px-6 py-6 text-center text-xs font-bold tracking-wide text-ink-soft uppercase"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="testimonials" aria-labelledby="testimonials-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="01" label="What clients say" />
            <h2 id="testimonials-heading" className="mt-6 text-3xl tracking-tight md:text-5xl" style={serif}>
              Real businesses. Real results.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {LANDING_TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col justify-between border border-line border-t-forge bg-white p-6"
                >
                  <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={15} className="fill-forge text-forge" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-base leading-relaxed text-ink md:text-lg">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-block transition focus:outline-none focus-visible:ring-2 focus-visible:ring-forge"
                    >
                      <p className="text-sm font-bold text-ink transition group-hover:text-forge">{t.name}</p>
                      <p className="text-xs text-ink-soft transition group-hover:text-forge">{t.title}</p>
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="problems" aria-labelledby="problems-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="02" label="Sound familiar?" />
            <h2 id="problems-heading" className="mt-6 text-3xl tracking-tight md:text-5xl" style={serif}>
              Sound familiar?
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-ink-soft md:text-base">
              If any of this sounds like your business, you are leaving enquiries on the table.
            </p>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {PROBLEMS.map((p) => (
                <li key={p} className="flex items-start gap-3 border border-line bg-white p-4">
                  <span aria-hidden="true" className="text-lg leading-none text-forge">
                    ✗
                  </span>
                  <p className="text-sm text-ink md:text-base">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="outcomes" aria-labelledby="outcomes-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="03" label="The outcome" />
            <h2 id="outcomes-heading" className="mt-6 text-3xl tracking-tight md:text-5xl" style={serif}>
              A site that pays for itself
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-ink-soft md:text-base">
              We don't build pages. We build a customer acquisition channel that works while you run
              the business.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {OUTCOMES.map((o) => (
                <article key={o.label} className="border border-line bg-white p-6">
                  <p className="text-3xl text-forge" style={serif}>
                    {o.stat}
                  </p>
                  <p className="mt-3 text-xs font-bold tracking-wide text-ink uppercase">{o.label}</p>
                  <p className="mt-2 text-sm leading-snug text-ink-soft">{o.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="04" label="Proof, not promises" />
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="work-heading" className="text-3xl tracking-tight md:text-5xl" style={serif}>
                Real sites. Real businesses.
              </h2>
              <p className="relative z-10 bg-paper px-1 text-sm text-ink-soft">
                Every project below is live right now, doing this exact job for a real business.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
              {PROJECTS.map((project, i) => (
                <li key={project.name} className={i === 0 ? 'col-span-2' : undefined}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" aria-labelledby="process-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="05" label="Process" />
            <h2
              id="process-heading"
              className="mt-6 text-3xl tracking-tight md:text-5xl"
              style={serif}
            >
              How we work
            </h2>
            <ol className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-0 md:divide-x md:divide-line">
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
                  {i === 0 && (
                    <div className="mt-4">
                      <Stamp calLink={CAL_LINK}>Book a call</Stamp>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="book" aria-labelledby="book-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="06" label="Book a call" />
            <h2
              id="book-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Prefer to talk it through first?
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-ink-soft md:text-base">
              20 minutes, practical feedback, no pressure.
            </p>
            <div className="mt-8">
              <Stamp calLink={CAL_LINK} filled>
                Book your free consultation
              </Stamp>
            </div>
          </div>
        </section>

        <section id="quote" aria-labelledby="quote-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="07" label="Get a quote" />
            <h2
              id="quote-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Tell us about your business
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-ink-soft md:text-base">
              Send what you've got. We'll reply within 24 hours with a clear plan and a fixed
              price.
            </p>
            <div className="mt-8 max-w-2xl">
              <IntakeForm variant="inline" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {quoteOpen && <IntakeForm variant="modal" onClose={() => setQuoteOpen(false)} />}
      <FloatingWhatsApp />
    </div>
  );
}
