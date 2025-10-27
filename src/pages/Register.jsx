// import React, { useState } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";

const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;

const Register = () => {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mb-6 text-left">
          <Link
            to={withLanguagePrefix("/")}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-yellow-500 transition"
          >
            {t("common.actions.backToHome")}
          </Link>
        </div>

        <h1 className="text-black/75 text-3xl font-bold mb-2">{t("register.title")}</h1>
        <p className="text-black/60 text-sm mb-6">{t("register.subtitle")}</p>

        <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
          <div className="flex flex-col gap-4">
            <button
              onClick={handleGitHubLogin}
              className="flex items-center cursor-pointer justify-center w-full py-3 px-4 border border-zinc-200 rounded-lg shadow-xs hover:shadow-sm hover:bg-zinc-950/5 transition-all duration-300"
            >
              <FaGithubAlt className="text-2xl mr-3" />
              <span className="text-zinc-800 font-normal">
                {t("register.github")}
              </span>
            </button>

            <div className="flex items-center gap-3 mt-2 mb-1">
              <div className="h-px bg-zinc-300 flex-1" />
              <span className="text-sm font-light text-zinc-400">
                {t("register.divider")}
              </span>
              <div className="h-px bg-zinc-300 flex-1" />
            </div>

            <button className="flex items-center cursor-not-allowed justify-center w-full py-3 px-4 border border-zinc-200 rounded-lg shadow-xs transition-all duration-200">
              <FaGoogle className="text-lg ml-2 mr-4" />
              <span className="text-zinc-800 font-normal">
                {t("register.google")}
              </span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-black/60 text-sm">
              {t("register.cta.question")} {" "}
              <Link
                to={withLanguagePrefix("/login")}
                className="text-yellow-600 hover:text-yellow-700 font-medium"
              >
                {t("register.cta.action")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
