
import React from 'react';
import { Language, TranslationContent, Page } from '../types';
import Header from '../components/Header';
import Announcements from '../components/Announcements';

interface HomeProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationContent;
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ lang, t, setPage }) => {
  return (
    <div className="flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header t={t.hero} onNext={() => setPage('dept-intro')} />
      
      <div id="announcements-summary" className="scroll-mt-20">
        <Announcements title={t.nav.announcements} lang={lang} />
      </div>
    </div>
  );
};

export default Home;
