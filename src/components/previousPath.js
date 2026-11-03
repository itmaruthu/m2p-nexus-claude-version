// Remembers the page the visitor came from inside the site, so pages such as /book/ can offer
// "Back to Contact" instead of only the browser's back button. Layout records every route change.

let current = null;
let previous = null;

const clean = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

export function recordPath(pathname) {
  const p = clean(pathname);
  if (p === current) return;
  previous = current;
  current = p;
}

/** The in-site path visited before the current one, or null when the visitor landed here directly. */
export const previousPath = () => previous;

const NAMES = {
  en: { '/': 'Home', '/about': 'About', '/services': 'Services', '/industries': 'Industries', '/portfolio': 'Portfolio', '/founder': 'Founders', '/contact': 'Contact', '/ta': 'தமிழ் முகப்பு' },
  ta: { '/': 'Home', '/ta': 'முகப்பு', '/contact': 'Contact', '/portfolio': 'Portfolio', '/founder': 'Founders' },
};

/** Display name for an in-site path (falls back to Home). */
export const pageName = (path, lang = 'en') => NAMES[lang][path] || NAMES.en[path] || (lang === 'ta' ? 'முகப்பு' : 'Home');
