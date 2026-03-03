import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import Header from '../components/Header';
import IntroDiagram from '@/components/IntroDiagram';
import Announcements from '../components/Announcements';

const Home: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  // const navigate = useNavigate();
  const handleScrollToDiagram = () => {
    const section = document.getElementById("intro-diagram");
    if (section) {
      const offset = 100;
      const top = section.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header t={t.hero} onNext={handleScrollToDiagram} />

      <div id="intro-diagram" className="scroll-mt-24">
        <IntroDiagram />
      </div>

      <div id="announcements-summary" className="scroll-mt-20">
        <Announcements title={t.nav.announcements} />
      </div>
    </div>
  );
};

export default Home;
