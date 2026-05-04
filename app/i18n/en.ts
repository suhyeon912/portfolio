const en = {
  // Header
  nav: {
    about: "About",
    skills: "Skills",
    work: "Work",
    contact: "Contact",
    hire: "Hire Me",
  },

  // Hero
  hero: {
    badge: "Available for opportunities",
    greeting: "Hi, I'm",
    name: "Suhyeon",
    roles: [
      "Frontend Developer",
      "React / TypeScript Engineer",
      "AI-Powered Builder",
      "Fullstack Developer",
    ],
    tagline:
      "Frontend-first fullstack developer who leverages AI tools to ship faster and smarter —",
    taglineHighlight: "from pixel-perfect React UIs to Spring/Java APIs.",
    cta: "View My Work",
    ctaSecondary: "Get in Touch",
    stats: {
      experience: "Years Experience",
      projects: "Projects Shipped",
      visits: "Platform Visits",
    },
    scroll: "Scroll",
  },

  // About
  about: {
    label: "About",
    heading: "Building interfaces that",
    headingHighlight: "think and scale.",
    bio1: (years: string) =>
      `I'm a frontend-first developer with ${years} of professional experience delivering production web applications for government agencies, enterprise platforms, and startups across Korea.`,
    bio2: "My core stack is React + TypeScript, with solid backend capability in Spring Boot / Java. I design architecture, write APIs, and ship UI — often in the same sprint.",
    bio3: "What sets me apart is how I integrate AI tooling into my daily workflow. I actively use Claude, ChatGPT, Gemini, and Antigravity IDE to accelerate development, debug faster, and write better code.",
    quote:
      "\"Frontend-first fullstack developer who leverages AI tools to ship faster and smarter — from pixel-perfect React UIs to Spring/Java APIs.\"",
    strengths: [
      {
        icon: "⚡",
        title: "AI-Augmented Workflow",
        desc: "Proficient with Claude, ChatGPT, Gemini, and Antigravity IDE — cutting dev cycles significantly with multi-model workflows.",
      },
      {
        icon: "🎨",
        title: "UI Precision",
        desc: "Pixel-perfect implementation with Tailwind CSS, Hero UI, and custom design systems. Figma-to-code fluency.",
      },
      {
        icon: "📊",
        title: "Data Visualization",
        desc: "Built complex dashboards using eCharts, realGrid, and Toast Grid — including government-scale platforms.",
      },
      {
        icon: "🔐",
        title: "Security & Quality",
        desc: "Hands-on GS certification experience — PMD static analysis, web vulnerability patching, and unit test execution.",
      },
    ],
  },

  // Skills
  skills: {
    label: "Skills",
    heading: "Tech Stack &",
    headingHighlight: "Expertise",
    note: "* Source code is confidential (internal company projects via GitLab)",
    groups: [
      { category: "Frontend", badge: "Main" },
      { category: "AI & Productivity", badge: "Proficient" },
      { category: "Backend", badge: "Capable" },
      { category: "DevOps & Collaboration", badge: "Tools" },
    ],
  },

  // Work
  work: {
    label: "Work",
    heading: "Selected",
    headingHighlight: "Projects",
    subheading: "Production work from enterprise, government, and startup clients.",
    overview: "Overview",
    screens: "Screens Developed",
    contributions: "Key Contributions",
    otherExp: "Other Experience",
    statuses: {
      Live: "Live",
      Internal: "Internal",
      Completed: "Completed",
    },
    visit: "↗ Visit",
  },

  // Contact
  contact: {
    label: "04. Contact",
    heading: "Let's build something",
    headingHighlight: "great together.",
    description:
      "I'm actively looking for new opportunities at product-driven companies — especially international teams where I can contribute with React, TypeScript, and AI-augmented development.",
    cta: "Say Hello",
    links: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },

  // Footer
  footer: {
    status: "Open to opportunities",
    built: "Built with Next.js & Tailwind CSS · Deployed on Vercel",
  },
};

export default en;
export type Translations = typeof en;
