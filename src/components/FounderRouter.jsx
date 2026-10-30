import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { founderLeads, founderTopics } from '../config/founders';
import { waLink } from '../config/site';
import { WhatsAppIcon } from './icons';
import founderPhoto from '../assets/founder_photo.webp';
import coFounderPhoto from '../assets/co_founder_photo.webp';

/**
 * "Who should you talk to?": no account managers, so the visitor picks what they need and the founder who
 * leads it lights up, with the matching part of their work highlighted. Each founder has direct actions:
 * a WhatsApp message addressed to them (pre-filled with the topic) and a booking link that tells the form
 * who they asked for. "Not sure" is fine too: either founder replies.
 */

const photos = { maruthu: founderPhoto, priyanka: coFounderPhoto };

export default function FounderRouter() {
  const [topicId, setTopicId] = useState(null);
  const topic = founderTopics.find((t) => t.id === topicId);
  const lead = topic && founderLeads.find((f) => f.id === topic.founder);

  // The founder who leads the chosen topic comes first on phones.
  const ordered = lead ? [lead, ...founderLeads.filter((f) => f !== lead)] : founderLeads;

  return (
    <section aria-labelledby="talk-title" className="border-b border-rule bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-10">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="space-y-3 lg:col-span-7">
            <p className="font-heading text-sm font-semibold text-leaf">No account managers in between</p>
            <h2 id="talk-title" className="font-display text-3xl font-bold leading-[1.12] tracking-[-0.015em] text-ink sm:text-4xl">
              Who should you talk to?
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-body lg:col-span-5">
            Pick what you need. The founder who leads it will reply to you personally, in Tamil or English.
          </p>
        </div>

        <div className="space-y-3">
          <h3 id="topic-title" className="font-heading font-semibold text-ink">
            I want to talk about
          </h3>
          <div role="group" aria-labelledby="topic-title" className="flex flex-wrap gap-2">
            {founderTopics.map((t) => {
              const on = t.id === topicId;
              return (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setTopicId(on ? null : t.id)}
                  className={`min-h-11 rounded-full px-4 font-heading text-sm font-semibold transition-colors duration-200 ${
                    on ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-rule hover:ring-ink'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          <p aria-live="polite" className="text-sm text-body">
            {lead
              ? `${lead.name} leads this. You can still message either of us.`
              : 'Not sure yet? Message either of us: we decide together who is best placed to help.'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ordered.map((f) => {
            const leads = lead === f;
            const hello = topic ? `Hello ${f.first}, I would like to talk about ${topic.label.toLowerCase()}.` : `Hello ${f.first}, I found M2P Nexus on your website and would like to talk.`;
            const book = `/book/?with=${f.id}${topic ? `&topic=${topic.id}` : ''}`;
            return (
              <article
                key={f.id}
                aria-labelledby={`talk-${f.id}`}
                className={`relative flex flex-col rounded-3xl bg-white p-6 transition-shadow duration-300 sm:p-8 ${
                  leads ? 'shadow-lift ring-2 ring-marigold' : 'ring-1 ring-rule'
                } ${f.id === 'maruthu' ? 'md:order-1' : 'md:order-2'}`}
              >
                {leads && (
                  <p className="absolute -top-3.5 left-6 rounded-full bg-marigold px-3 py-1 text-xs font-bold text-ink sm:left-8">Leads this</p>
                )}
                <div className="flex items-center gap-4">
                  <img
                    src={photos[f.id]}
                    alt=""
                    width="64"
                    height="64"
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-2xl object-cover object-top ring-1 ring-rule"
                  />
                  <div>
                    <h3 id={`talk-${f.id}`} className="font-display text-xl font-bold text-ink">
                      {f.name}
                    </h3>
                    <p className="text-sm text-body">
                      {f.role} · <span className="font-semibold text-leaf">leads {f.area.toLowerCase()}</span>
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-4">
                  {f.points.map((p, i) => {
                    const hit = leads && topic.point === i;
                    return (
                      <li
                        key={p.title}
                        className={`rounded-2xl border-l-4 py-1 pl-4 transition-colors duration-300 ${hit ? 'border-marigold bg-[#FFF8E6] py-3 pr-3' : 'border-rule'}`}
                      >
                        <p className="font-heading font-semibold text-ink">{p.title}</p>
                        <p className="mt-1 leading-relaxed text-body">{p.text}</p>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waLink(hello)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-leaf px-4 font-semibold text-white transition-colors hover:bg-[#185730]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Message {f.first}
                    <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
                  </a>
                  <Link
                    to={book}
                    className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl px-4 font-semibold text-ink ring-1 ring-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    Book a call with {f.first}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
