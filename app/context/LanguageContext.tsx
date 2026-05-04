"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en, { type Translations } from "../i18n/en";
import ko from "../i18n/ko";

type Lang = "en" | "ko";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  setLang: () => {},
  toggle: () => {},
});

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("portfolio-lang") as Lang | null;
  if (stored === "ko" || stored === "en") return stored;
  const browser = navigator.language || "";
  return browser.startsWith("ko") ? "ko" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
  };

  const toggle = () => setLang(lang === "en" ? "ko" : "en");

  const t = lang === "ko" ? ko : en;

  return (
    <LanguageContext.Provider value={{ lang, t, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
