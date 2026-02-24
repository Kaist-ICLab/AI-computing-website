import React, { useContext } from "react";
import { LanguageContext } from "../App";
import People from "../components/People";

const PeoplePage: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  const title = t.nav.people;
  return (
    <div className="pt-24 pb-20">
      {/* <div className="bg-slate-50 border-b border-slate-100 py-20 text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {title}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Academic Excellence & Global Leadership
        </p>
      </div> */}
      <People lang={lang} title={title} />
    </div>
  );
};

export default PeoplePage;
