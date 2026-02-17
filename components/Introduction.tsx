
import React from 'react';
import { Language } from '../types';

interface IntroductionProps {
  t: any;
  lang: Language;
}

const Introduction: React.FC<IntroductionProps> = ({ t, lang }) => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-0.5 w-12 bg-blue-600"></span>
            <span className="text-xs font-black text-blue-600 tracking-[0.3em] uppercase">Department Overview</span>
            <span className="h-0.5 w-12 bg-blue-600"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 leading-tight">
            {t.deptTitle}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            {t.deptContent}
          </p>
        </div>

        <div className="bg-slate-50 p-10 sm:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] px-4 whitespace-nowrap">
              {t.objectivesTitle}
            </h3>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {t.objectives.map((obj: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center font-black text-blue-600 text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-4 uppercase tracking-tight leading-tight">
                    {obj.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
