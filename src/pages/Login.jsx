// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useI18n } from "../context/I18nContext";
import { Link } from "react-router-dom";
import { FaApple, FaFacebookF, FaGithubAlt, FaTwitter } from "react-icons/fa";

const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;

const Login = () => {
  const { t } = useI18n();

  const handleGitHubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user&redirect_uri=${redirectUri}`;
  };

  return (
    <>
      <div className="">
        <button
          onClick={() => (window.location.href = "/")}
          className="cursor-pointer whitespace-nowrap text-sm font-normal disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-3 rounded-md gap-1.5 px-5 has-[>svg]:px-3 underline underline-offset-1 text-black hover:text-yellow-500 transition-all duration-300 ease-in-out active:scale-[0.93]"
        >
          Back to home
        </button>
      </div>
      <div className="mt-50 flex flex-col items-center justify-center bg-white px-6">
        <div className="w-full max-w-md mx-auto text-center">
          {/* Espace haut (sans logo) */}
          <div className="h-8" />

          {/* Titre */}
          <h1 className="text-black font-semibold text-3xl mb-6">{t("login.title")}</h1>
          <p className="text-gray-500 mb-8">{t("login.subtitle")}</p>

          {/* Container principal */}
          <div className="p-6 bg-white">
            <div className="flex flex-col gap-4">
              {/* Bouton Google — actif */}
              <button
                onClick={handleGitHubLogin}
                className="flex items-center cursor-pointer justify-center w-full py-3 px-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <FaGithubAlt className="text-2xl mr-3" />
                <span className="text-gray-800 font-medium">{t("login.github")}</span>
              </button>

              {/* Ou ligne */}
              <div className="flex items-center gap-3 mt-2 mb-1">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="text-xs text-gray-400">{t("login.divider")}</span>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              {/* Autres boutons — visuels (désactivés) */}
              <button
                disabled
                className="flex items-center justify-start w-full py-3 px-4 border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed"
              >
                <FaFacebookF className="text-lg ml-2 mr-4" />
                <span>{t("login.facebook")}</span>
              </button>

              <button
                disabled
                className="flex items-center justify-start w-full py-3 px-4 border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed"
              >
                <FaApple className="text-lg ml-2 mr-4" />
                <span>{t("login.apple")}</span>
              </button>

              <button
                disabled
                className="flex items-center justify-start w-full py-3 px-4 border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed"
              >
                <FaTwitter className="text-lg ml-2 mr-4" />
                <span>{t("login.twitter")}</span>
              </button>
            </div>

            {/* Lien inscription */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                {t("login.cta.question")}{" "}
                <Link to="/register" className="text-yellow-500 hover:underline font-medium">
                  {t("login.cta.action")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
