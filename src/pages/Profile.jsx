import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useI18n } from "../context/I18nContext";

const Profile = () => {
  const { user } = useAuth();
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t("profile.title")}
            </h1>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t("profile.name")}
                </label>
                <p className="mt-1 text-lg text-gray-900">
                  {user?.name || t("profile.notSet")}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t("profile.email")}
                </label>
                <p className="mt-1 text-lg text-gray-900">
                  {user?.email || t("profile.notSet")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
