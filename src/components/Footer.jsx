import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MapPin } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { CallIcon, WhatsAppIconLink } from './CallIcon';
import m2pLogo from '../assets/m2p_nexus_logo.webp';
import { links, site } from '../config/site';
import { LinkedinIcon } from './icons';
import { useIsConnectPage } from './useIsConnectPage';
import useSpotlight from './useSpotlight';
import Tooltip from './Tooltip';

const base = import.meta.env.BASE_URL;

const company = [
  { to: '/about', label: 'About us' },
  { to: '/founder', label: 'Founders' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
];

// Plain <a> for #fragments: React Router's <Link> does not scroll to them on its own.
const services = [
  { href: `${base}services/#run`, label: 'Run your business' },
  { href: `${base}services/#smarter`, label: 'Work smarter' },
  { href: `${base}services/#grow`, label: 'Grow' },
  { href: `${base}services/`, label: 'All services' },
];

const iconLink =
  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 transition-colors hover:bg-white hover:text-ink';
const navLink = 'inline-flex min-h-11 min-w-11 items-center text-slate-300 transition-colors hover:text-white';

/** Current time in Madurai, filled in after hydration so server and client HTML match. */
function MaduraiTime() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const every = setInterval(tick, 30000);
    return () => {
      clearTimeout(first);
      clearInterval(every);
    };
  }, []);
  if (!now) return <span>Madurai, India</span>;
  const time = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit' }).format(now);
  return (
    <span>
      It&rsquo;s <time className="font-semibold text-white tabular-nums">{time}</time> in Madurai
    </span>
  );
}

/**
 * Site footer: a deep ink band with film grain, the contact actions as icon buttons (no printed phone
 * numbers), link columns, the live time in Madurai, and a giant "M2P Nexus" wordmark that a marigold light
 * reveals under the pointer (a soft static gradient on touch screens). Hidden on the Connect card page.
 */
export default function Footer() {
  const isConnectPage = useIsConnectPage();
  const reduce = useReducedMotion();
  const glow = useSpotlight();
  const mark = useSpotlight();

  if (isConnectPage) return null;

  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

  return (
    <footer ref={glow} className="relative overflow-hidden bg-[#0A1230] text-slate-300 grain spotlight pb-24 md:pb-0">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#F2A900_30%,#3FA866_70%,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-5">
            <Link to="/" className="inline-flex rounded-2xl bg-white px-4 py-2.5 shadow-lift" aria-label="M2P Nexus home">
              <img src={m2pLogo} alt="" width="72" height="48" loading="lazy" className="h-12 w-auto object-contain" />
            </Link>
            <p className="max-w-sm text-lg leading-relaxed text-slate-300">
              Software, AI, hiring and marketing for growing businesses, from one team in Madurai.
            </p>
            <a
              href={links.email()}
              className="inline-block break-all py-1.5 font-display text-2xl font-bold text-white underline decoration-marigold decoration-2 underline-offset-[10px] transition-colors hover:decoration-white sm:text-3xl"
            >
              {site.email}
            </a>
            <ul aria-label="Other ways to reach us" className="flex flex-wrap gap-3">
              <li>
                <CallIcon line={0} tone="dark" />
              </li>
              <li>
                <CallIcon line={1} tone="dark" />
              </li>
              <li>
                <WhatsAppIconLink href={links.whatsapp} tone="dark" />
              </li>
              <li>
                <Tooltip label="Open M2P Nexus on LinkedIn" tone="dark">
<a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open M2P Nexus on LinkedIn (opens in a new tab)"
                  className={iconLink}
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
</Tooltip>
              </li>
              <li>
                <Tooltip label="Find us on Google Maps" tone="dark">
<a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Find us on Google Maps (opens in a new tab)"
                  className={iconLink}
                >
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </a>
</Tooltip>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <nav aria-labelledby="footer-company">
              <h2 id="footer-company" className="font-heading text-sm font-semibold text-marigold">
                Company
              </h2>
              <ul className="mt-2">
                {company.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className={navLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-labelledby="footer-services">
              <h2 id="footer-services" className="font-heading text-sm font-semibold text-marigold">
                Services
              </h2>
              <ul className="mt-2">
                {services.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={navLink}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="font-heading text-sm font-semibold text-marigold">Visit us</h2>
              <address className="mt-4 not-italic leading-relaxed text-slate-300">
                Sithalangudi, Madurai
                <br />
                Tamil Nadu 625221, India
              </address>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-300">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#3FA866] shadow-[0_0_10px_2px_rgba(63,168,102,0.6)]" />
                <MaduraiTime />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} M2P Nexus. All rights reserved.</p>
          <p>
            <span lang="ta" className="font-semibold text-marigold">வேரிலிருந்து வெற்றிவரை</span>
            <span> From Roots to Success</span>
          </p>
          <button
            type="button"
            onClick={toTop}
            className="inline-flex items-center gap-2 self-start rounded-full px-1 py-2 font-semibold text-white transition-colors hover:text-marigold sm:self-auto"
          >
            Back to top
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-white/25">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>

      {/* Signature wordmark: revealed by a marigold light under the pointer. Decorative. */}
      <div ref={mark} aria-hidden="true" className="mark-spot relative z-10 select-none overflow-hidden">
        <p className="footer-mark -mb-[0.18em] whitespace-nowrap text-center font-display text-[min(14vw,15rem)] font-bold leading-[0.9] tracking-[-0.04em]">
          M2P Nexus
        </p>
      </div>
    </footer>
  );
}
