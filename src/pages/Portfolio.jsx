import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';
import ProjectExplorer from '../components/ProjectExplorer';
import ClosingCta from '../components/ClosingCta';

// Portfolio content comes from src/config/projects.js (see the note there on client names and numbers).

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio: Billing Systems, AI Automation, Growth & Hiring Projects"
        description="Projects by M2P Nexus: billing and inventory software, an agribusiness supply chain portal, a business website, AI invoice reading, a stock chat assistant, lead generation, an HR setup and talent acquisition."
      />

      <section className="relative overflow-hidden border-b border-rule bg-[#F4F6FA]">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-24 space-y-10">
          <Breadcrumb page="Portfolio" />
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h1 className="lg:col-span-8 font-display font-bold text-ink text-[2.2rem] sm:text-5xl lg:text-[3.6rem] leading-[1.04] tracking-[-0.025em]">
              Systems that run real businesses, every day.
            </h1>
            <p className="lg:col-span-4 text-lg text-body leading-relaxed">
              Software, AI, growth and hiring work for traders, manufacturers and growing teams. Pick a project to see the system we built, drawn as a blueprint.
            </p>
          </div>
          <ProjectExplorer />
        </div>
      </section>

      <ClosingCta
        title="Your business could be the next blueprint."
        text="Tell us what slows you down today. We’ll sketch the system that fixes it, with a clear scope and quotation before any work starts."
        questions={[
          'Can you build billing software like the textile project for my shop?',
          'Can AI read our supplier invoices and match them to orders?',
          'Can you help us set up an HR function as we grow?',
        ]}
      />
    </>
  );
}
