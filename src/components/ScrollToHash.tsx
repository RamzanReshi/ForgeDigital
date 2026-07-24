import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = location.hash.slice(1);
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView();
    };

    const frame = requestAnimationFrame(scrollToTarget);
    const timeout = setTimeout(scrollToTarget, 0);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [location.pathname, location.hash]);

  return null;
}
