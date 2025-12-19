
import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden" id="soluciones">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-900 overflow-hidden">
              <img 
                src="https://picsum.photos/id/445/800/1000?grayscale" 
                alt="Expert Artisan Hands" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#B9975B] p-12 hidden lg:block">
              <p className="text-black text-4xl font-serif font-bold">40</p>
              <p className="text-black text-[10px] uppercase tracking-[0.2em] font-bold">Años de Maestría</p>
            </div>
          </div>

          <div>
            <h2 className="text-[#B9975B] uppercase tracking-[0.3em] text-xs font-bold mb-6">Nuestra Filosofía</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">
              Alta Costura Dental: <br />
              <span className="text-white/80 font-normal italic">Precisión Humana.</span>
            </h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              En Reytek, no maquilamos dientes; diseñamos soluciones clínicas. Fusionamos la vanguardia digital (CAD/CAM) con la sensibilidad de maestros ceramistas que entienden la translucidez, la textura y la biología.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full border border-[#B9975B] flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 bg-[#B9975B]"></div>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-2 uppercase tracking-wide">Soporte Técnico de Directo</h5>
                  <p className="text-white/40 text-sm">Acceso directo a nuestros expertos para calibrar casos complejos antes de fabricar.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full border border-[#B9975B] flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 bg-[#B9975B]"></div>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-2 uppercase tracking-wide">Protocolo de Cero Errores</h5>
                  <p className="text-white/40 text-sm">Cada pieza atraviesa 5 filtros de calidad microscópica antes de salir del laboratorio.</p>
                </div>
              </div>
            </div>

            <button className="group flex items-center space-x-4 text-[#B9975B] uppercase tracking-widest text-xs font-bold">
              <span>Conozca nuestro proceso</span>
              <div className="w-12 h-px bg-[#B9975B] group-hover:w-20 transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
