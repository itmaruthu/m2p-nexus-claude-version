import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Portfolio: one project drawn as a live system blueprint. The modules we built sit around the project's
 * core; their connections draw in when the project is picked, and small pulses run along them to show
 * data moving. The panel tilts towards the pointer on hover-capable devices. Decorative: the parent lists
 * the same modules as text.
 */

const W = 400;
const H = 300;
const CX = 200;
const CY = 150;

function layout(n) {
  return Array.from({ length: n }, (_, i) => {
    const a = (-90 + (360 / n) * i) * (Math.PI / 180);
    return { x: CX + 138 * Math.cos(a), y: CY + 106 * Math.sin(a) };
  });
}

export default function ProjectBlueprint({ project, draw, live }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });

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

  const pts = layout(project.modules.length);

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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(242,169,0,0.14),transparent_70%)]" />
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" fill="none">
          <ellipse cx={CX} cy={CY} rx="138" ry="106" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 6" />
          {pts.map((p, i) => {
            const d = `M${CX} ${CY} L${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
            return (
              <g key={project.modules[i]}>
                <motion.path
                  d={d}
                  stroke="rgba(214,224,240,0.55)"
                  strokeWidth="1.5"
                  initial={draw ? { pathLength: 0 } : false}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
                />
                {live && !reduce && (
                  <circle r="2.6" fill="#F2A900">
                    <animateMotion dur="2.2s" begin={`${0.9 + i * 0.35}s`} repeatCount="indefinite" path={d} />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {pts.map((p, i) => (
          <motion.span
            key={project.modules[i]}
            className="absolute max-w-[7.5rem] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#1B2A63] px-2 py-1 text-center text-xs font-semibold leading-tight text-white ring-1 ring-white/15 sm:text-xs"
            style={{ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` }}
            initial={draw ? { opacity: 0, scale: 0.7 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.12, type: 'spring', stiffness: 300, damping: 20 }}
          >
            {project.modules[i]}
          </motion.span>
        ))}

        <motion.span
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
          initial={draw ? { opacity: 0, scale: 0.6 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          <span className="h-4 w-4 rounded-full bg-marigold shadow-[0_0_24px_6px_rgba(242,169,0,0.55)]" />
          <span className="rounded-full bg-white px-3 py-1 font-heading text-xs font-bold text-ink sm:text-sm">{project.core}</span>
        </motion.span>
      </motion.div>
    </div>
  );
}
