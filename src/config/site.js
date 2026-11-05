// Public business details used across the site. Change them here, not in individual pages.

/* global __M2P_CONTACT__ */

// Phone numbers are not kept in this repository. The build reads them from its environment
// (M2P_PHONE_MAIN, M2P_PHONE_SECOND, M2P_WHATSAPP: CI variables, or a git-ignored .env.local) and ships them
// base64-encoded (see vite.config.js). Call and WhatsApp links are rendered with a stand-in address (the
// Contact page) and swapped for the real tel: / wa.me link only when a visitor points at, touches or focuses
// one (armContactLinks), so the numbers are never in the pre-rendered HTML for scrapers to collect.
const contact = (() => {
  try {
    return JSON.parse(atob(__M2P_CONTACT__));
  } catch {
    return {};
  }
})();

const contactPage = `${import.meta.env.BASE_URL}contact/`;

/** A WhatsApp link to M2P Nexus with a pre-filled message (stand-in until a visitor reaches for it). */
export const waLink = (text) => `${contactPage}?wa=${encodeURIComponent(text)}`;

/** A call link for one of the phone lines: 0 = main line, 1 = second line (stand-in until used). */
export const telLink = (line = 0) => `${contactPage}?call=${line}`;

const realWa = (text) => (contact.whatsapp ? `https://wa.me/${contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : null);
const realTel = (line) => {
  const n = line === '1' ? contact.second : contact.main;
  return n ? `tel:${n}` : null;
};

/** Opens WhatsApp with a message, for actions that are not links (e.g. the form's WhatsApp fallback). */
export function openWhatsApp(text) {
  window.open(realWa(text) || waLink(text), '_blank', 'noopener');
}

/** Swaps stand-in call / WhatsApp links for real ones the moment a visitor reaches for them. Call once. */
export function armContactLinks() {
  const target = new URL(contactPage, window.location.origin).pathname;
  const arm = (e) => {
    const a = e.target instanceof Element && e.target.closest('a[href]');
    if (!a) return;
    const u = new URL(a.href, window.location.href);
    if (u.pathname !== target) return;
    const real = u.searchParams.has('wa') ? realWa(u.searchParams.get('wa')) : u.searchParams.has('call') ? realTel(u.searchParams.get('call')) : null;
    if (real) a.href = real;
  };
  for (const type of ['pointerdown', 'pointerover', 'touchstart', 'focusin']) {
    document.addEventListener(type, arm, { capture: true, passive: true });
  }
}

export const site = {
  name: 'M2P Nexus',
  email: 'hello@m2pnexus.com',
  linkedin: 'https://www.linkedin.com/company/m2p-nexus/',
  // Exact office pin (shared from Google Maps). Swap for the Google Business Profile link once verified.
  mapUrl: 'https://maps.app.goo.gl/vZyZ2siSRqLpwvC3A',
};

export const links = {
  whatsapp: waLink(
    'Hello Maruthu,\n\nI visited the M2P Nexus website and would like to discuss my business requirements.\n\nPlease contact me.\n\nThank you.',
  ),
  whatsappProfile: waLink(
    'Hello Maruthu, I would like to receive the M2P Nexus Company Profile. Please share it with me. Thank you.',
  ),
  email: (subject = 'Business Enquiry from Website') => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`,
  call: telLink(0),
};
