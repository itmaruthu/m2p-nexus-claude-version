import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, PhoneCall } from 'lucide-react';
import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';
import ChatDemo from '../components/ChatDemo';
import MessageComposer from '../components/MessageComposer';
import { links, site } from '../config/site';
import { nextSteps } from '../config/nextSteps';
import { LinkedinIcon, WhatsAppIcon } from '../components/icons';
import { h2Class, sectionPad, whatsappButton } from '../components/styles';

// Contact. Page story: talk to us (hero) -> we write the first message for you -> every way to reach us
// -> what happens next. Phone numbers are never printed (site rule): calls are labelled buttons.

const NEW_TAB = <span className="sr-only"> (opens in a new tab)</span>;

const card = 'flex flex-col gap-4 rounded-2xl bg-white p-6 ring-1 ring-rule';
const action =
  'inline-flex min-h-11 items-center gap-2 self-start rounded-lg px-4 font-semibold transition-colors';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact M2P Nexus: WhatsApp, Phone & Email"
        description="Talk to M2P Nexus in Madurai on WhatsApp, by phone or by email at hello@m2pnexus.com. You speak directly with our team, in Tamil or English, and we reply within one working day."
      />

      <section className="relative overflow-hidden border-b border-rule bg-white">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 md:pt-10 md:pb-20 space-y-8">
          <Breadcrumb page="Contact" />
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-7">
              <h1 className="font-display font-bold text-ink text-[2.4rem] sm:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-[-0.03em]">
                Talk to us like you&rsquo;d talk to a friend who knows tech.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-body sm:text-xl">
                Message, call or email. You&rsquo;ll speak directly with our team, in Tamil or English, with no call
                centre in between. We reply within one working day.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={whatsappButton}>
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat with us on WhatsApp
                  {NEW_TAB}
                </a>
                <a href="#start" className="inline-flex min-h-11 items-center gap-1.5 px-2 font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">
                  Not sure what to write?
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* We write the first message */}
      <section id="start" aria-labelledby="start-title" className="scroll-mt-24 border-b border-rule bg-[#F4F6FA]">
        <div className={`${sectionPad} space-y-10`}>
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
            <div className="space-y-3 lg:col-span-7">
              <p className="font-heading text-sm font-semibold text-leaf">Start the conversation for me</p>
              <h2 id="start-title" className={h2Class}>
                Not sure what to write? We&rsquo;ll write it.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-body lg:col-span-5">
              Pick a topic and a language. Your first message is ready to send in one tap, in Tamil or English.
            </p>
          </div>
          <MessageComposer />
        </div>
      </section>

      {/* Every way to reach us */}
      <section aria-labelledby="reach-title" className="border-b border-rule bg-white">
        <div className={`${sectionPad} space-y-10`}>
          <h2 id="reach-title" className={h2Class}>
            Every way to reach us
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className={card}>
              <WhatsAppIcon className="h-7 w-7 text-leaf" />
              <div>
                <h3 className="font-display text-lg font-bold text-ink">WhatsApp</h3>
                <p className="mt-1 text-body">Message us any time, in Tamil or English.</p>
              </div>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={`${action} mt-auto bg-leaf text-white hover:bg-[#185730]`}>
                Chat on WhatsApp
                {NEW_TAB}
              </a>
            </li>
            <li className={card}>
              <Phone aria-hidden="true" className="h-7 w-7 text-ink" />
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Call</h3>
                <p className="mt-1 text-body">Talk to our team directly, in Tamil or English.</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <a href={`tel:${site.phones[0].tel}`} className={`${action} bg-ink text-white hover:bg-[#0E173A]`}>
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  Main line
                </a>
                <a href={`tel:${site.phones[1].tel}`} className={`${action} text-ink ring-1 ring-rule hover:ring-ink`}>
                  <PhoneCall aria-hidden="true" className="h-4 w-4" />
                  Second line
                </a>
              </div>
            </li>
            <li className={card}>
              <Mail aria-hidden="true" className="h-7 w-7 text-ink" />
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Email</h3>
                <p className="mt-1 break-all text-body">{site.email}</p>
              </div>
              <a href={links.email()} className={`${action} mt-auto text-ink ring-1 ring-rule hover:ring-ink`}>
                Write to us
              </a>
            </li>
            <li className={card}>
              <MapPin aria-hidden="true" className="h-7 w-7 text-ink" />
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Visit</h3>
                <address className="mt-1 not-italic leading-relaxed text-body">
                  Sithalangudi, Madurai
                  <br />
                  Tamil Nadu 625221, India
                </address>
              </div>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className={`${action} mt-auto text-ink ring-1 ring-rule hover:ring-ink`}>
                Get directions
                {NEW_TAB}
              </a>
            </li>
          </ul>

          <div className="flex flex-col gap-3 rounded-2xl bg-[#F4F6FA] p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body">
              Want to speak with a particular founder, or follow our work?
            </p>
            <div className="flex flex-wrap gap-x-5">
              <Link to="/founder" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">
                Who should you talk to?
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">
                <LinkedinIcon aria-hidden="true" className="h-4 w-4" />
                LinkedIn
                {NEW_TAB}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next (shared with the Book page) */}
      <section aria-labelledby="next-title" className="border-b border-rule bg-[#F4F6FA]">
        <div className={`${sectionPad} grid gap-10 lg:grid-cols-12 lg:items-center`}>
          <div className="space-y-4 lg:col-span-4">
            <h2 id="next-title" className={h2Class}>
              What happens next
            </h2>
            <p className="text-lg leading-relaxed text-body">Your first consultation is always free.</p>
            <Link
              to="/book/"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-ink px-6 font-semibold text-white transition-colors hover:bg-[#0E173A]"
            >
              Book a free consultation
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <ol className="grid gap-4 md:grid-cols-3 lg:col-span-8">
            {nextSteps.en.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-rule">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-marigold">{i + 1}</span>
                <p className="mt-4 font-heading text-lg font-semibold text-ink">{s.title}</p>
                <p className="mt-1 leading-relaxed text-body">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
