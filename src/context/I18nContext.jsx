/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import T from "i18n-react";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

const STORAGE_KEY = "appLanguage";
const dictionaries = { en, fr };
const supportedLanguages = Object.keys(dictionaries);

const I18nContext = createContext(null);

const getDictionary = (language) => dictionaries[language] ?? dictionaries.en;

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
      if (savedLanguage && dictionaries[savedLanguage]) {
        T.setTexts(getDictionary(savedLanguage));
        return savedLanguage;
      }
    }
    T.setTexts(getDictionary("en"));
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "en");
    }
    return "en";
  });

  const changeLanguage = useCallback(
    (nextLanguage) => {
      if (nextLanguage === language) {
        return;
      }
      if (dictionaries[nextLanguage]) {
        T.setTexts(getDictionary(nextLanguage));
        if (typeof window !== "undefined") {
          window.localStorage.setItem(STORAGE_KEY, nextLanguage);
        }
        setLanguage(nextLanguage);
      }
    },
    [language]
  );

  const translate = useCallback((key, variables) => T.translate(key, variables), []);

  const value = useMemo(
    () => ({
      language,
      availableLanguages: supportedLanguages,
      setLanguage: changeLanguage,
      t: translate
    }),
    [language, changeLanguage, translate]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
