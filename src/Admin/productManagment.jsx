import { useGetProductQuery, useUpdateProductMutation, useDeleteProductMutation, useCreateProductMutation } from "../RTK/ProductApi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";

function ProductManagment() {
  const { data } = useGetProductQuery();
  const products = data?.products ?? [];

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [editingId, setEditingId] = useState(null);
  const [details, setDetails] = useState({ name: "", description: "", category: "", price: "", rating: "", stock: "", image: "" });

  const resetForm = () => {
    setDetails({ name: "", description: "", category: "", price: "", rating: "", stock: "", image: "" });
    setEditingId(null);
  };

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    const payload = { ...details, price: Number(details.price), stock: Number(details.stock), rating: Number(details.rating) || 0 };
    if (editingId) {
      await updateProduct({ _id: editingId, ...payload });
    } else {
      await createProduct(payload);
    }
    resetForm();
  };

  const handleEdit = (p) => {
    setEditingId(p._id);
    setDetails({ name: p.name, description: p.description, category: p.category, price: p.price, rating: p.rating, stock: p.stock, image: p.image });
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const inputStyle = "w-full bg-bg-secondary border border-gray-200 dark:border-gray-800 focus:border-emerald-500 outline-none px-3.5 py-2 rounded-lg text-xs sm:text-sm text-text-primary placeholder-gray-400 transition-colors";

  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Products</h1>

      {/* Responsive Form */}
      <form onSubmit={handleAddOrUpdate} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl bg-bg-secondary p-4 sm:p-6 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
        <div>
          <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">Product name</label>
          <input placeholder="e.g. Wireless Gamepad" name="name" value={details.name} onChange={handleOnchange} className={inputStyle} required />
        </div>
        <div>
          <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">Category</label>
          <input placeholder="e.g. Electronics" value={details.category} onChange={handleOnchange} name="category" className={inputStyle} required />
        </div>
        <div>
          <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">Price ($)</label>
          <input placeholder="0.00" type="number" value={details.price} onChange={handleOnchange} name="price" className={inputStyle} required />
        </div>
        <div>
          <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">Stock quantity</label>
          <input placeholder="0" type="number" value={details.stock} onChange={handleOnchange} name="stock" className={inputStyle} required />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">Image path</label>
          <input placeholder="/Product1.png" value={details.image} onChange={handleOnchange} name="image" className={inputStyle} required />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">Description</label>
          <textarea placeholder="Brief product description..." value={details.description} onChange={handleOnchange} name="description" rows={3} className={inputStyle} required />
        </div>
        <div className="sm:col-span-2 flex gap-3 pt-2">
          <button type="submit" className="bg-[#DB4444] text-white px-5 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-red-600 transition-colors cursor-pointer">
            {editingId ? "Update product" : "Add product"}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="border border-gray-200 dark:border-gray-800 px-5 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((elem) => (
          <div key={elem._id} className="bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-xl p-3 hover:-translate-y-0.5 transition-all duration-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative bg-[#F5F5F5] dark:bg-gray-800 h-40 flex items-center justify-center mb-3 rounded-lg overflow-hidden">
                {elem.isNew && (
                  <p className="px-2 py-0.5 bg-green-600 text-white text-[10px] font-semibold rounded absolute top-2 left-2">
                    New
                  </p>
                )}
                <button onClick={() => handleEdit(elem)} className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full shadow-md absolute top-2 right-2 flex items-center justify-center hover:bg-blue-50 transition-colors" aria-label="Edit product">
                  <FaEdit className="w-3.5 h-3.5 text-blue-600" />
                </button>
                <button onClick={() => deleteProduct(elem._id)} className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full shadow-md absolute top-11 right-2 flex items-center justify-center hover:bg-red-50 transition-colors" aria-label="Delete product">
                  <FaTrash className="w-3.5 h-3.5 text-red-600" />
                </button>
                <img src={elem.image} alt={elem.name} className="w-28 h-28 object-contain" />
              </div>
              <p className="font-semibold text-xs sm:text-sm text-text-primary truncate">{elem.name}</p>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 dark:border-gray-800 text-xs sm:text-sm">
              <span className="text-[#DB4444] font-bold">${elem.price}</span>
              <span className="text-gray-500">Stock: {elem.stock}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductManagment;