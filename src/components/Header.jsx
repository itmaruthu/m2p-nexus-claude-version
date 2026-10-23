import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import m2pLogo from '../assets/m2p_nexus_logo.webp';
import { links } from '../config/site';
import { WhatsAppIcon } from './icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Founder', path: '/founder' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  // The menu remembers the page it was opened on, so any navigation (links, back button) closes it.
  const [menuOpenOn, setMenuOpenOn] = useState(null);
  const isMenuOpen = menuOpenOn === location.pathname;
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // While the drawer is open: lock page scroll, focus the drawer, keep Tab inside it, close on Escape,
  // and hand focus back to the menu button afterwards.
  useEffect(() => {
    if (!isMenuOpen) return;
    const drawer = drawerRef.current;
    const toggle = toggleRef.current;
    const focusables = () => drawer.querySelectorAll('a[href], button:not([disabled])');
    focusables()[0]?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpenOn(null);
      } else if (e.key === 'Tab') {
        const items = focusables();
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      toggle?.focus();
    };
  }, [isMenuOpen]);

  const closeMenu = () => setMenuOpenOn(null);

  // The Connect QR landing page is a standalone digital business card.
  if (location.pathname === '/connect') return null;

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md border-b border-brand-border py-1' : 'py-2'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-brand-secondary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center select-none h-[70px]" aria-label="M2P Nexus home">
            <img
              src={m2pLogo}
              alt="M2P Nexus"
              width="96"
              height="64"
              className="h-[64px] w-auto object-contain drop-shadow-sm"
            />
          </Link>

          {/* CENTER: Navigation Links */}
          <nav aria-label="Main" className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-brand-secondary ${
                    isActive
                      ? 'text-brand-secondary font-semibold border-b-2 border-brand-secondary pb-1'
                      : 'text-brand-text'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT: Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#0F7A40] hover:bg-[#25D366]/10 px-4 py-2 rounded-md transition-all flex items-center gap-1.5 border border-[#25D366]/40"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="text-sm font-semibold bg-brand-secondary text-white hover:bg-brand-primary px-4 py-2.5 rounded-md transition-all shadow-sm hover:shadow-md flex items-center gap-1"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Hamburger Menu Icon (Mobile/Tablet) */}
          <div className="flex lg:hidden items-center">
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpenOn(isMenuOpen ? null : location.pathname)}
              className="text-brand-primary p-2 rounded-md cursor-pointer"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER - Slide-in navigation drawer. Portalled to <body> so it stacks above the
          floating call/WhatsApp buttons instead of being trapped in the sticky header's z-40 layer. */}
      {isMenuOpen && createPortal(
        <div className="fixed inset-0 z-[60] lg:hidden flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-brand-primary/50 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div
            id="mobile-menu"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="relative flex-1 flex flex-col max-w-xs w-full bg-white pt-5 pb-4 shadow-xl z-10 transition-transform duration-300"
          >
            <div className="flex items-center justify-between px-4 pb-4 border-b border-brand-border">
              <Link to="/" className="flex items-center" onClick={closeMenu} aria-label="M2P Nexus home">
                <img src={m2pLogo} alt="M2P Nexus" width="72" height="48" className="h-[48px] w-auto object-contain" />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="text-brand-primary p-2 rounded-md cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-5 flex-1 h-0 overflow-y-auto px-4">
              <nav aria-label="Main" className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `text-base font-semibold py-2 px-3 rounded-md transition-colors ${
                        isActive
                          ? 'bg-brand-section text-brand-secondary'
                          : 'text-brand-text hover:bg-brand-section/50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="px-4 py-6 border-t border-brand-border flex flex-col gap-3">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-[#0F7A40] text-white rounded-md font-semibold text-sm shadow hover:bg-[#0B6534] transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full py-3 bg-brand-secondary text-white rounded-md font-semibold text-sm shadow hover:bg-brand-primary transition-colors flex items-center justify-center gap-1.5"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
