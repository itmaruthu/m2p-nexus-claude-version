import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/**
 * Home scroll scene: twelve handwritten paper slips (the way many businesses run today) fly into a grid as
 * you scroll and flip over into the digital screens that replace them. The section is tall and its stage is
 * sticky, so scroll position drives the animation. With reduced motion it renders the finished grid.
 */

// [paper word (Tamil), digital module, figure shown on the screen]. Illustrative figures.
const SLIPS = [
  ['பில்', 'Billing', '₹1,24,500 today'],
  ['ஆர்டர்', 'Orders', '42 today'],
  ['ஸ்டாக்', 'Stock', '3 items low'],
  ['வருகை', 'Attendance', '18 of 20 in'],
  ['கடன்', 'Payments due', '₹38,200'],
  ['வாடிக்கையாளர்', 'Customers', '1,240'],
  ['டெலிவரி', 'Dispatch', '12 out'],
  ['கணக்கு', 'Reports', 'Ready'],
  ['விசாரணை', 'Enquiries', '9 new'],
  ['விண்ணப்பம்', 'Hiring', '5 shortlisted'],
  ['விலைப்பட்டியல்', 'Website', 'Prices updated'],
  ['வாட்ஸ்அப்', 'WhatsApp', '26 replied'],
];

const TONES = ['bg-ink', 'bg-leaf', 'bg-[#1E3A8A]', 'bg-leaf', 'bg-ink', 'bg-[#1E3A8A]'];
const COLS = 4;

// Deterministic "random" scatter so server and browser render the same starting positions.
function scatter(i) {
  const r = (n) => {
    const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  return { x: (r(1) - 0.5) * 140, y: (r(2) - 0.5) * 120, rotate: (r(3) - 0.5) * 70, z: r(4) * 120 };
}

function Slip({ index, progress, reduce }) {
  const [word, module, figure] = SLIPS[index];
  const col = index % COLS;
  const row = Math.floor(index / COLS);
  const s = scatter(index);
  // Each slip lands a little after the previous one (stagger by grid position).
  const start = 0.05 + (col + row) * 0.03;
  const land = start + 0.38;
  const x = useTransform(progress, [start, land], [`${s.x}%`, '0%']);
  const y = useTransform(progress, [start, land], [`${s.y}%`, '0%']);
  const rotate = useTransform(progress, [start, land], [s.rotate, 0]);
  const z = useTransform(progress, [start, land], [s.z, 0]);
  const rotateY = useTransform(progress, [land, land + 0.12], [180, 0]);

  const style = reduce ? undefined : { x, y, rotate, z, rotateY };
  return (
    <motion.div className="relative aspect-[3/4] [transform-style:preserve-3d]" style={style}>
      {/* Digital face (front) */}
      <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl bg-white shadow-lift overflow-hidden flex flex-col">
        <div className={`${TONES[index % TONES.length]} h-2 sm:h-3`} />
        <div className="flex-1 p-2 sm:p-4 flex flex-col justify-between">
          <p className="font-heading font-bold text-ink text-xs sm:text-base leading-tight">{module}</p>
          <p className="font-display font-bold text-leaf text-xs sm:text-xl leading-tight tabular-nums">{figure}</p>
        </div>
      </div>
      {/* Paper face (back): ruled slip with the Tamil word in handwriting */}
      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-sm bg-white shadow-soft bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_15px,var(--color-rule)_15px,var(--color-rule)_16px)] sm:bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_23px,var(--color-rule)_23px,var(--color-rule)_24px)]">
        <div className="absolute inset-y-0 left-2 sm:left-4 w-px bg-[#E7A9A9]" />
        <p lang="ta" className="pl-3 sm:pl-6 pt-1 sm:pt-2 font-[family-name:var(--font-hand)] text-[#2B3A8C] text-xs sm:text-lg leading-4 sm:leading-6 break-words">
          {word}
        </p>
      </div>
    </motion.div>
  );
}

export default function ScatterToSorted() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  // Function transforms, not [input]->[output] ranges: framer-motion hands range-based opacity to the browser's
  // native scroll timeline, which mis-maps this sticky section (the text faded back and forth).
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const beforeOpacity = useTransform(scrollYProgress, (v) => 1 - clamp01((v - 0.25) / 0.15));
  const afterOpacity = useTransform(scrollYProgress, (v) => clamp01((v - 0.45) / 0.15));

  return (
    <section
      ref={ref}
      aria-labelledby="sorted-heading"
      className={`relative bg-ink text-white ${reduce ? '' : 'h-[180vh]'}`}
    >
      <div className={`${reduce ? '' : 'sticky top-0 h-screen'} overflow-hidden`}>
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 py-16 md:py-0 grid gap-10 lg:grid-cols-12 items-center">
          {/* Two states of the story; scroll crossfades between them. */}
          <div className="lg:col-span-5 relative min-h-[11rem] sm:min-h-[13rem]">
            <motion.div style={reduce ? { opacity: 0 } : { opacity: beforeOpacity }} className="absolute inset-0 space-y-4">
              <p className="font-display font-bold text-3xl sm:text-5xl leading-[1.05] tracking-[-0.02em]">
                Your business today: paper everywhere.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                Bills in one book, orders on WhatsApp, attendance on a sheet, customer dues in someone&rsquo;s head.
              </p>
            </motion.div>
            <motion.div style={reduce ? undefined : { opacity: afterOpacity }} className="absolute inset-0 space-y-4">
              <h2 id="sorted-heading" className="font-display font-bold text-3xl sm:text-5xl leading-[1.05] tracking-[-0.02em]">
                With M2P Nexus: one connected system.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                Every slip becomes a screen your team can see, search and share, in Tamil and English.
              </p>
            </motion.div>
          </div>

          <div aria-hidden="true" className="lg:col-span-7 [perspective:1400px]">
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {SLIPS.map((_, i) => (
                <Slip key={i} index={i} progress={scrollYProgress} reduce={reduce} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
