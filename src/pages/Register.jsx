// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { FaGithub, FaGithubAlt, FaGoogle } from "react-icons/fa";

const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;

const Register = () => {
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
      <div className="mt-50 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center">
            <h1 className="text-black/75 text-3xl font-bold mb-2">Sign up</h1>
            <p className="text-black/60 text-sm">Join BuyMeACoffee-Africa</p>
          </div>

          {/* Container principal */}
          <div className="p-6 bg-white">
            <div className="flex flex-col gap-4">
              {/* Bouton Google — actif */}
              <div className="">
                <button
                  onClick={handleGitHubLogin}
                  className="flex items-center cursor-pointer justify-center w-full py-3 px-4 border border-zinc-200 rounded-lg shadow-xs hover:shadow-sm hover:bg-zinc-950/5 transition-all duration-300"
                >
                  <FaGithubAlt className="text-2xl mr-3" />
                  <span className="text-zinc-800 font-normal">
                    Continue with GitHub
                  </span>
                </button>
              </div>

              {/* Ou ligne */}
              <div className="flex items-center gap-3 mt-2 mb-1">
                <div className="h-px bg-zinc-300 flex-1" />
                <span className="text-sm font-light text-zinc-400">
                  or connect with
                </span>
                <div className="h-px bg-zinc-300 flex-1" />
              </div>

              {/* Autres boutons — visuels (désactivés) */}
              <div className="">
                <button className="flex items-center cursor-not-allowed justify-center w-full py-3 px-4 border border-zinc-200 rounded-lg shadow-xs transition-all duration-200">
                  <FaGoogle className="text-lg ml-2 mr-4" />
                  <span className="text-zinc-800 font-normal">
                    Continue with Google
                  </span>
                </button>
              </div>
            </div>

            {/* Link login */}
            <div className="mt-6 text-center">
              <p className="text-black/60 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
