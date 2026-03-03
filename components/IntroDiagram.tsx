import React, { useContext } from "react";
import { LanguageContext } from "../App";

const IntroDiagram: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const layers = [
    {
      title: lang === "ko" ? "AI-Native 컴퓨팅 기초 역량" : "AI-Native Computing Foundation",
      gradient: "from-[#0F2C5C] to-[#1B4C8C]",
    },
    {
      title: lang === "ko" ? "수학적·원리 기반 설계 역량" : "Mathematical & Principle-Based Design",
      gradient: "from-[#1B4C8C] to-[#2563EB]",
    },
    {
      title: lang === "ko" ? "AI 이론 및 알고리즘" : "AI Theory & Algorithms",
      gradient: "from-[#2563EB] to-[#3B82F6]",
    },
    {
      title: lang === "ko" ? "AI 시스템 및 운영 기술" : "AI Systems & Operations",
      gradient: "from-[#3B82F6] to-[#38BDF8]",
    },
    {
      title: lang === "ko" ? "차세대 AI 기술" : "Next-Generation AI",
      gradient: "from-[#60A5FA] to-[#7DD3FC]",
    },
    {
      title: lang === "ko" ? "응용 및 도메인 적용" : "Domain Applications",
      gradient: "from-[#93C5FD] to-[#BAE6FD]",
    },
    {
      title: lang === "ko" ? "인간중심 AI 설계" : "Human-Centered AI Design",
      gradient: "from-[#DBEAFE] to-[#E0F2FE]",
      textDark: true,
    },
  ];

  return (
    <section className="pt-56 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-block text-sm font-bold tracking-[0.2em] text-blue-500 mb-4">
            KAIST AI COMPUTING
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            <span className="text-[#2563EB]">AI-Native</span>{" "}
            {lang === "ko"
              ? "핵심 인재 양성을 위한 교육 체계"
              : "Education System for Future Leaders"}
          </h2>
          <p className="text-slate-600 max-w-4xl mx-auto text-sm md:text-base">
            {lang === "ko"
              ? "AI를 단순 활용하는 수준을 넘어, AI 자체를 설계·고도화·운영할 수 있는 AI-Native 핵심 인재를 양성합니다."
              : "Beyond simply using AI, we cultivate AI-Native talents capable of designing, advancing, and operating AI systems."}
          </p>
        </div>

        {/* Pyramid */}
        <div className="relative flex justify-center mb-20">
            <div
                className="relative w-full max-w-2xl aspect-[4/3] overflow-hidden"
                style={{
                clipPath: "polygon(42% 0%, 58% 0%, 100% 100%, 0% 100%)",
                }}
            >
                {layers.reverse().map((layer, index, arr) => {
                    const total = arr.length;
                    const heightPercent = 100 / total;
                    const ratio = (index) / total;
                    const usableWidth = 16 + ratio * (100 - 16);

                    return (
                        <div
                        key={index}
                        className={`flex items-center justify-center text-center bg-gradient-to-r ${layer.gradient}
                        ${layer.textDark ? "text-slate-700" : "text-white"} font-semibold text-[9px] md:text-sm
                        ${index !== 0 ? "border-t-4 md:border-t-[7px] border-white" : ""}`}
                        style={{ height: `${heightPercent}%` }}
                        >
                            <div
                                className="mx-auto whitespace-normal break-words leading-tight"
                                style={{ maxWidth: `${usableWidth}%` }}>
                                {layer.title}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
          <h3 className="inline-block text-sm font-bold tracking-[0.2em] text-blue-500 mb-8">
            {lang === "ko" ? "AI-NATIVE 인재상 — 핵심 역량" : "AI-NATIVE CORE COMPETENCIES"}
          </h3>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              lang === "ko"
                ? { title: "AI 이론 설계 능력", desc: "AI 원리를 깊이 이해하고 새로운 모델을 설계" }
                : { title: "AI Design Capability", desc: "Deep understanding of AI principles and designing new model" },

              lang === "ko"
                ? { title: "시스템 구축 역량", desc: "MLOps·분산 학습 등 대규모 AI 시스템 운영" }
                : { title: "System Engineering", desc: "MLOps & distributed AI systems" },

              lang === "ko"
                ? { title: "차세대 기술 적응력", desc: "LLM·생성형·에이전틱 AI 최신 기술 선도" }
                : { title: "Next-Generation AI", desc: "Leading Innovation in LLM, Generative, and Agentic AI" },

              lang === "ko"
                ? { title: "도메인 응용 역량", desc: "산업·과학·공공 환경에 AI+X 문제 해결" }
                : { title: "Domain Application", desc: "AI+X Solution Across Industry, Science, and Public Sectors" },

              lang === "ko"
                ? { title: "책임 있는 AI 설계", desc: "인간 중심 윤리과 철학적 이해 기반 설계" }
                : { title: "Responsible AI", desc: "AI Design Grounded in Ethics and Philosophical Understanding" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-blue-600 font-bold text-lg mb-3">
                  {idx + 1}
                </div>
                <h4 className="font-bold mb-2 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-600 whitespace-normal break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-r from-[#0F2C5C] to-[#1B4C8C] text-white p-10 rounded-2xl shadow-lg">
          <div className="text-xs tracking-widest text-blue-200 mb-3">
            VISION
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            {lang === "ko"
              ? "AI를 활용하는 인재가 아닌, AI를 만드는 인재"
              : "Not Just AI Users, But AI Creators"}
          </h3>
          <p className="max-w-3xl mx-auto text-sm text-blue-100">
            {lang === "ko"
              ? "기존 전산학 중심 교육에서 한 단계 나아가, AI에 집중된 전용 교육과정을 통해 급변하는 AI 기술 환경에 선도적으로 대응합니다."
              : "Beyond traditional computer science–centered education, we proactively respond to the rapidly evolving AI landscape through a dedicated AI-focused curriculum."}
          </p>
        </div>

      </div>
    </section>
  );
};

export default IntroDiagram;