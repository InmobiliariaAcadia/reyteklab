import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 technical-grid"></div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10 text-center animate-fade-in-up">
        {/* Eyebrow with decorative lines */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <div className="w-16 h-px" style={{ background: 'var(--gold)' }}></div>
          <span
            className="text-xs uppercase tracking-[0.3em] font-medium"
            style={{ color: 'var(--gold)' }}
          >
            Desde 1987
          </span>
          <div className="w-16 h-px" style={{ background: 'var(--gold)' }}></div>
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto">
          El Laboratorio de <br />
          <span className="italic font-light" style={{ color: 'var(--gold-light)' }}>
            los Especialistas
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base md:text-lg font-light max-w-3xl mx-auto mb-16 leading-relaxed"
          style={{ color: 'var(--cream-dark)' }}
        >
          Más de 5,000,000 de sonrisas y casi 40 años nos respaldan.<br className="hidden md:block" />
          El estándar que otros intentan alcanzar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary CTA - WhatsApp */}
          <a
            href="https://wa.link/p5wky3"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-10 py-5 text-sm uppercase tracking-[0.2em] font-semibold transition-premium"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--navy)' }}
          >
            <span className="relative z-10">Hablar con un Asesor</span>
            <div
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              style={{ backgroundColor: 'var(--gold-light)' }}
            ></div>
          </a>

          {/* Secondary CTA */}
          <a
            href="#diferencia"
            className="px-10 py-5 text-sm uppercase tracking-[0.2em] font-semibold border-2 transition-premium hover:bg-white/10"
            style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}
          >
            Conocer la Diferencia →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 animate-fade-in-up">
        <span className="text-xs uppercase tracking-[0.3em] opacity-40 text-white">
          Descubrir Excelencia
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
    </section>
  );
};
