import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';

// Home is the landing page, so it ships in the main bundle; every other page loads on demand.
// Pre-rendered HTML already contains each page, so this only affects when its JavaScript arrives.
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Founder = lazy(() => import('./pages/Founder'));
const Contact = lazy(() => import('./pages/Contact'));
const Connect = lazy(() => import('./pages/Connect'));
const Tamil = lazy(() => import('./pages/Tamil'));
const Book = lazy(() => import('./pages/Book'));
const NotFound = lazy(() => import('./pages/NotFound'));

// The router is supplied by the caller: BrowserRouter in main.jsx, StaticRouter in entry-server.jsx.
export default function App() {
  return (
    // reducedMotion="user" turns off framer-motion transforms for visitors who ask the OS for less motion.
    <MotionConfig reducedMotion="user">
      <Layout>
        {/* Full-height placeholder keeps the footer below the fold while a page chunk loads (no layout shift). */}
        <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/ta" element={<Tamil />} />
            <Route path="/book" element={<Book />} />
            <Route path="/ta/book" element={<Book lang="ta" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </MotionConfig>
  );
}
