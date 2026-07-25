import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';

const serif = { fontFamily: 'var(--font-display-serif)' } as const;
const paragraph = 'text-sm md:text-base text-ink-soft leading-relaxed';
const heading = 'mt-8 text-xl md:text-2xl';

export default function Privacy() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Seo
        title="Privacy Policy | Forge Digital"
        description="How Forge Digital handles your data when you visit the site or book a consultation."
        path="/privacy"
      />
      <Header />

      <main>
        <section className="mx-auto max-w-[1280px] px-5 py-10 md:px-8 md:py-16">
          <div className="max-w-[70ch]">
            <h1 className="text-4xl leading-tight md:text-6xl" style={serif}>
              Privacy Policy
            </h1>
            <p className={`${paragraph} mt-6`}>
              Forge Digital is a two-person web design studio based in Istanbul. This policy
              explains what happens to your data when you visit this site or book a call with us.
            </p>

            <h2 className={heading} style={serif}>
              Browsing this site
            </h2>
            <p className={`${paragraph} mt-3`}>
              We don't collect anything just because you're browsing. There's no analytics, no
              tracking scripts, and no advertising cookies on this site.
            </p>

            <h2 className={heading} style={serif}>
              Booking a consultation
            </h2>
            <p className={`${paragraph} mt-3`}>
              When you book a call through our booking widget, Cal.com handles the scheduling.
              Cal.com processes the name, email address and any other details you enter to arrange
              the call. We don't run our own database of this information; Cal.com stores it under
              its own privacy policy.
            </p>

            <h2 className={heading} style={serif}>
              Cookies and local storage
            </h2>
            <p className={`${paragraph} mt-3`}>
              We use your browser's local storage for one thing only: remembering that you've
              dismissed the cookie notice on this site. We don't set any tracking or advertising
              cookies ourselves. When the Cal.com booking widget or Google Fonts load, they may set
              their own cookies as part of how their service works. We don't control those and
              recommend checking their respective privacy policies if you want the details.
            </p>

            <h2 className={heading} style={serif}>
              Third parties we use
            </h2>
            <p className={`${paragraph} mt-3`}>
              We rely on a small number of outside services to run this site:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-soft md:text-base">
              <li>Cal.com, for booking consultations.</li>
              <li>Google Fonts, for the typefaces on this site.</li>
              <li>Vercel, for hosting.</li>
            </ul>
            <p className={`${paragraph} mt-3`}>
              Each of these has its own privacy policy governing how it handles data.
            </p>

            <h2 className={heading} style={serif}>
              Your rights
            </h2>
            <p className={`${paragraph} mt-3`}>
              If you're in the UK, you have rights under UK GDPR. If you're in Turkiye, you have
              rights under KVKK. In both cases, you can ask us what information we hold about you,
              ask us to correct it, or ask us to delete it. Get in touch and we'll do our best to
              help.
            </p>

            <h2 className={heading} style={serif}>
              Contact us
            </h2>
            <p className={`${paragraph} mt-3`}>
              If you have questions about this policy or want to exercise your rights, email us at
              hello@forgedigital.co.uk.
            </p>

            <p className="mt-8 text-sm text-ink-soft">Last updated: 25 July 2026</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
