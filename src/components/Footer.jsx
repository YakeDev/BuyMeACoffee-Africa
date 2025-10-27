import { Github, Linkedin, Mail } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";
import Logo from "/logo-v5.webp";

const Footer = () => {
  const { t, language } = useI18n();
  const currentYear = new Date().getFullYear();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;

  const withLanguagePrefix = useMemo(
    () => (targetPath) => {
      const sanitizedPath = targetPath.startsWith("/") ? targetPath.slice(1) : targetPath;
      if (!sanitizedPath) {
        return `/${activeLanguage}`;
      }
      return `/${activeLanguage}/${sanitizedPath}`;
    },
    [activeLanguage]
  );

  return (
    <footer className="border-t border-[rgba(107,62,38,0.14)] bg-[rgba(245,237,230,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 text-[color:rgba(43,27,18,0.72)]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-6">
            <Link to={withLanguagePrefix("/")} className="flex items-center gap-3">
              <span className="inline-flex size-12 items-center justify-center rounded-3xl bg-[rgba(107,62,38,0.08)] shadow-inner">
                <img src={Logo} alt="" width={32} height={32} />
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-latte)]">
                  BuyMeACoffee
                </span>
                <span className="text-xl font-semibold text-[var(--color-espresso)]">Africa</span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-[color:rgba(43,27,18,0.68)]">
              {t("footer.description")}
            </p>

            <ul className="flex items-center gap-4 text-[rgba(107,62,38,0.7)]">
              <li>
                <a
                  href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-2xl border border-[rgba(107,62,38,0.18)] bg-[rgba(245,237,230,0.7)] shadow-sm transition hover:border-[rgba(107,62,38,0.35)] hover:text-[var(--color-espresso)]"
                >
                  <Github className="size-4" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:julesmukadi.dev@gmail.com"
                  className="inline-flex size-10 items-center justify-center rounded-2xl border border-[rgba(107,62,38,0.18)] bg-[rgba(245,237,230,0.7)] shadow-sm transition hover:border-[rgba(107,62,38,0.35)] hover:text-[var(--color-espresso)]"
                >
                  <Mail className="size-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-2xl border border-[rgba(107,62,38,0.18)] bg-[rgba(245,237,230,0.7)] shadow-sm transition hover:border-[rgba(107,62,38,0.35)] hover:text-[var(--color-espresso)]"
                >
                  <Linkedin className="size-4" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-latte)]">
              {t("common.navigation.resources")}
            </h3>
            <ul className="space-y-3 text-sm font-medium text-[color:rgba(43,27,18,0.7)]">
              <li>
                <Link
                  to={withLanguagePrefix("/about")}
                  className="transition hover:text-[var(--color-espresso)]"
                >
                  {t("common.navigation.about")}
                </Link>
              </li>
              <li>
                <Link
                  to={withLanguagePrefix("/blog")}
                  className="transition hover:text-[var(--color-espresso)]"
                >
                  {t("common.navigation.blog")}
                </Link>
              </li>
              <li>
                <Link
                  to={withLanguagePrefix("/dev")}
                  className="transition hover:text-[var(--color-espresso)]"
                >
                  {t("common.navigation.developers")}
                </Link>
              </li>
              <li>
                <Link
                  to={withLanguagePrefix("/team")}
                  className="transition hover:text-[var(--color-espresso)]"
                >
                  {t("common.navigation.team")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-latte)]">
              {t("common.navigation.company")}
            </h3>
            <ul className="space-y-3 text-sm font-medium text-[color:rgba(43,27,18,0.7)]">
              <li>
                <Link
                  to={withLanguagePrefix("/help")}
                  className="transition hover:text-[var(--color-espresso)]"
                >
                  {t("common.navigation.help")}
                </Link>
              </li>
              <li>
                <Link
                  to={withLanguagePrefix("/privacy")}
                  className="transition hover:text-[var(--color-espresso)]"
                >
                  {t("common.navigation.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to={withLanguagePrefix("/terms")}
                  className="transition hover:text-[var(--color-espresso)]"
                >
                  {t("common.navigation.terms")}
                </Link>
              </li>
              <li>
                <Link
                  to={withLanguagePrefix("/license")}
                  className="transition hover:text-[var(--color-espresso)]"
                >
                  {t("common.navigation.license")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(107,62,38,0.12)] pt-6 text-sm text-[color:rgba(43,27,18,0.6)] md:flex-row">
          <span>{t("dates.yearlyCopyright", { year: currentYear })}</span>
          <div className="flex items-center gap-2">
            <span>{t("common.layout.by")}</span>
            <Link
              to={withLanguagePrefix("/contributors")}
              className="font-semibold uppercase tracking-[0.24em] text-[var(--color-espresso)] transition hover:text-[var(--color-coffee)]"
            >
              {t("common.navigation.contributors")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
