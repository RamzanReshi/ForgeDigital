import { ArrowUpRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { PROJECTS } from '../config';

type Props = {
  /** Cards only accept clicks once they've become real project previews. */
  interactive: boolean;
  onSelect: (project: (typeof PROJECTS)[number]) => void;
};

/**
 * The shared card rack. The same four DOM nodes are fake AI dashboard cards in
 * the slop scene and real project previews later — only their inner layers
 * cross-fade, so nothing is ever re-mounted mid-timeline.
 */
export function MorphCards({ interactive, onSelect }: Props) {
  return (
    <div
      data-cards
      className="grid w-full shrink-0 grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
      aria-hidden={!interactive}
    >
      {PROJECTS.slice(0, 4).map((project, i) => (
        <article
          key={project.name}
          data-card
          className="group relative isolate rounded-2xl transition-[transform,box-shadow] duration-300 ease-out data-[interactive=true]:cursor-pointer data-[interactive=true]:hover:-translate-y-1.5 data-[interactive=true]:hover:shadow-[0_18px_40px_-12px_rgba(22,21,15,0.35)]"
          data-interactive={interactive}
          style={{ transformOrigin: '50% 50%' }}
        >
          {/* --- slop layer --- */}
          <div
            data-card-slop
            className="rounded-3xl border border-violet-200/80 bg-white/75 p-4 shadow-[0_10px_50px_-12px_rgba(139,92,246,0.55)] backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-fuchsia-600 uppercase">
                {i % 2 === 0 ? <Sparkles size={11} /> : <Zap size={11} />}
                AI Metric
              </span>
              <TrendingUp size={12} className="text-emerald-500" />
            </div>
            <p className="mt-3 bg-gradient-to-r from-fuchsia-600 to-cyan-500 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
              {['+842%', '10.4×', '99.9%', '$2.4M'][i]}
            </p>
            <p className="text-[10px] text-violet-900/60">
              {['Synergy uplift', 'Growth velocity', 'AI accuracy', 'Value unlocked'][i]}
            </p>
            {/* fake chart, pure CSS */}
            <div className="mt-3 flex h-10 items-end gap-1">
              {[40, 65, 30, 80, 55, 95, 70].map((h, b) => (
                <span key={b} className="slop-bar flex-1" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          {/* --- clean layer --- */}
          <div
            data-card-clean
            className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
          >
            {/* real screenshot of the shipped site */}
            <div className="flex-1 overflow-hidden" style={{ background: project.accent }}>
              <img
                src={project.cover}
                alt={`${project.name} website`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex items-start justify-between gap-2 px-3 py-2.5">
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-ink sm:text-sm">
                  {project.name}
                </p>
                <p className="truncate text-[10px] text-ink-soft">{project.sector}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="mt-0.5 shrink-0 text-ink-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </div>

          {/* Click target. Only present once the cards are real previews, so the
              slop scene stays inert. */}
          {interactive && (
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              <span className="sr-only">View {project.name} project details</span>
            </button>
          )}
        </article>
      ))}
    </div>
  );
}
