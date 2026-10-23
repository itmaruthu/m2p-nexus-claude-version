import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import RootsToNexus from '../components/RootsToNexus';
import ClosingCta from '../components/ClosingCta';
import BrandFilm from '../components/BrandFilm';
import { h2Class, sectionPad, textLink } from '../components/styles';

// All content here comes from the M2P Nexus brand guide (story, mission, vision, direction, differentiators).

const differences = [
  'One partner for technology, HR and marketing, not five vendors to coordinate',
  'Practical, business-first AI, not AI for its own sake',
  'Software customised to how you work, not one-size-fits-all tools',
  'A deliberate focus on MSMEs and growing businesses',
  'Long-term partnership over one-off projects',
  'Business first, technology second',
];

const nextUp = ['Tamil-first billing software', 'Business automation platforms', 'AI-powered tools for enterprises', 'HR technology'];

export default function About() {
  return (
    <>
      <Seo
        title="About M2P Nexus: From Roots to Success"
        description="M2P Nexus is a technology and business solutions partner from Madurai, bringing software, AI, HR, digital marketing and consulting together for startups, MSMEs, traders and enterprises."
      />

{/* Signature hero: the tagline, and the roots-to-network drawing labelled with what we connect. */}
      <section className="bg-white border-b border-rule overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 md:pt-10 space-y-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-body">
              <li>
                <Link to="/" className="underline decoration-rule underline-offset-4 hover:decoration-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">
                About
              </li>
            </ol>
          </nav>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h1 className="lg:col-span-7 font-display font-extrabold text-ink text-[2.4rem] sm:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-[-0.03em]">
              From roots to success.
              <span lang="ta" className="mt-3 block font-sans font-semibold text-leaf text-2xl sm:text-3xl tracking-normal">
                வேரிலிருந்து வெற்றிவரை
              </span>
            </h1>
            <p className="lg:col-span-5 text-lg sm:text-xl text-body leading-relaxed">
              M2P Nexus is a technology and business solutions partner from Madurai. We start from how your business already works, its roots, and connect it to the software, AI, people and marketing it needs to grow.
            </p>
          </div>
          <RootsToNexus
            className="w-full mt-4"
            groundLabel="Your business"
            labels={['Software', 'Marketing', 'AI', 'Websites & apps', 'Growth', 'Hiring']}
          />
          <ul className="sm:hidden flex flex-wrap gap-2" aria-hidden="true">
            {['Software', 'Websites & apps', 'AI', 'Marketing', 'Hiring', 'Growth'].map((l) => (
              <li key={l} className="rounded-full border border-rule px-3 py-1 text-sm font-semibold text-ink">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why we exist */}
      <section className="bg-white border-b border-rule">
        <div className={`${sectionPad} grid gap-10 lg:grid-cols-12`}>
          <h2 className={`${h2Class} lg:col-span-4`}>Why we exist</h2>
          <div className="lg:col-span-8 space-y-5 text-lg text-body leading-relaxed max-w-3xl">
            <p>
              Technology is now essential for every business. But most small businesses don&rsquo;t know which software they need, how to move their work online, how AI could help, how to hire well, or how to reach customers on the internet.
            </p>
            <p>
              Large companies can pay for consultants, software vendors, marketing agencies, HR firms and AI experts. Small businesses usually can&rsquo;t. We started M2P Nexus to close that gap by being one technology and business partner, instead of one of five vendors a business has to manage.
            </p>
          </div>
        </div>
      </section>

      <BrandFilm
        headingId="about-film-heading"
        title="The idea behind M2P Nexus, in one short film."
        text="Every business deserves the systems big companies have, from one partner who understands how it really runs."
      />

      {/* Mission and vision */}
      <section className="bg-[#F4F6FA] border-b border-rule">
        <div className={`${sectionPad} grid gap-12 md:grid-cols-2`}>
          <div className="border-t-2 border-ink pt-6 space-y-4">
            <h2 className="font-display font-bold text-leaf text-xl">Our mission</h2>
            <p className="font-heading text-2xl sm:text-[1.7rem] font-semibold text-ink leading-snug">
              Empower businesses through technology, AI, digital innovation and skilled talent, so they can grow efficiently and sustainably.
            </p>
          </div>
          <div className="border-t-2 border-ink pt-6 space-y-4">
            <h2 className="font-display font-bold text-leaf text-xl">Our vision</h2>
            <p className="font-heading text-2xl sm:text-[1.7rem] font-semibold text-ink leading-snug">
              Become a trusted digital transformation partner for businesses across India, especially startups and MSMEs, through long-term relationships rather than one-time projects.
            </p>
          </div>
        </div>
      </section>

      {/* Core belief, set large: the one bold moment on this page */}
      <section className="bg-white border-b border-rule">
        <div className={`${sectionPad} space-y-6`}>
          <h2 className="font-heading font-semibold text-body">What we believe</h2>
          <p className="font-display font-extrabold text-ink text-3xl sm:text-5xl leading-[1.1] tracking-[-0.02em] max-w-5xl">
            Every business, whether a startup, an MSME, a trader or an enterprise, deserves modern technology, skilled people and digital growth, whatever its size or location.
          </p>
        </div>
      </section>

      {/* How we work differently */}
      <section className="bg-[#F4F6FA] border-b border-rule">
        <div className={`${sectionPad} grid gap-10 lg:grid-cols-12`}>
          <div className="lg:col-span-4 space-y-4">
            <h2 className={h2Class}>How we&rsquo;re different</h2>
            <p className="text-lg text-body leading-relaxed">
              One partner means lower cost, fewer communication gaps and delays, and consistent support over the years.
            </p>
          </div>
          <ul className="lg:col-span-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 border-t-2 border-ink pt-6">
            {differences.map((d) => (
              <li key={d} className="flex gap-3 text-lg text-ink leading-snug">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where we're going */}
      <section className="bg-white border-b border-rule">
        <div className={`${sectionPad} grid gap-10 lg:grid-cols-12`}>
          <div className="lg:col-span-5 space-y-4">
            <h2 className={h2Class}>Where we&rsquo;re going</h2>
            <p className="text-lg text-body leading-relaxed">
              Alongside our consulting and implementation work, we are growing from a services company into a technology company, building industry-specific products for the businesses we already serve.
            </p>
            <p className="text-body">
              Led by Maruthu Pandi PT and Priyanka M.{' '}
              <Link to="/founder" className={textLink}>
                Meet the founders
              </Link>
            </p>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-heading font-semibold text-ink">What we&rsquo;re working towards</h3>
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {nextUp.map((item) => (
                <li key={item} className="flex items-center gap-4 py-4">
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 rotate-45 bg-marigold" />
                  <span className="font-heading font-semibold text-ink text-xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClosingCta
        title="We don’t just build software. We build business success."
        text="M2P Nexus exists to help businesses move from traditional operations to intelligent, technology-driven growth. Tell us where you are today."
      />
    </>
  );
}
