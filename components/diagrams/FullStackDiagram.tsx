import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const FullStackDiagram: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-300 font-sans">
      <div className="text-3xl font-bold text-slate-900 mb-2">
        {lang === 'ko' ? '배출 하려는 인재 — AI ' : 'Ideal Talent — AI '}
        <span className="text-blue-500">Core & Foundation</span> Full Stack
      </div>
      <div className="text-sm text-slate-500 mb-10">
        {lang === 'ko'
          ? 'AI의 핵심 원리부터 시스템 설계까지, 전 계층을 깊이 이해하는 AI-Native 인재'
          : 'AI-Native talent with deep understanding across all layers, from core principles to system design'}
      </div>

      <div className="relative overflow-hidden flex justify-center py-6">
        <svg width="100%" height="auto" viewBox="0 0 1080 750" className="max-w-4xl">
          <defs>
            <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#1e3a8a' }} /><stop offset="100%" style={{ stopColor: '#2563eb' }} />
            </linearGradient>
            <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#1d4ed8' }} /><stop offset="100%" style={{ stopColor: '#3b82f6' }} />
            </linearGradient>
            <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#2563eb' }} /><stop offset="100%" style={{ stopColor: '#60a5fa' }} />
            </linearGradient>
            <linearGradient id="bg-app" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#94a3b8' }} /><stop offset="100%" style={{ stopColor: '#cbd5e1' }} />
            </linearGradient>
            <filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" /></filter>
          </defs>

          {/* KAIST badge */}
          <rect x="370" y="10" width="160" height="40" rx="20" fill="#0f172a" />
          <text x="450" y="36" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
            {lang === 'ko' ? '카이스트' : 'KAIST'}
          </text>

          {/* Left axis titles */}
          <text x="20" y="220" fill="#64748b" fontSize="11" transform="rotate(-90, 20, 340)" fontWeight="500">
            {lang === 'ko' ? '기술 복잡도' : 'Complexity'}
          </text>
          <line x1="42" y1="80" x2="42" y2="680" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,3" />
          <polygon points="42,78 38,86 46,86" fill="#e2e8f0" />
          <polygon points="42,682 38,674 46,674" fill="#e2e8f0" />

          {/* Layers */}
          <rect x="130" y="70" width="460" height="50" rx="8" fill="url(#bg-app)" filter="url(#shadow)" opacity="0.6" />
          <text x="360" y="101" textAnchor="middle" fill="white" fontSize="14" fontWeight="500">
            {lang === 'ko' ? 'AI Application (도메인 응용)' : 'AI Application (Domain App)'}
          </text>

          <line x1="130" y1="140" x2="590" y2="140" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,4" />

          <rect x="115" y="150" width="490" height="500" rx="16" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <rect x="105" y="165" width="4" height="470" rx="2" fill="#2563eb" />
          <text x="100" y="405" fill="#1e40af" fontSize="13" fontWeight="800" transform="rotate(-90, 100, 405)" letterSpacing="3">
            {lang === 'ko' ? 'AI 핵심 기술 및 파운데이션' : 'AI CORE & FOUNDATION'}
          </text>

          {[
            { y: 168, color: "url(#bg1)", text: lang === 'ko' ? "AI 모델 아키텍처" : "AI Model Architecture" },
            { y: 232, color: "url(#bg1)", text: lang === 'ko' ? "AI 알고리즘 및 학습 이론" : "AI Algorithm & Learning Theory" },
            { y: 296, color: "url(#bg2)", text: lang === 'ko' ? "AI 프레임워크 및 플랫폼" : "AI Framework & Platform" },
            { y: 360, color: "#0891b2", text: lang === 'ko' ? "AI 시스템 소프트웨어 (MLOps, 런타임)" : "AI System Software (MLOps, Runtime)" },
            { y: 424, color: "url(#bg2)", text: lang === 'ko' ? "AI 컴퓨팅 아키텍처" : "AI Computing Architecture" },
            { y: 488, color: "url(#bg3)", text: lang === 'ko' ? "AI 가속기 설계 (GPU/TPU/NPU)" : "AI Accelerator Design (GPU/TPU/NPU)" },
            { y: 552, color: "url(#bg3)", text: lang === 'ko' ? "AI 인프라 및 데이터 센터" : "AI Infrastructure & Data Center" },
            { y: 616, color: "#0f172a", text: lang === 'ko' ? "수학적 기초" : "Mathematical Foundations" }
          ].map((layer, i) => (
            <React.Fragment key={i}>
              <rect x="145" y={layer.y} width="440" height="52" rx="8" fill={layer.color} filter="url(#shadow)" />
              <text x="365" y={layer.y + 32} textAnchor="middle" fill="white" fontSize="15" fontWeight="600">{layer.text}</text>
              <line x1="585" y1={layer.y + 26} x2="650" y2={layer.y + 26} stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,3" />
              <circle cx="585" cy={layer.y + 26} r="3" fill="#3b82f6" />
            </React.Fragment>
          ))}

          {/* Panels on the right */}
          {/* Top Panel */}
          <rect x="650" y="62" width="380" height="60" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" filter="url(#shadow)" opacity="0.7" />
          <text x="840" y="88" textAnchor="middle" fill="#9ca3af" fontSize="14" fontWeight="600">
            {lang === 'ko' ? '응용 계층' : 'Application Layer'}
          </text>
          <text x="840" y="108" textAnchor="middle" fill="#cbd5e1" fontSize="11">
            {lang === 'ko' ? '도메인 응용 · AI+X 융합' : 'Domain Application · AI+X Convergence'}
          </text>

          {/* Software Panel */}
          <rect x="650" y="148" width="380" height="235" rx="16" fill="white" stroke="#3b82f6" strokeWidth="1.5" filter="url(#shadow)" />
          <rect x="650" y="148" width="380" height="5" rx="3" fill="#2563eb" />
          <g transform="translate(840, 228)">
            <rect x="-28" y="-22" width="56" height="44" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.2" />
            <text x="0" y="4" textAnchor="middle" fill="#2563eb" fontSize="20" fontWeight="700">&lt;/&gt;</text>
          </g>
          <text x="840" y="276" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="800">
            {lang === 'ko' ? 'AI 핵심 소프트웨어' : 'AI Core Software'}
          </text>
          <text x="840" y="298" textAnchor="middle" fill="#475569" fontSize="12">
            {lang === 'ko' ? 'AI 모델·알고리즘·프레임워크 핵심 설계' : 'Core Design of Models, Algos & Frameworks'}
          </text>
          <text x="840" y="316" textAnchor="middle" fill="#475569" fontSize="12">
            {lang === 'ko' ? '— AI를 만드는 소프트웨어 —' : '— Software that Creates AI —'}
          </text>
          <rect x="790" y="330" width="100" height="22" rx="11" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
          <text x="840" y="345" textAnchor="middle" fill="#2563eb" fontSize="10" fontWeight="700" letterSpacing="1">
            {lang === 'ko' ? '핵심' : 'CORE'}
          </text>

          {/* Middle bar */}
          <rect x="650" y="398" width="380" height="46" rx="12" fill="#0891b2" />
          <text x="840" y="426" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">
            {lang === 'ko' ? 'AI 시스템 SW : 모델과 HW 사이의 인터페이스' : 'AI System SW : Interface btw Model and HW'}
          </text>

          {/* Hardware Panel */}
          <rect x="650" y="460" width="380" height="265" rx="16" fill="white" stroke="#1d4ed8" strokeWidth="1.5" filter="url(#shadow)" />
          <rect x="650" y="460" width="380" height="5" rx="3" fill="#1d4ed8" />
          <g transform="translate(840, 548)">
            <rect x="-22" y="-22" width="44" height="44" rx="6" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="1.2" />
            <rect x="-12" y="-12" width="24" height="24" rx="3" fill="#dbeafe" />
            {[[-22, -28, 0, -22], [-10, -28, -10, -22], [10, -28, 10, -22], [0, 22, 0, 28], [-10, 22, -10, 28], [10, 22, 10, 28], [-22, 0, -28, 0], [22, 0, 28, 0]].map((l, j) => (
              <line key={j} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="#1d4ed8" strokeWidth="1.5" />
            ))}
          </g>
          <text x="840" y="600" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="800">
            {lang === 'ko' ? 'AI 핵심 하드웨어 및 인프라' : 'AI Core Hardware & Infra'}
          </text>
          <text x="840" y="622" textAnchor="middle" fill="#475569" fontSize="12">
            {lang === 'ko' ? 'AI 가속기·컴퓨팅 아키텍처 핵심 설계' : 'Core Design of Accelerators & Architectures'}
          </text>
          <text x="840" y="640" textAnchor="middle" fill="#475569" fontSize="12">
            {lang === 'ko' ? '— AI를 구동하는 하드웨어 —' : '— Hardware that Powers AI —'}
          </text>
          <rect x="790" y="652" width="100" height="22" rx="11" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="1" />
          <text x="840" y="667" textAnchor="middle" fill="#1d4ed8" fontSize="10" fontWeight="700" letterSpacing="1">
            {lang === 'ko' ? '핵심' : 'CORE'}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default FullStackDiagram;
