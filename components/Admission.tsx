
import React from 'react';
import { Language } from '../types';
import { ExternalLink, Calendar } from 'lucide-react';

interface AdmissionProps {
  t: any;
  lang: Language;
}

const Admission: React.FC<AdmissionProps> = ({ t, lang }) => {
  return (
    <section className="py-32 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tighter">{t.title}</h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="bg-white/5 border border-white/10 p-12 rounded-3xl hover:bg-white/[0.08] transition-all flex flex-col items-start backdrop-blur-sm group">
            <span className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-4">Undergraduate</span>
            <h3 className="text-3xl font-black mb-6">{t.ugTitle}</h3>
            <p className="text-white/60 mb-10 leading-relaxed font-medium text-lg">{t.ugDesc}</p>
            <a href="http://admission.kaist.ac.kr/undergraduate/" target="_blank" className="mt-auto inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg shadow-black/20">
              Go to Portal <ExternalLink className="w-4 h-4 ml-3" />
            </a>
          </div>

          <div className="bg-blue-600/10 border border-blue-500/30 p-12 rounded-3xl hover:bg-blue-600/20 transition-all flex flex-col items-start backdrop-blur-sm group">
            <span className="text-blue-300 text-xs font-black uppercase tracking-[0.3em] mb-4">Graduate Programs</span>
            <h3 className="text-3xl font-black mb-6">{t.gradTitle}</h3>
            <p className="text-white/60 mb-10 leading-relaxed font-medium text-lg">{t.gradDesc}</p>
            <a href="https://gradapply.kaist.ac.kr" target="_blank" className="mt-auto inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/40">
              Go to Portal <ExternalLink className="w-4 h-4 ml-3" />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] text-slate-900 overflow-hidden shadow-2xl shadow-black/50">
          <div className="p-10 sm:p-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
              <h3 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                <Calendar className="w-8 h-8 text-blue-600" />
                {t.scheduleTitle}
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="px-6 py-8 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">{lang === 'ko' ? '일정' : 'Timeline'}</th>
                    <th className="px-6 py-8 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">{lang === 'ko' ? '내용' : 'Process'}</th>
                    <th className="px-6 py-8 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">{lang === 'ko' ? '비고' : 'Remarks'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {t.scheduleItems.map((item: any, idx: number) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 py-10 text-sm font-black text-blue-700 uppercase">{item.date}</td>
                      <td className="px-6 py-10 text-xl font-bold text-slate-900">{item.event}</td>
                      <td className="px-6 py-10 text-sm text-slate-500 font-semibold">{item.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
