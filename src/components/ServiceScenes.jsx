import { useEffect, useState } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

// Animated scenes for the Services switchboard. Each one replays when it mounts (the parent keys it by tab).
// Illustrations only: figures and messages are examples, and the parent renders them aria-hidden.

const rise = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
});

const STOCK = [
  { item: 'Coconut', level: 82 },
  { item: 'Rice 25 kg', level: 64 },
  { item: 'Groundnut oil 5 L', level: 16, low: true },
];

/** Run your business: one live view of sales, invoices and stock, with an alert before oil runs out. */
export function RunScene() {
  const sales = useMotionValue(0);
  const salesText = useTransform(sales, (v) => `₹${Math.round(v).toLocaleString('en-IN')}`);
  const invoices = useMotionValue(0);
  const invoicesText = useTransform(invoices, (v) => Math.round(v));
  useEffect(() => {
    const ease = [0.2, 0.7, 0.2, 1];
    const a = animate(sales, 48250, { duration: 2, delay: 0.3, ease });
    const b = animate(invoices, 36, { duration: 2, delay: 0.3, ease });
    return () => {
      a.stop();
      b.stop();
    };
  }, [sales, invoices]);

  return (
    <div className="grid w-full gap-4 sm:grid-cols-5">
      <div className="sm:col-span-3 rounded-2xl bg-white p-5 ring-1 ring-rule shadow-lg">
        <div className="flex items-center justify-between">
          <p className="font-heading font-bold text-ink">Today</p>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-leaf">
            <span className="h-2 w-2 rounded-full bg-leaf animate-pulse" />
            Live
          </span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <p className="text-sm text-body">Sales</p>
            <motion.p className="font-display font-extrabold text-ink text-2xl tabular-nums">{salesText}</motion.p>
          </div>
          <div>
            <p className="text-sm text-body">Invoices on WhatsApp</p>
            <motion.p className="font-display font-extrabold text-ink text-2xl tabular-nums">{invoicesText}</motion.p>
          </div>
        </div>
        <svg viewBox="0 0 300 70" className="mt-3 w-full" fill="none">
          <motion.path
            d="M0 60 L30 52 L60 56 L90 40 L120 44 L150 30 L180 34 L210 20 L240 24 L270 12 L300 8"
            stroke="#1F6B3A"
            strokeWidth="3"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          />
        </svg>
      </div>

      <div className="sm:col-span-2 rounded-2xl bg-white p-5 ring-1 ring-rule shadow-lg space-y-3">
        <p className="font-heading font-bold text-ink">Stock</p>
        {STOCK.map((s, i) => (
          <div key={s.item}>
            <div className="flex justify-between text-sm">
              <span className="text-ink">{s.item}</span>
              <span className={`tabular-nums font-semibold ${s.low ? 'text-[#B42318]' : 'text-body'}`}>{s.level}%</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-[#EEF2F8]">
              <motion.div
                className={`h-2 rounded-full ${s.low ? 'bg-marigold' : 'bg-leaf'}`}
                initial={{ width: '100%' }}
                animate={{ width: `${s.level}%` }}
                transition={{ duration: 1.4, delay: 0.5 + i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      <motion.div
        {...rise(2.2)}
        className="sm:col-span-5 flex items-start gap-3 rounded-2xl bg-ink p-4 text-white shadow-lg"
      >
        <span className="ask-orb mt-0.5 h-7 w-7 shrink-0 rounded-full" />
        <p className="text-sm leading-relaxed">
          <span className="font-semibold text-marigold">Suggestion: </span>
          Groundnut oil sells fastest on Fridays. Reorder 12 tins by Thursday so you don&rsquo;t run out.
        </p>
      </motion.div>
    </div>
  );
}

const MESSAGES = [
  { text: 'நாளைக்கு 200 தேங்காய் வேணும்', lang: 'ta', row: ['Coconut', '200', 'Tomorrow'] },
  { text: 'Pls send rice rate list', row: ['Rice rate list', '—', 'Sent'] },
  { text: 'பில் 214 அனுப்புங்க', lang: 'ta', row: ['Invoice 214', '1', 'Sent'] },
  { text: 'Oil 5L × 10 by Friday', row: ['Groundnut oil 5 L', '10', 'Friday'] },
];

/** Work smarter: orders arriving on WhatsApp are read and sorted into the order book automatically. */
export function SmarterScene() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 w-full">
      <div className="rounded-2xl bg-[#E7EFE9] p-4 space-y-2.5 ring-1 ring-black/5">
        <p className="text-sm font-semibold text-leaf">Orders on WhatsApp</p>
        {MESSAGES.map((m, i) => (
          <motion.p
            key={m.text}
            lang={m.lang}
            {...rise(0.25 + i * 0.35)}
            className="w-fit max-w-[90%] rounded-xl rounded-tl-sm bg-white px-3 py-2 text-sm text-ink shadow-sm"
          >
            {m.text}
          </motion.p>
        ))}
      </div>
      <div className="rounded-2xl bg-white p-4 ring-1 ring-rule shadow-lg">
        <div className="flex items-center justify-between">
          <p className="font-heading font-bold text-ink">Order book</p>
          <motion.span {...rise(3.2)} className="rounded-full bg-leaf/10 px-2.5 py-0.5 text-xs font-semibold text-leaf">
            Sorted by AI
          </motion.span>
        </div>
        <table className="mt-3 w-full text-sm">
          <tbody>
            {MESSAGES.map((m, i) => (
              <motion.tr
                key={m.row[0]}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 + i * 0.35, duration: 0.45 }}
                className="border-t border-rule"
              >
                <td className="py-2 pr-2 font-medium text-ink">{m.row[0]}</td>
                <td className="py-2 pr-2 text-body tabular-nums">{m.row[1]}</td>
                <td className="py-2 text-right">
                  <span className="rounded-md bg-[#F4F6FA] px-2 py-0.5 text-xs font-semibold text-ink">{m.row[2]}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const CHANNELS = [
  { name: 'Google search', value: 18 },
  { name: 'Instagram', value: 12 },
  { name: 'Website', value: 10 },
  { name: 'WhatsApp', value: 7 },
];

const TOASTS = [
  'New enquiry from Google: “coconut wholesale near me”',
  'New 5-star review on your Google profile',
  'Instagram post reached 4,200 people',
];

/** Win more customers: weekly enquiries climb, split by where they came from, while new leads arrive. */
export function CustomersScene() {
  const count = useMotionValue(12);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    const controls = animate(count, 47, { duration: 2.2, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] });
    return () => controls.stop();
  }, [count]);

  return (
    <div className="grid w-full gap-4 sm:grid-cols-5">
      <div className="sm:col-span-3 rounded-2xl bg-white p-5 ring-1 ring-rule shadow-lg">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-heading font-semibold text-ink">Enquiries this week</p>
            <p className="font-display font-extrabold text-leaf text-4xl tabular-nums">
              <motion.span>{rounded}</motion.span>
            </p>
          </div>
          <p className="text-sm font-semibold text-leaf">Up from 12</p>
        </div>
        <svg viewBox="0 0 400 120" className="mt-3 w-full" fill="none">
          {[30, 60, 90].map((y) => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#D6E0F0" strokeDasharray="4 6" />
          ))}
          <motion.path
            d="M0 104 C40 100 60 96 90 92 S150 82 180 78 S240 60 270 52 S340 24 400 12"
            stroke="#1F6B3A"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          />
        </svg>
      </div>
      <div className="sm:col-span-2 rounded-2xl bg-white p-5 ring-1 ring-rule shadow-lg space-y-3">
        <p className="font-heading font-bold text-ink">Where they came from</p>
        {CHANNELS.map((c, i) => (
          <div key={c.name}>
            <div className="flex justify-between text-sm">
              <span className="text-ink">{c.name}</span>
              <span className="tabular-nums font-semibold text-body">{c.value}</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-[#EEF2F8]">
              <motion.div
                className="h-2 rounded-full bg-marigold"
                initial={{ width: 0 }}
                animate={{ width: `${(c.value / 18) * 100}%` }}
                transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="sm:col-span-5 space-y-2.5">
        {TOASTS.map((t, i) => (
          <motion.p
            key={t}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.6, type: 'spring', stiffness: 220, damping: 22 }}
            className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm text-ink ring-1 ring-rule shadow-sm"
          >
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-marigold" />
            {t}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

const STAGES = ['Applied', 'Screened', 'Interview', 'Hired'];
const STAGE_COUNTS = [24, 8, 3, 1];
const POOL = [
  { initials: 'SK', role: 'Billing executive' },
  { initials: 'RM', role: 'Billing executive' },
  { initials: 'AP', role: 'Billing executive' },
];

/** Build your team: a candidate moves through the hiring pipeline, from application to offer. */
export function TeamScene() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const timers = [1, 2, 3].map((n) => setTimeout(() => setStage(n), 700 + n * 900));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="rounded-2xl bg-white p-4 ring-1 ring-rule shadow-lg sm:p-5">
        <div className="flex items-center justify-between">
          <p className="font-heading font-bold text-ink">Hiring: billing executive</p>
          <span className="rounded-full bg-leaf/10 px-2.5 py-0.5 text-xs font-semibold text-leaf">Screened by us</span>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
          {STAGES.map((name, i) => (
            <div key={name} className={`min-h-[9.5rem] rounded-xl p-2 sm:p-3 ${i === 3 ? 'bg-leaf/10' : 'bg-[#F4F6FA]'}`}>
              <p className="text-[11px] font-semibold text-body sm:text-xs">{name}</p>
              <p className="font-display text-lg font-extrabold text-ink tabular-nums sm:text-2xl">{STAGE_COUNTS[i]}</p>
              <div className="mt-2 space-y-1.5">
                {i === 0 &&
                  POOL.slice(1).map((c) => (
                    <div key={c.initials} className="flex items-center gap-1.5 rounded-lg bg-white p-1.5 ring-1 ring-rule">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D6E0F0] text-[9px] font-bold text-ink">{c.initials}</span>
                      <span className="hidden truncate text-[10px] text-body sm:block">{c.role}</span>
                    </div>
                  ))}
                {stage === i && (
                  <motion.div
                    layoutId="moving-candidate"
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                    className={`flex items-center gap-1.5 rounded-lg p-1.5 shadow-md ${i === 3 ? 'bg-leaf text-white' : 'bg-ink text-white'}`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-marigold text-[9px] font-bold text-ink">{POOL[0].initials}</span>
                    <span className="hidden truncate text-[10px] sm:block">{POOL[0].role}</span>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={stage === 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: stage === 3 ? 0.5 : 0, duration: 0.4 }}
        className="flex items-center gap-3 rounded-2xl bg-ink p-4 text-sm text-white shadow-lg"
      >
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#7CC793]" />
        <span>
          <span className="font-semibold text-marigold">Offer accepted. </span>
          Joining date fixed and an onboarding plan sent to the new hire.
        </span>
      </motion.p>
    </div>
  );
}
