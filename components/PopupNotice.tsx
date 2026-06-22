import React, { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { LanguageContext } from "../App";
import { currentNotice } from "../noticeConfig";

const PopupNotice: React.FC = () => {
  const { lang } = use(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);

  const notice = lang === "ko" ? currentNotice.ko : currentNotice.en;

  useEffect(() => {
    // Don't show if notice is disabled
    if (!currentNotice.isActive) return;

    // Check if the user has chosen to hide the popup for today
    const hideUntil = localStorage.getItem("hideNoticeUntil");
    if (hideUntil) {
      const hideUntilDate = new Date(parseInt(hideUntil, 10));
      if (new Date() < hideUntilDate) {
        return; // Still hidden
      }
    }
    // Set to true if not hidden for today
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleHideForToday = () => {
    setIsVisible(false);
    // Hide for 24 hours
    const hideUntil = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem("hideNoticeUntil", hideUntil.toString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-4 z-50 w-80 bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200/50 flex flex-col">
      {/* Notice Image */}
      <div className="relative aspect-[3/4] bg-slate-100">
        <img
          src={currentNotice.imageSrc}
          alt="Notice Poster"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-slate-900 rounded-full p-1.5 transition-colors backdrop-blur-sm shadow-sm"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      {/* Notice Content */}
      <div className="p-5 flex flex-col gap-2">
        <span className="text-[#002380] text-xs font-bold tracking-widest uppercase">
          NOTICE
        </span>
        <h3 className="font-bold text-lg leading-tight text-slate-900">
          {notice.title}
        </h3>
        <p className="text-slate-500 text-sm">
          {notice.subtitle}
        </p>
        
        <Link
          to="/notice"
          onClick={handleClose}
          className="mt-2 inline-block bg-[#002380] hover:bg-[#004191] text-white text-center py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
        >
          {lang === "ko" ? "자세히 보기" : "View Details"}
        </Link>
      </div>

      {/* Footer Controls */}
      <div className="bg-slate-50 px-5 py-3 flex justify-between items-center text-xs text-slate-500 border-t border-slate-200">
        <label className="flex items-center gap-2 cursor-pointer hover:text-slate-800 transition-colors">
          <input
            type="checkbox"
            className="w-3.5 h-3.5 rounded border-slate-300 bg-white text-[#002380] focus:ring-[#002380] focus:ring-offset-white"
            onChange={handleHideForToday}
          />
          {lang === "ko" ? "오늘 하루 보지 않기" : "Hide for today"}
        </label>
        <button
          onClick={handleClose}
          className="hover:text-slate-800 transition-colors font-medium"
        >
          {lang === "ko" ? "닫기" : "Close"}
        </button>
      </div>
    </div>
  );
};

export default PopupNotice;
