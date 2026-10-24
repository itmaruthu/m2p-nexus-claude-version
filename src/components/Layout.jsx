import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import MobileContactBar from './MobileContactBar';
import ConsultationProvider from './consultation/ConsultationProvider';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Automatically scroll back to top of page on route shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <ConsultationProvider>
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text font-sans antialiased">
      <Header />
      <main id="main" tabIndex={-1} className="flex-grow outline-none">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </div>
    </ConsultationProvider>
  );
}
