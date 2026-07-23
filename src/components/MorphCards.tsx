import { ArrowUpRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { PROJECTS } from '../config';

/**
 * The shared card rack. The same four DOM nodes are fake AI dashboard cards in
 * the slop scene and real project previews later — only their inner layers
 * cross-fade, so nothing is ever re-mounted mid-timeline.
 */
export function MorphCards() {
  return (
    <div
      data-cards
      className="grid w-full shrink-0 grid-cols-2 gap-3 overflow-hidden sm:gap-4 lg:grid-cols-4"
      aria-hidden="true"
    >
      {PROJECTS.slice(0, 4).map((project, i) => (
        <article
          key={project.name}
          data-card
          className="relative isolate overflow-hidden rounded-2xl"
          style={{ transformOrigin: '50% 50%' }}
        >
          {/* --- slop layer --- */}
          <div
            data-card-slop
            className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-[0_0_60px_-12px_rgba(139,92,246,0.9)] backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-fuchsia-200 uppercase">
                {i % 2 === 0 ? <Sparkles size={11} /> : <Zap size={11} />}
                AI Metric
              </span>
              <TrendingUp size={12} className="text-emerald-300" />
            </div>
            <p className="mt-3 bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
              {['+842%', '10.4×', '99.9%', '$2.4M'][i]}
            </p>
            <p className="text-[10px] text-violet-200/80">
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
            {/* placeholder screenshot: a real HTML/CSS mini-interface */}
            <div className="flex-1 p-2" style={{ background: project.accent }}>
              <div className="flex h-full flex-col rounded-lg bg-white/95 p-2">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                </div>
                <div className="mt-2 h-1.5 w-3/4 rounded-full bg-ink/70" />
                <div className="mt-1.5 h-1 w-1/2 rounded-full bg-ink/25" />
                <div
                  className="mt-2 h-4 w-14 rounded-md"
                  style={{ background: project.accent }}
                />
                <div className="mt-auto grid grid-cols-3 gap-1">
                  <span className="h-3 rounded bg-paper-2" />
                  <span className="h-3 rounded bg-paper-2" />
                  <span className="h-3 rounded bg-paper-2" />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between gap-2 px-3 py-2.5">
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-ink sm:text-sm">
                  {project.name}
                </p>
                <p className="truncate text-[10px] text-ink-soft">{project.sector}</p>
              </div>
              <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-ink-soft" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
