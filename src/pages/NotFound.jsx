import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      {/* noindex keeps unknown URLs out of search results. */}
      <Seo title="Page Not Found" description="The page you are looking for does not exist." noindex />
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24 space-y-6">
        <p className="text-7xl font-extrabold text-brand-border font-heading">404</p>
        <h1 className="text-3xl font-extrabold text-brand-primary font-heading">Page not found</h1>
        <p className="text-brand-text max-w-md">
          The page you are looking for has moved or does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-secondary text-white hover:bg-brand-primary px-6 py-3 rounded-md text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </section>
    </>
  );
}
