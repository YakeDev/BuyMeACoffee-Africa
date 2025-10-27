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
    <footer>
            <div className="border-t border-zinc-950/20 bg-zinc-950/2 px-3 pt-10 pb-5 flex items-center justify-between mt-10">
                <div className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[50%] mx-auto">
                    <div className="grid grid-cols-2 gap-6 justify-between">
                        {/* Logo + Description + Réseaux */}
                        <div className="flex flex-col gap-4">
                            <Link to={withLanguagePrefix("/")} className="flex items-center gap-2">
                                      <div className="flex items-center gap-2">
                                        <span className="">
                                        <img src={Logo} alt="" width={45} /></span>
                                        <div className="font-black text-[20px]">
                                          <span>BuyMeA</span>
                                          <span className="text-yellow-500">Coffee</span>
                                        </div>
                                      </div>
                                    </Link>

                            <p className="text-sm text-zinc-600 leading-relaxed">{t("footer.description")}</p>

                            <ul className="flex items-center gap-4 mt-2">
                                <li>
                                    <a href={withLanguagePrefix("/")} className="hover:text-yellow-600 transition">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:julesmukadi.dev@gmail.com" className="hover:text-yellow-600 transition">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </li>
                                <li>
                                    <a href={withLanguagePrefix("/")} className="hover:text-yellow-600 transition">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6 text-sm">
                            <div className="flex flex-col gap-2">
                                <h3 className="capitalize text-lg font-medium">{t("common.navigation.resources")}</h3>
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link to={withLanguagePrefix("/about")} className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">
                                          {t("common.navigation.about")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={withLanguagePrefix("/blog")} className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">
                                          {t("common.navigation.blog")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={withLanguagePrefix("/dev")} className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">
                                          {t("common.navigation.developers")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={withLanguagePrefix("/team")} className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">
                                          {t("common.navigation.team")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="capitalize font-medium text-lg">{t("common.navigation.company")}</h3>
                                <ul className="flex flex-col gap-2">
                                    {/* <li>
                                        <Link to="/support" className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">contacter support</Link>
                                    </li> */}
                                    <li>
                                        <Link to={withLanguagePrefix("/help")} className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">
                                          {t("common.navigation.help")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={withLanguagePrefix("/privacy")} className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">
                                          {t("common.navigation.privacy")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={withLanguagePrefix("/terms")} className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">
                                          {t("common.navigation.terms")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={withLanguagePrefix("/license")} className="font-medium text-black/60 capitalize hover:text-yellow-600 transition">
                                          {t("common.navigation.license")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-10 text-sm border-t border-zinc-950/5 pt-4">
                        <div className="">
                            <span>{t("dates.yearlyCopyright", { year: currentYear })}</span>
                        </div>
                        <div className="flex gap-1 justify-end items-center">
                            <span className="capitalize">{t("common.layout.by")}</span>
                            <Link to={withLanguagePrefix("/contributors")} className="flex items-center gap-1 hover:text-yellow-500 transition duration-300 underline underline-offset-2">
                                <span className="uppercase font-bold">{t("common.navigation.contributors")}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
