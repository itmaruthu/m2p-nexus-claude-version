import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Header band for inner pages: breadcrumb, eyebrow, title and intro, left-aligned so each page reads as part
 * of the site rather than a repeated centred banner. `aside` renders on the right on large screens.
 */
export default function PageHero({ eyebrow, title, intro, crumb, children, aside }) {
  return (
    <section className="relative overflow-hidden bg-brand-primary text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40 [mask-image:radial-gradient(ellipse_70%_80%_at_80%_0%,#000_40%,transparent_100%)]"
      />
      <div aria-hidden="true" className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-secondary/40 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8 space-y-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white underline-offset-4 hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li aria-current="page" className="text-white font-medium">
                {crumb ?? title}
              </li>
            </ol>
          </nav>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-heading">{eyebrow}</p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight font-heading leading-[1.1]">
            {title}
          </h1>
          {intro && <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">{intro}</p>}
          {children}
        </div>
        {aside && <div className="lg:col-span-4">{aside}</div>}
      </div>
    </section>
  );
}
