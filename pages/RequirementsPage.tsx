import React, { useState, use } from "react";
import { ReqDoc, ReqGroup, ReqItem } from "../types";
import { LanguageContext } from "../App";

const RequirementsPage: React.FC = () => {
  const { lang, t } = use(LanguageContext);
  const [reqType, setReqType] = useState<"ug" | "grad">("ug");
  const education = t.education;

  const Item = ({ item, dash }: { item: ReqItem; dash?: boolean }) => (
    <li
      className={`flex gap-2 leading-relaxed text-[15px] ${
        item.note ? "text-slate-400 text-[13px]" : "text-slate-600"
      }`}
    >
      <span className="shrink-0">{item.note ? "※" : dash ? "-" : "○"}</span>
      <span>{item.text}</span>
    </li>
  );

  const Group = ({ group }: { group: ReqGroup }) => (
    <div className="mt-3 first:mt-0">
      <p className="font-bold text-slate-800 text-[15px] flex items-baseline gap-2">
        <span className="shrink-0">○</span>
        <span>
          {group.title}
          {group.credits && (
            <span className="font-bold">: {group.credits}</span>
          )}
        </span>
      </p>
      <ul className="mt-1.5 ml-6 space-y-1.5">
        {group.items.map((item, i) => (
          <Item key={i} item={item} dash />
        ))}
      </ul>
    </div>
  );

  const ReqCard = ({ doc }: { doc: ReqDoc }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-black text-slate-900 tracking-tight">
        {doc.title}
      </h2>
      <p className="text-slate-400 text-sm mt-1 mb-10">{doc.subtitle}</p>

      <div className="space-y-8">
        {doc.sections.map((section, idx) => (
          <section key={idx}>
            <p className="font-bold text-slate-900 text-[15px] flex items-baseline gap-2">
              <span className="shrink-0">{section.label}</span>
              <span>
                {section.title}
                {section.credits && (
                  <span className="font-bold">: {section.credits}</span>
                )}
              </span>
            </p>

            {section.items && section.items.length > 0 && (
              <ul className="mt-2 ml-6 space-y-1.5">
                {section.items.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </ul>
            )}

            {section.groups && (
              <div className="mt-2 ml-6">
                {section.groups.map((group, i) => (
                  <Group key={i} group={group} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Transitional Measures */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <p className="font-bold text-slate-900 text-[15px] flex items-center gap-2 mb-4">
          <span className="inline-block w-2.5 h-2.5 border-2 border-slate-700 shrink-0"></span>
          {doc.transitional.title}
        </p>
        <div className="space-y-3">
          {doc.transitional.items.map((text, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-slate-600">
              {text}
            </p>
          ))}
        </div>

        {doc.transitional.table && (
          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-slate-50">
                  {doc.transitional.table.headers.map((h, i) => (
                    <th
                      key={i}
                      className="text-left font-bold text-slate-500 px-4 py-3 border-b border-slate-200 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {doc.transitional.table.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-b border-slate-100 last:border-0"
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-4 py-3 whitespace-nowrap ${
                          ci === 1
                            ? "font-semibold text-blue-700 font-mono"
                            : "text-slate-600"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="bg-slate-50 border-b border-slate-100 py-16 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          {education.reqTitle}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Guidelines and criteria for degree completion
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Level Toggle */}
        <div className="flex flex-col items-center mb-16">
          <div className="bg-slate-200/50 p-1.5 rounded-[20px] flex shadow-inner mb-4">
            <button
              onClick={() => setReqType("ug")}
              className={`px-12 py-4 rounded-[16px] text-sm font-black uppercase tracking-widest transition-all ${reqType === "ug"
                ? "bg-white text-blue-900 shadow-md scale-100"
                : "text-slate-500 hover:text-slate-800 scale-95"
                }`}
            >
              {lang === "ko" ? "학사 과정" : "Undergraduate"}
            </button>
            <button
              onClick={() => setReqType("grad")}
              className={`px-12 py-4 rounded-[16px] text-sm font-black uppercase tracking-widest transition-all ${reqType === "grad"
                ? "bg-white text-blue-900 shadow-md scale-100"
                : "text-slate-500 hover:text-slate-800 scale-95"
                }`}
            >
              {lang === "ko" ? "대학원 과정" : "Graduate"}
            </button>
          </div>
          <p className="italic text-slate-400 text-xs normal-case tracking-normal text-center">
            {education.reqNotice}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {reqType === "ug" ? (
            <ReqCard doc={education.ug} />
          ) : (
            <>
              <ReqCard doc={education.grad.master} />
              <ReqCard doc={education.grad.phd} />
              <ReqCard doc={education.grad.integrated} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequirementsPage;
