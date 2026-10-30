import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';
import FounderPaths from '../components/FounderPaths';
import JapanToMadurai from '../components/JapanToMadurai';
import FounderRouter from '../components/FounderRouter';

// Founder details live in src/config/founders.js (the paths in FounderPaths.jsx). Claims that could not be
// verified (success rates, counters) were removed. The page ends with the founder router, its call to action.

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
            <h1 className="font-display font-bold text-ink text-[2.6rem] sm:text-6xl lg:text-[4.4rem] leading-[1.02] tracking-[-0.03em]">
              Two paths. One nexus.
            </h1>
            <p className="text-lg sm:text-xl text-body leading-relaxed">
              One of us spent years building software for factories, traders and clients in Japan. The other spent them finding the right people for growing businesses. M2P Nexus is where those paths meet.
            </p>
          </div>
          <FounderPaths />
        </div>
      </section>

      <JapanToMadurai />

      <FounderRouter />
    </>
  );
}
