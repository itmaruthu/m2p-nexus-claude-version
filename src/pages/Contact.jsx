import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { links, site } from '../config/site';
import { WhatsAppIcon } from '../components/icons';
import { h2Class, outlineButton, sectionPad, textLink, whatsappButton } from '../components/styles';

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
        description="Talk to M2P Nexus in Madurai. WhatsApp or call +91 99442 83316, email hello@m2pnexus.com. You speak directly with our team, no forms."
      />

      <PageHero
        crumb="Contact"
        title="Talk to us"
        intro="Message, call or email. You’ll speak directly with our team, no forms and no call centre."
      >
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={whatsappButton}>
            <WhatsAppIcon className="w-5 h-5" />
            Chat with us on WhatsApp
            {NEW_TAB}
          </a>
          <a href={links.call} className={outlineButton}>
            Call {site.phones[0].display}
          </a>
        </div>
      </PageHero>

      <section className="bg-[#F4F6FA] border-b border-rule">
        <div className={`${sectionPad} grid gap-14 lg:grid-cols-12`}>
          <div className="lg:col-span-7 space-y-6">
            <h2 className={h2Class}>Ways to reach us</h2>
            <dl className="divide-y divide-rule border-y-2 border-ink">
              <div className="grid gap-1 py-5 sm:grid-cols-3">
                <dt className="font-heading font-semibold text-ink">Phone</dt>
                <dd className="sm:col-span-2 space-y-1">
                  {site.phones.map((p) => (
                    <p key={p.tel}>
                      <a href={`tel:${p.tel}`} className={textLink}>
                        {p.display}
                      </a>
                    </p>
                  ))}
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-3">
                <dt className="font-heading font-semibold text-ink">WhatsApp</dt>
                <dd className="sm:col-span-2">
                  <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={textLink}>
                    {site.phones[0].display}
                    {NEW_TAB}
                  </a>
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
