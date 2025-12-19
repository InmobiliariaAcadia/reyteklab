// Reytek Mastery Application - Build Version 1.2.0 (Stable)
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HeritageSection } from './components/HeritageSection';
import { MasteryGallery } from './components/MasteryGallery';
import { StrategySection } from './components/StrategySection';
import { ValueSection } from './components/ValueSection';
import { DigitalSection } from './components/DigitalSection';
import { AuthoritySection } from './components/AuthoritySection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-[#1A2A40] selection:text-white">
      <Header isScrolled={scrolled} />
      <main>
        <Hero />
        <HeritageSection />
        <MasteryGallery />
        <StrategySection />
        <ValueSection />
        <DigitalSection />
        <AuthoritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;