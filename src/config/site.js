// Public business details used across the site. Change them here, not in individual pages.

export const site = {
  name: 'M2P Nexus',
  email: 'hello@m2pnexus.com',
  whatsapp: '919944283316',
  phones: [
    { tel: '+919944283316', display: '+91 99442 83316', label: 'Main line' },
    { tel: '+916380465605', display: '+91 63804 65605', label: 'Second line' },
  ],
  linkedin: 'https://www.linkedin.com/company/m2p-nexus/',
  // Exact office pin (shared from Google Maps). Swap for the Google Business Profile link once verified.
  mapUrl: 'https://maps.app.goo.gl/vZyZ2siSRqLpwvC3A',
};

/** A WhatsApp link to M2P Nexus with a pre-filled message. */
export const waLink = (text) => `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

/** A call link for one of the phone lines: 0 = main line, 1 = second line. */
export const telLink = (line = 0) => `tel:${site.phones[line].tel}`;

/** Opens WhatsApp with a message, for actions that are not links (e.g. the form's WhatsApp fallback). */
export function openWhatsApp(text) {
  window.open(waLink(text), '_blank', 'noopener');
}

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
