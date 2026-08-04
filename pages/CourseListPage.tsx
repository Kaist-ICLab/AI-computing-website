import React, { use } from "react";
import { LanguageContext } from "../App";

const courses = [
  {
    code: "AIC.20000",
    name: { ko: "AI 컴퓨팅 개론", en: "Introduction to AI Computing" },
    type: "Required",
  },
  {
    code: "AIC.20100",
    name: { ko: "기계학습", en: "Machine Learning" },
    type: "Required",
  },
  {
    code: "AIC.20101",
    name: { ko: "딥러닝 개론", en: "Introduction to Deep Learning" },
    type: "Required",
  },
  {
    code: "CS.30703",
    name: { ko: "인공지능개론", en: "Introduction to Artificial Intelligence" },
    type: "Required",
  },
  {
    code: "FX.20001",
    name: { ko: "AI 철학: 윤리와 법", en: "AI Philosophy: Ethics and Law" },
    type: "Required",
  },
  {
    code: "AIC.20001",
    name: { ko: "인공지능 수학", en: "Mathematics for AI" },
    type: "Elective",
  },
  {
    code: "AIC.20500",
    name: { ko: "인간-컴퓨터 상호작용 개론", en: "Introduction to Human-Computer Interaction" },
    type: "Elective",
  },
  {
    code: "AIC.20600",
    name: { ko: "시스템 프로그래밍", en: "System Programming" },
    type: "Elective",
  },
  {
    code: "AIC.30101",
    name: { ko: "베이지안 기계학습 개론", en: "Introduction to Bayesian Machine Learning" },
    type: "Elective",
  },
  {
    code: "AIC.30102",
    name: { ko: "강화학습 개론", en: "Introduction to Reinforcement Learning" },
    type: "Elective",
  },
  {
    code: "AIC.30103",
    name: { ko: "생성모델 개론", en: "Introduction to Generative Models" },
    type: "Elective",
  },
  {
    code: "AIC.30300",
    name: { ko: "대형언어모델 개론", en: "Introduction to Large Language Models" },
    type: "Elective",
  },
  {
    code: "AIC.30400",
    name: { ko: "컴퓨터 비전 개론", en: "Introduction to Computer Vision" },
    type: "Elective",
  },
  {
    code: "AIC.30901",
    name: { ko: "캡스톤 프로젝트 I", en: "Capstone Project I" },
    type: "Elective",
  },
  {
    code: "AIC.40100",
    name: { ko: "그래프 기계학습 및 마이닝", en: "Graph Machine Learning and Mining" },
    type: "Elective",
  },
  {
    code: "AIC.40300",
    name: { ko: "자연언어처리를 위한 기계학습", en: "Machine Learning for Natural Language Processing" },
    type: "Elective",
  },
  {
    code: "AIC.40400",
    name: { ko: "컴퓨터비전을 위한 기계학습", en: "Machine Learning for Computer Vision" },
    type: "Elective",
  },
  {
    code: "AIC.40501",
    name: { ko: "소셜 컴퓨팅을 위한 멀티 에이전트 공학", en: "Multi-Agent Engineering for Social Computing" },
    type: "Elective",
  },
  {
    code: "AIC.50201",
    name: { ko: "사물인터넷 데이터 사이언스", en: "IoT Data Science" },
    type: "Elective",
  },
  {
    code: "AIC.50500",
    name: { ko: "인간과 컴퓨터 상호작용", en: "Human-Computer Interaction" },
    type: "Elective",
  },
  {
    code: "AIC.50501",
    name: { ko: "인공지능 윤리", en: "AI Ethics" },
    type: "Elective",
  },
  {
    code: "AIC.60100",
    name: { ko: "고급 기계학습", en: "Advanced Machine Learning" },
    type: "Elective",
  },
  {
    code: "AIC.60200",
    name: { ko: "고급 데이터 마이닝", en: "Advanced Data Mining" },
    type: "Elective",
  },
];

const CourseListPage: React.FC = () => {
  const { lang, t } = use(LanguageContext);
  const education = t.education;
  const getCourseNumber = (code: string) => Number(code.split(".")[1]);
  const ugCourses = courses.filter((c) => getCourseNumber(c.code) < 50000);
  const gradCourses = courses.filter((c) => getCourseNumber(c.code) >= 50000);

  const renderTable = (courseList: typeof courses, title: string) => (
    <div className="mb-12">
      <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
        <span className="w-2 h-8 bg-[#004191] rounded-full"></span>
        {title}
      </h2>
      <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-md bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="w-[15%] px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Code
                </th>
                <th className="w-[70%] px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Course Name
                </th>
                <th className="w-[15%] px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {courseList.map((c, i) => (
                <tr
                  key={i}
                  className="hover:bg-blue-50/30 transition-colors group"
                >
                  <td className="px-8 py-5 text-sm font-black text-blue-900 font-mono tracking-tighter">
                    {c.code}
                  </td>
                  <td className="px-8 py-5 text-[15px] font-bold text-slate-800 leading-tight">
                    {lang === "ko" ? c.name.ko : c.name.en}
                  </td>
                  <td className="px-8 py-5 text-[10px]">
                    <span
                      className={`px-4 py-1.5 rounded-full font-black uppercase tracking-tight ${c.type === "Required" ? "bg-blue-900 text-white" : "bg-slate-100 text-slate-400"}`}
                    >
                      {c.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-36">
      <div className="bg-slate-50 border-b border-slate-100 py-16 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          {education.courseTitle}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Advanced Curriculum for AI-Native Leaders
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {renderTable(
            ugCourses,
            lang === "ko"
              ? "학부 과정 (Undergraduate)"
              : "Undergraduate Courses",
          )}
          <div className="mb-32">
            <img
              src="/images/roadmap_AIComputing.png"
              alt={
                lang === "ko"
                  ? "AI 컴퓨팅 교육과정 로드맵"
                  : "AI Computing curriculum roadmap"
              }
              className="w-full h-auto"
            />
            <p className="mt-4 text-right text-sm font-bold text-slate-500">
              {lang === "ko"
                ? "AI 컴퓨팅학과 학사 교육과정 로드맵 ▴"
                : "Dept. of AI Computing Undergraduate Curriculum Roadmap ▴"}
            </p>
          </div>
          {renderTable(
            gradCourses,
            lang === "ko" ? "대학원 과정 (Graduate)" : "Graduate Courses",
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseListPage;
