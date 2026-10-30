import { Plus } from 'lucide-react';
import { faq } from '../config/faq';
import { links, waLink } from '../config/site';
import { WhatsAppIcon } from './icons';

/**
 * FAQ (the "objections" step of the Home story). Native <details>/<summary>: no JavaScript, keyboard and
 * screen-reader friendly by default, and every answer is in the pre-rendered HTML for search engines.
 * The list sits in an L1 frame with hairline dividers; each question row is at least 44px tall.
 * `lang` is 'en' or 'ta'.
 */
export default function Faq({ lang = 'en', headingId = 'faq-title' }) {
  const f = faq[lang];
  const ta = lang === 'ta';
  const wa = ta ? waLink('வணக்கம், M2P Nexus பற்றி ஒரு கேள்வி:') : links.whatsapp;

  return (
    <section aria-labelledby={headingId} className="border-b border-rule bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-4">
          <h2
            id={headingId}
            className={`text-ink text-3xl sm:text-4xl leading-[1.12] ${ta ? 'font-sans font-bold' : 'font-display font-bold tracking-[-0.015em]'}`}
          >
            {f.title}
          </h2>
          <div className="space-y-3 rounded-2xl bg-white p-5 ring-1 ring-rule">
            <p className="font-semibold text-ink">{f.more}</p>
            <p className="text-body">{f.moreText}</p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-leaf px-4 font-semibold text-white transition-colors hover:bg-[#185730]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {f.ask}
              <span className="sr-only"> {ta ? '(புதிய தாவலில் திறக்கும்)' : '(opens in a new tab)'}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-rule rounded-2xl bg-white ring-1 ring-rule">
            {f.items.map((it, i) => (
              <details key={it.q} className="group" open={i === 0}>
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span className={`text-lg leading-snug text-ink ${ta ? 'font-sans font-bold' : 'font-heading font-semibold'}`}>{it.q}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F6FA] text-ink transition-transform duration-200 group-open:rotate-45"
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="max-w-[65ch] px-5 pb-5 leading-relaxed text-body sm:px-6">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
