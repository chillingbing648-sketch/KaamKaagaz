"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, LocaleTranslations } from "./types";
import { en } from "./locales/en";
import { hi } from "./locales/hi";
import { mr } from "./locales/mr";

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "mr", label: "Marathi", nativeLabel: "मराठी" },
];

const LOCALES: Record<Language, LocaleTranslations> = { en, hi, mr };
const STORAGE_KEY = "kaamkaagaz:language";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: LocaleTranslations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === "en" || saved === "hi" || saved === "mr")) {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // localStorage inaccessible
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // localStorage inaccessible
    }
  };

  const t = LOCALES[language] || en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
