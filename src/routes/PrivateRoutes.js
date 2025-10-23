// LES ROUTES PRIVEE DE L'APPLICATION

import { Routes, Route } from "react-router-dom";

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
};

export default PrivateRoutes;