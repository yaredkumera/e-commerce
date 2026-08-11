import { useGetProductQuery } from "../RTK/ProductApi";
import { useGetAllOrdersQuery, useGetAllUsersQuery } from "../RTK/AdminApi";
import { FiBox, FiShoppingBag, FiClock, FiUsers, FiDollarSign } from "react-icons/fi";

function AdminHome() {
  const { data: productData } = useGetProductQuery();
  const { data: orderData } = useGetAllOrdersQuery();
  const { data: userData } = useGetAllUsersQuery();
  const products = productData?.products ?? [];
  const orders = orderData?.orders ?? [];
  const users = userData?.users ?? [];

  const revenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const pending = orders.filter((o) => o.status === "pending").length;

  const cards = [
    {
      label: "Total Products",
      value: products.length,
      icon: <FiBox size={20} />,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
    },
    {
      label: "Total Orders",
      value: orders.length,
      icon: <FiShoppingBag size={20} />,
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
    },
    {
      label: "Pending Orders",
      value: pending,
      icon: <FiClock size={20} />,
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
    },
    {
      label: "Total Users",
      value: users.length,
      icon: <FiUsers size={20} />,
      color: "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-400",
    },
    {
      label: "Revenue",
      value: `$${revenue.toLocaleString()}`,
      icon: <FiDollarSign size={20} />,
      color: "bg-[#FDEAEA] text-[#DB4444] dark:bg-red-950/40 dark:text-red-400",
    },
  ];

  return (
    <div>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Overview of your store's performance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
        {cards.map((c) => (
          <div
            key={c.label}
            className="bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 ${c.color}`}>
              {c.icon}
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">{c.label}</p>
            <p className="text-xl sm:text-2xl font-bold text-text-primary">{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminHome;