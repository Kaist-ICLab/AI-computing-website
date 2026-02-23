import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Announcements: React.FC<{ title: string }> = ({ title }) => {
  const { lang } = useContext(LanguageContext);
  const dummyNews = [
    {
      date: '2024.05.20',
      title: lang === 'ko' ? 'AI 컴퓨팅학과 공식 홈페이지 개발 소식' : 'Development of AI Computing Dept Website',
      category: lang === 'ko' ? '공지' : 'Notice'
    },
    {
      date: '2024.05.15',
      title: lang === 'ko' ? '2026학년도 가을학기 입시설명회 안내' : '2026 Fall Admission Information Session',
      category: lang === 'ko' ? '학사' : 'Academic'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase">{title}</h2>
          <button className="text-[10px] font-black text-[#004191] uppercase tracking-[0.3em] border-b-2 border-[#004191] pb-1 hover:text-sky-600 hover:border-sky-600 transition-all">
            {lang === 'ko' ? '전체보기' : 'View All Posts'}
          </button>
        </div>

        <div className="border-t-2 border-slate-900">
          {dummyNews.map((news, i) => (
            <div key={i} className="py-10 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group cursor-pointer">
              <div className="flex items-center gap-8">
                <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest w-20">{news.category}</span>
                <h4 className="text-2xl font-bold text-slate-800 group-hover:text-[#004191] transition-all tracking-tight">
                  {news.title}
                </h4>
              </div>
              <div className="flex items-center gap-10">
                <span className="text-slate-400 font-bold text-sm tracking-tighter">{news.date}</span>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-[#004191] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
