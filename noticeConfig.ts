export const currentNotice = {
  // Toggle this to false to hide the popup notice entirely
  isActive: false,
  
  // Image poster used in both NoticePage and PopupNotice
  imageSrc: "/images/admission_session_260608.jpg",
  
  // Link to the full PDF or external link
  link: "/files/AI_Computing_Grad_Info_Session_20260619.pdf",
  registrationLink: "https://forms.gle/a1Q7c8BLxtdP7p1d7",

  // Multilingual content for Popup Notice and Notice Page
  ko: {
    title: "2026 AI컴퓨팅학과 대학원 설명회",
    subtitle: "AI컴퓨팅학과 대학원 설명회가 진행됩니다.",
    date: "6월 19일 오후 12시",
    location: "N1 김병호김삼열 IT융합빌딩 201호",
    registrationDeadline: "6월 23일까지"
  },
  en: {
    title: "2026 AI Computing Graduate Admission Session",
    subtitle: "AI Computing Graduate Admission Session will be held.",
    date: "June 19th at 12:00 PM",
    location: "N1 Bldg, Room 201",
    registrationDeadline: "Until June 23rd"
  }
};
