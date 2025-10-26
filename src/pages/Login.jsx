// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { FaGithubAlt } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { useI18n } from "../context/I18nContext";

const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;

const Login = () => {
  const { t } = useI18n();

  const handleGitHubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user&redirect_uri=${redirectUri}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mb-6 text-left">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-yellow-500 transition"
          >
            {t("common.actions.backToHome")}
          </Link>
        </div>

        <h1 className="text-black font-semibold text-3xl mb-6">
          {t("login.title")}
        </h1>

        <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
          <div className="flex flex-col gap-4">
            <button
              onClick={handleGitHubLogin}
              className="flex items-center cursor-pointer justify-center w-full py-3 px-4 border border-zinc-200 rounded-lg shadow-xs hover:shadow-sm hover:bg-zinc-950/5 transition-all duration-300"
            >
              <FaGithubAlt className="text-2xl mr-3" />
              <span className="text-zinc-800 font-normal">
                {t("login.github")}
              </span>
            </button>

            <div className="flex items-center gap-3 mt-2 mb-1">
              <div className="h-px bg-zinc-300 flex-1" />
              <span className="text-sm font-light text-zinc-400">
                {t("login.divider")}
              </span>
              <div className="h-px bg-zinc-300 flex-1" />
            </div>

            <button className="flex items-center cursor-not-allowed justify-center w-full py-3 px-4 border border-zinc-200 rounded-lg shadow-xs transition-all duration-200">
              <FaGoogle className="text-lg ml-2 mr-4" />
              <span className="text-zinc-800 font-normal">
                {t("login.google")}
              </span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-zinc-500 text-sm">
              {t("login.cta.question")} {" "}
              <Link
                to="/register"
                className="text-yellow-500 hover:underline font-medium"
              >
                {t("login.cta.action")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
