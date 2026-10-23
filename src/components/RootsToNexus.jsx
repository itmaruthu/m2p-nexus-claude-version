import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * The M2P Nexus signature: green roots (a business and its traditions) grow up through the ground and turn
 * into ink circuit lines (technology) that end in marigold nodes (success). "From Roots to Success" + "Nexus".
 * Draws itself once when scrolled into view; renders finished when the visitor prefers reduced motion.
 */

const ROOTS = [
  'M600 260 C596 300 560 330 500 350 C450 366 410 388 360 410',
  'M600 260 C606 302 640 330 700 348 C752 364 800 386 850 410',
  'M600 260 C600 320 604 360 596 410',
  'M592 292 C560 330 500 372 430 396',
  'M610 292 C640 332 700 370 770 394',
  'M520 345 C500 364 482 382 470 406',
  'M690 346 C712 366 726 386 734 408',
];

const TRUNK = 'M600 260 L600 200';

const TRACES = [
  'M600 200 L600 150 L560 110 L400 110 L370 80 L250 80',
  'M600 200 L640 160 L820 160 L850 130 L960 130',
  'M600 150 L640 110 L700 110 L740 70 L900 70',
  'M600 230 L540 230 L500 190 L200 190',
  'M600 150 L600 30',
  'M600 230 L660 230 L700 190 L1000 190',
];

const JUNCTIONS = [
  [600, 200],
  [600, 150],
  [600, 230],
];

// Node positions match the trace ends above; labels sit beside them.
const NODES = [
  { x: 250, y: 80, anchor: 'end' },
  { x: 960, y: 130, anchor: 'start' },
  { x: 900, y: 70, anchor: 'start' },
  { x: 200, y: 190, anchor: 'end' },
  { x: 600, y: 30, anchor: 'middle', main: true },
  { x: 1000, y: 190, anchor: 'start' },
];

const THEMES = {
  light: { root: '#1F6B3A', trace: '#172554', ground: '#D6E0F0', ring: '#172554', label: '#172554', groundLabel: '#1F6B3A' },
  dark: { root: '#6CC08F', trace: 'rgba(255,255,255,0.75)', ground: 'rgba(255,255,255,0.18)', ring: '#ffffff', label: '#ffffff', groundLabel: '#6CC08F' },
};

/**
 * @param {'light'|'dark'} theme
 * @param {string[]} [labels] six node labels in NODES order; omit for a purely decorative mark
 * @param {string} [groundLabel] text on the ground line, e.g. "Your business"
 */
export default function RootsToNexus({ theme = 'light', labels, groundLabel, className = '' }) {
  const reduce = useReducedMotion();
  const c = THEMES[theme];
  // One trigger for the whole drawing: nodes start at scale 0, so they cannot detect being in view themselves.
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const on = reduce || inView;
  const draw = (delay, duration = 1) => ({
    initial: reduce ? false : { pathLength: 0 },
    animate: { pathLength: on ? 1 : 0 },
    transition: { delay, duration, ease: [0.4, 0, 0.2, 1] },
  });
  const pop = (delay) => ({
    initial: reduce ? false : { scale: 0 },
    animate: { scale: on ? 1 : 0 },
    transition: { delay, type: 'spring', stiffness: 260, damping: 16 },
  });

  return (
    <svg
      ref={ref}
      viewBox="0 -24 1200 444"
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={labels ? 'img' : undefined}
      aria-label={labels ? `From your business's roots to connected services: ${labels.join(', ')}` : undefined}
      aria-hidden={labels ? undefined : 'true'}
    >
      <line x1="80" y1="260" x2="1120" y2="260" stroke={c.ground} strokeWidth="2" strokeDasharray="6 10" />
      {groundLabel && (
        <text x="88" y="290" fill={c.groundLabel} className="font-heading max-sm:hidden" fontSize="20" fontWeight="600">
          {groundLabel}
        </text>
      )}

      {ROOTS.map((d, i) => (
        <motion.path key={d} d={d} stroke={c.root} strokeWidth={i < 3 ? 5 : 3} {...draw(0.1 * i, 1.2)} />
      ))}
      <motion.path d={TRUNK} stroke={c.trace} strokeWidth="5" {...draw(1.0, 0.4)} />
      {TRACES.map((d, i) => (
        <motion.path key={d} d={d} stroke={c.trace} strokeWidth="3.5" {...draw(1.35 + 0.12 * i, 1.1)} />
      ))}

      {/* Signals: marigold pulses flowing from the trunk out to the services once the drawing is done. */}
      {on && !reduce &&
        [0, 1, 5, 2].map((t, i) => (
          <circle key={`signal-${t}`} r="5" fill="#F2A900" opacity="0">
            <animateMotion dur={`${3.2 + i * 0.7}s`} begin={`${3 + i * 0.9}s`} repeatCount="indefinite" path={`M600 260 ${TRACES[t].replace(/^M/, 'L')}`} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${3.2 + i * 0.7}s`} begin={`${3 + i * 0.9}s`} repeatCount="indefinite" />
          </circle>
        ))}

      {JUNCTIONS.map(([x, y]) => (
        <motion.circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill={c.trace} style={{ originX: `${x}px`, originY: `${y}px` }} {...pop(1.4)} />
      ))}
      {NODES.map((n, i) => (
        <motion.g key={`${n.x}-${n.y}`} style={{ originX: `${n.x}px`, originY: `${n.y}px` }} {...pop(2.3 + 0.08 * i)}>
          <circle cx={n.x} cy={n.y} r={n.main ? 16 : 11} fill="#F2A900" stroke={c.ring} strokeWidth="3" />
          {labels?.[i] && (
            <text
              x={n.anchor === 'end' ? n.x - 22 : n.anchor === 'start' ? n.x + 22 : n.x}
              y={n.anchor === 'middle' ? n.y - 26 : n.y + 7}
              textAnchor={n.anchor}
              fill={c.label}
              className="font-heading max-sm:hidden"
              fontSize={n.main ? 24 : 21}
              fontWeight="700"
            >
              {labels[i]}
            </text>
          )}
        </motion.g>
      ))}
    </svg>
  );
}
