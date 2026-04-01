import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const DesignHierarchyDiagram: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="w-full bg-white rounded-3xl p-2 md:py-12 md:pl-12 md:pr-6 shadow-xl font-sans">
      <div className="text-3xl font-bold text-slate-900 mb-2">
        {lang === 'ko' ? '인간중심 AI 컴퓨팅 시스템 설계 계층 — ' : 'Human-Centered AI Computing Design Layers'}
        <br />
        {lang === 'ko' ? '' : '— '}
        <span className="text-blue-500">Full Stack</span>
        {lang === 'ko' ? ' 설계 역량' : ' Design Competency'}
      </div>
      <div className="text-sm text-slate-500 mb-10 leading-relaxed">
        {lang === 'ko'
          ? 'AI 컴퓨팅 학과는 인프라, Core 설계, AI응용으로 이어지는 Full Stack을 다루는 능력 배양 중심'
          : 'AI Computing Department focuses on cultivating full-stack capabilities spanning infrastructure, core design, and AI applications.'}
      </div>

      <div className="relative overflow-hidden flex justify-center py-6">
        <svg width="100%" height="auto" viewBox="0 0 1080 700" className="max-w-5xl">
          <defs>
            <linearGradient id="ap1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ecfeff' }} /><stop offset="100%" style={{ stopColor: '#cffafe' }} />
            </linearGradient>
            <linearGradient id="ap2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#a5f3fc' }} /><stop offset="100%" style={{ stopColor: '#67e8f9' }} />
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
          <text x="75" y="105" fill="#0ea5e9" fontSize="12" fontWeight="500" textAnchor="middle" transform="rotate(-90 75 105)">
            {lang === 'ko' ? 'AI 응용 설계' : 'AI App Design'}
          </text>
          <line x1="95" y1="44" x2="95" y2="168" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="4,3"
          />
          <polygon points="95,40 91,48 99,48" fill="#bae6fd" />
          <polygon points="95,170 91,162 99,162" fill="#bae6fd" />

          <text x="75" y="360" fill="#1e40af" fontSize="13" fontWeight="700" textAnchor="middle" transform="rotate(-90 75 360)">
            {lang === 'ko' ? 'AI Core 설계' : 'AI Core Design'}
          </text>
          <line x1="95" y1="209" x2="95" y2="506" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,3" />
          <polygon points="95,205 91,213 99,213" fill="#3b82f6" />
          <polygon points="95,520 91,512 99,512" fill="#3b82f6" />

          <text x="75" y="587" fill="#164e63" fontSize="13" fontWeight="700" textAnchor="middle" transform="rotate(-90 75 587)">
            {lang === 'ko' ? 'AI 인프라 설계' : 'AI Infra Design'}
          </text>
          <line x1="95" y1="549" x2="95" y2="626" stroke="#164e63" strokeWidth="2" strokeDasharray="4,3" />
          <polygon points="95,545 91,553 99,553" fill="#164e63" />
          <polygon points="95,630 91,622 99,622" fill="#164e63" />


          {/* Application layers */}
          <polygon points="430,40 680,120 180,120" fill="url(#ap1)" stroke="white" strokeWidth="2" filter="url(#shadow)" />
          <text x="430" y="98" textAnchor="middle" fill="#22d3ee" fontSize="14" fontWeight="700">{lang === 'ko' ? '자연어 인터페이스' : 'NLP Interface'}</text>
          <polygon points="430,125 680,205 180,205" fill="url(#ap2)" stroke="white" strokeWidth="2" filter="url(#shadow)" />
          <text x="430" y="183" textAnchor="middle" fill="#06b6d4" fontSize="14" fontWeight="700">{lang === 'ko' ? 'AI 에이전트 응용' : 'AI Agent App'}</text>

          {/* Core layers with labels */}
          {[
            {
              p: "430,230 680,310 180,310", color: "url(#cp1)",
              title: lang === 'ko' ? "AI 모델 아키텍처 설계" : "AI Model Architecture",
              label1: lang === 'ko' ? "Transformer, Diffusion," : "Transformer, Diffusion,",
              label2: lang === 'ko' ? "SSM, 새로운 아키텍처 창조" : "SSM, New Architectures",
              y: 288, ly: 280
            },
            {
              p: "430,315 680,395 180,395", color: "url(#cp2)",
              title: lang === 'ko' ? "AI 학습·추론 시스템 설계" : "AI Training/Inference Sys",
              label1: lang === 'ko' ? "분산학습, 학습 최적화," : "Dist. Training, Opt,",
              label2: lang === 'ko' ? "추론 엔진, 모델 경량화" : "Inference, Compression",
              y: 373, ly: 365
            },
            {
              p: "430,400 680,480 180,480", color: "url(#cp3)",
              title: lang === 'ko' ? "AI 플랫폼·프레임워크 설계" : "AI Platform/Framework",
              label1: lang === 'ko' ? "PyTorch 내부 설계, CUDA," : "PyTorch Internals, CUDA,",
              label2: lang === 'ko' ? "AI 컴파일러, Runtime 최적화" : "AI Compiler, Runtime Opt",
              y: 458, ly: 450
            },
            {
              p: "430,485 680,565 180,565", color: "url(#cp4)",
              title: lang === 'ko' ? "AI 컴퓨팅 아키텍처 설계" : "AI Computing Architecture",
              label1: lang === 'ko' ? "GPU/NPU 아키텍처," : "GPU/NPU Architecture,",
              label2: lang === 'ko' ? "메모리 계층, 병렬처리 설계" : "Memory, Parallel Design",
              y: 543, ly: 535
            },
            {
              p: "430,570 680,650 180,650", color: "url(#cp5)",
              title: lang === 'ko' ? "AI 하드웨어·가속기 설계" : "AI Hardware/Accelerator",
              label1: lang === 'ko' ? "AI 전용 칩, 가속기 설계," : "AI Custom Chips, Accel,",
              label2: lang === 'ko' ? "데이터센터 인프라" : "Data Center Infra",
              y: 628, ly: 620
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
          <line x1="680" y1="92" x2="750" y2="92" stroke="#a5f3fc" strokeWidth="1" strokeDasharray="4,3" />
          <text x="770" y="88" fill="#0891b2" fontSize="12">{lang === 'ko' ? 'Prompt 설계, UX' : 'Prompt Design, UX'}</text>
          <text x="770" y="104" fill="#64748b" fontSize="11">{lang === 'ko' ? '챗봇, 대화형 인터페이스' : 'Chatbots, Interactive'}</text>

          <line x1="680" y1="172" x2="750" y2="172" stroke="#a5f3fc" strokeWidth="1" strokeDasharray="4,3" />
          <text x="770" y="168" fill="#0891b2" fontSize="12">{lang === 'ko' ? '에이전트 워크플로우' : 'Agent Workflow'}</text>
          <text x="770" y="184" fill="#64748b" fontSize="11">{lang === 'ko' ? 'RAG, Tool Use, 오케스트레이션' : 'RAG, Tool Use, Orchestration'}</text>

          <rect x="680" y="670" width="14" height="14" rx="3" fill="#0891b2" />
          <text x="700" y="682" fill="#334155" fontSize="12" fontWeight="500">{lang === 'ko' ? 'Core 설계 역량 (학과 핵심 교육)' : 'Core Design (Core Curriculum)'}</text>
          <rect x="910" y="670" width="14" height="14" rx="3" fill="#a5f3fc" />
          <text x="930" y="682" fill="#0ea5e9" fontSize="12">
            {lang === 'ko' ? '응용 설계' : 'Application Design'}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default DesignHierarchyDiagram;
