
import React, { useState } from 'react';
import { Language } from '../types';
import { Quote, BookOpen } from 'lucide-react';

const IntroPage: React.FC<{ t: any, lang: Language }> = ({ t, lang }) => {
  const [tab, setTab] = useState<'welcome' | 'overview'>('welcome');

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-100 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
          {lang === 'ko' ? '학과 소개' : 'Introduction'}
        </h1>
        <div className="flex justify-center gap-2">
          <button 
            onClick={() => setTab('welcome')}
            className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
              tab === 'welcome' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'
            }`}
          >
            {lang === 'ko' ? '학과장 인사말' : 'Welcome Message'}
          </button>
          <button 
            onClick={() => setTab('overview')}
            className={`px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
              tab === 'overview' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'
            }`}
          >
            {lang === 'ko' ? '학과 안내' : 'Dept Overview'}
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {tab === 'welcome' ? (
          <div className="animate-in fade-in duration-500">
            <div className="flex items-center gap-4 mb-10 text-blue-600">
              <Quote className="w-10 h-10 fill-blue-600" />
              <div className="h-px bg-blue-100 flex-grow"></div>
            </div>
            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-black text-slate-900 mb-8">{t.welcomeTitle}</h2>
              <div className="text-lg text-slate-700 leading-[1.8] font-medium whitespace-pre-line space-y-6">
                {t.welcomeContent}
              </div>
            </div>
            <div className="mt-16 pt-10 border-t border-slate-100 text-right">
              <p className="text-slate-500 text-sm font-bold tracking-widest uppercase mb-1">Chair, Dept of AI Computing</p>
              <p className="text-2xl font-black text-slate-900">Uichin Lee (이의진)</p>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default IntroPage;
