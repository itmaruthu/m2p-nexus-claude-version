import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CustomersScene, RunScene, SmarterScene, TeamScene } from './ServiceScenes';

const TABS = [
  {
    id: 'run',
    title: 'Run your business',
    line: 'Billing, stock, CRM, ERP, websites and apps.',
    scene: RunScene,
    describe: 'Example: a live view of today’s sales, invoices sent on WhatsApp and stock levels, with a suggestion to reorder groundnut oil before it runs out.',
  },
  {
    id: 'smarter',
    title: 'Work smarter',
    line: 'AI, automation and honest technology advice.',
    scene: SmarterScene,
    describe: 'Example: orders that arrive as WhatsApp messages, in Tamil and English, are sorted into an order book automatically.',
  },
  {
    id: 'customers',
    title: 'Win more customers',
    line: 'Google, social media, SEO, branding and lead generation.',
    scene: CustomersScene,
    describe:
      'Example: weekly enquiries rise from 12 to 47, mostly from Google search and Instagram, while a new enquiry and a 5-star review arrive.',
  },
  {
    id: 'team',
    title: 'Build your team',
    line: 'Recruitment, hiring strategy and HR set up properly.',
    scene: TeamScene,
    describe:
      'Example: 24 applicants for a billing executive role are screened to 8, interviewed to 3, and one is hired with an onboarding plan.',
  },
];

const AUTOPLAY_MS = 7000;

/** Services hero: pick an area of the business and watch what changes. Auto-advances until the visitor interacts. */
export default function ServiceSwitchboard() {
  const [active, setActive] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const tabRefs = useRef([]);

  useEffect(() => {
    if (reduce || stopped || hovered) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % TABS.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [active, reduce, stopped, hovered]);

  const choose = (i, focus = false) => {
    setStopped(true);
    setActive(i);
    if (focus) tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (e.key in keys) {
      e.preventDefault();
      choose((active + keys[e.key] + TABS.length) % TABS.length, true);
    } else if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      choose(e.key === 'Home' ? 0 : TABS.length - 1, true);
    }
  };

  const Scene = TABS[active].scene;

  return (
    <section className="relative bg-white border-b border-rule overflow-hidden">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 md:pt-10 md:pb-20 space-y-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-body">
            <li>
              <Link to="/" className="underline decoration-rule underline-offset-4 hover:decoration-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-ink">
              Services
            </li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 space-y-7">
            <h1 className="font-display font-extrabold text-ink text-[2.1rem] sm:text-5xl lg:text-[3.3rem] leading-[1.05] tracking-[-0.025em]">
              Pick what you want to change first
            </h1>
            <p className="text-lg text-body leading-relaxed">
              Software, websites, AI, hiring and marketing from one team. Choose an area to see what changes for your business.
            </p>

            <div
              role="tablist"
              aria-label="Service areas"
              onKeyDown={onKeyDown}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onFocus={() => setHovered(true)}
              onBlur={() => setHovered(false)}
              className="grid grid-cols-2 gap-2 lg:block lg:space-y-3"
            >
              {TABS.map((t, i) => {
                const selected = i === active;
                return (
                  <button
                    key={t.id}
                    ref={(el) => (tabRefs.current[i] = el)}
                    type="button"
                    role="tab"
                    id={`tab-${t.id}`}
                    aria-selected={selected}
                    aria-controls="service-scene"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => choose(i)}
                    className={`relative w-full overflow-hidden rounded-xl px-3 py-3 lg:px-5 lg:py-4 text-left transition-colors ${
                      selected ? 'bg-ink text-white' : 'bg-[#F4F6FA] text-ink hover:bg-[#E9EEF6]'
                    }`}
                  >
                    <span className="block font-display font-bold text-sm sm:text-base lg:text-xl leading-tight">{t.title}</span>
                    <span className={`hidden lg:block mt-1 ${selected ? 'text-slate-300' : 'text-body'}`}>{t.line}</span>
                    {/* Progress bar for the auto-advance timer */}
                    {selected && !reduce && !stopped && (
                      <motion.span
                        key={`bar-${active}-${hovered}`}
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-1 bg-marigold"
                        initial={{ width: '0%' }}
                        animate={{ width: hovered ? '0%' : '100%' }}
                        transition={{ duration: hovered ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="service-scene"
            role="tabpanel"
            aria-labelledby={`tab-${TABS[active].id}`}
            className="lg:col-span-7 relative rounded-3xl bg-[#F4F6FA] ring-1 ring-rule p-5 sm:p-8 min-h-[26rem] flex items-center"
          >
            <p className="sr-only">{TABS[active].describe}</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={TABS[active].id}
                aria-hidden="true"
                className="w-full"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Scene />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
