import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Laptop,
  Brain,
  Users,
  TrendingUp,
  CheckCircle,
  Target,
  ArrowRight,
  ShoppingBag,
  Check
} from 'lucide-react';
import Seo from '../components/Seo';
import { links } from '../config/site';

// Reusable Case Study Card Component matching Technology Solutions design system exactly
function CaseStudyCard({ project, idx }) {
  const isYuvaTextiles = project.title === 'Yuva Textiles';

  if (isYuvaTextiles) {
    return (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        className="group bg-brand-section border border-brand-border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between text-left"
      >
        {/* Upper Section */}
        <div className="p-6 md:p-8 space-y-5 flex-1 flex flex-col min-h-0">
          {/* Case Header */}
          <div className="space-y-1">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2.5 py-0.5 rounded-full font-heading">
              {project.industry}
            </span>
            <h4 className="text-xl font-extrabold text-brand-primary font-heading pt-1.5 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-indigo-600 shrink-0" />
              <span>{project.title}</span>
            </h4>
          </div>

          {/* Scrollable details container */}
          <div className="overflow-y-auto max-h-[385px] pr-2 space-y-5 text-xs text-left custom-scrollbar scrollbar-thin">
            {/* Project Overview */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase text-brand-secondary font-heading block">Project Overview</span>
              <p className="text-brand-text leading-relaxed text-xs">
                Developed a complete ERP-powered Billing & Inventory Management System for Yuva Textiles to streamline daily billing operations, inventory control, customer management, supplier records, GST invoicing, and business reporting.
              </p>
              <p className="text-brand-text leading-relaxed text-xs pt-1">
                The software replaces manual bookkeeping with an intelligent digital workflow, improving operational efficiency and reducing billing time.
              </p>
            </div>

            {/* Business Challenges */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-red-500 font-heading block">Business Challenges</span>
              <p className="text-brand-text text-xs leading-relaxed">
                Yuva Textiles relied on manual billing and traditional inventory tracking, leading to:
              </p>
              <ul className="space-y-1.5 pl-1">
                {[
                  "Slow billing during busy hours",
                  "Inventory mismatches",
                  "Difficult stock monitoring",
                  "Manual GST calculations",
                  "Customer purchase history was not easily accessible",
                  "Supplier purchase records were difficult to maintain",
                  "No centralized reporting system"
                ].map((challenge, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-brand-text leading-relaxed">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Solution */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-brand-secondary font-heading block">Our Solution</span>
              <p className="text-brand-text text-xs leading-relaxed">
                Designed and developed a modern Billing & Inventory Management System featuring:
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pl-1">
                {[
                  "Fast POS Billing",
                  "GST Invoice Generation",
                  "Barcode Product Management",
                  "Product Categories",
                  "Inventory & Stock Tracking",
                  "Purchase Management",
                  "Supplier Management",
                  "Customer Management",
                  "Daily Sales Reports",
                  "Dashboard Analytics",
                  "Secure Login System",
                  "User Role Management",
                  "Invoice Printing",
                  "Stock Alerts",
                  "Business Reports",
                  "PostgreSQL Database"
                ].map((sol, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-brand-text leading-relaxed">
                    <span className="text-brand-secondary font-bold shrink-0">✓</span>
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
              <p className="text-brand-primary font-medium leading-relaxed text-xs pt-1">
                The system provides an intuitive interface that enables staff to complete billing operations quickly while keeping inventory synchronized in real time.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-brand-accent-strong font-heading block">Key Features</span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pl-1">
                {[
                  "Lightning-fast billing",
                  "Automated GST calculation",
                  "Barcode-enabled product search",
                  "Customer database",
                  "Supplier management",
                  "Inventory dashboard",
                  "Purchase & Sales history",
                  "Low-stock notifications",
                  "Invoice generation",
                  "Business analytics"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-brand-text leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-emerald-600 font-heading block">Business Impact</span>
              <div className="space-y-1.5 pl-1">
                {[
                  "Reduced billing time by more than 70%",
                  "Improved inventory accuracy",
                  "Eliminated manual billing errors",
                  "Faster customer checkout",
                  "Better stock visibility",
                  "Simplified GST compliance",
                  "Centralized business management",
                  "Increased operational productivity"
                ].map((impact, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-brand-text leading-relaxed">
                    <span className="text-emerald-500 font-bold shrink-0">✔</span>
                    <span>{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="bg-white p-6 md:p-8 border-t border-brand-border space-y-4">
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-mono font-bold bg-brand-section border border-brand-border px-2.5 py-1 rounded text-slate-600 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(30,58,138,0.2)] group-hover:bg-blue-50/10 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-4 justify-between items-center text-xs">
            <Link
              to="/contact"
              className="font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1"
            >
              View Project Details <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <Link
              to="/contact"
              className="font-bold text-brand-accent-strong hover:text-emerald-800 flex items-center gap-1"
            >
              Enquire About This Project <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  const badgeText = project.category || project.industry;
  const challengeText = project.challenge || project.problem;
  const tags = project.expertise || project.stack || [];

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
      className="group bg-brand-section border border-brand-border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between text-left"
    >
      {/* Upper Section */}
      <div className="p-6 md:p-8 space-y-5 flex-1 flex flex-col min-h-0">
        {/* Case Header */}
        <div className="space-y-1">
          {badgeText && (
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2.5 py-0.5 rounded-full font-heading">
              {badgeText}
            </span>
          )}
          <h4 className="text-xl font-extrabold text-brand-primary font-heading pt-1.5 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>{project.title}</span>
          </h4>
          {project.client && (
            <p className="text-xs text-brand-secondary font-medium font-heading">Client: {project.client}</p>
          )}
        </div>

        {/* Scrollable details container */}
        <div className="overflow-y-auto max-h-[385px] pr-2 space-y-5 text-xs text-left custom-scrollbar scrollbar-thin">
          {/* THE CHALLENGE */}
          {challengeText && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-red-500 font-heading block">THE CHALLENGE</span>
              <p className="text-brand-text text-xs leading-relaxed">
                {challengeText}
              </p>
            </div>
          )}

          {/* OUR SOLUTION */}
          {project.solution && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-brand-secondary font-heading block">OUR SOLUTION</span>
              <p className="text-brand-text text-xs leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {/* BUSINESS IMPACT (Array) */}
          {project.impact && Array.isArray(project.impact) && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-emerald-600 font-heading block">BUSINESS IMPACT</span>
              <div className="space-y-1.5 pl-1">
                {project.impact.map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-brand-text leading-relaxed">
                    <span className="text-emerald-500 font-bold shrink-0">✔</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lower Section */}
      <div className="bg-white p-6 md:p-8 border-t border-brand-border space-y-4">
        {/* Proven Business Outcome Box (Metrics string) */}
        {project.metrics && (
          <div className="bg-brand-section p-3 rounded-lg border border-brand-border/60 text-xs text-left">
            <strong className="text-brand-secondary font-heading block mb-0.5">Proven Business Outcome:</strong>
            <span className="text-brand-text leading-relaxed">{project.metrics}</span>
          </div>
        )}

        {/* Expertise / Stack tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-mono font-bold bg-brand-section border border-brand-border px-2.5 py-1 rounded text-slate-600 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(30,58,138,0.2)] group-hover:bg-blue-50/10 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="pt-2 flex justify-between items-center text-xs">
          <Link
            to="/contact"
            className="font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1"
          >
            Enquire about this case <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {

  const growthCaseStudies = [
    {
      category: 'BUSINESS DEVELOPMENT & CLIENT ACQUISITION',
      title: 'Scaling B2B Market Presence',
      client: 'VMK TRADERS',
      challenge: 'VMK TRADERS sought to strengthen its market presence and establish a structured business development approach to generate qualified industrial leads. The company required a strategic sales process capable of supporting long-term business expansion.',
      solution: "M2P Nexus developed a comprehensive business growth strategy by refining the company's market positioning, strengthening its digital presence, implementing lead generation initiatives, and designing a structured client acquisition process aligned with its target industries.",
      impact: [
        'Enhanced brand visibility across target markets',
        'Established a structured B2B lead generation process',
        'Improved client engagement and enquiry management',
        'Built a scalable sales pipeline for future growth'
      ],
      expertise: [
        'Business Development Strategy',
        'Lead Generation',
        'Digital Marketing',
        'Sales Process Consulting',
        'Brand Positioning'
      ]
    },
    {
      category: 'BUSINESS EXPANSION',
      title: 'Business Expansion Strategy',
      client: 'LIYA TRADERS',
      challenge: 'As an emerging import-export business, LIYA TRADERS required a structured business growth roadmap to increase market visibility, generate new business opportunities, and establish a strong commercial presence in domestic and international markets.',
      solution: 'M2P Nexus designed an integrated growth strategy focused on brand positioning, digital marketing, client acquisition, and business expansion planning. We also developed targeted outreach initiatives to improve customer engagement and generate qualified business enquiries.',
      impact: [
        'Strengthened market positioning',
        'Increased qualified business enquiries',
        'Improved digital visibility and brand awareness',
        'Established a scalable customer acquisition framework'
      ],
      expertise: [
        'Business Growth Consulting',
        'Digital Marketing Strategy',
        'Client Acquisition',
        'Market Expansion Planning',
        'Brand Development'
      ]
    },
    {
      category: 'DIGITAL MARKETING & BRAND GROWTH',
      title: 'Driving Customer Acquisition & Brand Growth',
      client: 'Gurunanak Engineering',
      challenge: 'Gurunanak Engineering aimed to expand its customer base in a highly competitive market while improving brand awareness and creating a predictable lead generation process for its sales team.',
      solution: 'M2P Nexus implemented an integrated marketing and business development strategy combining social media marketing, targeted lead generation campaigns, brand positioning, and sales consultation to improve customer acquisition performance.',
      impact: [
        'Increased brand visibility across digital channels',
        'Improved quality of sales enquiries',
        'Strengthened customer engagement',
        'Established a sustainable business development pipeline'
      ],
      expertise: [
        'Client Acquisition',
        'Digital Marketing',
        'Social Media Management',
        'Brand Positioning',
        'Sales Strategy'
      ]
    }
  ];

  const portfolioCategories = [
    {
      id: 'technology',
      title: 'Technology Solutions',
      icon: Laptop,
      servicesProvided: [
        'Custom Steel & Agribusiness ERP development to resolve stock discrepancies.',
        'GST-compliant bilingual billing software that works offline.',
        'High-performance React/Node.js web systems optimized for search engines.',
        'Normalization of legacy SQL databases and transition from manual Excel logs.'
      ],
      description: 'We design and develop custom, secure corporate software platforms, billing software, and unified resource planners (ERPs) engineered to fit your specific operational structure. We avoid cookie-cutter templates in favor of high-performance code.',
      projects: [
        {
          title: 'Yuva Textiles',
          client: 'Yuva Textiles',
          industry: 'ERP & BILLING SOFTWARE',
          problem: 'Yuva Textiles relied on manual billing and traditional inventory tracking, leading to slow billing during busy hours, inventory mismatches, difficult stock monitoring, and lack of centralized reporting.',
          solution: 'Designed and developed a complete ERP-powered Billing & Inventory Management System with fast POS billing, automated GST, barcode search, inventory tracking, and PostgreSQL database.',
          stack: ['Next.js', 'PostgreSQL', 'React'],
          metrics: 'Reduced billing time by more than 70% and improved inventory accuracy.'
        },
        {
          title: 'Steel Industry ERP',
          client: 'JRK Engineering',
          industry: 'Heavy Metal Manufacturing',
          problem: 'Fragmented manual registers tracking raw scrap material receipts, melting losses, logistics, and contractor accounts led to inventory leakages.',
          solution: 'Created a centralized Web ERP system featuring real-time weighbridge integrations, automated steel receipt calculations, and unified billing logs.',
          stack: ['React.js', '.NET Core', 'SQL Server', 'IIS Server'],
          metrics: 'Eliminated manual inventory discrepancies and reduced monthly audit cycles from 15 days to under 48 hours.'
        },
        {
          title: 'Agribusiness Supply Chain Portal',
          client: 'Shanmugha Coconuts',
          industry: 'Agribusiness & Bulk Trade',
          problem: 'Manual tracking of crop batch weights, transport logs, and commission allocations created constant settlement friction with farmers.',
          solution: 'Built a responsive supply chain database app that integrates scales, automates driver fuel allowances, and generates commission settlements.',
          stack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
          metrics: 'Streamlined harvest batch settlements for over 450+ farming partners.'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Solutions',
      icon: Brain,
      servicesProvided: [
        'Custom automation agents for compiling daily logs, raw invoice data, and bills.',
        'OpenAI API integrations to handle customer queries and ticket drafting.',
        'Automatic regional translation frameworks to localize software interfaces.',
        'Predictive inventory engines to estimate material requirements.'
      ],
      description: 'We integrate advanced machine learning models, automated data extractors, and generative agent pipelines into daily business platforms. We turn unstructured operational logs into automated executive dashboards and predictive files.',
      projects: [
        {
          title: 'Logistics Ledger & Invoice Automation',
          client: 'KMS Infra & Logistics',
          industry: 'Operations & Fleet Logistics',
          problem: 'Administrative staff spent over 25 hours per week manually reading, sorting, and verifying incoming logistics billing slips.',
          solution: 'Deployed a LangChain and OCR-driven Python automation pipeline that parses shipping receipts, matches them with trip records, and flags anomalies.',
          stack: ['Python', 'OpenAI APIs', 'LangChain', 'PostgreSQL'],
          metrics: 'Saved an estimated 25+ hours of manual administrative compilation per week with 99.4% parsing accuracy.'
        },
        {
          title: 'Intelligent Inventory Chat Agent',
          client: 'Nexus Retailers & Co.',
          industry: 'Agribusiness & Retail Commerce',
          problem: 'Floor operators struggled to query inventory levels and active prices instantly from their phones, delaying orders.',
          solution: 'Developed an intelligent chat agent trained on SQL inventory logs, allowing personnel to query live stock status via simple text commands.',
          stack: ['React.js', 'Node.js', 'OpenAI API', 'SQL Server'],
          metrics: 'Reduced search times for stock inquiries from 10 minutes to under 5 seconds.'
        }
      ]
    },
    {
      id: 'workforce',
      title: 'Workforce Solutions',
      icon: Users,
      servicesProvided: [
        'End-to-end recruitment loops including coding tests and design interviews.',
        'Custom pre-onboarding bootcamps aligning candidates with your tech stack.',
        'Contract-to-hire and full-time placement options for agile teams.',
        'Ongoing technical mentorship and training sessions led by our director.'
      ],
      description: 'Finding skilled developers, database managers, and AI architects is challenging. We act as your specialized technical recruitment partner, screening, vetting, and training tech talents specifically prepared to merge with your company.',
      projects: [
        {
          title: 'Building a Scalable HR Foundation',
          client: 'JRK Engineering',
          category: 'HR TRANSFORMATION & FRACTIONAL HR',
          challenge: "As the organization expanded, HR activities were managed through fragmented processes with no standardized policies, recruitment framework, or structured employee lifecycle management. This created operational inefficiencies and limited the company's ability to scale its workforce effectively.",
          solution: 'M2P Nexus established a comprehensive HR ecosystem by designing standardized policies, implementing structured recruitment workflows, developing employee lifecycle processes, and providing strategic Fractional HR leadership to align people practices with business objectives.',
          impact: [
            'Established a structured and scalable HR function',
            'Streamlined recruitment and onboarding processes',
            'Enhanced HR governance and compliance readiness',
            'Built standardized employee management practices',
            'Enabled leadership to focus on core business growth'
          ],
          expertise: [
            'Fractional HR Partnership',
            'HR Department Setup',
            'Recruitment Strategy',
            'HR Policy Development',
            'HR Process Optimization'
          ]
        },
        {
          title: 'End-to-End Talent Acquisition & HR Transformation',
          client: 'FDG (Fridge Door Gaskets)',
          category: 'TALENT ACQUISITION & HR OPERATIONS',
          challenge: 'The organization faced challenges in attracting qualified talent, maintaining consistent HR processes, and building an employee-centric workplace capable of supporting continued business growth.',
          solution: 'M2P Nexus delivered a complete workforce transformation initiative, combining strategic talent acquisition with HR audits, process optimization, employee engagement initiatives, and ongoing Fractional HR advisory to strengthen organizational performance.',
          impact: [
            'Accelerated recruitment with higher-quality candidate selection',
            'Improved workforce productivity through structured HR processes',
            'Strengthened compliance and operational governance',
            'Increased employee engagement and retention',
            'Built a sustainable HR framework supporting long-term growth'
          ],
          expertise: [
            'Talent Acquisition',
            'Fractional HR Leadership',
            'HR Audit',
            'HR Operations Management',
            'Employee Engagement Strategy',
            'HR Process Improvement'
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Seo
        title="Our Portfolio - Detail Work about 3 Core Services"
        description="See detailed case studies of projects built by M2P Nexus across Technology, AI, and Workforce Solutions. Real problems, engineered outcomes."
      />

      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
            Our Detailed Portfolio
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real software systems and staffing frameworks engineered to solve critical operational bottlenecks.
          </p>
        </div>
      </section>

      {/* Section Quick Anchor Links */}
      <div className="bg-brand-section border-b border-brand-border sticky top-16 z-20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold font-heading">
          <a href="#technology" className="text-brand-secondary hover:text-brand-primary flex items-center gap-1.5">
            <Laptop className="w-4 h-4 text-brand-accent" /> Technology Solutions
          </a>
          <a href="#ai" className="text-brand-secondary hover:text-brand-primary flex items-center gap-1.5">
            <Brain className="w-4 h-4 text-brand-accent" /> AI Solutions
          </a>
          <a href="#workforce" className="text-brand-secondary hover:text-brand-primary flex items-center gap-1.5">
            <Users className="w-4 h-4 text-brand-accent" /> Workforce Solutions
          </a>
          <a href="#growth" className="text-brand-secondary hover:text-brand-primary flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-brand-accent" /> Business Growth Solutions
          </a>
        </div>
      </div>

      {/* Portfolio Categories List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          {portfolioCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-32 space-y-12 border-b border-brand-border/40 pb-16 md:pb-24 last:border-0 last:pb-0 text-left"
              >
                {/* Services Provided Panel */}
                <div className="bg-brand-section border border-brand-border rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white border border-brand-border rounded-lg flex items-center justify-center text-brand-secondary shadow-xs">
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-primary font-heading">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-sm md:text-base text-brand-text leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 bg-white border border-brand-border p-5 rounded-xl space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-secondary font-heading flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-brand-accent" />
                      Services Provided:
                    </h3>
                    <ul className="space-y-2 text-xs text-brand-text">
                      {category.servicesProvided.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Case Studies Grid */}
                <div className="space-y-8">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-brand-accent-strong uppercase tracking-widest font-heading">Case Studies</span>
                    <h3 className="text-xl font-bold text-brand-primary font-heading">Proven Work & Case Histories</h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {category.projects.map((project, idx) => (
                      <CaseStudyCard key={idx} project={project} idx={idx} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Business Growth Solutions Section */}
          <div id="growth" className="scroll-mt-32 space-y-12 border-t border-brand-border/40 pt-16 md:pt-24 text-left">
            {/* Services Provided Panel */}
            <div className="bg-brand-section border border-brand-border rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white border border-brand-border rounded-lg flex items-center justify-center text-brand-secondary shadow-xs">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-brand-primary font-heading">
                    Business Growth Solutions
                  </h2>
                </div>
                <p className="text-sm md:text-base text-brand-text leading-relaxed">
                  Sustainable business growth requires a structured approach to sales, marketing, and customer acquisition. M2P Nexus works with organizations to develop scalable business development strategies that improve market reach, strengthen customer relationships, and drive measurable commercial success.
                </p>
              </div>

              <div className="lg:col-span-5 bg-white border border-brand-border p-5 rounded-xl space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-secondary font-heading flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-brand-accent" />
                  Services Provided:
                </h3>
                <ul className="space-y-2 text-xs text-brand-text">
                  {[
                    'End-to-end client acquisition strategies for B2B and B2C organizations.',
                    'Digital marketing solutions including SEO, social media, branding, paid advertising, and content marketing.',
                    'Sales pipeline development, CRM optimization, lead nurturing, and conversion strategy.',
                    'Business consulting covering go-to-market strategy, market research, expansion planning, and partnership development.'
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Studies Header */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-brand-accent-strong uppercase tracking-widest font-heading">
                CASE STUDIES
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-primary font-heading">
                Proven Business Growth Success Stories
              </h3>
              <p className="text-sm text-brand-text max-w-3xl leading-relaxed">
                Explore how M2P Nexus has helped businesses strengthen their market presence, generate qualified opportunities, improve customer acquisition, and achieve sustainable business growth through strategic consulting and digital transformation.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {growthCaseStudies.map((caseStudy, idx) => (
                <CaseStudyCard key={idx} project={caseStudy} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Want to See a Product Demo?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            We can schedule a screen-share session to show you the Steel ERP, Coconut Trader ERP, or Tamil Billing interfaces. Contact us to schedule.
          </p>
          <div className="pt-2">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F7A40] text-white hover:bg-[#0B6534] px-8 py-3.5 rounded-md text-sm font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              Request Live Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
