import { starters, starterText } from '../config/starters';
import { formText } from '../config/consultation';
import BookButton from './consultation/BookButton';

/**
 * "Start small": fixed-scope starter packs shown as tear-off tickets (a nod to the paper-bill motif).
 * Each ticket's button opens the consultation dialog with that starter already selected, so the lead
 * arrives in the sheet tagged with what they asked for. `lang` is 'en' or 'ta'.
 */
export default function StarterOffers({ lang = 'en', title, intro, headingId = 'start-small-title' }) {
  const t = starterText[lang];
  const ta = lang === 'ta';

  return (
    <section id="start-small" aria-labelledby={headingId} className="scroll-mt-24 border-b border-rule bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <h2
            id={headingId}
            className={`lg:col-span-7 text-ink text-3xl sm:text-4xl leading-[1.12] ${ta ? 'font-sans font-bold' : 'font-display font-extrabold tracking-[-0.015em]'}`}
          >
            {title}
          </h2>
          <p className="lg:col-span-5 text-lg text-body leading-relaxed">{intro}</p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {starters.map((s) => {
            const c = s[lang];
            return (
              <li key={s.id} className="group flex">
                <article className="relative flex w-full flex-col rounded-3xl bg-white ring-1 ring-rule shadow-[0_24px_50px_-34px_rgba(23,37,84,0.45)] transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex-1 space-y-5 p-6">
                    <div>
                      <p className="text-sm text-body">
                        <span className="font-heading font-semibold text-leaf">{t.for}: </span>
                        {c.for}
                      </p>
                      <h3 className={`mt-2 text-ink text-xl leading-snug ${ta ? 'font-sans font-bold' : 'font-display font-bold'}`}>{c.name}</h3>
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-ink">{t.get}</p>
                      <ul className="mt-3 space-y-2.5">
                        {c.get.map((g) => (
                          <li key={g} className="flex gap-2.5 text-[0.95rem] leading-snug text-body">
                            <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-leaf" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 10.5l4 4 8-9" />
                            </svg>
                            {g}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Perforation: dashed tear line with notches cut out of both edges */}
                  <div aria-hidden="true" className="relative mx-6 border-t-2 border-dashed border-rule">
                    <span className="absolute -left-[2.25rem] -top-3 h-6 w-6 rounded-full bg-[#F4F6FA] ring-1 ring-inset ring-rule [clip-path:inset(0_0_0_50%)]" />
                    <span className="absolute -right-[2.25rem] -top-3 h-6 w-6 rounded-full bg-[#F4F6FA] ring-1 ring-inset ring-rule [clip-path:inset(0_50%_0_0)]" />
                  </div>

                  <div className="space-y-4 p-6">
                    <p className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-body">{t.time}</span>
                      <span className="rounded-full bg-marigold/20 px-3 py-1 text-sm font-semibold text-[#6B4700]">{c.time}</span>
                    </p>
                    <BookButton
                      preset={{ needs: [s.need], message: formText[lang].starter.replace('{starter}', c.name) }}
                      className="flex w-full items-center justify-center rounded-xl bg-ink px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-[#0E173A]"
                    >
                      {t.book}
                      <span className="sr-only">: {c.name}</span>
                    </BookButton>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="flex items-start gap-3 text-body">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-marigold" fill="currentColor">
            <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9z" />
          </svg>
          {t.promise}
        </p>
      </div>
    </section>
  );
}
