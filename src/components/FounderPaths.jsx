import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import founderPhoto from '../assets/founder_photo.webp';
import coFounderPhoto from '../assets/co_founder_photo.webp';

/**
 * Founder page signature: two career paths, technology (Maruthu) and people (Priyanka), each drawn as a
 * track of milestones under a portrait, then curving together into one M2P Nexus node. Paths draw once
 * when seen; small lights travel the merge curves. Renders complete without JavaScript or with reduced
 * motion. The founders' photos appear only on this page.
 */

const founders = [
  {
    id: 'maruthu',
    name: 'Maruthu Pandi PT',
    role: 'Founder & Director',
    photo: founderPhoto,
    photoSize: [800, 800],
    summary: 'Technology leader with 14+ years in software engineering, enterprise applications, digital transformation and business technology.',
    path: ['Software engineering', 'Enterprise applications', 'Onsite delivery in Japan', 'AI and automation'],
    color: '#F2A900',
    ring: 'from-ink via-[#3B4F8F] to-marigold',
  },
  {
    id: 'priyanka',
    name: 'Priyanka M',
    role: 'Co-Founder',
    photo: coFounderPhoto,
    photoSize: [300, 373],
    summary: 'Specialist in talent acquisition, workforce solutions, recruitment strategy, client engagement and business relationships.',
    path: ['Talent acquisition', 'Recruitment strategy', 'Client engagement', 'Business development'],
    color: '#3FA866',
    ring: 'from-leaf via-[#3FA866] to-marigold',
  },
];

const MERGE = ['M250 0 C250 90 500 70 500 150', 'M750 0 C750 90 500 70 500 150'];

function FounderCard({ f, on, reduce, side }) {
  return (
    <article className="flex flex-col items-center text-center">
      <div className={`rounded-[2rem] bg-gradient-to-br ${f.ring} p-[3px] shadow-[0_30px_60px_-30px_rgba(23,37,84,0.6)]`}>
        <img
          src={f.photo}
          alt={`${f.name}, ${f.role} of M2P Nexus`}
          width={f.photoSize[0]}
          height={f.photoSize[1]}
          className="aspect-[4/5] w-56 rounded-[calc(2rem-3px)] object-cover object-top sm:w-64"
        />
      </div>
      <h2 className="mt-6 font-display text-2xl font-extrabold text-ink sm:text-3xl">{f.name}</h2>
      <p className="mt-1 font-heading font-semibold text-leaf">{f.role}</p>
      <p className="mt-3 max-w-sm text-body leading-relaxed">{f.summary}</p>

      <ol aria-label={`${f.name}'s path`} className="relative mt-8 w-full max-w-xs space-y-5 text-left">
        <span aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-rule" />
        <motion.span
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-0.5 origin-top"
          style={{ backgroundColor: f.color }}
          initial={false}
          animate={{ scaleY: on ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 1.4, delay: side * 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        />
        {f.path.map((step, i) => (
          <li key={step} className="relative flex items-center gap-4">
            <motion.span
              aria-hidden="true"
              className="relative z-10 h-4 w-4 shrink-0 rounded-full ring-4 ring-white"
              initial={false}
              animate={on ? { backgroundColor: f.color, scale: 1 } : { backgroundColor: '#D6E0F0', scale: 0.8 }}
              transition={{ delay: reduce ? 0 : side * 0.2 + 0.25 + i * 0.3, type: 'spring', stiffness: 300, damping: 16 }}
            />
            <span className="font-heading font-semibold text-ink">{step}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function FounderPaths() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const on = reduce || inView;

  return (
    <div ref={ref}>
      <div className="grid gap-14 md:grid-cols-2 md:gap-10">
        {founders.map((f, i) => (
          <FounderCard key={f.id} f={f} on={on} reduce={reduce} side={i} />
        ))}
      </div>

      {/* The two paths merge (md and up); a simple connector on phones. */}
      <svg aria-hidden="true" viewBox="0 0 1000 150" preserveAspectRatio="none" className="mt-6 hidden h-32 w-full md:block" fill="none">
        {MERGE.map((d, i) => (
          <g key={d}>
            <path d={d} stroke="#D6E0F0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <motion.path
              d={d}
              stroke={founders[i].color}
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={false}
              animate={{ pathLength: on ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 1.1, delay: reduce ? 0 : 1.6, ease: [0.2, 0.7, 0.2, 1] }}
            />
            {inView && !reduce && (
              <circle r="5" fill={founders[i].color}>
                <animateMotion dur="2.6s" begin={`${2.8 + i * 0.4}s`} repeatCount="indefinite" path={d} />
              </circle>
            )}
          </g>
        ))}
      </svg>
      <div aria-hidden="true" className="mx-auto my-6 h-14 w-0.5 bg-[linear-gradient(to_bottom,#F2A900,#3FA866)] md:hidden" />

      <div className="flex flex-col items-center text-center">
        <motion.span
          aria-hidden="true"
          className="ask-orb h-16 w-16 rounded-full"
          initial={false}
          animate={on ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0.5 }}
          transition={{ delay: reduce ? 0 : 2.5, type: 'spring', stiffness: 220, damping: 14 }}
        />
        <p className="mt-5 font-display text-3xl font-extrabold text-ink sm:text-4xl">M2P Nexus</p>
        <p className="mt-2 font-heading text-lg font-semibold text-body">Technology + People = Growth</p>
        <p lang="ta" className="mt-1 font-semibold text-leaf">வேரிலிருந்து வெற்றிவரை</p>
      </div>
    </div>
  );
}
