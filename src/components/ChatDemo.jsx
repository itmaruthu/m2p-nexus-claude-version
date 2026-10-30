import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import logo from '../assets/m2p_nexus_logo.webp';

/**
 * Contact page: an example WhatsApp conversation between a Madurai business owner and M2P Nexus that types
 * itself out when scrolled into view. Messages from M2P Nexus are preceded by a typing indicator.
 * Illustration only (aria-hidden); the parent provides the real contact actions.
 */

const MESSAGES = [
  { from: 'them', text: 'Hi! We run a coconut wholesale business in Madurai. All our bills are still on paper 😅', time: '10:42' },
  { from: 'us', text: 'Vanakkam 🙏 We can help with that. Roughly how many bills do you write in a day?', time: '10:43' },
  { from: 'them', text: 'Around 80. Orders also come on WhatsApp.', time: '10:44' },
  { from: 'us', text: 'Then let’s start with Tamil and English billing that sends every bill on WhatsApp. Can we call you for 15 minutes today?', time: '10:44' },
  { from: 'them', text: 'Yes, call me at 4 👍', time: '10:45' },
  { from: 'us', text: 'Done. Talk to you at 4.', time: '10:45' },
];

const TYPING_MS = 1100;
const GAP_MS = 900;

export default function ChatDemo() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [run, setRun] = useState(0); // bump to replay

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      const t = setTimeout(() => setShown(MESSAGES.length), 0);
      return () => clearTimeout(t);
    }
    const timers = [];
    let at = 400;
    MESSAGES.forEach((m, i) => {
      if (m.from === 'us') {
        timers.push(setTimeout(() => setTyping(true), at));
        at += TYPING_MS;
      }
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setShown(i + 1);
        }, at),
      );
      at += GAP_MS + Math.min(m.text.length * 12, 900);
    });
    return () => timers.forEach(clearTimeout);
  }, [inView, reduce, run]);

  const replay = () => {
    setShown(0);
    setTyping(false);
    setRun((r) => r + 1);
  };

  return (
    <figure ref={ref} className="mx-auto w-full max-w-[22rem]">
      <div aria-hidden="true" className="rounded-[2.6rem] bg-ink p-2.5 shadow-lift">
        <div className="overflow-hidden rounded-[2.1rem] bg-[#EFEAE2]">
          <div className="flex items-center gap-3 bg-[#0F5132] px-4 pb-3 pt-5 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1">
              <img src={logo} alt="" width="36" height="24" className="w-full h-auto" />
            </span>
            <span className="leading-tight">
              <span className="block font-semibold">M2P Nexus</span>
              <span className="block text-xs text-emerald-100">{typing ? 'typing…' : 'online'}</span>
            </span>
          </div>
          <div className="flex h-[27rem] flex-col justify-end gap-2 px-3 py-4 bg-[radial-gradient(rgba(23,37,84,0.06)_1px,transparent_1px)] bg-[size:14px_14px]">
            <AnimatePresence initial={false}>
              {MESSAGES.slice(0, shown).map((m) => (
                <motion.div
                  key={`${run}-${m.text}`}
                  layout
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className={`max-w-[84%] rounded-2xl px-3 py-2 text-[0.92rem] leading-snug shadow-soft ${
                    m.from === 'us' ? 'self-start rounded-tl-sm bg-white text-ink' : 'self-end rounded-tr-sm bg-[#D9FDD3] text-ink'
                  }`}
                >
                  {m.text}
                  <span className="ml-2 align-bottom text-xs text-body">{m.time}</span>
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  key={`typing-${run}-${shown}`}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="self-start flex gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-soft"
                >
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-2 w-2 rounded-full bg-body/50"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.15 }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 flex items-center justify-between text-sm text-body">
        <span>Example conversation</span>
        {shown === MESSAGES.length && !reduce && (
          <button type="button" onClick={replay} className="font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4 hover:decoration-ink">
            Replay
          </button>
        )}
      </figcaption>
      <p className="sr-only">
        Example: a coconut wholesaler in Madurai says their bills are on paper; M2P Nexus suggests Tamil and English billing that sends bills on WhatsApp and arranges a 15-minute call.
      </p>
    </figure>
  );
}
