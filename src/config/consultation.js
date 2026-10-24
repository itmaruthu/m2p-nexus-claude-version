import { industries } from './industries';

// "Book a consultation" form. Submissions go to a Google Apps Script web app (docs/consultation-apps-script.gs)
// that appends a row to the follow-up sheet and emails the team. Set the web app URL at build time with
// VITE_CONSULT_ENDPOINT (the Pages workflow reads the CONSULT_ENDPOINT repository variable). Until it is
// set, the form hands the details to WhatsApp instead, so no enquiry is lost.
export const consultEndpoint = import.meta.env.VITE_CONSULT_ENDPOINT || '';

export const needOptions = [
  'Billing or business software',
  'Website',
  'Mobile app',
  'AI and automation',
  'Digital marketing',
  'Hiring and HR',
  'Not sure yet',
];

export const industryOptions = [...industries.map((i) => i.name), 'Other'];

export const contactOptions = ['WhatsApp', 'Phone call', 'Email'];
