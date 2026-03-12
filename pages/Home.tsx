import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Header from '../components/Header';
import IntroDiagram from '@/components/IntroDiagram';
import Announcements from '../components/Announcements';
import EcosystemDiagram from '../components/diagrams/EcosystemDiagram';
import FullStackDiagram from '../components/diagrams/FullStackDiagram';

const Home: React.FC = () => {
  const { t } = useContext(LanguageContext);
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 space-y-20">
          <EcosystemDiagram />
          <FullStackDiagram />
        </div>
      </div>

      <div id="announcements-summary" className="scroll-mt-20">
        <Announcements title={t.nav.announcements} />
      </div>
    </div>
  );
};

export default Home;
