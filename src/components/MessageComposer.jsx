import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { site, waLink } from '../config/site';
import { WhatsAppIcon } from './icons';

/**
 * "Start the conversation for me": the hardest part of getting in touch is the empty message box. The
 * visitor picks what they want to talk about and a language (Tamil or English), optionally says what their
 * business does, and sees the message written for them; one tap sends it on WhatsApp or by email, where
 * they can still edit it. Nothing is stored or sent by the site itself.
 */

const TOPICS = [
  { id: 'billing', say: 'billing and stock software', en: 'Billing and stock software', ta: 'பில்லிங் மற்றும் ஸ்டாக் மென்பொருள்' },
  { id: 'website', say: 'a website or an app', en: 'A website or an app', ta: 'இணையதளம் அல்லது செயலி' },
  { id: 'ai', say: 'AI and automation', en: 'AI and automation', ta: 'AI மற்றும் ஆட்டோமேஷன்' },
  { id: 'customers', say: 'getting more customers', en: 'Getting more customers', ta: 'அதிக வாடிக்கையாளர்களைப் பெறுவது' },
  { id: 'hiring', say: 'hiring and HR', en: 'Hiring and HR', ta: 'பணியமர்த்தல் மற்றும் HR' },
  { id: 'unsure', en: 'Not sure where to start', ta: 'எங்கிருந்து தொடங்குவது என்று தெரியவில்லை' },
];

const UI = {
  en: {
    topic: 'What do you want to talk about?',
    business: 'What does your business do?',
    optional: '(optional)',
    businessPh: 'e.g. a textile shop in Madurai',
    preview: 'Your message',
    edit: 'You can change it before you send it.',
    whatsapp: 'Send on WhatsApp',
    email: 'Email it instead',
  },
  ta: {
    topic: 'எதைப் பற்றிப் பேச விரும்புகிறீர்கள்?',
    business: 'உங்கள் வணிகம் என்ன?',
    optional: '(விருப்பம்)',
    businessPh: 'எ.கா. மதுரையில் ஜவுளிக் கடை',
    preview: 'உங்கள் செய்தி',
    edit: 'அனுப்பும் முன் மாற்றலாம்.',
    whatsapp: 'WhatsApp-இல் அனுப்புங்கள்',
    email: 'மின்னஞ்சலில் அனுப்புங்கள்',
  },
};

function compose(lang, topic, business) {
  const b = business.trim();
  if (lang === 'ta') {
    const intro = b ? `வணக்கம் M2P Nexus, நான் ${b} நடத்துகிறேன்.` : 'வணக்கம் M2P Nexus,';
    if (!topic) return `${intro} என் வணிகம் பற்றிப் பேச விரும்புகிறேன். தயவுசெய்து என்னைத் தொடர்பு கொள்ளுங்கள்.`;
    if (topic.id === 'unsure') return `${intro} எங்கிருந்து தொடங்குவது என்று தெரியவில்லை. பேசலாமா?`;
    return `${intro} ${topic.ta} பற்றிப் பேச விரும்புகிறேன். தயவுசெய்து என்னைத் தொடர்பு கொள்ளுங்கள்.`;
  }
  const intro = b ? `Hello M2P Nexus, I run ${b}.` : 'Hello M2P Nexus,';
  if (!topic) return `${intro} I would like to talk about my business. Please contact me.`;
  if (topic.id === 'unsure') return `${intro} I'm not sure where to start with technology for my business. Can we talk?`;
  return `${intro} I would like to talk about ${topic.say}. Please contact me.`;
}

export default function MessageComposer() {
  const uid = useId();
  const [lang, setLang] = useState('en');
  const [topicId, setTopicId] = useState(null);
  const [business, setBusiness] = useState('');
  const t = UI[lang];
  const topic = TOPICS.find((x) => x.id === topicId);
  const message = compose(lang, topic, business);
  const subject = topic ? `Enquiry: ${topic.en}` : 'Business enquiry from the website';
  const mail = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const ta = lang === 'ta';

  const chip = (on) =>
    `min-h-11 rounded-full px-4 text-sm font-semibold transition-colors duration-200 ${
      on ? 'bg-ink text-white' : 'bg-white text-ink ring-1 ring-rule hover:ring-ink'
    } ${ta ? 'font-sans' : 'font-heading'}`;

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="space-y-7 lg:col-span-7" lang={ta ? 'ta' : undefined}>
        <div role="group" aria-label="Language for your message" className="inline-flex rounded-xl bg-white p-1 ring-1 ring-rule" lang="en">
          {[
            ['en', 'English'],
            ['ta', 'தமிழ்'],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={lang === id}
              onClick={() => setLang(id)}
              lang={id === 'ta' ? 'ta' : undefined}
              className={`min-h-11 rounded-lg px-5 font-semibold transition-colors duration-200 ${lang === id ? 'bg-ink text-white' : 'text-body hover:text-ink'}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <h3 id={`${uid}-topic`} className="font-heading font-semibold text-ink">
            {t.topic}
          </h3>
          <div role="group" aria-labelledby={`${uid}-topic`} className="flex flex-wrap gap-2">
            {TOPICS.map((x) => (
              <button key={x.id} type="button" aria-pressed={x.id === topicId} onClick={() => setTopicId(x.id === topicId ? null : x.id)} className={chip(x.id === topicId)}>
                {x[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor={`${uid}-biz`} className="font-heading font-semibold text-ink">
            {t.business} <span className="font-normal text-body">{t.optional}</span>
          </label>
          <input
            id={`${uid}-biz`}
            type="text"
            value={business}
            maxLength={80}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder={t.businessPh}
            className="block w-full rounded-xl bg-white px-4 py-3 text-ink ring-1 ring-rule placeholder:text-slate-500 focus:outline-3 focus:outline-offset-2 focus:outline-ink"
          />
        </div>
      </div>

      {/* Preview and send */}
      <div className="lg:col-span-5">
        <div className="space-y-4 rounded-3xl bg-[#ECE5DD] p-5 ring-1 ring-rule sm:p-6">
          <p className="font-heading text-sm font-semibold text-ink">{t.preview}</p>
          <p
            aria-live="polite"
            lang={ta ? 'ta' : undefined}
            className="ml-auto max-w-[95%] rounded-2xl rounded-br-md bg-[#DCF8C6] px-4 py-3 leading-relaxed text-[#1F2937] shadow-soft"
          >
            {message}
          </p>
          <p className="text-sm text-body">{t.edit}</p>
          <div className="flex flex-col gap-3 pt-1">
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-leaf px-5 font-semibold text-white transition-colors hover:bg-[#185730]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t.whatsapp}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={mail} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 font-semibold text-ink ring-1 ring-rule transition-colors hover:ring-ink">
              <Mail aria-hidden="true" className="h-5 w-5" />
              {t.email}
            </a>
          </div>
        </div>
        <p className="mt-4 text-sm text-body">
          Want to share more detail?{' '}
          <Link to="/book/" className="inline-block py-2.5 font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">
            Book a free consultation
          </Link>
        </p>
      </div>
    </div>
  );
}
