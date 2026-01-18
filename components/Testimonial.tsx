import React from 'react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <blockquote className="mb-12">
            <p
              className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-12 italic"
              style={{ color: 'var(--navy)' }}
            >
              "Cuando tengo un caso complicado, no me arriesgo. Lo mando a Reytek porque sé que va a quedar bien a la primera. Mi reputación depende de ello."
            </p>
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col items-center">
            {/* Decorative line */}
            <div className="w-16 h-px mb-6" style={{ backgroundColor: 'var(--gold)' }}></div>

            <cite className="not-italic">
              <p
                className="font-semibold text-lg mb-2"
                style={{ color: 'var(--navy)' }}
              >
                Dr. Roberto Sosa
              </p>
              <p
                className="text-sm font-light"
                style={{ color: 'var(--text-light)' }}
              >
                Implantólogo, Ciudad de México
              </p>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};
