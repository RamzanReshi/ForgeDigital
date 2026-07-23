import { useEffect, useState } from 'react';
import { CalendarDays } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { CAL_LINK } from '../config';

type Props = {
  /** True once the timeline reaches the booking scene — mounts the embed. */
  active: boolean;
  /** Skip the collapsed button size and render calendar-sized immediately. */
  expanded?: boolean;
};

/**
 * The primary CTA. It is one element for the whole timeline: a pill button in
 * the clean homepage that scales up and becomes the shell the Cal.com embed
 * renders inside. The embed only mounts when the booking scene is reached so
 * the earlier scenes stay light.
 */
export function BookingPanel({ active, expanded }: Props) {
  const [ready, setReady] = useState(false);
  /** The brief ships a placeholder link; don't request a calendar that can't exist. */
  const placeholder = CAL_LINK.includes('YOUR_CAL_USERNAME');

  useEffect(() => {
    if (!active || placeholder) return;
    let cancelled = false;
    (async () => {
      const cal = await getCalApi();
      if (cancelled) return;
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      setReady(true);
    })().catch(() => setReady(true));
    return () => {
      cancelled = true;
    };
  }, [active, placeholder]);

  return (
    <div
      data-cta
      className={
        expanded
          ? 'relative mx-auto h-full w-full overflow-hidden rounded-2xl bg-white'
          : 'relative mx-auto h-[52px] w-[300px] shrink-0 overflow-hidden rounded-2xl bg-ink text-white sm:h-[54px] sm:w-[330px]'
      }
    >
      {/* Button face — visible until the panel expands */}
      {!expanded && (
        <div
          data-cta-face
          className="flex h-full w-full items-center justify-center gap-2 px-6 text-sm font-semibold whitespace-nowrap sm:text-base"
        >
          <CalendarDays size={17} aria-hidden="true" />
          Book Your Free Website Review
        </div>
      )}

      {/* Calendar face — fades in over the button as it expands */}
      <div
        data-cta-calendar
        className={`absolute inset-0 overflow-hidden rounded-2xl bg-white${expanded ? ' opacity-100' : ''}`}
        aria-hidden={!active}
      >
        {active ? (
          <div className="relative h-full w-full overflow-y-auto overscroll-contain">
            {!ready && !placeholder && (
              <p className="absolute inset-0 flex items-center justify-center text-sm text-ink-soft">
                Loading calendar…
              </p>
            )}
            {placeholder ? (
              <p className="absolute inset-0 grid place-content-center px-6 text-center text-xs leading-loose text-balance text-ink-soft sm:text-sm">
                Set <code className="mx-1 rounded bg-paper-2 px-1.5 py-0.5">CAL_LINK</code> in
                <code className="mx-1 rounded bg-paper-2 px-1.5 py-0.5">src/config.ts</code> to
                your Cal.com username/event to load the live calendar.
              </p>
            ) : (
              <Cal
                calLink={CAL_LINK}
                style={{ width: '100%', height: '100%', minHeight: '520px', overflow: 'scroll' }}
                config={{ layout: 'month_view' }}
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
