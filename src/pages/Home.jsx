import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { links, site } from '../config/site';
import { clients } from '../config/clients';
import { WhatsAppIcon } from '../components/icons';
import ClosingCta from '../components/ClosingCta';
import { DigitalInvoice, PaperBill } from '../components/BillIllustration';
import ScatterToSorted from '../components/ScatterToSorted';
import BrandFilm from '../components/BrandFilm';
import { h2Class, outlineButton, sectionPad, textLink, whatsappButton } from '../components/styles';
import founderPhoto from '../assets/founder_photo.webp';

// Content follows the M2P Nexus brand guide: problem first, plain language, one partner instead of five
// vendors, no unverifiable numbers.

const vendors = ['A software company', 'An HR agency', 'A marketing agency', 'An AI consultant', 'An IT consultant'];

const serviceGroups = [
  {
    title: 'Run your business',
    items: [
      { name: 'Software development', desc: 'Billing, inventory, CRM and ERP systems built around how you already work.' },
      { name: 'Websites', desc: 'Business websites and landing pages that work on every phone, kept up to date.' },
      { name: 'Mobile apps', desc: 'Android, iOS and cross-platform apps for your customers or your team.' },
    ],
  },
  {
    title: 'Work smarter',
    items: [
      { name: 'AI solutions', desc: 'Chatbots, document reading and workflow automation where they save real time.' },
      { name: 'Digital transformation', desc: 'Move paper and spreadsheet processes online, step by step.' },
      { name: 'IT consulting', desc: 'Straight advice on what to build, buy or skip before you spend money.' },
    ],
  },
  {
    title: 'Grow',
    items: [
      { name: 'Digital marketing', desc: 'Social media, SEO and lead generation that bring in enquiries.' },
      { name: 'HR & talent acquisition', desc: 'Recruitment, hiring strategy and HR consulting to build the right team.' },
    ],
  },
];

const industries = ['Retail shops', 'Traders', 'Manufacturers', 'Construction', 'Clinics', 'Schools and colleges', 'Logistics', 'Agriculture', 'Service firms', 'Startups'];

const pains = [
  'Orders arrive on WhatsApp and get lost',
  'Bills, stock and attendance live on paper or in Excel',
  'No website, or one that brings no enquiries',
  'Hiring the right people takes months',
  'Unsure which software you even need',
];

const projects = [
  { forWhom: 'Retail and traders', problem: 'English-only billing tools that staff found hard to use.', built: 'Tamil / English billing software with GST, offline mode and fast checkout.' },
  { forWhom: 'Steel manufacturing', problem: 'Separate registers for scrap, stock and dispatch that never matched.', built: 'One ERP for raw material, scrap calculations, logistics and client accounts.' },
  { forWhom: 'Coconut trading', problem: 'Bulk weights, transport and farmer payments recorded by hand.', built: 'A trading system for batch weights, transport tracking and commission settlement.' },
];

const steps = [
  { title: 'We listen', desc: 'We learn how your business runs today, in your language, before suggesting anything.' },
  { title: 'We plan', desc: 'You get a clear scope, timeline and quotation before work starts.' },
  { title: 'We build and train', desc: 'We build in small steps and train your team until they are comfortable.' },
  { title: 'We stay', desc: 'After launch we support, improve and grow the system with your business.' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Software, AI, Hiring & Marketing for Growing Businesses"
        description="M2P Nexus, Madurai: one partner for software, websites, AI, HR and digital marketing, helping shops, traders and manufacturers move from paper and Excel to systems that save time."
      />

      {/* Hero: the customer's problem in words, beside the paper bill it describes. */}
      <section className="bg-white border-b border-rule overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24 grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-7">
            <h1 className="font-display font-extrabold text-ink text-[2.1rem] sm:text-5xl lg:text-[3.6rem] leading-[1.04] tracking-[-0.025em]">
              Still running your business on paper bills and WhatsApp orders?
            </h1>
            <p className="text-lg sm:text-xl text-body leading-relaxed max-w-[34rem]">
              M2P Nexus is one partner for your software, AI, hiring and marketing. We help shops, traders and manufacturers move to systems that save time, with a team in Madurai you can call when you need help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={whatsappButton}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat with us on WhatsApp
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <Link
                to="/contact"
                className={outlineButton}
              >
                Book a consultation
              </Link>
            </div>
            <p className="text-body">
              Or call{' '}
              <a href={links.call} className={textLink}>
                {site.phones[0].display}
              </a>
            </p>
          </div>

          <div aria-hidden="true" className="lg:col-span-5 relative mx-auto w-full max-w-[34rem] lg:max-w-none">
            <div className="w-[88%] sm:w-[78%]">
              <PaperBill />
            </div>
            <div className="relative -mt-16 ml-auto w-[86%] sm:-mt-24 sm:w-[72%]">
              <DigitalInvoice />
            </div>
          </div>
        </div>
      </section>

      {clients.length > 0 && (
        <section aria-labelledby="clients-heading" className="bg-white border-b border-rule">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
            <h2 id="clients-heading" className="text-center text-body font-medium">Businesses we work with</h2>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {clients.map((c) => (
                <li key={c.name} className="font-heading font-bold text-lg text-body">
                  {c.logo ? <img src={c.logo} alt={c.name} className="h-9 w-auto grayscale" loading="lazy" /> : c.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* One partner instead of five vendors */}
      <section className="bg-[#F4F6FA] border-b border-rule">
        <div className={`${sectionPad} grid gap-12 lg:grid-cols-12 lg:items-center`}>
          <div className="lg:col-span-5 space-y-5">
            <h2 className={h2Class}>One partner instead of five vendors</h2>
            <p className="text-lg text-body leading-relaxed max-w-md">
              Big companies hire a separate firm for each job. Most growing businesses can&rsquo;t, and juggling them costs time anyway. With us there is one team, one point of contact and fewer handovers, delays and surprises.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-2 font-heading text-2xl sm:text-3xl text-body/70">
              {vendors.map((v) => (
                <li key={v} className="line-through decoration-marigold decoration-[3px]">
                  <span className="sr-only">Instead of </span>
                  {v}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t-2 border-ink pt-5 font-display font-extrabold text-ink text-3xl sm:text-4xl">M2P Nexus</p>
            <p className="mt-2 text-lg text-body">One team that knows your whole business.</p>
          </div>
        </div>
      </section>

      <BrandFilm
        title="Seventeen seconds on what changes when you work with us."
        text="From paper bills and five separate vendors to one connected business, with roots in Madurai."
      />

      {/* Signature scroll scene: scattered paper slips become one connected system */}
      <ScatterToSorted />

      {/* Services grouped by what the owner needs */}
      <section className="bg-white border-b border-rule">
        <div className={`${sectionPad} space-y-12`}>
          <div className="max-w-2xl space-y-4">
            <h2 className={h2Class}>What we can do for your business</h2>
            <p className="text-lg text-body leading-relaxed">
              Start with the one thing that hurts most today. Add the rest when you&rsquo;re ready.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {serviceGroups.map((g) => (
              <div key={g.title} className="border-t-2 border-ink pt-5">
                <h3 className="font-display font-bold text-leaf text-xl">{g.title}</h3>
                <ul className="mt-6 space-y-6">
                  {g.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-heading font-semibold text-ink text-lg">{item.name}</p>
                      <p className="mt-1 text-body leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link to="/services" className={`inline-block ${textLink}`}>
            See all services
          </Link>
        </div>
      </section>

      {/* Who we work with, and the problems they bring */}
      <section className="bg-[#F4F6FA] border-b border-rule">
        <div className={`${sectionPad} grid gap-12 lg:grid-cols-12`}>
          <div className="lg:col-span-7 space-y-6">
            <h2 className={h2Class}>Who we work with</h2>
            <p className="font-heading font-bold text-ink text-2xl sm:text-[2rem] leading-snug">
              {industries.map((name, i) => (
                <span key={name}>
                  {name}
                  {i < industries.length - 1 && <span className="font-normal text-body/50">, </span>}
                </span>
              ))}
            </p>
            <Link to="/industries" className={`inline-block ${textLink}`}>
              How we help each industry
            </Link>
          </div>
          <div className="lg:col-span-5 rounded-2xl bg-white p-7 sm:p-8 ring-1 ring-rule">
            <h3 className="font-display font-bold text-ink text-xl">Sound familiar?</h3>
            <ul className="mt-5 space-y-3">
              {pains.map((p) => (
                <li key={p} className="flex gap-3 text-body leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-ink">These are the problems we fix first.</p>
          </div>
        </div>
      </section>

      {/* Past work as a ledger: the one place the ruled-paper motif returns */}
      <section className="bg-white border-b border-rule">
        <div className={`${sectionPad} space-y-10`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className={h2Class}>Some things we&rsquo;ve built</h2>
            <Link to="/portfolio" className={textLink}>
              See the full portfolio
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-xl ring-1 ring-rule">
            <div aria-hidden="true" className="absolute inset-y-0 left-3 w-px bg-[#E7A9A9]" />
            <div aria-hidden="true" className="absolute inset-y-0 left-4 w-px bg-[#E7A9A9]" />
            <table className="hidden md:table w-full text-left">
              <thead>
                <tr className="border-b-2 border-ink text-ink">
                  <th scope="col" className="py-4 pl-10 pr-6 font-heading font-semibold w-[22%]">Built for</th>
                  <th scope="col" className="py-4 pr-6 font-heading font-semibold w-[36%]">The problem</th>
                  <th scope="col" className="py-4 pr-8 font-heading font-semibold">What we built</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.forWhom} className="border-b border-rule last:border-b-0 align-top">
                    <th scope="row" className="py-6 pl-10 pr-6 font-display font-bold text-ink text-lg">{p.forWhom}</th>
                    <td className="py-6 pr-6 text-body leading-relaxed">{p.problem}</td>
                    <td className="py-6 pr-8 text-ink leading-relaxed">{p.built}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="md:hidden divide-y divide-rule">
              {projects.map((p) => (
                <li key={p.forWhom} className="py-6 pl-10 pr-5 space-y-3">
                  <p className="font-display font-bold text-ink text-lg">{p.forWhom}</p>
                  <p className="text-body leading-relaxed"><span className="font-semibold text-ink">The problem: </span>{p.problem}</p>
                  <p className="text-body leading-relaxed"><span className="font-semibold text-ink">What we built: </span>{p.built}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we work: a real sequence, so it is numbered */}
      <section className="bg-[#F4F6FA] border-b border-rule">
        <div className={`${sectionPad} space-y-12`}>
          <h2 className={`${h2Class} max-w-2xl`}>How we work with you</h2>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="space-y-3">
                <span className="block font-display font-extrabold text-leaf text-5xl leading-none">{i + 1}</span>
                <h3 className="font-heading font-bold text-ink text-xl">{s.title}</h3>
                <p className="text-body leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why we exist, from the brand story */}
      <section className="bg-white border-b border-rule">
        <div className={`${sectionPad} grid gap-12 lg:grid-cols-12 lg:items-center`}>
          <div className="lg:col-span-4">
            <img
              src={founderPhoto}
              alt="Maruthu Pandi PT, Founder and Director of M2P Nexus"
              width="800"
              height="800"
              loading="lazy"
              className="w-full max-w-sm rounded-2xl object-cover aspect-square"
            />
          </div>
          <div className="lg:col-span-8 space-y-6 max-w-2xl">
            <h2 className={h2Class}>Why we started M2P Nexus</h2>
            <p className="text-lg text-body leading-relaxed">
              Large companies can afford consultants, software vendors, marketing agencies, HR firms and AI experts. Most small businesses can&rsquo;t, so they are left guessing which software to buy, how to hire well, or how to get customers online.
            </p>
            <p className="text-lg text-body leading-relaxed">
              We built M2P Nexus to close that gap: one partner that brings technology, people and growth together, and stays with you for the long run.
            </p>
            <p className="text-body">
              <span className="font-heading font-semibold text-ink">Maruthu Pandi PT</span>, Founder &amp; Director
              <span className="mx-3 text-rule" aria-hidden="true">|</span>
              <Link to="/founder" className={textLink}>
                Meet the founders
              </Link>
            </p>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
