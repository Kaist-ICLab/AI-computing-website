import { TranslationContent } from "./types";

export const translations: Record<"ko" | "en", TranslationContent> = {
  ko: {
    nav: {
      home: "홈",
      intro: "소개",
      people: "구성원",
      admission: "입학",
      education: "교육",
      announcements: "공지",
    },
    hero: {
      title: "AI 컴퓨팅학과",
      subtitle: "미래 AI 핵심 알고리즘과 컴퓨팅 기술을 선도할 AI-Native 인재를 양성합니다.",
      cta: "소개 바로가기",
    },
    intro: {
      welcomeTitle: "학과장 인사말",
      welcomeContent: `“AI를 사용하는 시대를 넘어, AI를 창조하고 시스템을 설계하는 AI-Native 리더를 육성합니다.”\n\nKAIST AI 단과대학 AI컴퓨팅학과를 찾아주신 여러분을 진심으로 환영합니다. 세계는 지금 AI-First 시대의 거대한 전환기에 놓여 있습니다. 산업과 사회 전반에서 AI를 활용하는 능력은 생산성과 혁신의 핵심 기반이 되었고, 이는 국가와 기업의 경쟁력을 좌우하는 필수 요건으로 자리 잡았습니다.\n\nKAIST AI컴퓨팅학과는 이러한 시대적 요구에 응답하기 위해 설립되었습니다. 본 학과는 인공지능 모델 설계와 알고리즘 연구, 시스템 소프트웨어와 MLOps, 데이터 인프라와 AI 서비스 운영까지 이어지는 AI 컴퓨팅 전 과정에 대한 학제적 이해와 실전 역량을 갖춘 AI-Native 인재 양성을 목표로 하고 있습니다.\n\nAI컴퓨팅학과는 AI 단과대학의 중심축으로서 AI시스템학과, AI+X 학과, AI미래학과와 긴밀히 협력하며, AI 모델–컴퓨팅–응용–정책으로 이어지는 수직 통합 교육·연구 생태계를 구축하고 있습니다. 여러분의 도전은 곧 대한민국의 도전이며, 여러분의 성장은 곧 대한민국의 미래가 될 것입니다.`,
      deptTitle: "학과 소개",
      deptContent: `KAIST AI컴퓨팅학과는 인공지능(AI)을 단순 활용하는 수준을 넘어, AI 자체를 설계·고도화·운영할 수 있는 AI-Native 핵심 인재 양성을 목표로 설립된 학과입니다. 기존 전산학 중심 교육에서 한 단계 나아가, AI에 집중된 전용 교육과정을 통해 급변하는 AI 기술 환경에 선도적으로 대응하고자 합니다.`,
      objectivesTitle: "교육 목표",
      objectives: [
        {
          title: "AI 이론 및 알고리즘 중심 교육",
          desc: "전통적인 전산학 교육과 달리, AI 이론·수학·알고리즘을 중심으로 하는 특화 교육을 제공합니다.",
        },
        {
          title: "수학적·원리 기반 설계 역량 강화",
          desc: "AI 기술의 수학적 기반·논리 구조·작동 원리를 깊이 이해하고 설계할 수 있는 능력을 강화합니다.",
        },
        {
          title: "차세대 AI 기술 반영",
          desc: "LLM, 생성형 AI, 멀티모달 AI, 에이전틱 AI 등 최신 연구 성과를 커리큘럼에 적극 반영합니다.",
        },
        {
          title: "AI 시스템 및 운영 기술 역량 구축",
          desc: "MLOps, GPU 병렬처리, 분산 학습 등 초거대 AI 운영에 필수적인 시스템 소프트웨어 실전 역량을 강화합니다.",
        },
        {
          title: "응용 및 도메인 적용 역량 확보",
          desc: "AI 모델을 실제 산업·과학·공공 환경에 적용할 수 있는 응용 능력과 AI+X 기반 문제 해결 역량을 확보합니다.",
        },
        {
          title: "인간 중심·책임 기반 AI 설계 교육",
          desc: "AI가 인간과 상호작용하는 특성을 반영하여 책임 있는 설계 원리, AI 윤리 및 철학적 이해를 교육합니다.",
        },
        {
          title: "AI-Native 컴퓨팅 기초 역량 교육",
          desc: "데이터 구조, 소프트웨어 공학, 보안·프라이버시 등 AI-Native 인재를 위한 기초 컴퓨팅 역량 교육을 제공합니다.",
        },
      ],
    },
    admission: {
      title: "입학 안내",
      ugTitle: "학사과정 입학 안내",
      ugDesc:
        "KAIST 학부생은 전공선택 없이 무학과로 입학하며, \n무학과 입학 후 2학기 때 AI컴퓨팅을 포함한 전공을 선택할 수 있습니다. \n자세한 설명은 KAIST 입학처 홈페이지에서 확인하세요.",
      gradTitle: "대학원과정 입학 안내",
      gradDesc:
        "석사과정, 박사과정, (KAIST석사재학생) 석박사 통합과정, \n(KAIST학사재학생) 학·석박통합연계과정 신입생을 모집합니다.",
      gradSchedule1Title: "2026학년도 가을학기 입학 신입생 입학전형 일정표",
      gradSchedule1Items: [
        {
          category: "원서접수(서류제출 포함)",
          timeline: "2026. 03. 27(금) 10:00 \n~ 04. 07(화) 17:30",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr)에서 지원서 작성 및 전형료 결제",
        },
        {
          category: "1단계 합격자 발표",
          timeline: "2026. 05. 14(목) 14:00 이후",
          method: "KAIST 입시시스템 (https://gradapply.kaist.ac.kr 합격자발표)",
        },

        {
          category: "2단계 전형(면접)",
          timeline: "2026. 05. 16(토) ~ 05. 26(화)",
          method:
            "개인별 2단계 전형 일정 및 장소 확인(입시시스템을 통하여 공지)",
        },
        {
          category: "최종합격자 발표",
          timeline: "2026. 06. 25(목) 14:00 이후",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr 합격자 발표)",
        },
      ],
      gradSchedule2Title:
        "2026학년도 가을학기 입학 (KAIST 학사 재학생 대상)학·석박통합연계과정 \n및 (KAIST 석사과정 재학생 대상) 석사·박사학위통합과정 입학전형 일정표",
      gradSchedule2Items: [
        {
          category: "원서접수(서류제출 포함)",
          timeline: "2026. 04. 08(수) 10:00 \n~ 04. 14(화) 17:30",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr)에서 지원서 작성 및 전형료 결제",
        },
        {
          category: "1단계 합격자 발표",
          timeline: "2026. 05. 14(목) 14:00 이후",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr 합격자발표)\n개인별 2단계 전형 일정 및 장소 확인(입시시스템을 통하여 공지)",
        },
        {
          category: "2단계 전형(면접)",
          timeline: "2026. 05. 16(토) ~ 05. 26(화)",
          method: "-",
        },
        {
          category: "최종합격자 발표",
          timeline: "2026. 06. 25(목) 14:00 이후",
          method:
            "KAIST 입시시스템 (https://gradapply.kaist.ac.kr 합격자 발표)",
        },
      ],
      advisorTitle: "지도 교수 신청 관련 사항",
      advisorContent: [
        "국비로 입학한 학생은 AI컴퓨팅학과 모든 교수를 지도교수로 신청할 수 있습니다. 신청한 지도교수가 국비TO가 있고 학생지도를 희망할 경우 매칭이 됩니다.",
        "교수의 연구비에서 지원받는 KAIST 장학생으로 입학한 학생은 연구비 지원 교수만이 지도교수가 될 수 있습니다.",
        "KAIST프로그램 장학생은 KAIST프로그램 참여 교수만을 지도교수로 신청할 수 있습니다.",
        "일반 장학생은 AI컴퓨팅학과 모든 교수를 지도교수로 신청할 수 있습니다.",
      ],
      advisorTimingTitle: "지도교수 신청 시기",
      advisorTimingItems: [
        { course: "석사과정", timing: "최종 합격자 발표 및 석사 OT 이후 매칭" },
        {
          course: "박사과정",
          timing:
            "원서접수 전 매칭 \n(원서접수 전 지도예정교수 컨택하여 사전 협의 후 지원, 온라인 원서접수 시 지도예정교수 1명 입력 필수)",
        },
        {
          course: "재학생 석박사통합과정",
          timing:
            "원서접수 전 매칭 \n(원서접수 전 지도예정교수 컨택하여 사전 협의 후 지원, 온라인 원서접수 시 지도예정교수 1명 입력 필수)",
        },
        {
          course: "학·석박통합연계과정",
          timing:
            "원서접수 전 매칭 (원서접수 전 지도예정교수와 사전협의 후 지원)",
        },
      ],
      eligibilityTitle: "지원 자격",
      eligibility: [
        {
          course: "석사과정",
          criteria:
            "학사학위자 (혹은 입학시점까지 졸업이 가능한 학사 졸업예정자)",
        },
        {
          course: "박사과정",
          criteria:
            "석사학위자 (혹은 입학시점까지 졸업이 가능한 석사 졸업예정자)",
        },
        {
          course: "석박사 통합과정",
          criteria:
            "학사학위자 (혹은 입학시점까지 졸업이 가능한 학사 졸업예정자)",
        },
        {
          course: "(KAIST석사재학생) 석박사 통합과정",
          criteria:
            "한국과학기술원 석사과정을 1학기만 이수한 자 (2학기 이상 이수자는 자격 없음)",
        },
        {
          course: "(KAIST학사재학생) 학·석박통합연계과정",
          criteria:
            "1. 입시 기준일까지 3학기~4학기만 이수한 KAIST 학사과정 재학생 (5학기 이상 이수자는 자격 없음)\n2. 69학점 이상의 학점을 취득\n3. 누적 평점평균이 3.7 이상 (단, KAIST 소속으로 수행한 우수 연구실적을 제출하는 경우 성적제한 없음)",
        },
      ],
      categoriesTitle: "학생 구분",
      categories: [
        {
          type: "국비 장학생",
          desc: "학생 교육경비의 일부를 정부재원으로 지원하는 제도입니다.",
        },
        {
          type: "KAIST 장학생",
          desc: "학생 교육경비를 지도교수의 연구비에서 지원하는 제도로 입학 시 학생은 교육경비를 지원하는 교수의 지도학생이 되므로 교수의 전공에 따라 학생의 전공분야가 제한될 수 있습니다.",
        },
        {
          type: "일반 장학생",
          desc: "산업체/연구기관/국가기관/교육기관의 추천을 받아 추천기관이 교육비를 부담하는 제도입니다. 지원자는 소속 기관장으로부터 교육비 부담 및 추천 서류를 제출해야 합니다.",
        },
      ],
      admissionHome: "입학처 홈",
      admissionHomeDesc: "KAIST 입학처 메인 홈페이지를 방문하세요.",
      ugKorean: "학부 (한국인)",
      ugKoreanDesc: "한국인 학부 신입생 모집 안내입니다.",
      ugIntl: "학부 (외국인)",
      ugIntlDesc: "외국인 학부 신입생 모집 안내입니다.",
      readMore: "자세히 보기",
    },
    education: {
      title: "교육 과정",
      courseTitle: "교과목 안내",
      courseSubtitle: "AI-Native 리더를 위한 심화 교육과정",
      reqTitle: "이수 요건",
      reqDesc: "학위 이수를 위한 지침 및 기준입니다.",
      reqNotice: "* 아래 이수요건은 잠정적이며 변경될 수 있습니다.",
      ugSubtitle: "2025학년도 이후 입학생 전공 이수요건",
      gradSubtitle: "2026학년도 이후 입학생 이수요건",
      ug: {
        title: "AI컴퓨팅학과 - 학부",
        subtitle: "(2025학년도 이후 입학생 기준)",
        sections: [
          {
            label: "가.",
            title: "졸업이수학점",
            credits: "총 138학점 이상 이수",
            items: [
              {
                text: "전공 이외에 심화전공, 부전공, 복수전공, 자유융합전공, 지정융합전공 및 특별지정전공 중에서 반드시 한 가지 이상 선택하여 이수",
                note: true,
              },
            ],
          },
          {
            label: "나.",
            title: "기초선택",
            credits: "9학점 이상 이수",
            items: [
              { text: "MAS.10009 선형대수학개론을 반드시 포함하여 9학점 이상 이수" },
              {
                text: "MAS.10009 선형대수학개론은 MAS.10011 데이터과학을 위한 선형대수학으로 대체가능",
              },
              {
                text: "복수전공 이수자는 선형대수학개론(MAS.10009)을 반드시 포함하여 3학점 이상 이수",
                note: true,
              },
            ],
          },
          {
            label: "다.",
            title: "전공",
            credits: "44학점 이상 이수",
            groups: [
              {
                title: "전공필수",
                credits: "9학점",
                items: [
                  { text: "FX.20001 AI 철학: 윤리와 법" },
                  { text: "AIC.20000 AI 컴퓨팅개론" },
                  {
                    text: "다음 과목 중 한 개를 선택하여 이수: AIC.20100 기계학습, AIC.20101 딥러닝 개론, CS.30703 인공지능 개론",
                  },
                  {
                    text: "AIC.20100 기계학습과 AIC.20101 딥러닝 개론의 경우, 본 학과의 전공필수요건을 충족하기 위해서는 AIC 코드의 과목을 수강해야 함(CS 코드로 수강 시 인정하지 않음)",
                    note: true,
                  },
                  {
                    text: "전공필수 과목 중 9학점 초과 이수 시, 초과된 학점은 전공선택 학점으로 인정",
                    note: true,
                  },
                ],
              },
              {
                title: "전공선택",
                credits: "35학점 이상",
                items: [
                  { text: "전산학부 전공과목(CS 코드)을 12학점까지 전공선택으로 인정" },
                  { text: "개별연구는 4학점까지만 전공선택으로 인정" },
                  { text: "타 학과 개별연구와 URP.91100를 모두 인정", note: true },
                ],
              },
            ],
          },
          {
            label: "라.",
            title: "그 외 전공",
            groups: [
              {
                title: "심화전공",
                credits: "총 12학점 이상 이수",
                items: [
                  {
                    text: "2단위를 제외한 본 학과 전공선택(AIC 코드)에서 12학점 이상 이수",
                  },
                ],
              },
              {
                title: "부전공",
                credits: "총 21학점 이상 이수",
                items: [
                  {
                    text: "전공필수 교과목 9학점을 포함하여 본 학과 전공과목 21학점(AIC 코드) 이상 이수",
                  },
                  {
                    text: "AI 대학 내 두 학과에서 주전공 및 부전공을 하는 경우, 부전공 학과에서는 전공필수 이수요건 중 'FX.20001 AI철학: 윤리와 법'을 전공선택 교과목 3학점 이수로 대신함",
                  },
                  { text: "타 학사조직 전공과목과의 중복 인정 불가", note: true },
                ],
              },
              {
                title: "복수전공",
                credits: "총 40학점 이상 이수",
                items: [
                  { text: "전공필수 9학점을 포함하여 본 학과 전공과목 40학점 이상 이수" },
                  {
                    text: "AI 대학 내 두 학과에서 주전공 및 복수전공을 하는 경우, 복수전공 학과에서는 전공필수 이수 요건 중 'FX.20001 AI철학: 윤리와 법'을 전공선택 교과목 3학점 이수로 대신함",
                  },
                  {
                    text: "전산학부 전공과목(CS 코드)을 10학점까지 전공선택으로 인정(중복 인정 과목 포함)",
                  },
                  {
                    text: "전산학부의 다음 교과목에 한해 최대 6학점까지 중복 인정 가능: CS.20004 이산구조, CS.20006 데이터구조, CS.30000 알고리즘 개론, CS.30300 운영체제 및 실험, CS.30101 전산기조직",
                    note: true,
                  },
                ],
              },
              {
                title: "자유융합전공",
                credits: "총 12학점 이상 이수",
                items: [
                  {
                    text: "소속 학과를 제외하고 2개 이상 학사조직의 전공교과목 중 12학점 이상 이수",
                  },
                ],
              },
            ],
          },
          {
            label: "마.",
            title: "연구",
            credits: "총 3학점 이상 이수",
            items: [
              { text: "졸업연구 3학점을 포함하여 이수" },
              { text: "복수전공 이수자는 연구과목 이수를 면제함", note: true },
            ],
          },
        ],
        transitional: {
          title: "경과조치",
          items: [
            "가. 본 이수요건은 2025학년도 입학생부터 적용한다. 단, 2024학년도 이전 입학생이 전과, 심화전공, 부전공, 복수전공 및 특별지정전공 등의 적용을 받는 경우, 본 이수요건을 따를 수 있음.",
            "나. 단, 2026학년도 봄학기 혹은 이전에 아래 과목을 이수한 경우에 한하여 다음과 같이 인정한다. 아래 전공필수 교과목은 최대 3학점까지 전공필수로 인정하며, 이를 초과하는 학점은 전공선택으로 인정한다. 전공선택은 전공선택 교과목과 전공필수 초과 인정학점을 합산하여 최대 12학점까지 인정한다.",
          ],
          table: {
            headers: ["AIC 인정 과목구분", "교과목코드", "교과목명"],
            rows: [
              ["전공선택", "CS.20300", "시스템프로그래밍"],
              ["전공필수", "CS.30701", "딥러닝 개론"],
              ["전공필수", "CS.40700", "인공지능개론"],
              ["전공선택", "CS.30704", "인간-컴퓨터 상호작용 개론"],
              ["전공선택", "CS.40804", "컴퓨터 비전 개론"],
              ["전공필수", "CS.30706", "기계학습"],
              ["전공선택", "CS.30707", "강화학습 개론"],
              ["전공선택", "CS.40701", "그래프 기계학습 및 마이닝"],
              ["전공선택", "CS.40703", "소셜 컴퓨팅 개론"],
              ["전공선택", "CS.40705", "자연언어처리를 위한 기계학습"],
              ["전공선택", "CS.40709", "3차원 데이터를 위한 기계학습"],
              ["전공선택", "CS.40805", "컴퓨터비전을 위한 기계학습"],
              ["전공선택", "CS.40806", "웨어러블 사용자 인터페이스"],
              ["선택(석/박사)", "CS.50605", "사물인터넷 데이터 사이언스"],
              ["선택(석/박사)", "CS.50804", "인간과 컴퓨터 상호작용"],
              ["선택(석/박사)", "CS.50705", "인공지능 윤리"],
            ],
          },
        },
      },
      grad: {
        master: {
          title: "AI컴퓨팅학과 - 석사",
          subtitle: "(2026학년도 이후 입학생 기준)",
          sections: [
            { label: "가.", title: "졸업이수학점", credits: "총 33학점 이상", items: [] },
            {
              label: "나.",
              title: "공통필수",
              credits: "3학점 이상",
              items: [
                {
                  text: "학교에서 지정한 공통필수(CC) 과목 중 택1 하여 이수(단, CC.50010 전산응용개론은 제외함)",
                },
                { text: "CC.50001 리더십강좌 이수(무학점)" },
                { text: "CC.50002 윤리 및 안전 I 이수(무학점)" },
              ],
            },
            { label: "다.", title: "전공필수", items: [{ text: "없음" }] },
            {
              label: "라.",
              title: "선택",
              credits: "18학점 이상",
              items: [
                {
                  text: "본 학과(AIC 코드), 전산학부(CS 코드), 정보보호대학원(IS 코드)에서 개설하는 5단위 이상 전공과목을 12학점 이상 반드시 이수",
                },
                {
                  text: "본 학과 및 타 학과 4단위 학사·대학원 상호인정 교과목과 타 학과 5단위 이상 교과목은 6학점 이내로 인정",
                },
                {
                  text: "공통필수, 자유선택 과목은 선택과목으로 인정하지 않음",
                  note: true,
                },
              ],
            },
            {
              label: "마.",
              title: "연구",
              credits: "6학점 이상",
              items: [
                { text: "논문연구 4학점 이상 이수" },
                {
                  text: "세미나는 2학점을 반드시 이수하되, AI대학에서 개설한 세미나 과목으로 대체 이수 가능",
                },
              ],
            },
          ],
          transitional: {
            title: "경과조치",
            items: [
              "본 이수요건은 2026학년도 가을학기 입학생부터 적용한다. 단, 2026학년도 봄학기 이전 석사과정 입학생이 전과 등의 적용을 받는 경우, 본 이수요건을 따를 수 있다.",
            ],
          },
        },
        phd: {
          title: "AI컴퓨팅학과 - 박사",
          subtitle: "(2026학년도 이후 입학생 기준)",
          sections: [
            { label: "가.", title: "졸업이수학점", credits: "총 60학점 이상", items: [] },
            {
              label: "나.",
              title: "공통필수",
              credits: "3학점 이상",
              items: [
                {
                  text: "학교에서 지정한 공통필수(CC) 과목 중 택1 하여 이수(단, CC.50010 전산응용개론은 제외함)",
                },
                { text: "CC.50002 윤리 및 안전 I 이수(무학점)" },
              ],
            },
            { label: "다.", title: "전공필수", items: [{ text: "없음" }] },
            {
              label: "라.",
              title: "선택",
              credits: "27학점 이상",
              items: [
                {
                  text: "본 학과(AIC 코드), 전산학부(CS 코드), 정보보호대학원(IS 코드)에서 개설하는 5단위 이상 전공과목을 12학점 이상 반드시 이수",
                },
                {
                  text: "본 학과 및 타 학과 4단위 학사·대학원 상호인정 교과목과 타 학과 5단위 이상 교과목은 6학점 이내로 인정",
                },
                {
                  text: "공통필수, 자유선택 과목은 선택과목으로 인정하지 않음",
                  note: true,
                },
                {
                  text: "석사과정에서 이수한 교과학점은 박사과정 이수학점으로 누적 가산됨",
                  note: true,
                },
              ],
            },
            {
              label: "마.",
              title: "연구",
              credits: "30학점 이상",
              items: [
                {
                  text: "세미나는 2학점을 반드시 이수하되, AI대학에서 개설한 세미나 과목으로 대체 이수 가능",
                },
              ],
            },
          ],
          transitional: {
            title: "경과조치",
            items: [
              "본 이수요건은 2026학년도 가을학기 입학생부터 적용한다. 단, 2026학년도 봄학기 이전 박사과정 입학생이 전과 등의 적용을 받는 경우, 본 이수요건을 따를 수 있다.",
            ],
          },
        },
        integrated: {
          title: "AI컴퓨팅학과 - 석박사통합",
          subtitle: "(2026학년도 이후 입학생 기준)",
          sections: [
            { label: "가.", title: "졸업이수학점", credits: "총 60학점 이상", items: [] },
            {
              label: "나.",
              title: "공통필수",
              credits: "3학점 이상",
              items: [
                {
                  text: "학교에서 지정한 공통필수(CC) 과목 중 택1 하여 이수(단, CC.50010 전산응용개론은 제외함)",
                },
                { text: "CC.50001 리더십강좌 이수(무학점)" },
                { text: "CC.50002 윤리 및 안전 I 이수(무학점)" },
              ],
            },
            { label: "다.", title: "전공필수", items: [{ text: "없음" }] },
            {
              label: "라.",
              title: "선택",
              credits: "27학점 이상",
              items: [
                {
                  text: "본 학과(AIC 코드), 전산학부(CS 코드), 정보보호대학원(IS 코드)에서 개설하는 5단위 이상 전공과목을 12학점 이상 반드시 이수",
                },
                {
                  text: "본 학과 및 타 학과 4단위 학사·대학원 상호인정 교과목과 타 학과 5단위 이상 교과목은 6학점 이내로 인정",
                },
                {
                  text: "공통필수, 자유선택 과목은 선택과목으로 인정하지 않음",
                  note: true,
                },
              ],
            },
            {
              label: "마.",
              title: "연구",
              credits: "30학점 이상",
              items: [
                {
                  text: "세미나는 4학점을 반드시 이수하되, AI대학에서 개설한 세미나 과목으로 대체 이수 가능",
                },
                {
                  text: "석사과정에서 이수한 교과학점 및 연구학점(세미나 과목은 2학점 이내)은 누적 가산됨",
                  note: true,
                },
              ],
            },
          ],
          transitional: {
            title: "경과조치",
            items: [
              "본 이수요건은 2026학년도 가을학기 입학생부터 적용한다. 단, 2026학년도 봄학기 이전 석사박사통합과정 입학생이 전과 등의 적용을 받는 경우, 본 이수요건을 따를 수 있다.",
            ],
          },
        },
      },
    },
    common: {
      footerNote:
        "본 정보는 학과 운영 사정에 따라 변경될 수 있으니 공지사항을 상시 확인하시기 바랍니다.",
      noticeTitle: "공지",
      noticeSubtitle: "학과 공지사항 및 업데이트",
    },
  },
  en: {
    nav: {
      home: "Home",
      intro: "Intro",
      people: "People",
      admission: "Admission",
      education: "Education",
      announcements: "Notice",
    },
    hero: {
      title: "AI Computing",
      subtitle:
        "Cultivating AI-native talent to lead the future of AI algorithms and computing technologies.",
      cta: "Learn More",
    },
    intro: {
      welcomeTitle: "Welcome Message",
      welcomeContent: `"Beyond just using AI, we foster AI-Native leaders who create AI and design systems."\n\nWelcome to the Department of AI Computing at KAIST College of AI. The world is in a massive transition to the AI-First era. The ability to utilize AI across industries and society has become a core foundation of productivity and innovation.\n\nOur department was established to meet these demands. We aim to nurture AI-Native talent with interdisciplinary understanding and practical skills in the entire AI computing process, from model design and algorithms to MLOps, system software, and data infrastructure.\n\nAs a central axis of the College of AI, we collaborate closely with AI Systems, AI+X, and Future AI departments to build a vertically integrated ecosystem of AI Models, Computing, Applications, and Policy. Your challenge is Korea's challenge, and your growth is Korea's future.`,
      deptTitle: "Department Introduction",
      deptContent: `The Department of AI Computing aims to nurture "AI-Native" key talent who can go beyond simple AI usage to design, advance, and operate AI itself. Moving a step forward from traditional CS-centered education, we respond proactively to the rapidly changing AI environment through a specialized curriculum focused on AI.`,
      objectivesTitle: "Educational Objectives",
      objectives: [
        {
          title: "AI Theory & Algorithm Centered",
          desc: "Provides specialized education focused on AI theory, mathematics, and algorithms, distinct from traditional CS.",
        },
        {
          title: "Math & Principle-Based Design",
          desc: "Strengthens the ability to deeply understand and design the mathematical foundations and logical structures of AI.",
        },
        {
          title: "Reflecting Next-Gen AI Technologies",
          desc: "Actively incorporates the latest research such as LLM, Generative AI, Multimodal AI, and Agentic AI into the curriculum.",
        },
        {
          title: "AI System & Operation Excellence",
          desc: "Strengthens practical system software skills necessary for operating large-scale AI, including MLOps and GPU parallel processing.",
        },
        {
          title: "Application & Domain Expertise",
          desc: "Acquires problem-solving capabilities based on AI+X by applying AI models to real industrial and scientific environments.",
        },
        {
          title: "Human-Centered & Responsible AI",
          desc: "Teaches responsible design principles, AI ethics, and philosophical understanding of AI-human interaction.",
        },
        {
          title: "AI-Native Computing Fundamentals",
          desc: "Provides basic computing competency in data structures, software engineering, and security for AI-Native talent.",
        },
      ],
    },
    admission: {
      title: "Admission",
      ugTitle: "Undergraduate Admission",
      ugDesc:
        "KAIST undergraduate students are admitted without declaring a major. \nAt the end of the second semester, they choose their major, which may include AI Computing among other disciplines. \nMore detailed information is available on the KAIST Admissions Office website.",
      gradTitle: "Graduate Admission",
      gradDesc:
        "The Department of AI Computing will begin accepting international graduate students in Spring 2027. \nFor general information, please refer to the KAIST Graduate Admissions website:",
      gradSchedule1Title:
        "2026 Fall Semester Admission Timeline for New Students",
      gradSchedule1Items: [
        {
          category: "Application (incl. documents)",
          timeline: "2026. 03. 27(Fri) 10:00 ~ 04. 07(Tue) 17:30",
          method:
            "Online application at KAIST Admissions System (https://gradapply.kaist.ac.kr)",
        },
        {
          category: "1st Stage Results",
          timeline: "2026. 05. 14(Thu) 14:00+",
          method: "Portal Notice (https://gradapply.kaist.ac.kr)",
        },

        {
          category: "2nd Stage (Interview)",
          timeline: "2026. 05. 16(Sat) ~ 05. 26(Tue)",
          method: "Check individual schedule on the admissions system",
        },
        {
          category: "Final Results",
          timeline: "2026. 06. 25(Thu) 14:00+",
          method: "Portal Notice (https://gradapply.kaist.ac.kr)",
        },
      ],
      gradSchedule2Title:
        "2026 Fall Semester Admission Timeline for KAIST Students (Integrated Programs)",
      gradSchedule2Items: [
        {
          category: "Application (incl. documents)",
          timeline: "2026. 04. 08(Wed) 10:00 ~ 04. 14(Tue) 17:30",
          method:
            "Online application at KAIST Admissions System (https://gradapply.kaist.ac.kr)",
        },
        {
          category: "1st Stage Results",
          timeline: "2026. 05. 14(Thu) 14:00+",
          method: "Portal Notice (https://gradapply.kaist.ac.kr)",
        },
        {
          category: "2nd Stage (Interview)",
          timeline: "2026. 05. 16(Sat) ~ 05. 26(Tue)",
          method: "-",
        },
        {
          category: "Final Results",
          timeline: "2026. 06. 25(Thu) 14:00+",
          method: "Portal Notice (https://gradapply.kaist.ac.kr)",
        },
      ],
      advisorTitle: "Advisor Application Information",
      advisorContent: [
        "Government-funded students can apply to any professor in the Department of AI Computing. Matching occurs if the professor has a quota and wishes to advise the student.",
        "KAIST-funded students can only be advised by the professor providing the research funds.",
        "KAIST Program students can only be advised by professors participating in the specific program.",
        "General students can apply to any professor in the Department of AI Computing.",
      ],
      advisorTimingTitle: "Advisor Application Timing",
      advisorTimingItems: [
        {
          course: "Master's",
          timing: "Matched after final results and Master's Orientation",
        },
        {
          course: "Ph.D.",
          timing:
            "Pre-matched before application (Contact prospective advisor for agreement, must enter 1 prospective advisor during online application)",
        },
        {
          course: "Integrated (Current Students)",
          timing:
            "Pre-matched before application (Contact prospective advisor for agreement, must enter 1 prospective advisor during online application)",
        },
        {
          course: "B.S.-M.S.-Ph.D. Integrated",
          timing:
            "Pre-matched before application (Contact prospective advisor for agreement)",
        },
      ],
      eligibilityTitle: "Eligibility",
      eligibility: [
        {
          course: "Master's",
          criteria:
            "Bachelor's degree holder (or expected to graduate by the time of admission)",
        },
        {
          course: "Ph.D.",
          criteria:
            "Master's degree holder (or expected to graduate by the time of admission)",
        },
        {
          course: "M.S.-Ph.D. Integrated",
          criteria:
            "Bachelor's degree holder (or expected to graduate by the time of admission)",
        },
        {
          course: "(KAIST M.S. students) M.S.-Ph.D. Integrated",
          criteria:
            "KAIST M.S. students who have completed only 1 semester (Those with 2+ semesters are ineligible)",
        },
        {
          course: "(KAIST B.S. students) B.S.-M.S.-Ph.D. Integrated",
          criteria:
            "1. KAIST B.S. students who have completed 3-4 semesters by the application deadline (Those with 5+ semesters are ineligible)\n2. Earned 69+ credits\n3. Cumulative GPA of 3.7+ (No GPA limit if submitting excellent research results performed at KAIST)",
        },
      ],
      categoriesTitle: "Student Categories",
      categories: [
        {
          type: "Government-funded",
          desc: "A system where part of the student's educational expenses is supported by government funds.",
        },
        {
          type: "KAIST-funded",
          desc: "A system where educational expenses are supported by the advisor's research funds. Students become advisees of the supporting professor, so their major field may be limited by the professor's major.",
        },
        {
          type: "General",
          desc: "A system where educational expenses are borne by a recommending institution (industry, research institute, etc.). Applicants must submit recommendation documents from the head of their institution.",
        },
      ],
      admissionHome: "Admissions Home",
      admissionHomeDesc: "Visit the main KAIST Admissions website.",
      ugKorean: "Undergraduate (Korean Students)",
      ugKoreanDesc: "Admission guide for Korean undergraduate students.",
      ugIntl: "Undergraduate (International Students)",
      ugIntlDesc: "Admission guide for international undergraduate students.",
      readMore: "Read More",
    },
    education: {
      title: "Education",
      courseTitle: "Course Guide",
      courseSubtitle: "Advanced Curriculum for AI-Native Leaders",
      reqTitle: "Graduation Requirements",
      reqDesc: "Guidelines and criteria for completing your degree program.",
      reqNotice: "* The requirements below are tentative and subject to change.",
      ugSubtitle: "Major Course Requirements for Admitted in 2025 and after",
      gradSubtitle: "Completion Requirements for Admitted in 2026 and after",
      ug: {
        title: "AI Computing - Undergraduate",
        subtitle: "(For students admitted in 2025 or later)",
        sections: [
          {
            label: "A.",
            title: "Credits Required for Graduation",
            credits: "138+ credits",
            items: [
              {
                text: "In addition to the major, students must select and complete at least one of: Advanced Major, Minor, Double Major, Individually Designed Major, Designated Convergence Major, or Special Designated Major",
                note: true,
              },
            ],
          },
          {
            label: "B.",
            title: "Basic Electives",
            credits: "9+ credits",
            items: [
              {
                text: "Must complete 9 or more credits, including MAS.10009 Introduction to Linear Algebra",
              },
              {
                text: "MAS.10009 Introduction to Linear Algebra may be substituted with MAS.10011 Linear Algebra for Data Science",
              },
              {
                text: "Double Major students must complete at least 3 credits, including Introduction to Linear Algebra (MAS.10009)",
                note: true,
              },
            ],
          },
          {
            label: "C.",
            title: "Major",
            credits: "44+ credits",
            groups: [
              {
                title: "Required Major Courses",
                credits: "9 credits",
                items: [
                  { text: "FX.20001 AI Philosophy: Ethics and Law" },
                  { text: "AIC.20000 Introduction to AI Computing" },
                  {
                    text: "Select and complete one of the following: AIC.20100 Machine Learning, AIC.20101 Introduction to Deep Learning, CS.30703 Introduction to Artificial Intelligence",
                  },
                  {
                    text: "For AIC.20100 Machine Learning and AIC.20101 Introduction to Deep Learning, the AIC-coded course must be taken to satisfy the department's required major course requirement (courses taken under the CS code are not recognized)",
                    note: true,
                  },
                  {
                    text: "Credits earned in excess of 9 credits among required major courses are recognized as major elective credits",
                    note: true,
                  },
                ],
              },
              {
                title: "Major Electives",
                credits: "35+ credits",
                items: [
                  {
                    text: "Up to 12 credits of Computer Science major courses (CS code) are recognized as major electives",
                  },
                  {
                    text: "Individual Study courses are recognized as major electives up to 4 credits",
                  },
                  {
                    text: "Individual Study courses from other departments and URP.91100 are both recognized",
                    note: true,
                  },
                ],
              },
            ],
          },
          {
            label: "D.",
            title: "Other Majors",
            groups: [
              {
                title: "Advanced Major",
                credits: "12+ credits",
                items: [
                  {
                    text: "Complete 12 or more credits from the department's major electives (AIC code), excluding 2-unit courses",
                  },
                ],
              },
              {
                title: "Minor",
                credits: "21+ credits",
                items: [
                  {
                    text: "Complete 21 or more credits of the department's major courses (AIC code), including the 9 credits of required major courses",
                  },
                  {
                    text: "For students pursuing a primary major and a minor in two departments within the College of AI, the minor department substitutes 'FX.20001 AI Philosophy: Ethics and Law' in the required major course requirement with 3 credits of a major elective course",
                  },
                  {
                    text: "Overlapping recognition with major courses from other academic units is not allowed",
                    note: true,
                  },
                ],
              },
              {
                title: "Double Major",
                credits: "40+ credits",
                items: [
                  {
                    text: "Complete 40 or more credits of the department's major courses, including the 9 credits of required major courses",
                  },
                  {
                    text: "For students pursuing a primary major and a double major in two departments within the College of AI, the double-major department substitutes 'FX.20001 AI Philosophy: Ethics and Law' in the required major course requirement with 3 credits of a major elective course",
                  },
                  {
                    text: "Up to 10 credits of Computer Science major courses (CS code) are recognized as major electives (including cross-recognized courses)",
                  },
                  {
                    text: "Up to 6 credits may be cross-recognized from the following Computer Science courses only: CS.20004 Discrete Structures, CS.20006 Data Structures, CS.30000 Introduction to Algorithms, CS.30300 Operating Systems and Lab, CS.30101 Computer Architecture",
                    note: true,
                  },
                ],
              },
              {
                title: "Individually Designed Major",
                credits: "12+ credits",
                items: [
                  {
                    text: "Complete 12 or more credits of major courses from two or more academic units, excluding the student's home department",
                  },
                ],
              },
            ],
          },
          {
            label: "E.",
            title: "Research",
            credits: "3+ credits",
            items: [
              {
                text: "Complete 3 or more credits, including 3 credits of Undergraduate Thesis Research",
              },
              {
                text: "Double Major students are exempt from the research course requirement",
                note: true,
              },
            ],
          },
        ],
        transitional: {
          title: "Transitional Measures",
          items: [
            "1. These requirements apply to students admitted in 2025 and thereafter. However, students admitted before 2024 who are subject to a change of major, Advanced Major, Minor, Double Major, or Special Designated Major may follow these requirements.",
            "2. For courses completed in or before the Spring 2026 semester, credits are recognized as follows: the required major courses listed below are recognized as required-major credits up to a maximum of 3 credits, with any credits in excess recognized as major elective credits. Major elective credits are recognized up to a maximum of 12 credits, combining major elective courses and excess required-major credits.",
          ],
          table: {
            headers: ["AIC Recognition", "Course Code", "Course Title"],
            rows: [
              ["Major Elective", "CS.20300", "System Programming"],
              ["Required Major", "CS.30701", "Introduction to Deep Learning"],
              [
                "Required Major",
                "CS.40700",
                "Introduction to Artificial Intelligence",
              ],
              [
                "Major Elective",
                "CS.30704",
                "Introduction to Human-Computer Interaction",
              ],
              ["Major Elective", "CS.40804", "Introduction to Computer Vision"],
              ["Required Major", "CS.30706", "Machine Learning"],
              [
                "Major Elective",
                "CS.30707",
                "Introduction to Reinforcement Learning",
              ],
              [
                "Major Elective",
                "CS.40701",
                "Graph Machine Learning and Mining",
              ],
              ["Major Elective", "CS.40703", "Introduction to Social Computing"],
              [
                "Major Elective",
                "CS.40705",
                "Machine Learning for Natural Language Processing",
              ],
              ["Major Elective", "CS.40709", "Machine Learning for 3D Data"],
              [
                "Major Elective",
                "CS.40805",
                "Machine Learning for Computer Vision",
              ],
              ["Major Elective", "CS.40806", "Wearable User Interfaces"],
              [
                "Elective (MS/PhD)",
                "CS.50605",
                "Data Science for the Internet of Things",
              ],
              [
                "Elective (MS/PhD)",
                "CS.50804",
                "Human and Computer Interaction",
              ],
              ["Elective (MS/PhD)", "CS.50705", "AI Ethics"],
            ],
          },
        },
      },
      grad: {
        master: {
          title: "AI Computing - Master's",
          subtitle: "(For students admitted in 2026 or later)",
          sections: [
            {
              label: "A.",
              title: "Credits Required for Graduation",
              credits: "33+ credits",
              items: [],
            },
            {
              label: "B.",
              title: "Mandatory General Courses",
              credits: "3+ credits",
              items: [
                {
                  text: "Select and complete 1 course among the university-designated Mandatory General (CC) courses (CC.50010 excluded)",
                },
                { text: "Complete CC.50001 Leadership (non-credit)" },
                { text: "Complete CC.50002 Ethics and Safety I (non-credit)" },
              ],
            },
            {
              label: "C.",
              title: "Required Major Courses",
              items: [{ text: "None" }],
            },
            {
              label: "D.",
              title: "Electives",
              credits: "18+ credits",
              items: [
                {
                  text: "Must complete at least 12 credits of 500-level or higher major courses offered by the department (AIC code), School of Computing (CS code), or Graduate School of Information Security (IS code)",
                },
                {
                  text: "Up to 6 credits are recognized from 400-level bachelor's/graduate mutually-recognized courses of this and other departments and 500-level or higher courses of other departments",
                },
                {
                  text: "Mandatory General and Free Elective courses are not recognized as elective courses",
                  note: true,
                },
              ],
            },
            {
              label: "E.",
              title: "Research",
              credits: "6+ credits",
              items: [
                { text: "Complete 4 or more credits of Thesis Research" },
                {
                  text: "Must complete 2 credits of Seminar, which may be substituted with a seminar course offered by the College of AI",
                },
              ],
            },
          ],
          transitional: {
            title: "Transitional Measures",
            items: [
              "These requirements apply to students admitted in Fall 2026 and thereafter. However, master's students admitted before Spring 2026 who are subject to a change of major may follow these requirements.",
            ],
          },
        },
        phd: {
          title: "AI Computing - Doctoral",
          subtitle: "(For students admitted in 2026 or later)",
          sections: [
            {
              label: "A.",
              title: "Credits Required for Graduation",
              credits: "60+ credits",
              items: [],
            },
            {
              label: "B.",
              title: "Mandatory General Courses",
              credits: "3+ credits",
              items: [
                {
                  text: "Select and complete 1 course among the university-designated Mandatory General (CC) courses (CC.50010 excluded)",
                },
                { text: "Complete CC.50002 Ethics and Safety I (non-credit)" },
              ],
            },
            {
              label: "C.",
              title: "Required Major Courses",
              items: [{ text: "None" }],
            },
            {
              label: "D.",
              title: "Electives",
              credits: "27+ credits",
              items: [
                {
                  text: "Must complete at least 12 credits of 500-level or higher major courses offered by the department (AIC code), School of Computing (CS code), or Graduate School of Information Security (IS code)",
                },
                {
                  text: "Up to 6 credits are recognized from 400-level bachelor's/graduate mutually-recognized courses of this and other departments and 500-level or higher courses of other departments",
                },
                {
                  text: "Mandatory General and Free Elective courses are not recognized as elective courses",
                  note: true,
                },
                {
                  text: "Course credits completed during the master's program are cumulatively added to the doctoral program's completed credits",
                  note: true,
                },
              ],
            },
            {
              label: "E.",
              title: "Research",
              credits: "30+ credits",
              items: [
                {
                  text: "Must complete 2 credits of Seminar, which may be substituted with a seminar course offered by the College of AI",
                },
              ],
            },
          ],
          transitional: {
            title: "Transitional Measures",
            items: [
              "These requirements apply to students admitted in Fall 2026 and thereafter. However, doctoral students admitted before Spring 2026 who are subject to a change of major may follow these requirements.",
            ],
          },
        },
        integrated: {
          title: "AI Computing - MS-PhD Integrated",
          subtitle: "(For students admitted in 2026 or later)",
          sections: [
            {
              label: "A.",
              title: "Credits Required for Graduation",
              credits: "60+ credits",
              items: [],
            },
            {
              label: "B.",
              title: "Mandatory General Courses",
              credits: "3+ credits",
              items: [
                {
                  text: "Select and complete 1 course among the university-designated Mandatory General (CC) courses (CC.50010 excluded)",
                },
                { text: "Complete CC.50001 Leadership (non-credit)" },
                { text: "Complete CC.50002 Ethics and Safety I (non-credit)" },
              ],
            },
            {
              label: "C.",
              title: "Required Major Courses",
              items: [{ text: "None" }],
            },
            {
              label: "D.",
              title: "Electives",
              credits: "27+ credits",
              items: [
                {
                  text: "Must complete at least 12 credits of 500-level or higher major courses offered by the department (AIC code), School of Computing (CS code), or Graduate School of Information Security (IS code)",
                },
                {
                  text: "Up to 6 credits are recognized from 400-level bachelor's/graduate mutually-recognized courses of this and other departments and 500-level or higher courses of other departments",
                },
                {
                  text: "Mandatory General and Free Elective courses are not recognized as elective courses",
                  note: true,
                },
              ],
            },
            {
              label: "E.",
              title: "Research",
              credits: "30+ credits",
              items: [
                {
                  text: "Must complete 4 credits of Seminar, which may be substituted with a seminar course offered by the College of AI",
                },
                {
                  text: "Course credits and research credits (up to 2 credits of seminar) completed during the master's program are cumulatively added",
                  note: true,
                },
              ],
            },
          ],
          transitional: {
            title: "Transitional Measures",
            items: [
              "These requirements apply to students admitted in Fall 2026 and thereafter. However, combined master's-doctoral students admitted before Spring 2026 who are subject to a change of major may follow these requirements.",
            ],
          },
        },
      },
    },
    common: {
      footerNote:
        "Information may change depending on department circumstances. Please check notices regularly.",
      noticeTitle: "Notice",
      noticeSubtitle: "DEPARTMENT ANNOUNCEMENTS & UPDATES",
    },
  },
};
