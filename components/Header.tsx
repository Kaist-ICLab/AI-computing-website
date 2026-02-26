import React from "react";
import { ArrowDown } from "lucide-react";

interface HeaderProps {
  t: any;
  onNext: () => void;
}

const Header: React.FC<HeaderProps> = ({ t, onNext }) => {
  return (
    <header className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 bg-gradient-to-br from-[#243C8F] via-[#2E4FA5] to-[#1F357F]">

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] bg-blue-400/20 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-sky-400/20 rounded-full blur-[140px]" />

      <svg
        className="absolute bottom-20 left-0 w-full opacity-10"
        viewBox="0 0 1440 200"
        fill="none"
      >
        <path
          d="M0 100 Q 360 20 720 100 T 1440 100"
          stroke="white"
          strokeWidth="1"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

        <div className="inline-block mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-blue-200 text-[10px] font-bold tracking-[0.4em] uppercase px-6 py-2 border border-blue-300/30 rounded-full backdrop-blur-sm bg-blue-950/20">
            KAIST AI Computing
          </span>
        </div>

        <h1 className="text-3xl md:text-6xl min-h-[72px] font-extrabold mb-4 leading-normal bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          {t.title}
        </h1>

        <p className="max-w-3xl mx-auto text-sm md:text-lg text-blue-100/80 mb-10 font-normal leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
          <button
            onClick={onNext}
            className="bg-[#002380]/90 hover:bg-[#002380] px-8 py-3 rounded-md text-sm font-medium transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center justify-center gap-3 text-white"
          >
            {t.cta}
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href="https://gradapply.kaist.ac.kr"
            target="_blank"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-3 rounded-md text-sm font-medium border border-white/30 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center text-white"
          >
            Admissions 2026
          </a>
        </div>
      </div>

      <svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,64L360,96C720,128,1080,32,1440,64L1440,120L0,120Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;