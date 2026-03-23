import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const DesignHierarchyDiagram: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-300 font-sans">
      <div className="text-3xl font-bold text-slate-900 mb-2">
        {lang === 'ko' ? 'AI 시스템 설계 계층 — ' : 'AI System Design Hierarchy — '}
        <span className="text-blue-500">Core</span>
        {lang === 'ko' ? ' 설계 역량 중심' : ' Core Design Focus'}
      </div>
      <div className="text-sm text-slate-500 mb-10 leading-relaxed">
        {lang === 'ko'
          ? 'AI 컴퓨팅학과가 집중하는 설계 계층: 모델부터 인프라까지, AI의 핵심 엔진을 설계하는 능력'
          : 'The design layers the Dept. of AI Computing focuses on: from models to infrastructure, the ability to design AI\'s core engine.'}
      </div>

      <div className="relative overflow-hidden flex justify-center py-6">
        <svg width="100%" height="auto" viewBox="0 0 1080 700" className="max-w-5xl">
          <defs>
            <linearGradient id="ap1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#d1d5db' }} /><stop offset="100%" style={{ stopColor: '#e5e7eb' }} />
            </linearGradient>
            <linearGradient id="ap2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#9ca3af' }} /><stop offset="100%" style={{ stopColor: '#d1d5db' }} />
            </linearGradient>
            <linearGradient id="cp1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#06b6d4' }} /><stop offset="100%" style={{ stopColor: '#22d3ee' }} />
            </linearGradient>
            <linearGradient id="cp2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0891b2' }} /><stop offset="100%" style={{ stopColor: '#06b6d4' }} />
            </linearGradient>
            <linearGradient id="cp3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#0e7490' }} /><stop offset="100%" style={{ stopColor: '#0891b2' }} />
            </linearGradient>
            <linearGradient id="cp4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#155e75' }} /><stop offset="100%" style={{ stopColor: '#0e7490' }} />
            </linearGradient>
            <linearGradient id="cp5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#164e63' }} /><stop offset="100%" style={{ stopColor: '#155e75' }} />
            </linearGradient>
            <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" /></filter>
          </defs>

          {/* Left labels */}
          <text x="75" y="105" fill="#9ca3af" fontSize="12" fontWeight="500" textAnchor="middle" transform="rotate(-90 75 105)">
            {lang === 'ko' ? 'AI 응용 설계' : 'AI App Design'}
          </text>
          <line x1="95" y1="44" x2="95" y2="168" stroke="#d1d5db" strokeWidth="1.2" strokeDasharray="4,3"
          />
          <polygon points="95,40 91,48 99,48" fill="#d1d5db" />
          <polygon points="95,170 91,162 99,162" fill="#d1d5db" />

          <text x="75" y="360" fill="#0891b2" fontSize="13" fontWeight="700" textAnchor="middle" transform="rotate(-90 75 360)">
            {lang === 'ko' ? 'AI Core 설계' : 'AI Core Design'}
          </text>
          <line x1="95" y1="209" x2="95" y2="506" stroke="#0891b2" strokeWidth="2" strokeDasharray="4,3" />
          <polygon points="95,205 91,213 99,213" fill="#0891b2" />
          <polygon points="95,520 91,512 99,512" fill="#0891b2" />

          <text x="75" y="587" fill="#164e63" fontSize="13" fontWeight="700" textAnchor="middle" transform="rotate(-90 75 587)">
            {lang === 'ko' ? 'AI 인프라 설계' : 'AI Infra Design'}
          </text>
          <line x1="95" y1="549" x2="95" y2="626" stroke="#164e63" strokeWidth="2" strokeDasharray="4,3" />
          <polygon points="95,545 91,553 99,553" fill="#164e63" />
          <polygon points="95,630 91,622 99,622" fill="#164e63" />

          {/* Focus area highlight */}
          <rect x="130" y="200" width="600" height="335" rx="16" fill="#f0fdfa" stroke="#99f6e4" strokeWidth="1" opacity="0.5" />

          {/* Application layers */}
          <polygon points="430,40 495,90 365,90" fill="url(#ap1)" stroke="white" strokeWidth="2" filter="url(#shadow)" />
          <text x="430" y="76" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="600">{lang === 'ko' ? '자연어 인터페이스' : 'NLP Interface'}</text>
          <polygon points="430,95 535,170 325,170" fill="url(#ap2)" stroke="white" strokeWidth="2" filter="url(#shadow)" />
          <text x="430" y="144" textAnchor="middle" fill="#6b7280" fontSize="12" fontWeight="600">{lang === 'ko' ? 'AI 에이전트 응용' : 'AI Agent App'}</text>

          {/* Divider */}
          <line x1="280" y1="195" x2="580" y2="195" stroke="#0891b2" strokeWidth="2" strokeDasharray="6,4" />
          <rect x="365" y="183" width="130" height="24" rx="12" fill="#0891b2" />
          <text x="430" y="200" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="1">
            {lang === 'ko' ? '핵심 설계 시작 ▼' : 'CORE BEGINS ▼'}
          </text>

          {/* Core layers with labels */}
          {[
            {
              p: "430,215 575,290 285,290", color: "url(#cp1)",
              title: lang === 'ko' ? "AI 모델 아키텍처 설계" : "AI Model Architecture",
              label1: lang === 'ko' ? "Transformer, Diffusion," : "Transformer, Diffusion,",
              label2: lang === 'ko' ? "SSM, 새로운 아키텍처 창조" : "SSM, New Architectures",
              y: 264, ly: 258
            },
            {
              p: "430,295 615,370 245,370", color: "url(#cp2)",
              title: lang === 'ko' ? "AI 학습·추론 시스템 설계" : "AI Training/Inference Sys",
              label1: lang === 'ko' ? "분산학습, 학습 최적화," : "Dist. Training, Opt,",
              label2: lang === 'ko' ? "추론 엔진, 모델 경량화" : "Inference, Compression",
              y: 344, ly: 340
            },
            {
              p: "430,375 650,450 210,450", color: "url(#cp3)",
              title: lang === 'ko' ? "AI 플랫폼·프레임워크 설계" : "AI Platform/Framework",
              label1: lang === 'ko' ? "PyTorch 내부 설계, CUDA," : "PyTorch Internals, CUDA,",
              label2: lang === 'ko' ? "AI 컴파일러, Runtime 최적화" : "AI Compiler, Runtime Opt",
              y: 424, ly: 420
            },
            {
              p: "430,455 685,530 175,530", color: "url(#cp4)",
              title: lang === 'ko' ? "AI 컴퓨팅 아키텍처 설계" : "AI Computing Architecture",
              label1: lang === 'ko' ? "GPU/NPU 아키텍처," : "GPU/NPU Architecture,",
              label2: lang === 'ko' ? "메모리 계층, 병렬처리 설계" : "Memory, Parallel Design",
              y: 504, ly: 500
            },
            {
              p: "430,535 720,625 140,625", color: "url(#cp5)",
              title: lang === 'ko' ? "AI 하드웨어·가속기 설계" : "AI Hardware/Accelerator",
              label1: lang === 'ko' ? "AI 전용 칩, 가속기 설계," : "AI Custom Chips, Accel,",
              label2: lang === 'ko' ? "데이터센터 인프라" : "Data Center Infra",
              y: 592, ly: 588
            }
          ].map((layer, idx) => (
            <React.Fragment key={idx}>
              <polygon points={layer.p} fill={layer.color} stroke="white" strokeWidth="2" filter="url(#shadow)" />
              <text x="430" y={layer.y} textAnchor="middle" fill="white" fontSize="14" fontWeight="700">{layer.title}</text>
              <line x1={layer.p.split(' ')[1].split(',')[0]} y1={layer.ly} x2="750" y2={layer.ly} stroke="#0891b2" strokeWidth="1" strokeDasharray="4,4" />
              <circle cx={layer.p.split(' ')[1].split(',')[0]} cy={layer.ly} r="3" fill="#0891b2" />
              <circle cx="750" cy={layer.ly} r="3" fill="#0891b2" />
              <text x={770} y={layer.ly - 6} fill="#0e7490" fontSize="13" fontWeight="600">{layer.label1}</text>
              <text x={770} y={layer.ly + 12} fill="#475569" fontSize="12">{layer.label2}</text>
            </React.Fragment>
          ))}

          {/* App side annotations */}
          <line x1="495" y1="72" x2="750" y2="72" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4,4" />
          <text x="770" y="68" fill="#9ca3af" fontSize="12">{lang === 'ko' ? 'Prompt 설계, UX' : 'Prompt Design, UX'}</text>
          <text x="770" y="84" fill="#9ca3af" fontSize="11">{lang === 'ko' ? '챗봇, 대화형 인터페이스' : 'Chatbots, Interactive'}</text>

          <line x1="535" y1="140" x2="750" y2="140" stroke="#d1d5db" strokeWidth="1" strokeDasharray="4,4" />
          <text x="770" y="136" fill="#9ca3af" fontSize="12">{lang === 'ko' ? '에이전트 워크플로우' : 'Agent Workflow'}</text>
          <text x="770" y="152" fill="#9ca3af" fontSize="11">{lang === 'ko' ? 'RAG, Tool Use, 오케스트레이션' : 'RAG, Tool Use, Orchestration'}</text>

          <rect x="680" y="670" width="14" height="14" rx="3" fill="#0891b2" />
          <text x="700" y="682" fill="#334155" fontSize="12" fontWeight="500">{lang === 'ko' ? 'Core 설계 역량 (학과 핵심 교육)' : 'Core Design (Core Curriculum)'}</text>
          <rect x="910" y="670" width="14" height="14" rx="3" fill="#d1d5db" />
          <text x="930" y="682" fill="#9ca3af" fontSize="12">
            {lang === 'ko' ? '응용 설계' : 'Application Design'}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default DesignHierarchyDiagram;
