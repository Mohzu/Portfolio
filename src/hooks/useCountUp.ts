import { useState, useEffect, useRef } from 'react';

/**
 * Parses a stat value string like "12", "2+", "15+" into its numeric part
 * and optional suffix (e.g. "+").
 */
function parseStatValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

interface CountUpOptions {
  duration?: number;   // ms per counter, default 1400
  delay?: number;      // ms delay before this counter starts, default 0
  easing?: 'linear' | 'ease-out';
}

/**
 * Animates a numeric stat value from 0 to `target` once the element
 * is in the viewport.  Returns the display string (number + suffix).
 *
 * @param raw     - raw value string from siteContent, e.g. "12" or "2+"
 * @param options - duration, delay, easing
 */
export function useCountUp(
  raw: string,
  options: CountUpOptions = {}
): string {
  const { duration = 1400, delay = 0, easing = 'ease-out' } = options;
  const { num: target, suffix } = parseStatValue(raw);

  const [count, setCount] = useState(0);
  const elRef  = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    // Reset if the raw value changes (language switch, admin edit)
    setCount(0);
    started.current = false;
  }, [raw]);

  useEffect(() => {
    if (target === 0) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          setTimeout(() => {
            const startTime = performance.now();

            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // ease-out cubic
              const ease = easing === 'ease-out'
                ? 1 - Math.pow(1 - progress, 3)
                : progress;

              setCount(Math.round(ease * target));

              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
          }, delay);

          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (elRef.current) obs.observe(elRef.current);
    return () => obs.disconnect();
  }, [target, duration, delay, easing]);

  return { displayValue: count + suffix, elRef } as any;
}

/**
 * Returns { displayValue, elRef } — attach elRef to the element you want
 * to observe for intersection.
 */
export function useCountUpFull(
  raw: string,
  options: CountUpOptions = {}
): { displayValue: string; elRef: React.RefObject<HTMLDivElement | null> } {
  const { duration = 1400, delay = 0, easing = 'ease-out' } = options;
  const { num: target, suffix } = parseStatValue(raw);

  const [count, setCount] = useState(0);
  const elRef   = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    setCount(0);
    started.current = false;
  }, [raw]);

  useEffect(() => {
    if (target === 0) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          setTimeout(() => {
            const startTime = performance.now();

            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = easing === 'ease-out'
                ? 1 - Math.pow(1 - progress, 3)
                : progress;

              setCount(Math.round(ease * target));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
          }, delay);

          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (elRef.current) obs.observe(elRef.current);
    return () => obs.disconnect();
  }, [target, duration, delay, easing]);

  return { displayValue: count + suffix, elRef };
}
