import { BRAND, CAL_LINK, SITE_URL, TEAM } from '../config';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Stamp } from '../components/Stamp';
import { SectionIndex } from '../components/SectionIndex';
import { Seo } from '../components/Seo';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;

const SOCIAL_ORDER = ['github', 'linkedin', 'whatsapp'] as const;
const SOCIAL_LABELS = { github: 'GitHub', linkedin: 'LinkedIn', whatsapp: 'WhatsApp' } as const;

function SocialIcon({ name }: { name: (typeof SOCIAL_ORDER)[number] }) {
  const props = { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true, className: 'h-5 w-5' };
  if (name === 'github') {
    return (
      <svg {...props}>
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
      </svg>
    );
  }
  if (name === 'linkedin') {
    return (
      <svg {...props}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.9.9-2.8-.2-.3A8.3 8.3 0 1 1 12 20.3zm4.8-6c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
    </svg>
  );
}

const ABOUT_DESCRIPTION =
  'Forge Digital is a two-person web studio run by Ramzan Ahmad and Ahmed Reshi, building conversion-focused websites for service businesses in the UK and Türkiye.';

const JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND,
    url: `${SITE_URL}/about`,
    description: ABOUT_DESCRIPTION,
    areaServed: ['United Kingdom', 'Türkiye'],
    founder: TEAM.map((person) => ({
      '@type': 'Person',
      name: person.name,
      jobTitle: person.role,
    })),
  },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Seo
        title="About Forge Digital | Ramzan Ahmad & Ahmed Reshi"
        description={ABOUT_DESCRIPTION}
        path="/about"
        jsonLd={JSON_LD}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[1280px] px-5 py-8 md:px-8 md:py-12">
          <p
            className="home-fade-up text-[11px] font-bold tracking-[0.2em] text-forge uppercase"
            style={{ animationDelay: '0.05s' }}
          >
            About
          </p>
          <h1
            className="home-fade-up mt-6 max-w-4xl text-4xl leading-[1.02] text-balance sm:text-5xl md:text-7xl"
            style={{ ...serif, animationDelay: '0.15s' }}
          >
            Two people who build trust, not just websites.
          </h1>
          <p
            className="home-fade-up mt-6 text-base leading-relaxed text-ink-soft md:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Forge Digital is cofounded by Ramzan Ahmad and Ahmed Reshi. Based in Istanbul, we build
            websites and e-commerce stores, and work on SEO and GEO for service businesses that want
            to be found and trusted. For the full list of what we do, head to our services.
          </p>
          <div className="home-fade-up mt-8" style={{ animationDelay: '0.4s' }}>
            <Stamp href="/services" filled>
              See our services
            </Stamp>
          </div>
        </section>

        {/* 01 — Who we are */}
        <section id="team" aria-labelledby="team-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-8 md:px-8 md:py-12">
            <SectionIndex num="01" label="Who we are" />
            <h2
              id="team-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              The two of us.
            </h2>

            {/* TODO: pending social links live in config.ts TEAM.socials (Ahmed's LinkedIn, Ramzan's WhatsApp); empty values render as dimmed placeholders */}
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
              {TEAM.map((person) => (
                <div key={person.name}>
                  <h3 className="text-2xl tracking-tight md:text-3xl" style={serif}>
                    {person.name.split(' ')[0]}{' '}
                    <span className="text-forge">
                      {person.name.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>
                  <p className="mt-1 text-[11px] font-bold tracking-[0.14em] text-ink uppercase">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                    {person.bio}
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    {SOCIAL_ORDER.map((key) => {
                      const url = person.socials[key];
                      const label = SOCIAL_LABELS[key];
                      return url ? (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name} on ${label}`}
                          className="text-ink-soft transition hover:text-forge"
                        >
                          <SocialIcon name={key} />
                        </a>
                      ) : (
                        <span
                          key={key}
                          title="Coming soon"
                          aria-label={`${label} coming soon`}
                          className="text-ink-soft/30"
                        >
                          <SocialIcon name={key} />
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 — Book */}
        <section id="book-cta" aria-labelledby="book-cta-heading">
          <div className="mx-auto max-w-[1280px] px-5 py-8 md:px-8 md:py-12">
            <SectionIndex num="02" label="Book" />
            <h2
              id="book-cta-heading"
              className="mt-6 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl"
              style={serif}
            >
              Want to talk to us directly?
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-ink-soft md:text-base">
              20 minutes, practical feedback, no pressure. You'll speak to one of us, not a sales
              team.
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
    </div>
  );
}
