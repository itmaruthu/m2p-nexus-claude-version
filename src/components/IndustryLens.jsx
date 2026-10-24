import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { industries, rowKinds } from '../config/industries';
import { waLink } from '../config/site';
import { WhatsAppIcon } from './icons';

/**
 * Industries hero: pick an industry and a marigold scanner sweeps down its handwritten "today" page. Each
 * industry has rows for running the business, winning customers and building the team. As the
 * beam passes each paper habit, it is highlighted and its digital replacement lights up on the ink side.
 * The first panel renders complete on the server (no flash, works without JavaScript); the sweep runs when
 * the lens is first seen, and again for every industry the visitor picks. Reduced motion: no sweep.
 */

const ROW_DELAY = (i) => 0.35 + i * 0.62;

// Solid tags with dark or white text, so every label passes WCAG AA contrast on the ink panel.
const KIND_STYLE = {
  run: 'bg-white/15 text-white',
  customers: 'bg-marigold text-ink',
  team: 'bg-[#7CC793] text-ink',
};

function Panel({ ind, play, enter }) {
  return (
    <div className="overflow-hidden rounded-3xl ring-1 ring-rule shadow-[0_40px_80px_-40px_rgba(23,37,84,0.55)]">
      <div className="relative grid grid-cols-2">
        {/* Scanner beam over the paper side */}
        {play && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 z-20 h-[3px] w-1/2 bg-marigold shadow-[0_0_18px_4px_rgba(242,169,0,0.55)]"
            initial={{ top: '12%', opacity: 0 }}
            animate={{ top: ['12%', '100%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.8, ease: 'easeInOut', times: [0, 0.1, 0.9, 1] }}
          />
        )}

        <p className="bg-[#FBF6EA] px-4 pt-5 pb-3 sm:px-7 font-[family-name:var(--font-hand)] text-lg sm:text-2xl text-[#2B3A8C]">Today</p>
        <p className="flex items-center gap-2 bg-ink px-4 pt-5 pb-3 sm:px-7 font-heading font-semibold text-white">
          <span aria-hidden="true" className="ask-orb h-5 w-5 shrink-0 rounded-full" />
          With M2P Nexus
        </p>

        {ind.rows.map((row, i) => (
          <div key={row.paper} className="contents">
            <div className="relative border-t border-dashed border-[#E3D9C2] bg-[#FBF6EA] px-4 py-4 sm:px-7 sm:py-5">
              <span className="relative inline font-[family-name:var(--font-hand)] text-[15px] leading-snug text-[#2B3A8C] sm:text-xl">
                {play && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0.5 h-2.5 origin-left rounded-sm bg-marigold/35"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: ROW_DELAY(i), duration: 0.4 }}
                  />
                )}
                <span className="relative">{row.paper}</span>
              </span>
            </div>
            <div className="relative border-t border-white/10 bg-ink px-4 py-4 sm:px-7 sm:py-5">
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-marigold ring-4 ring-ink"
                initial={false}
                animate={play ? { scale: [1, 1.8, 1] } : { scale: 1 }}
                transition={{ delay: ROW_DELAY(i) + 0.1, duration: 0.5 }}
              />
              <motion.div
                className="relative rounded-xl bg-white/[0.07] px-3 py-2.5 text-sm leading-snug text-white ring-1 ring-white/10 sm:text-base"
                initial={enter ? { opacity: 0, x: -18 } : false}
                animate={play ? { opacity: 1, x: 0, boxShadow: ['0 0 0 0 rgba(242,169,0,0)', '0 0 0 4px rgba(242,169,0,0.45)', '0 0 0 0 rgba(242,169,0,0)'] } : { opacity: 1, x: 0 }}
                transition={{ delay: ROW_DELAY(i) + 0.15, duration: 0.7 }}
              >
                {/* What this row changes: running the business, winning customers or building the team */}
                <span className={`mb-1.5 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${KIND_STYLE[row.kind]}`}>
                  {rowKinds[row.kind]}
                </span>
                <span className="flex items-start gap-2">
                  <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#7CC793]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  {row.system}
                </span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t border-rule bg-white px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p className="text-body">
          <span className="font-heading font-semibold text-ink">Where we&rsquo;d start: </span>
          {ind.start}
        </p>
        <a
          href={waLink(`Hello, I run a business in ${ind.name.toLowerCase()}. ${ind.rows[0].paper}. Where should we start?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-leaf px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#185730] transition-colors"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Ask about {ind.name.toLowerCase()}
          <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}

export default function IndustryLens() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [active, setActive] = useState(0);
  const [picked, setPicked] = useState(false);
  const tabRefs = useRef([]);
  const play = !reduce && (inView || picked);

  const choose = (i, focus = false) => {
    setPicked(true);
    setActive(i);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (step) {
      e.preventDefault();
      choose((active + step + industries.length) % industries.length, true);
    } else if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      choose(e.key === 'Home' ? 0 : industries.length - 1, true);
    }
  };

  const ind = industries[active];

  return (
    <div ref={ref} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div
        role="tablist"
        aria-label="Industries"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:col-span-4 lg:mx-0 lg:block lg:space-y-1 lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {industries.map((x, i) => {
          const selected = i === active;
          return (
            <button
              key={x.id}
              ref={(el) => (tabRefs.current[i] = el)}
              type="button"
              role="tab"
              id={`industry-tab-${x.id}`}
              aria-selected={selected}
              aria-controls="industry-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => choose(i)}
              className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-left font-heading font-semibold transition-colors lg:block lg:w-full lg:whitespace-normal lg:rounded-none lg:py-3 lg:pl-6 lg:text-lg ${
                selected ? 'bg-ink text-white lg:bg-transparent lg:text-ink' : 'bg-[#F4F6FA] text-body hover:text-ink lg:bg-transparent'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId={reduce ? undefined : 'industry-indicator'}
                  aria-hidden="true"
                  className="absolute inset-y-1 left-0 hidden w-1 rounded-full bg-marigold lg:block"
                />
              )}
              {x.name}
            </button>
          );
        })}
      </div>

      <div id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${ind.id}`} className="lg:col-span-8">
        <Panel key={ind.id} ind={ind} play={play} enter={picked && !reduce} />
      </div>
    </div>
  );
}
