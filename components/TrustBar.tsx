import React from 'react';

export const TrustBar: React.FC = () => {
  const metrics = [
    {
      number: '40',
      label: 'Años de',
      sublabel: 'excelencia'
    },
    {
      number: '20+',
      label: 'Años promedio',
      sublabel: 'de experiencia'
    },
    {
      number: '2',
      label: 'Técnicos CDT',
      sublabel: 'en México'
    },
    {
      number: '12%',
      label: 'Tasa de',
      sublabel: 'repetición'
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center relative group"
            >
              {/* Number */}
              <div
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-premium"
                style={{ color: 'var(--navy)' }}
              >
                {metric.number}
              </div>

              {/* Label */}
              <div
                className="text-xs md:text-sm uppercase tracking-[0.2em] font-light leading-relaxed"
                style={{ color: 'var(--text-light)' }}
              >
                {metric.label}
                <br />
                {metric.sublabel}
              </div>

              {/* Decorative line on hover */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-px opacity-0 group-hover:opacity-100 transition-premium"
                style={{ backgroundColor: 'var(--gold)' }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
