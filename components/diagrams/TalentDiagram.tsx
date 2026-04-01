import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const TalentDiagram: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-300 font-sans">
      <div className="text-3xl font-bold text-slate-900 mb-2">
        {lang === 'ko' ? 'AI ' : 'Conditions for AI '}
        <span className="text-blue-600">Core</span>
        {lang === 'ko' ? ' 인재의 조건' : ' Talent'}
      </div>
      <div className="text-sm text-slate-500 mb-10 leading-relaxed">
        {lang === 'ko'
          ? 'AI를 단순 활용하는 수준을 넘어, AI의 핵심 원리를 이해하고 새로운 AI를 설계·구축·응용할 수 있는 인재'
          : 'Talents who go beyond simple AI usage to understand core principles and design/build new AI systems'}
      </div>

      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {(lang === 'ko' ? [
          "깊은 수학·이론 기초",
          "원천 알고리즘 설계력",
          "AI 시스템 구축 역량",
          "창의적 문제 해결력",
          "급변하는 AI 기술에 유연한 적응력",
          "인간 중심적 창의적 AI 응용"
        ] : [
          "Deep Math/Theory",
          "Core Algo Design",
          "AI System Engineering",
          "Creative Problem Solving",
          "Adaptive Tech Agility",
          "Human-Centered Creative AI Application"
        ]).map((text, i) => (
          <div key={i} className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-black shrink-0">
              {i + 1}
            </div>
            {text}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-4">
        <div className="relative border-2 border-blue-500 bg-blue-50/30 rounded-3xl p-2 pt-10 flex flex-col md:flex-row gap-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-slate-900 text-blue-300 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.15em] flex items-center gap-2 whitespace-nowrap">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              {lang === 'ko' ? '풀스택 AI 역량' : 'Full-Stack AI Competency'}
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            </div>
          </div>

          {/* Pillar 1 */}
          <div className="flex-1 min-w-[200px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 flex flex-col items-center gap-4 text-center text-white">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <span className="text-lg font-black italic">∑∫</span>
            </div>
            <div className="text-lg font-bold">{lang === 'ko' ? '수학·이론 기초' : 'Math & Theory'}</div>
            <div className="text-xs opacity-70 leading-relaxed">
              {lang === 'ko' ? <>선형대수, 확률·통계<br />최적화, 정보이론<br />미적분, 이산수학</> : <>Linear Algebra, Stat<br />Optimization, Info Theory<br />Calculus, Discrete Math</>}
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex-1 min-w-[200px] bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 flex flex-col items-center gap-4 text-center text-white relative">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="8" r="4" fill="none" stroke="white" strokeWidth="1.2" />
                <circle cx="6" cy="20" r="3.5" fill="none" stroke="white" strokeWidth="1.2" />
                <circle cx="22" cy="20" r="3.5" fill="none" stroke="white" strokeWidth="1.2" />
                <line x1="12" y1="11" x2="8" y2="17" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                <line x1="16" y1="11" x2="20" y2="17" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                <line x1="9" y1="20" x2="19" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <circle cx="14" cy="8" r="1.5" fill="#93c5fd" />
                <circle cx="6" cy="20" r="1.5" fill="#93c5fd" />
                <circle cx="22" cy="20" r="1.5" fill="#93c5fd" />
              </svg>
            </div>
            <div className="text-lg font-bold leading-tight">{lang === 'ko' ? <>원천 알고리즘<br />설계</> : <>Core Algorithm<br />Design</>}</div>
            <div className="text-xs opacity-70 leading-relaxed">
              {lang === 'ko' ? <>딥러닝 핵심 이론<br />학습 알고리즘 설계<br />새로운 AI 모델 창조</> : <>Deep Learning Theory<br />Learning Algo Design<br />New Model Creation</>}
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex-1 min-w-[200px] bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl p-8 flex flex-col items-center gap-4 text-center text-white">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="4" y="6" width="20" height="14" rx="2" fill="none" stroke="white" strokeWidth="1.2" />
                <line x1="4" y1="20" x2="24" y2="20" stroke="white" strokeWidth="1.2" />
                <rect x="10" y="20" width="8" height="3" fill="rgba(255,255,255,0.4)" />
                <text x="14" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="600">
                  {lang === 'ko' ? '시스템' : 'SYS'}
                </text>
              </svg>
            </div>
            <div className="text-lg font-bold leading-tight">{lang === 'ko' ? <>AI 시스템<br />핵심 설계</> : <>AI System<br />Core Design</>}</div>
            <div className="text-xs opacity-70 leading-relaxed">
              {lang === 'ko' ? <>AI 프레임워크 설계<br />분산학습·MLOps<br />AI 컴퓨팅 인프라</> : <>Framework Design<br />Distributed ML, MLOps<br />AI Computing Infra</>}
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex-1 min-w-[200px] bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-8 flex flex-col items-center gap-4 text-center text-white">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="10" r="5" fill="none" stroke="white" strokeWidth="1.2" />
                <path d="M8 10 C8 10 6 14 6 18" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                <path d="M20 10 C20 10 22 14 22 18" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                <path d="M6 18 Q14 22 22 18" fill="none" stroke="white" strokeWidth="1.2" />
                <circle cx="14" cy="10" r="2" fill="#bfdbfe" />
                <rect x="11" y="18" width="6" height="3" rx="1" fill="rgba(255,255,255,0.4)" />
              </svg>
            </div>
            <div className="text-lg font-bold leading-tight">{lang === 'ko' ? <>인간-AI<br />상호작용</> : <>Human-AI<br />Interaction</>}</div>
            <div className="text-xs opacity-70 leading-relaxed">
              {lang === 'ko' ? <>AI UI/UX,<br />XAI, 윤리·공정성,<br />신뢰성</> : <>AI UI/UX,<br />XAI, Ethics & Fairness,<br />Trustworthiness</>}
            </div>
          </div>
        </div>

        {/* Application Pillar */}
        <div className="w-full lg:w-[200px] bg-gradient-to-br from-slate-400 to-slate-500 rounded-3xl p-8 flex flex-col items-center gap-4 text-center text-white opacity-70 relative self-center lg:self-stretch justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-500 text-white px-3 py-1 rounded-full text-[9px] font-bold tracking-wider">
            {lang === 'ko' ? '응용 영역' : 'APPLICATION'}
          </div>
          <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="8" height="8" rx="2" fill="rgba(255,255,255,0.5)" />
              <rect x="13" y="3" width="8" height="8" rx="2" fill="rgba(255,255,255,0.5)" />
              <rect x="3" y="13" width="8" height="8" rx="2" fill="rgba(255,255,255,0.5)" />
              <rect x="13" y="13" width="8" height="8" rx="2" fill="rgba(255,255,255,0.5)" />
            </svg>
          </div>
          <div className="text-[15px] font-bold">{lang === 'ko' ? '도메인 응용' : 'Domain App'}</div>
          <div className="text-[11px] opacity-80 leading-relaxed">
            {lang === 'ko' ? <>AI+X 융합<br />산업 적용<br />인간중심 AI</> : <>AI+X Integration<br />Industry Application<br />Human-Centered AI</>}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-slate-600 font-medium">
        {lang === 'ko' ? (
          <><strong className="text-blue-800">Core를 아는 사람이 Application도 잘 만든다</strong> — 핵심 원리를 깊이 이해한 인재가 어떤 도메인에서든 혁신을 이끕니다.</>
        ) : (
          <><strong className="text-blue-800">Those who know the Core excel at Application</strong> — Talent with deep understanding of core principles leads innovation in any domain.</>
        )}
      </div>
    </div>
  );
};

export default TalentDiagram;
