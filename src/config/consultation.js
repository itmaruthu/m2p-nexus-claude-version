import { industries } from './industries';

// "Book a consultation" form. Submissions go to a Google Apps Script web app (docs/consultation-apps-script.gs)
// that appends a row to the follow-up sheet and emails the team. If sending fails, the form offers to hand
// the details to WhatsApp instead, so no enquiry is lost.
// Public by nature: browsers post to it. VITE_CONSULT_ENDPOINT overrides it (e.g. for a test sheet).
const DEFAULT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyOD5-xgjDQchGJfX9HkxTOPo3ycJcv7nk1Po0BglEQxUZtasQCbZf0Ms2fic4vX79RIQ/exec';
export const consultEndpoint = import.meta.env.VITE_CONSULT_ENDPOINT || DEFAULT_ENDPOINT;

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
