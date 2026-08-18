import { useState } from "react";
import {useGetAllOrdersQuery,useUpdateOrderStatusMutation} from "../RTK/AdminApi.js"
import { FiChevronDown, FiPackage } from "react-icons/fi";

const statusStyles = {
  pending: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  delivered: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  cancelled: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
};

function AdminOrders() {
  const { data, isLoading } = useGetAllOrdersQuery();
  const orders = data?.orders ?? [];
  const [updateStatus] = useUpdateOrderStatusMutation();
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-text-primary">Orders</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">{orders.length} orders placed</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "pending", "delivered", "cancelled"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold capitalize transition-colors cursor-pointer ${
              filter === f
                ? "bg-[#DB4444] text-white"
                : "bg-bg-secondary text-gray-500 border border-gray-200 dark:border-gray-800 hover:text-text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {isLoading ? (
        <p className="text-gray-500 text-sm">Loading orders...</p>
      ) : (
        <div className="grid gap-3">
          {filtered.map((order) => {
            const isOpen = expandedId === order._id;
            return (
              <div
                key={order._id}
                className="bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
              >
                <div
                  onClick={() => setExpandedId(isOpen ? null : order._id)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-3 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FDEAEA] text-[#DB4444] flex items-center justify-center shrink-0">
                      <FiPackage size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-xs sm:text-sm text-text-primary">
                        #{order._id.slice(-8)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {order.user?.fullName || "Guest"} · {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-gray-800">
                    <p className="font-semibold text-sm sm:text-base text-text-primary">${order.total}</p>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold capitalize ${
                        statusStyles[order.status] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.status}
                    </span>
                    <FiChevronDown
                      className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>

                {isOpen && (
                  <div className="px-4 pb-4 pt-2 border-t border-gray-200 dark:border-gray-800 bg-black/5 dark:bg-white/5">
                    <div className="grid gap-2 mb-4">
                      {order.items?.map((item, i) => (
                        <div key={i} className="flex justify-between text-xs sm:text-sm text-text-primary">
                          <p>
                            {item.name} × <span className="font-medium">{item.quantity}</span>
                          </p>
                          <p className="text-gray-500">${item.price * item.quantity}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-800">
                      <p className="text-xs sm:text-sm text-gray-500">Update status</p>
                      <select
                        value={order.status}
                        onChange={(e) => updateStatus({ id: order._id, status: e.target.value })}
                        onClick={(e) => e.stopPropagation()}
                        className="border border-gray-200 dark:border-gray-800 bg-bg-primary text-text-primary rounded-lg px-3 py-1 text-xs sm:text-sm outline-none focus:border-[#DB4444]"
                      >
                        <option value="pending">Pending</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 text-sm py-10">No orders in this category.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminOrders;