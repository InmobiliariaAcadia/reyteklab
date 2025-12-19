
import React from 'react';

export const ValueSection: React.FC = () => {
  const points = [
    {
      label: "CURATORÍA",
      title: "Concierge Técnico de Élite",
      desc: "Acceso privilegiado a nuestros maestros ceramistas. Resolvemos la complejidad biomecánica antes de la ejecución. Su tranquilidad es nuestra prioridad.",
      img: "https://images.unsplash.com/photo-1609188076864-c35269136b09?auto=format&fit=crop&q=80&w=600&grayscale=true"
    },
    {
      label: "PATRIMONIO",
      title: "Garantía de Autoridad",
      desc: "40 años blindando la reputación de los mejores especialistas de México. Materiales nobles y procesos certificados que trascienden modas.",
      img: "https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=600&grayscale=true"
    },
    {
      label: "PERFECCIÓN",
      title: "Ajuste Biológico Inmediato",
      desc: "Diseñamos para la excelencia, no para la urgencia. El ajuste perfecto a la primera es la firma de un clínico que valora su tiempo y el de su paciente.",
      img: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600&grayscale=true"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="valor">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-[0.04] select-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <path d="M300,400 Q300,350 350,350 L650,350 Q700,350 700,400 L700,700 Q700,800 500,800 Q300,800 300,700 Z" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-slate-900" />
          <line x1="250" y1="400" x2="750" y2="400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" className="text-slate-900" />
          <line x1="500" y1="200" x2="500" y2="850" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" className="text-slate-900" />
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-32 text-center">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold mb-8 italic">The Differentiator</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">
            Cuando la precisión deja de ser una opción<br />
            <span className="text-slate-400 font-light italic">para convertirse en una firma.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {points.map((p, i) => (
            <div key={i} className="group cursor-default relative">
              <div className="aspect-[4/5] bg-slate-50 mb-10 overflow-hidden relative border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-700">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 opacity-60"
                />
                <div className="absolute top-4 right-4 text-[8px] text-slate-400 font-medium tracking-widest uppercase bg-white/80 px-2 py-1">
                  Pilar de Prestigio: 0{i + 1}
                </div>
              </div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-slate-400 font-bold mb-5 block border-l border-slate-200 pl-4">{p.label}</span>
              <h4 className="text-2xl font-serif text-slate-900 mb-5">{p.title}</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
