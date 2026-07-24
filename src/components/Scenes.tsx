import { ArrowRight, Check, Clock, MessageSquare, Video, X } from 'lucide-react';
import { COMPARISON, PROCESS, PROJECTS } from '../config';

/** Slop scene copy + chrome. Deliberately overdone. */
export function SlopScene() {
  return (
    <div data-scene="slop" className="w-full text-center">
      <p className="inline-flex items-center gap-2 rounded-full border border-violet-300/70 bg-white/70 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-violet-700 uppercase shadow-sm backdrop-blur">
        🚀 Next-Gen AI-Powered Synergy Platform
      </p>
      <h1 className="mx-auto mt-5 max-w-4xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-3xl leading-[1.05] font-black text-transparent drop-shadow-[0_2px_18px_rgba(168,85,247,0.35)] sm:text-5xl lg:text-6xl">
        Are you tired of AI giving you AI-slop websites?
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-violet-900/70 sm:text-base">
        Generic gradients, empty copy, fake metrics and flashy sections that do nothing for your
        business.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {['Get Started Free', 'Book a Demo', 'Talk to Sales', 'Join Waitlist'].map((label) => (
          <span
            key={label}
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-xs font-bold text-white shadow-[0_0_40px_-6px_rgba(217,70,239,0.9)] sm:text-sm"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Clean homepage copy. Shares the same slot as SlopScene. */
export function CleanScene() {
  return (
    <div data-scene="clean" className="w-full text-center">
      <p className="text-[11px] font-semibold tracking-[0.2em] text-ink-soft uppercase">
        Web design for service businesses
      </p>
      <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-[1.08] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.4rem]">
        Professional websites that build trust and bring in clients.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
        We design conversion-focused websites for service businesses that want more enquiries,
        stronger credibility and a clearer customer journey.
      </p>
    </div>
  );
}

export function ProblemScene() {
  const issues = [
    'Unclear offer',
    'Generic copy',
    'Weak trust signals',
    'Poor booking flow',
  ];
  return (
    <div data-scene="problem" className="w-full text-center">
      <h2 className="mx-auto max-w-3xl text-2xl leading-tight font-semibold tracking-tight text-balance text-ink sm:text-4xl lg:text-5xl">
        A website can look modern and still lose customers.
      </h2>
      <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-2 sm:gap-3">
        {issues.map((issue) => (
          <li
            key={issue}
            className="flex items-center gap-2 rounded-xl border border-line bg-white/70 px-3 py-3 text-left text-xs font-medium text-ink-soft sm:text-sm"
          >
            <X size={15} className="shrink-0 text-forge" aria-hidden="true" />
            {issue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ComparisonScene() {
  return (
    <div data-scene="comparison" className="w-full">
      <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
        What actually changes
      </h2>
      <ul className="mx-auto mt-8 grid max-w-3xl gap-2 sm:gap-3">
        {COMPARISON.map((row) => (
          <li
            key={row.before}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl border border-line bg-white/70 px-4 py-3"
          >
            <span className="text-xs text-ink-soft line-through decoration-forge/60 sm:text-sm">
              {row.before}
            </span>
            <ArrowRight size={15} className="text-ink-soft" aria-hidden="true" />
            <span className="text-right text-xs font-semibold text-ink sm:text-sm">
              {row.after}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WorkScene() {
  return (
    <div data-scene="work" className="w-full text-center">
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
        Selected work
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-ink-soft">
        Real projects, real businesses, real enquiry numbers.
      </p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {PROJECTS.map((p) => (
          <li key={p.name} className="text-xs font-medium text-ink-soft sm:text-sm">
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProcessScene() {
  return (
    <div data-scene="process" className="w-full">
      <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
        A simple process
      </h2>
      <ol className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((step, i) => (
          <li
            key={step.title}
            className="rounded-xl border border-line bg-white/70 p-4 text-left"
          >
            <span className="text-[11px] font-semibold tracking-widest text-forge">
              0{i + 1}
            </span>
            <h3 className="mt-1.5 text-sm font-semibold text-ink sm:text-base">{step.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function BookingHeader() {
  const facts = [
    { icon: Clock, label: '20 minutes' },
    { icon: Video, label: 'Google Meet' },
    { icon: MessageSquare, label: 'Practical feedback' },
    { icon: Check, label: 'No pressure' },
  ];
  return (
    <div data-scene="booking" className="w-full text-center">
      <h2 className="text-xl font-semibold tracking-tight text-balance text-ink sm:text-4xl">
        Book your free website review.
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-xs text-ink-soft sm:text-base">
        We’ll review your current website, identify the biggest issues and explain what we would
        change.
      </p>
      <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {facts.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-1.5 text-xs text-ink-soft sm:text-sm">
            <Icon size={14} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
