import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";

const LanguageLayout = () => {
  const { language: currentLanguage, setLanguage, availableLanguages } = useI18n();
  const { language: routeLanguage } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!routeLanguage) {
      return;
    }

    if (!availableLanguages.includes(routeLanguage)) {
      const remainingPath = location.pathname.replace(/^\/[^/]+/, "") || "";
      navigate(
        {
          pathname: `/${FALLBACK_LANGUAGE}${remainingPath}`,
          search: location.search,
          hash: location.hash
        },
        { replace: true }
      );
      return;
    }

    if (routeLanguage !== currentLanguage) {
      setLanguage(routeLanguage);
    }
  }, [
    availableLanguages,
    currentLanguage,
    location.hash,
    location.pathname,
    location.search,
    navigate,
    routeLanguage,
    setLanguage
  ]);

  if (!routeLanguage) {
    return <Navigate to={`/${FALLBACK_LANGUAGE}`} replace />;
  }

  if (!availableLanguages.includes(routeLanguage)) {
    return null;
  }

  return <Outlet />;
};

export default LanguageLayout;
