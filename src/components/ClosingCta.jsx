import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { links, site, waLink } from '../config/site';
import { WhatsAppIcon } from './icons';
import useSpotlight from './useSpotlight';

/**
 * Dark closing band that ends Home, Services and About. Instead of a picture, each page passes its own
 * questions: the prompt types one, the visitor can pick another, and "Ask on WhatsApp" opens WhatsApp with
 * that question already written. The first question renders in full on the server, so the band works
 * without JavaScript; typing starts after hydration and is skipped for reduced-motion visitors.
 */

const TYPE_MS = 34;
const HOLD_MS = 2600;

export default function ClosingCta({
  title = 'Tell us how your business runs today.',
  text = 'We’ll listen first, then suggest a practical first step, whether that’s billing software, a website, hiring help or AI.',
  questions = ['Where should my business start with technology?'],
}) {
  const spotlight = useSpotlight();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(questions[0].length);
  const [auto, setAuto] = useState(true);

  // Type the active question, hold it, then move to the next one until the visitor picks a question.
  useEffect(() => {
    if (reduce || !auto) return;
    const q = questions[active];
    if (typed < q.length) {
      const t = setTimeout(() => setTyped((n) => n + 1), TYPE_MS);
      return () => clearTimeout(t);
    }
    if (questions.length < 2) return;
    const t = setTimeout(() => {
      setActive((a) => (a + 1) % questions.length);
      setTyped(0);
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [typed, active, auto, reduce, questions]);

  const pick = (i) => {
    setAuto(false);
    setActive(i);
    setTyped(questions[i].length);
  };

  const question = questions[active];
  const shown = reduce || !auto ? question : question.slice(0, typed);
  const typing = !reduce && auto && typed < question.length;

  return (
    <section ref={spotlight} className="relative overflow-hidden bg-ink text-white grain spotlight">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 space-y-5">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.05] tracking-[-0.02em]">{title}</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">{text}</p>
          <p className="text-slate-300">
            Prefer to talk?{' '}
            <a href={links.call} className="font-semibold text-white underline decoration-marigold decoration-2 underline-offset-4 hover:decoration-white">
              Call {site.phones[0].display}
            </a>
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl p-px bg-[linear-gradient(135deg,rgba(242,169,0,0.7),rgba(255,255,255,0.12)_40%,rgba(63,168,102,0.6))]">
            <div className="rounded-[calc(1.5rem-1px)] bg-[#111C45]/95 p-5 sm:p-7 space-y-5">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="ask-orb h-9 w-9 shrink-0 rounded-full" />
                <span className="font-heading font-semibold">Ask M2P Nexus</span>
                <span className="ml-auto text-xs text-slate-300">Replies in Tamil or English</span>
              </div>

              <div className="min-h-[6.5rem] rounded-2xl bg-white/[0.06] ring-1 ring-white/10 px-4 py-4 sm:px-5">
                <p className="font-heading text-xl sm:text-2xl leading-snug text-white" aria-live="off">
                  {shown}
                  <span aria-hidden="true" className={`ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-marigold ${typing ? '' : 'ask-caret'}`} />
                </p>
              </div>

              {questions.length > 1 && (
                <div role="group" aria-label="Choose a question" className="flex flex-wrap gap-2">
                  {questions.map((q, i) => (
                    <button
                      key={q}
                      type="button"
                      aria-pressed={i === active}
                      onClick={() => pick(i)}
                      className={`rounded-full px-3.5 py-2 text-left text-sm transition-colors ${
                        i === active ? 'bg-white text-ink font-semibold' : 'bg-white/[0.07] text-slate-200 hover:bg-white/[0.14]'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <a
                href={waLink(question)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F7A45] px-6 py-3.5 font-semibold text-white hover:bg-[#18663A] transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Ask this on WhatsApp
                <span className="sr-only">: {question} (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <p className="mt-4 text-right">
            <span lang="ta" className="font-semibold text-marigold">வேரிலிருந்து வெற்றிவரை</span>
            <span className="text-slate-300"> From Roots to Success</span>
          </p>
        </div>
      </div>
    </section>
  );
}
