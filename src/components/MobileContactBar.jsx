import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { links } from '../config/site';
import { WhatsAppIcon } from './icons';

/** Fixed Call / WhatsApp bar on phones. The footer adds bottom padding so it never covers content. */
export default function MobileContactBar() {
  // The Connect card already has its own Call and WhatsApp buttons.
  if (useLocation().pathname === '/connect') return null;

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-white/95 backdrop-blur px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={links.call}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand-secondary font-semibold text-brand-secondary"
        >
          <Phone className="h-5 w-5" />
          Call
        </a>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0F7A40] font-semibold text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
