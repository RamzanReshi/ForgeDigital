import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Stamp } from '../components/Stamp';
import { SectionIndex } from '../components/SectionIndex';
import { Seo } from '../components/Seo';
import { BRAND, CAL_LINK, SITE_URL, SERVICES, FAQ } from '../config';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const SERVICES_DESCRIPTION =
  'Website design, development, SEO and GEO for service businesses in the UK and Türkiye who want more enquiries and stronger credibility.';

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BRAND,
    url: `${SITE_URL}/services`,
    areaServed: ['United Kingdom', 'Türkiye'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
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

export default function Services() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Seo
        title="Website Design, SEO & GEO Services | Forge Digital"
        description={SERVICES_DESCRIPTION}
        path="/services"
        jsonLd={JSON_LD}
      />
      <Header />

      <main>
        {/* 01 — Services */}
        <section id="services-list" aria-labelledby="services-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="01" label="Services" />
            <h1
              id="services-heading"
              className="mt-6 text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              What we do, end to end.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
              Forge Digital designs, builds and maintains websites for service businesses across
              the UK and Türkiye. We handle it end to end, from the first sketch through to search
              visibility and long-term care.
            </p>

            <div className="mt-10 space-y-2">
              {SERVICES.map((service, i) => (
                <details
                  key={service.slug}
                  id={service.slug}
                  className="group scroll-mt-24 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-start gap-4 marker:content-none md:gap-6">
                    <span
                      aria-hidden="true"
                      className="w-10 shrink-0 text-4xl leading-none text-forge md:w-20 md:text-5xl"
                      style={serif}
                    >
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span className="block text-2xl tracking-tight md:text-3xl" style={serif}>
                        {service.title}
                      </span>
                      <span className="mt-1 block text-sm font-bold text-ink-soft md:text-base">
                        {service.tagline}
                      </span>
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-2 h-5 w-5 shrink-0 text-forge transition-transform duration-200 group-open:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="mt-4 md:pl-[104px]">
                    <p className="text-sm leading-relaxed text-ink-soft md:text-base">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-line pt-5">
                      {service.includes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-ink-soft md:text-base">
                          <span aria-hidden="true" className="text-forge">
                            &rarr;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-sm font-bold text-ink md:text-base">
                      {service.outcome}
                    </p>
                  </div>
                </details>
              ))}
            </div>
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
              Ready to see what changes?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
              20 minutes, practical feedback, no pressure. We'll look at your current site or plan
              and tell you honestly what would help.
            </p>
            <div className="mt-8">
              <Stamp calLink={CAL_LINK} filled>
                Book your free website review
              </Stamp>
            </div>
          </div>
        </section>

        {/* 03 — FAQ */}
        <section id="faq" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="03" label="FAQ" />
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
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold tracking-tight text-ink marker:content-none md:text-lg" style={serif}>
                      <span>{item.q}</span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 shrink-0 text-forge transition-transform duration-200 group-open:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
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
    </div>
  );
}
