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

// Tamil labels for the options above. The values sent to the sheet stay in English so every row reads
// the same; only what the visitor sees changes.
export const optionLabelsTa = {
  'Billing or business software': 'பில்லிங் / வணிக மென்பொருள்',
  Website: 'இணையதளம்',
  'Mobile app': 'மொபைல் ஆப்',
  'AI and automation': 'AI மற்றும் ஆட்டோமேஷன்',
  'Digital marketing': 'டிஜிட்டல் மார்க்கெட்டிங்',
  'Hiring and HR': 'பணியமர்த்தல் மற்றும் HR',
  'Not sure yet': 'இன்னும் உறுதியாகத் தெரியவில்லை',
  'Retail shops': 'சில்லறை கடைகள்',
  Traders: 'வியாபாரிகள்',
  Manufacturing: 'உற்பத்தி நிறுவனங்கள்',
  Construction: 'கட்டுமானம்',
  Agriculture: 'விவசாயம்',
  Logistics: 'போக்குவரத்து மற்றும் லாஜிஸ்டிக்ஸ்',
  Clinics: 'கிளினிக்குகள்',
  'Schools and colleges': 'பள்ளிகள் மற்றும் கல்லூரிகள்',
  'Finance and accounting firms': 'நிதி மற்றும் கணக்கியல் நிறுவனங்கள்',
  'Service businesses': 'சேவை நிறுவனங்கள்',
  Other: 'மற்றவை',
  WhatsApp: 'WhatsApp',
  'Phone call': 'தொலைபேசி அழைப்பு',
  Email: 'மின்னஞ்சல்',
};

// Everything the form and dialog say, in both languages. {name} and {via} are filled in.
export const formText = {
  en: {
    title: 'Book a consultation',
    intro: 'A few details so our first call is useful. It takes about a minute.',
    close: 'Close',
    name: 'Your name',
    phone: 'Phone or WhatsApp',
    phonePh: 'e.g. 98765 43210',
    email: 'Email',
    optional: '(optional)',
    business: 'Business name',
    industry: 'Industry',
    industryPh: 'Choose your industry',
    needs: 'What do you need help with?',
    message: 'Tell us about your business and what slows you down',
    messagePh: 'e.g. We bill about 80 customers a day on paper and take orders on WhatsApp.',
    contact: 'Best way to reach you',
    consent:
      'M2P Nexus may contact me about this request. My details are used only to reply and follow up, and are never sold or shared.',
    errName: 'Please tell us your name.',
    errPhoneMissing: 'Please add a phone or WhatsApp number so we can reach you.',
    errPhoneBad: 'This number looks incomplete. Use 10 digits, with +91 if you like.',
    errEmail: 'This email address looks incomplete.',
    errNeeds: 'Pick at least one area, or tell us about your requirement below.',
    errConsent: 'Please confirm we can contact you about this request.',
    submit: 'Book my consultation',
    sending: 'Sending your details…',
    submitWa: 'Send my details on WhatsApp',
    thanks: 'Thank you, {name}.',
    sent: 'We have your details and will get back to you {via} soon.',
    via: { WhatsApp: 'on WhatsApp', 'Phone call': 'with a call', Email: 'by email' },
    waSent: 'WhatsApp has opened with your details filled in. Press send there and we will take it from here.',
    error:
      'We couldn’t send your details just now. Your answers are still here: try again, or send them to us on WhatsApp in one tap.',
    errorWa: 'Send these details on WhatsApp',
    starter: 'I am interested in the {starter}.',
  },
  ta: {
    title: 'ஆலோசனைக்கு முன்பதிவு',
    intro: 'முதல் அழைப்பு பயனுள்ளதாக இருக்க சில விவரங்கள். ஒரு நிமிடம் போதும்.',
    close: 'மூடு',
    name: 'உங்கள் பெயர்',
    phone: 'தொலைபேசி / WhatsApp எண்',
    phonePh: 'எ.கா. 98765 43210',
    email: 'மின்னஞ்சல்',
    optional: '(விருப்பம்)',
    business: 'வணிகத்தின் பெயர்',
    industry: 'தொழில் துறை',
    industryPh: 'உங்கள் துறையைத் தேர்ந்தெடுக்கவும்',
    needs: 'எதில் உதவி தேவை?',
    message: 'உங்கள் வணிகம் பற்றியும், எது உங்கள் வேலையை மெதுவாக்குகிறது என்பதையும் சொல்லுங்கள்',
    messagePh: 'எ.கா. தினமும் சுமார் 80 பில்களை காகிதத்தில் போடுகிறோம்; ஆர்டர்கள் WhatsApp-இல் வருகின்றன.',
    contact: 'உங்களை எப்படித் தொடர்பு கொள்வது சிறந்தது?',
    consent:
      'இந்தக் கோரிக்கை தொடர்பாக M2P Nexus என்னைத் தொடர்பு கொள்ளலாம். என் விவரங்கள் பதிலளிக்கவும் தொடர்ந்து பேசவும் மட்டுமே பயன்படுத்தப்படும்; விற்கப்படவோ பகிரப்படவோ மாட்டாது.',
    errName: 'உங்கள் பெயரைச் சொல்லுங்கள்.',
    errPhoneMissing: 'உங்களைத் தொடர்பு கொள்ள தொலைபேசி அல்லது WhatsApp எண்ணைச் சேர்க்கவும்.',
    errPhoneBad: 'இந்த எண் முழுமையாக இல்லை போல் தெரிகிறது. 10 இலக்கங்களைப் பயன்படுத்தவும் (+91 சேர்க்கலாம்).',
    errEmail: 'இந்த மின்னஞ்சல் முகவரி முழுமையாக இல்லை போல் தெரிகிறது.',
    errNeeds: 'குறைந்தது ஒன்றைத் தேர்ந்தெடுக்கவும், அல்லது கீழே உங்கள் தேவையைச் சொல்லுங்கள்.',
    errConsent: 'இந்தக் கோரிக்கை தொடர்பாக உங்களைத் தொடர்பு கொள்ள அனுமதி தரவும்.',
    submit: 'என் ஆலோசனையை முன்பதிவு செய்ய',
    sending: 'உங்கள் விவரங்களை அனுப்புகிறோம்…',
    submitWa: 'என் விவரங்களை WhatsApp-இல் அனுப்ப',
    thanks: 'நன்றி, {name}.',
    sent: 'உங்கள் விவரங்கள் கிடைத்தன. விரைவில் {via} உங்களைத் தொடர்பு கொள்வோம்.',
    via: { WhatsApp: 'WhatsApp-இல்', 'Phone call': 'தொலைபேசியில்', Email: 'மின்னஞ்சலில்' },
    waSent: 'உங்கள் விவரங்களுடன் WhatsApp திறந்துள்ளது. அங்கே "Send" அழுத்துங்கள்; மீதியை நாங்கள் பார்த்துக்கொள்கிறோம்.',
    error:
      'இப்போது உங்கள் விவரங்களை அனுப்ப முடியவில்லை. உங்கள் பதில்கள் அப்படியே உள்ளன: மீண்டும் முயலுங்கள், அல்லது ஒரே தட்டில் WhatsApp-இல் அனுப்புங்கள்.',
    errorWa: 'இந்த விவரங்களை WhatsApp-இல் அனுப்ப',
    starter: 'எனக்கு "{starter}" பற்றி அறிய விருப்பம்.',
  },
};
