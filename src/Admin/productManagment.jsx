import { useGetProductQuery, useUpdateProductMutation, useDeleteProductMutation, useCreateProductMutation } from "../RTK/ProductApi";
import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
import { useState } from "react";

function ProductManagment() {
  const { data } = useGetProductQuery();
  const products = data?.products ?? [];

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [details, setDetails] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    rating: "",
    stock: "",
    image: "",
  });

  const resetForm = () => {
    setDetails({ name: "", description: "", category: "", price: "", rating: "", stock: "", image: "" });
    setEditingId(null);
    setIsOpen(false);
  };

  const handleOpenAddModal = () => {
    setEditingId(null);
    setDetails({ name: "", description: "", category: "", price: "", rating: "", stock: "", image: "" });
    setIsOpen(true);
  };

  const handleEdit = (p) => {
    setEditingId(p._id);
    setDetails({
      name: p.name,
      description: p.description,
      category: p.category,
      price: p.price,
      rating: p.rating,
      stock: p.stock,
      image: p.image,
    });
    setIsOpen(true);
  };

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    const payload = {
      ...details,
      price: Number(details.price),
      stock: Number(details.stock),
      rating: Number(details.rating) || 0,
    };
    if (editingId) {
      await updateProduct({ _id: editingId, ...payload });
    } else {
      await createProduct(payload);
    }
    resetForm();
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const inputStyle =
    "w-full bg-bg-secondary border border-gray-200 dark:border-gray-800 focus:border-[#DB4444] outline-none px-3.5 py-2 rounded-lg text-xs sm:text-sm text-text-primary placeholder-gray-400 transition-colors";

  return (
    <div className="w-full max-w-full">
      {/* Header & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Products</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage store items, edit details, or create new listings
          </p>
        </div>
        <button
          onClick={handleOpenAddModal}
          className="flex items-center justify-center gap-2 bg-[#DB4444] text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-red-600 transition-colors shadow-sm cursor-pointer self-start sm:self-auto"
        >
          <FaPlus size={14} />
          Add Product
        </button>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {products.map((elem) => (
          <div
            key={elem._id}
            className="bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-xl p-3 hover:-translate-y-0.5 transition-all duration-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative bg-[#F5F5F5] dark:bg-gray-800 h-40 flex items-center justify-center mb-3 rounded-lg overflow-hidden">
                {elem.isNew && (
                  <p className="px-2 py-0.5 bg-green-600 text-white text-[10px] font-semibold rounded absolute top-2 left-2">
                    New
                  </p>
                )}
                {/* Edit Anchor Button */}
                <a
                  href="#edit-form"
                  onClick={(e) => {
                    handleEdit(elem);
                  }}
                  className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full shadow-md absolute top-2 right-2 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  aria-label="Edit product"
                >
                  <FaEdit className="w-3.5 h-3.5 text-blue-600" />
                </a>
                <button
                  onClick={() => deleteProduct(elem._id)}
                  className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full shadow-md absolute top-11 right-2 flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-950 transition-colors cursor-pointer"
                  aria-label="Delete product"
                >
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

      {/* POPUP MODAL OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
          {/* Modal Card */}
          <div
            id="edit-form"
            className="bg-bg-secondary w-full max-w-xl rounded-xl border border-gray-200 dark:border-gray-800 shadow-2xl p-5 sm:p-6 max-h-[90vh] overflow-y-auto relative"
          >
            {/* Header & Close Button */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-base sm:text-lg font-bold text-text-primary">
                {editingId ? "Edit Product Details" : "Add New Product"}
              </h2>
              <button
                onClick={resetForm}
                className="p-1.5 rounded-lg text-gray-400 hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleAddOrUpdate} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">
                  Product name
                </label>
                <input
                  placeholder="e.g. Wireless Gamepad"
                  name="name"
                  value={details.name}
                  onChange={handleOnchange}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">
                  Category
                </label>
                <input
                  placeholder="e.g. Electronics"
                  value={details.category}
                  onChange={handleOnchange}
                  name="category"
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">
                  Price ($)
                </label>
                <input
                  placeholder="0.00"
                  type="number"
                  value={details.price}
                  onChange={handleOnchange}
                  name="price"
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">
                  Stock quantity
                </label>
                <input
                  placeholder="0"
                  type="number"
                  value={details.stock}
                  onChange={handleOnchange}
                  name="stock"
                  className={inputStyle}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">
                  Image path
                </label>
                <input
                  placeholder="/Product1.png"
                  value={details.image}
                  onChange={handleOnchange}
                  name="image"
                  className={inputStyle}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs sm:text-sm font-medium text-gray-500 mb-1 block">
                  Description
                </label>
                <textarea
                  placeholder="Brief product description..."
                  value={details.description}
                  onChange={handleOnchange}
                  name="description"
                  rows={3}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="sm:col-span-2 flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white px-5 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-red-600 transition-colors cursor-pointer"
                >
                  {editingId ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductManagment;