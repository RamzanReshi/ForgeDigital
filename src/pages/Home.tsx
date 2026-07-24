import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cal from '@calcom/embed-react';
import { BRAND, CAL_LINK, SITE_URL, PROJECTS, PROCESS, COMPARISON, FAQ } from '../config';
import { ProjectModal } from '../components/ProjectModal';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Stamp } from '../components/Stamp';
import { SectionIndex } from '../components/SectionIndex';
import { Seo } from '../components/Seo';

type Project = (typeof PROJECTS)[number];

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const BOOKING_FACTS = ['20 minutes', 'Google Meet', 'Practical feedback', 'No pressure'];

const HOME_DESCRIPTION =
  'We design conversion-focused websites for service businesses that want more enquiries, stronger credibility and a clearer customer journey.';

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND,
    url: SITE_URL,
    description: HOME_DESCRIPTION,
    areaServed: ['United Kingdom', 'Türkiye'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND,
    url: SITE_URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  },
];

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Seo
        title="Forge Digital — Professional websites that build trust"
        description={HOME_DESCRIPTION}
        path="/"
        jsonLd={JSON_LD}
      />
      <Header />

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
            {HOME_DESCRIPTION}
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
            <li className="px-4 py-3 first:pl-0">A dozen live client websites</li>
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

        {/* 05 — FAQ */}
        <section id="faq" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-28">
            <SectionIndex num="05" label="FAQ" />
            <h2
              id="faq-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Questions, answered.
            </h2>
            <div className="mt-8 divide-y divide-line border-t border-b border-line">
              {FAQ.map((item) => {
                const linkTo = 'linkTo' in item ? item.linkTo : undefined;
                const linkLabel = 'linkLabel' in item ? item.linkLabel : undefined;
                return (
                  <details key={item.q} className="group py-5">
                    <summary className="cursor-pointer list-none text-base font-bold tracking-tight text-ink marker:content-none md:text-lg" style={serif}>
                      {item.q}
                    </summary>
                    <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-ink-soft md:text-base">
                      {item.a}
                    </p>
                    {linkTo && (
                      <Link
                        to={linkTo}
                        className="mt-3 inline-block text-sm font-bold text-forge transition hover:opacity-80"
                      >
                        {linkLabel} &rarr;
                      </Link>
                    )}
                  </details>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
