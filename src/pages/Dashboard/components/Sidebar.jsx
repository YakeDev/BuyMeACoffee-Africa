const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <ul className="mt-2">
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              Overview
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-100">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
