
import React from 'react';

export const ProblemSection: React.FC = () => {
  const points = [
    {
      title: "Tiempo Perdido",
      desc: "Minutos invaluables de sillón gastados en ajustes oclusales que no deberían existir."
    },
    {
      title: "Estrés Clínico",
      desc: "La incomodidad de explicarle a un paciente premium por qué su restauración debe 'regresarse'."
    },
    {
      title: "Costo de lo 'Barato'",
      desc: "Lo que ahorra en la factura del laboratorio, lo paga doble en reputación y tiempo operativo."
    }
  ];

  return (
    <section className="py-24 bg-white text-black" id="experiencia">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="md:w-1/2">
            <h2 className="text-[#B9975B] uppercase tracking-[0.2em] text-xs font-bold mb-4">El dilema del especialista</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              ¿Cuánto le cuesta realmente un laboratorio de bajo costo?
            </h3>
          </div>
          <div className="md:w-1/3 pt-4">
            <p className="text-lg text-black/60 font-light leading-relaxed italic">
              "En la odontología de alta gama, el verdadero lujo no es el material, es que la pieza encaje perfectamente a la primera."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, idx) => (
            <div key={idx} className="group border-b border-black/10 pb-12 hover:border-[#B9975B] transition-all duration-500">
              <span className="text-5xl font-serif text-[#B9975B]/20 mb-6 block">0{idx + 1}</span>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">{point.title}</h4>
              <p className="text-black/70 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
