import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import LanguageLayout from "./LanguageLayout";
import Home from "../pages/Home";
import Contributors from "../pages/Contributors";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile";
import GitHubCallback from "../components/GitHubCallback";
import NotFound from "../pages/NotFound";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";

const DefaultLanguageRedirect = () => {
  const { language } = useI18n();
  return <Navigate to={`/${language ?? FALLBACK_LANGUAGE}`} replace />;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLanguageRedirect />} />

        <Route path="/:language" element={<LanguageLayout />}>
          {/* Routes publiques - accessibles sans authentification */}
          <Route element={<PublicRoutes />}>
            <Route index element={<Home />} />
            <Route path="contributors" element={<Contributors />} />
            <Route path="login" element={<Login />} />
            <Route path="auth/github/callback" element={<GitHubCallback />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Routes privées - protégées par AuthContext */}
          <Route element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
