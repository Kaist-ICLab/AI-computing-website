import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Language, Page } from "./types";
import { translations } from "./translations";
import Home from "./pages/Home";
import WelcomeMessagePage from "./pages/WelcomeMessagePage";
import DeptIntroPage from "./pages/DeptIntroPage";
import PeoplePage from "./pages/PeoplePage";
import AdmissionPage from "./pages/AdmissionPage";
import CourseListPage from "./pages/CourseListPage";
import RequirementsPage from "./pages/RequirementsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

export const LanguageContext = React.createContext<LanguageContextType>({
  lang: "en",
  setLang: () => { },
  t: translations.en,
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [lang, setLang] = useState<Language>("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar isScrolled={isScrolled} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome-message" element={<WelcomeMessagePage />} />
            <Route path="/dept-intro" element={<DeptIntroPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/admission-ug" element={<AdmissionPage type="ug" />} />
            <Route path="/admission-grad" element={<AdmissionPage type="grad" />} />
            <Route path="/education-courses" element={<CourseListPage />} />
            <Route path="/education-reqs" element={<RequirementsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
