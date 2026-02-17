import React, { useState, useEffect } from "react";
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

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>("ko");
  const [page, setPage] = useState<Page>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "welcome-message":
        return <WelcomeMessagePage t={t.intro} lang={lang} />;
      case "dept-intro":
        return <DeptIntroPage t={t.intro} lang={lang} />;
      case "people":
        return <PeoplePage lang={lang} title={t.nav.people} />;
      case "admission":
        return <AdmissionPage t={t.admission} lang={lang} />;
      case "education-courses":
        return <CourseListPage t={t.education} lang={lang} />;
      case "education-reqs":
        return <RequirementsPage t={t} lang={lang} />;
      default:
        return <Home lang={lang} setLang={setLang} t={t} setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t.nav}
        isScrolled={isScrolled}
        setPage={setPage}
        currentPage={page}
      />
      <main className="flex-grow">{renderPage()}</main>
      <Footer t={t.common} lang={lang} />
    </div>
  );
};

export default App;
