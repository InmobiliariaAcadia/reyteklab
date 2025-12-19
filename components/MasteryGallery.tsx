
import React from 'react';

export const MasteryGallery: React.FC = () => {
  return (
    <section className="py-40 bg-[#F8F9FA] relative overflow-hidden">
      {/* Decorative Textures */}
      <div className="absolute top-20 left-10 w-32 h-64 bg-slate-900/5 -rotate-12 pointer-events-none hidden lg:block"></div>
      
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Collage Layout - Strictly Dental Imagery */}
          <div className="lg:w-2/3 grid grid-cols-12 gap-6 relative">
            
            {/* Macro Image: The Crown / Ceramic Detail */}
            <div className="col-span-12 md:col-span-8 group overflow-hidden bg-white p-2 shadow-xl border border-slate-100">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1620331311520-246422ff83f9?auto=format&fit=crop&q=90&w=1200&grayscale=true" 
                  alt="Ceramic Translucency Mastery" 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className="mt-4 p-4">
                <span className="text-[7px] uppercase tracking-[0.5em] text-slate-400 block mb-2">Ref: P-04 / Morfología Natural</span>
                <p className="text-xs font-serif italic text-slate-800">"La luz debe ser capturada, no reflejada."</p>
              </div>
            </div>

            {/* Authority Figure: The Specialist */}
            <div className="col-span-12 md:col-span-4 md:mt-24 group overflow-hidden bg-white p-2 shadow-lg border border-slate-100">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=90&w=800&grayscale=true" 
                  alt="Clinical Partner" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:brightness-100 transition-all duration-1000"
                />
              </div>
              <div className="p-4 bg-slate-900 text-white">
                <span className="text-[7px] uppercase tracking-[0.4em] font-bold">Validación Clínica de Élite</span>
              </div>
            </div>

            {/* Technical Detail: Precision Milling */}
            <div className="col-span-12 md:col-span-6 md:-mt-12 group overflow-hidden bg-white p-2 shadow-lg border border-slate-100">
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=90&w=800&grayscale=true" 
                  alt="Digital Milling Engineering" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-1000"
                />
              </div>
              <div className="p-4 border-t border-slate-50">
                <span className="text-[7px] uppercase tracking-[0.4em] text-slate-400">Proceso: Protocolo CAD/CAM 5-Axis</span>
              </div>
            </div>

            {/* Lab Environment: Artistry & Powder */}
            <div className="col-span-12 md:col-span-6 md:mt-8 group overflow-hidden bg-white p-2 shadow-lg border border-slate-100">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558350315-8aa00e8e4590?auto=format&fit=crop&q=90&w=800&grayscale=true" 
                  alt="Ceramic Powder Palette" 
                  className="w-full h-full object-cover transition-all duration-[2s] group-hover:rotate-1"
                />
              </div>
              <div className="p-4">
                <span className="text-[7px] uppercase tracking-[0.4em] text-slate-400">Paleta de Porcelanas Nobles</span>
              </div>
            </div>
          </div>

          {/* Sidebar Narrative */}
          <div className="lg:w-1/3 pt-12">
            <div className="sticky top-40">
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-slate-400 font-bold mb-10 italic">La Curaduría del Ajuste</h2>
              <h3 className="text-4xl font-serif text-slate-900 mb-12 leading-tight">
                Piezas Únicas, <br />
                <span className="text-slate-400 italic font-light">Resultados Perpetuos.</span>
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed mb-12">
                En Reytek, el laboratorio dental trasciende la manufactura para convertirse en un centro de bio-ingeniería estética. Cada corona, cada carilla, es una inversión en la reputación del dentista y la satisfacción de su paciente más exigente.
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-[1px] bg-slate-200"></div>
                <span className="text-[8px] tracking-[0.4em] text-slate-900 uppercase font-bold">Standard of Excellence</span>
              </div>

              {/* Aesthetic Color Markers */}
              <div className="flex space-x-2">
                <div className="w-8 h-12 bg-slate-900"></div>
                <div className="w-8 h-12 bg-slate-400"></div>
                <div className="w-8 h-12 bg-[#EAE3D2]"></div>
                <div className="w-8 h-12 bg-[#1A3A5F]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
