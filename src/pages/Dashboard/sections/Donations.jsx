import { useI18n } from "../../../context/I18nContext";

const Donations = () => {
  const { t } = useI18n();

  return (
    <section>
      <h2 className="text-lg font-semibold">{t("dashboard.donations.title")}</h2>
      <p className="text-gray-500">{t("dashboard.donations.description")}</p>
    </section>
  );
};

export default Donations;
