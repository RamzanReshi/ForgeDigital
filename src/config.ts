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
