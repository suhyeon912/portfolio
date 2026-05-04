"use client";

import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[#1e1e36]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="font-mono text-sm text-gray-600 hover:text-purple-400 transition-colors">
          <span className="text-purple-700">&lt;</span>SH
          <span className="text-purple-700">/&gt;</span>
        </a>
        <p className="text-xs text-gray-700">
          © {year} Suhyeon · {t.footer.built}
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-700">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>{t.footer.status}</span>
        </div>
      </div>
    </footer>
  );
}
