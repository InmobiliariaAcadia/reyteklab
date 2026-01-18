import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Envíe su Caso',
      description: 'Descargue la receta, complete la información y envíe.'
    },
    {
      number: '02',
      title: 'Revisión Técnica',
      description: 'Un técnico revisa su caso. Si hay algo, le llamamos. Sin sorpresas.'
    },
    {
      number: '03',
      title: 'Entrega Garantizada',
      description: 'Reciba a tiempo, con garantía de ajuste perfecto.'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
            <span
              className="text-xs uppercase tracking-[0.3em] font-medium"
              style={{ color: 'var(--gold)' }}
            >
              Cómo Trabajamos
            </span>
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--gold)' }}></div>
          </div>

          <h2
            className="font-serif text-5xl md:text-6xl mb-8 leading-tight"
            style={{ color: 'var(--navy)' }}
          >
            Simple para usted.<br />
            Impecable para su paciente.
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-16 relative">
            {/* Connection line - hidden on mobile */}
            <div
              className="hidden md:block absolute top-12 left-0 right-0 h-px"
              style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }}
            ></div>

            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Circle number */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 mx-auto border-2 transition-premium hover:scale-110 z-10" style={{
                  backgroundColor: 'var(--white)',
                  borderColor: 'var(--gold)'
                }}>
                  <span
                    className="font-serif text-3xl font-bold"
                    style={{ color: 'var(--gold)' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-serif text-2xl md:text-3xl mb-6"
                  style={{ color: 'var(--navy)' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base font-light leading-relaxed"
                  style={{ color: 'var(--text)' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
