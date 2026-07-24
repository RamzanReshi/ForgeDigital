import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Stamp } from '../components/Stamp';
import { SectionIndex } from '../components/SectionIndex';
import { Seo } from '../components/Seo';
import { BRAND, SITE_URL, SERVICES } from '../config';

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
        {/* Hero */}
        <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-28">
          <p
            className="home-fade-up text-[11px] font-bold tracking-[0.2em] text-forge uppercase"
            style={{ animationDelay: '0.05s' }}
          >
            Services — UK &amp; T&uuml;rkiye
          </p>
          <h1
            className="home-fade-up mt-6 max-w-4xl text-4xl leading-[1.02] text-balance sm:text-5xl md:text-7xl"
            style={{ ...serif, animationDelay: '0.15s' }}
          >
            Websites, SEO and GEO for service businesses that want more enquiries.
          </h1>
          <p
            className="home-fade-up mt-6 max-w-[65ch] text-base leading-relaxed text-ink-soft md:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            {SERVICES_DESCRIPTION} Below is the full list of what we do and what you get with each
            one.
          </p>
          <div
            className="home-fade-up mt-9 flex flex-wrap gap-5"
            style={{ animationDelay: '0.45s' }}
          >
            <Stamp href="/#book" filled>
              Book a free review
            </Stamp>
            <Stamp href="#services-list">See services</Stamp>
          </div>
        </section>

        {/* 01 — Services */}
        <section id="services-list" aria-labelledby="services-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-28">
            <SectionIndex num="01" label="Services" />
            <h2
              id="services-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              What we do, end to end.
            </h2>
            <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-ink-soft md:text-base">
              Forge Digital designs, builds and maintains websites for service businesses across
              the UK and Türkiye — from first sketch through to search visibility and long-term
              care.
            </p>

            <div className="mt-10 divide-y divide-line border-t border-b border-line">
              {SERVICES.map((service, i) => (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24 py-10 first:pt-0"
                >
                  <div className="grid gap-4 md:grid-cols-[80px_1fr]">
                    <span
                      aria-hidden="true"
                      className="block text-4xl leading-none text-forge md:text-5xl"
                      style={serif}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl tracking-tight md:text-3xl" style={serif}>
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm font-bold text-ink-soft md:text-base">
                        {service.tagline}
                      </p>
                      <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-ink-soft md:text-base">
                        {service.description}
                      </p>
                      <ul className="mt-5 space-y-2 border-t border-line pt-5">
                        {service.includes.map((item) => (
                          <li key={item} className="flex gap-3 text-sm text-ink-soft md:text-base">
                            <span aria-hidden="true" className="text-forge">
                              —
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-sm font-bold text-ink md:text-base">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 02 — Book */}
        <section id="book-cta" aria-labelledby="book-cta-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-14 md:px-8 md:py-28">
            <SectionIndex num="02" label="Book" />
            <h2
              id="book-cta-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Ready to see what changes?
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-ink-soft md:text-base">
              20 minutes, practical feedback, no pressure. We'll look at your current site or plan
              and tell you honestly what would help.
            </p>
            <div className="mt-8">
              <Stamp href="/#book" filled>
                Book your free website review
              </Stamp>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
