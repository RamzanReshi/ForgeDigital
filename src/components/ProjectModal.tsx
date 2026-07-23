import { useEffect, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';
import type { PROJECTS } from '../config';

type Project = (typeof PROJECTS)[number];

type Props = {
  project: Project | null;
  onClose: () => void;
};

/**
 * Detail view for a project card. Rendered as a modal dialog: focus moves in on
 * open, Escape and backdrop clicks close it, and background scroll is locked so
 * the scroll-driven stage behind it doesn't advance while it's open.
 */
export function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      // Simple focus trap so tabbing can't reach the frozen stage behind.
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/60 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 rounded-full bg-ink/70 p-2 text-white transition hover:bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X size={16} aria-hidden="true" />
        </button>

        <div className="overflow-y-auto overscroll-contain">
          <img
            src={project.cover}
            alt={`${project.name} website`}
            className="max-h-[42vh] w-full object-cover object-top"
          />

          <div className="p-5 sm:p-7">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-ink-soft uppercase">
              {project.sector}
            </p>
            <h3
              id="project-modal-title"
              className="mt-1.5 text-xl font-semibold tracking-tight text-ink sm:text-2xl"
            >
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.description}</p>

            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-paper/60 p-4">
                <dt className="text-[11px] font-semibold tracking-widest text-forge uppercase">
                  What it does
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {project.outcome}
                </dd>
              </div>
              <div className="rounded-xl border border-line bg-paper/60 p-4">
                <dt className="text-[11px] font-semibold tracking-widest text-forge uppercase">
                  Why it matters
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {project.benefit}
                </dd>
              </div>
            </dl>

            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              Visit live site
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
