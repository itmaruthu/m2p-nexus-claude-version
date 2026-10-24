import Seo from '../components/Seo';
import { Link } from 'react-router-dom';
import ChatDemo from '../components/ChatDemo';
import { CallIcon, WhatsAppIconLink } from '../components/CallIcon';
import { links, site } from '../config/site';
import { WhatsAppIcon } from '../components/icons';
import { h2Class, sectionPad, textLink, whatsappButton } from '../components/styles';

const NEW_TAB = <span className="sr-only"> (opens in a new tab)</span>;

const nextSteps = [
  { title: 'You tell us about your business', desc: 'What you sell, how work flows today, and what slows you down.' },
  { title: 'We suggest a first step', desc: 'A practical recommendation, with a clear scope, timeline and quotation.' },
  { title: 'You decide', desc: 'Go ahead when it makes sense for your business.' },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact M2P Nexus: WhatsApp, Phone & Email"
        description="Talk to M2P Nexus in Madurai on WhatsApp, by phone or by email at hello@m2pnexus.com. You speak directly with our team, in Tamil or English, with no forms."
      />

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
                Contact
              </li>
            </ol>
          </nav>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-7">
              <h1 className="font-display font-extrabold text-ink text-[2.6rem] sm:text-6xl lg:text-[4.6rem] leading-[1.02] tracking-[-0.03em]">
                Talk to us like you&rsquo;d talk to a friend who knows tech.
              </h1>
              <p className="text-lg sm:text-xl text-body leading-relaxed max-w-xl">
                Message, call or email. You&rsquo;ll speak directly with our team, in Tamil or English, with no forms and no call centre.
              </p>
              <div className="flex items-center gap-3">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={whatsappButton}>
                  <WhatsAppIcon className="w-5 h-5" />
                  Chat with us on WhatsApp
                  {NEW_TAB}
                </a>
                <CallIcon />
              </div>
            </div>
            <div className="lg:col-span-5">
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6FA] border-b border-rule">
        <div className={`${sectionPad} grid gap-14 lg:grid-cols-12`}>
          <div className="lg:col-span-7 space-y-6">
            <h2 className={h2Class}>Ways to reach us</h2>
            <dl className="divide-y divide-rule border-y-2 border-ink">
              <div className="grid gap-1 py-5 sm:grid-cols-3">
                <dt className="font-heading font-semibold text-ink">Phone</dt>
                <dd className="sm:col-span-2 flex gap-3">
                  <CallIcon line={0} />
                  <CallIcon line={1} />
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-3">
                <dt className="font-heading font-semibold text-ink">WhatsApp</dt>
                <dd className="sm:col-span-2">
                  <WhatsAppIconLink href={links.whatsapp} />
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-3">
                <dt className="font-heading font-semibold text-ink">Email</dt>
                <dd className="sm:col-span-2">
                  <a href={links.email()} className={`${textLink} break-all`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-3">
                <dt className="font-heading font-semibold text-ink">LinkedIn</dt>
                <dd className="sm:col-span-2">
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={textLink}>
                    M2P Nexus company page
                    {NEW_TAB}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-3">
                <dt className="font-heading font-semibold text-ink">Office</dt>
                <dd className="sm:col-span-2 space-y-2">
                  <address className="not-italic text-body leading-relaxed">
                    Sithalangudi, Madurai
                    <br />
                    Tamil Nadu 625221, India
                  </address>
                  <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
                    Open in Google Maps
                    {NEW_TAB}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-7 sm:p-8 ring-1 ring-rule">
              <h2 className="font-display font-bold text-ink text-2xl">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="font-display font-extrabold text-leaf text-3xl leading-none w-7 shrink-0">{i + 1}</span>
                    <div>
                      <p className="font-heading font-semibold text-ink text-lg">{s.title}</p>
                      <p className="mt-1 text-body leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
