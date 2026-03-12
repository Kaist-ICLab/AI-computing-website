import React, { useContext } from "react";
import { LanguageContext } from "../App";
import { Quote } from "lucide-react";

const WelcomeMessagePage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          {lang === "ko" ? "학과장 인사말" : "Welcome Message"}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Chair Professor Uichin Lee
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="animate-in fade-in duration-500">

          <div className="flex items-center gap-4 mb-14 text-blue-600">
            <Quote className="w-10 h-10 fill-blue-600" />
            <div className="h-px bg-blue-100 flex-grow"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-[73%] w-full">
              <div className="prose prose-blue max-w-none">
                <div className="text-lg text-slate-700 leading-[1.9] font-medium whitespace-pre-line space-y-6">
                  {t.intro.welcomeContent}
                </div>
              </div>
            </div>
            <div className="md:w-[27%] w-full flex flex-col items-center md:items-end">
              <div className="w-full max-w-sm aspect-[9/16] overflow-hidden rounded-2xl shadow-md group">
                <img
                  src="/images/deanphoto.webp"
                  alt="Uichin Lee"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-6 text-2xl font-black text-slate-900 text-center md:text-right">
                Uichin Lee (이의진)
              </p>
              <p className="text-sm text-slate-500 font-bold tracking-widest uppercase text-center md:text-right mt-1">
                Chair, Dept of AI Computing
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessagePage;
