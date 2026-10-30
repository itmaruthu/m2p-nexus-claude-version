import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { japanHabits } from '../config/founders';

/**
 * "From Japan to Madurai": the route from onsite delivery in Japan home to Madurai draws once when seen,
 * then three habits learned there are each paired with what a client gets because of it. The route is
 * decorative (aria-hidden); the habits carry the meaning. Static for reduced motion.
 */

const ROUTE = 'M820 52 C 640 -6, 300 30, 150 150';

export default function JapanToMadurai() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const on = reduce || inView;
  const t = (d, delay = 0) => (reduce ? { duration: 0 } : { duration: d, delay, ease: [0.2, 0.7, 0.2, 1] });

  return (
    <section ref={ref} aria-labelledby="japan-title" className="relative overflow-hidden border-b border-rule bg-ink text-white grain">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="space-y-3 lg:col-span-7">
            <p className="font-heading text-sm font-semibold text-marigold">From Japan to Madurai</p>
            <h2 id="japan-title" className="font-display text-3xl font-bold leading-[1.12] tracking-[-0.015em] sm:text-4xl">
              Delivery discipline learned in Japan, brought home.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-300 lg:col-span-5">
            Maruthu delivered projects onsite in Japan. Three habits from there shape every M2P Nexus project, and each one
            shows up as something you can count on.
          </p>
        </div>

        {/* The route home: a drawn arc from sm up; a simple strip on phones */}
        <div aria-hidden="true" className="flex items-center gap-3 sm:hidden">
          <span className="text-sm">
            <span className="block font-heading font-semibold">Japan</span>
            <span className="block text-slate-300">Onsite delivery</span>
          </span>
          <motion.span
            className="h-0.5 flex-1 origin-left rounded-full bg-[linear-gradient(90deg,#F2A900,#3FA866)]"
            initial={false}
            animate={{ scaleX: on ? 1 : 0 }}
            transition={t(1.2, 0.2)}
          />
          <span className="text-right text-sm">
            <span className="block font-heading font-semibold">Madurai</span>
            <span className="block text-slate-300">M2P Nexus</span>
          </span>
        </div>
        <div aria-hidden="true" className="relative hidden sm:block">
          <svg viewBox="0 0 960 190" className="h-auto w-full" fill="none">
            <path d={ROUTE} stroke="rgba(255,255,255,0.14)" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
            <motion.path
              d={ROUTE}
              stroke="url(#route)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={false}
              animate={{ pathLength: on ? 1 : 0 }}
              transition={t(1.8, 0.2)}
            />
            <defs>
              <linearGradient id="route" x1="820" y1="0" x2="150" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#F2A900" />
                <stop offset="1" stopColor="#3FA866" />
              </linearGradient>
            </defs>
            {/* Japan */}
            <circle cx="820" cy="52" r="7" fill="#F2A900" />
            <circle cx="820" cy="52" r="15" stroke="#F2A900" strokeOpacity="0.35" />
            {/* Madurai */}
            <motion.circle cx="150" cy="150" r="9" fill="#3FA866" initial={false} animate={{ scale: on ? 1 : 0.4, opacity: on ? 1 : 0 }} transition={t(0.5, 1.9)} style={{ transformOrigin: '150px 150px' }} />
            <motion.circle cx="150" cy="150" r="20" stroke="#3FA866" strokeOpacity="0.4" initial={false} animate={{ opacity: on ? 1 : 0 }} transition={t(0.5, 2.1)} />
          </svg>
          <p className="absolute right-0 top-0 text-right text-sm sm:right-[4%]">
            <span className="block font-heading font-semibold text-white">Japan</span>
            <span className="block text-slate-300">Onsite project delivery</span>
          </p>
          <motion.p
            className="absolute bottom-0 left-[22%] text-sm sm:left-[20%]"
            initial={false}
            animate={{ opacity: on ? 1 : 0 }}
            transition={t(0.4, 2)}
          >
            <span className="block font-heading font-semibold text-white">Madurai</span>
            <span className="block text-slate-300">M2P Nexus</span>
          </motion.p>
        </div>

        <ol className="grid gap-4 md:grid-cols-3">
          {japanHabits.map((h, i) => (
            <li key={h.habit} className="flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="p-5">
                <p className="text-xs font-semibold text-slate-300">Habit {i + 1}, learned in Japan</p>
                <p className="mt-1 font-display text-lg font-bold">{h.habit}</p>
              </div>
              <div className="flex items-center gap-2 px-5 text-marigold">
                <ArrowDown aria-hidden="true" className="h-4 w-4" />
                <span className="text-xs font-semibold">What it means for you</span>
              </div>
              <p className="flex-1 p-5 pt-2 leading-relaxed text-slate-200">{h.you}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
