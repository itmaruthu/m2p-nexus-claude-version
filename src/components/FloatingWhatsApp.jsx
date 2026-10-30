import { links } from '../config/site';
import { WhatsAppIcon } from './icons';
import { useIsConnectPage } from './useIsConnectPage';

export default function FloatingWhatsApp() {
  const isConnectPage = useIsConnectPage();
  // Desktop only: phones get the MobileContactBar. The Connect card has its own WhatsApp button.
  if (isConnectPage) return null;

  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-[#0F7A40] text-white rounded-full shadow-soft ring-1 ring-black/5 transition-transform duration-150 hover:scale-105 cursor-pointer"
      aria-label="Chat with M2P Nexus on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
