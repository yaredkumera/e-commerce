import { useState } from "react"
import ProductManagment from "./productManagment"
import AdminOrders from "./AdminOrders"
import AdminUsers from "./AdminUsers"
import AdminHome from "./AdminHome"

function AdminDashboard() {
  const [tab, setTab] = useState("home")

  const tabs = {
    home: <AdminHome />,
    products: <ProductManagment />,
    orders: <AdminOrders />,
    users: <AdminUsers />,
  }

  return (
    <div className="grid md:grid-cols-[220px_1fr] min-h-screen">
      <div className="border-r p-4 flex flex-col gap-2">
        {["home", "products", "orders", "users"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-left px-3 py-2 rounded capitalize ${tab === t ? "bg-[#DB4444] text-white" : "hover:bg-gray-100"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="p-8">{tabs[tab]}</div>
    </div>
  )
}

export default AdminDashboard