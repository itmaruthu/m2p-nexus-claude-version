import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * About: where M2P Nexus is heading, from today's services to its own products (brand guide, "future
 * direction"). A track draws from "Today" through each product, and each product's icon lights up as the
 * line reaches it. No dates or statuses: the brand guide gives none. Decorative glyphs are aria-hidden; the
 * list itself is real, ordered content.
 */

const PRODUCTS = [
  {
    name: 'Tamil-first billing software',
    note: 'Billing that speaks the language your shop already works in.',
    glyph: (
      <>
        <rect x="7" y="4" width="18" height="24" rx="2" />
        <path d="M11 10h10M11 15h10M11 20h6" />
      </>
    ),
  },
  {
    name: 'Business automation platforms',
    note: 'Repeated work, from orders to reminders, handled on its own.',
    glyph: (
      <>
        <circle cx="16" cy="16" r="5" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" />
      </>
    ),
  },
  {
    name: 'AI-powered tools for enterprises',
    note: 'Practical AI that reads, sorts and suggests, built for real operations.',
    glyph: (
      <>
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="24" cy="9" r="2.5" />
        <circle cx="16" cy="23" r="2.5" />
        <circle cx="16" cy="13" r="2.5" />
        <path d="M10 10l4 2M22 10l-4 2M16 15.5v5" />
      </>
    ),
  },
  {
    name: 'HR technology',
    note: 'Hiring and people management tools for growing teams.',
    glyph: (
      <>
        <circle cx="12" cy="11" r="4" />
        <path d="M5 26c0-4 3-7 7-7s7 3 7 7" />
        <path d="M21 9h6M24 6v6" />
      </>
    ),
  },
];

export default function Roadmap() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const on = reduce || inView;

  return (
    <div ref={ref} className="relative">
      {/* The track draws from "Today" onwards: vertical on phones, horizontal from lg up. */}
      <div aria-hidden="true" className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-rule lg:hidden">
        <motion.div
          className="h-full w-full origin-top bg-[linear-gradient(to_bottom,#1F6B3A,#F2A900)]"
          initial={false}
          animate={{ scaleY: on ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 1.6, ease: [0.2, 0.7, 0.2, 1] }}
        />
      </div>
      <div aria-hidden="true" className="absolute left-6 right-[10%] top-[19px] hidden h-0.5 bg-rule lg:block">
        <motion.div
          className="h-full w-full origin-left bg-[linear-gradient(to_right,#1F6B3A,#F2A900)]"
          initial={false}
          animate={{ scaleX: on ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 1.6, ease: [0.2, 0.7, 0.2, 1] }}
        />
      </div>

      <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-5">
        <li className="flex gap-5 lg:block">
          <span aria-hidden="true" className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf ring-4 ring-white">
            <span className="h-3 w-3 rounded-full bg-white" />
          </span>
          <div className="lg:mt-5">
            <p className="font-heading text-sm font-semibold text-leaf">Today</p>
            <p className="mt-1 font-display font-bold text-ink text-lg leading-snug">Consulting and implementation</p>
            <p className="mt-1 text-sm text-body leading-relaxed">Software, AI, HR and marketing for the businesses we serve.</p>
          </div>
        </li>

        {PRODUCTS.map((p, i) => (
          <li key={p.name} className="flex gap-5 lg:block">
            <motion.span
              aria-hidden="true"
              className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-marigold ring-4 ring-white shadow-[0_0_0_6px_rgba(242,169,0,0.15)]"
              initial={false}
              animate={on ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0.4 }}
              transition={{ delay: reduce ? 0 : 0.4 + i * 0.3, type: 'spring', stiffness: 260, damping: 18 }}
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {p.glyph}
              </svg>
            </motion.span>
            <div className="lg:mt-5">
              <p className="font-heading text-sm font-semibold text-[#8A5A00]">Next</p>
              <p className="mt-1 font-display font-bold text-ink text-lg leading-snug">{p.name}</p>
              <p className="mt-1 text-sm text-body leading-relaxed">{p.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
