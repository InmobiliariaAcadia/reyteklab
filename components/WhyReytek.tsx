import React from 'react';

export const WhyReytek: React.FC = () => {
  const reasons = [
    {
      title: 'Técnicos Certificados',
      items: [
        'Únicos 2 CDT en México certificados por NBC',
        '20+ años de experiencia promedio',
        'Formados en sistema PTC americano'
      ]
    },
    {
      title: 'Materiales Certificados ADA',
      items: [
        '100% materiales American Dental Association',
        'Sin atajos, sin sustitutos',
        'Trazabilidad completa'
      ]
    },
    {
      title: 'Soporte Técnico Real',
      items: [
        'Habla con técnicos, no con máquinas',
        'Consulta de casos complejos incluida',
        'Atención personalizada garantizada'
      ]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--cream)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 technical-grid"></div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
            <span
              className="text-xs uppercase tracking-[0.3em] font-medium"
              style={{ color: 'var(--gold)' }}
            >
              Por Qué Reytek
            </span>
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
          </div>

          <h2
            className="font-serif text-5xl md:text-6xl mb-8 leading-tight"
            style={{ color: 'var(--navy)' }}
          >
            El estándar que otros<br />intentan alcanzar
          </h2>

          <p
            className="text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'var(--text-light)' }}
          >
            No somos el laboratorio más barato. Somos el laboratorio que eligen<br className="hidden md:block" />
            los especialistas que no pueden permitirse errores.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-10 relative transition-premium hover:-translate-y-2"
              style={{ backgroundColor: 'var(--white)' }}
            >
              {/* Top border - appears on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: 'var(--gold)' }}
              ></div>

              {/* Number */}
              <div
                className="font-serif text-6xl opacity-10 mb-6"
                style={{ color: 'var(--navy)' }}
              >
                0{index + 1}
              </div>

              {/* Title */}
              <h3
                className="font-serif text-3xl mb-8 leading-tight"
                style={{ color: 'var(--navy)' }}
              >
                {reason.title}
              </h3>

              {/* Items */}
              <ul className="space-y-4">
                {reason.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-base font-light"
                    style={{ color: 'var(--text)' }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0"
                      style={{ backgroundColor: 'var(--gold)' }}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
