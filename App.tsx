import React, { useState, useEffect, Suspense } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Language } from "./types";
import { translations } from "./translations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopupNotice from "./components/PopupNotice";

const Home = React.lazy(() => import("./pages/Home"));
const WelcomeMessagePage = React.lazy(
  () => import("./pages/WelcomeMessagePage"),
);
const DeptIntroPage = React.lazy(() => import("./pages/DeptIntroPage"));
const PeoplePage = React.lazy(() => import("./pages/PeoplePage"));
const AdmissionPage = React.lazy(() => import("./pages/AdmissionPage"));
const CourseListPage = React.lazy(() => import("./pages/CourseListPage"));
const RequirementsPage = React.lazy(() => import("./pages/RequirementsPage"));
const NoticePage = React.lazy(() => import("./pages/NoticePage"));

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

export const LanguageContext = React.createContext<LanguageContextType>({
  lang: "ko",
  setLang: () => {},
  t: translations.ko,
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "en" || saved === "ko" ? saved : "ko";
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

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
            <Route
              path="/admission-grad"
              element={<AdmissionPage type="grad" />}
            />
            <Route path="/education-courses" element={<CourseListPage />} />
            <Route path="/education-reqs" element={<RequirementsPage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/notice/:id" element={<NoticePage />} />
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
