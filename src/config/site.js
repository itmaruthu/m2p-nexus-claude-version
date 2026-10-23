// Public business details used across the site. Change them here, not in individual pages.

const waLink = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const site = {
  name: 'M2P Nexus',
  email: 'hello@m2pnexus.com',
  whatsapp: '919944283316',
  phones: [
    { tel: '+919944283316', display: '+91 99442 83316', label: 'Primary' },
    { tel: '+916380465605', display: '+91 63804 65605', label: 'Secondary' },
  ],
  linkedin: 'https://www.linkedin.com/company/m2p-nexus/',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sithalangudi%2C%20Madurai%2C%20Tamil%20Nadu',
};

export const links = {
  whatsapp: waLink(
    'Hello Maruthu,\n\nI visited the M2P Nexus website and would like to discuss my business requirements.\n\nPlease contact me.\n\nThank you.',
  ),
  whatsappProfile: waLink(
    'Hello Maruthu, I would like to receive the M2P Nexus Company Profile. Please share it with me. Thank you.',
  ),
  email: (subject = 'Business Enquiry from Website') => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`,
  call: `tel:${site.phones[0].tel}`,
};
