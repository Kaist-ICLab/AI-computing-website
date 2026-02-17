
import React from 'react';
import { Language } from '../types';
import { BookOpen } from 'lucide-react';

const DeptIntroPage: React.FC<{ t: any, lang: Language }> = ({ t, lang }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-100 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {lang === 'ko' ? '학과 소개' : 'Department Introduction'}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Building the Future of AI-Native Leaders
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div id="dept-overview" className="animate-in fade-in duration-500 scroll-mt-32">
           <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-black text-slate-900">{t.deptTitle}</h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {t.deptContent}
              </p>
           </div>

           <div className="grid gap-8">
             <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-4">{t.objectivesTitle}</h3>
             {t.objectives.map((obj: any, idx: number) => (
               <div key={idx} className="flex gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 font-black shrink-0">
                   {idx + 1}
                 </div>
                 <div>
                   <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{obj.title}</h4>
                   <p className="text-slate-500 font-medium leading-relaxed">{obj.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default DeptIntroPage;
