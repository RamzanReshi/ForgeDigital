import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { MorphCards } from './components/MorphCards';
import { BookingPanel } from './components/BookingPanel';
import {
  BookingHeader,
  CleanScene,
  ComparisonScene,
  ProblemScene,
  ProcessScene,
  SlopScene,
  WorkScene,
} from './components/Scenes';
import { useStageMode } from './useStageTimeline';
import { BRAND } from './config';

gsap.registerPlugin(ScrollTrigger);

/** Scroll length as a multiple of viewport height. Shorter on mobile. */
const SCROLL_VH_DESKTOP = 700;
const SCROLL_VH_MOBILE = 500;

export default function App() {
  const { reduced, mobile } = useStageMode();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [bookingActive, setBookingActive] = useState(false);

  // Reduced motion: everything is laid out statically, calendar always live.
  useEffect(() => {
    if (reduced) setBookingActive(true);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const scroller = scrollerRef.current;
    const stage = stageRef.current;
    if (!scroller || !stage) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(stage);
      const cards = q('[data-card]');
      const rackHeight = (q('[data-cards]')[0] as HTMLElement).offsetHeight;
      const slopLayers = q('[data-card-slop]');
      const cleanLayers = q('[data-card-clean]');

      // Scenes that occupy the same stacked slot.
      const scene = (name: string) => q(`[data-scene="${name}"]`);
      const later = ['problem', 'comparison', 'work', 'process', 'booking'];

      // --- initial state -------------------------------------------------
      gsap.set(cleanLayers, { autoAlpha: 0 });
      gsap.set(scene('clean'), { autoAlpha: 0, y: 24 });
      later.forEach((n) => gsap.set(scene(n), { autoAlpha: 0, y: 24 }));
      gsap.set('[data-cta]', { autoAlpha: 0, y: 16 });
      gsap.set('[data-cta-calendar]', { autoAlpha: 0 });
      gsap.set(cards, { rotate: (i: number) => [-4, 3, -2, 5][i % 4], scale: 1.02 });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: scroller,
          start: 'top top',
          end: 'bottom bottom',
          scrub: mobile ? 0.35 : 0.8,
          invalidateOnRefresh: true,
        },
      });

      // --- 1. slop → clean ------------------------------------------------
      tl.to('[data-slop-bg]', { autoAlpha: 0, duration: 1 }, 0)
        .to('[data-clean-bg]', { autoAlpha: 1, duration: 1 }, 0)
        .to(scene('slop'), { autoAlpha: 0, y: -32, duration: 0.7 }, 0)
        .to(cards, { rotate: 0, scale: 1, duration: 1 }, 0)
        .to(slopLayers, { autoAlpha: 0, duration: 0.6 }, 0.3)
        .to(cleanLayers, { autoAlpha: 1, duration: 0.6 }, 0.5)
        .to(scene('clean'), { autoAlpha: 1, y: 0, duration: 0.7 }, 0.6)
        .to('[data-cta]', { autoAlpha: 1, y: 0, duration: 0.5 }, 0.9)
        .to('[data-hint]', { autoAlpha: 0, duration: 0.4 }, 0);

      // --- 2..n. later scenes swap through the same slot ------------------
      // Cards shrink out of the way while the argument scenes play, then
      // return as the work grid.
      tl.to(scene('clean'), { autoAlpha: 0, y: -28, duration: 0.6 }, 1.7)
        .to(cards, { scale: 0.82, autoAlpha: 0.25, duration: 0.6 }, 1.7)
        .to(scene('problem'), { autoAlpha: 1, y: 0, duration: 0.6 }, 2.0)

        .to(scene('problem'), { autoAlpha: 0, y: -28, duration: 0.6 }, 2.9)
        .to(scene('comparison'), { autoAlpha: 1, y: 0, duration: 0.6 }, 3.2)

        .to(scene('comparison'), { autoAlpha: 0, y: -28, duration: 0.6 }, 4.1)
        .to(cards, { scale: 1, autoAlpha: 1, duration: 0.6 }, 4.1)
        .to(scene('work'), { autoAlpha: 1, y: 0, duration: 0.6 }, 4.4)

        .to(scene('work'), { autoAlpha: 0, y: -28, duration: 0.6 }, 5.3)
        .to(cards, { scale: 0.7, autoAlpha: 0, duration: 0.6 }, 5.3)
        // Collapse the rack's box too — autoAlpha only hides it, and the
        // leftover height would push the booking copy off a short viewport.
        .fromTo('[data-cards]', { height: rackHeight }, { height: 0, duration: 0.6 }, 5.3)
        .to(scene('process'), { autoAlpha: 1, y: 0, duration: 0.6 }, 5.6)

        .to(scene('process'), { autoAlpha: 0, y: -28, duration: 0.6 }, 6.5)
        .to(scene('booking'), { autoAlpha: 1, y: 0, duration: 0.6 }, 6.8);

      // --- CTA expands into the calendar ----------------------------------
      tl.to(
        '[data-cta]',
        {
          width: mobile ? '100%' : 'min(920px, 92vw)',
          height: mobile ? '52vh' : '60vh',
          borderRadius: 20,
          backgroundColor: '#ffffff',
          duration: 0.9,
        },
        6.9,
      )
        .to('[data-cta-face]', { autoAlpha: 0, duration: 0.3 }, 6.9)
        .to('[data-cta-calendar]', { autoAlpha: 1, duration: 0.5 }, 7.3);

      // Mount the embed slightly before it is revealed, unmount on reverse.
      ScrollTrigger.create({
        trigger: scroller,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => setBookingActive(self.progress > 0.82),
      });
    }, stage);

    return () => ctx.revert();
  }, [reduced, mobile]);

  const scrollVh = mobile ? SCROLL_VH_MOBILE : SCROLL_VH_DESKTOP;

  // ---------------------------------------------------------------- reduced
  if (reduced) {
    return (
      <>
        <a className="skip-link" href="#booking">
          Skip to booking
        </a>
        <main className="min-h-screen bg-paper px-5 py-16 text-ink">
          <div className="mx-auto flex max-w-4xl flex-col gap-20">
            <CleanScene />
            <MorphCards />
            <ProblemScene />
            <ComparisonScene />
            <WorkScene />
            <ProcessScene />
            <section id="booking" className="flex flex-col items-center gap-6">
              <BookingHeader />
              <div className="h-[70vh] min-h-[520px] w-full overflow-hidden rounded-2xl border border-line bg-white">
                <BookingPanel active expanded />
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }

  // --------------------------------------------------------------- animated
  return (
    <>
      <a className="skip-link" href="#booking">
        Skip to booking
      </a>

      <div ref={scrollerRef} style={{ height: `${scrollVh}vh` }}>
        <div
          ref={stageRef}
          className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
        >
          {/* backdrops (cross-faded, never re-mounted) */}
          <div
            data-slop-bg
            className="absolute inset-0 -z-10 bg-[#0a0616]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_20%_10%,rgba(168,85,247,0.55),transparent_60%),radial-gradient(60%_60%_at_85%_20%,rgba(34,211,238,0.4),transparent_60%),radial-gradient(80%_70%_at_50%_110%,rgba(236,72,153,0.35),transparent_60%)]" />
          </div>
          <div
            data-clean-bg
            className="absolute inset-0 -z-10 bg-paper opacity-0"
            aria-hidden="true"
          />

          <main
            id="booking"
            className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4 px-5 py-6 sm:gap-8 sm:py-10"
          >
            {/* scene slot — all scenes stacked, only one visible at a time */}
            {/* `min-h` keeps the copy readable when the expanded CTA claims most
                of the column on short viewports. */}
            <div className="relative flex min-h-[190px] w-full flex-1 shrink-0 items-center justify-center sm:min-h-[240px]">
              {[
                <SlopScene key="slop" />,
                <CleanScene key="clean" />,
                <ProblemScene key="problem" />,
                <ComparisonScene key="comparison" />,
                <WorkScene key="work" />,
                <ProcessScene key="process" />,
                <BookingHeader key="booking" />,
              ].map((node) => (
                // Each scene fills the slot and self-centers; `overflow-y-auto`
                // means tall copy on short viewports scrolls instead of clipping.
                <div
                  key={node.key}
                  className="absolute inset-0 grid grid-cols-1 content-center overflow-y-auto py-2"
                >
                  {node}
                </div>
              ))}
            </div>

            {/* shared card rack */}
            <MorphCards />

            {/* shared CTA → calendar */}
            <BookingPanel active={bookingActive} />

            <p
              data-hint
              className="flex items-center gap-2 text-[11px] tracking-widest text-violet-200/80 uppercase"
            >
              <ChevronDown size={14} aria-hidden="true" />
              Scroll to fix the website
            </p>
          </main>

          <span className="pointer-events-none absolute top-5 left-5 text-xs font-semibold tracking-widest text-white/40 uppercase mix-blend-difference">
            {BRAND}
          </span>
        </div>
      </div>
    </>
  );
}
