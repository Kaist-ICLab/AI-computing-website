
import React from 'react';
import { Language } from '../types';
import Admission from '../components/Admission';

const AdmissionPage: React.FC<{ t: any, lang: Language }> = ({ t, lang }) => {
  return (
    <div className="pt-24">
      <div className="bg-slate-50 border-b border-slate-100 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">
          {t.title}
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">
          Join the Future of AI Computing
        </p>
      </div>
      <Admission t={t} lang={lang} />
    </div>
  );
};

export default AdmissionPage;
