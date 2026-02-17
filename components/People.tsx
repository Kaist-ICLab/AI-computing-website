import React from "react";
import { Language } from "../types";

const fullTimeFaculty = ["성민혁", "안성진", "이의진", "홍승훈", "황지영"];

const jointFaculty = [
  "고인영",
  "권영진",
  "김대영",
  "김민수",
  "김주호",
  "김태균",
  "김현우",
  "류석영",
  "박노성",
  "박대형",
  "박종세",
  "박진아",
  "백종문",
  "손수엘",
  "시어링조셉",
  "송준화",
  "오태현",
  "오혜연",
  "유신",
  "윤성의",
  "이기혁",
  "이재길",
  "조성호",
  "한준",
];

const People: React.FC<{ lang: Language; title: string }> = ({
  lang,
  title,
}) => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#004191] tracking-tighter">
            {title}
          </h2>
          <p className="mt-4 text-slate-500 font-bold uppercase tracking-widest text-xs">
            {lang === "ko"
              ? "총 29명의 우수한 교수진"
              : "Global Leading Faculty of 29 Members"}
          </p>
        </div>
      </div>

      <div className="space-y-24">
        <div>
          <h3 className="text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-8 h-px bg-slate-200"></span>
            {lang === "ko" ? "전임 교수진 (Full-time)" : "Full-time Faculty"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {fullTimeFaculty.map((name) => (
              <div key={name} className="group cursor-pointer">
                <div
                  className={`aspect-[4/5] bg-slate-50 rounded-2xl mb-6 flex items-end justify-center overflow-hidden border border-slate-100 group-hover:border-[#004191] transition-all relative ${name === "이의진" ? "ring-2 ring-blue-500/20" : ""}`}
                >
                  <svg
                    className="w-full h-2/3 text-slate-200 transform translate-y-4 group-hover:text-[#004191]/10 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  {name === "이의진" && (
                    <div className="absolute top-4 left-4 bg-blue-900 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      Chair
                    </div>
                  )}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#004191] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <p className="font-black text-slate-900 text-lg mb-1">{name}</p>
                <p className="text-[10px] text-[#004191] font-black tracking-widest uppercase">
                  {name === "이의진" ? "Chair Professor" : "Professor"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-8 h-px bg-slate-200"></span>
            {lang === "ko" ? "겸임 교수진 (Joint)" : "Joint / Adjunct Faculty"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {jointFaculty.map((name) => (
              <div
                key={name}
                className="px-4 py-6 border border-slate-100 rounded-xl hover:border-[#004191] transition-colors group bg-slate-50/30"
              >
                <p className="text-[15px] font-bold text-slate-700 group-hover:text-[#004191] transition-colors">
                  {name}
                </p>
                <p className="text-[9px] text-slate-400 font-black uppercase tracking-tighter mt-1">
                  Joint Professor
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
