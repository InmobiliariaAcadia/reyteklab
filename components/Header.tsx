import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-premium ${
        isScrolled ? 'glass-effect shadow-sm' : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'
      }}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-2xl font-bold tracking-[0.2em] transition-premium"
            style={{
              color: isScrolled ? 'var(--navy)' : 'var(--gold)'
            }}
          >
            REYTEK
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <a
              href="#nosotros"
              className="text-sm uppercase tracking-[0.15em] font-medium transition-premium hover:opacity-70"
              style={{
                color: isScrolled ? 'var(--text)' : 'var(--cream)'
              }}
            >
              Nosotros
            </a>
            <a
              href="#diferencia"
              className="text-sm uppercase tracking-[0.15em] font-medium transition-premium hover:opacity-70"
              style={{
                color: isScrolled ? 'var(--text)' : 'var(--cream)'
              }}
            >
              La Diferencia
            </a>
            <a
              href="#productos"
              className="text-sm uppercase tracking-[0.15em] font-medium transition-premium hover:opacity-70"
              style={{
                color: isScrolled ? 'var(--text)' : 'var(--cream)'
              }}
            >
              Productos
            </a>
            <a
              href="#contacto"
              className="text-sm uppercase tracking-[0.15em] font-medium transition-premium hover:opacity-70"
              style={{
                color: isScrolled ? 'var(--text)' : 'var(--cream)'
              }}
            >
              Contacto
            </a>

            {/* CTA Button */}
            <a
              href="https://wa.link/p5wky3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm uppercase tracking-[0.15em] font-semibold transition-premium hover:opacity-90"
              style={{
                backgroundColor: 'var(--gold)',
                color: 'var(--navy)'
              }}
            >
              Contactar →
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden transition-premium"
            aria-label="Toggle mobile menu"
            style={{
              color: isScrolled ? 'var(--navy)' : 'var(--gold)'
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
