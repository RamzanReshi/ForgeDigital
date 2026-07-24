import { Monitor, DollarSign } from 'lucide-react';
import { BRAND, CAL_LINK, SITE_URL, PROCESS } from '../config';
import { TruckBadge } from '../components/TruckBadge';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Stamp } from '../components/Stamp';
import { SectionIndex } from '../components/SectionIndex';
import { Seo } from '../components/Seo';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const BOOKING_FACTS = ['Free Consultation', '20 Minutes', 'Google Meet', 'Practical Feedback', 'Honest Scope', 'No Pressure'];

const TRUST = [
  { icon: Monitor, caption: 'A dozen live client websites', size: 76 },
  { icon: DollarSign, caption: 'One-time fixed cost, no surprise or recurring charges', size: 76 },
  { icon: TruckBadge, caption: 'Quotes in under 24 hours after a scope consultation', size: 76 },
];

const REASONS = [
  {
    title: 'Your site looks older than your work is good',
    body: 'A tired design makes a strong business look risky, and people feel it before they read a word.',
  },
  {
    title: 'People visit, but almost nobody gets in touch',
    body: "If your traffic isn't turning into calls or messages, the page is usually the problem, not the audience.",
  },
  {
    title: "It's slow, or awkward to use on a phone",
    body: 'Most of your visitors arrive on a phone. If it is painful there, you are losing them there.',
  },
  {
    title: 'You have outgrown the site you started with',
    body: 'What you built to get going may not match what the business does now, or who you want to reach.',
  },
  {
    title: "You can't update it without help",
    body: 'If changing a price or a photo means booking a developer, the site is working against you.',
  },
];

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
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Seo
        title="Forge Digital: professional websites that build trust"
        description={HOME_DESCRIPTION}
        path="/"
        jsonLd={JSON_LD}
      />
      <Header />

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
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
            <Stamp calLink={CAL_LINK} filled>
              Book Your Free Website Review
            </Stamp>
            <Stamp href="/work">See the work</Stamp>
          </div>
          <div
            className="home-fade-up mt-10 grid grid-cols-1 divide-y divide-line border-t border-b border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            style={{ animationDelay: '0.55s' }}
          >
            {TRUST.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.caption}
                  className="flex flex-col items-center gap-4 px-6 py-8 text-center md:py-10"
                >
                  <Icon aria-hidden="true" size={item.size} strokeWidth={1.25} className="text-ink/40" />
                  <p className="max-w-[24ch] text-xs font-medium tracking-wide text-ink-soft uppercase">
                    {item.caption}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 01 — Why a new site */}
        <section id="why" aria-labelledby="why-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="01" label="Why a new site" />
            <div className="mt-6 grid gap-8 md:grid-cols-[1fr_2fr]">
              <h2 id="why-heading" className="text-3xl tracking-tight md:text-5xl" style={serif}>
                Why you might need a new website
              </h2>
              <div>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                  People decide whether they trust a business in a few seconds, and your website is
                  usually the first thing they judge. If it looks dated, loads slowly, or leaves
                  them unsure what to do next, they quietly leave and call someone else. Here is
                  when it is worth fixing.
                </p>
                <ul className="mt-8 divide-y divide-line border-t border-b border-line">
                  {REASONS.map((r) => (
                    <li key={r.title} className="py-4">
                      <p className="text-base font-bold text-ink md:text-lg" style={serif}>
                        {r.title}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft md:text-base">{r.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Process */}
        <section id="process" aria-labelledby="process-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="02" label="Process" />
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

        {/* Work trust band */}
        <section aria-labelledby="work-band-heading">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-14">
              <div>
                <p className="text-[11px] font-bold tracking-[0.2em] text-forge uppercase">
                  Proof, not promises
                </p>
                <h2
                  id="work-band-heading"
                  className="mt-3 max-w-xl text-2xl tracking-tight md:text-3xl"
                  style={serif}
                >
                  We would rather show you than tell you.
                </h2>
                <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-ink-soft md:text-base">
                  Every site we build goes live for a real business you can visit. Take a look at
                  the work we have shipped.
                </p>
              </div>
              <div className="shrink-0">
                <Stamp href="/work" filled>
                  See our work
                </Stamp>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Book */}
        <section id="book" aria-labelledby="book-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
            <SectionIndex num="03" label="Book a Call" />
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
            <div className="mt-10">
              <Stamp calLink={CAL_LINK} filled>
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
