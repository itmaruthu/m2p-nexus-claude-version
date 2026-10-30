import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * The M2P Nexus brand film, drawn in code with Remotion (source and render script in video/): paper bills,
 * five vendors, roots becoming one connected system, the logo, then the offer. Phones get the 4:5 cut and
 * wider screens the 16:9 cut; the box takes its shape from CSS, so choosing a cut after hydration causes no
 * layout shift. Silent, so it plays muted while at least half of it is on screen and pauses when scrolled
 * away. Visitors who prefer reduced motion see the poster and press play themselves. The pause button
 * covers WCAG 2.2.2 (moving content longer than 5 seconds).
 */

const base = import.meta.env.BASE_URL;
const cut = (name) => ({
  webm: `${base}media/${name}.webm`,
  mp4: `${base}media/${name}.mp4`,
  poster: `${base}media/${name}-poster.webp`,
});
const CUTS = { wide: cut('brand-film'), tall: cut('brand-film-4x5') };

export default function BrandFilm({ title, text, headingId = 'brand-film-heading' }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [variant, setVariant] = useState('wide');
  const SRC = CUTS[variant];

  // Pick the cut for this screen (after hydration, so the pre-rendered HTML and first render match).
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const pickCut = () => setVariant(mq.matches ? 'tall' : 'wide');
    pickCut();
    mq.addEventListener('change', pickCut);
    return () => mq.removeEventListener('change', pickCut);
  }, []);

  // Autoplay only while on screen, never for reduced-motion visitors, and never after the visitor paused.
  useEffect(() => {
    const video = ref.current;
    if (!video || reduce || userPaused) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.5 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [reduce, userPaused, variant]);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      setUserPaused(false);
      video.play().catch(() => {});
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  return (
    <section aria-labelledby={headingId} className="relative overflow-hidden bg-ink text-white grain">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(242,169,0,0.16),transparent_70%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 id={headingId} className="font-display font-bold text-3xl sm:text-5xl leading-[1.05] tracking-[-0.02em]">
            {title}
          </h2>
          {text && <p className="text-lg text-slate-300 leading-relaxed">{text}</p>}
        </div>

        <figure className="space-y-4">
          <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-white/15 shadow-[0_50px_120px_-40px_rgba(242,169,0,0.45)] bg-[#0E173A]">
            <video
              key={variant}
              ref={ref}
              className="block aspect-[4/5] w-full object-cover sm:aspect-video"
              poster={SRC.poster}
              muted
              loop
              playsInline
              preload="none"
              width={variant === 'tall' ? 1080 : 1920}
              height={variant === 'tall' ? 1350 : 1080}
              aria-describedby={`${headingId}-transcript`}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
            >
              <source src={SRC.webm} type="video/webm" />
              <source src={SRC.mp4} type="video/mp4" />
            </video>

            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? 'Pause the film' : 'Play the film'}
              className={`group/tip absolute flex items-center justify-center rounded-full bg-white text-ink shadow-soft transition-transform duration-150 hover:scale-105 focus-visible:outline-4 focus-visible:outline-marigold ${
                playing ? 'top-3 right-3 sm:top-4 sm:right-4 h-11 w-11 opacity-80 hover:opacity-100' : 'inset-0 m-auto h-20 w-20'
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-full z-50 mt-2 hidden whitespace-nowrap rounded-md bg-ink px-2.5 py-1.5 text-xs font-semibold text-white shadow-soft group-hover/tip:block group-focus-visible/tip:block"
              >
                {playing ? 'Pause the film' : 'Play the film'}
              </span>
              {playing ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
                </svg>
              )}
            </button>

            <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-full origin-left bg-marigold" style={{ transform: `scaleX(${progress})` }} />
          </div>

          <figcaption className="flex flex-wrap items-baseline justify-between gap-2 text-sm text-slate-300">
            <span>From paper bills to one connected business. 20 seconds, no sound.</span>
            <span lang="ta" className="text-marigold">வேரிலிருந்து வெற்றிவரை</span>
          </figcaption>
          <p id={`${headingId}-transcript`} className="sr-only">
            Film transcript. Scene 1: Every morning in Madurai. Bills on paper, orders on WhatsApp, stock in a notebook,
            payments in your head; WhatsApp orders arrive while a handwritten bill ends with an unknown total. Scene 2:
            Five vendors, five follow-ups: a software company, website agency, marketing agency, HR consultant and AI
            consultant that don&rsquo;t talk to each other. Scene 3: They fall into one seed, which sprouts; roots spread
            and five branches connect your business to billing and stock, website and apps, AI and automation,
            marketing, and hiring. One partner, all connected. Scene 4: The M2P Nexus logo: வேரிலிருந்து
            வெற்றிவரை, From Roots to Success. Scene 5: Your first consultation is free. Tell us how your business runs
            today; we reply within one working day, in Tamil or English. Book at m2pnexus.com or WhatsApp us.
          </p>
        </figure>
      </div>
    </section>
  );
}
