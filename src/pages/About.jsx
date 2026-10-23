import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Eye,
  Target,
  Sparkles,
  HeartHandshake,
  Factory,
  Building2,
  Leaf,
  ShoppingBag,
  GraduationCap,
  Truck,
  Rocket,
  Settings,
  FileSpreadsheet,
  Layers,
  Zap,
  Users2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import Seo from '../components/Seo';
import { links } from '../config/site';

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

export default function About() {

  const coreValues = [
    { title: 'Trust & Integrity', desc: 'We guard client operational secrets and deliver completely transparent software architectures with no hidden maintenance clauses.', icon: Shield },
    { title: 'Business-First Mentality', desc: 'We do not sell technological jargon. We construct solutions strictly designed to protect capital and boost cashflow efficiency.', icon: Target },
    { title: 'Engineering Excellence', desc: 'From database normalization to API caching, our software is built to handle heavy transactional logs without breakdown.', icon: Sparkles },
    { title: 'Regional Empowerment', desc: 'We design localized systems in regional languages, ensuring that non-technical workforces adopt software immediately.', icon: HeartHandshake }
  ];

  const whoWeHelp = [
    { title: 'Manufacturers', desc: 'Streamlining factory floors, production schedules, and automated reporting systems.', icon: Factory },
    { title: 'Construction Companies', desc: 'Deploying heavy-duty resource planner tracking, job cost calculation, and vendor bill workflows.', icon: Building2 },
    { title: 'Agribusinesses', desc: 'Empowering regional agribusiness and agricultural trading through custom operations ERPs.', icon: Leaf },
    { title: 'Startups & SMEs', desc: 'Accelerating growth and product launches with rapid MVP development and robust tech foundations.', icon: Rocket },
    { title: 'EDTECH Providers', desc: 'Enabling interactive cloud platforms, digital administration, and automated learning systems.', icon: GraduationCap },
    { title: 'Logistics Operators', desc: 'Integrating high-speed supply chain logistics, fleet logs, and digital dispatch.', icon: Truck },
    { title: 'Retailers & Traders', desc: 'Integrating high-speed point of sale systems, inventory, and digital billing interfaces.', icon: ShoppingBag },
    { title: 'IT & Technology', desc: 'Providing custom API integrations, offshore engineering delivery teams, and strategic tech staffing.', icon: Cpu }
  ];

  const problemsWeSolve = [
    { title: 'Manual Processes', desc: 'Eliminate human errors and operational delays by automating administrative and operational tasks.', icon: Settings },
    { title: 'Excel Dependency', desc: 'Transition fragile, siloed spreadsheets into unified, secure, real-time cloud database applications.', icon: FileSpreadsheet },
    { title: 'Inventory Challenges', desc: 'Resolve stockouts, excessive storage costs, and unrecorded shrinkage with smart tracking systems.', icon: Layers },
    { title: 'Digital Adoption Issues', desc: 'Bridge cultural/language gaps with localized, highly intuitive software designed for easy adoption.', icon: Zap },
    { title: 'Workforce Challenges', desc: 'Address skill gaps and high turnover by sourcing and preparing specialized technology talents.', icon: Users2 },
    { title: 'Growth Constraints', desc: 'Unlock business potential with scalable cloud architectures and AI-driven growth frameworks.', icon: TrendingUp }
  ];

  return (
    <>
      <Seo
        title="About Us - Our Purpose & Values"
        description="Learn about the purpose, vision, mission, and values behind M2P Nexus. Discover how our founder, Maruthu Pandi PT, leads regional technological transformations."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            About M2P Nexus
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between traditional operations and corporate-grade technology, scaling regional success from root to victory.
          </p>
        </div>
      </section>

      {/* Who We Are & Purpose */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">Who We Are</span>
                <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
                  Empowering Regional Businesses with Corporate-Grade Software
                </h2>
              </div>
              <p className="text-base text-brand-text leading-relaxed">
                M2P Nexus is a premier technology consulting and digital solutions partner founded in Madurai, Tamil Nadu. We focus on modernizing traditional manufacturing lines, trading operations, and agribusinesses through custom enterprise systems, AI automations, and targeted talent placement.
              </p>
              <p className="text-base text-brand-text leading-relaxed">
                We believe that software should not be an expensive luxury reserved only for mega-corporations. Our systems are engineered specifically to remove the operational vulnerabilities of SMEs, steel makers, agricultural traders, and growing startups.
              </p>
            </div>

            <div className="bg-brand-section border border-brand-border p-8 rounded-xl text-left space-y-6">
              <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Our Purpose</span>
              <h3 className="text-2xl font-bold text-brand-primary font-heading">
                To build high-value technological pathways for every organization.
              </h3>
              <p className="text-sm text-brand-text leading-relaxed">
                Many traditional businesses operate on fragmented paper trails, vulnerable spreadsheets, and manual tracking systems. Our purpose is to engineer intuitive, localized, and resilient cloud systems that allow traditional business leaders to govern their operations transparently, optimize costs, and scale into new markets.
              </p>
              <div className="border-t border-brand-border pt-4">
                <span className="font-heading font-bold text-brand-accent tracking-widest uppercase text-xs">
                  வேரிலிருந்து வெற்றிவரை
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white border border-brand-border p-8 rounded-xl shadow-xs space-y-4 text-left">
              <div className="w-12 h-12 bg-brand-section rounded-md flex items-center justify-center text-brand-secondary">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-primary font-heading">Our Vision</h3>
              <p className="text-sm text-brand-text leading-relaxed">
                To be the most trusted technology and AI automation consulting partner for startups, manufacturers, and agribusinesses in South India and beyond. We envision a digital landscape where traditional trading networks and modern AI-powered cloud architectures blend seamlessly to drive sustainable, community-wide success.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border border-brand-border p-8 rounded-xl shadow-xs space-y-4 text-left">
              <div className="w-12 h-12 bg-brand-section rounded-md flex items-center justify-center text-brand-secondary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-primary font-heading">Our Mission</h3>
              <p className="text-sm text-brand-text leading-relaxed">
                To engineer reliable, bilingual, and accessible software solutions that eliminate administrative bottlenecks, minimize data leakage, and scale organizational workflows. We fulfill this by combining software engineering with expert technical workforce sourcing, supporting our clients’ long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Core Values</span>
            <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
              The Principles That Guide Our Engineering
            </h2>
            <p className="text-lg text-brand-text">
              Every system built by M2P Nexus is shaped by our commitment to integrity and business efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-brand-section border border-brand-border p-6 rounded-lg space-y-4">
                  <div className="w-10 h-10 bg-white border border-brand-border rounded flex items-center justify-center text-brand-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary font-heading">{val.title}</h3>
                  <p className="text-xs text-brand-text leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 md:py-24 bg-brand-section border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-widest font-heading">Who We Help</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Tailored Digital Transformations for Key Sectors
            </h2>
            <p className="text-lg text-brand-text">
              We specialize in custom tech transformations that resolve specific growth and administrative blockers for organizations of all sizes.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left"
          >
            {whoWeHelp.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white border border-brand-border p-6 rounded-lg shadow-xs hover:shadow-md transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-brand-section rounded-md flex items-center justify-center mb-4 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary font-heading mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-text leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-brand-accent uppercase tracking-widest font-heading">Our Focus</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary font-heading">
              Operational Challenges We Solve
            </h2>
            <p className="text-lg text-brand-text">
              We replace operational friction with streamlined, robust digital workflows.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            {problemsWeSolve.map((prob, idx) => {
              const Icon = prob.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-brand-section border border-brand-border p-8 rounded-lg flex gap-4 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-brand-primary font-heading">{prob.title}</h3>
                    <p className="text-sm text-brand-text leading-relaxed">{prob.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24 text-center border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
            Partner With a Long-Term Strategic Advisor
          </h2>
          <p className="text-lg text-brand-text max-w-2xl mx-auto leading-relaxed">
            Reach out to our engineering and consulting team to discuss your operational challenges and explore customized software options.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-block bg-brand-secondary text-white hover:bg-brand-primary font-bold px-8 py-3 rounded-md shadow transition-colors"
            >
              Contact Our Office
            </Link>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#25D366] text-[#0F7A40] hover:bg-[#25D366]/10 font-bold px-8 py-3 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
