// Commitments every M2P Nexus client can count on, as confirmed by the founders. Shown as the signed
// "Our promise to you" card (Home and the Tamil page) and echoed in the booking dialog, the Contact page
// and the starter packs. Change a promise here and in the short lines in src/config/consultation.js
// (formText.*.intro) and src/config/starters.js (starterText.*.promise) together.

export const promises = {
  en: {
    title: 'Our promise to you',
    intro: 'Five things every client of M2P Nexus can count on, from the first call.',
    sign: 'Maruthu Pandi PT',
    role: 'Founder & Director, M2P Nexus',
    items: [
      { icon: 'free', title: 'Your first consultation is free', text: 'Talk to us about your business with no cost and no obligation.' },
      { icon: 'own', title: 'You own your software and data', text: 'What we build, its source code and every record in it belong to you. We hand them over whenever you ask.' },
      { icon: 'train', title: 'Your team is trained', text: 'We train your staff until they are comfortable using what we built.' },
      { icon: 'support', title: 'One month of support included', text: 'Fixes and help for a month after launch, included in the price.' },
      { icon: 'reply', title: 'A reply within one working day', text: 'Every enquiry gets an answer from our team within one working day.' },
    ],
  },
  ta: {
    title: 'உங்களுக்கு எங்கள் உறுதிமொழி',
    intro: 'முதல் அழைப்பிலிருந்தே, M2P Nexus-இன் ஒவ்வொரு வாடிக்கையாளரும் நம்பக்கூடிய ஐந்து விஷயங்கள்.',
    sign: 'மருது பாண்டி PT',
    role: 'நிறுவனர் & இயக்குநர், M2P Nexus',
    items: [
      { icon: 'free', title: 'முதல் ஆலோசனை இலவசம்', text: 'உங்கள் வணிகம் பற்றி எந்தக் கட்டணமும் கட்டாயமும் இல்லாமல் பேசுங்கள்.' },
      { icon: 'own', title: 'மென்பொருளும் தரவும் உங்களுக்கே சொந்தம்', text: 'நாங்கள் உருவாக்குவது, அதன் source code, அதில் உள்ள ஒவ்வொரு பதிவும் உங்களுக்கே சொந்தம். நீங்கள் கேட்கும்போது ஒப்படைப்போம்.' },
      { icon: 'train', title: 'உங்கள் ஊழியர்களுக்குப் பயிற்சி', text: 'நாங்கள் உருவாக்கியதை உங்கள் ஊழியர்கள் நம்பிக்கையுடன் பயன்படுத்தும் வரை பயிற்சி தருவோம்.' },
      { icon: 'support', title: 'ஒரு மாத ஆதரவு சேர்த்தே', text: 'தொடங்கிய பிறகு ஒரு மாதத்திற்கு திருத்தங்களும் உதவியும் விலையிலேயே அடங்கும்.' },
      { icon: 'reply', title: 'ஒரு வேலை நாளுக்குள் பதில்', text: 'ஒவ்வொரு விசாரணைக்கும் ஒரு வேலை நாளுக்குள் எங்கள் குழு பதிலளிக்கும்.' },
    ],
  },
};
