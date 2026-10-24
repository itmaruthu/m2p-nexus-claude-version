import { createContext } from 'react';

const SITE_NAME = 'M2P Nexus';
const DEFAULT_DESCRIPTION =
  'Bridging the gap between traditional businesses and modern technology through AI-powered solutions, workforce excellence, and digital transformation.';

/**
 * During pre-rendering (src/entry-server.jsx) this context holds a collector, so each page's
 * title/description end up in that page's static HTML <head>. In the browser it is null.
 */
export const SeoContext = createContext(null);

/**
 * `lang` is the page language (written to <html lang>). `alternates` lists the same page in other
 * languages as { hreflang, path } (paths without the site base, e.g. '/ta/'), written as hreflang links.
 */
export function seoTags({ title, description, noindex, lang = 'en', alternates = [] }) {
  return {
    title: `${title} | ${SITE_NAME} - From Root to Success`,
    ogTitle: `${title} | ${SITE_NAME}`,
    description: description || DEFAULT_DESCRIPTION,
    noindex: Boolean(noindex),
    lang,
    alternates,
  };
}
