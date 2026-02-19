import React, { useState, useRef } from "react";
import { Language, Page } from "../types";
import { Globe } from "lucide-react";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
  isScrolled: boolean;
  setPage: (page: Page) => void;
  currentPage: Page;
}

interface NavItem {
  id: string;
  label: string;
  sub: { label: string; action: () => void }[];
}

const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  t,
  isScrolled,
  setPage,
  currentPage,
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      id: "intro-section",
      label: t.intro,
      sub: [
        {
          label: lang === "ko" ? "학과장 인사말" : "Welcome Message",
          action: () => setPage("welcome-message"),
        },
        {
          label: lang === "ko" ? "학과 소개" : "AI Computing Dept Introduction",
          action: () => setPage("dept-intro"),
        },
      ],
    },
    {
      id: "people-section",
      label: t.people,
      sub: [
        {
          label: lang === "ko" ? "교수진" : "Faculty",
          action: () => setPage("people"),
        },
      ],
    },
    { id: "admission", label: t.admission, sub: [] },
    {
      id: "education-section",
      label: t.education,
      sub: [
        {
          label: lang === "ko" ? "교과목 안내" : "Course Guide",
          action: () => setPage("education-courses"),
        },
        {
          label: lang === "ko" ? "이수요건" : "Requirements",
          action: () => setPage("education-reqs"),
        },
      ],
    },
    { id: "announcements", label: lang === "ko" ? "공지" : "Notice", sub: [] },
  ];

  const isHome = currentPage === "home";
  const showDarkNavbar = isHome && !isScrolled;

  const logoColor = !showDarkNavbar ? "text-[#004191]" : "text-white";

  const logoFilter = !showDarkNavbar
    ? "brightness-0 [filter:sepia(100%)_hue-rotate(190deg)_saturate(500%)]"
    : "brightness-0 invert";

  const isEducationActive =
    currentPage === "education-courses" || currentPage === "education-reqs";
  const isIntroActive =
    currentPage === "welcome-message" || currentPage === "dept-intro";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showDarkNavbar
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div
        ref={navContainerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => setPage("home")}
            >
              <img
                src="https://images.seeklogo.com/logo-png/40/2/kaist-korea-advanced-institute-of-science-and-tech-logo-png_seeklogo-402926.png"
                alt="KAIST"
                className={`h-10 md:h-12 w-auto transition-all duration-300 ${logoFilter}`}
              />
              <div className="flex flex-col items-start leading-none">
                <span
                  className={`font-black text-lg md:text-xl tracking-tighter transition-colors ${logoColor}`}
                >
                  AI Computing
                </span>
                <span
                  className={`font-extrabold text-[8px] tracking-[0.2em] uppercase transition-colors ${
                    showDarkNavbar ? "text-blue-200" : "text-slate-500"
                  }`}
                >
                  COLLEGE OF AI
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12 h-full">
            {navItems.map((item) => {
              const isActive =
                (item.id === "intro-section" && isIntroActive) ||
                (item.id === "education-section" && isEducationActive) ||
                (item.id === "people-section" && currentPage === "people") ||
                (item.id === "admission" && currentPage === "admission");

              return (
                <div
                  key={item.id}
                  className="h-full flex items-center relative"
                  onMouseEnter={() =>
                    item.sub.length > 0
                      ? setActiveMenu(item.id)
                      : setActiveMenu(null)
                  }
                >
                  <button
                    onClick={() => {
                      if (item.id === "announcements") {
                        if (currentPage !== "home") {
                          setPage("home");
                          setTimeout(
                            () =>
                              document
                                .getElementById("announcements-summary")
                                ?.scrollIntoView({ behavior: "smooth" }),
                            300,
                          );
                        } else {
                          document
                            .getElementById("announcements-summary")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      } else if (item.id === "admission") {
                        setPage("admission");
                      } else if (item.id === "intro-section") {
                        setPage("welcome-message");
                      } else if (item.id === "people-section") {
                        setPage("people");
                      } else if (item.id === "education-section") {
                        setPage("education-courses");
                      }
                    }}
                    className={`flex items-center gap-1 font-black text-xs transition-all uppercase tracking-widest relative py-2 ${
                      !showDarkNavbar
                        ? isActive
                          ? "text-[#004191]"
                          : "text-slate-700 hover:text-[#004191]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all group-hover:w-full ${
                        !showDarkNavbar ? "bg-[#004191]" : "bg-white"
                      } ${isActive ? "w-full" : "w-0"}`}
                    ></span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "ko" ? "en" : "ko")}
              className={`flex items-center gap-2 px-3 py-1.5 border rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                !showDarkNavbar
                  ? "border-slate-200 text-slate-500 hover:bg-slate-50"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              <Globe className="w-3 h-3" />
              {lang === "ko" ? "ENGLISH" : "한국어"}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out pb-1
          ${activeMenu ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col space-y-1">
            {navItems
              .find((i) => i.id === activeMenu)
              ?.sub.map((sub, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    sub.action();
                    setActiveMenu(null);
                  }}
                  className="group flex items-center space-x-4 text-left w-fit p-2 rounded-xl hover:bg-slate-50 transition-all"
                >
                  <span className="w-1.5 h-1.5 bg-slate-300 group-hover:bg-[#004191] rounded-full transition-colors" />
                  <span className="text-sm font-black text-slate-500 group-hover:text-[#004191] transition-colors uppercase tracking-widest">
                    {sub.label}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
