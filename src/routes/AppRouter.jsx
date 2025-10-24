import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Routes publiques - accessibles sans authentification */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Routes privées - protégées par AuthContext */}
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;