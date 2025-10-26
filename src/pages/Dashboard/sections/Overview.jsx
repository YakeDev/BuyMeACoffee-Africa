import { useI18n } from "../../../context/I18nContext";

const Overview = () => {
  const { t } = useI18n();

  return (
    <section>
      <h2 className="text-lg font-semibold">{t("dashboard.overview.title")}</h2>
      <p className="text-gray-500">{t("dashboard.overview.description")}</p>
    </section>
  );
};

export default Overview;
