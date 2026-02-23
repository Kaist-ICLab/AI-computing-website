import React from "react";
import { Language } from "../types";

interface FacultyMember {
  ko: string;
  en: string;
  isChair?: boolean;
}

const fullTimeFaculty: FacultyMember[] = [
  { ko: "이의진", en: "Uichin Lee", isChair: true },
  { ko: "성민혁", en: "Minhyuk Sung" },
  { ko: "안성진", en: "Sungjin Ahn" },
  { ko: "홍승훈", en: "Seunghoon Hong" },
  { ko: "황지영", en: "Jiyoung Hwang" },
];

const jointFaculty: FacultyMember[] = [
  { ko: "고인영", en: "In-Young Ko" },
  { ko: "권영진", en: "Youngjin Kwon" },
  { ko: "김대영", en: "Daeyoung Kim" },
  { ko: "김민수", en: "Min-Soo Kim" },
  { ko: "김주호", en: "Juho Kim" },
  { ko: "김태균", en: "Tae-Kyun Kim" },
  { ko: "김현우", en: "Hyunwoo J. Kim" },
  { ko: "류석영", en: "Sukyoung Ryu" },
  { ko: "박노성", en: "Noseong Park" },
  { ko: "박대형", en: "Daehyung Park" },
  { ko: "박종세", en: "Jongse Park" },
  { ko: "박진아", en: "Jinah Park" },
  { ko: "백종문", en: "Jong-Moon Baik" },
  { ko: "손수엘", en: "Sooel Son" },
  { ko: "시어링조셉", en: "Joseph J. Searing" },
  { ko: "송준화", en: "Junehwa Song" },
  { ko: "오태현", en: "Tae-Hyun Oh" },
  { ko: "오혜연", en: "Alice Oh" },
  { ko: "유신", en: "Shin Yoo" },
  { ko: "윤성의", en: "Sung-Eui Yoon" },
  { ko: "이기혁", en: "Ki-Hyuk Lee" },
  { ko: "이재길", en: "Jae-Gil Lee" },
  { ko: "조성호", en: "Seong-Ho Cho" },
  { ko: "한준", en: "Jun Han" },
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
            {lang === "ko" ? "교수진" : "Faculty"}
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
            {lang === "ko" ? "전임교수 (Full-time)" : "Full-time Faculty"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {fullTimeFaculty.map((member) => (
              <div key={member.ko} className="group cursor-pointer">
                <div
                  className={`aspect-[4/5] bg-slate-50 rounded-2xl mb-6 flex items-end justify-center overflow-hidden border border-slate-100 group-hover:border-[#004191] transition-all relative ${member.isChair ? "ring-2 ring-blue-500/20" : ""}`}
                >
                  <svg
                    className="w-full h-2/3 text-slate-200 transform translate-y-4 group-hover:text-[#004191]/10 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  {member.isChair && (
                    <div className="absolute top-4 left-4 bg-blue-900 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      {lang === "ko" ? "학과장" : "Chair"}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#004191] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <p className="font-black text-slate-900 text-lg mb-1">
                  {lang === "ko" ? member.ko : member.en}
                </p>
                <p className="text-[10px] text-[#004191] font-black tracking-widest uppercase">
                  {member.isChair
                    ? lang === "ko"
                      ? "중점교원, 학과장"
                      : "Core Faculty, Chair"
                    : lang === "ko"
                      ? "중점교원"
                      : "Core Faculty"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-8 h-px bg-slate-200"></span>
            {lang === "ko" ? "겸임교수 (Joint)" : "Joint / Adjunct Faculty"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {jointFaculty.map((member) => (
              <div key={member.ko} className="group cursor-pointer">
                <div
                  className="aspect-[4/5] bg-slate-50 rounded-2xl mb-6 flex items-end justify-center overflow-hidden border border-slate-100 group-hover:border-[#004191] transition-all relative"
                >
                  <svg
                    className="w-full h-2/3 text-slate-200 transform translate-y-4 group-hover:text-[#004191]/10 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#004191] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <p className="font-black text-slate-900 text-lg mb-1">
                  {lang === "ko" ? member.ko : member.en}
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
