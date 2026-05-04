import type { Translations } from "./en";

const ko: Translations = {
  // Header
  nav: {
    about: "소개",
    skills: "기술",
    work: "프로젝트",
    contact: "연락처",
    hire: "채용 문의",
  },

  // Hero
  hero: {
    badge: "새로운 기회를 찾고 있습니다",
    greeting: "안녕하세요,",
    name: "이수현입니다",
    roles: [
      "프론트엔드 개발자",
      "React / TypeScript 엔지니어",
      "AI 활용 개발자",
      "풀스택 개발자",
    ],
    tagline:
      "AI 도구를 적극 활용해 더 빠르고 스마트하게 개발하는 프론트엔드 중심 풀스택 개발자 —",
    taglineHighlight: "픽셀 퍼펙트 React UI부터 Spring/Java API까지.",
    cta: "프로젝트 보기",
    ctaSecondary: "연락하기",
    stats: {
      experience: "년 경력",
      projects: "프로젝트 배포",
      visits: "플랫폼 방문",
    },
    scroll: "스크롤",
  },

  // About
  about: {
    label: "소개",
    heading: "생각하고 확장되는",
    headingHighlight: "인터페이스를 만듭니다.",
    bio1: (years: string) =>
      `정부기관, 엔터프라이즈 플랫폼, 스타트업에 실제 서비스를 납품한 ${years} 경력의 프론트엔드 중심 풀스택 개발자입니다.`,
    bio2: "핵심 스택은 React + TypeScript이며, Spring Boot / Java 백엔드 개발도 가능합니다. 아키텍처 설계부터 API 작성, UI 구현까지 하나의 스프린트 안에서 처리합니다.",
    bio3: "Claude, ChatGPT, Gemini, Antigravity IDE 등 AI 도구를 실무에 적극 활용하여 개발 속도를 높이고 더 나은 코드를 작성합니다.",
    quote:
      "\"AI 도구를 적극 활용해 더 빠르고 스마트하게 개발하는 프론트엔드 중심 풀스택 개발자 — 픽셀 퍼펙트 React UI부터 Spring/Java API까지.\"",
    strengths: [
      {
        icon: "⚡",
        title: "AI 활용 개발 워크플로우",
        desc: "Claude, ChatGPT, Gemini, Antigravity IDE를 실무에 활용 — 멀티 모델 워크플로우로 개발 사이클을 단축합니다.",
      },
      {
        icon: "🎨",
        title: "UI 정밀 구현",
        desc: "Tailwind CSS, Hero UI, 커스텀 디자인 시스템으로 픽셀 퍼펙트 구현. Figma 디자인을 코드로 정확하게 변환합니다.",
      },
      {
        icon: "📊",
        title: "데이터 시각화",
        desc: "eCharts, realGrid, Toast Grid를 활용한 복잡한 대시보드 구축 — 정부 규모 플랫폼 포함.",
      },
      {
        icon: "🔐",
        title: "보안 및 품질 관리",
        desc: "GS 인증 실무 경험 — PMD 정적 분석, 웹 취약점 보완, 단위 테스트 수행.",
      },
    ],
  },

  // Skills
  skills: {
    label: "기술",
    heading: "기술 스택 &",
    headingHighlight: "전문성",
    note: "* 소스 코드는 사내 GitLab으로 관리되어 외부 공개가 불가합니다",
    groups: [
      { category: "프론트엔드", badge: "Main" },
      { category: "AI & 생산성 도구", badge: "Proficient" },
      { category: "백엔드", badge: "Capable" },
      { category: "DevOps & 협업", badge: "Tools" },
    ],
  },

  // Work
  work: {
    label: "프로젝트",
    heading: "주요",
    headingHighlight: "프로젝트",
    subheading: "엔터프라이즈, 정부기관, 스타트업 클라이언트를 위한 실제 서비스 개발 이력입니다.",
    overview: "프로젝트 개요",
    screens: "개발 화면",
    contributions: "주요 기여",
    otherExp: "기타 경험",
    statuses: {
      Live: "서비스 중",
      Internal: "사내 서비스",
      Completed: "완료",
    },
    visit: "↗ 방문",
  },

  // Contact
  contact: {
    label: "04. 연락처",
    heading: "함께 멋진 것을",
    headingHighlight: "만들어봐요.",
    description:
      "제품 중심의 회사, 특히 React, TypeScript, AI 활용 개발로 기여할 수 있는 외국계 팀에서의 새로운 기회를 찾고 있습니다.",
    cta: "연락하기",
    links: {
      email: "이메일",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },

  // Footer
  footer: {
    status: "기회를 찾고 있습니다",
    built: "Next.js & Tailwind CSS로 제작 · Vercel 배포",
  },
};

export default ko;
