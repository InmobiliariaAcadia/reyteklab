
import React from 'react';

export const AuthoritySection: React.FC = () => {
  return (
    <section className="py-32 bg-white" id="autoridad">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-slate-100 pb-12">
          <div className="max-w-xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold mb-8 italic">Clinical Validation</h2>
            <h3 className="text-5xl font-serif text-slate-900 leading-tight">La Confianza de <br/>los Especialistas.</h3>
          </div>
          <div className="mt-8 md:mt-0 opacity-40">
            <p className="text-[8px] uppercase tracking-[0.5em] text-slate-400 font-medium">Internal Review Document</p>
            <p className="text-[8px] uppercase tracking-[0.5em] text-slate-400 font-medium">Ref: 2024-QX-01</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
          <div className="bg-white p-20 group hover:bg-slate-50 transition-all duration-700">
            <div className="mb-12 flex space-x-1">
              {[1,2,3,4,5].map(s => <div key={s} className="w-1 h-1 bg-slate-900 rounded-full"></div>)}
            </div>
            <p className="text-2xl font-serif text-slate-900 italic leading-relaxed mb-12">
              "El nivel de soporte técnico que ofrece Reytek es el estándar de oro. No solo entregan restauraciones, entregan paz mental para mis casos de rehabilitación total más complejos."
            </p>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 group-hover:border-slate-400 transition-colors">
                 <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">DR</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-1">Dr. Alejandro Vales</p>
                <p className="text-[8px] text-slate-400 uppercase tracking-[0.3em] font-light">Especialista en Rehabilitación Oral</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-20 group hover:bg-slate-50 transition-all duration-700">
            <div className="mb-12 flex space-x-1">
              {[1,2,3,4,5].map(s => <div key={s} className="w-1 h-1 bg-slate-900 rounded-full"></div>)}
            </div>
            <p className="text-2xl font-serif text-slate-900 italic leading-relaxed mb-12">
              "En 40 años han sabido transitar de lo artesanal a lo digital sin perder la sensibilidad estética. Son el único laboratorio que garantiza ajuste cero a la primera en cada entrega."
            </p>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200 group-hover:border-slate-400 transition-colors">
                 <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">DRA</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-1">Dra. Beatriz Castillo</p>
                <p className="text-[8px] text-slate-400 uppercase tracking-[0.3em] font-light">DSD Certified / Cosmetic Dentistry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
