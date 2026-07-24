import { useState } from 'react';
import { BRAND, CAL_LINK, SITE_URL, PROJECTS } from '../config';
import { ProjectModal } from '../components/ProjectModal';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Stamp } from '../components/Stamp';
import { SectionIndex } from '../components/SectionIndex';
import { Seo } from '../components/Seo';

type Project = (typeof PROJECTS)[number];

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const WORK_DESCRIPTION =
  'A selection of live client websites Forge Digital has designed and built for service businesses across the UK and Türkiye.';

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Selected work | ${BRAND}`,
    url: `${SITE_URL}/work`,
    description: WORK_DESCRIPTION,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: PROJECTS.map((project, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: project.name,
      url: project.href,
    })),
  },
];

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Seo
        title="Selected work | Forge Digital"
        description={WORK_DESCRIPTION}
        path="/work"
        jsonLd={JSON_LD}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
          <p
            className="home-fade-up text-[11px] font-bold tracking-[0.2em] text-forge uppercase"
            style={{ animationDelay: '0.05s' }}
          >
            Selected work
          </p>
          <h1
            className="home-fade-up mt-6 max-w-4xl text-4xl leading-[1.02] text-balance sm:text-5xl md:text-7xl"
            style={{ ...serif, animationDelay: '0.15s' }}
          >
            Websites we've built for real businesses.
          </h1>
          <p
            className="home-fade-up mt-6 max-w-[60ch] text-base leading-relaxed text-ink-soft md:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            {WORK_DESCRIPTION}
          </p>
        </section>

        {/* 01 — Selected Work */}
        <section id="work" aria-labelledby="work-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
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

        {/* 02 — Book */}
        <section id="book-cta" aria-labelledby="book-cta-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="02" label="Book" />
            <h2
              id="book-cta-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Want a site that looks like this?
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-ink-soft md:text-base">
              20 minutes, practical feedback, no pressure. We'll look at your current site or plan
              and tell you honestly what would help.
            </p>
            <div className="mt-8">
              <Stamp calLink={CAL_LINK} filled>
                Book a free consultation
              </Stamp>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
