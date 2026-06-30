<<<<<<< HEAD
import React, { use } from 'react';
=======
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> 34fd217 (faculty recruitment 공지)
import { LanguageContext } from '../App';
import Header from '../components/Header';
import IntroDiagram from '@/components/IntroDiagram';
import Announcements from '../components/Announcements';
import EcosystemDiagram from '../components/diagrams/EcosystemDiagram';

const POPUP_KEY = 'faculty-recruitment-popup-hide-until';

const getTodayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const Home: React.FC = () => {
<<<<<<< HEAD
  const { t } = use(LanguageContext);
=======
  const { t, lang } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem(POPUP_KEY);
    if (!hideUntil || hideUntil < getTodayStr()) {
      setShowPopup(true);
    }
  }, []);

  const handleDismissToday = () => {
    localStorage.setItem(POPUP_KEY, getTodayStr());
    setShowPopup(false);
  };

  const handleDismiss = () => {
    setShowPopup(false);
  };

>>>>>>> 34fd217 (faculty recruitment 공지)
  const handleScrollToDiagram = () => {
    const section = document.getElementById("intro-diagram");
    if (section) {
      const offset = 100;
      const top = section.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {showPopup && (
        <div className="fixed left-4 top-28 z-50 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-5 animate-in fade-in slide-in-from-left-4 duration-300">
          <span className="inline-block text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5 mb-3">
            {lang === 'ko' ? '채용 공고' : 'Recruitment'}
          </span>

          <h3 className="text-sm font-black text-slate-900 leading-snug mb-2">
            {lang === 'ko'
              ? 'KAIST AI컴퓨팅학과 신임교원 초빙 공고'
              : 'KAIST AI Computing — Application for Faculty Positions'}
          </h3>

          <p className="text-slate-500 text-xs leading-relaxed mb-4">
            {lang === 'ko'
              ? '지원 마감: 2026년 7월 24일(금)'
              : 'Deadline: July 24, 2026 (Fri)'}
          </p>

          <button
            onClick={() => {
              handleDismiss();
              navigate('/notice/faculty-recruitment');
            }}
            className="w-full bg-[#004191] text-white text-xs font-bold py-2.5 rounded-xl hover:bg-blue-800 transition-colors mb-3"
          >
            {lang === 'ko' ? '자세히 보기' : 'View Details'}
          </button>

          <div className="flex gap-2 border-t border-slate-100 pt-3">
            <button
              onClick={handleDismissToday}
              className="flex-1 text-slate-400 text-[11px] font-semibold hover:text-slate-600 transition-colors text-center"
            >
              {lang === 'ko' ? '오늘 하루 보지 않기' : "Don't show today"}
            </button>
            <span className="text-slate-200 text-xs">|</span>
            <button
              onClick={handleDismiss}
              className="flex-1 text-slate-400 text-[11px] font-semibold hover:text-slate-600 transition-colors text-center"
            >
              {lang === 'ko' ? '닫기' : 'Close'}
            </button>
          </div>
        </div>
      )}

      <Header t={t.hero} onNext={handleScrollToDiagram} />

      <div id="intro-diagram" className="scroll-mt-24">
        <IntroDiagram />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 space-y-20">
          <EcosystemDiagram />
        </div>
      </div>

      <div id="announcements-summary" className="scroll-mt-20">
        <Announcements title={t.nav.announcements} />
      </div>
    </div>
  );
};

export default Home;
