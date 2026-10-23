import { useLocation } from 'react-router-dom';
import { links } from '../config/site';
import { WhatsAppIcon } from './icons';

export default function FloatingWhatsApp() {
  // The Connect card already has a full-width WhatsApp button; a floating one would cover its links.
  if (useLocation().pathname === '/connect') return null;

  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#0F7A40] text-white rounded-full shadow-lg transition-transform hover:scale-110 pulse-whatsapp cursor-pointer"
      aria-label="Chat with M2P Nexus on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
