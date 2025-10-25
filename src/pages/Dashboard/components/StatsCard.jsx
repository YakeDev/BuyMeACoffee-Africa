const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center">
      <div className="text-2xl text-gray-700 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;