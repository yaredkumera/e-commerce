import { useGetMyOrdersQuery } from "../../RTK/OrderApi";
import NavLinks from "../../common/NavLinks";
import { FiPackage } from "react-icons/fi";

const statusStyles = {
  pending: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  delivered: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  cancelled: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
};

function MyOrders() {
  const { data, isLoading, isError } = useGetMyOrdersQuery();
  const orders = data?.orders ?? [];

  return (
    <div>
      <NavLinks />
      <div className="px-20 py-14 bg-bg-secondary text-text-primary min-h-screen">
        <h1 className="text-2xl font-bold mb-1">My Orders</h1>
        <p className="text-sm text-gray-500 mb-8">{orders.length} orders placed</p>

        {isLoading && <p className="text-gray-500">Loading your orders...</p>}
        {isError && <p className="text-red-600">Something went wrong loading your orders.</p>}

        {!isLoading && !isError && orders.length === 0 && (
          <p className="text-gray-500">You haven't placed any orders yet.</p>
        )}

        <div className="grid gap-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-bg-primary border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FDEAEA] text-[#DB4444] flex items-center justify-center">
                    <FiPackage size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Order #{order._id.slice(-8)}</p>
                    <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[order.status]}`}>
                  {order.status}
                </span>
              </div>

              <div className="grid gap-2 mb-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm text-text-primary">
                    <p>{item.name} × {item.quantity}</p>
                    <p className="text-gray-500">${item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-3 font-semibold text-text-primary">
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