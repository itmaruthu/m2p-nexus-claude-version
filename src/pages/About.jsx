import { Link } from 'react-router-dom';
import { ArrowRight, Flag, MapPin } from 'lucide-react';
import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';
import TeamChart from '../components/TeamChart';
import ClosingCta from '../components/ClosingCta';
import Roadmap from '../components/Roadmap';
import { h2Class, sectionPad, textLink } from '../components/styles';

// All content here comes from the M2P Nexus brand guide (story, mission, vision, direction, differentiators).
// Page story: why we exist (shown as a team chart) -> what we believe and choose -> where we're going.

// "This, not that": each differentiator from the brand guide, with the alternative it rejects.
const choices = [
  { we: 'One partner for technology, HR and marketing', not: 'five vendors to coordinate' },
  { we: 'Practical, business-first AI', not: 'AI for its own sake' },
  { we: 'Software customised to how you work', not: 'one-size-fits-all tools' },
  { we: 'Built for MSMEs and growing businesses', not: 'small clients as an afterthought' },
  { we: 'Long-term partnership', not: 'one-off projects' },
  { we: 'Business first', not: 'technology first' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About M2P Nexus: From Roots to Success"
        description="M2P Nexus is a technology and business solutions partner from Madurai, bringing software, AI, HR, digital marketing and consulting together for startups, MSMEs, traders and enterprises."
      />

      {/* Hero: why we exist, shown as a team chart */}
      <section className="relative overflow-hidden border-b border-rule bg-[#F4F6FA]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-24 space-y-10">
          <Breadcrumb page="About" />
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="space-y-4 lg:col-span-7">
              <p className="flex items-center gap-2 font-heading text-sm font-semibold text-leaf">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                Madurai, Tamil Nadu
              </p>
              <h1 className="font-display font-bold text-ink text-[2.2rem] sm:text-5xl lg:text-[3.6rem] leading-[1.04] tracking-[-0.025em]">
                Small businesses deserve the team big companies have.
              </h1>
              <p lang="ta" className="font-sans text-2xl font-semibold text-leaf">
                வேரிலிருந்து வெற்றிவரை
              </p>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-body lg:col-span-5">
              <p>
                Technology is now essential for every business. But most small businesses don&rsquo;t know which software
                they need, how AI could help, how to hire well, or how to reach customers online.
              </p>
              <p>We started M2P Nexus to close that gap: one technology and business partner, instead of five vendors to manage.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-lg font-semibold text-ink">Who&rsquo;s on your team?</h2>
            <TeamChart />
          </div>
        </div>
      </section>

      {/* What we believe, and the choices that follow from it */}
      <section className="border-b border-rule bg-white">
        <div className={`${sectionPad} space-y-12`}>
          <div className="space-y-5">
            <h2 className="font-heading font-semibold text-leaf">What we believe</h2>
            <p className="max-w-5xl font-display text-[1.7rem] font-bold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.8rem]">
              Every business, whether a startup, an MSME, a trader or an enterprise, deserves modern technology, skilled
              people and digital growth, whatever its size or location.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-heading text-lg font-semibold text-ink">So we choose</h3>
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-rule ring-1 ring-rule sm:grid-cols-2 lg:grid-cols-3">
              {choices.map((c) => (
                <li key={c.we} className="flex flex-col gap-3 bg-white p-6">
                  <p className="font-display text-lg font-bold leading-snug text-ink">{c.we}</p>
                  <p className="text-body">
                    <span className="mr-1.5 font-semibold text-slate-500">not</span>
                    <s className="decoration-[#F87171] decoration-2">{c.not}</s>
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-body">
              One partner means lower cost, fewer communication gaps and delays, and consistent support over the years.
            </p>
          </div>
        </div>
      </section>

      {/* Today to tomorrow: mission (today), the products we're building, vision (where we're heading) */}
      <section className="border-b border-rule bg-[#F4F6FA]">
        <div className={`${sectionPad} space-y-12`}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className={`${h2Class} lg:col-span-5`}>From today to where we&rsquo;re going</h2>
            <p className="text-lg leading-relaxed text-body lg:col-span-7">
              Alongside our consulting and implementation work, we are growing from a services company into a technology
              company, building industry-specific products for the businesses we already serve.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-6 ring-1 ring-rule sm:p-8 lg:col-span-5">
              <p className="font-heading text-sm font-semibold text-leaf">Our mission, today</p>
              <p className="font-heading text-2xl font-semibold leading-snug text-ink">
                Empower businesses through technology, AI, digital innovation and skilled talent, so they can grow efficiently
                and sustainably.
              </p>
            </div>
            <div className="relative flex flex-col gap-4 overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-8 lg:col-span-7 grain">
              <p className="relative z-10 flex items-center gap-2 font-heading text-sm font-semibold text-marigold">
                <Flag aria-hidden="true" className="h-4 w-4" />
                Our vision, where we&rsquo;re heading
              </p>
              <p className="relative z-10 font-heading text-2xl font-semibold leading-snug">
                Become a trusted digital transformation partner for businesses across India, especially startups and MSMEs,
                through long-term relationships rather than one-time projects.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-rule sm:p-8">
            <h3 className="mb-8 font-heading text-lg font-semibold text-ink">On the way: the products we&rsquo;re building</h3>
            <Roadmap />
          </div>

          <p className="flex flex-wrap items-center gap-x-3 text-body">
            Led by Maruthu Pandi PT and Priyanka M.
            <Link to="/founder" className={`${textLink} inline-flex items-center gap-1.5`}>
              Meet the founders
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <ClosingCta
        title="We don’t just build software. We build business success."
        text="M2P Nexus exists to help businesses move from traditional operations to intelligent, technology-driven growth. Tell us where you are today."
        questions={[
          'We are a small business. How would you work with us?',
          'Can you stay with us as we grow, not just for one project?',
          'How would Tamil-first billing software help my shop?',
        ]}
      />
    </>
  );
}
