import { useGetMyOrdersQuery } from "../../RTK/orderApi";
import NavLinks from "../../common/NavLinks";
import { FiPackage } from "react-icons/fi";

const statusStyles = {
  pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  delivered: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  cancelled: "bg-red-500/10 text-red-600 dark:text-red-400",
};

function MyOrders() {
  const { data, isLoading, isError } = useGetMyOrdersQuery();
  const orders = data?.orders ?? [];

  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary">
      <NavLinks />
      <div className="px-4 sm:px-8 md:px-16 py-8 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-1">My Orders</h1>
        <p className="text-sm text-gray-500 mb-6">{orders.length} orders placed</p>

        {isLoading && <p className="text-gray-500 text-sm">Loading your orders...</p>}
        {isError && <p className="text-red-500 text-sm">Something went wrong loading your orders.</p>}

        {!isLoading && !isError && orders.length === 0 && (
          <p className="text-gray-500 text-sm">You haven't placed any orders yet.</p>
        )}

        <div className="grid gap-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-bg-primary border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-6 transition-shadow hover:shadow-sm"
            >
              <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-950/40 text-[#DB4444] flex items-center justify-center flex-shrink-0">
                    <FiPackage size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-text-primary">
                      Order #{order._id.slice(-8)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    statusStyles[order.status] || statusStyles.pending
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="grid gap-2 mb-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-xs sm:text-sm text-text-primary">
                    <p className="line-clamp-1">{item.name} × {item.quantity}</p>
                    <p className="text-gray-500 font-medium ml-2">${item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between border-t border-gray-200 dark:border-gray-800 pt-3 font-bold text-sm sm:text-base text-text-primary">
                <p>Total</p>
                <p>${order.total}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;