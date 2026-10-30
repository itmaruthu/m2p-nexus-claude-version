import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import MobileContactBar from './MobileContactBar';

export default function Layout({ children }) {
  const { pathname, hash } = useLocation();

  // On route changes, go to the linked section (e.g. /portfolio/#build) or back to the top of the page
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text font-sans antialiased">
      <Header />
      <main id="main" tabIndex={-1} className="flex-grow outline-none">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </div>
  );
}
