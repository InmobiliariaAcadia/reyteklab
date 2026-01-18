import React from 'react';

const CertBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative w-20 h-20 mx-auto mb-4">
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
      <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      <path d="M40 20L44 32L56 32L46 40L50 52L40 44L30 52L34 40L24 32L36 32L40 20Z" fill="currentColor" opacity="0.15"/>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center font-serif font-bold text-2xl">
      {children}
    </div>
  </div>
);

export const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'PTC',
      subtitle: 'Certified',
      description: 'Productivity Training Corporation'
    },
    {
      name: 'ADA',
      subtitle: 'Materials',
      description: 'American Dental Association'
    },
    {
      name: 'NBC',
      subtitle: 'CDT',
      description: 'National Board Certification'
    },
    {
      name: 'CAD/CAM',
      subtitle: 'Tech',
      description: 'Digital Technology'
    }
  ];

  const partners = [
    'Straumann',
    'Nobel Biocare',
    '3M Lava',
    'Ivoclar',
    'Shofu'
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--cream-dark)' }}>
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
            <span
              className="text-xs uppercase tracking-[0.3em] font-medium"
              style={{ color: 'var(--gold)' }}
            >
              Certificaciones y Alianzas
            </span>
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
          </div>

          <h2
            className="font-serif text-5xl md:text-6xl mb-8 leading-tight"
            style={{ color: 'var(--navy)' }}
          >
            Respaldados por los mejores
          </h2>
        </div>

        {/* Certification Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative p-8 text-center group transition-premium hover:-translate-y-2"
              style={{ backgroundColor: 'var(--white)' }}
            >
              {/* Top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: 'var(--gold)' }}
              ></div>

              {/* Badge SVG */}
              <div className="transition-premium group-hover:scale-110" style={{ color: 'var(--gold)' }}>
                <CertBadge>{cert.name}</CertBadge>
              </div>

              {/* Subtitle */}
              <div
                className="text-sm uppercase tracking-wider font-semibold mb-3"
                style={{ color: 'var(--gold)' }}
              >
                {cert.subtitle}
              </div>

              {/* Description */}
              <div
                className="text-xs font-light leading-relaxed"
                style={{ color: 'var(--text-light)' }}
              >
                {cert.description}
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center max-w-4xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.2em] font-medium mb-6"
            style={{ color: 'var(--text-light)' }}
          >
            Alianzas Estratégicas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {partners.map((partner, index) => (
              <span
                key={index}
                className="text-base font-light opacity-60 hover:opacity-100 transition-premium"
                style={{ color: 'var(--navy)' }}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
