import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { token, user, refreshSession } = useAuth();

  useEffect(() => {
    if (token && !user) {
      void refreshSession();
    }
  }, [refreshSession, token, user]);

  return <AppRouter />;
};

export default App;
