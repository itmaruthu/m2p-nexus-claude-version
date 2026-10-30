import { Phone, PhoneCall } from 'lucide-react';
import { site } from '../config/site';
import { WhatsAppIcon } from './icons';
import Tooltip from './Tooltip';

/**
 * Phone numbers are never printed on the site: calls and WhatsApp are offered as round icon buttons.
 * The number stays in the tel:/wa.me link only. Each button has an accessible name and a hover/focus tooltip, and a
 * 44px tap target (WCAG 2.5.8).
 */

const tones = {
  light: 'bg-white text-ink ring-1 ring-rule hover:bg-ink hover:text-white hover:ring-ink',
  dark: 'bg-white/10 text-white ring-1 ring-white/25 hover:bg-white hover:text-ink',
};

const base = 'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors';

/** Call button for one of the site's phone lines (0 = main line, 1 = second line). */
export function CallIcon({ line = 0, tone = 'light', className = '' }) {
  const phone = site.phones[line];
  const label = line === 0 ? 'Call M2P Nexus' : 'Call M2P Nexus on our second line';
  const Icon = line === 0 ? Phone : PhoneCall;
  return (
    <Tooltip label={label} tone={tone}>
      <a href={`tel:${phone.tel}`} aria-label={label} className={`${base} ${tones[tone]} ${className}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </a>
    </Tooltip>
  );
}

/** WhatsApp chat button, icon only. */
export function WhatsAppIconLink({ href, tone = 'light', className = '' }) {
  return (
    <Tooltip label="Chat on WhatsApp" tone={tone}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with M2P Nexus (opens in a new tab)"
      className={`${base} ${tone === 'dark' ? tones.dark : 'bg-white text-leaf ring-1 ring-rule hover:bg-leaf hover:text-white hover:ring-leaf'} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
    </a>
    </Tooltip>
  );
}
