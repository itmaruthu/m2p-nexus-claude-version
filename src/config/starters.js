// "Start small" starter packs: fixed-scope first projects that make it easy to try M2P Nexus.
// Timelines are typical durations agreed with the founders; prices are quoted per business, so none are
// shown. `need` matches an option in src/config/consultation.js so a booked starter arrives tagged.
// Tamil copy sits beside the English; keep both in step when editing.

export const starters = [
  {
    id: 'billing',
    need: 'Billing or business software',
    en: {
      name: 'Billing starter',
      for: 'Shops and traders still billing on paper',
      get: [
        'Tamil and English GST billing on your computer or phone',
        'Your products, prices and opening stock loaded in',
        'Bills shared with customers on WhatsApp',
        'Your counter staff trained on site',
      ],
      time: 'About 2 weeks',
    },
    ta: {
      name: 'பில்லிங் தொடக்கத் திட்டம்',
      for: 'இன்னும் காகிதத்தில் பில் போடும் கடைகள் மற்றும் வியாபாரிகளுக்கு',
      get: [
        'உங்கள் கணினி அல்லது மொபைலில் தமிழ் மற்றும் ஆங்கில GST பில்லிங்',
        'உங்கள் பொருட்கள், விலைகள், தொடக்க இருப்பு அனைத்தும் பதிவேற்றம்',
        'பில்களை வாடிக்கையாளர்களுக்கு WhatsApp-இல் அனுப்பும் வசதி',
        'உங்கள் கடை ஊழியர்களுக்கு நேரில் பயிற்சி',
      ],
      time: 'சுமார் 2 வாரங்கள்',
    },
  },
  {
    id: 'website',
    need: 'Website',
    en: {
      name: 'Website starter',
      for: 'Businesses customers can’t find online',
      get: [
        'A fast business website that works on every phone',
        'WhatsApp and call buttons for enquiries',
        'Your Google Business Profile set up',
        'The basics for showing up in Google search',
      ],
      time: 'About 10 working days',
    },
    ta: {
      name: 'இணையதள தொடக்கத் திட்டம்',
      for: 'வாடிக்கையாளர்கள் ஆன்லைனில் உங்களைக் கண்டுபிடிக்க முடியாத வணிகங்களுக்கு',
      get: [
        'எல்லா மொபைலிலும் வேகமாக இயங்கும் வணிக இணையதளம்',
        'விசாரணைகளுக்கு WhatsApp மற்றும் அழைப்பு பட்டன்கள்',
        'உங்கள் Google Business Profile அமைப்பு',
        'Google தேடலில் தெரிய அடிப்படை அமைப்புகள்',
      ],
      time: 'சுமார் 10 வேலை நாட்கள்',
    },
  },
  {
    id: 'hiring',
    need: 'Hiring and HR',
    en: {
      name: 'First-hire starter',
      for: 'Owners who need the right person, soon',
      get: [
        'The role and job description written with you',
        'Candidates sourced and screened for you',
        'A shortlist of interview-ready candidates',
        'Interview questions and help up to the offer',
      ],
      time: 'About 3 weeks',
    },
    ta: {
      name: 'முதல் பணியமர்த்தல் திட்டம்',
      for: 'சரியான நபரை விரைவில் தேடும் உரிமையாளர்களுக்கு',
      get: [
        'உங்களுடன் சேர்ந்து பணி விவரம் (job description) தயாரிப்பு',
        'தகுதியான விண்ணப்பதாரர்களைத் தேடி, சரிபார்த்தல்',
        'நேர்காணலுக்குத் தயாரான சிறந்தவர்களின் பட்டியல்',
        'நேர்காணல் கேள்விகள் முதல் பணி வாய்ப்பு வரை உதவி',
      ],
      time: 'சுமார் 3 வாரங்கள்',
    },
  },
  {
    id: 'check',
    need: 'Not sure yet',
    en: {
      name: 'Business tech check',
      for: 'Not sure where to start?',
      get: [
        'We see how your business runs today, in person or on a call',
        'We find where paper and repeated work cost you time',
        'You get a one-page plan with your first step',
        'No obligation to go further',
      ],
      time: 'One meeting and a written plan',
    },
    ta: {
      name: 'வணிக தொழில்நுட்ப ஆய்வு',
      for: 'எங்கிருந்து தொடங்குவது என்று தெரியவில்லையா?',
      get: [
        'உங்கள் வணிகம் இன்று எப்படி நடக்கிறது என்று நேரில் அல்லது அழைப்பில் பார்ப்போம்',
        'காகிதமும் திரும்பத் திரும்ப செய்யும் வேலையும் எங்கே நேரத்தை வீணாக்குகின்றன என்று கண்டறிவோம்',
        'உங்கள் முதல் படியுடன் ஒரு பக்க திட்டம் தருவோம்',
        'தொடர வேண்டிய கட்டாயம் இல்லை',
      ],
      time: 'ஒரு சந்திப்பு மற்றும் எழுத்துப்பூர்வ திட்டம்',
    },
  },
];

export const starterText = {
  en: {
    for: 'For',
    get: 'What you get',
    time: 'Typical time',
    book: 'Book this starter',
    promise: 'Every starter comes with a fixed scope and a written quotation before any work begins.',
  },
  ta: {
    for: 'யாருக்கு',
    get: 'உங்களுக்குக் கிடைப்பவை',
    time: 'வழக்கமான காலம்',
    book: 'இந்தத் திட்டத்தை முன்பதிவு செய்ய',
    promise: 'ஒவ்வொரு திட்டத்திற்கும், வேலை தொடங்கும் முன்பே தெளிவான வேலை வரம்பும் எழுத்துப்பூர்வ விலைப்பட்டியலும் (quotation) தருவோம்.',
  },
};
