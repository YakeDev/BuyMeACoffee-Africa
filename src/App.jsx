import { supabase } from "../server/src/lib/supabaseClient";
import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) console.error("Erreur Supabase :", error);
      else console.log("Users :", data);
    };
    fetchUsers();
  }, []);

  return <AppRouter />;
};

export default App;