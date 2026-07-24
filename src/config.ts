export const CAL_LINK = "ahmedreshi/20min";

export const BRAND = "Forge Digital";

import ontimeCover from "./assets/previews/ontime-removals.jpg";
import mrtCover from "./assets/previews/mrt-main.jpg";
import suleymanCover from "./assets/previews/barber-shop.webp";
import saskCover from "./assets/previews/sask-main.webp";
import hikelyCover from "./assets/previews/hikely.webp";

export const PROJECTS = [
  {
    name: "On Time Removals",
    sector: "Removals & logistics",
    result: "Quote requests straight from the fold",
    accent: "#2f5d50",
    cover: ontimeCover,
    href: "https://www.ontimeremovals.co.uk",
    description:
      "Conversion-focused removals website with strong phone and quote CTAs above the fold.",
    outcome:
      "Presents the business as fast, available and trustworthy for urgent local and nationwide jobs.",
    benefit:
      "Turns high-intent visitors into direct quote requests and calls with minimal friction.",
  },
  {
    name: "MRT Kuru Buz",
    sector: "Dry ice supply",
    result: "High-intent wholesale enquiries",
    accent: "#3a4a7a",
    cover: mrtCover,
    href: "https://mrtkurubuz.com",
    description: "SEO-optimized product catalog for a dry ice supplier.",
    outcome: "Captures commercial buyers and routes them to a WhatsApp funnel.",
    benefit: "Drives high-intent wholesale inquiries directly from Google search.",
  },
  {
    name: "Süleyman Seven",
    sector: "Barbershop",
    result: "Local search into WhatsApp bookings",
    accent: "#7a4433",
    cover: suleymanCover,
    href: "https://suleymanseven.com",
    description: "Multilingual barbershop website with service pricing and local SEO.",
    outcome: "Optimized for Google Local Search to attract tourists and walk-in clients.",
    benefit: "Turns search traffic into automatic WhatsApp bookings and paid chairs.",
  },
  {
    name: "Saygın Akademi",
    sector: "Sports club",
    result: "Members registered without chasing",
    accent: "#4a5340",
    cover: saskCover,
    href: "https://sayginakademisporkulubu.com",
    description: "Fast static site with schedule presentation and member dashboard.",
    outcome: "Includes a back-end system for gym attendance and subscription tracking.",
    benefit: "Streamlines member registration and removes manual payment chasing.",
  },
  {
    name: "Hikely Club",
    sector: "Outdoor experiences",
    result: "Automated trip reservations",
    accent: "#2b5566",
    cover: hikelyCover,
    href: "https://hikely.vercel.app",
    description: "Multilingual booking site for an outdoor adventure club around Istanbul.",
    outcome: "Replaced manual booking chats with an automated reservation flow.",
    benefit: "Fills up trips automatically while saving hours of back-and-forth messaging.",
  },
] as const;

export const PROCESS = [
  {
    title: "Understand",
    body: "We learn your customers, your offer and where enquiries are lost today.",
  },
  {
    title: "Position",
    body: "We sharpen the message so a visitor knows within seconds why you are the right choice.",
  },
  {
    title: "Design",
    body: "We design a calm, credible interface built around one conversion path.",
  },
  {
    title: "Build and launch",
    body: "We build it fast, measure it, and hand over a site your team can actually run.",
  },
] as const;

export const COMPARISON = [
  { before: "Vague copy", after: "Clear offer" },
  { before: "Random effects", after: "Purposeful design" },
  { before: "Fake proof", after: "Real work" },
  { before: "Many CTAs", after: "One focused journey" },
] as const;

export const SITE_URL = "https://forgedigital.co.uk";

export const SERVICES = [
  {
    slug: "web-design",
    title: "Web Design",
    tagline: "A calm, credible interface built around one conversion path.",
    description:
      "Web design is the layout, hierarchy and visual language that decides whether a visitor trusts you within seconds. We design each page around a single customer journey, so nothing competes with the enquiry you actually want.",
    includes: [
      "Custom layout for every page, not a template",
      "Typography and colour system matched to your brand",
      "Wireframes reviewed with you before build",
      "Accessible, responsive design from the first draft",
    ],
    outcome: "Visitors understand your offer and trust it within seconds of landing.",
  },
  {
    slug: "web-development",
    title: "Web Development & Build",
    tagline: "Fast, maintainable code that turns the design into a working site.",
    description:
      "Web development is the build phase: turning approved design into a fast, working website your team can actually run. We build with modern, lightweight tooling — no bloated page builders, no plugin sprawl.",
    includes: [
      "Clean, modern codebase (React or static, depending on scope)",
      "Content structured so it's easy to update later",
      "Cross-browser and cross-device testing",
      "Deployed to fast, reliable hosting",
    ],
    outcome: "A site that loads fast, works everywhere, and doesn't need a developer for small edits.",
  },
  {
    slug: "mobile-first",
    title: "Mobile-First Websites",
    tagline: "Designed for the phone first, because that's where most visitors are.",
    description:
      "Mobile-first means the phone layout is the starting point, not an afterthought squeezed from a desktop design. Most of your traffic arrives on a phone, so that's the version we get right first.",
    includes: [
      "Layouts built and tested on mobile before desktop",
      "Thumb-friendly tap targets and navigation",
      "Fast-loading images and assets on mobile networks",
      "One-hand usability for forms and booking flows",
    ],
    outcome: "Mobile visitors — the majority of your traffic — get the best version of your site, not a compromise.",
  },
  {
    slug: "conversion-strategy",
    title: "Conversion Strategy",
    tagline: "The plan behind the page: what to say, in what order, and why.",
    description:
      "Conversion strategy is the thinking behind the page — what a visitor needs to see, in what order, before they'll enquire. We map the customer journey first, then design and copy follow the map.",
    includes: [
      "Customer journey mapping before any design work",
      "One clear call-to-action per page, not five competing ones",
      "Trust signals placed where doubt naturally appears",
      "Ongoing review of what's converting and what isn't",
    ],
    outcome: "Fewer visitors bounce, more of them get to the enquiry or booking step.",
  },
  {
    slug: "seo-geo",
    title: "SEO & GEO",
    tagline: "Rank on Google. Get cited by AI answer engines too.",
    description:
      "Generative Engine Optimization (GEO) structures your site so AI answer engines — ChatGPT, Google AI Overviews, Perplexity, Gemini — understand, trust and cite your business when people ask them questions. Where SEO earns rankings on the results page, GEO earns mentions inside the AI answer itself.",
    includes: [
      "Technical SEO: fast loading, clean markup, correct metadata",
      "Structured data (schema.org) so search and AI engines parse your business correctly",
      "Answer-first content structure that's easy for both humans and AI to extract",
      "Local SEO for UK & Türkiye search visibility",
    ],
    outcome: "You show up in Google results and get named when someone asks an AI assistant for a recommendation.",
  },
  {
    slug: "performance",
    title: "Performance Optimization",
    tagline: "A fast site keeps visitors around long enough to convert.",
    description:
      "Performance optimization means your site loads quickly on real connections, not just on office wifi. Every extra second of load time costs you visitors who never see your offer.",
    includes: [
      "Image compression and modern formats (WebP/AVIF)",
      "Minimal, purposeful JavaScript — no unnecessary libraries",
      "Core Web Vitals checked and fixed",
      "Caching and hosting configured for speed",
    ],
    outcome: "Pages load in under two seconds, so visitors stay long enough to see your offer.",
  },
  {
    slug: "branding",
    title: "Branding",
    tagline: "A consistent look and voice that makes you memorable and credible.",
    description:
      "Branding here means the visual and verbal identity that makes your business instantly recognisable and trustworthy — logo, colour palette, type and tone of voice, applied consistently across your site.",
    includes: [
      "Logo refinement or new mark where needed",
      "Colour palette and typography system",
      "Tone-of-voice guidance for site copy",
      "Consistent application across every page",
    ],
    outcome: "Your business looks and sounds like one coherent brand, not a patchwork of past decisions.",
  },
  {
    slug: "care-updates",
    title: "Care & Updates",
    tagline: "Ongoing support so the site keeps working after launch.",
    description:
      "Care & Updates is the after-launch relationship: we keep your site secure, up to date and lightly evolving instead of going stale the day it's handed over. Websites need small attention regularly, not a rebuild every few years.",
    includes: [
      "Security and dependency updates",
      "Small content and copy changes as your business changes",
      "Uptime and performance monitoring",
      "Priority support for anything that breaks",
    ],
    outcome: "The site keeps working, keeps looking current, and never becomes your problem to maintain alone.",
  },
] as const;

export const FAQ = [
  {
    q: "What services does Forge Digital offer?",
    a: "We cover the full lifecycle of a business website: design, development, mobile-first builds, conversion strategy, SEO & GEO, performance optimisation, branding, and ongoing care after launch.",
    linkTo: "/services",
    linkLabel: "See all services",
  },
  {
    q: "What is GEO (Generative Engine Optimization)?",
    a: "GEO structures your site so AI answer engines like ChatGPT, Google AI Overviews, Perplexity and Gemini understand and cite your business when people ask them questions — not just Google's results page.",
    linkTo: "/services#seo-geo",
    linkLabel: "SEO & GEO",
  },
  {
    q: "Do you work with businesses outside the UK?",
    a: "Yes. We work with clients across the UK and Türkiye, and the process is remote-friendly wherever you're based.",
  },
  {
    q: "How much does a website cost?",
    a: "It depends on scope — a landing page and a multi-page booking system cost differently. The clearest way to get a number is a free review of what you actually need.",
    linkTo: "/#book",
    linkLabel: "Book a free review",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects move through our four-step process — understand, position, design, build and launch — in a few weeks, depending on scope and how quickly content comes together.",
    linkTo: "/#process",
    linkLabel: "Our process",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Our Care & Updates service covers security updates, small content changes and monitoring, so the site doesn't become your problem to maintain alone.",
    linkTo: "/services#care-updates",
    linkLabel: "Care & Updates",
  },
] as const;
