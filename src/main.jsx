import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { I18nProvider } from "./context/I18nContext";
import theme from "./theme";
import "./index.css";

const applyTheme = (themeConfig) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  if (!root) {
    return;
  }

  Object.entries(themeConfig.colors).forEach(([token, value]) => {
    root.style.setProperty(`--color-${token}`, value);
  });

  if (themeConfig.typography?.fontFamily) {
    root.style.setProperty("--font-base", themeConfig.typography.fontFamily);
  }
};

applyTheme(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </I18nProvider>
  </React.StrictMode>
);
