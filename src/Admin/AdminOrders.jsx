import { useState } from "react"
import { useGetAllOrdersQuery, useUpdateOrderStatusMutation } from "../RTK/AdminApi"
import { FiChevronDown, FiPackage } from "react-icons/fi"

const statusStyles = {
  pending: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  delivered: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  cancelled: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
}

function AdminOrders() {
  const { data, isLoading } = useGetAllOrdersQuery()
  const orders = data?.orders ?? []
  const [updateStatus] = useUpdateOrderStatusMutation()
  const [expandedId, setExpandedId] = useState(null)
  const [filter, setFilter] = useState("all")

  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter)

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Orders</h1>
        <p className="text-sm text-gray-500 mt-1">{orders.length} orders placed</p>
      </div>

      <div className="flex gap-2 mb-6">
        {["all", "pending", "delivered", "cancelled"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize transition-colors cursor-pointer ${
              filter === f
                ? "bg-[#DB4444] text-white"
                : "bg-bg-secondary text-gray-500 border border-gray-200 dark:border-gray-700 hover:text-text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading orders...</p>
      ) : (
        <div className="grid gap-3">
          {filtered.map((order) => {
            const isOpen = expandedId === order._id
            return (
              <div
                key={order._id}
                className="bg-bg-secondary border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <div
                  onClick={() => setExpandedId(isOpen ? null : order._id)}
                  className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FDEAEA] text-[#DB4444] flex items-center justify-center">
                      <FiPackage size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">#{order._id.slice(-8)}</p>
                      <p className="text-sm text-gray-500">
                        {order.user?.fullName} · {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-semibold text-text-primary">${order.total}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[order.status]}`}>
                      {order.status}
                    </span>
                    <FiChevronDown
                      className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid gap-2 mb-4 mt-3">
                      {order.items.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm text-text-primary">
                          <p>{item.name} × {item.quantity}</p>
                          <p className="text-gray-500">${item.price * item.quantity}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Update status</p>
                      <select
                        value={order.status}
                        onChange={(e) => updateStatus({ id: order._id, status: e.target.value })}
                        onClick={(e) => e.stopPropagation()}
                        className="border border-gray-200 dark:border-gray-700 bg-bg-primary text-text-primary rounded-lg px-3 py-1.5 text-sm outline-none"
                      >
                        <option value="pending">Pending</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-10">No orders in this category.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default AdminOrders