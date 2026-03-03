import React, { useContext } from "react";
import { LanguageContext } from "../App";
import People from "../components/People";

const PeoplePage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  const title = t.nav.people;
  return (
    <div className="pt-24">
      <div className="bg-slate-50 border-b border-slate-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          {lang === 'ko' ? '교수진' : 'Faculty'}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Global Leading Faculty of 29 Members
        </p>
      </div>
      <People lang={lang} title={title} />
    </div>
  );
};

export default PeoplePage;
