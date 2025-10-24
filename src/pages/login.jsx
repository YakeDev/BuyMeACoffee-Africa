import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, name: "User Test" });
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-black/75 text-3xl font-bold mb-2">Connexion</h1>
            <p className="text-black/60 text-sm">Accédez à votre tableau de bord</p>
          </div>

          <div className="border border-zinc-950/5 rounded-xl p-6 shadow-md bg-white">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-zinc-950/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-black/75 placeholder-black/40"
                  placeholder="Adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-zinc-950/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-black/75 placeholder-black/40"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 border border-zinc-950/5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.98] font-medium"
              >
                Se connecter
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-black/60 text-sm">
                Pas de compte ?{" "}
                <Link
                  to="/register"
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Créez-en un
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

export default Login;