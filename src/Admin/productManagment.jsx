import { useGetProductQuery, useUpdateProductMutation, useDeleteProductMutation, useCreateProductMutation } from "../RTK/ProductApi"
import { FaEdit, FaTrash } from "react-icons/fa"
import { useState } from "react"

function ProductManagment() {
  const { data } = useGetProductQuery()
  const products = data?.products ?? []

  const [createProduct] = useCreateProductMutation()
  const [updateProduct] = useUpdateProductMutation()
  const [deleteProduct] = useDeleteProductMutation()

  const [editingId, setEditingId] = useState(null)
  const [details, setDetails] = useState({ name: "", description: "", category: "", price: "", rating: "", stock: "", image: "" })

  const resetForm = () => {
    setDetails({ name: "", description: "", category: "", price: "", rating: "", stock: "", image: "" })
    setEditingId(null)
  }

  const handleAddOrUpdate = async (e) => {
    e.preventDefault()
    const payload = { ...details, price: Number(details.price), stock: Number(details.stock), rating: Number(details.rating) || 0 }
    if (editingId) {
      await updateProduct({ _id: editingId, ...payload })
    } else {
      await createProduct(payload)
    }
    resetForm()
  }

  const handleEdit = (p) => {
    setEditingId(p._id)
    setDetails({ name: p.name, description: p.description, category: p.category, price: p.price, rating: p.rating, stock: p.stock, image: p.image })
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <form onSubmit={handleAddOrUpdate} className="grid grid-cols-2 gap-3 mb-10 max-w-2xl">
        <input placeholder="Name" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} className="border p-2 rounded" required />
        <input placeholder="Category" value={details.category} onChange={(e) => setDetails({ ...details, category: e.target.value })} className="border p-2 rounded" required />
        <input placeholder="Price" type="number" value={details.price} onChange={(e) => setDetails({ ...details, price: e.target.value })} className="border p-2 rounded" required />
        <input placeholder="Stock" type="number" value={details.stock} onChange={(e) => setDetails({ ...details, stock: e.target.value })} className="border p-2 rounded" required />
        <input placeholder="Image path" value={details.image} onChange={(e) => setDetails({ ...details, image: e.target.value })} className="border p-2 rounded col-span-2" required />
        <textarea placeholder="Description" value={details.description} onChange={(e) => setDetails({ ...details, description: e.target.value })} className="border p-2 rounded col-span-2" required />
        <div className="col-span-2 flex gap-3">
          <button type="submit" className="bg-[#DB4444] text-white px-6 py-2 rounded">{editingId ? "Update" : "Add Product"}</button>
          {editingId && <button type="button" onClick={resetForm} className="border px-6 py-2 rounded">Cancel</button>}
        </div>
      </form>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((elem) => (
          <div key={elem._id} className="grid gap-4 hover:-translate-y-1 transition-all duration-300 shadow-md p-2">
            <div className="relative bg-[#F5F5F5] h-40 flex items-center justify-center mb-3 rounded-md">
              {elem.isNew && <p className="w-16 py-1 px-2 bg-green-600 text-white font-semibold rounded-md absolute top-2 left-2 text-center">New</p>}
              <button onClick={() => handleEdit(elem)} className="w-7 h-7 bg-white rounded-full shadow absolute top-2 right-2 text-sm"><FaEdit className="w-4 h-4" /></button>
              <button onClick={() => deleteProduct(elem._id)} className="w-7 h-7 bg-white rounded-full shadow absolute top-11 right-2 text-sm"><FaTrash className="w-4 h-4" /></button>
              <img src={elem.image} alt={elem.name} className="w-36 h-30 object-contain" />
            </div>
            <p className="font-semibold">{elem.name}</p>
            <p className="flex gap-2">
              <span className="text-red-500">${elem.price}</span>
              <span className="text-gray-500">stock: {elem.stock}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductManagment