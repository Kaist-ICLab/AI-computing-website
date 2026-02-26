import React from "react";
import { Language } from "../types";

interface FacultyMember {
  ko: string;
  en: string;
  isChair?: boolean;
  img: string;
  website: string;
}

const fullTimeFaculty: FacultyMember[] = [
  {
    ko: "이의진",
    en: "Uichin Lee",
    isChair: true,
    img: "/images/uichinlee.webp",
    website: "http://ic.kaist.ac.kr"
  },
  { ko: "성민혁", en: "Minhyuk Sung", img: "/images/minhyuksung.webp", website: "https://visualai.kaist.ac.kr" },
  { ko: "안성진", en: "Sungjin Ahn", img: "/images/sungjinahn.webp", website: "https://mlml.kaist.ac.kr" },
  { ko: "홍승훈", en: "Seunghoon Hong", img: "/images/seunghoonhong.webp", website: "https://vllab.kaist.ac.kr" },
  { ko: "황지영", en: "Joyce Jiyoung Whang", img: "/images/jiyounghwang.webp", website: "http://bdi-lab.kaist.ac.kr" },
];

const jointFaculty: FacultyMember[] = [
  { ko: "고인영", en: "In-Young Ko", img: "/images/inyoungko.webp", website: "https://webeng.kaist.ac.kr" },
  { ko: "권영진", en: "Youngjin Kwon", img: "/images/youngjinkwon.webp", website: "http://casys.kaist.ac.kr" },
  { ko: "김대영", en: "Daeyoung Kim", img: "/images/daeyoungkim.webp", website: "https://www.deal.kaist.ac.kr" },
  { ko: "김민수", en: "Min-Soo Kim", img: "/images/minsookim.webp", website: "http://infolab.kaist.ac.kr" },
  { ko: "김주호", en: "Juho Kim", img: "/images/juhokim.webp", website: "https://kixlab.org" },
  { ko: "김태균", en: "Tae-Kyun Kim", img: "/images/taekyunkim.webp", website: "https://sites.google.com/view/tkkim" },
  { ko: "김현우", en: "Hyunwoo J. Kim", img: "/images/hyunwoojkim.webp", website: "https://hyunwoojkim.com" },
  { ko: "류석영", en: "Sukyoung Ryu", img: "/images/sukyoungryu.webp", website: "https://plrg.kaist.ac.kr" },
  { ko: "박노성", en: "Noseong Park", img: "/images/noseongpark.webp", website: "https://sites.google.com/view/npark" },
  { ko: "박대형", en: "Daehyung Park", img: "/images/daehyungpark.webp", website: "https://rirolab.kaist.ac.kr" },
  { ko: "박종세", en: "Jongse Park", img: "/images/jongsepark.webp", website: "http://casys.kaist.ac.kr" },
  { ko: "박진아", en: "Jinah Park", img: "/images/jinahpark.webp", website: "http://cgv.kaist.ac.kr" },
  { ko: "백종문", en: "Jongmoon Baik", img: "/images/jongmoonbaik.webp", website: "http://spiral.kaist.ac.kr" },
  { ko: "손수엘", en: "Sooel Son", img: "/images/sooelson.webp", website: "https://wsp-lab.github.io" },
  {
    ko: "시어링조셉",
    en: "Joseph J. Seering",
    img: "/images/josephjseering.webp",
    website: "https://cstlab.org"
  },
  { ko: "송준화", en: "Junehwa Song", img: "/images/junehwasong.webp", website: "http://nclab.kaist.ac.kr" },
  { ko: "오태현", en: "Tae-Hyun Oh", img: "/images/taehyunoh.webp", website: "http://ami.kaist.ac.kr" },
  { ko: "오혜연", en: "Alice Oh", img: "/images/aliceoh.webp", website: "http://uilab.kr" },
  { ko: "유신", en: "Shin Yoo", img: "/images/shinyoo.webp", website: "https://coinse.github.io" },
  { ko: "윤성의", en: "Sung-Eui Yoon", img: "/images/sungeuiyoon.webp", website: "http://sglab.kaist.ac.kr" },
  { ko: "이기혁", en: "Geehyuk Lee", img: "/images/geehyuklee.webp", website: "https://hcil.kaist.ac.kr" },
  { ko: "이재길", en: "Jae-Gil Lee", img: "/images/jaegillee.webp", website: "https://dm.kaist.ac.kr" },
  { ko: "조성호", en: "Sungho Jo", img: "/images/sunghojo.webp", website: "http://nmail.kaist.ac.kr" },
  { ko: "한준", en: "Jun Han", img: "/images/junhan.webp", website: "https://www.cyphy.kaist.ac.kr" },
];

const People: React.FC<{ lang: Language; title: string }> = ({
  lang,
  title,
}) => {
  return (
    <section className="pt-8 pb-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex flex-col items-center text-center mb-16 gap-8">
        <div className="max-w-2xl">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-28 gap-y-28">
          {fullTimeFaculty.map((member) => (
            <a
              key={member.ko}
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div key={member.ko} className="group">
                <div
                  className={`aspect-[4/5] bg-slate-50 rounded-2xl mb-4 flex items-end justify-center overflow-hidden border border-slate-100 group-hover:border-[#004191] transition-all relative ${member.isChair ? "ring-2 ring-blue-500/20" : ""}`}
                >
                  <img
                    src={member.img}
                    alt={lang === "ko" ? member.ko : member.en}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {member.isChair && (
                    <div className="absolute top-2 left-2 bg-blue-900/80 text-white text-[11px] font-medium px-2 py-1 rounded-full uppercase tracking-widest">
                      {lang === "ko" ? "학과장" : "Chair"}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-[#004191] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <p
                  className={`font-bold text-slate-900 mb-1 min-h-[28px] ${
                    lang === "ko" ? "text-lg" : "text-base"
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
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-28 gap-y-28">
          {jointFaculty.map((member) => (
            <a
              key={member.ko}
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div key={member.ko} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-slate-50 rounded-2xl mb-4 flex items-end justify-center overflow-hidden border border-slate-100 group-hover:border-[#004191] transition-all relative">
                  <img
                    src={member.img}
                    alt={lang === "ko" ? member.ko : member.en}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 w-2 h-2 bg-[#004191] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <p
                  className={`font-bold text-slate-900 mb-1 min-h-[28px] ${
                    lang === "ko" ? "text-lg" : "text-base"
                  }`}
                >
                  {lang === "ko" ? member.ko : member.en}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
