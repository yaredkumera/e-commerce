import { useGetMyOrdersQuery } from "../../RTK/OrderApi";
import NavLinks from "../../common/NavLinks";
function MyOrders() {
  const { data, isLoading, isError } = useGetMyOrdersQuery();
  const orders = data?.orders ?? [];

  return (
    <div>
      <NavLinks />
      <div className="px-20 py-14 bg-bg-secondary text-text-primary">
        <h1 className="text-2xl font-bold mb-8">My Orders</h1>

        {isLoading && <p>Loading your orders...</p>}
        {isError && <p>Something went wrong loading your orders.</p>}

        {!isLoading && !isError && orders.length === 0 && (
          <p className="text-gray-500">You haven't placed any orders yet.</p>
        )}

        <div className="grid gap-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-300 rounded-md p-5"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">Order #{order._id.slice(-8)}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    order.status === "delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="grid gap-3 mb-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <p>
                      {item.name} × {item.quantity}
                    </p>
                    <p>${item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between border-t pt-3 font-semibold">
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
