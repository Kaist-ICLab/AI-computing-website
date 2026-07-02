import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';

const allNews = [
  // 신임교원 모집 공지 (임시 비활성화)
  // {
  //   id: 'faculty-recruitment',
  //   titleKo: 'KAIST AI컴퓨팅학과 신임교원 지원 공고',
  //   titleEn: 'KAIST Dept. of AI Computing — Faculty Recruitment',
  //   categoryKo: '채용',
  //   categoryEn: 'Recruitment',
  //   date: '2026.06.30',
  // },
  {
    id: 'grad-session-2026',
    titleKo: '2026 AI컴퓨팅학과 대학원 설명회',
    titleEn: '2026 AI Computing Graduate Information Session',
    categoryKo: '행사',
    categoryEn: 'Event',
    date: '2026.06.08',
  },
];

const Announcements: React.FC<{ title: string }> = ({ title }) => {
  const { lang } = use(LanguageContext);
  const navigate = useNavigate();

  return (
    <section className="pt-12 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase">{title}</h2>
            <button
              onClick={() => navigate('/notice')}
              className="text-[10px] font-black text-[#004191] uppercase tracking-[0.3em] border-b-2 border-[#004191] pb-1 hover:text-sky-600 hover:border-sky-600 transition-all"
            >
              {lang === 'ko' ? '전체보기' : 'View All Posts'}
            </button>
          </div>
        )}

        <div className="border-t-2 border-slate-900">
          {allNews.map((news) => (
            <div
              key={news.id}
              onClick={() => navigate(`/notice/${news.id}`)}
              className="py-4 border-b border-slate-100 flex flex-col gap-3 group cursor-pointer"
            >
              <span className="text-xs text-slate-400 font-medium">
                {lang === 'ko' ? '등록일' : 'Posted'}: {news.date}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-8">
                  <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest w-20 shrink-0">
                    {lang === 'ko' ? news.categoryKo : news.categoryEn}
                  </span>
                  <h4 className="text-2xl font-bold text-slate-800 group-hover:text-[#004191] transition-all tracking-tight">
                    {lang === 'ko' ? news.titleKo : news.titleEn}
                  </h4>
                </div>
                <div className="flex items-center gap-6 sm:shrink-0">
                  <span className="text-slate-400 font-bold text-sm tracking-tighter group-hover:text-[#004191] transition-all">
                    {lang === 'ko' ? '더보기' : 'Read More'}
                  </span>
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-[#004191] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
