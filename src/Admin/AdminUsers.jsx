import { useGetAllUsersQuery, useUpdateUserRoleMutation } from "../RTK/AdminApi"

function AdminUsers() {
  const { data, isLoading } = useGetAllUsersQuery()
  const users = data?.users ?? []
  const [updateRole] = useUpdateUserRoleMutation()

  if (isLoading) return <p>Loading users...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b"><th className="py-2">Name</th><th>Email</th><th>Role</th><th></th></tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-b">
              <td className="py-2">{u.fullName}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button
                  onClick={() => updateRole({ id: u._id, role: u.role === "admin" ? "user" : "admin" })}
                  className="text-blue-600 underline"
                >
                  {u.role === "admin" ? "Demote" : "Make Admin"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminUsers