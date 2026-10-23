import { useEffect, useState, useRef } from 'react';

const DURATION = 1500;

export default function StatCounter({ target, suffix = '', label, plain = false }) {
  const end = parseInt(target, 10);
  const isNumeric = !Number.isNaN(end);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const node = countRef.current;
    if (!node || !isNumeric) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    let start;

    // Ease-out count from 0 to `end`; jumps straight to the end when motion is reduced.
    const step = (now) => {
      start ??= now;
      const progress = reduceMotion ? 1 : Math.min((now - start) / DURATION, 1);
      setCount(Math.round(progress * (2 - progress) * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          frame = requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, isNumeric]);

  return (
    <div
      ref={countRef}
      className={
        plain
          ? 'text-center px-2'
          : 'text-center p-6 bg-white border border-brand-border rounded-lg shadow-sm hover:shadow-md transition-shadow'
      }
    >
      <div className={`${plain ? 'text-2xl sm:text-4xl mb-1' : 'text-3xl md:text-4xl mb-2'} font-bold font-heading text-brand-secondary`}>
        {/* Screen readers get the final figure, not every intermediate number. */}
        <span aria-hidden="true">{isNumeric ? `${count}${suffix}` : target}</span>
        <span className="sr-only">{isNumeric ? `${end}${suffix}` : target}</span>
      </div>
      <p className={`${plain ? 'text-xs sm:text-sm' : 'text-sm md:text-base'} font-medium text-brand-text`}>{label}</p>
    </div>
  );
}
