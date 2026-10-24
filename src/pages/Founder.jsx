import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';
import FounderPaths from '../components/FounderPaths';
import ClosingCta from '../components/ClosingCta';
import { h2Class, sectionPad } from '../components/styles';

// Founder details come from the existing M2P Nexus founder page. Claims that could not be verified
// (success rates, counters) were removed.

const leads = [
  {
    name: 'Maruthu Pandi PT',
    area: 'Technology',
    points: [
      { title: 'Systems built around the shop floor', text: 'Designing databases that prevent stock mismatches, and connecting weighing scales, transport meters and billing to one central system.' },
      { title: 'International delivery standards', text: 'Onsite project delivery in Japan, bringing disciplined coding standards, clean architecture and structured delivery home to Madurai.' },
      { title: 'Practical AI', text: 'AI pipelines that read raw receipt logs and write daily inventory reports, so teams stop compiling them by hand.' },
    ],
  },
  {
    name: 'Priyanka M',
    area: 'People and clients',
    points: [
      { title: 'Hiring that works', text: 'Auditing recruitment pipelines, building structured interviews and retention plans so the right people join and stay.' },
      { title: 'Long-term partnerships', text: 'Staying close to every client after launch and advising startups and growing businesses as they build capable teams.' },
      { title: 'Business development', text: 'Helping clients find and win customers, from positioning to a sales process that keeps enquiries coming.' },
    ],
  },
];

export default function Founder() {
  return (
    <>
      <Seo
        title="Meet the Founders: Maruthu Pandi PT and Priyanka M"
        description="M2P Nexus is led by Maruthu Pandi PT (Founder & Director, 14+ years in technology, onsite experience in Japan) and Priyanka M (Co-Founder, talent acquisition and client relationships)."
      />

      <section className="relative overflow-hidden border-b border-rule bg-white">
        <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-24 space-y-14">
          <Breadcrumb page="Founders" />
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <h1 className="font-display font-extrabold text-ink text-[2.6rem] sm:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-[-0.03em]">
              Two paths. One nexus.
            </h1>
            <p className="text-lg sm:text-xl text-body leading-relaxed">
              One of us spent years building software for factories, traders and clients in Japan. The other spent them finding the right people for growing businesses. M2P Nexus is where those paths meet.
            </p>
          </div>
          <FounderPaths />
        </div>
      </section>

      <section className="border-b border-rule bg-[#F4F6FA]">
        <div className={`${sectionPad} space-y-12`}>
          <h2 className={`${h2Class} max-w-2xl`}>What each of us leads</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            {leads.map((l) => (
              <div key={l.name} className="space-y-6">
                <p className="border-b-2 border-ink pb-3">
                  <span className="font-display text-xl font-bold text-ink">{l.area}</span>
                  <span className="text-body">, led by {l.name}</span>
                </p>
                <dl className="space-y-6">
                  {l.points.map((p) => (
                    <div key={p.title} className="grid gap-1 sm:grid-cols-[13rem_1fr] sm:gap-6">
                      <dt className="font-heading font-semibold text-ink">{p.title}</dt>
                      <dd className="text-body leading-relaxed">{p.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Talk to the founders directly."
        text="No account managers in between. Tell us about your business and one of us will reply, in Tamil or English."
        questions={[
          'Can I speak with Maruthu about a software project?',
          'Can Priyanka help us hire our first sales team?',
          'What does a first meeting with you look like?',
        ]}
      />
    </>
  );
}
