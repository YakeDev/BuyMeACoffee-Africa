import { useI18n } from "../../../context/I18nContext";

const Profile = () => {
  const { t } = useI18n();

  return (
    <section>
      <h2 className="text-lg font-semibold">{t("dashboard.profile.title")}</h2>
      <p className="text-gray-500">{t("dashboard.profile.description")}</p>
    </section>
  );
};

export default Profile;
