# TODO — Forge Digital

Fast-follow and deferred items from the best-practices / security hardening pass.

## Deliberate scope decisions
- **Multilingual (EN/AR/TR) NOT implemented.** This is Forge Digital's own English-language
  agency site, so the site-pro multilingual mandate is intentionally out of scope. Revisit only
  if the studio decides to market in Arabic/Turkish.
- **Per-service SEO landing pages (`/services/:slug`) not built.** Services live on one page with
  anchor links, which is fine at this scale. Consider splitting into `:slug` pages later if we
  want each service to rank independently.

## SEO / indexing
- **Prerender / SSG not set up.** The site is a client-rendered SPA; per-route `<title>`, meta,
  canonical, OG and JSON-LD are injected via JS (React 19 hoisting). Modern Google renders JS, but
  for the most reliable indexing add `vite-plugin-ssg` (or equivalent) to pre-render `/`,
  `/services`, `/work`, `/about`, `/privacy` to static HTML before launch.
- **No `og:image` / `twitter:image`.** Add a branded 1200x630 preview image and wire it into the
  Seo component (`og:image`, `twitter:image`) so shared links look right.

## Security (from VibeSec warnings)
- **Verify CSP against the deployed build.** Confirm the Cal.com booking modal opens and the
  JSON-LD structured data is not stripped under the shipped Content-Security-Policy. If the modal
  breaks, add the exact Cal origin to `script-src`; if JSON-LD is blocked, hash it. CSP is only
  trustworthy after a live test.
- **Self-host fonts via `@fontsource`.** Replaces the Google Fonts `<link>` (no SRI possible on it),
  improves LCP, and lets us drop `fonts.googleapis.com` / `fonts.gstatic.com` from the CSP.
- Keep JSON-LD input static — never pass user-supplied text into the `Seo` `jsonLd` prop.

## Content placeholders
- **Contact email `hello@forgedigital.co.uk`** (used in the Privacy Policy) is a placeholder that
  matches SITE_URL. Create this mailbox or replace it with the real Forge Digital address.
- **Booking link** `CAL_LINK = ahmedreshi/forgedigitalconsultation` is temporary. Swap to the
  shared Forge Digital / collective event slug once that Cal.com account exists.
- **Ahmed Reshi's LinkedIn** is an empty placeholder in `config.ts` (renders a dimmed icon) — add
  the URL when available.
- **Privacy Policy "Last updated: 25 July 2026"** — update whenever the policy changes.
- `SITE_URL = https://forgedigital.co.uk` — confirm this is the real production domain (used for
  canonical URLs, sitemap, robots).

## Performance (measure post-deploy)
- Log Lighthouse mobile LCP (< 2.5s target) and CLS (< 0.1 target) after deploy and tune if needed.
