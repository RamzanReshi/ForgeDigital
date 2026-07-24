const serif = { fontFamily: 'var(--font-display-serif)' } as const;

/** Section index eyebrow: numbered uppercase label + ghosted numeral. */
export function SectionIndex({ num, label }: { num: string; label: string }) {
  return (
    <div className="relative">
      <p className="text-[11px] font-bold tracking-[0.2em] text-forge uppercase">
        {num} &middot; {label}
      </p>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-0 text-7xl leading-none text-ink opacity-[0.07] select-none md:text-9xl"
        style={serif}
      >
        {num}
      </span>
    </div>
  );
}
