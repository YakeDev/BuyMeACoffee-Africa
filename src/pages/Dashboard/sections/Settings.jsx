import { useI18n } from "../../../context/I18nContext";

const Settings = () => {
  const { t } = useI18n();

  return (
    <section>
      <h2 className="text-lg font-semibold">{t("dashboard.settings.title")}</h2>
      <p className="text-gray-500">{t("dashboard.settings.description")}</p>
    </section>
  );
};

export default Settings;
