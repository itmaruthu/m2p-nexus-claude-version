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
  Phone,
  Mail,
  Cpu
} from 'lucide-react';

import StatCounter from '../components/StatCounter';
import Seo from '../components/Seo';
import { links } from '../config/site';
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

export default function Home() {
  const emailUrl = "mailto:hello@m2pnexus.com?subject=Business%20Enquiry%20from%20Website";

  // Data mapping

  const solutionsWeProvide = [
    { title: 'Technology Solutions', desc: 'Custom enterprise software, ERP developments, high-traffic billing software, and custom business portals built with modern architectures.', icon: Laptop, link: '/services' },
    { title: 'AI Solutions', desc: 'Integrate artificial intelligence, automated reporting pipelines, predictive business analytics, and machine learning systems into daily workflows.', icon: Brain, link: '/services' },
    { title: 'Workforce Solutions', desc: 'Bridge staffing gaps with highly qualified talent, expert technical screening, and corporate onboarding programs for rapid team expansion.', icon: Users, link: '/services' },
    { title: 'Business Growth Solutions', desc: 'Drive product positioning, digital presence, strategic growth consultancy, and comprehensive tech transformation strategies.', icon: TrendingUp, link: '/services' }
  ];

  const featuredSolutions = [
    { title: 'Tamil Billing Software', industry: 'Retail & Agribusiness', problem: 'Local traders struggle with complex English billing tools.', tech: 'React, Node.js, Tailwind CSS', desc: 'Highly intuitive bilingual (Tamil/English) billing system supporting GST compliance, offline functionality, and fast checkout.' },
    { title: 'Steel Industry ERP', industry: 'Heavy Manufacturing', problem: 'Fragmented inventory trackers lead to raw material discrepancies.', tech: 'React, .NET Core, SQL Server', desc: 'Comprehensive resource planner managing raw materials, scrap calculations, logistics, client accounts, and employee schedules.' },
    { title: 'Coconut Trader ERP', industry: 'Agribusiness & Trade', problem: 'Manual recording of bulk weight, transport logistics, and farmer pay.', tech: 'React, Node.js, MongoDB', desc: 'Targeted agricultural commerce system optimizing logistics tracking, batch weights, regional pricing engines, and commission charts.' },
    { title: 'Business Websites', industry: 'Corporate & SMEs', problem: 'Weak digital footprint and low authority online.', tech: 'Next.js, Tailwind CSS', desc: 'Premium, conversion-optimized corporate web systems built for maximum SEO rankings, fast load speeds, and professional branding.' },
    { title: 'AI Business Automation', industry: 'Enterprise Operations', problem: 'Expensive labor spent on repetitive data compilation and analytics.', tech: 'Python, OpenAI API, LangChain', desc: 'Custom automation agents that analyze operational logs, generate daily summaries, compile invoices, and draft client communications.' }
  ];


  return (
    <>
      <Seo
        title="Digital Solutions & AI Consulting"
        description="Empowering enterprises, SMEs, and traders through custom software, Steel & Coconut ERPs, AI-driven automation, and workforce solutions. Modernizing tradition from root to success."
      />

      {/* SECTION 1: Hero */}
      <section className="relative overflow-hidden bg-white border-b border-brand-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Content */}
            {/* initial={false}: hero is visible in the pre-rendered HTML, not faded in after JavaScript loads. */}
            <motion.div
              initial={false}
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-section border border-brand-border rounded-full text-brand-secondary text-xs font-semibold uppercase tracking-wider font-heading">
                <span>M2P Nexus</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                <span>Corporate Technology Partner</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-primary leading-tight font-heading">
                Digital Solutions That Help Businesses Grow
              </h1>
              <div className="space-y-2 border-l-4 border-brand-accent pl-4 py-1">
                <p className="text-xl font-bold text-brand-secondary font-heading">
                  Modernizing Tradition. Empowering Communities. Driving Innovation.
                </p>
                <p className="text-lg font-bold text-brand-accent-strong tracking-widest uppercase font-heading">
                  வேரிலிருந்து வெற்றிவரை
                </p>
              </div>
              <p className="text-lg text-brand-text max-w-xl leading-relaxed">
                Bridging the gap between traditional businesses and modern technology through AI-powered solutions, workforce excellence, and digital transformation. We help you scale from the root up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-brand-secondary text-white hover:bg-brand-primary font-bold px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
                >
                  Request Consultation
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 font-bold px-8 py-3.5 rounded-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Right: Founder Photo */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-brand-section group">
                <img
                  src={founderPhoto}
                  alt="Maruthu Pandi PT - Founder & Director of M2P Nexus"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="text-lg font-bold font-heading">Maruthu Pandi PT</p>
                  <p className="text-xs text-brand-accent font-semibold tracking-wider font-heading">Founder & Director</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-accent rounded-lg -z-10 opacity-30 blur-xs"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-secondary rounded-lg -z-10 opacity-10 blur-xs"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Trust Bar */}
      <section className="py-12 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCounter target={50} suffix="+" label="Projects Delivered" />
            <StatCounter target={9} suffix="+" label="Industries Served" />
            <StatCounter target={5} suffix="+" label="ERP Systems Built" />
          </div>
        </div>
      </section>

      {/* SECTION 3: Solutions We Provide */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Solutions We Provide
            </h2>
            <p className="text-lg text-brand-text">
              Our core capabilities cover the full technological spectrum needed to scale and manage modern companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {solutionsWeProvide.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-section border border-brand-border p-8 rounded-lg hover:border-brand-accent/50 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-white border border-brand-border rounded-lg flex items-center justify-center text-brand-secondary shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-primary font-heading">{sol.title}</h3>
                    <p className="text-base text-brand-text leading-relaxed">{sol.desc}</p>
                  </div>
                  <Link
                    to={sol.link}
                    className="mt-6 text-sm font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1 w-fit"
                  >
                    Learn more details <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Featured Solutions */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Featured Solutions
            </h2>
            <p className="text-lg text-brand-text">
              Highly specialized systems engineered by M2P Nexus to solve specific regional and industrial operational problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-left">
            {featuredSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-semibold text-brand-accent-strong bg-brand-accent/10 px-2.5 py-1 rounded-full font-heading">
                      {sol.industry}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      SYS-{idx + 101}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary font-heading">{sol.title}</h3>
                  <div className="space-y-2 text-sm leading-relaxed">
                    <p className="text-brand-text"><strong className="text-brand-primary">Blocker:</strong> {sol.problem}</p>
                    <p className="text-brand-text">{sol.desc}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-border">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-slate-500 font-medium">{sol.tech}</span>
                    <Link to="/portfolio" className="text-brand-secondary font-bold hover:underline flex items-center gap-0.5">
                      Case details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Industries We Serve — Bento Grid 2.0 */}
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
                All case studies <ChevronRight className="w-4 h-4" />
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
              <div className="relative z-10 mt-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex-1 flex flex-col justify-between font-mono text-[11px] text-slate-400 min-h-[160px]">
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
              <div className="mt-4 space-y-2">
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
              <div className="mt-4 space-y-2 font-mono">
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
                <div className="bg-slate-950 rounded-xl p-3 flex-1 font-mono text-[9px] text-slate-400 border border-slate-800 w-full sm:max-w-[240px] shrink-0 self-center">
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
              <div className="mt-4 space-y-2">
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
              <div className="mt-4 bg-slate-50 border border-slate-100 rounded-xl p-2 flex flex-col justify-center items-center relative overflow-hidden min-h-[50px]">
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
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex-1 flex flex-col justify-between font-mono text-[9px] text-slate-600 w-full sm:max-w-[240px] shrink-0 self-center">
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
              <div className="flex-1 flex flex-col md:flex-row gap-4 items-center w-full lg:w-auto">
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


      {/* SECTION 6: Why Choose M2P Nexus */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Why Choose M2P Nexus
            </h2>
            <p className="text-lg text-brand-text">
              We combine enterprise expertise with a regional understanding to deliver high-yield partnership experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Business First Thinking', desc: 'We do not build technology for technology’s sake. Our architectures are modeled strictly around your operations to protect your capital and generate tangible cashflow efficiency.', icon: ShieldCheck },
              { title: 'Deep Technology Expertise', desc: 'With a foundation across .NET, Node.js, React, and Python, we build high-capacity databases and custom ERPs that support critical daily manufacturing pipelines.', icon: Laptop },
              { title: 'Startup & SME Friendly', desc: 'No bloated enterprise billing or lengthy sales loops. We deliver rapid, cost-effective deployments tailored for SMEs and agile startup frameworks.', icon: Rocket },
              { title: 'AI Innovation', desc: 'We help you stay ahead by implementing custom AI models, neural indexing, and operational report automation, unlocking insights hidden in logs.', icon: Brain },
              { title: 'Regional Understanding', desc: 'We understand local languages and regional trade dynamics, enabling us to build bilingual software (Tamil/English) that workforce teams adopt effortlessly.', icon: Users },
              { title: 'Long-Term Partnership', desc: 'We do not believe in transactional consultancies. M2P Nexus acts as your virtual CTO, supporting and scaling with your enterprise as your business expands.', icon: ShieldCheck }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-section border border-brand-border p-8 rounded-lg hover:border-brand-secondary/40 transition-colors space-y-4"
                >
                  <div className="w-12 h-12 bg-white border border-brand-border rounded flex items-center justify-center text-brand-secondary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary font-heading">{item.title}</h3>
                  <p className="text-sm text-brand-text leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: Call To Action */}
      <section className="bg-brand-primary text-white py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/40 to-transparent pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discuss your requirements directly with our technology team. Get custom consultations for steel ERPs, billing applications, AI automation, or technical talent recruitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="tel:+919944283316"
              className="bg-brand-secondary text-white hover:bg-slate-800 border border-slate-700 px-8 py-3.5 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-brand-accent" />
              Call Now
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F7A40] text-white hover:bg-[#0B6534] px-8 py-3.5 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href={emailUrl}
              className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white px-8 py-3.5 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-brand-accent" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
