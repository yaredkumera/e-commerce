import { useGetProductQuery } from "../RTK/ProductApi"
import { useGetAllOrdersQuery, useGetAllUsersQuery } from "../RTK/AdminApi"

function AdminHome() {
  const { data: productData } = useGetProductQuery()
  const { data: orderData } = useGetAllOrdersQuery()
  const { data: userData } = useGetAllUsersQuery()
  const products = productData?.products ?? []
  const orders = orderData?.orders ?? []
  const users = userData?.users ?? []

  const revenue = orders.reduce((sum, o) => sum + o.total, 0)
  const pending = orders.filter((o) => o.status === "pending").length

  const cards = [
    { label: "Total Products", value: products.length },
    { label: "Total Orders", value: orders.length },
    { label: "Pending Orders", value: pending },
    { label: "Total Users", value: users.length },
    { label: "Revenue", value: `$${revenue}` },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {cards.map((c) => (
          <div key={c.label} className="border rounded-md p-4">
            <p className="text-sm text-gray-500">{c.label}</p>
            <p className="text-2xl font-bold">{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminHome