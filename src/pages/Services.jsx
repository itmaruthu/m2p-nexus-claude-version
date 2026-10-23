import { Link } from 'react-router-dom';
import { Laptop, Brain, Users, TrendingUp, CheckCircle, Target } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import techIllustration from '../assets/tech_illustration.webp';
import aiIllustration from '../assets/ai_illustration.webp';

export default function Services() {

  const servicesList = [
    {
      id: 'technology',
      title: 'Technology Solutions',
      icon: Laptop,
      illustration: techIllustration,
      description: 'We design and develop custom, secure corporate software platforms, billing software, and unified resource planners (ERPs) engineered to fit your specific operational structure. We avoid cookie-cutter templates in favor of high-performance code.',
      benefits: [
        'Custom Steel & Agribusiness ERP development to resolve stock discrepancies.',
        'GST-compliant bilingual billing software that works offline.',
        'High-performance React/Node.js web systems optimized for search engines.',
        'Normalization of legacy SQL databases and transition from manual Excel logs.'
      ],
      outcomes: [
        'Up to 90% reduction in paper-based entry operations.',
        'Real-time inventory and delivery logging across all warehouses.',
        'Secured, role-based system access protecting company data.'
      ]
    },
    {
      id: 'ai',
      title: 'AI Solutions',
      icon: Brain,
      illustration: aiIllustration,
      description: 'We integrate advanced machine learning models, automated data extractors, and generative agent pipelines into daily business platforms. We turn unstructured operational logs into automated executive dashboards and predictive files.',
      benefits: [
        'Custom automation agents for compiling daily logs, raw invoice data, and bills.',
        'OpenAI API integrations to handle customer queries and ticket drafting.',
        'Automatic regional translation frameworks to localize software interfaces.',
        'Predictive inventory engines to estimate material requirements.'
      ],
      outcomes: [
        'Significant time savings on routine weekly office compilation.',
        'Instant generation of complex analytics summaries.',
        'Automated notifications flagging raw material price shifts.'
      ]
    },
    {
      id: 'workforce',
      title: 'Workforce Solutions',
      icon: Users,
      illustration: null, // Custom layout for workforce
      leftCard: {
        title: 'Workforce Placement Framework',
        description: 'We empower organizations to build, manage, and retain exceptional talent through strategic recruitment, HR consulting, workforce planning, and Fractional HR services. Our solutions are designed to strengthen people operations, improve hiring efficiency, and create scalable HR systems that support sustainable business growth.',
        features: [
          'Talent Acquisition',
          'Fractional HR',
          'HR Operations',
          'HR Consulting'
        ]
      },
      description: 'Building a high-performing workforce requires more than recruitment. M2P Nexus partners with organizations to establish robust HR frameworks, attract top talent, optimize people operations, and align workforce strategies with business objectives.',
      benefits: [
        'End-to-end recruitment for permanent, contract, executive, leadership, technical, and non-technical positions.',
        'Complete HR department setup, including policies, employee handbooks, documentation, and compliance frameworks.',
        'Fractional HR leadership supporting workforce planning, organizational design, and performance management.',
        'HR operations management covering employee lifecycle, payroll coordination, HR audits, engagement, and compliance.'
      ],
      outcomes: [
        'Reduced hiring turnaround time with improved candidate quality.',
        'Scalable HR systems supporting organizational growth.',
        'Enhanced employee retention and workforce engagement.',
        'Strong HR governance with compliant and standardized processes.'
      ]
    },
    {
      id: 'growth',
      title: 'Business Growth Solutions',
      icon: TrendingUp,
      illustration: null,
      leftCard: {
        title: 'Business Development Solutions',
        description: 'We help businesses accelerate growth through strategic business development, client acquisition, digital marketing, and market expansion initiatives. Our solutions are designed to strengthen your brand, generate qualified opportunities, and build scalable revenue pipelines.',
        features: [
          'Client Acquisition',
          'Digital Marketing',
          'Growth Strategy',
          'Market Expansion'
        ]
      },
      description: 'Sustainable business growth requires a structured approach to sales, marketing, and customer acquisition. M2P Nexus works with organizations to develop scalable business development strategies that improve market reach, strengthen customer relationships, and drive measurable commercial success.',
      benefits: [
        'End-to-end client acquisition strategies for B2B and B2C organizations.',
        'Digital marketing solutions including SEO, social media, branding, paid advertising, and content marketing.',
        'Sales pipeline development, CRM optimization, lead nurturing, and conversion strategy.',
        'Business consulting covering go-to-market strategy, market research, expansion planning, and partnership development.'
      ],
      outcomes: [
        'Increased qualified business enquiries and lead generation.',
        'Stronger brand visibility and digital presence.',
        'Higher customer conversion through optimized sales processes.',
        'Sustainable business growth supported by scalable acquisition strategies.'
      ]
    }
  ];

  return (
    <>
      <Seo
        title="Our Services - Enterprise Tech, AI & Workforce"
        description="Explore the core capabilities of M2P Nexus: Custom ERP software, AI automation pipelines, technical workforce sourcing, and business growth strategies."
      />

      <PageHero
        eyebrow="Services"
        title="Our Strategic Services"
        crumb="Services"
        intro="From steel-industry ERPs to placing technical talent, we build systems designed for long-term operational success."
      />

      {/* Services List Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="border-b border-brand-border/40 pb-16 md:pb-24 last:border-0 last:pb-0"
              >
                {/* Overview and Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Image block */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    } flex justify-center`}
                  >
                    {service.illustration ? (
                      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-brand-border bg-brand-section p-4">
                        <img
                          src={service.illustration}
                          alt={`${service.title} Illustration`}
                          className="w-full h-auto object-cover rounded-lg"
                        />
                      </div>
                    ) : service.leftCard ? (
                      <div className="w-full max-w-md bg-brand-section border border-brand-border rounded-2xl p-8 text-left space-y-6">
                        <div className="w-12 h-12 bg-white border border-brand-border rounded flex items-center justify-center text-brand-secondary shadow-xs">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-brand-primary font-heading">
                          {service.leftCard.title}
                        </h3>
                        <p className="text-sm text-brand-text leading-relaxed">
                          {service.leftCard.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-brand-primary font-heading border-t border-brand-border pt-4">
                          {service.leftCard.features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                              {feat}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Content block */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    } space-y-6 text-left`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-brand-section flex items-center justify-center text-brand-secondary border border-brand-border">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-extrabold text-brand-primary font-heading">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-base text-brand-text leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* Benefits */}
                      <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase text-brand-secondary tracking-wider font-heading">
                          Key Capabilities
                        </h3>
                        <ul className="space-y-2 text-sm text-brand-text">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full shrink-0 mt-2"></span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div className="space-y-3 bg-brand-section border border-brand-border p-4 rounded-lg">
                        <h3 className="text-sm font-bold uppercase text-brand-primary tracking-wider font-heading flex items-center gap-1.5">
                          <Target className="w-4 h-4 text-brand-accent" />
                          Target Outcomes
                        </h3>
                        <ul className="space-y-2.5 text-xs font-medium text-brand-primary">
                          {service.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Need a Custom Assessment of Your Core Operations?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Send us a brief description of your daily workflows, material registries, or manual roadblocks. We will compile a custom roadmap detailing software options.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block bg-brand-secondary text-white hover:bg-slate-800 border border-slate-700 px-8 py-3 rounded-md text-sm font-semibold transition-colors"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
