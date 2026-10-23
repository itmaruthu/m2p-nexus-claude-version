import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import Seo from '../components/Seo';
import { links, site } from '../config/site';
import { LinkedinIcon, WhatsAppIcon } from '../components/icons';

const actionClass =
  'inline-flex items-center gap-1.5 text-xs font-bold text-brand-secondary hover:text-brand-primary underline-offset-4 hover:underline transition-colors';

const NewTab = () => (
  <>
    <ExternalLink className="w-3.5 h-3.5" />
    <span className="sr-only">(opens in a new tab)</span>
  </>
);

export default function Contact() {
  const contactMethods = [
    {
      title: 'Phone Numbers',
      desc: 'Call our technology team directly to discuss ERP, billing software, or staffing requests.',
      icon: Phone,
      details: (
        <ul className="flex flex-col font-mono text-sm mt-2 text-brand-primary">
          {site.phones.map((p) => (
            <li key={p.tel}>
              {p.display} <span className="text-slate-500 font-sans">({p.label})</span>
            </li>
          ))}
        </ul>
      ),
      actions: site.phones.map((p) => (
        <a key={p.tel} href={`tel:${p.tel}`} className={actionClass}>
          <Phone className="w-3.5 h-3.5" />
          Call {p.label.toLowerCase()}
          <span className="sr-only"> number {p.display}</span>
        </a>
      )),
    },
    {
      title: 'Email',
      desc: 'Send us detailed RFPs, requirements documents, or candidate CVs for vetting.',
      icon: Mail,
      details: <div className="font-mono text-sm mt-2 text-brand-primary font-medium break-all">{site.email}</div>,
      actions: [
        <a key="mail" href={links.email()} className={actionClass}>
          <Mail className="w-3.5 h-3.5" />
          Write an email
        </a>,
      ],
    },
    {
      title: 'LinkedIn',
      desc: 'Connect with our leadership and review past projects, articles, and industry insights.',
      icon: LinkedinIcon,
      details: <div className="text-sm mt-2 text-brand-primary font-medium">M2P Nexus company page</div>,
      actions: [
        <a key="li" href={site.linkedin} target="_blank" rel="noopener noreferrer" className={actionClass}>
          Visit our LinkedIn page
          <NewTab />
        </a>,
      ],
    },
    {
      title: 'Office Location',
      desc: 'Our office in the Madurai region. Call ahead to arrange a meeting.',
      icon: MapPin,
      details: (
        <address className="not-italic text-sm mt-2 text-brand-primary font-medium leading-relaxed">
          Sithalangudi, Madurai,
          <br />
          Tamil Nadu 625221, India
        </address>
      ),
      actions: [
        <a key="map" href={site.mapUrl} target="_blank" rel="noopener noreferrer" className={actionClass}>
          View on Google Maps
          <NewTab />
        </a>,
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Contact Our Office - Phone, Email & Location"
        description="Get in touch with M2P Nexus. Call +91 99442 83316, email hello@m2pnexus.com, or visit us in Madurai, Tamil Nadu. Direct communication, no forms."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent" aria-hidden="true"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">Contact M2P Nexus</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Direct, transparent communication channels. Skip the contact forms and speak directly with our engineering office.
          </p>
        </div>
      </section>

      {/* Info grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Connect</p>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">Direct Communication Channels</h2>
            <p className="text-sm text-brand-text">
              We value direct relationships. Select any channel below to connect with us immediately.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <li
                  key={method.title}
                  className="bg-brand-section border border-brand-border hover:border-brand-secondary rounded-xl p-8 hover:shadow-md transition-all flex flex-col justify-between text-left group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white border border-brand-border rounded-lg flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-brand-primary font-heading">{method.title}</h3>
                    </div>
                    <p className="text-sm text-brand-text leading-relaxed">{method.desc}</p>
                    {method.details}
                  </div>

                  <div className="mt-8 pt-4 border-t border-brand-border flex flex-wrap items-center gap-x-6 gap-y-2">
                    {method.actions}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="bg-brand-section py-16 border-t border-b border-brand-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-16 h-16 bg-[#25D366]/10 border border-[#25D366]/30 text-[#0F7A40] rounded-full flex items-center justify-center mx-auto mb-2">
            <WhatsAppIcon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-brand-primary font-heading">Prefer Immediate WhatsApp Chat?</h2>
          <p className="text-sm text-brand-text max-w-md mx-auto leading-relaxed">
            Click below to start an instant text thread with Maruthu Pandi PT. Perfect for quick questions regarding ERP demos or custom pricing.
          </p>
          <div className="pt-2">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F7A40] text-white hover:bg-[#0B6534] px-8 py-3.5 rounded-md text-sm font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon />
              Start Instant WhatsApp Chat
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
