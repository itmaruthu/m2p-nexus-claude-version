import { Link } from 'react-router-dom';
import { Phone, Mail, FileText, Globe, ArrowRight } from 'lucide-react';
import { links, site } from '../config/site';
import { LinkedinIcon, WhatsAppIcon } from '../components/icons';
import m2pLogo from '../assets/m2p_nexus_logo.webp';
import Seo from '../components/Seo';
import founderPhoto from '../assets/founder_photo.webp';

export default function Connect() {
  return (
    <>
      <Seo
        title="Connect with Maruthu Pandi PT"
        description="Digital Business Card for Maruthu Pandi PT, Founder & Director of M2P Nexus. Get instant links to call, WhatsApp, email, or view our profile."
        noindex
      />

      <div className="relative min-h-dvh w-full bg-brand-primary text-white flex flex-col items-center justify-between gap-8 p-6 overflow-x-hidden font-sans">
        {/* Decorative Grid Line Panel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" aria-hidden="true"></div>

        {/* Top Spacer / Logo */}
        <div className="z-10 text-center pt-2">
          <img
            src={m2pLogo}
            alt="M2P Nexus"
            width="66"
            height="44"
            className="h-[44px] w-auto object-contain brightness-0 invert mx-auto"
          />
        </div>

        {/* Core Card Section */}
        <div className="z-10 w-full max-w-sm flex flex-col items-center space-y-6">
          {/* Avatar frame */}
          <div className="relative">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brand-accent shadow-lg bg-slate-800">
              <img
                src={founderPhoto}
                alt="Maruthu Pandi PT"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div aria-hidden="true" className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-brand-accent border-2 border-brand-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true"></div>
            </div>
          </div>

          {/* Identity details */}
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-extrabold tracking-tight font-heading">
              Maruthu Pandi PT
            </h1>
            <p className="text-xs text-brand-accent font-semibold tracking-wider uppercase font-heading">
              Founder & Director
            </p>
          </div>

          {/* Button panel */}
          <div className="w-full space-y-3.5 pt-2">
            {/* Call Now */}
            <a
              href={links.call}
              className="flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 p-3.5 rounded-xl font-bold text-sm transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>Call Now</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-[#0F7A40] hover:bg-[#0B6534] p-3.5 rounded-xl font-bold text-sm transition-colors text-left text-white"
            >
              <div className="flex items-center gap-3">
                <WhatsAppIcon />
                <span>WhatsApp Us</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-75" />
            </a>

            {/* Email */}
            <a
              href={links.email('Business Enquiry from QR Card')}
              className="flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 p-3.5 rounded-xl font-bold text-sm transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-accent" />
                <span>Email Office</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-75" />
            </a>

            {/* LinkedIn */}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 p-3.5 rounded-xl font-bold text-sm transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-4 h-4 text-brand-accent" />
                <span>LinkedIn Page</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-75" />
            </a>

            {/* Company Profile */}
            <a
              href={links.whatsappProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-slate-800 hover:bg-slate-700/80 border border-slate-700/60 p-3.5 rounded-xl font-bold text-sm transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-brand-accent" />
                <span>Company Profile</span>
              </div>
              <span className="text-xs text-brand-accent font-bold font-heading">Request on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="z-10 w-full max-w-sm pt-4 flex flex-col items-center space-y-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-1.5 w-full border border-slate-700 hover:border-slate-500 py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-slate-300 transition-colors"
          >
            <Globe className="w-4 h-4 text-brand-accent" />
            Visit Full Website
          </Link>

          <div className="text-center space-y-1">
            <img
              src={m2pLogo}
              alt=""
              width="48"
              height="32"
              className="h-[32px] w-auto object-contain brightness-0 invert opacity-40 mx-auto"
            />
            <p className="text-xs text-slate-400 font-medium">
              © {new Date().getFullYear()} M2P Nexus
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
