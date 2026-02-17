
import React from 'react';
import { Language } from '../types';

const courses = [
  { level: '1000-level', code: 'CS10003', name: { ko: '인공지능 기초', en: 'AI Basics' }, type: 'Required' },
  { level: '2000-level', code: 'CS40700', name: { ko: '인공지능 개론', en: 'Introduction to AI' }, type: 'Required' },
  { level: '2000-level', code: 'CS30706', name: { ko: '기계학습', en: 'Machine Learning' }, type: 'Required' },
  { level: '2000-level', code: 'CS20300', name: { ko: '시스템프로그래밍', en: 'System Programming' }, type: 'Elective' },
  { level: '2000-level', code: 'CS30704', name: { ko: '인간-컴퓨터 상호작용 개론', en: 'HCI Intro' }, type: 'Elective' },
  { level: '3000-level', code: 'CS30707', name: { ko: '강화학습 개론', en: 'Reinforcement Learning' }, type: 'Elective' },
  { level: '3000-level', code: 'CS30101', name: { ko: '전산기조직', en: 'Computer Architecture' }, type: 'Elective' },
  { level: '3000-level', code: 'CS30300', name: { ko: '운영체제 및 실험', en: 'Operating Systems' }, type: 'Elective' },
  { level: '4000-level', code: 'CS40701', name: { ko: '그래프 기계학습 및 마이닝', en: 'Graph ML' }, type: 'Elective' },
  { level: '4000-level', code: 'CS40709', name: { ko: '3차원 데이터를 위한 기계학습', en: '3D Deep Learning' }, type: 'Elective' },
  { level: '4000-level', code: 'CS40806', name: { ko: '웨어러블 사용자 인터페이스', en: 'Wearable UI' }, type: 'Elective' },
  { level: '5000-level+', code: 'CS50700', name: { ko: '인공지능 및 기계학습', en: 'Advanced AI & ML' }, type: 'Elective' },
  { level: '5000-level+', code: 'CS59900', name: { ko: '컴퓨팅 특강 <리소스 효율적 AI 연구>', en: 'Resource Efficient AI' }, type: 'Elective' },
  { level: '5000-level+', code: 'CS50804', name: { ko: '인간과 컴퓨터 상호작용', en: 'Advanced HCI' }, type: 'Elective' },
  { level: '5000-level+', code: 'CS50605', name: { ko: '사물인터넷 데이터 사이언스', en: 'IoT Data Science' }, type: 'Elective' },
  { level: '5000-level+', code: 'CS50705', name: { ko: '인공지능 윤리', en: 'AI Ethics' }, type: 'Elective' }
];

const CourseListPage: React.FC<{ t: any, lang: Language }> = ({ t, lang }) => {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-slate-50 border-b border-slate-100 py-20 text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {t.courseTitle}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Advanced Curriculum for AI-Native Leaders
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                    <th className="px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">Code</th>
                    <th className="px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">Course Name</th>
                    <th className="px-8 py-6 text-left text-[11px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {courses.map((c, i) => (
                    <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-8 py-5 text-[12px] font-bold text-slate-400 group-hover:text-blue-600">{c.level}</td>
                      <td className="px-8 py-5 text-sm font-black text-blue-900 font-mono tracking-tighter">{c.code}</td>
                      <td className="px-8 py-5 text-[15px] font-bold text-slate-800 leading-tight">{lang === 'ko' ? c.name.ko : c.name.en}</td>
                      <td className="px-8 py-5 text-[10px]">
                        <span className={`px-4 py-1.5 rounded-full font-black uppercase tracking-tighter ${c.type === 'Required' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
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
      </div>
    </div>
  );
};

export default CourseListPage;
