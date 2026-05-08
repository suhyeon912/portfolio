"use client";

import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const roles = t.hero.roles;

  useEffect(() => {
    setRoleIndex(0);
    setDisplayed("");
    setCharIndex(0);
    setIsDeleting(false);
  }, [roles]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-mono text-purple-400 bg-purple-900/20 border border-purple-800/40 rounded-full animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {t.hero.badge}
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
          {t.hero.greeting}{" "}
          <span className="gradient-text glow-text">{t.hero.name}</span>
        </h1>

        <div className="h-12 flex items-center justify-center mb-6">
          <p className="text-2xl sm:text-3xl font-light text-gray-300">
            <span className="text-purple-400">{displayed}</span>
            <span className="inline-block w-0.5 h-7 bg-purple-400 ml-0.5 animate-pulse align-middle" />
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed mb-10">
          {t.hero.tagline}{" "}
          <span className="text-gray-200">{t.hero.taglineHighlight}</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="group px-7 py-3.5 font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/40 hover:-translate-y-0.5"
          >
            {t.hero.cta}
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 font-semibold text-gray-300 hover:text-white bg-transparent hover:bg-white/5 border border-[#2a2a4a] hover:border-purple-700/50 rounded-xl transition-all duration-300"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {[
            { value: "4+", label: t.hero.stats.experience },
            { value: "10+", label: t.hero.stats.projects },
            { value: "501K+", label: t.hero.stats.visits },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-600 uppercase tracking-widest">{t.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-purple-600/60 to-transparent" />
      </div>
    </section>
  );
}
