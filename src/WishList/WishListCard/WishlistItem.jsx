import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useCreateCartMutation } from "../../RTK/CartApi";
import { useRemoveFromWishlistMutation } from "../../RTK/WhishListApi";

function WishlistItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const [addToCartDB] = useCreateCartMutation();
  const [removeFromWishlistDB] = useRemoveFromWishlistMutation();

  const product = item?.product || {};

  return (
    <div
      className="bg-bg-teritiary rounded-xl p-3 border border-gray-200 dark:border-gray-800 shadow-xs hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        {/* Image Container */}
        <div className="relative w-full flex items-center justify-center h-40 sm:h-48 bg-[#F5F5F5] dark:bg-gray-800 rounded-lg overflow-hidden mb-3 group">
          {product.discount && product.discount > 0 && (
            <span className="absolute top-2 left-2 z-10 bg-[#DB4444] text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
              -{product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className="absolute top-2 left-2 z-10 bg-[#00FF66] text-black text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
              NEW
            </span>
          )}

          <button
            onClick={() => removeFromWishlistDB(product._id)}
            className="absolute top-2 right-2 rounded-full w-7 h-7 sm:w-8 sm:h-8 bg-white dark:bg-gray-900 flex items-center justify-center shadow-xs hover:bg-red-50 dark:hover:bg-red-950 transition-colors cursor-pointer z-10"
            aria-label="Remove item"
          >
            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-primary" />
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="h-28 sm:h-36 w-auto object-contain p-2"
          />

          {/* Add to Cart Overlay */}
          <button
            onClick={() => addToCartDB({ productId: product._id, quantity: 1 })}
            className={`absolute bottom-0 left-0 w-full bg-black text-white text-center cursor-pointer py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            Add To Cart
          </button>
        </div>

        {/* Title */}
        <p className="text-text-primary font-semibold text-xs sm:text-sm truncate mb-1" title={product.name}>
          {product.name}
        </p>
      </div>

      {/* Price */}
      <div className="flex gap-2 items-center text-xs sm:text-sm flex-wrap">
        <span className="text-[#DB4444] font-bold">${product.price}</span>
        {product.oldPrice && (
          <span className="text-gray-400 line-through text-xs">${product.oldPrice}</span>
        )}
      </div>
    </div>
  );
}

export default WishlistItem;