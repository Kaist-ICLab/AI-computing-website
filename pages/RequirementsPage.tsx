
import React, { useState, useContext } from 'react';
import { ReqSection } from '../types';
import { LanguageContext } from '../App';

const RequirementsPage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  const [reqType, setReqType] = useState<'ug' | 'grad'>('ug');
  const education = t.education;

  const ReqCard = ({ title, subtitle, sections }: { title: string, subtitle?: string, sections: ReqSection[] }) => (
    <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-200 p-8 sm:p-16 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400 font-bold text-sm mb-12 uppercase tracking-widest">{subtitle}</p>}

      <div className="space-y-12">
        {sections.map((section, idx) => (
          <section key={idx} className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-8 bg-blue-700 rounded-full"></div>
              <h3 className="text-lg font-black text-slate-800 tracking-tight flex items-center gap-4">
                {section.title}
                {section.credits && (
                  <span className="text-[10px] text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">
                    {section.credits}
                  </span>
                )}
              </h3>
            </div>
            <ul className="ml-5 space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="text-[15px] leading-relaxed text-slate-600 font-medium relative pl-1">
                  <span className="absolute left-[-1.25rem] top-[0.6em] w-1.5 h-1.5 rounded-full bg-blue-900/30"></span>
                  {item.startsWith('*') || item.startsWith('※') ? (
                    <span className="text-slate-400 italic text-sm">{item}</span>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-12 min-h-screen">
      {/* Header */}
      <div className="mb-8 max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#004191]">
          {education.reqTitle}
        </h1>
        <div className="text-slate-500 leading-relaxed font-bold text-xs uppercase tracking-widest whitespace-pre-line max-w-5xl flex flex-col gap-2">
          <p>{education.reqDesc}</p>
          <p className="italic text-slate-400 normal-case tracking-normal">
            {education.reqNotice}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Level Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-200/50 p-1.5 rounded-3xl flex shadow-inner">
            <button
              onClick={() => setReqType('ug')}
              className={`px-12 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${reqType === 'ug' ? 'bg-white text-blue-900 shadow-md scale-105' : 'text-slate-500 hover:text-slate-800'
                }`}
            >
              {lang === 'ko' ? '학사 과정' : 'Undergraduate'}
            </button>
            <button
              onClick={() => setReqType('grad')}
              className={`px-12 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${reqType === 'grad' ? 'bg-white text-blue-900 shadow-md scale-105' : 'text-slate-500 hover:text-slate-800'
                }`}
            >
              {lang === 'ko' ? '대학원 과정' : 'Graduate'}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {reqType === 'ug' ? (
            <ReqCard
              title={lang === 'ko' ? 'AI 컴퓨팅학과 - 학사과정' : 'AI Computing - Undergraduate'}
              subtitle={education.ugSubtitle}
              sections={education.ug.sections}
            />
          ) : (
            <>
              <ReqCard
                title={lang === 'ko' ? 'AI 컴퓨팅학과 - 석사과정' : "AI Computing - Master's"}
                subtitle={education.gradSubtitle}
                sections={education.grad.master}
              />
              <ReqCard
                title={lang === 'ko' ? 'AI 컴퓨팅학과 - 박사과정' : 'AI Computing - Doctoral'}
                subtitle={education.gradSubtitle}
                sections={education.grad.phd}
              />
              <ReqCard
                title={lang === 'ko' ? 'AI 컴퓨팅학과 - 석박사통합' : 'AI Computing - MS-PhD Integrated'}
                subtitle={education.gradSubtitle}
                sections={education.grad.integrated}
              />
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default RequirementsPage;
