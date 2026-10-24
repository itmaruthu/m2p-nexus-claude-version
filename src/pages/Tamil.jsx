import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ClosingCta from '../components/ClosingCta';
import StarterOffers from '../components/StarterOffers';
import BookButton from '../components/consultation/BookButton';
import { CallIcon } from '../components/CallIcon';
import { WhatsAppIcon } from '../components/icons';
import { waLink } from '../config/site';
import { sectionPad, whatsappButton } from '../components/styles';

// Tamil landing page (/ta/): the Home page's story, in Tamil, for owners who read Tamil first.
// Content mirrors the English pages and the M2P Nexus brand guide; have a native speaker review edits.

const taH2 = 'font-sans font-bold text-ink text-3xl sm:text-4xl leading-snug';

const pains = [
  'WhatsApp-இல் வரும் ஆர்டர்கள் தவறிப் போகின்றன',
  'பில், இருப்பு, வருகைப் பதிவு எல்லாம் காகிதத்திலோ Excel-இலோ',
  'இணையதளம் இல்லை, அல்லது இருந்தும் விசாரணைகள் வருவதில்லை',
  'சரியான ஆட்களைப் பணியமர்த்த மாதக்கணக்கில் ஆகிறது',
  'எந்த மென்பொருள் தேவை என்றே தெரியவில்லை',
];

const groups = [
  {
    title: 'வணிகத்தை நடத்த',
    items: [
      { name: 'மென்பொருள் உருவாக்கம்', desc: 'நீங்கள் ஏற்கனவே வேலை செய்யும் முறைக்கு ஏற்ப பில்லிங், இருப்பு, CRM, ERP அமைப்புகள்.' },
      { name: 'இணையதளங்கள்', desc: 'எல்லா மொபைலிலும் இயங்கும், தொடர்ந்து புதுப்பிக்கப்படும் வணிக இணையதளங்கள்.' },
      { name: 'மொபைல் ஆப்கள்', desc: 'உங்கள் வாடிக்கையாளர்களுக்கோ குழுவுக்கோ Android, iOS ஆப்கள்.' },
    ],
  },
  {
    title: 'புத்திசாலித்தனமாக வேலை செய்ய',
    items: [
      { name: 'AI தீர்வுகள்', desc: 'உண்மையில் நேரம் மிச்சமாகும் இடங்களில் சாட்பாட்கள், ஆவணங்களைப் படிக்கும் AI, வேலை ஆட்டோமேஷன்.' },
      { name: 'டிஜிட்டல் மாற்றம்', desc: 'காகிதம், Excel வேலைகளை படிப்படியாக ஆன்லைனுக்கு மாற்றுதல்.' },
      { name: 'IT ஆலோசனை', desc: 'பணம் செலவழிக்கும் முன், எதை உருவாக்கலாம், வாங்கலாம், தவிர்க்கலாம் என்று நேர்மையான ஆலோசனை.' },
    ],
  },
  {
    title: 'வளர',
    items: [
      { name: 'டிஜிட்டல் மார்க்கெட்டிங்', desc: 'விசாரணைகளைக் கொண்டு வரும் சமூக ஊடகம், SEO, லீட் ஜெனரேஷன்.' },
      { name: 'பணியமர்த்தல் மற்றும் HR', desc: 'சரியான குழுவை உருவாக்க ஆட்சேர்ப்பு, பணியமர்த்தல் உத்தி, HR ஆலோசனை.' },
    ],
  },
];

const steps = [
  { title: 'கேட்கிறோம்', desc: 'எதையும் பரிந்துரைக்கும் முன், உங்கள் வணிகம் இன்று எப்படி நடக்கிறது என்பதை உங்கள் மொழியிலேயே கேட்டுப் புரிந்துகொள்கிறோம்.' },
  { title: 'திட்டமிடுகிறோம்', desc: 'வேலை தொடங்கும் முன், தெளிவான வேலை வரம்பு, கால அளவு, விலைப்பட்டியல் தருகிறோம்.' },
  { title: 'உருவாக்கி, பயிற்சி தருகிறோம்', desc: 'சிறு சிறு படிகளாக உருவாக்கி, உங்கள் ஊழியர்கள் நம்பிக்கையுடன் பயன்படுத்தும் வரை பயிற்சி தருகிறோம்.' },
  { title: 'தொடர்ந்து துணை நிற்கிறோம்', desc: 'தொடங்கிய பிறகும், உங்கள் வணிகத்துடன் சேர்ந்து அமைப்பை மேம்படுத்தி, ஆதரவு தருகிறோம்.' },
];

const waTamil = waLink('வணக்கம், M2P Nexus இணையதளத்தைப் பார்த்தேன். என் வணிகத் தேவைகள் பற்றிப் பேச விரும்புகிறேன்.');

export default function Tamil() {
  return (
    <div lang="ta">
      <Seo
        title="மதுரையில் மென்பொருள், இணையதளம், AI மற்றும் பணியமர்த்தல் சேவைகள்"
        description="M2P Nexus, மதுரை: பில்லிங் மென்பொருள், இணையதளம், AI, டிஜிட்டல் மார்க்கெட்டிங், பணியமர்த்தல் அனைத்தும் ஒரே குழுவிடம். தமிழிலேயே பேசுங்கள்."
        lang="ta"
        alternates={[
          { hreflang: 'en', path: '/' },
          { hreflang: 'ta', path: '/ta/' },
          { hreflang: 'x-default', path: '/' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule bg-white">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-24">
          <p className="text-sm text-body">
            <Link to="/" lang="en" hrefLang="en" className="underline decoration-rule underline-offset-4 hover:decoration-ink">
              Read this page in English
            </Link>
          </p>
          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-7">
              <h1 className="font-sans font-bold text-ink text-[2.1rem] sm:text-5xl lg:text-[3.4rem] leading-[1.2]">
                இன்னும் காகித பில்களிலும் WhatsApp ஆர்டர்களிலும் தான் வணிகம் நடக்கிறதா?
              </h1>
              <p className="text-lg sm:text-xl text-body leading-relaxed max-w-xl">
                மதுரையைச் சேர்ந்த M2P Nexus, மென்பொருள், இணையதளம், AI, டிஜிட்டல் மார்க்கெட்டிங், பணியமர்த்தல் அனைத்தையும் ஒரே குழுவாகச் செய்து தருகிறது. உங்கள் மொழியிலேயே பேசுகிறோம்.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <BookButton className="inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#0E173A]">
                  ஆலோசனைக்கு முன்பதிவு
                </BookButton>
                <a href={waTamil} target="_blank" rel="noopener noreferrer" className={whatsappButton}>
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp-இல் பேசுங்கள்
                  <span className="sr-only">(புதிய தாவலில் திறக்கும்)</span>
                </a>
                <CallIcon />
              </div>
            </div>

            {/* A handwritten note of the owner's day: the problems, in their words */}
            <div className="lg:col-span-5">
              <div className="relative -rotate-1 rounded-2xl bg-[#FBF6EA] p-6 shadow-[0_40px_80px_-40px_rgba(23,37,84,0.55)] ring-1 ring-[#E3D9C2] sm:p-8">
                <h2 className="font-[family-name:var(--font-hand)] text-2xl text-[#2B3A8C]">இது உங்களுக்கும் நடக்கிறதா?</h2>
                <ul className="mt-4 space-y-3">
                  {pains.map((p) => (
                    <li key={p} className="flex gap-3 border-b border-dashed border-[#E3D9C2] pb-3 font-[family-name:var(--font-hand)] text-lg leading-snug text-[#2B3A8C] last:border-0">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-marigold" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-semibold text-leaf">வேரிலிருந்து வெற்றிவரை</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One partner */}
      <section className="border-b border-rule bg-[#F4F6FA]">
        <div className={`${sectionPad} grid gap-8 lg:grid-cols-12 lg:items-center`}>
          <h2 className={`${taH2} lg:col-span-5`}>ஐந்து நிறுவனங்களுக்குப் பதிலாக ஒரே கூட்டாளி</h2>
          <p className="lg:col-span-7 text-lg text-body leading-relaxed">
            பெரிய நிறுவனங்கள் ஒவ்வொரு வேலைக்கும் தனித்தனி நிறுவனத்தை நியமிக்கின்றன. வளர்ந்து வரும் பெரும்பாலான வணிகங்களால் அது முடியாது. எங்களுடன் ஒரே குழு, ஒரே தொடர்பு நபர்; குறைவான தாமதம், குறைவான குழப்பம்.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-rule bg-white">
        <div className={`${sectionPad} space-y-12`}>
          <h2 className={taH2}>உங்கள் வணிகத்துக்கு நாங்கள் செய்வது</h2>
          <div className="grid gap-10 lg:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title} className="space-y-5">
                <h3 className="border-b-2 border-ink pb-3 font-sans text-xl font-bold text-ink">{g.title}</h3>
                <dl className="space-y-5">
                  {g.items.map((it) => (
                    <div key={it.name}>
                      <dt className="font-semibold text-ink">{it.name}</dt>
                      <dd className="mt-1 leading-relaxed text-body">{it.desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StarterOffers
        lang="ta"
        headingId="ta-start-small-title"
        title="சிறியதாகத் தொடங்குங்கள். முதலில் மாற்றத்தைப் பாருங்கள்."
        intro="பெரிய திட்டத்திற்குத் தயாராக இல்லையா? ஒரு தொடக்கத் திட்டத்தைத் தேர்ந்தெடுங்கள். நாங்கள் எப்படி வேலை செய்கிறோம் என்பதைப் பார்க்க இதுவே எளிய வழி."
      />

      {/* How we work */}
      <section className="border-b border-rule bg-white">
        <div className={`${sectionPad} space-y-10`}>
          <h2 className={taH2}>நாங்கள் எப்படி வேலை செய்கிறோம்</h2>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="space-y-2">
                <span className="font-display text-3xl font-extrabold text-leaf">{i + 1}</span>
                <h3 className="font-sans text-lg font-bold text-ink">{s.title}</h3>
                <p className="leading-relaxed text-body">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingCta
        lang="ta"
        title="இன்று உங்கள் வணிகம் எப்படி நடக்கிறது என்று சொல்லுங்கள்."
        text="முதலில் கேட்போம்; பிறகு பில்லிங் மென்பொருளோ, இணையதளமோ, பணியமர்த்தலோ, AI-யோ, உங்களுக்கு ஏற்ற முதல் படியைப் பரிந்துரைப்போம்."
        questions={[
          'என் கடையின் காகித பில்களை தமிழ் பில்லிங் மென்பொருளுக்கு மாற்ற முடியுமா?',
          'WhatsApp-இல் வரும் ஆர்டர்களை ஒழுங்குபடுத்த முடியுமா?',
          'Google-இல் எங்கள் வணிகத்துக்கு அதிக விசாரணைகள் வர என்ன செய்யலாம்?',
        ]}
      />
    </div>
  );
}
