import { Link } from 'react-router-dom';

/** "Home / Page" breadcrumb used at the top of every inner page hero. */
export default function Breadcrumb({ page }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-body">
        <li>
          <Link to="/" className="underline decoration-rule underline-offset-4 hover:decoration-ink">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="font-semibold text-ink">
          {page}
        </li>
      </ol>
    </nav>
  );
}
