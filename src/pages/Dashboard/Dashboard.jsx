// src/pages/Dashboard/Dashboard.jsx
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Overview from "./sections/Overview";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto">
          <Overview />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
