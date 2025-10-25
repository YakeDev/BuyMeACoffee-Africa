import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center">
            <div className="border border-zinc-950/5 rounded-xl p-8 shadow-md bg-white">
              <h1 className="text-black/75 text-4xl font-bold mb-4">
                Bienvenue {user?.name || "Utilisateur"} !
              </h1>
              <p className="text-black/60 text-lg mb-8">
                Vous êtes connecté à BuyMeACoffee Africa
              </p>
              <button
                onClick={handleLogout}
                className="py-2 px-6 border border-zinc-950/5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out active:scale-[0.98] font-medium"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;