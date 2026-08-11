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
const handleOnchange=(e)=>{
  const{name,value}=e.target
  setDetails({ ...details, [name]:value })
}
const inputStyle="w-full bg-bg-secondary border border-gray-200 dark:border-gray-700 focus:border-green-400 outline-none px-4 py-2.5 rounded-lg text-text-primary placeholder-gray-400 transition-colors" 
 return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

<form onSubmit={handleAddOrUpdate} className="grid grid-cols-2 gap-4 mb-10 max-w-2xl">
  <div>
    <label className="text-sm font-medium text-gray-500 mb-1.5 block">Product name</label>
    <input placeholder="e.g. Wireless Gamepad" name="name" value={details.name} onChange={handleOnchange} className={inputStyle} required />
  </div>
  <div>
    <label className="text-sm font-medium text-gray-500 mb-1.5 block">Category</label>
    <input placeholder="e.g. Electronics" value={details.category} onChange={handleOnchange} name="category" className={inputStyle} required />
  </div>
  <div>
    <label className="text-sm font-medium text-gray-500 mb-1.5 block">Price ($)</label>
    <input placeholder="0.00" type="number" value={details.price} onChange={handleOnchange} name="price" className={inputStyle} required />
  </div>
  <div>
    <label className="text-sm font-medium text-gray-500 mb-1.5 block">Stock quantity</label>
    <input placeholder="0" type="number" value={details.stock} onChange={handleOnchange} name="stock" className={inputStyle} required />
  </div>
  <div className="col-span-2">
    <label className="text-sm font-medium text-gray-500 mb-1.5 block">Image path</label>
    <input placeholder="/Product1.png" value={details.image} onChange={handleOnchange} name="image" className={inputStyle} required />
  </div>
  <div className="col-span-2">
    <label className="text-sm font-medium text-gray-500 mb-1.5 block">Description</label>
    <textarea placeholder="Brief product description..." value={details.description} onChange={handleOnchange} name="description" rows={3} className={inputStyle} required />
  </div>
  <div className="col-span-2 flex gap-3 pt-2">
    <button type="submit" className="bg-[#DB4444] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors cursor-pointer">{editingId ? "Update product" : "Add product"}</button>
    {editingId && <button type="button" onClick={resetForm} className="border border-gray-200 dark:border-gray-700 px-6 py-2.5 rounded-lg font-medium text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">Cancel</button>}
  </div>
</form>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((elem) => (
          <div key={elem._id} className="grid gap-4 hover:-translate-y-1 transition-all duration-300 shadow-md p-2">
            <div className="relative bg-[#F5F5F5] h-40 flex items-center justify-center mb-3 rounded-md">
              {elem.isNew && <p className="w-16 py-1 px-2 bg-green-600 text-white font-semibold rounded-md absolute top-2 left-2 text-center">New</p>}
<button onClick={() => handleEdit(elem)} className="w-8 h-8 bg-white rounded-full shadow-md absolute top-2 right-2 flex items-center justify-center hover:bg-blue-50 transition-colors">
  <FaEdit className="w-3.5 h-3.5 text-blue-600 cursor-pointer" />
</button>
<button onClick={() => deleteProduct(elem._id)} className="w-8 h-8 bg-white rounded-full shadow-md absolute top-12 right-2 flex items-center justify-center hover:bg-red-50 transition-colors">
  <FaTrash className="w-3.5 h-3.5 text-red-600 cursor-pointer" />
</button>
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