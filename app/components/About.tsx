"use client";

import { useLang } from "../context/LanguageContext";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-purple-400">01.</span>
          <span className="text-sm uppercase tracking-widest text-gray-500">{t.about.label}</span>
          <div className="flex-1 h-px bg-[#1e1e36]" />
        </div>

        <div className="reveal grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              {t.about.heading}{" "}
              <span className="gradient-text">{t.about.headingHighlight}</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>{t.about.bio1("4+")}</p>
              <p dangerouslySetInnerHTML={{
                __html: t.about.bio2
                  .replace("React + TypeScript", "<strong class='text-gray-200'>React + TypeScript</strong>")
                  .replace("Spring Boot / Java", "<strong class='text-gray-200'>Spring Boot / Java</strong>")
              }} />
              <p dangerouslySetInnerHTML={{
                __html: t.about.bio3
                  .replace("Claude, ChatGPT, Gemini, and Antigravity IDE", "<strong class='text-gray-200'>Claude, ChatGPT, Gemini, and Antigravity IDE</strong>")
                  .replace("Claude, ChatGPT, Gemini, Antigravity IDE", "<strong class='text-gray-200'>Claude, ChatGPT, Gemini, Antigravity IDE</strong>")
              }} />
            </div>

            <div className="mt-8 p-4 bg-[#0f0f1a] border border-[#1e1e36] rounded-xl">
              <p className="font-mono text-sm text-purple-300 leading-relaxed">
                {t.about.quote}
              </p>
            </div>
          </div>

          {/* Right: Strengths */}
          <div className="grid grid-cols-1 gap-4">
            {t.about.strengths.map((s, i) => (
              <div key={i} className="card-hover flex gap-4 p-5 bg-[#0f0f1a] border border-[#1e1e36] rounded-xl">
                <span className="text-2xl flex-shrink-0 mt-0.5">{s.icon}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
