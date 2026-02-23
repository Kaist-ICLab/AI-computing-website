import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import Header from '../components/Header';
import Announcements from '../components/Announcements';

const Home: React.FC = () => {
  const { lang, t } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header t={t.hero} onNext={() => navigate('/dept-intro')} />

      <div id="announcements-summary" className="scroll-mt-20">
        <Announcements title={t.nav.announcements} />
      </div>
    </div>
  );
};

export default Home;
