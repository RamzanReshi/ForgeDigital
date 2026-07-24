import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Cal from '@calcom/embed-react';
import { X } from 'lucide-react';
import { CAL_LINK } from '../config';

type BookingCtx = { open: () => void };

const BookingContext = createContext<BookingCtx>({ open: () => {} });

/** Any component can call `useBooking().open()` to launch the Cal.com modal. */
export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Book a call"
        >
          <div className="absolute inset-0 bg-ink/70" onClick={close} aria-hidden="true" />
          <div className="relative z-10 flex h-[85vh] max-h-[820px] w-full max-w-3xl flex-col border-2 border-ink bg-white">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="text-sm font-bold tracking-wide text-ink">
                Book a free consultation
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close booking"
                className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink transition hover:text-forge"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <Cal
                calLink={CAL_LINK}
                config={{ layout: 'month_view' }}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
