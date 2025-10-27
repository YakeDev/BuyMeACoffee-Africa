// import React, { useState } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";

const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;

const Login = () => {
  const { t, language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;

  const withLanguagePrefix = useMemo(
    () => (targetPath) => {
      const sanitizedPath = targetPath.startsWith("/") ? targetPath.slice(1) : targetPath;
      if (!sanitizedPath) {
        return `/${activeLanguage}`;
      }
      return `/${activeLanguage}/${sanitizedPath}`;
    },
    [activeLanguage]
  );

  const handleGitHubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user&redirect_uri=${redirectUri}`;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[rgba(245,237,230,0.94)] via-[rgba(200,159,133,0.25)] to-[rgba(245,237,230,0.94)] px-6 py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-[rgba(245,237,230,0.95)] via-transparent to-transparent" />
      <div className="mx-auto flex w-full max-w-md flex-col gap-8 text-center">
        <Link
          to={withLanguagePrefix("/")}
          className="self-start text-sm font-medium text-[var(--color-coffee)] transition hover:text-[var(--color-espresso)]"
        >
          {t("common.actions.backToHome")}
        </Link>

        <div className="surface-card rounded-3xl p-10">
          <h1 className="text-3xl font-semibold text-[var(--color-espresso)]">{t("login.title")}</h1>
          <p className="mt-2 text-sm text-[color:rgba(43,27,18,0.72)]">
            {t("home.hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={handleGitHubLogin}
              className="btn-primary flex items-center justify-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold"
            >
              <FaGithubAlt className="text-lg" />
              {t("login.github")}
            </button>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[rgba(107,62,38,0.55)]">
              <span className="flex-1 border-t border-[rgba(200,159,133,0.4)]" />
              {t("login.divider")}
              <span className="flex-1 border-t border-[rgba(200,159,133,0.4)]" />
            </div>

            <button
              className="btn-secondary flex cursor-not-allowed items-center justify-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold"
            >
              <FaGoogle className="text-base" />
              {t("login.google")}
            </button>
          </div>

          <div className="mt-8 rounded-2xl bg-[rgba(200,159,133,0.12)] px-4 py-3 text-sm text-[color:rgba(43,27,18,0.68)]">
            {t("login.cta.question")}{" "}
            <Link
              to={withLanguagePrefix("/register")}
              className="font-semibold text-[var(--color-coffee)] transition hover:text-[var(--color-espresso)]"
            >
              {t("login.cta.action")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
