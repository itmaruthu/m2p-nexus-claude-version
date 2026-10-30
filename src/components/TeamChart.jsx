import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * About signature: "Who's on your team?" The brand guide's founding story as one diagram with three states.
 *   Large company: five specialist firms around it (it can afford them all).
 *   Small business today: the same five seats, empty; the owner wears every hat.
 *   With M2P Nexus: one partner fills all five seats.
 * It steps through the three once when first seen (stopped by any click, skipped for reduced motion) and
 * then waits on "With M2P Nexus". Seats sit on a ring from sm up and in a grid on phones. The caption under
 * the diagram says in words what each state shows (announced politely when it changes).
 */

const SEATS = [
  { vendor: 'Software vendor', hat: 'Software?', ours: 'Software & websites' },
  { vendor: 'Marketing agency', hat: 'Marketing?', ours: 'Digital marketing' },
  { vendor: 'HR firm', hat: 'Hiring?', ours: 'HR & hiring' },
  { vendor: 'AI expert', hat: 'AI?', ours: 'AI solutions' },
  { vendor: 'IT consultant', hat: 'Tech advice?', ours: 'IT consulting' },
];

const STATES = [
  {
    id: 'large',
    tab: 'A large company',
    core: 'Large company',
    stat: '5 firms to manage',
    caption: 'Large companies can pay for software vendors, marketing agencies, HR firms, AI experts and consultants.',
  },
  {
    id: 'today',
    tab: 'A small business today',
    core: 'You, the owner',
    stat: 'No specialists: you do it all',
    caption: 'Small businesses usually can’t. So the owner wears every hat, and the gaps stay open.',
  },
  {
    id: 'with',
    tab: 'With M2P Nexus',
    core: 'M2P Nexus',
    stat: '5 skills, 1 partner',
    caption: 'One partner fills every seat: one team that knows your business, instead of five vendors to coordinate.',
  },
];

// Ring positions (% of the stage) for five seats, starting at the top.
const RING = SEATS.map((_, i) => {
  const a = (-90 + 72 * i) * (Math.PI / 180);
  return { x: 50 + 38 * Math.cos(a), y: 52 + 38 * Math.sin(a) };
});

function seatStyle(state) {
  if (state === 'large') return 'border border-rule bg-white text-ink shadow-soft';
  if (state === 'today') return 'border-2 border-dashed border-slate-300 bg-transparent text-slate-500';
  return 'border border-leaf/30 bg-[#EAF5EE] text-leaf shadow-soft';
}

function Seat({ seat, state }) {
  const label = state === 'large' ? seat.vendor : state === 'today' ? seat.hat : seat.ours;
  return (
    <span className={`flex min-h-12 items-center justify-center rounded-xl px-3 py-2 text-center font-heading text-sm font-semibold leading-tight transition-colors duration-300 ${seatStyle(state)}`}>
      {label}
    </span>
  );
}

export default function TeamChart() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [i, setI] = useState(1); // server render: "a small business today"
  const touched = useRef(false);
  const s = STATES[i];

  // Tell the story once: large company -> small business today -> with M2P Nexus.
  useEffect(() => {
    if (!inView || reduce) return;
    const steps = [0, 1, 2];
    const timers = steps.map((step, k) => setTimeout(() => !touched.current && setI(step), 300 + k * 2400));
    return () => timers.forEach(clearTimeout);
  }, [inView, reduce]);

  const pick = (k) => {
    touched.current = true;
    setI(k);
  };

  const lineColor = s.id === 'with' ? '#F2A900' : s.id === 'large' ? '#94A3B8' : '#CBD5E1';

  return (
    <div ref={ref} className="space-y-6">
      <div role="group" aria-label="Whose team to show" className="flex flex-wrap gap-2">
        {STATES.map((st, k) => (
          <button
            key={st.id}
            type="button"
            aria-pressed={k === i}
            onClick={() => pick(k)}
            className={`min-h-11 rounded-full px-4 font-heading text-sm font-semibold transition-colors duration-200 ${
              k === i ? (st.id === 'with' ? 'bg-leaf text-white' : 'bg-ink text-white') : 'bg-white text-ink ring-1 ring-rule hover:ring-ink'
            }`}
          >
            {st.tab}
          </button>
        ))}
      </div>

      <div aria-hidden="true" className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-rule">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

        {/* Ring layout (sm and up) */}
        <div className="relative hidden aspect-[16/11] sm:block lg:aspect-[2/1]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            {RING.map((p, k) => (
              <motion.line
                key={k}
                x1="50"
                y1="52"
                x2={p.x}
                y2={p.y}
                vectorEffect="non-scaling-stroke"
                strokeWidth={s.id === 'with' ? 2.5 : 1.5}
                strokeDasharray={s.id === 'today' ? '5 6' : '0'}
                animate={{ stroke: lineColor, opacity: 1 }}
                transition={{ duration: reduce ? 0 : 0.3 }}
              />
            ))}
          </svg>
          {SEATS.map((seat, k) => (
            <motion.div
              key={seat.vendor}
              className="absolute w-40 -translate-x-1/2 -translate-y-1/2 lg:w-44"
              style={{ left: `${RING[k].x}%`, top: `${RING[k].y}%` }}
              animate={{ rotate: s.id === 'today' ? (k % 2 ? 3 : -3) : 0, scale: s.id === 'with' ? 1.04 : 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: reduce ? 0 : k * 0.04 }}
            >
              <Seat seat={seat} state={s.id} />
            </motion.div>
          ))}
          <Core s={s} className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Grid layout (phones) */}
        <div className="relative space-y-4 p-4 sm:hidden">
          <Core s={s} className="mx-auto" />
          <div className="grid grid-cols-2 gap-2">
            {SEATS.map((seat, k) => (
              <div key={seat.vendor} className={k === SEATS.length - 1 ? 'col-span-2' : ''}>
                <Seat seat={seat} state={s.id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <p aria-live="polite" className="max-w-2xl text-lg leading-relaxed text-body">
          {s.caption}
        </p>
        <p className={`shrink-0 font-display text-lg font-bold ${s.id === 'with' ? 'text-leaf' : 'text-ink'}`}>{s.stat}</p>
      </div>
    </div>
  );
}

function Core({ s, className = '' }) {
  const withUs = s.id === 'with';
  return (
    <div className={`flex w-44 flex-col items-center gap-2 text-center ${className}`}>
      <span
        className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300 ${
          withUs ? 'ask-orb shadow-[0_0_40px_6px_rgba(242,169,0,0.35)]' : s.id === 'today' ? 'bg-slate-200' : 'bg-ink'
        }`}
      >
        {!withUs && <span className={`h-5 w-5 rounded-full ${s.id === 'today' ? 'bg-slate-400' : 'bg-white'}`} />}
      </span>
      <span className={`rounded-full px-3 py-1 font-heading text-sm font-bold ${withUs ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-rule'}`}>{s.core}</span>
    </div>
  );
}
