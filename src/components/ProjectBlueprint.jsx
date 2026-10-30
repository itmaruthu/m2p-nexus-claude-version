import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * A system drawn as a live blueprint: the modules sit around a core, joined by lines.
 *
 * `mode` 'now' shows the connected system; 'then' shows how the business ran before: the same modules
 * drift apart, disconnected and dim, around the old way of working (`coreThen`). Switching modes moves the
 * nodes with transforms only. Each time the system connects, one pulse runs along every line (once, not a
 * loop). Used by the portfolio case file and by the "build from proven parts" builder, where nodes are
 * added and removed as the visitor picks them. Decorative: callers always give the same facts as text.
 */

const W = 400;
const H = 300;
const CX = 200;
const CY = 150;

function ring(n) {
  return Array.from({ length: n }, (_, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return { x: CX + 138 * Math.cos(a), y: CY + 106 * Math.sin(a) };
  });
}

// Fixed "scattered" spots for the before view (deterministic, so server and client agree).
const SCATTER = [
  [86, 58, -7], [300, 70, 5], [326, 196, -4], [96, 232, 6], [214, 252, -3], [58, 150, 4], [250, 34, -5], [340, 132, 7],
];

const pct = (v, total) => `${((v / total) * 100).toFixed(2)}%`;

export default function ProjectBlueprint({ core, coreThen, modules, mode = 'now', draw = false, live = true, emptyText }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const now = mode === 'now';
  const quick = reduce ? { duration: 0 } : null;

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const pts = ring(modules.length);

  return (
    <div className="[perspective:1200px]">
      <motion.div
        ref={ref}
        aria-hidden="true"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry }}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0E173A] ring-1 ring-white/10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] shadow-[0_40px_90px_-40px_rgba(242,169,0,0.35)]"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(242,169,0,0.14),transparent_70%)]"
          animate={{ opacity: now ? 1 : 0 }}
          transition={quick || { duration: 0.5 }}
        />
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" fill="none">
          <motion.ellipse
            cx={CX}
            cy={CY}
            rx="138"
            ry="106"
            stroke="rgba(255,255,255,0.08)"
            strokeDasharray="3 6"
            animate={{ opacity: now && modules.length ? 1 : 0 }}
          />
          {pts.map((p, i) => {
            const d = `M${CX} ${CY} L${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
            return (
              <g key={modules[i]}>
                <motion.path
                  stroke="rgba(214,224,240,0.55)"
                  strokeWidth="1.5"
                  initial={draw ? { pathLength: 0, d } : false}
                  animate={{ pathLength: now ? 1 : 0, opacity: now ? 1 : 0, d }}
                  transition={
                    quick || {
                      pathLength: { delay: now ? 0.15 + i * 0.1 : 0, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] },
                      opacity: { duration: 0.2, delay: now ? 0.15 + i * 0.1 : 0.3 },
                      d: { duration: 0.45, ease: 'easeOut' },
                    }
                  }
                />
                {/* One pulse per line each time the system connects (keyed by mode so it replays) */}
                {now && live && !reduce && (
                  <motion.circle
                    key={`pulse-${mode}-${modules.length}`}
                    cx={CX}
                    cy={CY}
                    r="2.6"
                    fill="#F2A900"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: p.x - CX, y: p.y - CY, opacity: [0, 1, 1, 0] }}
                    transition={{ delay: 0.9 + i * 0.12, duration: 1.2, ease: 'easeInOut' }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Nodes: each sits on a full-size layer moved with translate (% of the frame), so positions animate
            with transforms only, between the ring (now) and the scatter (then). */}
        {pts.map((p, i) => {
          const [sx, sy, rot] = SCATTER[i % SCATTER.length];
          return (
            <motion.div
              key={modules[i]}
              className="pointer-events-none absolute inset-0"
              initial={draw ? { x: '50%', y: '50%', opacity: 0 } : false}
              animate={{ x: pct(now ? p.x : sx, W), y: pct(now ? p.y : sy, H), opacity: 1 }}
              transition={quick || { type: 'spring', stiffness: 170, damping: 22, delay: now ? i * 0.04 : 0 }}
            >
              <motion.span
                className={`absolute left-0 top-0 block max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-center text-xs font-semibold leading-tight transition-colors duration-300 ${
                  now ? 'border border-white/15 bg-[#1B2A63] text-white' : 'border border-dashed border-white/30 bg-[#0E173A] text-slate-300'
                }`}
                animate={{ rotate: now ? 0 : rot }}
                transition={quick || { type: 'spring', stiffness: 170, damping: 20 }}
              >
                {modules[i]}
              </motion.span>
            </motion.div>
          );
        })}

        {/* Core: the system (now) or the old way of working (then) */}
        <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
          <motion.span
            className="h-4 w-4 rounded-full"
            animate={{
              backgroundColor: now ? '#F2A900' : '#64748B',
              boxShadow: now ? '0 0 24px 6px rgba(242,169,0,0.55)' : '0 0 0 0 rgba(0,0,0,0)',
            }}
            transition={quick || { duration: 0.4 }}
          />
          <span
            className={`rounded-full px-3 py-1 font-heading text-xs font-bold transition-colors duration-300 sm:text-sm ${
              now ? 'bg-white text-ink' : 'bg-slate-700 text-slate-200'
            }`}
          >
            {now ? core : coreThen || core}
          </span>
        </span>

        {!modules.length && emptyText && (
          <p className="absolute inset-x-6 bottom-6 text-center text-sm leading-relaxed text-slate-300">{emptyText}</p>
        )}
      </motion.div>
    </div>
  );
}
