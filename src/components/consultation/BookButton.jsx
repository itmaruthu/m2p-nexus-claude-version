import { Link, useLocation } from 'react-router-dom';

/**
 * "Book a consultation" link. The form has its own page (/book/, or /ta/book/ on Tamil pages): booking takes
 * about a minute, which is too long for a pop-up, and a page gives the team a link to share on WhatsApp,
 * Instagram and email. `starter` (an id from src/config/starters.js) pre-selects that starter on the form.
 */
export default function BookButton({ className, children = 'Book a consultation', onOpen, starter }) {
  const { pathname } = useLocation();
  const tamil = /^\/ta(\/|$)/.test(pathname);
  const to = `${tamil ? '/ta' : ''}/book/${starter ? `?starter=${starter}` : ''}`;
  return (
    <Link to={to} onClick={onOpen} className={className}>
      {children}
    </Link>
  );
}
