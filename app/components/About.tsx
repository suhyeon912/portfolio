export default function About() {
  const strengths = [
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
  ];

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-purple-400">01.</span>
          <span className="text-sm uppercase tracking-widest text-gray-500">
            About
          </span>
          <div className="flex-1 h-px bg-[#1e1e36]" />
        </div>

        <div className="reveal grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Building interfaces that{" "}
              <span className="gradient-text">think and scale.</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a frontend-first developer with <strong className="text-gray-200">4+ years</strong> of
                professional experience delivering production web applications
                for government agencies, enterprise platforms, and startups
                across Korea.
              </p>
              <p>
                My core stack is <strong className="text-gray-200">React + TypeScript</strong>, with solid
                backend capability in <strong className="text-gray-200">Spring Boot / Java</strong>. I design
                architecture, write APIs, and ship UI — often in the same sprint.
              </p>
              <p>
                What sets me apart is how I integrate AI tooling into my daily
                workflow. I actively use{" "}
                <strong className="text-gray-200">
                  Claude, ChatGPT, Gemini, and Antigravity IDE
                </strong>{" "}
                to accelerate development, debug faster, and write better code.
              </p>
            </div>

            {/* Positioning badge */}
            <div className="mt-8 p-4 bg-[#0f0f1a] border border-[#1e1e36] rounded-xl">
              <p className="font-mono text-sm text-purple-300 leading-relaxed">
                &ldquo;Frontend-first fullstack developer who leverages AI tools
                to ship faster and smarter — from pixel-perfect React UIs to
                Spring/Java APIs.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Strengths */}
          <div className="grid grid-cols-1 gap-4">
            {strengths.map((s, i) => (
              <div
                key={i}
                className="card-hover flex gap-4 p-5 bg-[#0f0f1a] border border-[#1e1e36] rounded-xl"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{s.icon}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
