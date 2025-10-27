import React from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FALLBACK_LANGUAGE } from "../context/I18nContext";

const PublicRoutes = () => {
  const { isAuthenticated } = useAuth();
  const { language } = useParams();
  const location = useLocation();
  const effectiveLanguage = language ?? FALLBACK_LANGUAGE;

  // Si l'utilisateur est connecté et essaie d'accéder à /login, rediriger vers /dashboard
  if (
    isAuthenticated &&
    (location.pathname === `/${effectiveLanguage}/login` ||
      location.pathname === `/${effectiveLanguage}/register`)
  ) {
    return <Navigate to={`/${effectiveLanguage}/dashboard`} replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
