import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import m2pLogo from '../assets/m2p_nexus_logo.webp';
import { links, site } from '../config/site';
import { LinkedinIcon } from './icons';
import { useIsConnectPage } from './useIsConnectPage';

export default function Footer() {
  const isConnectPage = useIsConnectPage();

  // Exclude footer render on the Connect page
  if (isConnectPage) return null;

  return (
    <footer className="bg-brand-primary text-slate-300 border-t border-slate-800 pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Company Info & Links */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-white rounded-xl px-3 py-2 shadow-md inline-flex items-center">
                <img
                  src={m2pLogo}
                  alt="M2P Nexus"
                  width="72"
                  height="48"
                  loading="lazy"
                  className="h-[48px] w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mt-2">
              Bridging the gap between traditional businesses and modern technology through AI-powered solutions, workforce excellence, and digital transformation.
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              <h3 id="footer-quick-links" className="text-xs font-semibold uppercase text-brand-accent tracking-wider font-heading">Quick Links</h3>
              <nav aria-labelledby="footer-quick-links" className="grid grid-cols-2 gap-2 text-sm">
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link to="/founder" className="hover:text-white transition-colors">The Founder</Link>
                <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </nav>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                  Technology Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                  Workforce Excellence
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                  Business Growth
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base uppercase tracking-wider mb-4">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div className="flex flex-col -my-1.5">
                  {site.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="inline-block py-1.5 hover:text-white transition-colors font-medium">
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href={links.email()} className="hover:text-white transition-colors font-medium break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <LinkedinIcon className="w-5 h-5 text-brand-accent shrink-0" />
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium flex items-center gap-1"
                >
                  Connect on LinkedIn <ExternalLink className="w-3 h-3" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  Sithalangudi, Madurai,<br />Tamil Nadu, India
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} M2P Nexus. All rights reserved.</p>
          <div className="flex flex-col md:items-end gap-1">
            <p lang="ta" className="font-semibold text-brand-accent tracking-wider">
              வேரிலிருந்து வெற்றிவரை
            </p>
            <p className="text-xs text-slate-400 tracking-wider">
              From Root to Success
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
