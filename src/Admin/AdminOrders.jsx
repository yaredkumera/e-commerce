import { useGetAllOrdersQuery, useUpdateOrderStatusMutation } from "../RTK/AdminApi"

function AdminOrders() {
  const { data, isLoading } = useGetAllOrdersQuery()
  const orders = data?.orders ?? []
  const [updateStatus] = useUpdateOrderStatusMutation()

  if (isLoading) return <p>Loading orders...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <div className="grid gap-4">
        {orders.map((order) => (
          <div key={order._id} className="border rounded-md p-4">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">#{order._id.slice(-8)} — {order.user?.fullName}</p>
              <select
                value={order.status}
                onChange={(e) => updateStatus({ id: order._id, status: e.target.value })}
                className="border rounded px-2 py-1"
              >
                <option value="pending">Pending</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <p className="text-sm text-gray-500">{order.items.length} items — ${order.total}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminOrders