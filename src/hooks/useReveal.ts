import { useEffect } from 'react';

/**
 * Observes `.reveal` children of `ref` and adds `.visible` when they enter the viewport.
 * Pass `trigger` (usually a data array) to re-observe after async data loads.
 */
export function useReveal(
  ref: React.RefObject<HTMLElement | null>,
  trigger?: unknown,
  threshold = 0.06,
) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold },
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ref, trigger, threshold]);
}
