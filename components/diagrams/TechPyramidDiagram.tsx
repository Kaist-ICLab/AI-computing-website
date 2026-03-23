import React, { useContext } from 'react';
import { LanguageContext } from '../../App';

const TechPyramidDiagram: React.FC = () => {
	const { lang } = useContext(LanguageContext);
	return (
		<div className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-300 font-sans">
			<div className="text-3xl font-bold text-slate-900 mb-2">
				{lang === 'ko' ? 'AI Computing 기술 체계 피라미드 ' : 'AI Computing Tech Pyramid '}— <span className="text-blue-500">Core & Foundation</span> {lang === 'ko' ? '중심' : 'Focus'}
			</div>
			<div className="text-sm text-slate-500 mb-10">
				{lang === 'ko'
					? 'AI 컴퓨팅학과는 AI 기술의 근간이 되는 핵심 계층에 집중합니다.'
					: 'The Dept. of AI Computing focuses on the core layers that form the foundation of AI technology.'}
			</div>

			<div className="relative overflow-hidden flex justify-center py-10">
				<svg width="100%" height="auto" viewBox="0 0 1080 740" className="max-w-5xl">
					<defs>
						<linearGradient id="c1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#0f172a' }} /><stop offset="100%" style={{ stopColor: '#1e3a5f' }} />
						</linearGradient>
						<linearGradient id="c2" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#1e3a8a' }} /><stop offset="100%" style={{ stopColor: '#1d4ed8' }} />
						</linearGradient>
						<linearGradient id="c3" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#1d4ed8' }} /><stop offset="100%" style={{ stopColor: '#2563eb' }} />
						</linearGradient>
						<linearGradient id="c4" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#2563eb' }} /><stop offset="100%" style={{ stopColor: '#3b82f6' }} />
						</linearGradient>
						<linearGradient id="c5" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#3b82f6' }} /><stop offset="100%" style={{ stopColor: '#60a5fa' }} />
						</linearGradient>
						<linearGradient id="a1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#cbd5e1' }} /><stop offset="100%" style={{ stopColor: '#e2e8f0' }} />
						</linearGradient>
						<linearGradient id="a2" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" style={{ stopColor: '#94a3b8' }} /><stop offset="100%" style={{ stopColor: '#cbd5e1' }} />
						</linearGradient>
						<filter id="shadow">
							<feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08" />
						</filter>
					</defs>

					{/* FOCUS AREA bracket on the right */}
					<rect x="65" y="265" width="3" height="415" rx="1.5" fill="#3b82f6" />
					<text x="45" y="465" fill="#1e40af" fontSize="15" fontWeight="700" textAnchor="middle" transform="rotate(-90, 45, 465)" letterSpacing="2">
						{lang === 'ko' ? 'AI 핵심 기술 및 파운데이션' : 'AI CORE & FOUNDATION'}
					</text>

					{/* Focus area background highlight */}
					<rect x="110" y="255" width="620" height="430" rx="16" fill="#f0f4ff" stroke="#dbeafe" strokeWidth="1" opacity="0.6" />

					{/* Application layers */}
					<polygon points="420,50 490,100 350,100" fill="url(#a1)" stroke="white" strokeWidth="2" filter="url(#shadow)" />
					<text x="420" y="88" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="600">{lang === 'ko' ? '인간중심 AI' : 'Human-Centered AI'}</text>

					<polygon points="420,105 530,190 310,190" fill="url(#a2)" stroke="white" strokeWidth="2" filter="url(#shadow)" />
					<text x="420" y="160" textAnchor="middle" fill="#64748b" fontSize="13" fontWeight="600">{lang === 'ko' ? 'AI 도메인 응용' : 'AI Domain App'}</text>

					{/* Divider */}
					<line x1="250" y1="230" x2="590" y2="230" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,4" />
					<rect x="350" y="218" width="140" height="24" rx="12" fill="#3b82f6" />
					<text x="420" y="235" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="1">
						{lang === 'ko' ? '핵심 설계 시작 ▼' : 'CORE BEGINS ▼'}
					</text>

					{/* Core layers */}
					{[
						{
							p: "420,260 570,340 270,340", grad: "url(#c5)",
							title: lang === 'ko' ? "차세대 AI 핵심 기술" : "Next-Gen AI Tech",
							label1: lang === 'ko' ? "LLM, 생성형 AI, 에이전틱 AI" : "LLM, Generative, Agentic AI",
							label2: lang === 'ko' ? "멀티모달, World Model" : "Multimodal, World Model",
							y: 312, ly: 305
						},
						{
							p: "420,345 610,425 230,425", grad: "url(#c4)",
							title: lang === 'ko' ? "AI 시스템·운영 기술" : "AI Systems & Ops",
							label1: lang === 'ko' ? "MLOps, 분산학습, 모델 서빙" : "MLOps, Dist ML, Serving",
							label2: lang === 'ko' ? "AI 클러스터, 데이터 파이프라인" : "AI Cluster, Data Pipeline",
							y: 398, ly: 390
						},
						{
							p: "420,430 650,510 190,510", grad: "url(#c3)",
							title: lang === 'ko' ? "AI 원천 알고리즘·이론" : "Core AI Algo & Theory",
							label1: lang === 'ko' ? "딥러닝, 강화학습, 최적화" : "DL, RL, Optimization",
							label2: lang === 'ko' ? "확률 모델, 표현 학습, 학습 이론" : "Prob Model, Rep Learning",
							y: 483, ly: 475
						},
						{
							p: "420,515 690,595 150,595", grad: "url(#c2)",
							title: lang === 'ko' ? "AI 컴퓨팅 인프라" : "AI Computing Infra",
							label1: lang === 'ko' ? "GPU/TPU/NPU, AI 가속기" : "GPU/TPU/NPU, AI Accel",
							label2: lang === 'ko' ? "HPC, 클라우드, AI 컴파일러" : "HPC, Cloud, AI Compiler",
							y: 568, ly: 560
						},
						{
							p: "420,600 720,680 120,680", grad: "url(#c1)",
							title: lang === 'ko' ? "수학·통계 기초 역량" : "Math & Stat Basis",
							label1: lang === 'ko' ? "선형대수, 확률·통계, 미적분" : "Linear Algebra, Stat, Calc",
							label2: lang === 'ko' ? "정보이론, 최적화 이론" : "Info Theory, Optimization",
							y: 652, ly: 645
						}
					].map((layer, idx) => (
						<React.Fragment key={idx}>
							<polygon points={layer.p} fill={layer.grad} stroke="white" strokeWidth="2" filter="url(#shadow)" />
							<text x="420" y={layer.y} textAnchor="middle" fill="white" fontSize="14" fontWeight="700">{layer.title}</text>
							<line x1={layer.p.split(' ')[1].split(',')[0]} y1={layer.ly} x2="750" y2={layer.ly} stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
							<circle cx={layer.p.split(' ')[1].split(',')[0]} cy={layer.ly} r="3" fill="#3b82f6" />
							<circle cx="750" cy={layer.ly} r="3" fill="#3b82f6" />
							<text x="770" y={layer.ly - 7} fill="#1e3a8a" fontSize="14" fontWeight="600">{layer.label1}</text>
							<text x="770" y={layer.ly + 13} fill="#475569" fontSize="13">{layer.label2}</text>
						</React.Fragment>
					))}

					{/* Legend */}
					<rect x="700" y="720" width="14" height="14" rx="3" fill="#1d4ed8" />
					<text x="720" y="732" fill="#334155" fontSize="12" fontWeight="500">{lang === 'ko' ? 'AI Core & Foundation (학과 핵심 교육 영역)' : 'AI Core & Foundation (Core Curriculum)'}</text>
					<rect x="980" y="720" width="14" height="14" rx="3" fill="#cbd5e1" />
					<text x="1000" y="732" fill="#94a3b8" fontSize="12" fontWeight="500">
						{lang === 'ko' ? '응용 기술' : 'Application'}
					</text>
				</svg>
			</div>
		</div>
	);
};

export default TechPyramidDiagram;
