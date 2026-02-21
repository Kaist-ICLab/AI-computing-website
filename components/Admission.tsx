import React from "react";
import { Language } from "../types";
import { ExternalLink, Calendar } from "lucide-react";

interface AdmissionProps {
  type: "ug" | "grad";
  t: any;
  lang: Language;
}

const Admission: React.FC<AdmissionProps> = ({ type, t, lang }) => {
  const ugLinks = [
    {
      title: t.admissionHome,
      desc: t.admissionHomeDesc,
      url: "https://admission.kaist.ac.kr/home",
      icon: (
        <svg
          className="w-8 h-8 text-[#004191]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      full: true,
    },
    {
      title: t.ugKorean,
      desc: t.ugKoreanDesc,
      url: "https://admission.kaist.ac.kr/undergraduate",
      icon: null,
      full: true,
    },
    {
      title: t.ugIntl,
      desc: t.ugIntlDesc,
      url: "https://admission.kaist.ac.kr/intl-undergraduate",
      icon: null,
      full: true,
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter text-slate-900">
            {type === "ug" ? t.ugTitle : t.gradTitle}
          </h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg mb-10">
            {type === "ug" ? t.ugDesc : t.gradDesc}
          </p>
          {type === "grad" && (
            <a
              href="https://gradapply.kaist.ac.kr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-[#004191] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20"
            >
              {lang === "ko"
                ? "입학처 홈페이지 바로가기"
                : "Go to Admissions Portal"}{" "}
              <ExternalLink className="w-4 h-4 ml-3" />
            </a>
          )}
        </div>

        {type === "ug" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ugLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-10 transition-all hover:shadow-2xl hover:shadow-slate-200/50 hover:border-blue-200 flex ${idx === 0 ? "md:col-span-2 flex-row items-center justify-between" : "flex-col items-start"}`}
              >
                <div
                  className={`flex gap-8 ${idx === 0 ? "items-center" : "flex-col items-start mb-8"}`}
                >
                  {link.icon && (
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors shrink-0">
                      {link.icon}
                    </div>
                  )}
                  <div>
                    <h3
                      className={`${idx === 0 ? "text-2xl" : "text-xl"} font-black text-slate-900 mb-2 group-hover:text-[#004191] transition-colors`}
                    >
                      {link.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">
                      {link.desc}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-center text-[#004191] font-black text-[10px] uppercase tracking-widest shrink-0 ${idx === 0 ? "ml-4" : "mt-auto"}`}
                >
                  {t.readMore}
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="space-y-24">
            {/* Schedule */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 sm:p-16 border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-4 mb-12">
                <Calendar className="w-8 h-8 text-[#004191]" />
                {t.scheduleTitle}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="px-6 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {lang === "ko" ? "일정" : "Timeline"}
                      </th>
                      <th className="px-6 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {lang === "ko" ? "내용" : "Process"}
                      </th>
                      <th className="px-6 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {lang === "ko" ? "비고" : "Remarks"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {t.scheduleItems.map((item: any, idx: number) => (
                      <tr
                        key={idx}
                        className="hover:bg-white transition-colors"
                      >
                        <td className="px-6 py-8 text-sm font-black text-[#004191] uppercase">
                          {item.date}
                        </td>
                        <td className="px-6 py-8 text-lg font-bold text-slate-900">
                          {item.event}
                        </td>
                        <td className="px-6 py-8 text-sm text-slate-500 font-semibold">
                          {item.method}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-16 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-12">
                {t.eligibilityTitle}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="px-6 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest w-1/3">
                        {lang === "ko" ? "과정" : "Course"}
                      </th>
                      <th className="px-6 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {lang === "ko" ? "지원 자격" : "Criteria"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {t.eligibility.map((item: any, idx: number) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-8 text-sm font-black text-slate-900">
                          {item.course}
                        </td>
                        <td className="px-6 py-8 text-sm text-slate-600 font-medium whitespace-pre-line leading-relaxed">
                          {item.criteria}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-16 text-white">
              <h3 className="text-2xl font-black text-white tracking-tight mb-12">
                {t.categoriesTitle}
              </h3>
              <div className="grid sm:grid-cols-3 gap-8">
                {t.categories.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 p-8 rounded-3xl"
                  >
                    <h4 className="text-blue-400 font-black text-xs uppercase tracking-widest mb-4">
                      {item.type}
                    </h4>
                    <p className="text-white/70 text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admission;
