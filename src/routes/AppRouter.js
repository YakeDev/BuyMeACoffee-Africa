// LES ROUTES PRINCIPALES DE L'APPLICATION

import PublicRoutes from "./PrivateRoutes";
import PrivateRoutes from "./PublicRoutes";

const AppRouter = () => {
    return (
        <>
            <PublicRoutes />
            <PrivateRoutes />
        </>
    );
};

export default AppRouter;