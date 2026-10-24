import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';
import IndustryLens from '../components/IndustryLens';
import ClosingCta from '../components/ClosingCta';
import { industries } from '../config/industries';
import { h2Class, sectionPad } from '../components/styles';

// Industries from the M2P Nexus brand guide, shown as typical situations rather than results: the brand
// guide has no verified metrics, so none are shown here.

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve: Retail, Trading, Manufacturing & More"
        description="How M2P Nexus helps retail shops, traders, manufacturers, construction, agriculture, logistics, clinics, schools, finance firms and service businesses move from paper to connected systems."
      />

      <section className="relative overflow-hidden border-b border-rule bg-white">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 md:pt-10 md:pb-20 space-y-10">
          <Breadcrumb page="Industries" />
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h1 className="lg:col-span-9 font-display font-extrabold text-ink text-[2.2rem] sm:text-5xl lg:text-[3.1rem] leading-[1.05] tracking-[-0.025em]">
              Every business has a notebook somewhere. We turn it into a system.
            </h1>
            <p className="lg:col-span-3 text-lg text-body leading-relaxed">
              Pick your industry to see what usually runs on paper today, and what replaces it.
            </p>
          </div>
          <IndustryLens />
        </div>
      </section>

      {/* Where we'd start, for every industry at once */}
      <section className="border-b border-rule bg-[#F4F6FA]">
        <div className={`${sectionPad} space-y-10`}>
          <div className="max-w-2xl space-y-4">
            <h2 className={h2Class}>The first step, industry by industry</h2>
            <p className="text-lg text-body leading-relaxed">
              We start with the one change that saves the most time, then build from there.
            </p>
          </div>
          <dl className="grid gap-x-12 sm:grid-cols-2 border-t-2 border-ink">
            {industries.map((x) => (
              <div key={x.id} className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="font-display font-bold text-ink">{x.name}</dt>
                <dd className="text-body leading-relaxed">{x.start}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ClosingCta
        title="Don’t see your industry?"
        text="Most of our work starts with the same question: where does paper or guesswork slow you down? Tell us how your business runs."
        questions={[
          'We are a wholesale trader. Can you organise our WhatsApp orders?',
          'Can you connect our weighbridge to billing?',
          'Do you work with clinics and schools too?',
        ]}
      />
    </>
  );
}
