type BadgeVariant = "main" | "capable" | "proficient" | "neutral";

interface Skill {
  name: string;
  variant?: BadgeVariant;
}

interface SkillGroup {
  category: string;
  icon: string;
  badge: { label: string; variant: BadgeVariant };
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "🖥️",
    badge: { label: "Main", variant: "main" },
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Hero UI" },
      { name: "Redux" },
      { name: "Recoil" },
      { name: "eCharts" },
      { name: "realGrid" },
      { name: "Toast Grid" },
      { name: "Webpack" },
      { name: "Vite" },
      { name: "HTML / CSS" },
    ],
  },
  {
    category: "AI & Productivity",
    icon: "🤖",
    badge: { label: "Proficient", variant: "proficient" },
    skills: [
      { name: "Claude (Anthropic)" },
      { name: "ChatGPT (OpenAI)" },
      { name: "Gemini (Google)" },
      { name: "Antigravity IDE" },
      { name: "Prompt Engineering" },
      { name: "Multi-model Workflow" },
      { name: "AI-assisted Coding" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    badge: { label: "Capable", variant: "capable" },
    skills: [
      { name: "Spring Boot" },
      { name: "Java" },
      { name: "JPA / Hibernate" },
      { name: "MySQL" },
      { name: "REST API" },
      { name: "SQL" },
    ],
  },
  {
    category: "DevOps & Collaboration",
    icon: "🛠️",
    badge: { label: "Tools", variant: "neutral" },
    skills: [
      { name: "Git / GitLab" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Figma" },
      { name: "Jira" },
      { name: "Agile / Scrum" },
    ],
  },
];

const badgeStyles: Record<BadgeVariant, string> = {
  main: "bg-purple-900/40 text-purple-300 border border-purple-700/40",
  capable: "bg-emerald-900/40 text-emerald-300 border border-emerald-700/40",
  proficient: "bg-orange-900/40 text-orange-300 border border-orange-700/40",
  neutral: "bg-gray-800/60 text-gray-300 border border-gray-700/40",
};

const chipStyles: Record<BadgeVariant, string> = {
  main: "bg-purple-900/20 text-purple-300 border border-purple-800/30 hover:bg-purple-900/40 hover:border-purple-600/50",
  capable:
    "bg-emerald-900/20 text-emerald-300 border border-emerald-800/30 hover:bg-emerald-900/40 hover:border-emerald-600/50",
  proficient:
    "bg-orange-900/20 text-orange-300 border border-orange-800/30 hover:bg-orange-900/40 hover:border-orange-600/50",
  neutral:
    "bg-gray-800/20 text-gray-300 border border-gray-700/30 hover:bg-gray-700/40 hover:border-gray-500/50",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0a0a14]">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-purple-400">02.</span>
          <span className="text-sm uppercase tracking-widest text-gray-500">
            Skills
          </span>
          <div className="flex-1 h-px bg-[#1e1e36]" />
        </div>

        <div className="reveal mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tech Stack &amp;{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="reveal grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-hover p-6 bg-[#0f0f1a] border border-[#1e1e36] rounded-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeStyles[group.badge.variant]}`}
                >
                  {group.badge.label}
                </span>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 cursor-default ${
                      chipStyles[group.badge.variant]
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note about GitLab */}
        <p className="reveal mt-8 text-center text-xs text-gray-600 font-mono">
          * Source code is confidential (internal company projects via GitLab)
        </p>
      </div>
    </section>
  );
}
