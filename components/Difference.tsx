import React from 'react';

export const Difference: React.FC = () => {
  const comparisons = [
    { label: 'Tasa de repetición', average: '25%', reytek: '12%' },
    { label: 'Experiencia de técnicos', average: '3 años', reytek: '20+ años' },
    { label: 'Técnicos CDT certificados', average: '0', reytek: '2' },
    { label: 'Soporte técnico personal', average: '—', reytek: '✓' },
    { label: 'Materiales certificados', average: 'Variable', reytek: '100%' }
  ];

  return (
    <section
      id="diferencia"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--navy)' }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 technical-grid"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
            <span
              className="text-xs uppercase tracking-[0.3em] font-medium"
              style={{ color: 'var(--gold)' }}
            >
              La Diferencia
            </span>
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
          </div>

          <h2
            className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight"
          >
            Lo barato sale caro
          </h2>

          <p
            className="text-lg md:text-xl font-light leading-relaxed"
            style={{ color: 'var(--cream-dark)' }}
          >
            Cada repetición cuesta tiempo, dinero y la confianza de su paciente.
          </p>
        </div>

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: `2px solid var(--gold)` }}>
                  <th className="pb-6 pr-8 text-left">
                    <span className="text-sm uppercase tracking-[0.2em] font-medium opacity-60 text-white">
                      Comparativa
                    </span>
                  </th>
                  <th className="pb-6 px-6 text-center">
                    <span className="text-sm uppercase tracking-[0.2em] font-medium opacity-60 text-white">
                      Laboratorio<br />Promedio
                    </span>
                  </th>
                  <th className="pb-6 pl-6 text-center">
                    <span
                      className="text-sm uppercase tracking-[0.2em] font-bold"
                      style={{ color: 'var(--gold)' }}
                    >
                      REYTEK
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className="transition-premium hover:bg-white/5"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <td className="py-6 pr-8">
                      <span className="text-base font-light text-white">
                        {item.label}
                      </span>
                    </td>
                    <td className="py-6 px-6 text-center">
                      <span className="text-lg font-light opacity-60 text-white">
                        {item.average}
                      </span>
                    </td>
                    <td className="py-6 pl-6 text-center">
                      <span
                        className="text-lg font-semibold"
                        style={{ color: 'var(--gold)' }}
                      >
                        {item.reytek}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <p className="text-xs text-center mt-8 opacity-40 text-white italic">
            *Datos basados en estadísticas internas y promedios de la industria
          </p>
        </div>
      </div>
    </section>
  );
};
