import { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { DigitalInvoice, PaperBill } from './BillIllustration';

// Animated scenes for the Services switchboard. Each one replays when it mounts (the parent keys it by tab).
// Illustrations only: figures and messages are examples, and the parent renders them aria-hidden.

const rise = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: [0.2, 0.7, 0.2, 1] },
});

/** Run your business: the handwritten bill becomes a digital invoice. */
export function RunScene() {
  return (
    <div className="relative mx-auto w-full max-w-[30rem] py-4">
      <div className="w-[88%] sm:w-[82%]">
        <PaperBill />
      </div>
      <div className="relative -mt-20 ml-auto w-full sm:-mt-28 sm:w-[72%]">
        <DigitalInvoice />
      </div>
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

const TOASTS = [
  'New enquiry from Google: “coconut wholesale near me”',
  'Instagram post reached 4,200 people',
  'Candidate shortlisted: billing executive',
];

/** Grow: weekly enquiries climb while new leads and hires arrive. */
export function GrowScene() {
  const count = useMotionValue(12);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    const controls = animate(count, 47, { duration: 2.2, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] });
    return () => controls.stop();
  }, [count]);

  return (
    <div className="grid gap-4 w-full">
      <div className="rounded-2xl bg-white p-5 ring-1 ring-rule shadow-lg">
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
          <motion.circle cx="400" cy="12" r="7" fill="#F2A900" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.4 }} style={{ originX: '400px', originY: '12px' }} />
        </svg>
      </div>
      <div className="space-y-2.5">
        {TOASTS.map((t, i) => (
          <motion.p
            key={t}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + i * 0.7, type: 'spring', stiffness: 220, damping: 22 }}
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
