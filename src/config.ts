export const CAL_LINK = "ahmedreshi/forgedigitalconsultation";

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
    title: "Discovery call",
    body: "We get on a quick call to understand your business, your customers, and what you actually need.",
  },
  {
    title: "Proposal and quote",
    body: "You get a clear proposal with scope, timeline and a fixed price, so there are no surprises later.",
  },
  {
    title: "Strategy and planning",
    body: "We map the site structure and the customer journey before any design work starts.",
  },
  {
    title: "Content collection",
    body: "We gather your copy, photos and details, and fill the gaps where you need a hand.",
  },
  {
    title: "Design and development",
    body: "We design and build the site, show you progress along the way, and launch once you are happy.",
  },
] as const;

export const COMPARISON = [
  { before: "Vague copy", after: "Clear offer" },
  { before: "Random effects", after: "Purposeful design" },
  { before: "Fake proof", after: "Real work" },
  { before: "Many CTAs", after: "One focused journey" },
] as const;

export const TEAM = [
  {
    name: "Ramzan Ahmad",
    role: "Co-Founder",
    bio: "Ramzan is a software engineer based in Istanbul, finishing a degree in software engineering. He builds the sites and the systems behind them, working mostly in React, Next.js, TypeScript and Python. He is the one making sure the thing is fast, works on every phone, and doesn't fall over six months later.",
    socials: {
      github: "https://github.com/CadPosting",
      linkedin: "https://www.linkedin.com/in/ramzan381/",
      whatsapp: "https://wa.me/905376425614",
    },
  },
  {
    name: "Ahmed Reshi",
    role: "Co-Founder",
    bio: "Ahmed is a web designer and developer, and the other half of Forge Digital. He leads on design and on how a site actually reads to a visitor, and he stays close to clients so the work matches what the business really needs. You can see more of his work at ahmedreshi.com.",
    // TODO: Ahmed's LinkedIn URL is not provided yet; leaving it empty renders a dimmed placeholder.
    socials: {
      github: "https://github.com/reshiahmed",
      linkedin: "",
      whatsapp: "https://wa.me/905055718759",
    },
  },
] as const;

export const SITE_URL = "https://forgedigital.co.uk";

export const SERVICES = [
  {
    slug: "web-design",
    title: "Web Design",
    tagline: "A calm, credible layout built around one clear next step.",
    description:
      "Web design is the layout, hierarchy and visual language that decides whether a visitor trusts you in the first few seconds. We build every page around a single job: getting the right person to enquire. Nothing on the page fights that.",
    includes: [
      "A custom layout for every page, never a stock template",
      "Type and colour matched to your brand",
      "Wireframes you sign off before we build anything",
      "Responsive, accessible design from the first draft",
    ],
    outcome: "People land, understand what you do, and believe it. Quickly.",
  },
  {
    slug: "web-development",
    title: "Web Development & Build",
    tagline: "Fast, maintainable code that turns the design into a real site.",
    description:
      "This is the build. We take the approved design and turn it into a fast website your team can actually run day to day. It sits on modern, lightweight tooling, so there's no bloated page builder and no pile of plugins to babysit.",
    includes: [
      "A clean, modern codebase (React or static, depending on scope)",
      "Content set up so you can edit it later without a developer",
      "Tested across browsers and devices",
      "Deployed to fast, reliable hosting",
    ],
    outcome: "The site loads fast, works everywhere, and lets you make small edits yourself.",
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Shopify",
    tagline: "Online stores that are easy to run and built to sell.",
    description:
      "We build online stores, most often on Shopify, set up so customers can find products, trust them, and check out without friction. You get a shop your team can actually manage day to day, not a system you're afraid to touch.",
    includes: [
      "Shopify store setup, theme and product structure",
      "A product and checkout journey tuned to convert",
      "Payments, shipping and tax configured for your region",
      "Training so you can add products and run promotions yourself",
    ],
    outcome: "A store that looks trustworthy, is simple to run, and turns browsers into orders.",
  },
  {
    slug: "mobile-first",
    title: "Mobile-First Websites",
    tagline: "Designed for the phone first, because that's where your visitors are.",
    description:
      "Mobile-first means we start with the phone layout and build up, instead of shrinking a desktop design and hoping it holds together. Most of your traffic is on a phone, so that's the version we get right first.",
    includes: [
      "Layouts built and tested on mobile before desktop",
      "Tap targets and menus sized for thumbs",
      "Images and assets that load quickly on mobile data",
      "Forms and booking that work one-handed",
    ],
    outcome: "The people who matter most, your mobile visitors, get the good version of the site.",
  },
  {
    slug: "conversion-strategy",
    title: "Conversion Strategy",
    tagline: "The plan behind the page: what to say, in what order, and why.",
    description:
      "Conversion strategy is the thinking that comes before the design. We work out what a visitor needs to see, and in what order, before they'll pick up the phone or fill in the form. We map that journey first, then the design and copy follow it.",
    includes: [
      "A customer journey mapped before any design starts",
      "One clear call to action per page, not five fighting each other",
      "Trust signals placed where people usually hesitate",
      "Regular checks on what's converting and what isn't",
    ],
    outcome: "Fewer people bounce, and more of them reach the enquiry or booking step.",
  },
  {
    slug: "seo-geo",
    title: "SEO & GEO",
    tagline: "Rank on Google, and get named by AI answer engines too.",
    description:
      "GEO stands for Generative Engine Optimization, the newer sibling of SEO. SEO gets you ranked on Google's results page. GEO gets your business understood, trusted and quoted by AI answer engines like ChatGPT, Google AI Overviews, Perplexity and Gemini, so when someone asks one of them for a recommendation, your name comes up. We do both.",
    includes: [
      "Technical SEO: fast pages, clean markup, correct metadata",
      "Schema.org structured data so search engines and AI read your business correctly",
      "Content written answer-first, so people and AI can pull a clear answer from it",
      "Local SEO for the UK and Türkiye",
    ],
    outcome: "You show up in Google, and you get named when someone asks an AI for a recommendation.",
  },
  {
    slug: "performance",
    title: "Performance Optimization",
    tagline: "A fast site keeps people around long enough to convert.",
    description:
      "Performance work is about your site loading quickly on a real phone on real data, not just on office wifi. Every extra second of load time quietly costs you visitors who never even see your offer.",
    includes: [
      "Images compressed and served in modern formats like WebP and AVIF",
      "Lean, purposeful JavaScript with no libraries you don't need",
      "Core Web Vitals checked and fixed",
      "Caching and hosting tuned for speed",
    ],
    outcome: "Pages open in under two seconds, so visitors stick around to see your offer.",
  },
  {
    slug: "branding",
    title: "Branding",
    tagline: "A consistent look and voice that makes you easy to remember and trust.",
    description:
      "Branding here is the visual and verbal identity that makes your business recognisable at a glance: your logo, colours, type and tone of voice, used the same way across the whole site. Consistency is what makes a small business look established.",
    includes: [
      "A new logo, or a tidy-up of the one you have",
      "A colour palette and type system",
      "Guidance on the tone of voice for your copy",
      "The same identity applied on every page",
    ],
    outcome: "Your business reads as one coherent brand instead of a patchwork of old decisions.",
  },
  {
    slug: "care-updates",
    title: "Care & Updates",
    tagline: "Ongoing support so the site keeps working after launch.",
    description:
      "Care & Updates is what happens after launch. We keep the site secure, current and gently improving, so it doesn't quietly go stale the week after we hand it over. A website needs small, regular attention, not a full rebuild every couple of years.",
    includes: [
      "Security and dependency updates",
      "Small content and copy changes as your business shifts",
      "Uptime and performance monitoring",
      "Priority help when something breaks",
    ],
    outcome: "The site keeps working and keeps looking current, and it never becomes yours alone to maintain.",
  },
] as const;

export const FAQ = [
  {
    q: "What services does Forge Digital offer?",
    a: "The full life of a business website: design, development, mobile-first builds, conversion strategy, SEO and GEO, performance, branding, and ongoing care once you're live.",
    linkTo: "/services",
    linkLabel: "See all services",
  },
  {
    q: "What is GEO (Generative Engine Optimization)?",
    a: "GEO is the newer sibling of SEO. It structures your site so AI answer engines like ChatGPT, Google AI Overviews, Perplexity and Gemini understand your business and quote it when people ask them questions, instead of only ranking you on Google's results page.",
    linkTo: "/services#seo-geo",
    linkLabel: "SEO & GEO",
  },
  {
    q: "Do you work with businesses outside the UK?",
    a: "Yes. We work across the UK and Türkiye, and we're happy to work remotely with businesses elsewhere too.",
  },
  {
    q: "How much does a website cost?",
    a: "It depends on what you need. A single landing page and a multi-page site with a booking system aren't the same job. The quickest way to get a real number is a free review of what your business actually needs.",
    linkTo: "/#book",
    linkLabel: "Book a free review",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects run through our four steps (understand, position, design, then build and launch) in a few weeks. The exact timing depends on scope and how quickly the content comes together.",
    linkTo: "/#process",
    linkLabel: "Our process",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Our Care & Updates service keeps the site secure, current and monitored, with priority help if anything breaks.",
    linkTo: "/services#care-updates",
    linkLabel: "Care & Updates",
  },
] as const;
