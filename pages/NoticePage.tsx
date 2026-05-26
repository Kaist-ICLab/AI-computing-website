import React, { useContext } from "react";
import { LanguageContext } from "../App";

const NoticePage: React.FC = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="pt-24 pb-16">
      <div className="bg-slate-50 border-b border-slate-100 py-16 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          {t.common.noticeTitle}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Department Announcements & Updates
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-md border border-slate-200 p-8 sm:p-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              2026 AI컴퓨팅학과 학과설명회
            </h2>

            <p className="text-[15px] mb-6">
              2026년 가을 진입생을 대상으로 한 AI컴퓨팅학과 학과설명회가
              진행됩니다.
            </p>

            <ul className="text-[15px] mb-6 space-y-2 list-disc list-inside">
              <li>
                <span className="font-semibold">일시:</span> 5월 26일 화요일
                오후 6시
              </li>
              <li>
                <span className="font-semibold">장소:</span> 정보전자공학동
                Krafton 빌딩 (E3-5) 210호
              </li>
              <li>
                <span className="font-semibold">자료:</span>{" "}
                <a
                  href="/files/AI_Computing_Introduction_20260526.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  AI_Computing_Introduction_20260526.pdf
                </a>
              </li>
              <li>
                <span className="font-semibold">사전 신청:</span> 5월 22일
                금요일까지
                <br />
                <a
                  href="https://forms.gle/XUqnUfP9hApejP519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6 text-blue-600 hover:text-blue-800 underline break-all"
                >
                  https://forms.gle/XUqnUfP9hApejP519
                </a>
              </li>
            </ul>

            <p className="text-[15px] mb-6">
              참가자들에게는 다과와 기념품이 증정됩니다. (아래 예시 사진)
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure className="flex flex-col items-center">
                <img
                  src="/images/sandwiches.png"
                  alt="다과 예시 - 샌드위치"
                  className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-md border border-slate-100"
                />
              </figure>

              <figure className="flex flex-col items-center">
                <img
                  src="/images/gift.png"
                  alt="기념품 예시 - 키캡"
                  className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-md border border-slate-100"
                />
              </figure>
            </div>

            <p className="text-[15px] mt-8">
              카이스트 AI컴퓨팅학과 학과설명회 참여를 원하시는 분은 위의
              구글폼을 작성해주세요.
            </p>
            <p className="text-[15px] mt-3">
              문의사항은{" "}
              <a
                href="mailto:swimpool@kaist.ac.kr"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                swimpool@kaist.ac.kr
              </a>
              로 보내주세요.
            </p>
            <p className="text-[15px] mt-3 font-medium">
              많은 관심과 참여 바랍니다.
            </p>

            <div className="mt-10 flex justify-center">
              <picture>
                <img
                  src="/images/info_session_poster_0526.png"
                  alt="Information Session Poster"
                  className="max-w-full md:max-w-2xl rounded-2xl shadow-lg border border-slate-100"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
