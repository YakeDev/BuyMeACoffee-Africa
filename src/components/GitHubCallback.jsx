import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";

const GitHubCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t, language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      console.log("Code GitHub reçu :", code);
      // Here you could send the code to your backend to retrieve the token.
      // For now, we're simulating that the user is logged in.
      localStorage.setItem("github_code", code);
      navigate(`/${activeLanguage}/dashboard`); // redirects to dashboard
    }
  }, [activeLanguage, navigate, searchParams]);

  return <div className="flex justify-center items-center h-screen">{t("auth.githubCallback")}</div>;
};

export default GitHubCallback;
