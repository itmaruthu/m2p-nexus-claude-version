import { Link } from 'react-router-dom';

/**
 * Header for inner pages, in the Home page's language: white paper, big display headline, plain intro.
 * `children` renders below the intro (e.g. action buttons).
 */
export default function PageHero({ title, intro, crumb, children }) {
  return (
    <section className="bg-white border-b border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 md:pt-10 md:pb-20 space-y-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-body">
            <li>
              <Link to="/" className="underline decoration-rule underline-offset-4 hover:decoration-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-ink">
              {crumb ?? title}
            </li>
          </ol>
        </nav>
        <h1 className="font-display font-extrabold text-ink text-[2.1rem] sm:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-[-0.025em] max-w-4xl">
          {title}
        </h1>
        {intro && <p className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
