// Portfolio projects, from the existing M2P Nexus portfolio copy. Numbers that could not be verified
// (percentages, hours, counts) were removed; outcomes are kept as plain statements. Projects are
// described by sector only: client names are deliberately not published.
// `was` and `before` restate each project's confirmed problem as "how it ran before" (no new facts).

export const projectGroups = [
  { id: 'all', label: 'All work' },
  { id: 'software', label: 'Software' },
  { id: 'ai', label: 'AI' },
  { id: 'growth', label: 'Growth' },
  { id: 'people', label: 'People' },
];

export const projects = [
  {
    id: 'textile-billing',
    group: 'software',
    sector: 'Textile retail',
    title: 'Billing and inventory system',
    problem: 'Manual billing and stock tracking slowed the counter at busy hours, caused stock mismatches and left GST to be worked out by hand.',
    built: 'An ERP-powered billing and inventory system with fast POS billing, GST invoices, barcode search and live stock.',
    was: 'Bill book',
    before: ['Bills written and GST worked out by hand', 'Stock counted on the shelf, and often wrong', 'Queues at the counter at busy hours'],
    core: 'Billing & stock',
    modules: ['POS billing', 'GST invoices', 'Barcode search', 'Stock alerts', 'Suppliers', 'Sales reports'],
    outcomes: ['Faster checkout at busy hours', 'Better inventory accuracy', 'Simpler GST compliance', 'Billing, stock and reports in one place'],
    stack: ['React', 'Next.js', 'PostgreSQL'],
  },
  {
    id: 'coconut-trade',
    group: 'software',
    sector: 'Coconut trading',
    title: 'Agribusiness supply chain portal',
    problem: 'Batch weights, transport logs and commission were tracked by hand, causing friction in farmer settlements.',
    built: 'A supply chain app connected to the scales that tracks driver fuel allowances and generates commission settlements.',
    was: 'Hand-kept logs',
    before: ['Batch weights written down by hand', 'Transport and fuel tracked on paper', 'Settlements that caused friction with farmers'],
    core: 'Trade ledger',
    modules: ['Scale readings', 'Batch weights', 'Transport', 'Fuel allowance', 'Commission', 'Settlements'],
    outcomes: ['Smoother harvest settlements', 'Fewer disputes over weights and commission', 'Transport costs visible per trip'],
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'engineering-website',
    group: 'software',
    sector: 'Engineering firm',
    title: 'Business website',
    problem: 'An engineering business needed a professional online presence that clearly showed customers what it does.',
    built: 'A business website that works on every phone, presenting its services and capabilities, with easy ways to call, message or enquire.',
    was: 'No website',
    before: ['No professional presence online', 'Services hard for customers to understand'],
    core: 'Website',
    modules: ['Services', 'Capabilities', 'Enquiries', 'Phone & WhatsApp', 'Location'],
    outcomes: ['A professional first impression online', 'Customers can find and contact them easily', 'Services explained in one place'],
  },
  {
    id: 'freight-ai',
    group: 'ai',
    sector: 'Logistics',
    title: 'AI that reads freight invoices',
    problem: 'Office staff spent hours every week reading, sorting and checking incoming freight billing slips.',
    built: 'An OCR and AI pipeline that reads shipping receipts, matches them with trip records and flags anything unusual.',
    was: 'Pile of slips',
    before: ['Hours every week reading and sorting freight slips', 'Every slip checked against trips by hand'],
    core: 'AI reader',
    modules: ['Receipt scans', 'Text extraction', 'Trip matching', 'Anomaly flags', 'Daily summary'],
    outcomes: ['Hours of manual checking saved every week', 'Mismatches flagged automatically', 'Staff handle exceptions, not data entry'],
    stack: ['Python', 'OpenAI', 'LangChain', 'PostgreSQL'],
  },
  {
    id: 'stock-assistant',
    group: 'ai',
    sector: 'Retail and agribusiness',
    title: 'Stock chat assistant',
    problem: 'Floor staff could not check stock levels or current prices quickly from their phones, which delayed orders.',
    built: 'A chat assistant connected to the inventory database, so staff can ask for live stock and prices in plain words.',
    was: 'Phone calls',
    before: ['Staff could not check stock from their phones', 'Prices confirmed by calling the office', 'Orders waiting on the answer'],
    core: 'Stock assistant',
    modules: ['Chat on phone', 'Live stock', 'Current prices', 'Order lookup'],
    outcomes: ['Stock questions answered in seconds', 'Faster order confirmation', 'Fewer calls to the office'],
    stack: ['React', 'Node.js', 'OpenAI', 'SQL Server'],
  },
  {
    id: 'b2b-leads',
    group: 'growth',
    sector: 'Industrial trading',
    title: 'B2B lead generation',
    problem: 'The business needed a stronger market presence and a structured way to find qualified industrial leads.',
    built: 'A growth strategy covering market positioning, digital presence, lead generation and a structured client acquisition process.',
    was: 'Ad hoc sales',
    before: ['A weak presence in its market', 'No structured way to find industrial leads'],
    core: 'Sales pipeline',
    modules: ['Positioning', 'Digital presence', 'Lead generation', 'Enquiry handling', 'Sales process'],
    outcomes: ['Better brand visibility in target markets', 'A structured B2B lead process', 'A sales pipeline built to scale'],
  },
  {
    id: 'export-growth',
    group: 'growth',
    sector: 'Import and export',
    title: 'Business expansion strategy',
    problem: 'A young import-export business needed visibility and new business opportunities at home and abroad.',
    built: 'An integrated plan for brand positioning, digital marketing, targeted outreach and expansion into new markets.',
    was: 'Few channels',
    before: ['Little visibility at home or abroad', 'New business opportunities hard to find'],
    core: 'Growth plan',
    modules: ['Brand', 'Digital marketing', 'Outreach', 'Client acquisition', 'Expansion'],
    outcomes: ['Stronger market positioning', 'More qualified business enquiries', 'A repeatable way to win customers'],
  },
  {
    id: 'engineering-brand',
    group: 'growth',
    sector: 'Engineering',
    title: 'Customer acquisition and brand growth',
    problem: 'A competitive market and no predictable source of leads for the sales team.',
    built: 'Social media marketing, targeted lead campaigns, brand positioning and sales consultation, run as one plan.',
    was: 'Unpredictable leads',
    before: ['A crowded, competitive market', 'No predictable source of leads for sales'],
    core: 'Lead engine',
    modules: ['Social media', 'Lead campaigns', 'Positioning', 'Sales coaching'],
    outcomes: ['More visibility across digital channels', 'Better quality sales enquiries', 'A steady business development pipeline'],
  },
  {
    id: 'hr-foundation',
    group: 'people',
    sector: 'Engineering firm',
    title: 'An HR function built to scale',
    problem: 'As the company grew, HR ran on scattered processes with no standard policies or recruitment framework.',
    built: 'Standard HR policies, a recruitment workflow, employee lifecycle processes and part-time (fractional) HR leadership.',
    was: 'Scattered HR',
    before: ['HR processes scattered as the company grew', 'No standard policies', 'No recruitment framework'],
    core: 'HR function',
    modules: ['HR policies', 'Recruitment', 'Onboarding', 'Employee lifecycle', 'Fractional HR'],
    outcomes: ['A structured, scalable HR function', 'Smoother recruitment and onboarding', 'Leaders free to focus on the business'],
  },
  {
    id: 'talent-transformation',
    group: 'people',
    sector: 'Industrial components',
    title: 'Talent acquisition and HR transformation',
    problem: 'Hard to attract qualified people, inconsistent HR processes and a workplace that needed to keep good staff.',
    built: 'Talent acquisition with an HR audit, process improvements, engagement initiatives and ongoing HR advice.',
    was: 'Hard to hire',
    before: ['Qualified people hard to attract', 'Inconsistent HR processes', 'Good staff hard to keep'],
    core: 'People engine',
    modules: ['Hiring', 'HR audit', 'Processes', 'Engagement', 'HR advisory'],
    outcomes: ['Better candidates, hired sooner', 'Consistent, compliant HR processes', 'Higher engagement and retention'],
  },
];

// Problem-first entry to the portfolio: the owner's words, mapped to the projects that started there.
export const pains = [
  { id: 'counter', label: 'Billing is slow at the counter', ids: ['textile-billing'] },
  { id: 'stock', label: 'We can’t see our stock', ids: ['textile-billing', 'stock-assistant'] },
  { id: 'settle', label: 'Settlements cause disputes', ids: ['coconut-trade'] },
  { id: 'slips', label: 'Staff check invoices by hand', ids: ['freight-ai'] },
  { id: 'online', label: 'Customers can’t find us online', ids: ['engineering-website', 'export-growth'] },
  { id: 'leads', label: 'Not enough good enquiries', ids: ['b2b-leads', 'engineering-brand', 'export-growth'] },
  { id: 'hiring', label: 'Hiring takes too long', ids: ['talent-transformation', 'hr-foundation'] },
  { id: 'hr', label: 'HR is all over the place', ids: ['hr-foundation', 'talent-transformation'] },
];

// "Build from proven parts": every part is something listed in a project above (`from`), so each one is
// already running at a real business. `need` is the booking form option it maps to.
export const partGroups = [
  { id: 'software', label: 'Software', need: 'Billing or business software' },
  { id: 'ai', label: 'AI', need: 'AI and automation' },
  { id: 'growth', label: 'Growth', need: 'Digital marketing' },
  { id: 'people', label: 'People', need: 'Hiring and HR' },
];

export const parts = [
  { id: 'pos', group: 'software', name: 'POS billing with GST', from: ['textile-billing'] },
  { id: 'stock', group: 'software', name: 'Live stock and alerts', from: ['textile-billing'] },
  { id: 'barcode', group: 'software', name: 'Barcode search', from: ['textile-billing'] },
  { id: 'suppliers', group: 'software', name: 'Supplier records', from: ['textile-billing'] },
  { id: 'reports', group: 'software', name: 'Sales reports', from: ['textile-billing'] },
  { id: 'scale', group: 'software', name: 'Weighing-scale readings', from: ['coconut-trade'] },
  { id: 'transport', group: 'software', name: 'Transport and fuel', from: ['coconut-trade'] },
  { id: 'settlements', group: 'software', name: 'Commission settlements', from: ['coconut-trade'] },
  { id: 'website', group: 'software', name: 'Business website', from: ['engineering-website'], need: 'Website' },
  { id: 'contact', group: 'software', name: 'Call and WhatsApp buttons', from: ['engineering-website'], need: 'Website' },
  { id: 'read', group: 'ai', name: 'Reads receipts and invoices', from: ['freight-ai'] },
  { id: 'match', group: 'ai', name: 'Matches them to records', from: ['freight-ai'] },
  { id: 'flags', group: 'ai', name: 'Flags anything unusual', from: ['freight-ai'] },
  { id: 'summary', group: 'ai', name: 'Daily summary', from: ['freight-ai'] },
  { id: 'chat', group: 'ai', name: 'Stock chat on the phone', from: ['stock-assistant'] },
  { id: 'orders', group: 'ai', name: 'Order lookup by chat', from: ['stock-assistant'] },
  { id: 'brand', group: 'growth', name: 'Brand positioning', from: ['b2b-leads', 'export-growth', 'engineering-brand'] },
  { id: 'social', group: 'growth', name: 'Social media marketing', from: ['engineering-brand'] },
  { id: 'campaigns', group: 'growth', name: 'Lead campaigns', from: ['engineering-brand', 'b2b-leads'] },
  { id: 'enquiries', group: 'growth', name: 'Enquiry handling', from: ['b2b-leads'] },
  { id: 'sales', group: 'growth', name: 'Sales process', from: ['b2b-leads', 'engineering-brand'] },
  { id: 'outreach', group: 'growth', name: 'Outreach to new markets', from: ['export-growth'] },
  { id: 'recruit', group: 'people', name: 'Recruitment workflow', from: ['hr-foundation', 'talent-transformation'] },
  { id: 'policies', group: 'people', name: 'HR policies', from: ['hr-foundation'] },
  { id: 'onboarding', group: 'people', name: 'Onboarding', from: ['hr-foundation'] },
  { id: 'audit', group: 'people', name: 'HR audit', from: ['talent-transformation'] },
  { id: 'engagement', group: 'people', name: 'Staff engagement', from: ['talent-transformation'] },
  { id: 'fractional', group: 'people', name: 'Part-time HR lead', from: ['hr-foundation'] },
];

// One-tap starting points for the builder.
export const partPresets = [
  { id: 'shop', label: 'A shop', parts: ['pos', 'stock', 'barcode', 'reports', 'website'] },
  { id: 'trader', label: 'A trading business', parts: ['scale', 'transport', 'settlements', 'read', 'match'] },
  { id: 'team', label: 'A growing team', parts: ['recruit', 'policies', 'onboarding', 'fractional'] },
];

export const maxParts = 8;

/** Parts from a `?parts=a,b` value, in config order, unknown ids dropped. */
export function readParts(value) {
  const ids = new Set((value || '').split(',').filter(Boolean));
  return parts.filter((p) => ids.has(p.id)).slice(0, maxParts);
}

/** Booking form options for a set of parts. */
export function needsFor(picked) {
  const needs = picked.map((p) => p.need || partGroups.find((g) => g.id === p.group).need);
  return [...new Set(needs)];
}
