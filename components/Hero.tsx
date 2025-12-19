
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=90&w=2000&grayscale=true" 
          alt="Luxury Clinical Environment" 
          className="w-full h-full object-cover opacity-[0.12] animate-zoom"
        />
        <div className="absolute inset-0 technical-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-6 mb-12">
          <div className="w-12 h-[1px] bg-slate-200"></div>
          <span className="text-[9px] uppercase tracking-[0.6em] text-slate-400 font-bold italic">La Alta Costura de la Odontología</span>
          <div className="w-12 h-[1px] bg-slate-200"></div>
        </div>
        
        <h1 className="text-6xl md:text-[8rem] font-serif text-slate-900 mb-10 leading-[0.9] tracking-tight">
          Reytek <br />
          <span className="italic font-normal text-slate-400">Mastery.</span>
        </h1>
        
        <p className="text-[10px] md:text-xs text-slate-500 font-light max-w-2xl mx-auto mb-20 kerning-luxury uppercase leading-loose">
          Definiendo el calibre de la rehabilitación oral premium. <br />40 años custodiando el prestigio de los mejores especialistas.
        </p>
        
        <div className="flex flex-col items-center">
          <button className="group relative overflow-hidden bg-slate-900 text-white px-14 py-7 text-[10px] uppercase tracking-[0.4em] font-semibold transition-all hover:shadow-[0_30px_60px_rgba(15,23,42,0.1)]">
            <span className="relative z-10">Solicitar Protocolo de Socio</span>
            <div className="absolute inset-0 bg-slate-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
        <span className="text-[8px] uppercase tracking-[0.4em] text-slate-300">Explorar Calidad Perpetua</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-200 to-transparent"></div>
      </div>
    </section>
  );
};
