import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  Star,
  ShieldCheck,
  Zap,
  Users,
  ChevronLeft,
  ChevronRight,
  Quote,
  Pause,
  Play
} from 'lucide-react';
import Seo from '../components/Seo';

// Client avatars
import clientAvatar1 from '../assets/client_avatar_1.webp';
import clientAvatar2 from '../assets/client_avatar_2.webp';
import clientAvatar3 from '../assets/client_avatar_3.webp';

// Client testimonials and the rating/audit block are hidden until every quote, name, photo and score is
// real and the client has given written permission to publish it. Unverified reviews and ratings count as
// misleading advertising (India: Consumer Protection Act 2019 / CCPA guidelines; US: FTC fake-review rule;
// EU: Unfair Commercial Practices Directive). Replace the data below with real, consented entries, then set
// this to true.
const SHOW_CLIENT_REVIEWS = false;

// Seconds between automatic testimonial slides (WCAG 2.2.2 also needs the pause button below).
const AUTOPLAY_MS = 6000;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Industries() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Explicit pause from the Pause/Play button; hover and focus pauses are temporary.
  const [isStopped, setIsStopped] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Managing Director',
      company: 'Balaji Steel Rolling Mills',
      quote: 'M2P Nexus completely automated our steel scrap registry and logistics loop. We cut down inventory discrepancy to near zero and streamlined our GST receipts.',
      image: clientAvatar1,
      rating: 5,
      industry: 'Manufacturing & Steel',
      outcome: 'Zero Inventory Leakage'
    },
    {
      id: 2,
      name: 'M. Karthikeyan',
      role: 'Proprietor',
      company: 'Karthik Traders',
      quote: 'Their bilingual offline-first billing client runs flawlessly. Even during internet outages, our retail sales continue uninterrupted, and billing is incredibly fast.',
      image: clientAvatar2,
      rating: 5,
      industry: 'Retail & Wholesale',
      outcome: '100% Offline Redundancy'
    },
    {
      id: 3,
      name: 'S. Pandian',
      role: 'Founder',
      company: 'Pandian Agro Trading Co.',
      quote: 'Their custom weighing-bridge integration and digital commissions bookkeeping saved us lakhs in manual tracking errors during harvest seasons.',
      image: clientAvatar3,
      rating: 5,
      industry: 'Agribusiness & Trade',
      outcome: 'Lakhs Saved Seasonally'
    },
    {
      id: 4,
      name: 'Venkatesh Prabhu',
      role: 'Operations Head',
      company: 'KMS Infra & Logistics',
      quote: 'The automated logistics ledger ingestion reduced our admin processing hours from 25 hours a week down to under 30 minutes with 99.4% parsing accuracy.',
      image: clientAvatar1,
      rating: 5,
      industry: 'Logistics & Fleet',
      outcome: '95% Admin Time Saved'
    },
    {
      id: 5,
      name: 'Ananthakrishnan',
      role: 'CEO & Founder',
      company: 'Yuva Textiles & Exports',
      quote: 'Replaced all traditional billing registers with an intuitive POS and stock management dashboard. Billing speed improved by over 70% during peak hours.',
      image: clientAvatar2,
      rating: 5,
      industry: 'Textiles & Apparel',
      outcome: '70% Faster POS Checkout'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance, pausing on hover, keyboard focus, touch, the Pause button, or reduced-motion preference.
  useEffect(() => {
    if (!SHOW_CLIENT_REVIEWS || isPaused || isStopped) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [isPaused, isStopped, testimonials.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const getCardStyle = (idx) => {
    const total = testimonials.length;
    let diff = idx - activeIndex;

    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    if (diff === 0) {
      return {
        transform: 'perspective(1000px) translateX(0px) scale(1) rotateY(0deg) translateZ(0px)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
        pointerEvents: 'auto',
        cursor: 'default'
      };
    }

    if (diff === -1) {
      return {
        transform: 'perspective(1000px) translateX(-68%) scale(0.82) rotateY(26deg) translateZ(-60px)',
        zIndex: 20,
        opacity: 0.75,
        filter: 'brightness(0.9)',
        pointerEvents: 'auto',
        cursor: 'pointer'
      };
    }

    if (diff === 1) {
      return {
        transform: 'perspective(1000px) translateX(68%) scale(0.82) rotateY(-26deg) translateZ(-60px)',
        zIndex: 20,
        opacity: 0.75,
        filter: 'brightness(0.9)',
        pointerEvents: 'auto',
        cursor: 'pointer'
      };
    }

    if (diff === -2) {
      return {
        transform: 'perspective(1000px) translateX(-120%) scale(0.66) rotateY(40deg) translateZ(-140px)',
        zIndex: 10,
        opacity: 0.35,
        filter: 'brightness(0.8)',
        pointerEvents: 'auto',
        cursor: 'pointer'
      };
    }

    if (diff === 2) {
      return {
        transform: 'perspective(1000px) translateX(120%) scale(0.66) rotateY(-40deg) translateZ(-140px)',
        zIndex: 10,
        opacity: 0.35,
        filter: 'brightness(0.8)',
        pointerEvents: 'auto',
        cursor: 'pointer'
      };
    }

    return {
      transform: diff < 0
        ? 'perspective(1000px) translateX(-160%) scale(0.5) rotateY(45deg)'
        : 'perspective(1000px) translateX(160%) scale(0.5) rotateY(-45deg)',
      zIndex: 0,
      opacity: 0,
      pointerEvents: 'none'
    };
  };

  const industriesList = [
    {
      index: '01',
      title: 'Manufacturing',
      challenge: 'Manual stock calculations and scrap tracking lead to raw material leakages and delayed billing records.',
      solution: 'Deploy custom material registries and batch-tracking dashboards configured for the factory floor.',
      impact: 'Achieved near-zero inventory discrepancies with automated scrap reconciliation.',
      metricValue: '-99.8%',
      metricLabel: 'Inventory Error Rate'
    },
    {
      index: '02',
      title: 'Construction',
      challenge: 'Vulnerable spreadsheet tracking of sand, steel, cement deliveries, and sub-contractor accounts.',
      solution: 'A secure cloud database application tracking logistics, material weights, and billing vouchers.',
      impact: 'Complete elimination of double billing and material shipping discrepancies.',
      metricValue: '100%',
      metricLabel: 'Audit Compliance'
    },
    {
      index: '03',
      title: 'Agriculture',
      challenge: 'Fluctuating batch prices, commission tracking, and logistics coordinating for bulk traders.',
      solution: 'A targeted agribusiness ERP tracking batch weights, driver logs, commissions, and farmer invoices.',
      impact: 'Accelerated post-harvest payment loops, ensuring immediate settlements for bulk traders.',
      metricValue: '35%',
      metricLabel: 'Faster Settlements'
    },
    {
      index: '04',
      title: 'Startups & SMEs',
      challenge: 'Bloated software quotes, long wait times, and failure to establish a digital authority.',
      solution: 'Rapid, cost-effective MVP development, sleek SEO websites, and flexible cloud systems.',
      impact: 'Delivered production-ready MVPs within weeks instead of months, accelerating customer feedback.',
      metricValue: '3x',
      metricLabel: 'Time-to-Market Speed'
    },
    {
      index: '05',
      title: 'EdTech',
      challenge: 'Siloed student records, manually compiled marks, and expensive, hard-to-use learning platforms.',
      solution: 'Lightweight cloud portals for central student tracking, automated GPA compilation, and parent notifications.',
      impact: 'Automated grades and attendance reporting, eliminating manual compilation workflows.',
      metricValue: '92%',
      metricLabel: 'Admin Overhead Saved'
    },
    {
      index: '06',
      title: 'Logistics',
      challenge: 'Uncoordinated driver logs, vehicle maintenance tracking, and fuel billing discrepancies.',
      solution: 'Deploy cloud transport portals tracking mileage, driver sheets, load counts, and maintenance dates.',
      impact: 'Mitigated fuel billing discrepancies using digital odometer verification and trip matching.',
      metricValue: '15%',
      metricLabel: 'Fuel Costs Saved'
    }
  ];

  const reviewBreakdown = [
    { label: 'Engineering & Reliability', score: '4.9/5', desc: 'Robust databases and offline redundancy.', icon: ShieldCheck },
    { label: 'GST & Local Compliance', score: '5.0/5', desc: 'Accurate bilingual billing and ledger logic.', icon: Check },
    { label: 'User Adoption & Speed', score: '4.8/5', desc: 'Bilingual user flows tailored for operators.', icon: Zap },
    { label: 'Hypercare & Support', score: '4.9/5', desc: 'Direct access to architects post-launch.', icon: Users }
  ];

  return (
    <>
      <Seo
        title="Industries We Serve"
        description="Explore the industries M2P Nexus works in - manufacturing, agribusiness, retail, logistics and more - with the challenges we solve and the impact delivered."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading"
          >
            Our Worked Industries
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the sectors we have modernized and read verified feedback from business leaders we support.
          </motion.p>
        </motion.div>
      </section>

      {/* Industry Horizontal Blocks Section */}
      <section className="py-24 md:py-32 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="space-y-6 mb-20 md:mb-28 text-left max-w-4xl">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">
              Worked Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-primary tracking-tight font-heading leading-tight">
              Tailored Integrations &amp; <br />
              <span className="font-semibold text-brand-secondary">Business Impact.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-text font-light leading-relaxed max-w-2xl">
              A precise analysis of operational bottlenecks and the custom digital resolutions deployed across core industries.
            </p>
          </div>

          {/* Horizontal Storytelling Rows */}
          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {industriesList.map((ind, idx) => {
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-baseline first:pt-16 last:pb-0"
                >
                  {/* Column 1: Industry */}
                  <div className="lg:col-span-2 md:col-span-2 space-y-1">
                    <span className="font-mono text-[10px] text-slate-400 font-semibold tracking-wider block leading-none mb-1">
                      {ind.index} /
                    </span>
                    <h3 className="text-lg font-bold text-brand-primary tracking-tight font-heading uppercase">
                      {ind.title}
                    </h3>
                  </div>

                  {/* Column 2: Challenge */}
                  <div className="lg:col-span-3 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-heading block">
                      Challenge
                    </span>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {ind.challenge}
                    </p>
                  </div>

                  {/* Column 3: Solution */}
                  <div className="lg:col-span-3 space-y-2">
                    <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest font-heading block">
                      Solution
                    </span>
                    <p className="text-slate-900 text-sm font-normal leading-relaxed">
                      {ind.solution}
                    </p>
                  </div>

                  {/* Column 4: Business Impact */}
                  <div className="lg:col-span-2 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-heading block">
                      Business Impact
                    </span>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {ind.impact}
                    </p>
                  </div>

                  {/* Column 5: KPI Metric */}
                  <div className="lg:col-span-2 text-left lg:text-right space-y-1 self-start lg:self-auto">
                    <div className="text-4xl md:text-5xl font-extralight text-brand-secondary tracking-tight font-heading leading-none">
                      {ind.metricValue}
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      {ind.metricLabel}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {SHOW_CLIENT_REVIEWS && (
      <>
      {/* Client Testimonials 3D Coverflow Section */}
      <section aria-roledescription="carousel" aria-label="Client testimonials" className="py-16 md:py-24 bg-brand-section border-b border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Feedback from Business Owners
            </h2>
            <p className="text-base text-brand-text">
              Real reviews from manufacturing directors, agribusiness founders, and retailers we support.
            </p>
          </div>

          {/* 3D Coverflow Carousel Container */}
          <div
            className="relative w-full max-w-5xl mx-auto py-4 min-h-[440px] sm:min-h-[470px] flex items-center justify-center overflow-hidden [perspective:1000px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            aria-live={isPaused || isStopped ? 'polite' : 'off'}
            onTouchStart={(e) => {
              setIsPaused(true);
              handleTouchStart(e);
            }}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => {
              handleTouchEnd();
              setIsPaused(false);
            }}
          >
            <div className="relative w-full h-[390px] sm:h-[420px] flex items-center justify-center [transform-style:preserve-3d]">
              {testimonials.map((t, idx) => {
                const style = getCardStyle(idx);
                const isActive = idx === activeIndex;

                return (
                  <div
                    key={t.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${idx + 1} of ${testimonials.length}`}
                    aria-hidden={!isActive}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      ...style,
                      transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                    }}
                    className={`absolute w-[280px] sm:w-[340px] md:w-[370px] h-[380px] sm:h-[410px] bg-gradient-to-b from-white via-white to-slate-50 border ${
                      isActive
                        ? 'border-brand-secondary shadow-2xl shadow-brand-primary/20 ring-1 ring-brand-secondary/20'
                        : 'border-slate-200/80 shadow-lg hover:border-slate-300'
                    } rounded-3xl p-6 sm:p-7 flex flex-col justify-between select-none transform-gpu text-left transition-all duration-500`}
                  >
                    {/* Upper Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2.5 py-0.5 rounded-full font-heading">
                        {t.industry}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Content */}
                    <div className="my-auto py-3 space-y-2.5">
                      <Quote className="w-7 h-7 text-brand-secondary/25 shrink-0" />
                      <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed font-normal">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Footer Info */}
                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-brand-secondary/80 shadow-xs shrink-0">
                          <img src={t.image} alt="" width="44" height="44" loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-brand-primary text-sm font-heading leading-snug truncate">{t.name}</h4>
                          <p className="text-[11px] text-slate-500 font-medium truncate">{t.role}, <span className="text-brand-secondary font-semibold">{t.company}</span></p>
                        </div>
                      </div>

                      <div className="bg-emerald-50/80 border border-emerald-200/60 rounded-xl px-3 py-1 flex items-center justify-between text-[10px]">
                        <span className="text-emerald-700 font-bold uppercase tracking-wider font-heading">Proven Outcome</span>
                        <span className="text-emerald-800 font-bold font-mono">{t.outcome}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Item Title Display (Below coverflow, matching image) */}
          <div className="text-center -mt-2">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
              {testimonials[activeIndex].company}
            </h3>
            <p className="text-xs text-slate-500 font-medium pt-0.5">
              {testimonials[activeIndex].name} — {testimonials[activeIndex].role}
            </p>
          </div>

          {/* Bottom Control Bar (Pill with Arrows + Dots, matching reference image) */}
          <div className="flex justify-center pt-1">
            <div className="bg-white border border-slate-200 shadow-md rounded-full px-4 py-2 inline-flex items-center gap-4">
              {/* Left Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:text-brand-primary hover:bg-slate-100 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Pagination Dots with Active Pill */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === activeIndex ? 'true' : undefined}
                    className={`transition-all duration-300 cursor-pointer ${
                      i === activeIndex
                        ? 'w-7 h-2.5 bg-slate-800 rounded-full'
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full'
                    }`}
                  />
                ))}
              </div>

              {/* Pause / Play */}
              <button
                type="button"
                onClick={() => setIsStopped((s) => !s)}
                aria-label={isStopped ? 'Play testimonials' : 'Pause testimonials'}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:text-brand-primary hover:bg-slate-100 transition-all cursor-pointer"
              >
                {isStopped ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:text-brand-primary hover:bg-slate-100 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Review / Feedbacks Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Overall Rating Score */}
            <div className="lg:col-span-5 bg-brand-section border border-brand-border p-8 rounded-2xl text-center space-y-6 shadow-xs">
              <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Performance Rating</span>
              <div className="space-y-2">
                <div className="text-6xl font-extrabold text-brand-primary font-heading">4.9</div>
                <div className="flex justify-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-brand-text font-medium">Verified average across 50+ business modules</p>
              </div>

              <div className="border-t border-brand-border pt-4">
                <p className="text-xs text-brand-secondary italic">
                  "Our design philosophy is anchored in operational safety and zero-training adoption, translating directly into high ratings."
                </p>
              </div>
            </div>

            {/* Right Column: Breakdown */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
                  Review Breakdown &amp; Audit Scores
                </h2>
                <p className="text-sm text-brand-text">
                  How we score on third-party reviews and independent software architecture audits:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reviewBreakdown.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-brand-section border border-brand-border p-5 rounded-lg flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-secondary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-brand-primary text-sm font-heading leading-snug">{item.label}</h4>
                          <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{item.score}</span>
                        </div>
                        <p className="text-xs text-brand-text leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
      )}

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Need custom tech integration for your sector?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Discuss your system constraints directly with our tech director. Get custom weighbridge, logistics, billing, or ERP audits.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block bg-brand-secondary text-white hover:bg-slate-800 border border-slate-700 px-8 py-3 rounded-md text-sm font-semibold transition-colors"
            >
              Consult with our Architect
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
