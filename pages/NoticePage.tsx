import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LanguageContext } from "../App";
import { currentNotice } from "../noticeConfig";

interface Notice {
  id: string;
  date: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  content: React.ReactNode;
  contentEn?: React.ReactNode;
}

const notices: Notice[] = [
  {
    id: "faculty-recruitment",
    date: "2026.06.30",
    category: "채용",
    categoryEn: "Recruitment",
    title: "KAIST AI컴퓨팅학과 신임교원 초빙 공고",
    titleEn: "KAIST Dept. of AI Computing — Application for Faculty Positions",
    content: (
      <div className="text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          KAIST AI컴퓨팅학과 신임교원 초빙 공고
        </h2>
        <ul className="text-[15px] mb-2 space-y-2 list-disc list-inside">
          <li>
            <span className="font-semibold">지원 마감:</span> 2026년 7월
            24일(금)
          </li>
          <li>
            <span className="font-semibold">지원 방법:</span>{" "}
            <a
              href="https://forms.gle/vuviY1uBiQeKvihm7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              https://forms.gle/vuviY1uBiQeKvihm7
            </a>
          </li>
        </ul>
      </div>
    ),
    contentEn: (
      <div className="text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Application for Faculty Positions in the Department of AI Computing
        </h2>
        <ul className="text-[15px] mb-2 space-y-2 list-disc list-inside">
          <li>
            <span className="font-semibold">Application Deadline:</span> July
            24, 2026 (Friday)
          </li>
          <li>
            <span className="font-semibold">How to Apply:</span>{" "}
            <a
              href="https://forms.gle/vuviY1uBiQeKvihm7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              https://forms.gle/vuviY1uBiQeKvihm7
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "grad-session-2026",
    date: "2026.06.08",
    category: "행사",
    categoryEn: "Event",
    title: "2026 AI컴퓨팅학과 대학원 설명회",
    titleEn: "2026 AI Computing Graduate Information Session",
    content: (
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
              href="/files/0619.pdf"
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
    ),
  },
];

const categoryColors: Record<string, string> = {
  채용: "bg-blue-50 text-blue-700 border-blue-200",
  행사: "bg-green-50 text-green-700 border-green-200",
  Recruitment: "bg-blue-50 text-blue-700 border-blue-200",
  Event: "bg-green-50 text-green-700 border-green-200",
};

const NoticePage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { lang, t } = useContext(LanguageContext);

  const notice = id ? notices.find((n) => n.id === id) : null;

  const header = (
    <div className="bg-slate-50 border-b border-slate-100 py-16 text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
        {t.common.noticeTitle}
      </h1>
      <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
        Department Announcements &amp; Updates
      </p>
    </div>
  );

  if (notice) {
    const displayContent =
      lang === "en" && notice.contentEn ? notice.contentEn : notice.content;

    return (
      <div className="pt-24 pb-16">
        {header}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/notice")}
            className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {lang === "ko" ? "목록으로 돌아가기" : "Back to list"}
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                categoryColors[
                  lang === "ko" ? notice.category : notice.categoryEn
                ] ?? "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              {lang === "ko" ? notice.category : notice.categoryEn}
            </span>
            <span className="text-slate-400 text-sm">
              {lang === "ko" ? "등록일:" : "Posted:"} {notice.date}
            </span>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-200 px-10 py-8 sm:px-14 sm:py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {displayContent}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {header}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="hidden sm:flex items-center gap-4 px-8 py-3 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-widest text-left">
            <span className="w-12 shrink-0 text-left">
              {lang === "ko" ? "번호" : "No."}
            </span>
            <span className="w-32 shrink-0 text-left">
              {lang === "ko" ? "구분" : "Type"}
            </span>
            <span className="flex-1 text-left">
              {lang === "ko" ? "제목" : "Title"}
            </span>
            <span className="w-24 shrink-0 text-left">
              {lang === "ko" ? "등록일" : "Posted"}
            </span>
            <span className="w-4 shrink-0" />
          </div>
          <div className="divide-y divide-slate-100">
            {notices.map((n, idx) => (
              <button
                key={n.id}
                onClick={() => navigate(`/notice/${n.id}`)}
                className="w-full text-left px-8 py-3 hover:bg-slate-50 transition-colors flex items-center gap-4 group"
              >
                <span className="hidden sm:block text-slate-300 text-sm font-mono w-12 shrink-0">
                  {String(notices.length - idx).padStart(2, "0")}
                </span>
                <span className="w-32 shrink-0 flex items-center">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      categoryColors[
                        lang === "ko" ? n.category : n.categoryEn
                      ] ?? "bg-slate-100 text-slate-600 border-slate-200"
                    }`}
                  >
                    {lang === "ko" ? n.category : n.categoryEn}
                  </span>
                </span>
                <span className="flex-1 text-slate-800 font-semibold text-[15px] group-hover:text-blue-700 transition-colors">
                  {lang === "ko" ? n.title : n.titleEn}
                </span>
                <span className="text-slate-400 text-sm shrink-0 hidden sm:block w-24">
                  {n.date}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
