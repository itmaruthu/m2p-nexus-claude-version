import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';
import ConsultationForm from '../components/consultation/ConsultationForm';
import { CallIcon, WhatsAppIconLink } from '../components/CallIcon';
import { formText } from '../config/consultation';
import { starters } from '../config/starters';
import { needsFor, readParts } from '../config/projects';
import { findFounder, founderTopics } from '../config/founders';
import { links, waLink } from '../config/site';

// Book a consultation (/book/ and /ta/book/). Page pattern: Form page — one task, a labelled form, and the
// context a first-time client needs beside it. `?starter=<id>` (from the starter packs) pre-selects that
// starter, and `?parts=a,b` (from the portfolio's blueprint builder) fills in the parts the visitor picked.
// `?with=<founder>&topic=<id>` (from the founder page) says who the visitor asked to speak with.
// All are read after hydration so the pre-rendered HTML and the first client render match.

const copy = {
  en: {
    seoTitle: 'Book a Free Consultation',
    seoDescription:
      'Book a free consultation with M2P Nexus, Madurai. Tell us about your business; we reply within one working day, in Tamil or English.',
    crumb: 'Book a consultation',
    title: 'Book your free consultation',
    intro: 'Tell us about your business. We reply within one working day, in Tamil or English, with questions and a sensible first step.',
    picked: 'You picked',
    change: 'See all starters',
    blueprint: 'Your blueprint',
    changeParts: 'Change parts',
    partsCount: '{n} parts',
    speakWith: 'You asked to speak with',
    withMsg: 'I would like to speak with {name}',
    aboutMsg: ' about {topic}',
    partsMsg: 'I built a blueprint on your website with: {parts}.',
    nextTitle: 'What happens next',
    steps: [
      { title: 'We reply within one working day', text: 'On WhatsApp, by phone or by email, whichever you choose below.' },
      { title: 'A free first call', text: 'We listen to how your business runs today and ask the right questions.' },
      { title: 'A written scope and quotation', text: 'Before any work begins, so you know exactly what you get.' },
    ],
    alsoTitle: 'Prefer to talk now?',
    alsoText: 'Call or message us directly.',
    done: 'Explore our work',
    doneTo: '/portfolio',
  },
  ta: {
    seoTitle: 'இலவச ஆலோசனைக்கு முன்பதிவு',
    seoDescription:
      'M2P Nexus, மதுரை: இலவச ஆலோசனைக்கு முன்பதிவு செய்யுங்கள். ஒரு வேலை நாளுக்குள் தமிழிலோ ஆங்கிலத்திலோ பதிலளிப்போம்.',
    crumb: 'ஆலோசனைக்கு முன்பதிவு',
    title: 'உங்கள் இலவச ஆலோசனையை முன்பதிவு செய்யுங்கள்',
    intro: 'உங்கள் வணிகம் பற்றிச் சொல்லுங்கள். ஒரு வேலை நாளுக்குள், தமிழிலோ ஆங்கிலத்திலோ, கேள்விகளுடனும் பொருத்தமான முதல் படியுடனும் பதிலளிப்போம்.',
    picked: 'நீங்கள் தேர்ந்தெடுத்தது',
    change: 'எல்லா திட்டங்களையும் பார்க்க',
    blueprint: 'உங்கள் வரைபடம்',
    changeParts: 'பகுதிகளை மாற்ற',
    partsCount: '{n} பகுதிகள்',
    speakWith: 'நீங்கள் பேச விரும்புவது',
    withMsg: '{name} அவர்களுடன் பேச விரும்புகிறேன்',
    aboutMsg: ' ({topic})',
    partsMsg: 'உங்கள் இணையதளத்தில் இந்தப் பகுதிகளுடன் ஒரு வரைபடம் உருவாக்கினேன்: {parts}.',
    nextTitle: 'அடுத்து என்ன நடக்கும்',
    steps: [
      { title: 'ஒரு வேலை நாளுக்குள் பதில்', text: 'கீழே நீங்கள் தேர்ந்தெடுப்பது போல WhatsApp, தொலைபேசி அல்லது மின்னஞ்சலில்.' },
      { title: 'இலவச முதல் அழைப்பு', text: 'உங்கள் வணிகம் இன்று எப்படி நடக்கிறது என்று கேட்டு, சரியான கேள்விகளைக் கேட்போம்.' },
      { title: 'எழுத்துப்பூர்வ வேலை வரம்பும் விலைப்பட்டியலும்', text: 'எந்த வேலையும் தொடங்கும் முன்பே, உங்களுக்கு என்ன கிடைக்கும் என்று தெளிவாகத் தெரியும்.' },
    ],
    alsoTitle: 'இப்போதே பேச விருப்பமா?',
    alsoText: 'நேரடியாக அழைக்கவும் அல்லது செய்தி அனுப்பவும்.',
    done: 'முகப்புக்குத் திரும்ப',
    doneTo: '/ta',
  },
};

function readStarter() {
  const id = new URLSearchParams(window.location.search).get('starter');
  return starters.find((s) => s.id === id) || null;
}

export default function Book({ lang = 'en' }) {
  const c = copy[lang];
  const ta = lang === 'ta';
  const [starter, setStarter] = useState(null);
  const [parts, setParts] = useState([]);
  const [ask, setAsk] = useState(null); // { founder, topic } from the founder page

  useEffect(() => {
    const t = setTimeout(() => {
      setStarter(readStarter());
      const q = new URLSearchParams(window.location.search);
      setParts(readParts(q.get('parts')));
      const founder = findFounder(q.get('with'));
      if (founder) setAsk({ founder, topic: founderTopics.find((t) => t.id === q.get('topic')) || null });
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const preset = starter
    ? { needs: [starter.need], message: formText[lang].starter.replace('{starter}', starter[lang].name) }
    : parts.length
      ? { needs: needsFor(parts), message: c.partsMsg.replace('{parts}', parts.map((p) => p.name).join(', ')) }
      : ask
        ? {
            needs: ask.topic ? [ask.topic.need] : [],
            message: `${c.withMsg.replace('{name}', ask.founder.first)}${ask.topic ? c.aboutMsg.replace('{topic}', ask.topic.label.toLowerCase()) : ''}.`,
          }
        : null;
  const partIds = parts.map((p) => p.id).join(',');

  return (
    <div lang={ta ? 'ta' : undefined}>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        lang={lang}
        alternates={[
          { hreflang: 'en', path: '/book/' },
          { hreflang: 'ta', path: '/ta/book/' },
          { hreflang: 'x-default', path: '/book/' },
        ]}
      />

      <section className="relative overflow-hidden border-b border-rule bg-[#F4F6FA]">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-24 space-y-10">
          <Breadcrumb page={c.crumb} />

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Context: what this is, what happens next, other ways to reach us */}
            <div className="space-y-10 lg:col-span-5">
              <div className="space-y-4">
                <h1
                  className={`text-ink text-[2.1rem] sm:text-5xl ${ta ? 'font-sans font-bold leading-snug' : 'font-display font-bold leading-[1.08] tracking-[-0.02em]'}`}
                >
                  {c.title}
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-body">{c.intro}</p>
              </div>

              <div>
                <h2 className={`text-ink text-lg ${ta ? 'font-sans font-bold' : 'font-heading font-semibold'}`}>{c.nextTitle}</h2>
                <ol className="relative mt-5 space-y-6">
                  <span aria-hidden="true" className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-[linear-gradient(to_bottom,#1F6B3A,#F2A900)]" />
                  {c.steps.map((s, i) => (
                    <li key={s.title} className="relative flex gap-4">
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-marigold ring-4 ring-[#F4F6FA]">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{s.title}</p>
                        <p className="mt-0.5 leading-relaxed text-body">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 ring-1 ring-rule">
                <div>
                  <p className="font-semibold text-ink">{c.alsoTitle}</p>
                  <p className="text-sm text-body">{c.alsoText}</p>
                </div>
                <div className="flex gap-2">
                  <CallIcon />
                  <WhatsAppIconLink href={ta ? waLink('வணக்கம், M2P Nexus-இடம் ஆலோசனை பெற விரும்புகிறேன்.') : links.whatsapp} />
                </div>
              </div>
            </div>

            {/* The form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white p-5 shadow-lift ring-1 ring-rule sm:p-8">
                {starter && (
                  <p className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-dashed border-rule pb-5 text-body">
                    <span>
                      {c.picked}: <span className="font-semibold text-ink">{starter[lang].name}</span>
                    </span>
                    <a href={`${import.meta.env.BASE_URL}${ta ? 'ta/' : ''}#start-small`} className="py-2.5 text-sm font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">
                      {c.change}
                    </a>
                  </p>
                )}
                {!starter && parts.length > 0 && (
                  <div className="mb-6 space-y-3 border-b border-dashed border-rule pb-5">
                    <p className="flex flex-wrap items-baseline justify-between gap-2 text-body">
                      <span>
                        {c.blueprint}: <span className="font-semibold text-ink">{c.partsCount.replace('{n}', parts.length)}</span>
                      </span>
                      <Link to={`/portfolio/?parts=${partIds}#build`} className="py-2.5 text-sm font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">
                        {c.changeParts}
                      </Link>
                    </p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-ink">
                      {parts.map((p) => (
                        <li key={p.id} className="flex items-center gap-1.5">
                          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-marigold" />
                          {p.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {!starter && !parts.length && ask && (
                  <p className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-dashed border-rule pb-5 text-body">
                    <span>
                      {c.speakWith}: <span className="font-semibold text-ink">{ask.founder.name}</span>
                    </span>
                    <span className="text-sm">{ask.founder.role}</span>
                  </p>
                )}
                <ConsultationForm key={starter?.id || partIds || ask?.founder.id || 'none'} lang={lang} preset={preset} done={{ label: c.done, to: c.doneTo }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
