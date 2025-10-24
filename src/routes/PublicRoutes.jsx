import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoutes = () => {
  const { isAuthenticated } = useAuth();

  // Si l'utilisateur est connecté et essaie d'accéder à /login, rediriger vers /dashboard
  if (isAuthenticated && (window.location.pathname === "/login" || window.location.pathname === "/register")) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;