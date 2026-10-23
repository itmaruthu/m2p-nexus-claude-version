import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { links } from '../config/site';

export default function MobileCallButton() {
  // The Connect card has its own "Call Now" button.
  if (useLocation().pathname === '/connect') return null;

  return (
    <a
      href={links.call}
      className="md:hidden fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 text-white bg-brand-secondary rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
      aria-label="Call M2P Nexus"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
