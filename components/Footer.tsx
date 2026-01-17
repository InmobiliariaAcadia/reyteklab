
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-32 border-t border-slate-100">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-5">
            <h4 className="text-slate-900 font-serif font-bold text-3xl tracking-[0.2em] mb-8">REYTEK</h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed max-w-xs mb-10 italic">
              "Nuestro Legado No es Nuestro Ancla, es Nuestra Plataforma."
            </p>
            <p className="text-slate-400 text-[10px] font-light leading-relaxed max-w-xs mb-10">
              Desde 1984, custodiando la excelencia técnica y estética en la rehabilitación oral. 40 años de reputación adaptados a un nuevo mundo digital.
            </p>
            <div className="flex space-x-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-900 transition-colors text-[9px] uppercase tracking-widest font-bold">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-900 transition-colors text-[9px] uppercase tracking-widest font-bold">LinkedIn</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-900 transition-colors text-[9px] uppercase tracking-widest font-bold">YouTube</a>
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-slate-900 text-[9px] uppercase tracking-[0.3em] font-bold mb-10">Estructura</h5>
              <ul className="text-slate-400 text-[9px] uppercase tracking-[0.2em] space-y-5 font-light">
                <li>CDMX Atelier</li>
                <li>Mérida Studio</li>
                <li>Logística Nacional</li>
                <li>Seguimiento de Casos</li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-900 text-[9px] uppercase tracking-[0.3em] font-bold mb-10">Socio Clínico</h5>
              <ul className="text-slate-400 text-[9px] uppercase tracking-[0.2em] space-y-5 font-light">
                <li>Guía de Preparación</li>
                <li>Hoja de Receta Digital</li>
                <li>Protocolo de Ajuste</li>
                <li>Garantía Reytek</li>
              </ul>
            </div>
            <div>
              <h5 className="text-slate-900 text-[9px] uppercase tracking-[0.3em] font-bold mb-10">Contacto</h5>
              <ul className="text-slate-400 text-[9px] uppercase tracking-[0.2em] space-y-5 font-light">
                <li>socios@reytek.clinic</li>
                <li>01 800 PRECISN</li>
                <li>Horario Técnico: <br/>09:00 - 18:00</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-[8px] uppercase tracking-[0.4em] text-slate-300 font-medium">
          <p>© 2024 REYTEK PRECISION DENTAL. 40 AÑOS DEFINIENDO EL FUTURO.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <span className="text-slate-300">Aviso de Privacidad</span>
            <span className="text-slate-300">Términos Técnicos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
