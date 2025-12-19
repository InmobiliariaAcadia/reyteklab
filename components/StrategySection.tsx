
import React from 'react';

export const StrategySection: React.FC = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold mb-8 italic">Strategic Distinction</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight">
            Autoridad sobre <br />
            <span className="italic text-slate-400 font-light">la Maquila.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 shadow-2xl">
          <div className="bg-white p-20 flex flex-col justify-between opacity-30 grayscale hover:grayscale-0 transition-all duration-700 cursor-not-allowed">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-8 block">El Estándar Industrial</span>
              <h4 className="text-3xl font-serif text-slate-900 mb-10">Manejo Genérico</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Flujos de trabajo automatizados donde el paciente es un número. Una aproximación donde la rapidez es la única métrica, dejando la responsabilidad estética al azar.
              </p>
            </div>
            <div className="mt-16 pt-10 border-t border-slate-50">
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-slate-300">Fuera de Protocolo Reytek</span>
            </div>
          </div>

          <div className="bg-slate-900 p-20 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 technical-grid opacity-10"></div>
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mb-8 block">El Estándar Reytek</span>
              <h4 className="text-3xl font-serif text-white mb-10 italic">Precisión Artesanal</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Custodiamos su reputación a través de la micro-perfección. Un modelo donde el ajuste biológico no es una meta, sino el punto de partida innegociable.
              </p>
            </div>
            <div className="mt-16 pt-10 border-t border-slate-700 relative z-10">
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-slate-400 uppercase">La Selección del Especialista</span>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 -rotate-45 translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-[9px] text-slate-400 font-light uppercase tracking-[0.6em]">
            Un Rolex no marca el tiempo mejor; define a quien lo porta.
          </p>
        </div>
      </div>
    </section>
  );
};
