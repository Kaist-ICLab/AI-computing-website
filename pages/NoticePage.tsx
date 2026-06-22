import React, { use } from "react";
import { LanguageContext } from "../App";
import { currentNotice } from "../noticeConfig";

const NoticePage: React.FC = () => {
  const { t, lang } = use(LanguageContext);
  const notice = lang === "ko" ? currentNotice.ko : currentNotice.en;

  return (
    <div className="pt-24 pb-16">
      <div className="bg-slate-50 border-b border-slate-100 py-16 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          {t.common.noticeTitle}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Department Announcements & Updates
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-200 p-8 sm:p-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {notice.title}
            </h2>

            <p className="text-[15px] mb-6">
              {notice.subtitle}
            </p>

            <ul className="text-[15px] mb-6 space-y-2 list-disc list-inside">
              <li>
                <span className="font-semibold">{lang === "ko" ? "일시:" : "Date:"}</span> {notice.date}
              </li>
              <li>
                <span className="font-semibold">{lang === "ko" ? "장소:" : "Location:"}</span> {notice.location}
              </li>
              <li>
                <span className="font-semibold">{lang === "ko" ? "자료:" : "Materials:"}</span>{" "}
                <a
                  href={currentNotice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {lang === "ko" ? "입시 설명회 자료 다운로드" : "Download Admission Session Materials"}
                </a>
              </li>
              <li>
                <span className="font-semibold">{lang === "ko" ? "사전 신청:" : "Registration:"}</span> {notice.registrationDeadline}
                <br />
                <a
                  href={currentNotice.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6 text-blue-600 hover:text-blue-800 underline break-all"
                >
                  {currentNotice.registrationLink}
                </a>
              </li>
            </ul>

            <p className="text-[15px] mt-3 font-medium">
              {lang === "ko" ? "많은 관심과 참여 바랍니다." : "We look forward to your interest and participation."}
            </p>

            <div className="mt-10 flex justify-center">
              <picture>
                <img
                  src={currentNotice.imageSrc}
                  alt={lang === "ko" ? "대학원 설명회 포스터" : "Graduate Admission Session Poster"}
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

