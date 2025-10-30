import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";
import { useAuth } from "../context/AuthContext";
import { apiPost } from "../lib/apiClient";

const GitHubCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t, language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;
  const { login: persistAuth } = useAuth();

  useEffect(() => {
    const code = searchParams.get("code");

    async function completeGitHubLogin() {
      if (!code) return;

      try {
        const response = await apiPost("/api/auth/github", { code });
        persistAuth(response);
        navigate(`/${activeLanguage}/dashboard`, { replace: true });
      } catch (error) {
        console.error("GitHub login failed", error);
        navigate(`/${activeLanguage}/login`, {
          replace: true,
          state: { error: error.message ?? "Unable to complete GitHub login." },
        });
      }
    }

    void completeGitHubLogin();
  }, [activeLanguage, navigate, persistAuth, searchParams]);

  return <div className="flex justify-center items-center h-screen">{t("auth.githubCallback")}</div>;
};

export default GitHubCallback;
