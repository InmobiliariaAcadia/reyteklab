
import React from 'react';

export const HeritageSection: React.FC = () => {
  return (
    <section className="py-40 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-white p-1 shadow-[0_50px_100px_rgba(0,0,0,0.05)] relative z-10 group">
              <div className="w-full h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=1200&grayscale=true" 
                  alt="Traditional Lab Mastery" 
                  className="w-full h-full object-cover opacity-70 transition-transform duration-[3s] group-hover:scale-110"
                />
              </div>
              <div className="absolute top-10 left-10 text-white mix-blend-difference">
                <span className="text-[40px] font-serif leading-none block">1984</span>
                <div className="w-12 h-px bg-current mt-2"></div>
              </div>
            </div>
            
            {/* Annotation line like in watch engineering */}
            <div className="absolute -right-12 top-1/4 hidden xl:block">
              <div className="flex items-center space-x-4">
                <div className="w-32 h-px bg-slate-200"></div>
                <span className="text-[7px] uppercase tracking-[0.5em] text-slate-300">Nivel de Calibración: Alpha 1</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-slate-400 font-bold mb-10 italic">Custodios del Tiempo Clínico</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-slate-900 mb-12 leading-[1.1]">
              Un Legado que no se compra, <br />
              <span className="text-slate-400 italic font-light text-4xl md:text-5xl">se hereda.</span>
            </h3>
            <div className="space-y-10 max-w-lg">
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Durante cuatro décadas, Reytek ha sido el punto de referencia para los especialistas que no admiten compromisos. Lo que comenzó como un taller de alta maestría artesanal, hoy es la cúspide de la bio-ingeniería en México.
              </p>
              <div className="pt-8 border-t border-slate-200">
                <p className="text-[9px] uppercase tracking-[0.4em] text-slate-400 font-bold mb-2">Compromiso Perpetuo</p>
                <p className="text-xs text-slate-500 font-light italic">
                  "No fabricamos para hoy. Fabricamos para que su nombre, y el nuestro, sigan siendo sinónimo de autoridad clínica en 40 años más."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
