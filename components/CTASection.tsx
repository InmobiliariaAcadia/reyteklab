
import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-48 bg-white overflow-hidden relative">
      <div className="container mx-auto px-8 relative z-10 text-center">
        <div className="silver-line mb-20 w-1/2 mx-auto"></div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl md:text-7xl font-serif text-slate-900 mb-12">
            Inicie su legado con <br />
            <span className="italic font-normal">autoridad técnica.</span>
          </h3>
          <p className="text-slate-400 text-sm mb-12 max-w-xl mx-auto font-light leading-relaxed kerning-luxury uppercase">
            Únase a la élite de especialistas que entienden que su reputación es su activo más valioso.
          </p>
          
          <div className="inline-block bg-slate-50 border border-slate-100 p-10 mb-16 rounded-sm max-w-2xl">
            <span className="block text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-4">Protocolo de Bienvenida 2024</span>
            <span className="block text-2xl font-serif text-slate-900 mb-4">Entrevista de Alineación Clínica</span>
            <p className="text-[10px] text-slate-400 leading-relaxed font-light uppercase tracking-[0.2em]">
              Un proceso exhaustivo de cinco puntos (oclusión, contactos, estética) para asegurar que cada caso que recibamos sea una obra maestra compartida.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-12">
            <button className="group bg-slate-900 text-white px-16 py-8 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-slate-800 transition-all hover:shadow-[0_40px_80px_rgba(15,23,42,0.15)]">
              Agendar Consultoría Privada
            </button>
            
            <div className="flex space-x-12 opacity-30 grayscale items-center">
              <span className="text-[8px] tracking-[0.4em] font-bold uppercase">40 Years Mastery</span>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <span className="text-[8px] tracking-[0.4em] font-bold uppercase">Clinical Partner</span>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <span className="text-[8px] tracking-[0.4em] font-bold uppercase">Zero-Adjust Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-[1px] bg-slate-100"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-[1px] bg-slate-100"></div>
    </section>
  );
};
