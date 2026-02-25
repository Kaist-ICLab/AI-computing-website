import React, { useContext } from "react";
import { LanguageContext } from "../App";

const NoticePage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);

  return (
    <div className="pt-32">
      {/* Header */}
      <div className="mb-20 max-w-6xl mx-auto flex flex-col items-center text-center gap-8 px-4">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#004191]">
          {t.common.noticeTitle}
        </h1>
        <div className="text-slate-500 leading-relaxed font-bold text-xs uppercase tracking-widest whitespace-pre-line max-w-5xl flex flex-col gap-2">
          <p>{t.common.noticeSubtitle}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-200 p-8 sm:p-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              입시설명회
            </h2>
            <div className="font-medium whitespace-pre-line text-[15px]">
              {`26.3.20 (금) 1:00PM (전산학부 끝나고 바로 이어서 합니다) 
Zoom 링크도 나중에 공지가 될 예정입니다.`}
            </div>
            <div className="mt-12 flex justify-center">
              <picture>
                <source
                  srcSet="/images/admission_session_poster.webp"
                  type="image/webp"
                />
                <img
                  src="/images/admission_session_poster.png"
                  alt="Admission Information Session Poster"
                  className="max-w-full md:max-w-2xl rounded-2xl shadow-lg border border-slate-100"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
