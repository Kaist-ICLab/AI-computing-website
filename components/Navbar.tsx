import React, { useState, useRef, useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { LanguageContext } from "../App";

interface NavbarProps {
  isScrolled: boolean;
}

interface NavItem {
  id: string;
  label: string;
  path: string;
  sub: { label: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const { lang, setLang, t } = useContext(LanguageContext);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    {
      id: "intro-section",
      label: t.nav.intro,
      path: "/welcome-message",
      sub: [
        {
          label: lang === "ko" ? "학과장 인사말" : "Welcome Message",
          path: "/welcome-message",
        },
        {
          label: lang === "ko" ? "학과 소개" : "AI Computing Dept Introduction",
          path: "/dept-intro",
        },
      ],
    },
    {
      id: "people-section",
      label: t.nav.people,
      path: "/people",
      sub: [
        {
          label: lang === "ko" ? "교수진" : "Faculty",
          path: "/people",
        },
      ],
    },
    {
      id: "admission",
      label: t.nav.admission,
      path: "/admission-ug",
      sub: [
        {
          label: lang === "ko" ? "학사과정" : "Undergraduate",
          path: "/admission-ug",
        },
        {
          label: lang === "ko" ? "대학원과정" : "Graduate",
          path: "/admission-grad",
        },
      ],
    },
    {
      id: "education-section",
      label: t.nav.education,
      path: "/education-courses",
      sub: [
        {
          label: lang === "ko" ? "교과목 안내" : "Course Information",
          path: "/education-courses",
        },
        {
          label: lang === "ko" ? "이수요건" : "Graduation Requirements",
          path: "/education-reqs",
        },
      ],
    },
    { id: "announcements", label: t.nav.announcements, path: "/notice", sub: [] },
  ];

  const isHome = location.pathname === "/";
  const showDarkNavbar = isHome && !isScrolled;

  const logoColor = !showDarkNavbar ? "text-[#002380]" : "text-white";
  const logoFilter = !showDarkNavbar
    ? "brightness-0 [filter:sepia(100%)_hue-rotate(190deg)_saturate(500%)]"
    : "brightness-0 invert";

  const isEducationActive =
    location.pathname === "/education-courses" || location.pathname === "/education-reqs";
  const isIntroActive =
    location.pathname === "/welcome-message" || location.pathname === "/dept-intro";
  const isAdmissionActive =
    location.pathname === "/admission-ug" || location.pathname === "/admission-grad";

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
            <Link
              to="/"
              className="flex items-center gap-4 group cursor-pointer"
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
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12 h-full">
            {navItems.map((item) => {
              const active =
                (item.id === "intro-section" && isIntroActive) ||
                (item.id === "education-section" && isEducationActive) ||
                (item.id === "people-section" && location.pathname === "/people") ||
                (item.id === "admission" && isAdmissionActive) ||
                (item.id === "announcements" && location.pathname === "/notice");

              return (
                <div
                  key={item.id}
                  className="h-full flex items-center relative"
                  onMouseEnter={(e) => {
                    if (item.sub.length > 0 && navContainerRef.current) {
                      const itemRect = e.currentTarget.getBoundingClientRect();
                      const containerRect = navContainerRef.current.getBoundingClientRect();
                      setActiveMenu(item.id);
                      setDropdownLeft(itemRect.left - containerRect.left - 47);
                    } else {
                      setActiveMenu(null);
                      setDropdownLeft(null);
                    }
                  }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-base font-bold transition-all relative py-2 ${!showDarkNavbar
                        ? active || isActive ? "text-[#002380]" : "text-slate-700 hover:text-[#002380]"
                        : "text-white/80 hover:text-white"
                      }`
                    }
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all ${!showDarkNavbar ? "bg-[#002380]" : "bg-white"} ${active ? "w-full" : "w-0"}`}></span>
                  </NavLink>
                </div>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLang(lang === "en" ? "ko" : "en")}
              className={`text-[10px] font-bold border rounded px-2 py-1 transition-all ${!showDarkNavbar
                ? "text-gray-400 border-gray-200 hover:text-[#002380]"
                : "text-white border-white/40 hover:bg-white/10"
                }`}
            >
              {lang === "en" ? "KOREAN" : "ENGLISH"}
            </button>
            <button
              className={`md:hidden p-2 transition-colors ${!showDarkNavbar
                ? "text-gray-500 hover:text-[#002380]"
                : "text-white hover:bg-white/10"
                }`}
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

      <div
        className={`hidden md:block absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out pb-1
          ${activeMenu ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col space-y-1 py-4 w-fit"
            style={{ marginLeft: dropdownLeft ?? 0 }}
          >
            {navItems
              .find((i) => i.id === activeMenu)
              ?.sub.map((sub, idx) => (
                <Link
                  key={idx}
                  to={sub.path}
                  onClick={() => setActiveMenu(null)}
                  className="group flex items-center space-x-4 text-left w-fit p-2 rounded-xl hover:bg-slate-50 transition-all"
                >
                  <span className="w-1.5 h-1.5 bg-slate-300 group-hover:bg-[#002380] rounded-full transition-colors" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-[#002380] transition-colors">
                    {sub.label}
                  </span>
                </Link>
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
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block text-lg font-bold text-left w-full ${isActive ? "text-[#002380]" : "text-gray-700"}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
              {item.sub.length > 0 && (
                <div className="pl-4 space-y-2">
                  {item.sub.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-[#002380] transition-colors text-left w-full"
                    >
                      {sub.label}
                    </Link>
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
