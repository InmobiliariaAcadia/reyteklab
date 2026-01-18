// Reytek Premium - The Laboratory of Specialists
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { WhyReytek } from './components/WhyReytek';
import { Difference } from './components/Difference';
import { Testimonial } from './components/Testimonial';
import { Process } from './components/Process';
import { DigitalSection } from './components/DigitalSection';
import { Certifications } from './components/Certifications';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cream)' }}>
      <Header isScrolled={scrolled} />
      <main>
        <Hero />
        <TrustBar />
        <WhyReytek />
        <Difference />
        <Testimonial />
        <Process />
        <DigitalSection />
        <Certifications />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
