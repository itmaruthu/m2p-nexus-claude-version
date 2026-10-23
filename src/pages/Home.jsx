import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Laptop,
  Brain,
  Users,
  TrendingUp,
  Factory,
  Building2,
  Leaf,
  ShoppingBag,
  GraduationCap,
  Truck,
  Rocket,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Phone,
  Cpu,
  Check,
  Handshake,
  Languages,
  Search,
  ClipboardList,
  Wrench,
  LifeBuoy,
} from 'lucide-react';

import StatCounter from '../components/StatCounter';
import Seo from '../components/Seo';
import { links } from '../config/site';
import { clients } from '../config/clients';
import { WhatsAppIcon } from '../components/icons';
import founderPhoto from '../assets/founder_photo.webp';

// Animated router link for the clickable industry tiles.
const MotionLink = motion.create(Link);

// Framer Motion Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  { title: 'Technology Solutions', desc: 'Custom enterprise software, ERP development, billing software and business portals built on modern architectures.', icon: Laptop },
  { title: 'AI Solutions', desc: 'Automated reporting, predictive analytics and AI assistants built into the tools your team already uses every day.', icon: Brain },
  { title: 'Workforce Solutions', desc: 'Recruitment, technical screening and HR frameworks that help you build and keep a capable team.', icon: Users },
  { title: 'Business Growth Solutions', desc: 'Market positioning, digital presence, lead generation and growth strategy for traders and manufacturers.', icon: TrendingUp },
];

const builtSolutions = [
  { title: 'Tamil Billing Software', industry: 'Retail & Agribusiness', problem: 'Local traders struggle with complex English-only billing tools.', built: 'A bilingual Tamil / English billing system with GST compliance, offline mode and fast checkout.', tech: ['React', 'Node.js'] },
  { title: 'Steel Industry ERP', industry: 'Heavy Manufacturing', problem: 'Separate inventory trackers led to raw-material discrepancies.', built: 'One resource planner for raw material, scrap calculations, logistics, client accounts and staff schedules.', tech: ['React', '.NET Core', 'SQL Server'] },
  { title: 'Coconut Trader ERP', industry: 'Agribusiness & Trade', problem: 'Bulk weights, transport and farmer payments were recorded by hand.', built: 'A trading system for batch weights, transport tracking, regional pricing and commission settlement.', tech: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Business Websites', industry: 'Corporate & SMEs', problem: 'A weak digital presence and few enquiries from search.', built: 'Fast, search-friendly company websites with clear calls to action and professional branding.', tech: ['React', 'Next.js'] },
  { title: 'AI Business Automation', industry: 'Enterprise Operations', problem: 'Staff time spent compiling the same reports and data every week.', built: 'Automation that summarises daily logs, compiles invoices and drafts routine client messages.', tech: ['Python', 'OpenAI API'] },
];

const steps = [
  { title: 'Understand', desc: 'We learn how your business runs today: the people, the paperwork and where time and money leak.', icon: Search },
  { title: 'Plan', desc: 'You get a clear scope, timeline and quotation before any work starts.', icon: ClipboardList },
  { title: 'Build & train', desc: 'We build in short cycles, in Tamil and English where needed, and train your team on site or online.', icon: Wrench },
  { title: 'Support & grow', desc: 'After launch we stay on to support, improve and scale the system with your business.', icon: LifeBuoy },
];

const reasons = [
  { title: 'Business-first thinking', desc: 'Every system is shaped around your operations and your cash flow, not around technology for its own sake.', icon: ShieldCheck },
  { title: 'Deep technology expertise', desc: '.NET, Node.js, React and Python experience behind ERPs that run daily manufacturing work.', icon: Laptop },
  { title: 'Built for SMEs and startups', desc: 'No bloated enterprise contracts or long sales cycles; practical, cost-effective delivery.', icon: Rocket },
  { title: 'Practical AI', desc: 'AI where it saves real time: report automation, data extraction and assistants for your team.', icon: Brain },
  { title: 'Regional understanding', desc: 'Bilingual Tamil / English software and an understanding of local trade that teams adopt easily.', icon: Languages },
  { title: 'Long-term partnership', desc: 'We act as your technology partner and grow with you, not a one-off vendor.', icon: Handshake },
];

const heroPoints = ['Bilingual Tamil / English systems', 'Offline-ready GST billing', '14+ years of engineering leadership'];

export default function Home() {
  return (
    <>
      <Seo
        title="Digital Solutions & AI Consulting"
        description="Empowering enterprises, SMEs, and traders through custom software, Steel & Coconut ERPs, AI-driven automation, and workforce solutions. Modernizing tradition from root to success."
      />

      {/* Hero: rendered in its final state (initial={false}) so it is visible in the pre-rendered HTML. */}
      <section className="relative overflow-hidden bg-white border-b border-brand-border">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <motion.div initial={false} animate="visible" variants={fadeInUp} className="lg:col-span-7 space-y-6">
              <p className="inline-flex items-center gap-2 px-3 py-1 bg-brand-section border border-brand-border rounded-full text-brand-secondary text-xs font-semibold uppercase tracking-wider font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
                Technology partner · Madurai, India
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-primary leading-[1.08] tracking-tight font-heading">
                Digital Solutions That Help Businesses Grow
              </h1>
              <p className="text-lg sm:text-xl text-brand-text max-w-xl leading-relaxed">
                Bridging the gap between traditional businesses and modern technology through AI-powered solutions, workforce excellence, and digital transformation.
              </p>
              <p className="font-heading font-semibold text-brand-secondary">
                Modernizing tradition. Empowering communities. Driving innovation.
                <span lang="ta" className="block mt-1 text-brand-accent-strong">வேரிலிருந்து வெற்றிவரை</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  to="/contact"
                  className="bg-brand-secondary text-white hover:bg-brand-primary font-bold px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-brand-border bg-white text-[#0F7A40] hover:border-[#0F7A40]/40 hover:bg-emerald-50 font-bold px-7 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Chat on WhatsApp
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
              <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-brand-text">
                {heroPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-accent-strong shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Illustration of a bilingual operations dashboard, plus the founder. */}
            <div className="lg:col-span-5 relative">
              <div aria-hidden="true" className="absolute -inset-6 bg-gradient-to-tr from-brand-secondary/10 via-transparent to-brand-accent/10 rounded-[2.5rem] blur-2xl" />
              <div aria-hidden="true" className="relative rounded-2xl bg-brand-primary p-5 sm:pb-16 shadow-2xl shadow-brand-primary/20 border border-slate-800 font-mono text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] text-slate-400">இன்றைய நிலை · Today</span>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {[
                    ['விற்பனை · Sales', '₹1,24,500', 'text-emerald-400'],
                    ['Dispatches', '12', 'text-sky-300'],
                    ['Stock alerts', '3', 'text-amber-300'],
                  ].map(([label, value, tone]) => (
                    <div key={label} className="rounded-xl bg-slate-900/70 border border-slate-800 p-3">
                      <div className="text-[10px] text-slate-400 leading-tight">{label}</div>
                      <div className={`text-base sm:text-lg font-bold mt-1 ${tone}`}>{value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl bg-slate-900/70 border border-slate-800 p-4">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Weekly billing</span>
                    <span className="text-emerald-400">↑ 18%</span>
                  </div>
                  <div className="mt-3 flex items-end gap-2 h-20">
                    {[38, 52, 45, 63, 58, 74, 88].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-secondary to-sky-400" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-[11px]">
                  <div className="flex justify-between rounded-lg bg-slate-900/50 px-3 py-2">
                    <span>GST invoice #8842 · கம்பி</span>
                    <span className="text-emerald-400">Paid</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-slate-900/50 px-3 py-2">
                    <span>Weighbridge · Lot 27</span>
                    <span className="text-sky-300">14,240 kg</span>
                  </div>
                </div>
              </div>

              <Link
                to="/founder"
                className="relative mt-4 sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 flex items-center gap-3 rounded-2xl bg-white border border-brand-border shadow-lg px-4 py-3 hover:border-brand-secondary/40 transition-colors"
              >
                <img src={founderPhoto} alt="" width="48" height="48" className="w-12 h-12 rounded-full object-cover border-2 border-brand-accent/60" />
                <span className="text-sm leading-snug">
                  <span className="block text-brand-text">Led by</span>
                  <span className="block font-bold text-brand-primary font-heading">Maruthu Pandi PT</span>
                  <span className="block text-xs text-brand-text">Founder &amp; Director</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key numbers */}
      <section aria-label="Key numbers" className="bg-brand-section border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-3 divide-x divide-brand-border">
          <StatCounter plain target={50} suffix="+" label="Projects delivered" />
          <StatCounter plain target={9} suffix="+" label="Industries served" />
          <StatCounter plain target={5} suffix="+" label="ERP systems built" />
        </div>
      </section>

      {clients.length > 0 && (
        <section aria-labelledby="clients-heading" className="bg-white border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
            <h2 id="clients-heading" className="text-center text-xs font-semibold uppercase tracking-widest text-brand-text font-heading">
              Trusted by growing businesses
            </h2>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {clients.map((c) => (
                <li key={c.name} className="text-slate-500 font-heading font-bold text-lg">
                  {c.logo ? <img src={c.logo} alt={c.name} className="h-9 w-auto grayscale opacity-80" loading="lazy" /> : c.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* What we do: split layout */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent-strong font-heading">What we do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading leading-tight">
              Four ways we help your business grow
            </h2>
            <p className="text-lg text-brand-text leading-relaxed">
              Software, AI, people and growth strategy from one partner who understands how regional businesses really work.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 font-bold text-brand-secondary hover:text-brand-primary">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-brand-border rounded-2xl overflow-hidden border border-brand-border">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="bg-white p-7 sm:p-8 flex flex-col gap-4 hover:bg-brand-section transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="font-heading text-sm font-bold text-slate-500" aria-hidden="true">0{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary font-heading">{s.title}</h3>
                  <p className="text-brand-text leading-relaxed flex-1">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-sm font-bold text-brand-secondary hover:text-brand-primary w-fit">
                    Learn more<span className="sr-only"> about {s.title}</span> <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Industries We Serve — bento grid. The mini dashboards are illustrations, hidden from screen readers. */}
      <section className="py-24 md:py-32 bg-[#FAFAFC] border-b border-brand-border relative overflow-hidden">
        {/* Subtle radial grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-50/35 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div className="space-y-4 max-w-2xl">
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/8 border border-brand-secondary/15 text-brand-secondary text-xs font-bold uppercase tracking-widest font-heading"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                Market Verticals
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-extrabold text-brand-primary tracking-tight font-heading leading-tight"
              >
                Industries We Serve
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base text-brand-text leading-relaxed">
                Deep engineering expertise and business-first technology across the sectors that drive the real economy.
              </motion.p>
            </div>
            <motion.div variants={fadeInUp}>
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-brand-secondary/30 text-brand-secondary hover:bg-brand-secondary hover:text-white text-sm font-bold transition-all duration-300 whitespace-nowrap"
              >
                Explore industries <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Bento 2.0 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-6">

            {/* HERO: Manufacturing — 2 cols × 2 rows */}
            <MotionLink
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              to="/industries"
              className="group relative text-left rounded-3xl overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[380px] lg:min-h-[460px] bg-gradient-to-br from-slate-950 via-[#0B1528] to-[#122A52] border border-slate-900 shadow-md hover:shadow-2xl hover:shadow-blue-950/20 transition-all duration-500 flex flex-col justify-between p-8"
            >
              {/* Dot pattern overlay */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
              {/* Glow orb */}
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Content Top */}
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white/20 transition-all duration-300">
                  <Factory className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white font-heading leading-tight">Manufacturing</h3>
                  <p className="text-sm text-blue-200/80 leading-relaxed max-w-xs">Custom ERP systems for steel, textile, and heavy process industries.</p>
                </div>
              </div>

              {/* Interactive Mini-UI: Live ERP Panel */}
              <div aria-hidden="true" className="max-sm:hidden relative z-10 mt-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex-1 flex flex-col justify-between font-mono text-[11px] text-slate-400 min-h-[160px]">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-2">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    STEEL ERP SYSTEM
                  </span>
                  <span className="text-slate-500 text-[10px]">v4.2</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800/60 text-center">
                    <div className="text-[8px] text-slate-500 uppercase">Input Scrap</div>
                    <div className="text-xs font-bold text-white mt-0.5">14.8 T</div>
                    <div className="text-[8px] text-emerald-500 font-semibold mt-0.5">↑ 99.2%</div>
                  </div>
                  <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800/60 text-center">
                    <div className="text-[8px] text-slate-500 uppercase">Furnace Temp</div>
                    <div className="text-xs font-bold text-white mt-0.5">1,620°C</div>
                    <div className="text-[8px] text-emerald-500 font-semibold mt-0.5">OPTIMAL</div>
                  </div>
                  <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800/60 text-center">
                    <div className="text-[8px] text-slate-500 uppercase">Production</div>
                    <div className="text-xs font-bold text-white mt-0.5">12.4 T</div>
                    <div className="text-[8px] text-blue-400 font-semibold mt-0.5">Live-Sync</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] bg-slate-950/40 px-2 py-1 rounded border border-slate-800/40">
                    <span>Logistics Gate 1: Outgoing</span>
                    <span className="text-emerald-500 font-bold">DISPATCHED</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] bg-slate-950/40 px-2 py-1 rounded border border-slate-800/40">
                    <span>Weighbridge Sync Status</span>
                    <span className="text-emerald-500 font-bold">CONNECTED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="relative z-10 mt-6 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300/70 font-heading">ERP &amp; Industrial Systems</span>
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white/20 transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </MotionLink>

            {/* Construction — 1×1 */}
            <MotionLink
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              to="/industries"
              className="group relative text-left rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white group-hover:border-brand-secondary transition-all duration-300">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-brand-primary font-heading group-hover:text-brand-secondary transition-colors">Construction</h3>
                  <p className="text-xs text-brand-text leading-relaxed">Material logistics, billing, and site delivery management.</p>
                </div>
              </div>

              {/* Interactive Mini-UI: Logistics tracking */}
              <div aria-hidden="true" className="max-sm:hidden mt-4 space-y-2">
                <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px]">
                  <span className="font-semibold text-slate-700">Cement Batch #4</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 font-bold text-[8px] rounded-full uppercase">On-Site</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px]">
                  <span className="font-semibold text-slate-700">Steel Delivery</span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 font-bold text-[8px] rounded-full uppercase">Signed</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center text-slate-500 group-hover:text-brand-secondary">
                <span className="text-[9px] font-bold uppercase tracking-wider">Site Sync</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </MotionLink>

            {/* Agriculture — 1×1 */}
            <MotionLink
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              to="/industries"
              className="group relative text-left rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white group-hover:border-brand-secondary transition-all duration-300">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-brand-primary font-heading group-hover:text-brand-secondary transition-colors">Agriculture</h3>
                  <p className="text-xs text-brand-text leading-relaxed">Farm-to-market trading, weighbridge automation, and crop logistics.</p>
                </div>
              </div>

              {/* Interactive Mini-UI: Weighbridge ticket info */}
              <div aria-hidden="true" className="max-sm:hidden mt-4 space-y-2 font-mono">
                <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left">
                  <div className="text-[8px] text-slate-500 uppercase">Weighbridge Log</div>
                  <div className="text-[10px] font-bold text-slate-800 mt-0.5">NET WT: 14,240 KG</div>
                  <div className="flex justify-between items-center text-[8px] text-slate-500 mt-1">
                    <span>Grade: Coir A</span>
                    <span className="text-emerald-700 font-bold">Verified ✓</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center text-slate-500 group-hover:text-brand-secondary">
                <span className="text-[9px] font-bold uppercase tracking-wider">Trading Platform</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </MotionLink>

            {/* Startups & SMEs — 2×1 wide */}
            <MotionLink
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              to="/industries"
              className="group relative text-left rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 sm:col-span-2 lg:col-span-2 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start justify-between flex-1">
                <div className="space-y-4 max-w-sm">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white group-hover:border-brand-secondary transition-all duration-300">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-brand-primary font-heading group-hover:text-brand-secondary transition-colors">Startups &amp; SMEs</h3>
                    <p className="text-xs text-brand-text leading-relaxed">Rapid MVPs, digital presence, and cloud-first solutions for growing ventures.</p>
                  </div>
                </div>

                {/* Interactive Mini-UI: Simulated code terminal */}
                <div aria-hidden="true" className="max-sm:hidden bg-slate-950 rounded-xl p-3 flex-1 font-mono text-[9px] text-slate-400 border border-slate-800 w-full sm:max-w-[240px] shrink-0 self-center">
                  <div className="flex items-center gap-1.5 mb-1.5 border-b border-slate-800 pb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[8px] text-slate-500 ml-1">deploy.sh</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-slate-500">$ npx create-next-app@latest</div>
                    <div className="text-blue-400">✓ Project initialized.</div>
                    <div className="text-emerald-400 font-semibold">✓ Deploy live at m2pnexus.com</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center text-slate-500 group-hover:text-brand-secondary">
                <span className="text-[9px] font-bold uppercase tracking-wider">MVP Deployment</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </MotionLink>

            {/* EdTech — 1×1 */}
            <MotionLink
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              to="/industries"
              className="group relative text-left rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white group-hover:border-brand-secondary transition-all duration-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-brand-primary font-heading group-hover:text-brand-secondary transition-colors">EdTech</h3>
                  <p className="text-xs text-brand-text leading-relaxed">Student portals, GPA automation, and real-time parent notifications.</p>
                </div>
              </div>

              {/* Interactive Mini-UI: Student profile snippet */}
              <div aria-hidden="true" className="max-sm:hidden mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[9px] text-brand-secondary border border-slate-200">
                    MP
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-slate-800">Maruthu P.</div>
                    <div className="text-[8px] text-slate-500">ID #4829</div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[9px] bg-slate-50 border border-slate-100 p-1 rounded-lg">
                  <span className="text-slate-600">Attendance</span>
                  <span className="font-bold text-emerald-700">98.5% (A+)</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center text-slate-500 group-hover:text-brand-secondary">
                <span className="text-[9px] font-bold uppercase tracking-wider">Institution Portal</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </MotionLink>

            {/* Logistics — 1×1 */}
            <MotionLink
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              to="/industries"
              className="group relative text-left rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white group-hover:border-brand-secondary transition-all duration-300">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-brand-primary font-heading group-hover:text-brand-secondary transition-colors">Logistics</h3>
                  <p className="text-xs text-brand-text leading-relaxed">Fleet management, route tracking, driver logs, and fuel auditing.</p>
                </div>
              </div>

              {/* Interactive Mini-UI: Live route schematic */}
              <div aria-hidden="true" className="max-sm:hidden mt-4 bg-slate-50 border border-slate-100 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden min-h-[50px]">
                <svg className="w-full h-6 text-slate-300" viewBox="0 0 100 20" fill="none">
                  <path d="M10,10 C30,3 50,17 90,10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="10" cy="10" r="2.5" fill="#1E3A8A" />
                  <circle cx="90" cy="10" r="2.5" fill="#10B981" />
                  <circle cx="50" cy="10" r="3" fill="#10B981" className="animate-ping" />
                  <circle cx="50" cy="10" r="2.5" fill="#10B981" />
                </svg>
                <div className="flex justify-between w-full text-[8px] text-slate-500 px-1 mt-0.5">
                  <span>Start</span>
                  <span className="text-brand-secondary font-bold">Transit</span>
                  <span>End</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center text-slate-500 group-hover:text-brand-secondary">
                <span className="text-[9px] font-bold uppercase tracking-wider">Fleet Tracking</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </MotionLink>

            {/* Retail — 2×1 wide */}
            <MotionLink
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              to="/industries"
              className="group relative text-left rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 sm:col-span-2 lg:col-span-2 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden min-h-[220px]"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start justify-between flex-1">
                <div className="space-y-4 max-w-sm">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white group-hover:border-brand-secondary transition-all duration-300">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-brand-primary font-heading group-hover:text-brand-secondary transition-colors">Retail</h3>
                    <p className="text-xs text-brand-text leading-relaxed">Bilingual POS systems and offline-first GST billing solutions.</p>
                  </div>
                </div>

                {/* Interactive Mini-UI: GST invoice mockup */}
                <div aria-hidden="true" className="max-sm:hidden bg-slate-50 border border-slate-100 rounded-xl p-3 flex-1 flex flex-col justify-between font-mono text-[9px] text-slate-600 w-full sm:max-w-[240px] shrink-0 self-center">
                  <div className="flex justify-between border-b border-dashed border-slate-200 pb-1 mb-1">
                    <span className="font-bold text-slate-800 text-[8px]">விற்பனை சீட்டு / GST</span>
                    <span className="text-slate-500">#8842</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex justify-between">
                      <span>Rods / கம்பி</span>
                      <span className="font-semibold">₹14,500</span>
                    </div>
                    <div className="flex justify-between text-[8px] text-slate-500">
                      <span>GST @ 18%</span>
                      <span>₹2,610</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-dashed border-slate-200 pt-1 mt-1 text-[10px] font-bold text-brand-secondary">
                    <span>மொத்தம் / TOTAL</span>
                    <span>₹17,110</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center text-slate-500 group-hover:text-brand-secondary">
                <span className="text-[9px] font-bold uppercase tracking-wider">POS Systems</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </MotionLink>

            {/* IT & Technology — Full-width banner */}
            <MotionLink
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              to="/industries"
              className="group relative text-left rounded-3xl bg-white border border-slate-200/80 shadow-sm p-6 sm:p-8 sm:col-span-2 lg:col-span-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Left Content */}
              <div className="flex-1 max-w-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-secondary to-blue-900 flex items-center justify-center text-white shadow-lg shadow-blue-950/10">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-primary font-heading group-hover:text-brand-secondary transition-colors">IT &amp; Technology</h3>
                    <span className="inline-flex px-2 py-0.5 rounded-full bg-brand-secondary/8 border border-brand-secondary/15 text-brand-secondary text-[9px] font-bold uppercase tracking-widest font-heading mt-0.5">Enterprise Delivery</span>
                  </div>
                </div>
                <p className="text-xs text-brand-text leading-relaxed">
                  Tech staffing, offshore delivery teams, custom API integrations, and strategic digital consulting built for enterprise scalability and transformation.
                </p>
              </div>

              {/* Right Mini-UI Layout */}
              <div aria-hidden="true" className="max-sm:hidden flex-1 flex flex-col md:flex-row gap-4 items-center w-full lg:w-auto">
                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {['React', 'Node.js', 'Python', '.NET Core', 'AWS', 'Docker'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-50 border border-slate-200/80 rounded-lg text-[9px] font-bold text-slate-600 font-mono shadow-2xs hover:bg-slate-100 hover:text-slate-800 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Mock endpoint */}
                <div className="bg-slate-950 text-[9px] font-mono text-slate-400 p-3 rounded-xl border border-slate-800 w-full md:w-52 shrink-0 text-left">
                  <div className="text-emerald-500 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    GET /v2/scale/ready
                  </div>
                  <div className="text-slate-500 mt-1">{"{"}</div>
                  <div className="pl-3">"status": "synchronized",</div>
                  <div className="pl-3">"latency": "14ms"</div>
                  <div>{"}"}</div>
                </div>
              </div>

              {/* Bottom indicators absolute-like layout or footer */}
              <div className="lg:hidden w-full flex justify-between items-center text-slate-500 border-t border-slate-100 pt-4 mt-2">
                <span className="text-[9px] font-bold uppercase tracking-wider">Digital Transformation</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </MotionLink>

          </div>
        </div>
      </section>

      {/* Solutions we've built: 2 large + 3 small, no gaps */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent-strong font-heading">Solutions we&rsquo;ve built</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading leading-tight">
                Built for real regional and industrial problems
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-brand-secondary/30 text-brand-secondary hover:bg-brand-secondary hover:text-white text-sm font-bold transition-all whitespace-nowrap self-start md:self-auto"
            >
              See case studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {builtSolutions.map((s, i) => (
              <article
                key={s.title}
                className={`bg-white border border-brand-border rounded-2xl p-6 sm:p-7 flex flex-col gap-4 shadow-xs hover:shadow-md transition-shadow ${
                  i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'
                } ${i === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <span className="w-fit text-xs font-semibold text-brand-accent-strong bg-brand-accent/10 px-2.5 py-1 rounded-full font-heading">
                  {s.industry}
                </span>
                <h3 className={`${i < 2 ? 'text-2xl' : 'text-xl'} font-bold text-brand-primary font-heading`}>{s.title}</h3>
                <dl className="space-y-3 text-sm leading-relaxed flex-1">
                  <div>
                    <dt className="font-semibold text-brand-primary">Problem</dt>
                    <dd className="text-brand-text">{s.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-primary">What we built</dt>
                    <dd className="text-brand-text">{s.built}</dd>
                  </div>
                </dl>
                <ul className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-border" aria-label="Technology">
                  {s.tech.map((t) => (
                    <li key={t} className="px-2 py-0.5 rounded-md bg-brand-section border border-brand-border text-xs font-mono text-brand-text">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we work + why choose us */}
      <section className="bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
          <div className="space-y-10">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent-strong font-heading">How we work</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading leading-tight">
                From first conversation to a system your team uses every day
              </h2>
            </div>
            <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li key={step.title} className="relative space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-brand-secondary text-white font-heading font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span aria-hidden="true" className="hidden lg:block h-px flex-1 bg-gradient-to-r from-brand-border to-transparent" />
                      <Icon className="w-5 h-5 text-brand-secondary lg:hidden" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-primary font-heading">{step.title}</h3>
                    <p className="text-brand-text leading-relaxed">{step.desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="rounded-3xl bg-white border border-brand-border p-8 md:p-12 space-y-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-primary font-heading">Why businesses choose M2P Nexus</h2>
            <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <li key={r.title} className="flex gap-4">
                    <span className="w-10 h-10 rounded-lg bg-brand-secondary/10 text-brand-secondary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-bold text-brand-primary font-heading">{r.title}</h3>
                      <p className="text-sm text-brand-text leading-relaxed">{r.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-brand-primary text-white relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-brand-secondary/50 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading leading-tight">Ready to transform your business?</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Talk to our team about ERPs, billing software, AI automation or technical hiring. Tell us how your business runs today and we will suggest a practical next step.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="bg-white text-brand-primary hover:bg-slate-100 px-7 py-3.5 rounded-lg font-bold shadow-md transition-colors flex items-center justify-center gap-2"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F7A40] text-white hover:bg-[#0B6534] px-7 py-3.5 rounded-lg font-bold shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={links.call}
              className="border border-slate-600 hover:border-slate-400 hover:bg-white/5 text-white px-7 py-3.5 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
