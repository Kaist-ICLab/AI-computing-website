import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const EcosystemDiagram: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="w-full bg-white rounded-2xl p-6 md:p-12 shadow-xl border border-slate-300 flex justify-center items-center overflow-hidden">
      <svg width="100%" height="auto" viewBox="0 0 1080 740" className="max-w-full">
        <defs>
          <linearGradient id="grad-center" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0f172a' }} />
            <stop offset="100%" style={{ stopColor: '#1e3a5f' }} />
          </linearGradient>
          <linearGradient id="grad-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e3a8a' }} />
            <stop offset="100%" style={{ stopColor: '#2563eb' }} />
          </linearGradient>
          <linearGradient id="grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1d4ed8' }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
          </linearGradient>
          <linearGradient id="grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0e7490' }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4' }} />
          </linearGradient>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.18 }} />
            <stop offset="60%" style={{ stopColor: '#3b82f6', stopOpacity: 0.06 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
          </radialGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.12" />
          </filter>
          <filter id="glow-ring">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow centered on KAIST */}
        <ellipse cx="540" cy="380" rx="340" ry="300" fill="url(#core-glow)" />

        {/* Connecting lines */}
        <line x1="540" y1="220" x2="290" y2="555" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="8,5" />
        <line x1="540" y1="220" x2="790" y2="555" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="8,5" />
        <line x1="290" y1="590" x2="790" y2="590" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="8,5" />

        {/* Center: KAIST AI Core & Foundation */}
        <circle cx="540" cy="380" r="100" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="6,4" opacity="0.4" filter="url(#glow-ring)" />
        <rect x="430" y="330" width="220" height="100" rx="16" fill="url(#grad-center)" filter="url(#shadow)" />
        <rect x="470" y="330" width="140" height="3" rx="1.5" fill="#3b82f6" />
        <text x="540" y="362" textAnchor="middle" fill="white" fontSize="22" fontWeight="900" letterSpacing="1">
          {lang === 'ko' ? '카이스트' : 'KAIST'}
        </text>
        <text x="540" y="388" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="600" letterSpacing="2">
          {lang === 'ko' ? 'AI 컴퓨팅학과' : 'AI COMPUTING'}
        </text>
        <text x="540" y="415" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="500" letterSpacing="1.5">
          {lang === 'ko' ? 'AI 핵심 기술 및 파운데이션' : 'AI Core & Foundation'}
        </text>

        {/* Top node: AI 원천 이론·알고리즘 */}
        <circle cx="540" cy="150" r="75" fill="url(#grad-top)" filter="url(#shadow)" />
        <g transform="translate(540,128)">
          <circle cx="0" cy="-10" r="5" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
          <circle cx="-14" cy="6" r="5" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
          <circle cx="14" cy="6" r="5" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
          <line x1="-3" y1="-6" x2="-11" y2="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <line x1="3" y1="-6" x2="11" y2="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <line x1="-14" y1="6" x2="14" y2="6" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <circle cx="0" cy="-10" r="2.5" fill="#93c5fd" />
          <circle cx="-14" cy="6" r="2.5" fill="#93c5fd" />
          <circle cx="14" cy="6" r="2.5" fill="#93c5fd" />
        </g>
        <text x="540" y="162" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">{lang === 'ko' ? 'AI 원천 이론' : 'Core AI Theory'}</text>
        <text x="540" y="179" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="12" fontWeight="500">{lang === 'ko' ? '알고리즘 혁신' : 'Algo Innovation'}</text>

        <text x="700" y="118" fill="#1e3a8a" fontSize="17" fontWeight="800">{lang === 'ko' ? 'AI를 만드는 핵심 이론' : 'Core Theory for'}</text>
        <text x="700" y="142" fill="#1e3a8a" fontSize="17" fontWeight="800">{lang === 'ko' ? '원천 알고리즘 연구 인재' : 'Creating AI'}</text>
        <text x="700" y="168" fill="#64748b" fontSize="13" fontWeight="400">
          {lang === 'ko' ? 'AI 원천 이론 및 알고리즘 연구' : 'Core AI Theory & Algorithm Research'}
        </text>

        {/* Bottom-left node: 산학 협력 */}
        <circle cx="280" cy="580" r="75" fill="url(#grad-left)" filter="url(#shadow)" />
        <g transform="translate(280,558)">
          <rect x="-12" y="-14" width="24" height="28" rx="2" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
          <rect x="-7" y="-8" width="5" height="5" rx="1" fill="rgba(255,255,255,0.5)" />
          <rect x="2" y="-8" width="5" height="5" rx="1" fill="rgba(255,255,255,0.5)" />
          <rect x="-7" y="1" width="5" height="5" rx="1" fill="rgba(255,255,255,0.5)" />
          <rect x="2" y="1" width="5" height="5" rx="1" fill="rgba(255,255,255,0.5)" />
          <rect x="-4" y="9" width="8" height="5" rx="1" fill="rgba(255,255,255,0.7)" />
        </g>
        <text x="280" y="600" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">{lang === 'ko' ? '원천기술' : 'Core Tech'}</text>
        <text x="280" y="616" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="12" fontWeight="500">{lang === 'ko' ? '산학 협력' : 'Collab'}</text>

        <text x="30" y="498" fill="#1d4ed8" fontSize="16" fontWeight="700">{lang === 'ko' ? 'KAIST-산업계' : 'KAIST-Industry'}</text>
        <text x="30" y="520" fill="#1d4ed8" fontSize="16" fontWeight="700">{lang === 'ko' ? 'AI 원천기술 기반' : 'Core AI Tech Based'}</text>
        <text x="30" y="542" fill="#1d4ed8" fontSize="16" fontWeight="700">{lang === 'ko' ? '산학 협력 인재 양성' : 'Talent Cultivation'}</text>

        {/* Bottom-right node: AI 핵심 시스템 */}
        <circle cx="800" cy="580" r="75" fill="url(#grad-right)" filter="url(#shadow)" />
        <g transform="translate(800,558)">
          <rect x="-11" y="-11" width="22" height="22" rx="3" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
          <rect x="-5" y="-5" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
          <line x1="0" y1="-11" x2="0" y2="-17" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          <line x1="0" y1="11" x2="0" y2="17" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          <line x1="-11" y1="0" x2="-17" y2="0" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          <line x1="11" y1="0" x2="17" y2="0" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        </g>
        <text x="800" y="600" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">{lang === 'ko' ? 'AI 핵심 시스템' : 'Core AI System'}</text>
        <text x="800" y="616" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="12" fontWeight="500">{lang === 'ko' ? '설계 역량' : 'Design'}</text>

        <text x="900" y="520" fill="#0e7490" fontSize="16" fontWeight="700">{lang === 'ko' ? 'AI 핵심 시스템·서비스' : 'Core AI Services'}</text>
        <text x="900" y="542" fill="#0e7490" fontSize="16" fontWeight="700">{lang === 'ko' ? '설계 및 운영 역량 강화' : '& System Design'}</text>
        {lang === 'ko' ? (
          <text x="900" y="566" fill="#64748b" fontSize="13">AI 시스템 및 서비스 경쟁력</text>
        ) : (
          <>
            <text x="900" y="566" fill="#64748b" fontSize="13">AI System &amp; Service</text>
            <text x="900" y="583" fill="#64748b" fontSize="13">Competitiveness</text>
          </>
        )}

        {/* Bottom tagline */}
        <rect x="340" y="695" width="400" height="36" rx="18" fill="#f0f4ff" stroke="#dbeafe" strokeWidth="1" />
        <text x="540" y="719" textAnchor="middle" fill="#1e40af" fontSize="13" fontWeight="600" letterSpacing="0.5">
          {lang === 'ko' ? 'AI를 활용하는 인재가 아닌, AI를 창조하는 인재' : 'Not Just AI Users, But AI Creators'}
        </text>
      </svg>
    </div>
  );
};

export default EcosystemDiagram;
