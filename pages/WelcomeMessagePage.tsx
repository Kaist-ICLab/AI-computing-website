import React, { useContext } from "react";
import { LanguageContext } from "../App";
import { Quote } from "lucide-react";

const WelcomeMessagePage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-100 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {lang === "ko" ? "학과장 인사말" : "Welcome Message"}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Chair Professor Uichin Lee
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-in fade-in duration-500">
          <div className="flex items-center gap-4 mb-10 text-blue-600">
            <Quote className="w-10 h-10 fill-blue-600" />
            <div className="h-px bg-blue-100 flex-grow"></div>
          </div>
          <div className="prose prose-blue max-w-none">
            {/* <h2 className="text-2xl font-black text-slate-900 mb-8">
              {t.welcomeTitle}
            </h2> */}
            <div className="text-lg text-slate-700 leading-[1.8] font-medium whitespace-pre-line space-y-6">
              {t.intro.welcomeContent}
            </div>
          </div>
          <div className="mt-16 pt-10 border-t border-slate-100 text-right">
            <p className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-1">
              Chair, Dept of AI Computing
            </p>
            <p className="text-2xl font-black text-slate-900">
              Uichin Lee (이의진)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessagePage;
