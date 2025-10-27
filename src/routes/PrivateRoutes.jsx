import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FALLBACK_LANGUAGE } from "../context/I18nContext";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();
  const { language } = useParams();
  const effectiveLanguage = language ?? FALLBACK_LANGUAGE;

  // Si connecté → afficher l'itinéraire demandé
  // Sinon → rediriger vers /login
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`/${effectiveLanguage}/login`} replace />
  );
};

export default PrivateRoutes;
