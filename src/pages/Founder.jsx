import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Building2,
  Globe,
  Users,
  Rocket,
  Cpu,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  Laptop,
  Sparkles
} from 'lucide-react';
import Seo from '../components/Seo';
import founderPhoto from '../assets/founder_photo.webp';
import coFounderPhoto from '../assets/co_founder_photo.webp';

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

export default function Founder() {
  const [isMaruthuExpanded, setIsMaruthuExpanded] = useState(false);
  const [isPriyankaExpanded, setIsPriyankaExpanded] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(null);

  // Counter states for Section 6
  const [techYears, setTechYears] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [pillarsCount, setPillarsCount] = useState(0);

  useEffect(() => {
    // Simple counter animation when component mounts
    const duration = 1500;
    const interval = 16; // ~60fps
    const steps = duration / interval;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setTechYears(Math.min(Math.floor((14 / steps) * step), 14));
      setSuccessRate(Math.min(Math.floor((100 / steps) * step), 100));
      setPillarsCount(Math.min(Math.floor((3 / steps) * step), 3));

      if (step >= steps) {
        clearInterval(timer);
        setTechYears(14);
        setSuccessRate(100);
        setPillarsCount(3);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const timelinePoints = [
    {
      year: 'Step 1',
      title: '14+ Years in Technology',
      icon: Code,
      summary: 'Architecting core database pipelines, real-time transaction scripts, and scalable architectures.',
      detail: 'From early days of database optimization to modern React/.NET enterprise frameworks, designing robust operational backbones for heavy industries.'
    },
    {
      year: 'Step 2',
      title: 'Enterprise Software Delivery',
      icon: Building2,
      summary: 'Building custom ERP systems, high-capacity billing systems, and inventory modules.',
      detail: 'Eliminating paper trails and manual ledger errors by deploying custom client interfaces on the manufacturing and agricultural floor.'
    },
    {
      year: 'Step 3',
      title: 'International Experience (Japan)',
      icon: Globe,
      summary: 'Working onsite in Tokyo, aligning with global delivery standards and client systems.',
      detail: 'Gaining critical insights into high-standard software delivery, cross-cultural product positioning, and strict quality control pipelines.'
    },
    {
      year: 'Step 4',
      title: 'Talent & Workforce Expertise',
      icon: Users,
      summary: 'Sourcing, screening, and mentoring engineers to fit active corporate codebases.',
      detail: 'Formulating rigorous coding interview frameworks and custom candidate pre-training bootcamps for seamless day-1 deployment.'
    },
    {
      year: 'Step 5',
      title: 'M2P Nexus Founded',
      icon: Rocket,
      summary: 'Combining deep technology, specialized talent sourcing, and business growth strategy.',
      detail: 'Establishing a cohesive, business-first corporate consulting and automation agency to help enterprises scale sustainably from root to success.'
    }
  ];

  return (
    <>
      <Seo
        title="Meet the Founders - Leadership & Core Vision"
        description="Get to know the founders of M2P Nexus: Maruthu Pandi PT (Founder & Director) and Priyanka (Co-Founder). Discover their journey, vision, and pillars of growth."
      />

      {/* SECTION 1: HERO INTRODUCTION */}
      <section className="relative overflow-hidden bg-brand-primary text-white py-20 md:py-32 text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <motion.div
          initial={false}
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-brand-accent text-xs font-semibold uppercase tracking-widest font-heading"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            Leadership Team
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight"
          >
            Meet The Founders
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-brand-accent font-bold tracking-widest uppercase font-heading"
          >
            Technology. Talent. Transformation.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            At M2P Nexus, we believe sustainable business growth is built on the perfect combination of technology innovation, skilled talent, and strategic execution. Our founding team brings together decades of experience helping organizations solve challenges and unlock new opportunities.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 2: FOUNDERS STORY TIMELINE */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Our Journey</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              Founders Story Timeline
            </h2>
            <p className="text-base text-brand-text">
              The evolution of experience and strategic insights that shaped the foundation of M2P Nexus.
            </p>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Timeline */}
          <div className="relative pt-6">
            {/* Timeline center line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-[62px] left-0 right-0 h-0.5 bg-brand-border z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10 text-left">
              {timelinePoints.map((pt, idx) => {
                const Icon = pt.icon;
                const isActive = activeTimeline === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveTimeline(idx)}
                    onMouseLeave={() => setActiveTimeline(null)}
                    className="relative bg-brand-section border border-brand-border rounded-2xl p-6 transition-all duration-300 hover:border-brand-secondary/40 hover:shadow-md cursor-pointer flex flex-col justify-between min-h-[180px]"
                  >
                    <div className="space-y-4">
                      {/* Timeline dot header */}
                      <div className="flex lg:flex-col items-center lg:items-start justify-between gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white border border-brand-border flex items-center justify-center text-brand-secondary shadow-xs group-hover:bg-brand-secondary transition-colors">
                          <Icon className="w-5 h-5 text-brand-accent" />
                        </div>
                        <span className="text-xs font-bold font-mono text-slate-500 bg-white border border-brand-border px-2.5 py-0.5 rounded-full">
                          {pt.year}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-extrabold text-brand-primary text-base font-heading leading-snug">
                          {pt.title}
                        </h3>
                        <p className="text-xs text-brand-text leading-relaxed">
                          {pt.summary}
                        </p>
                      </div>
                    </div>

                    {/* Expandable detail panel on hover */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-brand-border/60 mt-4 text-[11px] text-brand-secondary leading-relaxed"
                        >
                          {pt.detail}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUNDER SPOTLIGHT CARDS */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-brand-accent-strong uppercase tracking-widest font-heading">Spotlight</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              Our Founding Leadership
            </h2>
            <p className="text-base text-brand-text">
              Meet the directors driving M2P Nexus' technological innovation and workforce excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            {/* LEFT CARD: Maruthu Pandi PT */}
            <div className="bg-white border border-brand-border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="space-y-8">
                {/* Header Profile layout */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-brand-border/60">
                  {/* Floating Avatar Frame */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative shrink-0"
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-brand-section shadow-lg bg-slate-800">
                      <img
                        src={founderPhoto}
                        alt="Maruthu Pandi PT"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-full border border-brand-accent/30 pointer-events-none"></div>
                  </motion.div>

                  {/* Profile Metadata */}
                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-2xl font-extrabold text-brand-primary font-heading">
                      Maruthu Pandi PT
                    </h3>
                    <p className="text-xs text-brand-accent-strong font-semibold tracking-wider uppercase font-heading">
                      Founder & Director
                    </p>
                    <p className="text-xs text-brand-text font-medium pt-2 max-w-sm leading-relaxed">
                      Technology leader with 14+ years of experience in software engineering, enterprise application development, digital transformation, and business technology solutions.
                    </p>
                  </div>
                </div>

                {/* Checkmarked Badges */}
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider font-heading">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      '14+ Years Experience',
                      'Enterprise Solutions',
                      'Digital Transformation',
                      'AI & Automation',
                      'International Client Exposure',
                      'Japan Onsite Experience'
                    ].map((badge, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold bg-brand-section border border-brand-border px-2.5 py-1 rounded-full text-brand-secondary font-heading">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Bullet Highlights */}
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider font-heading">Experience Highlights</h4>
                  <ul className="grid grid-cols-2 gap-3 text-xs font-semibold text-brand-primary">
                    {[
                      'Enterprise Software Development',
                      'Solution Architecture',
                      'AI & Automation',
                      'Business Process Optimization',
                      'Technology Consulting',
                      'Product Strategy'
                    ].map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expandable Accordion Panel */}
              <div className="pt-6 mt-6 border-t border-brand-border/60">
                <button
                  onClick={() => setIsMaruthuExpanded(!isMaruthuExpanded)}
                  className="flex items-center gap-1.5 text-sm font-bold text-brand-secondary hover:text-brand-primary cursor-pointer w-full justify-between"
                >
                  <span>{isMaruthuExpanded ? 'Hide Detailed Expertise' : 'View Detailed Expertise'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMaruthuExpanded ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isMaruthuExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 space-y-3 text-xs text-brand-text leading-relaxed border-t border-brand-section mt-4"
                    >
                      <p>
                        <strong>Custom System Design:</strong> Architected complete database normalization structures to prevent inventory discrepancies and data leaks. Specialize in connecting weighing scales, transport meters, and billing pipelines to centralized databases.
                      </p>
                      <p>
                        <strong>Global Delivery Standards:</strong> Worked onsite with clients in Tokyo, Japan, absorbing strict international coding compliance rules, clean architecture patterns, and structured delivery schedules.
                      </p>
                      <p>
                        <strong>AI & Operations:</strong> Deployed OpenAI LLM pipelines to automatically digest raw receipt logs and write daily inventory reports, saving teams hours of manual administrative compilation.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT CARD: Priyanka */}
            <div className="bg-white border border-brand-border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="space-y-8">
                {/* Header Profile layout */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-brand-border/60">
                  {/* Floating Avatar Frame */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="relative shrink-0"
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-brand-section shadow-lg bg-slate-800 flex items-center justify-center">
                      <img
                        src={coFounderPhoto}
                        alt="Priyanka M"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-full border border-brand-accent/30 pointer-events-none"></div>
                  </motion.div>

                  {/* Profile Metadata */}
                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-2xl font-extrabold text-brand-primary font-heading">
                      Priyanka M
                    </h3>
                    <p className="text-xs text-brand-accent-strong font-semibold tracking-wider uppercase font-heading">
                      Co-Founder
                    </p>
                    <p className="text-xs text-brand-text font-medium pt-2 max-w-sm leading-relaxed">
                      Specialist in talent acquisition, workforce solutions, recruitment strategy, client engagement, and business relationship management.
                    </p>
                  </div>
                </div>

                {/* Checkmarked Badges */}
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider font-heading">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Talent Acquisition',
                      'Recruitment Services',
                      'Workforce Solutions',
                      'Client Engagement',
                      'Business Development',
                      'Client Acquisition'
                    ].map((badge, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold bg-brand-section border border-brand-border px-2.5 py-1 rounded-full text-brand-secondary font-heading">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Bullet Highlights */}
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold uppercase text-slate-500 tracking-wider font-heading">Experience Highlights</h4>
                  <ul className="grid grid-cols-2 gap-3 text-xs font-semibold text-brand-primary">
                    {[
                      'Recruitment Strategy',
                      'Workforce Planning',
                      'Business Development',
                      'Client Relations',
                      'Hiring Support',
                      'Organizational Growth'
                    ].map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Expandable Accordion Panel */}
              <div className="pt-6 mt-6 border-t border-brand-border/60">
                <button
                  onClick={() => setIsPriyankaExpanded(!isPriyankaExpanded)}
                  className="flex items-center gap-1.5 text-sm font-bold text-brand-secondary hover:text-brand-primary cursor-pointer w-full justify-between"
                >
                  <span>{isPriyankaExpanded ? 'Hide Detailed Expertise' : 'View Detailed Expertise'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPriyankaExpanded ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isPriyankaExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 space-y-3 text-xs text-brand-text leading-relaxed border-t border-brand-section mt-4"
                    >
                      <p>
                        <strong>Specialized Team Placement:</strong> Led sourcing loops targeting specific React, Node.js, .NET, and Python stacks. Matching engineering candidates with corporate codebases to reduce initial onboarding Friction.
                      </p>
                      <p>
                        <strong>Client Success Integration:</strong> Spearheading the recruitment pipeline audits to establish custom code challenges, vetting interview templates, and retention frameworks.
                      </p>
                      <p>
                        <strong>Partnership Management:</strong> Aligning company objectives with long-term strategic support, providing ongoing advisory to startups and growing SMEs to build capable development teams.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOUNDERS TOGETHER */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy block */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Synergy</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
                Stronger Together
              </h2>
              <p className="text-base text-brand-text leading-relaxed">
                M2P Nexus was founded on the belief that business success requires more than technology alone. By combining deep technical expertise with talent and workforce solutions, we help organizations build stronger foundations for long-term growth.
              </p>
              <div className="border-t border-brand-border pt-4">
                <span className="font-heading font-bold text-brand-accent-strong tracking-widest uppercase text-xs">
                  வேரிலிருந்து வெற்றிவரை
                </span>
              </div>
            </div>

            {/* Right Connection Schematic */}
            <div className="lg:col-span-6 bg-brand-section border border-brand-border rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none"></div>

              {/* Animated Schematic Grid */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-12 pt-4">
                {/* Node 1: Tech */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border border-brand-border rounded-full flex items-center justify-center text-brand-secondary shadow-md hover:scale-105 transition-transform">
                    <Laptop className="w-6 h-6 text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold font-heading text-brand-primary mt-2">Technology</span>
                </div>

                <div className="text-brand-accent-strong font-bold text-xl select-none shrink-0">+</div>

                {/* Node 2: People */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border border-brand-border rounded-full flex items-center justify-center text-brand-secondary shadow-md hover:scale-105 transition-transform">
                    <Users className="w-6 h-6 text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold font-heading text-brand-primary mt-2">People</span>
                </div>

                <div className="text-brand-accent-strong font-bold text-xl select-none shrink-0">+</div>

                {/* Node 3: Growth */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border border-brand-border rounded-full flex items-center justify-center text-brand-secondary shadow-md hover:scale-105 transition-transform">
                    <TrendingUp className="w-6 h-6 text-brand-accent" />
                  </div>
                  <span className="text-xs font-bold font-heading text-brand-primary mt-2">Growth</span>
                </div>
              </div>

              {/* Connections indicator */}
              <div className="w-full flex justify-center items-center py-6">
                <div className="h-0.5 w-16 bg-brand-accent animate-pulse"></div>
                <div className="text-xs font-extrabold text-brand-accent-strong tracking-widest uppercase font-heading px-2">Equals</div>
                <div className="h-0.5 w-16 bg-brand-accent animate-pulse"></div>
              </div>

              {/* Final unified node */}
              <div className="relative z-10 w-28 py-3 bg-brand-primary text-white border border-slate-700 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <span className="text-sm font-extrabold tracking-wider font-heading uppercase text-brand-accent block">
                  M2P Nexus
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold block mt-0.5">
                  Unified Core
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EXPERTISE MATRIX */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Core Competence</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              How We Help Organizations Grow
            </h2>
            <p className="text-base text-brand-text">
              Our structured service pillars combine technological integration, staffing solutions, and growth consultancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white border border-brand-border p-8 rounded-2xl flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-brand-section border border-brand-border rounded-xl flex items-center justify-center text-brand-secondary shadow-xs group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                  <Cpu className="w-7 h-7 text-brand-accent" />
                </div>
                <div className="text-left space-y-2">
                  <h3 className="text-lg font-bold text-brand-primary font-heading">Technology</h3>
                  <p className="text-xs text-brand-text leading-relaxed">
                    Custom software engineering and automated pipeline integrations modeled directly on your floor operations.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 pt-6 border-t border-brand-border mt-6 text-left text-xs font-semibold text-brand-primary">
                {[
                  'Custom Software Development',
                  'Web Applications',
                  'AI Solutions',
                  'Automation',
                  'Digital Transformation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-brand-border p-8 rounded-2xl flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-brand-section border border-brand-border rounded-xl flex items-center justify-center text-brand-secondary shadow-xs group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                  <Users className="w-7 h-7 text-brand-accent" />
                </div>
                <div className="text-left space-y-2">
                  <h3 className="text-lg font-bold text-brand-primary font-heading">Talent</h3>
                  <p className="text-xs text-brand-text leading-relaxed">
                    Recruitment processes and custom coding bootcamps aligning candidates to match your tech stack.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 pt-6 border-t border-brand-border mt-6 text-left text-xs font-semibold text-brand-primary">
                {[
                  'Recruitment Services',
                  'Talent Acquisition',
                  'Workforce Solutions',
                  'Hiring Support',
                  'Team Building'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-brand-border p-8 rounded-2xl flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-brand-section border border-brand-border rounded-xl flex items-center justify-center text-brand-secondary shadow-xs group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                  <TrendingUp className="w-7 h-7 text-brand-accent" />
                </div>
                <div className="text-left space-y-2">
                  <h3 className="text-lg font-bold text-brand-primary font-heading">Growth</h3>
                  <p className="text-xs text-brand-text leading-relaxed">
                    Acquisition support, go-to-market packages, and strategic process consulting to boost operations yield.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 pt-6 border-t border-brand-border mt-6 text-left text-xs font-semibold text-brand-primary">
                {[
                  'Client Acquisition Support',
                  'Business Development',
                  'Process Improvement',
                  'Strategic Consulting',
                  'Startup Enablement'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SHARED VISION */}
      <section className="bg-brand-primary text-white py-20 md:py-28 relative overflow-hidden text-center">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">The Future</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">Our Shared Vision</h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Businesses grow faster when technology, talent, and strategy work together. Our mission is to help organizations innovate, build capable teams, streamline operations, and achieve sustainable growth.
            </p>
          </div>

          {/* Animated Statistics Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-y border-slate-800 py-10 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-brand-accent font-heading font-mono select-none">
                {techYears}+
              </div>
              <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 font-heading">
                Years of Tech Experience
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-brand-accent font-heading font-mono select-none">
                {successRate}%
              </div>
              <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 font-heading">
                Commitment to Success
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-extrabold text-brand-accent font-heading font-mono select-none">
                {pillarsCount}
              </div>
              <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 font-heading">
                Integrated Growth Pillars
              </p>
            </div>
          </div>

          {/* Final Tagline and Brand Signature */}
          <div className="space-y-4 pt-4">
            <div className="text-lg md:text-xl font-bold tracking-widest text-slate-400 uppercase font-heading">
              Technology. Talent. Transformation.
            </div>
            
            {/* Glowing Brand Visual */}
            <div className="inline-block relative">
              <span className="text-2xl md:text-3xl font-extrabold font-heading uppercase tracking-widest text-brand-accent select-none drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse">
                M2P Nexus
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
