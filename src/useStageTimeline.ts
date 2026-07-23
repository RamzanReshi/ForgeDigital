import { useEffect, useState } from 'react';

/** Media/motion environment for the stage. Recomputed on resize. */
export type StageMode = {
  reduced: boolean;
  mobile: boolean;
};

export function useStageMode(): StageMode {
  const [mode, setMode] = useState<StageMode>(() => read());

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const width = window.matchMedia('(max-width: 767px)');
    const update = () => setMode(read());
    motion.addEventListener('change', update);
    width.addEventListener('change', update);
    return () => {
      motion.removeEventListener('change', update);
      width.removeEventListener('change', update);
    };
  }, []);

  return mode;
}

function read(): StageMode {
  if (typeof window === 'undefined') return { reduced: false, mobile: false };
  return {
    reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    mobile: window.matchMedia('(max-width: 767px)').matches,
  };
}
