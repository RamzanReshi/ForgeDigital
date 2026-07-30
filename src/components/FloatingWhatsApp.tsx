import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

import {
  WHATSAPP_DEFAULT_MESSAGE,
  WHATSAPP_NUMBER,
} from '../config.landing';

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  if (!visible) {
    return null;
  }

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_DEFAULT_MESSAGE,
  )}`;

  return (
    <span className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-x-1 translate-y-1 bg-ink"
      />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        className="relative flex min-h-14 min-w-14 items-center justify-center border-2 border-ink bg-ink text-paper transition duration-150 hover:bg-forge focus:outline-none focus-visible:ring-2 focus-visible:ring-forge focus-visible:ring-offset-2"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </span>
  );
}
