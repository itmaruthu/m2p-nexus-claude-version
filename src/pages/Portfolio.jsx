import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';
import ProjectExplorer from '../components/ProjectExplorer';
import BlueprintBuilder from '../components/BlueprintBuilder';

// Portfolio content comes from src/config/projects.js (see the note there on client names and numbers).
// The page ends with the blueprint builder, which is its call to action.

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio: Billing Systems, AI Automation, Growth & Hiring Projects"
        description="Projects by M2P Nexus, before and after: billing and inventory software, an agribusiness supply chain portal, a business website, AI invoice reading, a stock chat assistant, lead generation, an HR setup and talent acquisition."
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
              Start from the problem you have today. Each project shows how the business ran before, and the system that runs it now.
            </p>
          </div>
          <ProjectExplorer />
        </div>
      </section>

      <BlueprintBuilder />
    </>
  );
}
