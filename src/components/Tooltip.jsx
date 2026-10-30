/**
 * Tooltip for icon-only controls: shown on hover and on keyboard focus (not the native `title`, which is slow
 * and never appears on focus). The control keeps its own aria-label; the bubble repeats that label for sighted
 * users and is hidden from assistive tech so nothing is read twice. It uses display:none while hidden, so an
 * off-screen bubble can never widen the page.
 */
export default function Tooltip({ label, children, tone = 'light', side = 'top' }) {
  const pos = side === 'top' ? 'bottom-full mb-2' : 'top-full mt-2';
  const look = tone === 'dark' ? 'bg-white text-ink' : 'bg-ink text-white';
  return (
    <span className="group/tip relative inline-flex">
      {children}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 z-50 hidden -translate-x-1/2 whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-semibold shadow-soft group-hover/tip:block group-focus-within/tip:block ${pos} ${look}`}
      >
        {label}
      </span>
    </span>
  );
}
