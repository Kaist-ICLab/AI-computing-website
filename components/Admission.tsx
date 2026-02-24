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
          className="w-8 h-8 text-[#004191] group-hover:text-white transition-colors"
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
    <section className="pt-8 pb-12 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#004191]">
            {type === "ug" ? t.ugTitle : t.gradTitle}
          </h2>
          <p className="text-slate-500 leading-relaxed font-bold text-xs uppercase tracking-widest whitespace-pre-line max-w-5xl">
            {type === "ug" ? t.ugDesc : t.gradDesc}
          </p>
          {type === "grad" && (
            <a
              href={
                lang === "en"
                  ? "https://admission.kaist.ac.kr/intl-graduate"
                  : "https://gradapply.kaist.ac.kr"
              }
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ugLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 transition-all duration-300 hover:shadow-xl hover:border-[#004191] hover:-translate-y-1 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 ${idx === 0 ? "md:col-span-2 md:flex-row md:text-left md:items-center" : "min-h-[220px]"}`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {link.icon && idx === 0 && (
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-[#004191] transition-colors shrink-0 mb-6 md:mb-0 md:mr-8">
                    <div className="group-hover:text-white transition-colors">
                      {link.icon}
                    </div>
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#004191] transition-colors whitespace-pre-line">
                    {link.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-4 md:px-0">
                    {link.desc}
                  </p>
                </div>

                <div className="mt-8 md:mt-0 flex items-center text-[#004191] font-bold text-base transition-transform group-hover:translate-x-1">
                  {t.readMore}
                  <svg
                    className="w-4 h-4 ml-2"
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
        ) : (type === "grad" && lang === "en") ? null : (
          <div className="space-y-16">
            {/* Eligibility */}
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-12">
                {t.eligibilityTitle}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest w-1/3">
                        {lang === "ko" ? "과정" : "Course"}
                      </th>
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest">
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
            <div className="bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 text-white">
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
                    <p className="text-white/70 text-sm font-medium leading-relaxed whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule 1 */}
            <div className="bg-slate-50 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-4 mb-12">
                <Calendar className="w-8 h-8 text-[#004191]" />
                {t.gradSchedule1Title}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest">
                        {lang === "ko" ? "구분" : "Category"}
                      </th>
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest">
                        {lang === "ko" ? "지원일정" : "Timeline"}
                      </th>
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest">
                        {lang === "ko" ? "접수방법" : "Method"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {t.gradSchedule1Items.map((item: any, idx: number) => (
                      <tr
                        key={idx}
                        className="hover:bg-white transition-colors"
                      >
                        <td className="px-6 py-8 text-sm font-black text-slate-900 uppercase">
                          {item.category}
                        </td>
                        <td className="px-6 py-8 text-lg font-bold text-[#004191] whitespace-pre-line">
                          {item.timeline}
                        </td>
                        <td className="px-6 py-8 text-sm text-slate-500 font-semibold whitespace-pre-line">
                          {item.method}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Schedule 2 */}
            <div className="bg-slate-50 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-4 mb-12 whitespace-pre-line">
                <Calendar className="w-8 h-8 text-[#004191]" />
                {t.gradSchedule2Title}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest">
                        {lang === "ko" ? "구분" : "Category"}
                      </th>
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest">
                        {lang === "ko" ? "지원일정" : "Timeline"}
                      </th>
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest">
                        {lang === "ko" ? "접수방법" : "Method"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {t.gradSchedule2Items.map((item: any, idx: number) => (
                      <tr
                        key={idx}
                        className="hover:bg-white transition-colors"
                      >
                        <td className="px-6 py-8 text-sm font-black text-slate-900 uppercase">
                          {item.category}
                        </td>
                        <td className="px-6 py-8 text-lg font-bold text-[#004191] whitespace-pre-line">
                          {item.timeline}
                        </td>
                        <td className="px-6 py-8 text-sm text-slate-500 font-semibold whitespace-pre-line">
                          {item.method}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Advisor Info */}
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-12">
                {t.advisorTitle}
              </h3>
              <div className="space-y-6 mb-16">
                {t.advisorContent.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-[#004191] rounded-full mt-2.5 shrink-0" />
                    <p className="text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-black text-slate-900 mb-8">
                {t.advisorTimingTitle}
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest w-1/3">
                        {lang === "ko" ? "과정" : "Course"}
                      </th>
                      <th className="px-6 py-6 text-left text-[14px] font-black text-slate-900 uppercase tracking-widest">
                        {lang === "ko" ? "신청 시기" : "Timing"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {t.advisorTimingItems.map((item: any, idx: number) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-8 text-sm font-black text-slate-900">
                          {item.course}
                        </td>
                        <td className="px-6 py-8 text-sm text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                          {item.timing}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>


          </div>
        )}
      </div>
    </section>
  );
};

export default Admission;
