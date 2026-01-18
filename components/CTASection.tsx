import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section
      className="py-32 relative overflow-hidden gold-glow"
      style={{ backgroundColor: 'var(--navy)' }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 technical-grid"></div>
      </div>

      {/* Subtle gold glow effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at center, var(--gold) 0%, transparent 70%)'
        }}
      ></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
            <span
              className="text-xs uppercase tracking-[0.3em] font-medium"
              style={{ color: 'var(--gold)' }}
            >
              Comience Hoy
            </span>
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
          </div>

          {/* Main headline */}
          <h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight"
          >
            ¿Listo para trabajar<br />con los mejores?
          </h2>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl font-light mb-16 leading-relaxed"
            style={{ color: 'var(--cream-dark)' }}
          >
            Únase a los especialistas que confían en Reytek<br className="hidden md:block" />
            para sus casos más importantes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* Primary CTA - WhatsApp */}
            <a
              href="https://wa.link/p5wky3"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-12 py-6 text-sm uppercase tracking-[0.2em] font-bold transition-premium"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--navy)' }}
            >
              <span className="relative z-10">Contactar por WhatsApp</span>
              <div
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                style={{ backgroundColor: 'var(--gold-light)' }}
              ></div>
            </a>

            {/* Secondary CTA - Phone */}
            <a
              href="tel:+529999446160"
              className="px-12 py-6 text-sm uppercase tracking-[0.2em] font-bold border-2 transition-premium hover:bg-white/10"
              style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}
            >
              (999) 944-6160
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-50">
            <span className="text-xs uppercase tracking-wider text-white">
              40 Años de Excelencia
            </span>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--gold)' }}></div>
            <span className="text-xs uppercase tracking-wider text-white">
              5M+ Sonrisas
            </span>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--gold)' }}></div>
            <span className="text-xs uppercase tracking-wider text-white">
              2 CDT Certificados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
