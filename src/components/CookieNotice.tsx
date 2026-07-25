import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'fd-cookie-notice';

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(STORAGE_KEY));
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'dismissed');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed right-0 bottom-0 left-0 z-40 border-t border-white/10 bg-ink text-paper"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm leading-relaxed text-paper/85 md:text-base">
          This site uses essential storage only. Read more in our{' '}
          <Link to="/privacy" className="text-forge hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="min-h-11 shrink-0 border border-white/40 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-ink"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
