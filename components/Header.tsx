
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeaderProps {
  t: any;
  onNext: () => void;
}

const Header: React.FC<HeaderProps> = ({ t, onNext }) => {
  return (
    <header className="relative min-h-[90vh] flex items-center justify-center bg-blue-900 overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-sky-500/20 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-block mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-blue-200 text-[10px] font-black tracking-[0.4em] uppercase px-4 py-2 border border-blue-400/30 rounded-full backdrop-blur-sm bg-blue-950/20">
            KAIST College of AI
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          {t.title}
        </h1>
        
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-blue-100/70 mb-12 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
          <button 
            onClick={onNext}
            className="group px-10 py-4 bg-white text-blue-900 font-black rounded-full shadow-2xl hover:scale-105 transition-all uppercase tracking-widest text-[11px] flex items-center justify-center gap-3"
          >
            {t.cta}
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
          <a 
            href="https://gradapply.kaist.ac.kr"
            target="_blank"
            className="px-10 py-4 border-2 border-white/20 text-white font-black rounded-full hover:bg-white/5 hover:border-white transition-all uppercase tracking-widest text-[11px] flex items-center justify-center"
          >
            Admissions 2026
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
