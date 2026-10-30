import { useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import { DigitalInvoice, PaperBill } from './BillIllustration';

/**
 * Home hero signature: "drag to digitise". The handwritten bill and its digital invoice are stacked in one
 * frame; a gold handle reveals the digital version from the left. The control is a real range input laid
 * over the frame, so mouse, touch and arrow keys all work and screen readers announce "x% digital". On
 * first view it sweeps once to show it can be dragged (skipped for reduced motion, and stopped the moment
 * the visitor touches it). Without JavaScript it shows half and half. The two illustrations are decorative;
 * the visible "Paper" / "Digital" labels and the caption carry the meaning without motion.
 */
export default function DigitiseSlider() {
  const reduce = useReducedMotion();
  const [p, setP] = useState(50);
  const touched = useRef(false);
  const demo = useRef(null);

  useEffect(() => {
    if (reduce) return;
    // One hint sweep: half → mostly digital → mostly paper → settle on digital-leaning.
    const t = setTimeout(() => {
      if (touched.current) return;
      demo.current = animate(50, [50, 82, 22, 64], {
        duration: 3,
        times: [0, 0.35, 0.75, 1],
        ease: 'easeInOut',
        onUpdate: (v) => !touched.current && setP(v),
      });
    }, 900);
    return () => {
      clearTimeout(t);
      demo.current?.stop();
    };
  }, [reduce]);

  const take = (v) => {
    touched.current = true;
    demo.current?.stop();
    setP(v);
  };

  return (
    <figure className="mx-auto w-full max-w-[31.5rem] overflow-x-clip px-3">
      <div className="relative">
        <div className="grid" aria-hidden="true">
          {/* Before: the paper bill */}
          <div className="[grid-area:1/1] pt-6">
            <PaperBill />
          </div>
          {/* After: the digital invoice, revealed from the left */}
          <div className="[grid-area:1/1] pt-6" style={{ clipPath: `inset(0 ${100 - p}% 0 0)` }}>
            <DigitalInvoice slipIn={false} />
          </div>
        </div>

        {/* Side labels (meaning without motion) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 flex justify-between text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-leaf">
            <span className="h-2 w-2 rounded-full bg-leaf" />
            Digital
          </span>
          <span className="flex items-center gap-1.5 text-[#2B3A8C]">
            Paper
            <span className="h-2 w-2 rounded-full bg-[#2B3A8C]" />
          </span>
        </div>

        {/* The real control */}
        <input
          type="range"
          min="3"
          max="97"
          step="1"
          value={Math.round(p)}
          onChange={(e) => take(Number(e.target.value))}
          onPointerDown={() => {
            touched.current = true;
            demo.current?.stop();
          }}
          aria-label="Drag to turn the paper bill into a digital invoice"
          aria-valuetext={`${Math.round(p)}% digital`}
          className="peer absolute inset-x-0 bottom-0 top-6 h-[calc(100%-1.5rem)] w-full cursor-ew-resize opacity-0"
        />
        {/* Handle */}
        {/* Handle: a full-width layer slid with translateX (transform only), its line pinned to the left edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 top-6 peer-focus-visible:*:*:outline peer-focus-visible:*:*:outline-3 peer-focus-visible:*:*:outline-offset-2 peer-focus-visible:*:*:outline-ink"
          style={{ transform: `translateX(${p}%)` }}
        >
          <div className="absolute inset-y-0 left-0 w-0.5 -translate-x-1/2 bg-marigold">
            <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-marigold text-ink shadow-soft ring-4 ring-white">
              <MoveHorizontal className="h-5 w-5" />
            </span>
          </div>
        </div>

      </div>
      <figcaption className="mt-4 flex items-center justify-center gap-2 text-sm text-body">
        <MoveHorizontal className="h-4 w-4 text-marigold" aria-hidden="true" />
        Drag to see your bill go digital
      </figcaption>
    </figure>
  );
}
