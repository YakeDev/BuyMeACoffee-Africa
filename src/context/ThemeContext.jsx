/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import theme from "../theme";

const STORAGE_KEY = "appThemeMode";
const DEFAULT_MODE = "light";

const ThemeContext = createContext(null);

const applyThemeToDocument = (mode) => {
  if (typeof document === "undefined") {
    return;
  }

  const palette = theme.palette[mode] ?? theme.palette[DEFAULT_MODE];
  const root = document.documentElement;

  Object.entries(palette).forEach(([token, value]) => {
    root.style.setProperty(`--color-${token}`, value);
  });

  if (theme.typography?.fontFamily) {
    root.style.setProperty("--font-base", theme.typography.fontFamily);
  }

  if (theme.typography?.headingFont) {
    root.style.setProperty("--font-heading", theme.typography.headingFont);
  }

  root.dataset.theme = mode;
  root.style.colorScheme = mode === "dark" ? "dark" : "light";
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_MODE;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initialMode = stored === "dark" ? "dark" : DEFAULT_MODE;
    applyThemeToDocument(initialMode);
    return initialMode;
  });

  useEffect(() => {
    applyThemeToDocument(mode);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, mode);
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      mode,
      toggleMode,
      isDark: mode === "dark"
    }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
