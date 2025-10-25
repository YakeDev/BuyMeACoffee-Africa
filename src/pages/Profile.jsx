import React from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Profil utilisateur
            </h1>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <p className="mt-1 text-lg text-gray-900">
                  {user?.name || "Non défini"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <p className="mt-1 text-lg text-gray-900">
                  {user?.email || "Non défini"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;