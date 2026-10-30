import { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';
import ConsultationForm from '../components/consultation/ConsultationForm';
import { CallIcon, WhatsAppIconLink } from '../components/CallIcon';
import { formText } from '../config/consultation';
import { starters } from '../config/starters';
import { links, waLink } from '../config/site';

// Book a consultation (/book/ and /ta/book/). Page pattern: Form page — one task, a labelled form, and the
// context a first-time client needs beside it. `?starter=<id>` (from the starter packs) pre-selects that
// starter; it is read after hydration so the pre-rendered HTML and the first client render match.

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

  useEffect(() => {
    const t = setTimeout(() => setStarter(readStarter()), 0);
    return () => clearTimeout(t);
  }, []);

  const preset = starter
    ? { needs: [starter.need], message: formText[lang].starter.replace('{starter}', starter[lang].name) }
    : null;

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
                <ConsultationForm key={starter?.id || 'none'} lang={lang} preset={preset} done={{ label: c.done, to: c.doneTo }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
