import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-blue-600">Bienvenue sur BuyMeACoffee Africa ☕ </h1>
        <p className="text-gray-600">Une plateforme pour soutenir vos créateurs préférés.</p>
      </div>
      <Footer />
    </>
  );
};

export default Home;