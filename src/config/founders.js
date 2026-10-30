// The founders and what each of them leads, from the existing M2P Nexus founder page. Claims that could not
// be verified (success rates, counters) were removed. `topics` route a visitor to the founder who leads
// that kind of work; `point` is the index of the matching item in that founder's `points`.

export const founderLeads = [
  {
    id: 'maruthu',
    name: 'Maruthu Pandi PT',
    first: 'Maruthu',
    role: 'Founder & Director',
    area: 'Technology',
    points: [
      { title: 'Systems built around the shop floor', text: 'Designing databases that prevent stock mismatches, and connecting weighing scales, transport meters and billing to one central system.' },
      { title: 'International delivery standards', text: 'Onsite project delivery in Japan, bringing disciplined coding standards, clean architecture and structured delivery home to Madurai.' },
      { title: 'Practical AI', text: 'AI pipelines that read raw receipt logs and write daily inventory reports, so teams stop compiling them by hand.' },
    ],
  },
  {
    id: 'priyanka',
    name: 'Priyanka M',
    first: 'Priyanka',
    role: 'Co-Founder',
    area: 'People and clients',
    points: [
      { title: 'Hiring that works', text: 'Auditing recruitment pipelines, building structured interviews and retention plans so the right people join and stay.' },
      { title: 'Long-term partnerships', text: 'Staying close to every client after launch and advising startups and growing businesses as they build capable teams.' },
      { title: 'Business development', text: 'Helping clients find and win customers, from positioning to a sales process that keeps enquiries coming.' },
    ],
  },
];

export const founderTopics = [
  { id: 'software', label: 'Billing, stock or business software', founder: 'maruthu', point: 0, need: 'Billing or business software' },
  { id: 'website', label: 'A website or an app', founder: 'maruthu', point: 1, need: 'Website' },
  { id: 'ai', label: 'AI and automation', founder: 'maruthu', point: 2, need: 'AI and automation' },
  { id: 'hiring', label: 'Hiring the right people', founder: 'priyanka', point: 0, need: 'Hiring and HR' },
  { id: 'customers', label: 'Finding more customers', founder: 'priyanka', point: 2, need: 'Digital marketing' },
  { id: 'after', label: 'Support as we grow', founder: 'priyanka', point: 1, need: 'Not sure yet' },
];

export const findFounder = (id) => founderLeads.find((f) => f.id === id) || null;

// "From Japan to Madurai": habits from onsite delivery in Japan (founder page copy), each paired with a
// promise the founders have confirmed (src/config/promises.js).
export const japanHabits = [
  {
    habit: 'Structured delivery',
    you: 'A written scope and quotation before any work begins, so you know exactly what you get.',
  },
  {
    habit: 'Clean architecture',
    you: 'Software organised so it can grow with your business, handed over to you: you own the code and the data.',
  },
  {
    habit: 'Disciplined coding standards',
    you: 'Fewer surprises after launch, your team trained until they are comfortable, and a month of support included.',
  },
];
