import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
