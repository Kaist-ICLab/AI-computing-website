import React, { useContext } from "react";
import { LanguageContext } from "../App";

const NoticePage: React.FC = () => {
  const { t } = useContext(LanguageContext);

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
              2026 AI컴퓨팅학과 대학원 설명회
            </h2>

            <p className="text-[15px] mb-6">
              AI컴퓨팅학과 대학원 설명회가 진행됩니다.
            </p>

            <ul className="text-[15px] mb-6 space-y-2 list-disc list-inside">
              <li>
                <span className="font-semibold">일시:</span> 6월 19일 오후 12시
              </li>
              <li>
                <span className="font-semibold">장소:</span> N1 김병호김삼열
                IT융합빌딩 201호
              </li>
              <li>
                <span className="font-semibold">자료:</span>{" "}
                <a
                  href="/files/AI_Computing_Grad_Info_Session_20260619.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  입시 설명회 자료 다운로드
                </a>
              </li>
              <li>
                <span className="font-semibold">사전 신청:</span> 6월 23일까지
                <br />
                <a
                  href="https://forms.gle/a1Q7c8BLxtdP7p1d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6 text-blue-600 hover:text-blue-800 underline break-all"
                >
                  https://forms.gle/a1Q7c8BLxtdP7p1d7
                </a>
              </li>
            </ul>

            <p className="text-[15px] mt-3 font-medium">
              많은 관심과 참여 바랍니다.
            </p>

            <div className="mt-10 flex justify-center">
              <picture>
                <img
                  src="/images/admission_session_260608.jpg"
                  alt="대학원 설명회 포스터"
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
