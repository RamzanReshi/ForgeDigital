/** Stamp button: rectangular, 2px ink border, solid ink block offset behind. */
export function Stamp({
  href,
  children,
  filled = false,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  filled?: boolean;
  light?: boolean;
}) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden="true"
        className={`absolute inset-0 translate-x-1 translate-y-1 ${light ? 'bg-white' : 'bg-ink'}`}
      />
      <a
        href={href}
        className={`relative inline-flex min-h-11 items-center justify-center border-2 px-6 py-2.5 text-sm font-bold tracking-wide transition-transform duration-150 hover:translate-x-1 hover:translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-forge focus-visible:ring-offset-2 ${
          light
            ? 'border-white bg-[#0e0d0a] text-white'
            : filled
              ? 'border-ink bg-ink text-paper'
              : 'border-ink bg-paper text-ink'
        }`}
      >
        {children}
      </a>
    </span>
  );
}
