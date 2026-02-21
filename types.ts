export type Language = "ko" | "en";
export type Page =
  | "home"
  | "welcome-message"
  | "dept-intro"
  | "people"
  | "admission-ug"
  | "admission-grad"
  | "education-courses"
  | "education-reqs";

export interface ReqSection {
  title: string;
  subtitle?: string;
  credits?: string;
  items: string[];
}

export interface EducationTranslation {
  title: string;
  courseTitle: string;
  reqTitle: string;
  ug: {
    sections: ReqSection[];
  };
  grad: {
    master: ReqSection[];
    phd: ReqSection[];
    integrated: ReqSection[];
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
    scheduleTitle: string;
    scheduleItems: { date: string; event: string; method: string }[];
  };
  education: EducationTranslation;
  common: {
    footerNote: string;
  };
}
