
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        isScrolled ? 'glass-effect py-4' : 'bg-transparent py-10'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex flex-col group cursor-pointer">
          <span className="text-xl font-serif font-bold tracking-[0.4em] text-slate-900 group-hover:text-slate-500 transition-colors">REYTEK</span>
          <span className="text-[8px] uppercase tracking-[0.6em] text-slate-400 mt-1 font-light italic">Estándar de Autoridad</span>
        </div>
        
        <nav className="hidden lg:flex space-x-14 items-center text-[9px] uppercase tracking-[0.3em] font-semibold text-slate-400">
          <a href="#valor" className="hover:text-slate-900 transition-colors py-2 border-b border-transparent hover:border-slate-900">Legado</a>
          <a href="#digital" className="hover:text-slate-900 transition-colors py-2 border-b border-transparent hover:border-slate-900">Ingeniería</a>
          <a href="#autoridad" className="hover:text-slate-900 transition-colors py-2 border-b border-transparent hover:border-slate-900">Validación</a>
          <button className="bg-slate-900 text-white px-10 py-4 hover:shadow-xl transition-all active:scale-95 tracking-[0.3em]">
            ONBOARDING CLÍNICO
          </button>
        </nav>

        <button className="lg:hidden text-slate-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
