import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useI18n } from "../context/I18nContext";

const GitHubCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useI18n();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      console.log("Code GitHub reçu :", code);
      // Here you could send the code to your backend to retrieve the token.
      // For now, we're simulating that the user is logged in.
      localStorage.setItem("github_code", code);
      navigate("/dashboard"); // redirects to dashboard
    }
  }, [searchParams, navigate]);

  return <div className="flex justify-center items-center h-screen">{t("auth.githubCallback")}</div>;
};

export default GitHubCallback;
