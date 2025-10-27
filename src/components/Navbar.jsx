import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../context/I18nContext";
import Logo from "/logo-v5.webp";

const Navbar = () => {
  const [contributors, setContributors] = useState([]);
  const { t, language, setLanguage, availableLanguages } = useI18n();

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.allorigins.win/raw?url=" +
            encodeURIComponent(
              "https://api.github.com/repos/2MJ-DEV/BuyMeACoffee-Africa/contributors"
            )
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contributors");
        }

        const data = await response.json();
        setContributors(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchContributors();
  }, []);

  const contributorCountLabel =
    contributors.length === 1
      ? t("navbar.contributors.singular", { count: contributors.length })
      : t("navbar.contributors.plural", { count: contributors.length });

  const handleLanguageChange = (event) => {
    const nextLanguage = event.target.value;
    if (availableLanguages.includes(nextLanguage)) {
      setLanguage(nextLanguage);
    }
  };

  return (
    <header className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[55%] mx-auto fixed left-0 top-0 right-0 z-50">
      <nav className="flex items-center justify-between py-2 border border-zinc-950/5 bg-zinc-950/2 backdrop-blur-md rounded-2xl px-3 mt-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="">
              <img src={Logo} alt="" width={45} />
            </span>
            <div className="font-black text-[20px]">
              <span>BuyMeA</span>
              <span className="text-yellow-500">Coffee</span>
            </div>
          </div>
        </Link>

        <div className="">
          <ul className="flex items-center gap-3">
            <li className="relative">
              <label className="sr-only" htmlFor="language-toggle">
                {t("common.language.label")}
              </label>

              <button
                id="language-toggle"
                onClick={() => {
                  // Si tu veux alterner entre anglais et français :
                  const nextLang =
                    language === "en"
                      ? "fr"
                      : language === "fr"
                      ? "en"
                      : availableLanguages[0];
                  handleLanguageChange({ target: { value: nextLang } });
                }}
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-white text-zinc-950 hover:bg-zinc-50 transition-all duration-300 ease-in-out active:scale-[0.93]"
              >
                <span className="capitalize">
                  {language === "en"
                    ? t("common.language.english")
                    : language === "fr"
                    ? t("common.language.french")
                    : language.toUpperCase()}
                </span>
              </button>
            </li>

            <li>
              <Link
                to="/contributors"
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-white text-zinc-950 hover:bg-zinc-50 transition-all duration-300 ease-in-out active:scale-[0.93]"
              >
                <div className="">
                  <span className="">{contributorCountLabel}</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive select-none py-2 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]"
              >
                {t("common.actions.goToApp")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
