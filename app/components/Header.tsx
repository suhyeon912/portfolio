"use client";

import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";

export default function Header() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#work", label: t.nav.work },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080810]/90 backdrop-blur-md border-b border-[#1e1e36] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-lg font-semibold tracking-tight group">
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">&lt;</span>
          <span className="text-white">SH</span>
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-gray-400 hover:text-white bg-[#0f0f1a] hover:bg-[#16162a] border border-[#1e1e36] hover:border-purple-700/50 rounded-lg transition-all duration-200"
            title={lang === "en" ? "한국어로 보기" : "Switch to English"}
          >
            <span className="text-base leading-none">{lang === "en" ? "🇰🇷" : "🇺🇸"}</span>
            <span>{lang === "en" ? "KO" : "EN"}</span>
          </button>

          <a
            href="mailto:suzy0197@gmail.com"
            className="ml-1 px-4 py-2 text-sm font-medium text-white bg-purple-700/80 hover:bg-purple-600 border border-purple-600/50 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-900/30"
          >
            {t.nav.hire}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-[#080810]/95 backdrop-blur-md border-b border-[#1e1e36]`}>
        <nav className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { toggle(); setMenuOpen(false); }}
            className="w-fit flex items-center gap-2 px-4 py-2 text-sm font-mono text-gray-400 bg-[#0f0f1a] border border-[#1e1e36] rounded-lg"
          >
            <span>{lang === "en" ? "🇰🇷" : "🇺🇸"}</span>
            <span>{lang === "en" ? "한국어" : "English"}</span>
          </button>
          <a
            href="mailto:suzy0197@gmail.com"
            className="w-fit px-4 py-2 text-sm font-medium text-white bg-purple-700 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.hire}
          </a>
        </nav>
      </div>
    </header>
  );
}
