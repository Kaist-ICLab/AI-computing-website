export type Language = "ko" | "en";
export type Page =
  | "home"
  | "welcome-message"
  | "dept-intro"
  | "people"
  | "admission-ug"
  | "admission-grad"
  | "education-courses"
  | "education-reqs"
  | "notice";

export interface ReqItem {
  text: string;
  note?: boolean;
}

export interface ReqGroup {
  title: string;
  credits?: string;
  items: ReqItem[];
}

export interface ReqSection {
  label: string;
  title: string;
  credits?: string;
  items?: ReqItem[];
  groups?: ReqGroup[];
}

export interface ReqTable {
  headers: string[];
  rows: string[][];
}

export interface ReqTransitional {
  title: string;
  items: string[];
  table?: ReqTable;
}

export interface ReqDoc {
  title: string;
  subtitle: string;
  sections: ReqSection[];
  transitional: ReqTransitional;
}

export interface EducationTranslation {
  title: string;
  courseTitle: string;
  courseSubtitle: string;
  reqTitle: string;
  reqDesc: string;
  reqNotice: string;
  ugSubtitle: string;
  gradSubtitle: string;
  ug: ReqDoc;
  grad: {
    master: ReqDoc;
    phd: ReqDoc;
    integrated: ReqDoc;
  };
}

export interface TranslationContent {
  nav: {
    intro: string;
    people: string;
    admission: string;
    education: string;
    announcements: string;
    home: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    welcomeTitle: string;
    welcomeContent: string;
    deptTitle: string;
    deptContent: string;
    objectivesTitle: string;
    objectives: { title: string; desc: string }[];
  };
  admission: {
    title: string;
    ugTitle: string;
    ugDesc: string;
    gradTitle: string;
    gradDesc: string;
    gradSchedule1Title: string;
    gradSchedule1Items: { category: string; timeline: string; method: string }[];
    gradSchedule2Title: string;
    gradSchedule2Items: { category: string; timeline: string; method: string }[];
    advisorTitle: string;
    advisorContent: string[];
    advisorTimingTitle: string;
    advisorTimingItems: { course: string; timing: string }[];
    eligibilityTitle: string;
    eligibility: { course: string; criteria: string }[];
    categoriesTitle: string;
    categories: { type: string; desc: string }[];
    admissionHome: string;
    admissionHomeDesc: string;
    ugKorean: string;
    ugKoreanDesc: string;
    ugIntl: string;
    ugIntlDesc: string;
    readMore: string;
  };
  education: EducationTranslation;
  common: {
    footerNote: string;
    noticeTitle: string;
    noticeSubtitle: string;
  };
}
