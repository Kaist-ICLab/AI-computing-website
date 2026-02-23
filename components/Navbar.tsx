import React, { useState, useRef } from "react";
import { Language, Page } from "../types";
import { Globe, Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    {
      id: "admission",
      label: t.admission,
      sub: [
        {
          label: lang === "ko" ? "학사과정" : "Undergraduate",
          action: () => setPage("admission-ug"),
        },
        {
          label: lang === "ko" ? "대학원과정" : "Graduate",
          action: () => setPage("admission-grad"),
        },
      ],
    },
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

  const logoColor = !showDarkNavbar ? "text-[#002380]" : "text-white";

  const logoFilter = !showDarkNavbar
    ? "brightness-0 [filter:sepia(100%)_hue-rotate(190deg)_saturate(500%)]"
    : "brightness-0 invert";

  const isEducationActive =
    currentPage === "education-courses" || currentPage === "education-reqs";
  const isIntroActive =
    currentPage === "welcome-message" || currentPage === "dept-intro";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showDarkNavbar
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
                className={`h-20 md:h-32 w-auto transition-all duration-300 ${logoFilter}`}
              />
              <div className="flex flex-col items-start leading-none">
                <span
                  className={`font-bold text-base sm:text-lg md:text-xl tracking-tight transition-colors ${logoColor}`}
                >
                  AI Computing
                </span>
                <span
                  className={`text-gray-400 text-[10px] font-base uppercase tracking-widest transition-colors ${showDarkNavbar ? "text-blue-200" : ""
                    }`}
                >
                  AI 컴퓨팅학과
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
                (item.id === "admission" &&
                  (currentPage === "admission-ug" ||
                    currentPage === "admission-grad"));

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
                        setPage("admission-ug");
                      } else if (item.id === "intro-section") {
                        setPage("welcome-message");
                      } else if (item.id === "people-section") {
                        setPage("people");
                      } else if (item.id === "education-section") {
                        setPage("education-courses");
                      }
                    }}
                    className={`flex items-center gap-1 text-base font-bold transition-all relative py-2 ${!showDarkNavbar
                      ? isActive
                        ? "text-[#002380]"
                        : "text-slate-700 hover:text-[#002380]"
                      : "text-white/80 hover:text-white"
                      }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all group-hover:w-full ${!showDarkNavbar ? "bg-[#002380]" : "bg-white"
                        } ${isActive ? "w-full" : "w-0"}`}
                    ></span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLang(lang === "en" ? "ko" : "en")}
              className="text-[10px] font-bold text-gray-400 hover:text-[#002380] border border-gray-200 rounded px-2 py-1 transition-all"
            >
              {lang === "en" ? "KOREAN" : "ENGLISH"}
            </button>
            <button
              className="md:hidden p-2 text-gray-500 hover:text-[#002380] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown Panel */}
      <div
        className={`hidden md:block absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out pb-1
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
                  <span className="w-1.5 h-1.5 bg-slate-300 group-hover:bg-[#002380] rounded-full transition-colors" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-[#002380] transition-colors">
                    {sub.label}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden
          ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 py-4 mb-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.id} className="space-y-2">
              <button
                className={`block text-lg font-bold text-left w-full ${(item.id === "intro-section" && isIntroActive) ||
                  (item.id === "education-section" && isEducationActive) ||
                  (item.id === "people-section" && currentPage === "people") ||
                  (item.id === "admission" &&
                    (currentPage === "admission-ug" ||
                      currentPage === "admission-grad"))
                  ? "text-[#002380]"
                  : "text-gray-700"
                  }`}
                onClick={() => {
                  if (item.sub.length === 0) {
                    if (item.id === "announcements") {
                      if (currentPage !== "home") {
                        setPage("home");
                        setTimeout(() => document.getElementById("announcements-summary")?.scrollIntoView({ behavior: "smooth" }), 300);
                      } else {
                        document.getElementById("announcements-summary")?.scrollIntoView({ behavior: "smooth" });
                      }
                    } else if (item.id === "admission") {
                      setPage("admission-ug");
                    } else if (item.id === "intro-section") {
                      setPage("welcome-message");
                    } else if (item.id === "people-section") {
                      setPage("people");
                    } else if (item.id === "education-section") {
                      setPage("education-courses");
                    }
                    setMobileMenuOpen(false);
                  }
                }}
              >
                {item.label}
              </button>
              {item.sub.length > 0 && (
                <div className="pl-4 space-y-2">
                  {item.sub.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        sub.action();
                        setMobileMenuOpen(false);
                      }}
                      className="block text-gray-600 hover:text-[#002380] transition-colors text-left w-full"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
