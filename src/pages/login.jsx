import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, name: "User Test" });
    navigate("/dashboard");
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <div className="w-full max-w-md mx-auto text-center">
          {/* Espace haut (sans logo) */}
          <div className="h-8" />

          {/* Titre */}
          <h1 className="text-black font-semibold text-3xl mb-6">Welcome back</h1>
          <p className="text-gray-500 mb-8">Accédez à votre tableau de bord</p>

          {/* Container principal */}
          <div className="border border-zinc-950/5 rounded-2xl p-6 shadow-sm bg-white">
            <div className="space-y-3">
              {/* Bouton Google — actif */}
              <button
                onClick={openModal}
                className="flex items-center justify-center w-full py-3 px-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <FcGoogle className="text-2xl mr-3" />
                <span className="text-gray-800 font-medium">Continue with Google</span>
              </button>

              {/* Ou ligne */}
              <div className="flex items-center gap-3 mt-2 mb-1">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="text-xs text-gray-400">ou se connecter avec</span>
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

            {/* Lien inscription */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                Don’t have an account?{" "}
                <Link to="/register" className="text-yellow-500 hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal Google (popup) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 mx-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Sign in with Google</h2>
                <p className="text-sm text-gray-500">Entrez vos identifiants</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 ml-4"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Adresse email"
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Mot de passe"
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-yellow-400 text-white font-medium hover:bg-yellow-500 transition-all duration-200"
              >
                Se connecter
              </button>
            </form>

            <div className="mt-4 text-center">
              <button onClick={closeModal} className="text-yellow-500 hover:underline font-medium">
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
