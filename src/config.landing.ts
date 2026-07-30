// Landing-page-only constants. Kept separate from config.ts because these
// values (testimonials, WhatsApp funnel, quote form) are specific to the
// /landing route and not shared by Home/Services/Work.

export const WHATSAPP_NUMBER = '13022373436';

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I'd like a quote for a website.";

export const LANDING_TESTIMONIALS = [
  {
    quote:
      "Booking calls started coming in the first week and haven't stopped. Clean, fast, and it just works.",
    name: 'Sufyan',
    title: 'ontimeremovals.co.uk',
  },
  {
    quote:
      'Student sign-ups went up and new parents find us through Google now. Fast, professional, and they kept every deadline.',
    name: 'Aziz Hocam',
    title: 'sayginakademisporkulubu.com',
  },
  {
    quote:
      'We needed a site to take dry ice orders. It was built from scratch quickly and customers come straight through WhatsApp now.',
    name: 'Murat Bey',
    title: 'mrtkurubuz.com',
  },
] as const;

export const INTAKE_GOALS = [
  'More WhatsApp messages / calls',
  'Better Google ranking (local SEO)',
  'Online bookings / orders',
  'Replace my outdated website',
  'Brand new business - need everything',
  'Custom web app / admin system',
] as const;

/**
 * Silent backup datastore for quote form submissions (Google Form via Apps
 * Script). FORM_ACTION and ENTRY_IDS are visible in client JS by nature of
 * being a no-backend form — this is expected and documented, not a secret
 * leak. Submission never blocks the WhatsApp handoff and never confirms
 * delivery (mode: 'no-cors').
 */
export const INTAKE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSf3L2SMKuEikhwbfW7DNS1uL59jA5irh5SKggyfL3_cnGJ9zA/formResponse';

export const INTAKE_ENTRY_IDS = {
  name: 'entry.911551253',
  business: 'entry.1127415726',
  type: 'entry.719953824',
  location: 'entry.99938063',
  maps: 'entry.1758447899',
  oldSite: 'entry.1819545170',
  goal: 'entry.773183434',
  extra: 'entry.365463776',
  pageUrl: 'entry.737310151',
  referrer: 'entry.1576451586',
} as const;
