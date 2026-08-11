import { useState } from "react"
import { useGetAllUsersQuery, useUpdateUserRoleMutation } from "../RTK/AdminApi"
import { FiSearch, FiShield, FiUser } from "react-icons/fi"

function getInitials(name = "") {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
}

function AdminUsers() {
  const { data, isLoading } = useGetAllUsersQuery()
  const users = data?.users ?? []
  const [updateRole] = useUpdateUserRoleMutation()
  const [search, setSearch] = useState("")

  const filtered = users.filter((u) =>
    u.fullName?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Users</h1>
        <p className="text-sm text-gray-500 mt-1">{users.length} registered accounts</p>
      </div>

      <div className="relative max-w-sm mb-6">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email"
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-bg-secondary border border-gray-200 dark:border-gray-700 text-text-primary outline-none focus:border-[#DB4444] transition-colors"
        />
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading users...</p>
      ) : (
        <div className="bg-bg-secondary border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          {filtered.map((u, i) => (
            <div
              key={u._id}
              className={`flex items-center justify-between px-5 py-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${
                i !== filtered.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DB4444] text-white flex items-center justify-center text-sm font-semibold">
                  {getInitials(u.fullName)}
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{u.fullName}</p>
                  <p className="text-sm text-gray-500">{u.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    u.role === "admin"
                      ? "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                      : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  }`}
                >
                  {u.role === "admin" ? <FiShield size={12} /> : <FiUser size={12} />}
                  {u.role}
                </span>

                <button
                  onClick={() => updateRole({ id: u._id, role: u.role === "admin" ? "user" : "admin" })}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    u.role === "admin"
                      ? "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                      : "bg-[#DB4444] text-white hover:bg-red-600"
                  }`}
                >
                  {u.role === "admin" ? "Demote" : "Make admin"}
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-10">No users match your search.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default AdminUsers