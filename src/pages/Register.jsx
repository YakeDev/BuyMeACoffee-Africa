// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGithub, FaGithubAlt } from "react-icons/fa";
import { FaApple, FaFacebookF, FaTwitter } from "react-icons/fa6";

const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;

const Register = () => {
  const handleGitHubLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user&redirect_uri=${redirectUri}`;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-black/75 text-3xl font-bold mb-2">
              Inscription
            </h1>
            <p className="text-black/60 text-sm">
              Rejoignez BuyMeACoffee Africa
            </p>
          </div>

          {/* Container principal */}
          <div className="border border-zinc-950/5 rounded-2xl p-6 shadow-sm bg-white">
            <div className="space-y-3">
              {/* Bouton Google — actif */}
              <button
                onClick={handleGitHubLogin}
                className="flex items-center cursor-pointer justify-center w-full py-3 px-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <FaGithubAlt className="text-2xl mr-3" />
                <span className="text-gray-800 font-medium">
                  Continue with GitHub
                </span>
              </button>

              {/* Ou ligne */}
              <div className="flex items-center gap-3 mt-2 mb-1">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="text-xs text-gray-400">
                  ou se connecter avec
                </span>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              {/* Autres boutons — visuels (désactivés) */}
              <button
                disabled
                className="flex items-center justify-start w-full py-3 px-4 border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed"
              >
                <FaFacebookF className="text-lg ml-2 mr-4" />
                <span>Continue with Facebook</span>
              </button>

              <button
                disabled
                className="flex items-center justify-start w-full py-3 px-4 border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed"
              >
                <FaApple className="text-lg ml-2 mr-4" />
                <span>Continue with Apple</span>
              </button>

              <button
                disabled
                className="flex items-center justify-start w-full py-3 px-4 border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed"
              >
                <FaTwitter className="text-lg ml-2 mr-4" />
                <span>Continue with Twitter</span>
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-black/60 text-sm">
                Déjà un compte ?{" "}
                <Link
                  to="/login"
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Connectez-vous
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
