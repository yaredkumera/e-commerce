import { useState } from "react";
import ProductManagment from "./productManagment";
import AdminOrders from "./AdminOrders";
import AdminUsers from "./AdminUsers";
import AdminHome from "./AdminHome";
import { useGetAllOrdersQuery } from "../RTK/AdminApi";
import { FiHome, FiBox, FiShoppingBag, FiUsers } from "react-icons/fi";

function AdminDashboard() {
  const [tab, setTab] = useState("home");
  const { data } = useGetAllOrdersQuery();
  const pendingCount = (data?.orders ?? []).filter((o) => o.status === "pending").length;

  const tabs = {
    home: <AdminHome />,
    products: <ProductManagment />,
    orders: <AdminOrders />,
    users: <AdminUsers />,
  };

  const navItems = [
    { key: "home", label: "Home", icon: <FiHome size={18} /> },
    { key: "products", label: "Products", icon: <FiBox size={18} /> },
    { key: "orders", label: "Orders", icon: <FiShoppingBag size={18} />, badge: pendingCount },
    { key: "users", label: "Users", icon: <FiUsers size={18} /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] min-h-screen bg-bg-secondary text-text-primary w-full max-w-full overflow-hidden">
      {/* Sidebar Navigation */}
      <div className="border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 p-4 sm:p-5 flex flex-col gap-2 shrink-0 bg-bg-secondary">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-3 mb-1">
          Admin Panel
        </p>

        {/* Column Navigation Buttons */}
        <div className="flex flex-col gap-1.5 w-full">
          {navItems.map((item) => {
            const isActive = tab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setTab(item.key)}
                className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer w-full ${
                  isActive
                    ? "bg-[#DB4444] text-white shadow-sm"
                    : "text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 hover:text-text-primary"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r-full" />
                )}
                <span className={isActive ? "text-white" : "text-gray-400"}>{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge > 0 && (
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-[#FDEAEA] text-[#DB4444]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Viewport */}
      <div className="p-4 sm:p-6 md:p-8 w-full max-w-full overflow-x-hidden">{tabs[tab]}</div>
    </div>
  );
}

export default AdminDashboard;