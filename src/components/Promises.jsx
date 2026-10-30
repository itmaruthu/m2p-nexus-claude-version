import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Clock3, GraduationCap, Handshake, KeyRound, LifeBuoy } from 'lucide-react';
import { promises } from '../config/promises';
import BookButton from './consultation/BookButton';
import useSpotlight from './useSpotlight';

/**
 * "Our promise to you": the founders' commitments as a signed pledge on a deep ink band. A gold thread draws
 * across the five promises when the band is seen, and each icon lights up as the thread reaches it. The seal
 * turns slowly beside the heading (stopped for reduced motion by the global rule), the founder signs it off,
 * and a "free consultation" button sits where trust is highest. Renders complete without JavaScript.
 * `lang` is 'en' or 'ta'.
 */

const icons = { free: Handshake, own: KeyRound, train: GraduationCap, support: LifeBuoy, reply: Clock3 };

const cta = {
  en: { book: 'Book your free consultation', note: 'We reply within one working day.' },
  ta: { book: 'இலவச ஆலோசனைக்கு முன்பதிவு', note: 'ஒரு வேலை நாளுக்குள் பதிலளிப்போம்.' },
};

function Seal({ id }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className="h-28 w-28 sm:h-36 sm:w-36">
      <defs>
        <path id={id} d="M60 60 m-43 0 a43 43 0 1 1 86 0 a43 43 0 1 1 -86 0" />
        <radialGradient id={`${id}-gold`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFD86B" />
          <stop offset="60%" stopColor="#F2A900" />
          <stop offset="100%" stopColor="#B87C00" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill={`url(#${id}-gold)`} />
      <circle cx="60" cy="60" r="52.5" fill="none" stroke="#172554" strokeOpacity="0.55" strokeWidth="1.2" strokeDasharray="2 3" />
      <g className="seal-spin" style={{ transformOrigin: '60px 60px' }}>
        {/* textLength = the ring's circumference (2π × 43 ≈ 270), so the words fill the circle exactly once. */}
        <text fill="#172554" fontSize="9" fontWeight="700" fontFamily="Archivo Variable, sans-serif">
          <textPath href={`#${id}`} textLength="268" lengthAdjust="spacing">
            M2P NEXUS • FROM ROOTS TO SUCCESS •
          </textPath>
        </text>
      </g>
      <circle cx="60" cy="60" r="27" fill="#172554" />
      <path d="M48 61l8 8 16-17" fill="none" stroke="#F2A900" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Promises({ lang = 'en', headingId = 'promise-title' }) {
  const p = promises[lang];
  const c = cta[lang];
  const ta = lang === 'ta';
  const reduce = useReducedMotion();
  const spotlight = useSpotlight();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const on = reduce || inView;

  return (
    <section ref={spotlight} aria-labelledby={headingId} className="relative overflow-hidden bg-ink text-white grain spotlight">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#F2A900_30%,#3FA866_70%,transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-14">
        {/* Heading, signed and sealed */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-8">
            <h2
              id={headingId}
              className={`text-4xl sm:text-5xl ${ta ? 'font-sans font-bold leading-snug' : 'font-display font-bold leading-[1.05] tracking-[-0.02em]'}`}
            >
              {p.title}
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">{p.intro}</p>
          </div>
          <div className="flex items-center gap-5 lg:col-span-4 lg:justify-end">
            <div className="text-right">
              <p className="whitespace-nowrap font-[family-name:var(--font-hand)] text-2xl text-marigold -rotate-2 sm:text-3xl">{p.sign}</p>
              <p className="mt-1 text-sm text-slate-300">{p.role}</p>
            </div>
            <div className="shrink-0 rotate-6 drop-shadow-[0_10px_30px_rgba(242,169,0,0.35)]">
              <Seal id={`${headingId}-seal`} />
            </div>
          </div>
        </div>

        {/* The five promises, joined by a gold thread */}
        <div ref={ref} className="relative">
          <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-[3.25rem] hidden h-px bg-white/10 lg:block">
            <motion.div
              className="h-full origin-left bg-[linear-gradient(90deg,#3FA866,#F2A900)] shadow-[0_0_12px_rgba(242,169,0,0.6)]"
              initial={false}
              animate={{ scaleX: on ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 1.8, ease: [0.2, 0.7, 0.2, 1] }}
            />
          </div>

          <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {p.items.map((it, i) => {
              const Icon = icons[it.icon];
              return (
                <li
                  key={it.icon}
                  className={`group rounded-3xl p-px transition-transform duration-300 hover:-translate-y-1 bg-[linear-gradient(160deg,rgba(242,169,0,0.55),rgba(255,255,255,0.08)_45%,rgba(63,168,102,0.45))] ${
                    i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="flex h-full gap-4 rounded-[calc(1.5rem-1px)] bg-[#111C45] p-5 sm:p-6 lg:flex-col">
                    <motion.span
                      aria-hidden="true"
                      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-marigold ring-1 ring-marigold/40 lg:h-14 lg:w-14"
                      initial={false}
                      animate={
                        on
                          ? { boxShadow: '0 0 0 6px rgba(242,169,0,0.12), 0 0 28px rgba(242,169,0,0.45)' }
                          : { boxShadow: '0 0 0 0 rgba(242,169,0,0), 0 0 0 rgba(242,169,0,0)' }
                      }
                      transition={{ delay: reduce ? 0 : 0.25 + i * 0.32, duration: 0.6 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.span>
                    <div className="space-y-2 lg:space-y-4">
                      <h3 className={`text-lg leading-snug text-white ${ta ? 'font-sans font-bold' : 'font-heading font-semibold'}`}>{it.title}</h3>
                      <p className="text-[0.95rem] leading-relaxed text-slate-300">{it.text}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Act at the moment of trust */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <BookButton
            className="inline-flex items-center justify-center rounded-xl bg-marigold px-7 py-4 font-semibold text-ink transition-colors hover:bg-[#FFC233]"
          >
            {c.book}
          </BookButton>
          <p className="text-slate-300">{c.note}</p>
        </div>
      </div>
    </section>
  );
}
