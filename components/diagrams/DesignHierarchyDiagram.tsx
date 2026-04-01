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
          <text x="75" y="120" fill="#0ea5e9" fontSize="12" fontWeight="500" textAnchor="middle" transform="rotate(-90 75 120)">
            {lang === 'ko' ? 'AI 응용 설계' : 'AI App Design'}
          </text>
          <line x1="95" y1="44" x2="95" y2="196" stroke="#bae6fd" strokeWidth="1.2" strokeDasharray="4,3"
          />
          <polygon points="95,40 91,48 99,48" fill="#bae6fd" />
          <polygon points="95,200 91,192 99,192" fill="#bae6fd" />

          <text x="75" y="360" fill="#1e40af" fontSize="13" fontWeight="700" textAnchor="middle" transform="rotate(-90 75 360)">
            {lang === 'ko' ? 'AI Core 설계' : 'AI Core Design'}
          </text>
          <line x1="95" y1="204" x2="95" y2="516" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,3" />
          <polygon points="95,200 91,208 99,208" fill="#3b82f6" />
          <polygon points="95,520 91,512 99,512" fill="#3b82f6" />

          <text x="75" y="560" fill="#164e63" fontSize="13" fontWeight="700" textAnchor="middle" transform="rotate(-90 75 560)">
            {lang === 'ko' ? 'AI 인프라 설계' : 'AI Infra Design'}
          </text>
          <line x1="95" y1="524" x2="95" y2="596" stroke="#164e63" strokeWidth="1.5" strokeDasharray="3,2" />
          <polygon points="95,520 91,528 99,528" fill="#164e63" />
          <polygon points="95,600 91,592 99,592" fill="#164e63" />


          {/* Application layers */}
          <polygon points="430,40 680,120 180,120" fill="url(#ap1)" stroke="white" strokeWidth="2" filter="url(#shadow)" />
          <text x="430" y="98" textAnchor="middle" fill="#22d3ee" fontSize="14" fontWeight="700">{lang === 'ko' ? '자연어 인터페이스' : 'NLP Interface'}</text>
          <polygon points="430,120 680,200 180,200" fill="url(#ap2)" stroke="white" strokeWidth="2" filter="url(#shadow)" />
          <text x="430" y="178" textAnchor="middle" fill="#06b6d4" fontSize="14" fontWeight="700">{lang === 'ko' ? 'AI 에이전트 응용' : 'AI Agent App'}</text>

          {/* Core layers with labels */}
          {[
            {
              p: "430,200 680,280 180,280", color: "url(#cp1)",
              title: lang === 'ko' ? "AI 모델 아키텍처 설계" : "AI Model Architecture",
              label1: lang === 'ko' ? "Transformer, Diffusion," : "Transformer, Diffusion,",
              label2: lang === 'ko' ? "SSM, 새로운 아키텍처 창조" : "SSM, New Architectures",
              y: 258, ly: 240
            },
            {
              p: "430,280 680,360 180,360", color: "url(#cp2)",
              title: lang === 'ko' ? "AI 학습·추론 시스템 설계" : "AI Training/Inference Sys",
              label1: lang === 'ko' ? "분산학습, 학습 최적화," : "Dist. Training, Opt,",
              label2: lang === 'ko' ? "추론 엔진, 모델 경량화" : "Inference, Compression",
              y: 338, ly: 320
            },
            {
              p: "430,360 680,440 180,440", color: "url(#cp3)",
              title: lang === 'ko' ? "AI 플랫폼·프레임워크 설계" : "AI Platform/Framework",
              label1: lang === 'ko' ? "PyTorch 내부 설계, CUDA," : "PyTorch Internals, CUDA,",
              label2: lang === 'ko' ? "AI 컴파일러, Runtime 최적화" : "AI Compiler, Runtime Opt",
              y: 418, ly: 400
            },
            {
              p: "430,440 680,520 180,520", color: "url(#cp4)",
              title: lang === 'ko' ? "AI 컴퓨팅 아키텍처 설계" : "AI Computing Architecture",
              label1: lang === 'ko' ? "GPU/NPU 아키텍처," : "GPU/NPU Architecture,",
              label2: lang === 'ko' ? "메모리 계층, 병렬처리 설계" : "Memory, Parallel Design",
              y: 498, ly: 480
            },
            {
              p: "430,520 680,600 180,600", color: "url(#cp5)",
              title: lang === 'ko' ? "AI 하드웨어·가속기 설계" : "AI Hardware/Accelerator",
              label1: lang === 'ko' ? "AI 전용 칩, 가속기 설계," : "AI Custom Chips, Accel,",
              label2: lang === 'ko' ? "데이터센터 인프라" : "Data Center Infra",
              y: 578, ly: 560
            }
          ]
            .map((layer, idx) => (
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
          <line x1="680" y1="80" x2="750" y2="80" stroke="#a5f3fc" strokeWidth="1" strokeDasharray="4,3" />
          <text x="770" y="76" fill="#0891b2" fontSize="12">{lang === 'ko' ? 'Prompt 설계, UX' : 'Prompt Design, UX'}</text>
          <text x="770" y="92" fill="#64748b" fontSize="11">{lang === 'ko' ? '챗봇, 대화형 인터페이스' : 'Chatbots, Interactive'}</text>

          <line x1="680" y1="160" x2="750" y2="160" stroke="#a5f3fc" strokeWidth="1" strokeDasharray="4,3" />
          <text x="770" y="156" fill="#0891b2" fontSize="12">{lang === 'ko' ? '에이전트 워크플로우' : 'Agent Workflow'}</text>
          <text x="770" y="172" fill="#64748b" fontSize="11">{lang === 'ko' ? 'RAG, Tool Use, 오케스트레이션' : 'RAG, Tool Use, Orchestration'}</text>

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
