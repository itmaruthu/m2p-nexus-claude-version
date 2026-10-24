import { useContext, useEffect } from 'react';
import { SeoContext, seoTags } from './seoContext';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return el;
}

export default function Seo({ title, description, noindex = false, lang = 'en', alternates = [] }) {
  const collect = useContext(SeoContext);
  if (collect) collect(seoTags({ title, description, noindex, lang, alternates }));

  // Client-side navigation: keep <head> in sync with the current page.
  useEffect(() => {
    const tags = seoTags({ title, description, noindex });
    document.title = tags.title;
    setMeta('name', 'description', tags.description);
    setMeta('property', 'og:title', tags.ogTitle);
    setMeta('property', 'og:description', tags.description);
    const robots = noindex ? setMeta('name', 'robots', 'noindex') : document.head.querySelector('meta[name="robots"]');
    if (!noindex) robots?.remove();
    document.documentElement.lang = lang;
  }, [title, description, noindex, lang]);

  return null;
}
