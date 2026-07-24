import type { HTMLAttributes } from 'react';
import { Truck, RotateCw } from 'lucide-react';

/**
 * Truck icon with a circular-arrow "24h" badge over its cargo box, signalling
 * a fast quote turnaround. Drop-in for a lucide icon in the hero trust bar.
 */
export function TruckBadge({
  size = 56,
  strokeWidth = 1.25,
  className = '',
  ...rest
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>) {
  const badge = Math.round(size * 0.44);

  return (
    <span
      className={`relative inline-flex shrink-0 ${className}`}
      style={{ width: size, height: size }}
      {...rest}
    >
      <Truck size={size} strokeWidth={strokeWidth} />
      <span
        className="absolute flex items-center justify-center"
        style={{ width: badge, height: badge, left: size * 0.11, top: size * 0.24 }}
      >
        <RotateCw strokeWidth={strokeWidth + 0.5} className="absolute inset-0 h-full w-full" />
        <span className="font-bold leading-none" style={{ fontSize: badge * 0.38 }}>
          24h
        </span>
      </span>
    </span>
  );
}
