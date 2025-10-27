import { useNavigate, useParams } from "react-router-dom";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";

const NotFound = () => {
  const navigate = useNavigate();
  const { language: routeLanguage } = useParams();
  const { t, language: currentLanguage } = useI18n();
  const targetLanguage = routeLanguage ?? currentLanguage ?? FALLBACK_LANGUAGE;

  const handleBackHome = () => {
    navigate(`/${targetLanguage}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
      <h1 className="text-5xl font-bold text-black/80">404</h1>
      <p className="text-black/60">{t("errors.notFound.message")}</p>

      <div>
        <button
          onClick={handleBackHome}
          className="cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-3 rounded-md gap-1.5 px-5 has-[>svg]:px-3 underline underline-offset-2 text-black hover:text-yellow-500 transition-all duration-300 ease-in-out active:scale-[0.93]"
        >
          {t("errors.notFound.cta")}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
