import React from "react";
import { Language } from "../types";

interface FacultyMember {
  ko: string;
  en: string;
  isChair?: boolean;
  img: string;
}

const fullTimeFaculty: FacultyMember[] = [
  { ko: "이의진", en: "Uichin Lee", isChair: true, img: "/images/uichinlee.webp" },
  { ko: "성민혁", en: "Minhyuk Sung", img: "/images/minhyuksung.webp" },
  { ko: "안성진", en: "Sungjin Ahn", img: "/images/sungjinahn.webp" },
  { ko: "홍승훈", en: "Seunghoon Hong", img: "/images/seunghoonhong.webp" },
  { ko: "황지영", en: "Jiyoung Hwang", img: "/images/jiyounghwang.webp" },
];

const jointFaculty: FacultyMember[] = [
  { ko: "고인영", en: "In-Young Ko", img: "/images/inyoungko.webp" },
  { ko: "권영진", en: "Youngjin Kwon", img: "/images/youngjinkwon.webp" },
  { ko: "김대영", en: "Daeyoung Kim", img: "/images/daeyoungkim.webp" },
  { ko: "김민수", en: "Min-Soo Kim", img: "/images/minsookim.webp" },
  { ko: "김주호", en: "Juho Kim", img: "/images/juhokim.webp" },
  { ko: "김태균", en: "Tae-Kyun Kim", img: "/images/taekyunkim.webp" },
  { ko: "김현우", en: "Hyunwoo J. Kim", img: "/images/hyunwoojkim.webp" },
  { ko: "류석영", en: "Sukyoung Ryu", img: "/images/sukyoungryu.webp" },
  { ko: "박노성", en: "Noseong Park", img: "/images/noseongpark.webp" },
  { ko: "박대형", en: "Daehyung Park", img: "/images/daehyungpark.webp" },
  { ko: "박종세", en: "Jongse Park", img: "/images/jongsepark.webp" },
  { ko: "박진아", en: "Jinah Park", img: "/images/jinahpark.webp" },
  { ko: "백종문", en: "Jong-Moon Baik", img: "/images/jongmoonbaik.webp" },
  { ko: "손수엘", en: "Sooel Son", img: "/images/sooelson.webp" },
  { ko: "시어링조셉", en: "Joseph J. Seering", img: "/images/josephjseering.webp" },
  { ko: "송준화", en: "Junehwa Song", img: "/images/junehwasong.webp" },
  { ko: "오태현", en: "Tae-Hyun Oh", img: "/images/taehyunoh.webp" },
  { ko: "오혜연", en: "Alice Oh", img: "/images/aliceoh.webp" },
  { ko: "유신", en: "Shin Yoo", img: "/images/shinyoo.webp" },
  { ko: "윤성의", en: "Sung-Eui Yoon", img: "/images/sungeuiyoon.webp" },
  { ko: "이기혁", en: "Geehyuk Lee", img: "/images/geehyuklee.webp" },
  { ko: "이재길", en: "Jae-Gil Lee", img: "/images/jaegillee.webp" },
  { ko: "조성호", en: "Sungho Jo", img: "/images/sunghojo.webp" },
  { ko: "한준", en: "Jun Han", img: "/images/junhan.webp" },
];

const People: React.FC<{ lang: Language; title: string }> = ({
  lang,
  title,
}) => {
  return (
    <section className="pt-8 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
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

      <div className="space-y-16">
        <div>
          <h3 className="text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-8 h-px bg-slate-200"></span>
            {lang === "ko" ? "전임교수 (Full-time)" : "Full-time Faculty"}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16">
            {fullTimeFaculty.map((member) => (
              <div key={member.ko} className="group cursor-pointer">
                <div
                  className={`aspect-[4/5] bg-slate-50 rounded-2xl mb-6 flex items-end justify-center overflow-hidden border border-slate-100 group-hover:border-[#004191] transition-all relative ${member.isChair ? "ring-2 ring-blue-500/20" : ""}`}
                >
                  <img
                    src={member.img}
                    alt={lang === "ko" ? member.ko : member.en}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {member.isChair && (
                    <div className="absolute top-4 left-4 bg-blue-900 text-white text-[9px] font-normal px-3 py-1 rounded-full uppercase tracking-widest">
                      {lang === "ko" ? "학과장" : "Chair"}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#004191] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <p
                  className={`font-black text-slate-900 mb-1 min-h-[28px] ${lang === "ko" ? "text-lg" : "text-base"
                    }`}
                >
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16">
            {jointFaculty.map((member) => (
              <div key={member.ko} className="group cursor-pointer">
                <div
                  className="aspect-[4/5] bg-slate-50 rounded-2xl mb-6 flex items-end justify-center overflow-hidden border border-slate-100 group-hover:border-[#004191] transition-all relative"
                >
                  <img
                    src={member.img}
                    alt={lang === "ko" ? member.ko : member.en}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#004191] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <p
                  className={`font-black text-slate-900 mb-1 min-h-[28px] ${lang === "ko" ? "text-lg" : "text-base"
                    }`}
                >
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
