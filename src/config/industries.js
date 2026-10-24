// Industries from the M2P Nexus brand guide. For each: what still runs on paper or word of mouth today,
// what replaces it, and where we would usually start. Every industry covers all three sides of the
// business: two "run" rows (operations), one "customers" row (marketing) and one "team" row (hiring/HR).
// Examples of typical situations, not results or client claims.

export const rowKinds = {
  run: 'Run',
  customers: 'Customers',
  team: 'Team',
};

export const industries = [
  {
    id: 'retail',
    name: 'Retail shops',
    rows: [
      { kind: 'run', paper: 'Bills written by hand at the counter', system: 'Tamil and English billing with GST' },
      { kind: 'run', paper: 'Stock counted by eye', system: 'Low-stock alerts before shelves run empty' },
      { kind: 'customers', paper: 'Regular customers remembered, not recorded', system: 'Customer history, offers and reviews on WhatsApp and Google' },
      { kind: 'team', paper: 'Shop staff found through word of mouth', system: 'A quick hiring process for counter and store staff' },
    ],
    start: 'Billing software your counter staff can use from day one.',
  },
  {
    id: 'trading',
    name: 'Traders',
    rows: [
      { kind: 'run', paper: 'Orders arrive as WhatsApp messages', system: 'Orders sorted into one order book' },
      { kind: 'run', paper: 'Credit tracked in a notebook', system: 'Outstanding payments with reminders' },
      { kind: 'customers', paper: 'New buyers come only through old contacts', system: 'A Google and LinkedIn presence that brings new buyers' },
      { kind: 'team', paper: 'Sales staff followed up by phone calls', system: 'Field sales staff hired with clear roles and targets' },
    ],
    start: 'An order book that collects your WhatsApp orders.',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    rows: [
      { kind: 'run', paper: 'Separate registers for material and scrap', system: 'One ERP for material, scrap and dispatch' },
      { kind: 'run', paper: 'Dispatch details on paper slips', system: 'Weighbridge readings straight into the system' },
      { kind: 'customers', paper: 'New orders depend on a few old buyers', system: 'A website and catalogue buyers can find and share' },
      { kind: 'team', paper: 'Skilled workers hard to find and keep', system: 'Steady hiring for skilled and shop-floor roles' },
    ],
    start: 'One register for raw material, production and dispatch.',
  },
  {
    id: 'construction',
    name: 'Construction',
    rows: [
      { kind: 'run', paper: 'Site deliveries noted in a diary', system: 'Deliveries logged with weights and photos' },
      { kind: 'run', paper: 'Sub-contractor bills checked by hand', system: 'Contractor accounts and bills in one place' },
      { kind: 'customers', paper: 'Projects come only through referrals', system: 'An online portfolio of your projects that wins new clients' },
      { kind: 'team', paper: 'Site supervisors hired in a rush', system: 'Supervisors and engineers hired before the project starts' },
    ],
    start: 'A material and contractor ledger for every site.',
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    rows: [
      { kind: 'run', paper: 'Batch weights written at the scale', system: 'Weights recorded straight from the scale' },
      { kind: 'run', paper: 'Farmer payments worked out by hand', system: 'Commission and settlements calculated for you' },
      { kind: 'customers', paper: 'Buyers found only through brokers', system: 'Direct buyer enquiries through Google and WhatsApp' },
      { kind: 'team', paper: 'Seasonal workers arranged at the last minute', system: 'Seasonal staff lined up before the harvest' },
    ],
    start: 'A trading system for weights, transport and settlements.',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    rows: [
      { kind: 'run', paper: 'Trip sheets filled in by drivers', system: 'Digital trip sheets on a phone' },
      { kind: 'run', paper: 'Freight invoices typed in again', system: 'Invoices read and checked by AI' },
      { kind: 'customers', paper: 'New clients only through old contacts', system: 'An online presence that brings transport enquiries' },
      { kind: 'team', paper: 'Drivers leave without notice', system: 'Driver hiring with checks and a joining plan' },
    ],
    start: 'Digital trip sheets, then AI that reads freight invoices.',
  },
  {
    id: 'healthcare',
    name: 'Clinics',
    rows: [
      { kind: 'run', paper: 'Appointments in a register', system: 'Online appointments and a live queue' },
      { kind: 'run', paper: 'Patient history in paper files', system: 'Patient records in one secure place' },
      { kind: 'customers', paper: 'New patients only by word of mouth', system: 'A Google profile and reviews patients can trust' },
      { kind: 'team', paper: 'Nurses and front-desk staff hard to retain', system: 'Clinic staff hired and onboarded properly' },
    ],
    start: 'Appointments and reminders, then patient records.',
  },
  {
    id: 'education',
    name: 'Schools and colleges',
    rows: [
      { kind: 'run', paper: 'Attendance on paper registers', system: 'Attendance marked on a phone' },
      { kind: 'run', paper: 'Fee dues chased by phone', system: 'Fee reminders sent to parents' },
      { kind: 'customers', paper: 'Admissions depend on banners and word of mouth', system: 'Admission enquiries from Google and social media' },
      { kind: 'team', paper: 'Teachers hired at the last minute', system: 'Teacher hiring planned before the academic year' },
    ],
    start: 'Attendance and fee reminders that parents actually see.',
  },
  {
    id: 'finance',
    name: 'Finance and accounting firms',
    rows: [
      { kind: 'run', paper: 'Client documents arrive on email and WhatsApp', system: 'One place for every client’s documents' },
      { kind: 'run', paper: 'Invoices keyed in by hand', system: 'Invoices read automatically by AI' },
      { kind: 'customers', paper: 'Clients come only through referrals', system: 'A professional profile that brings new clients' },
      { kind: 'team', paper: 'Trained accountants hard to find', system: 'Accountants and assistants screened for you' },
    ],
    start: 'Document collection and AI invoice reading.',
  },
  {
    id: 'services',
    name: 'Service businesses',
    rows: [
      { kind: 'run', paper: 'Bookings kept in a notebook', system: 'Online bookings with reminders' },
      { kind: 'run', paper: 'Enquiries lost between calls and messages', system: 'Every enquiry captured in a CRM' },
      { kind: 'customers', paper: 'No website, or an outdated one', system: 'A website that brings in enquiries' },
      { kind: 'team', paper: 'Hiring through word of mouth', system: 'A hiring process that finds the right people' },
    ],
    start: 'A website and CRM so no enquiry is missed.',
  },
];
