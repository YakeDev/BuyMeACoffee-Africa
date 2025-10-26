import { useI18n } from "../../../context/I18nContext";

const Sidebar = () => {
  const { t } = useI18n();

  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4">
        <h2 className="text-lg font-semibold">{t("dashboard.menu")}</h2>
        <ul className="mt-2">
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              {t("dashboard.links.overview")}
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              {t("dashboard.links.settings")}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
