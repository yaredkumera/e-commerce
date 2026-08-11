import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCreateCartMutation } from "../../RTK/CartApi";
import {
  useGetWhishListQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} from "../../RTK/WhishListApi";

function ProductCard({ data = [], hide, heart }) {
  const { data: wishlistData } = useGetWhishListQuery();
  const wishList = wishlistData?.wishlist ?? [];

  const [addToWishlistDB] = useAddToWishlistMutation();
  const [removeFromWishlistDB] = useRemoveFromWishlistMutation();
  const [addToCartDB] = useCreateCartMutation();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 my-4 w-full">
      {data.map((p, i) => (
        <div
          key={p._id}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative rounded-xl p-3 bg-bg-teritiary border border-gray-200 dark:border-gray-800 shadow-xs hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
        >
          <div>
            {/* Image Container with Fixed Heights and Overflow Handling */}
            <div className="relative bg-[#F5F5F5] dark:bg-gray-800 h-40 sm:h-48 flex items-center justify-center mb-3 rounded-lg overflow-hidden group">
              {!hide && (
                <span className="absolute top-2 left-2 z-10 bg-[#DB4444] text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                  -{p.discount}%
                </span>
              )}

              {!heart && (
                <button
                  onClick={() => {
                    const inWishlist = wishList.find((e) => p._id === e.product._id);
                    inWishlist
                      ? removeFromWishlistDB(p._id)
                      : addToWishlistDB({ productId: p._id });
                  }}
                  className="absolute top-2 right-2 flex items-center justify-center z-10 p-1.5 bg-white dark:bg-gray-900 rounded-full shadow-xs cursor-pointer"
                  aria-label="Wishlist"
                >
                  {wishList.find((e) => p._id === e.product._id) ? (
                    <FaHeart className="text-[#DB4444] text-xs sm:text-sm" />
                  ) : (
                    <FaRegHeart className="text-gray-400 text-xs sm:text-sm" />
                  )}
                </button>
              )}

              <button
                className={`w-7 h-7 bg-white dark:bg-gray-900 rounded-full shadow-xs absolute ${
                  heart ? "top-2" : "top-10"
                } right-2 text-xs flex items-center justify-center text-gray-600 dark:text-gray-300 z-10`}
                aria-label="Quick view"
              >
                👁
              </button>

              <img
                src={p.image}
                alt={p.name}
                className="h-28 sm:h-36 w-auto object-contain p-2"
              />

              {/* Hover / Touch Add To Cart Button */}
              <button
                onClick={() => addToCartDB({ productId: p._id })}
                className={`absolute bottom-0 left-0 w-full bg-black text-white text-center cursor-pointer py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                  hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                Add To Cart
              </button>
            </div>

            {/* Title */}
            <p className="text-text-primary font-semibold text-xs sm:text-sm truncate mb-1" title={p.name}>
              {p.name}
            </p>
          </div>

          <div>
            {/* Price Row */}
            <div className="flex gap-2 items-center mb-1 text-xs sm:text-sm flex-wrap">
              <span className="text-[#DB4444] font-bold">${p.price}</span>
              {p.oldPrice && (
                <span className="text-gray-400 line-through text-xs">${p.oldPrice}</span>
              )}
            </div>

            {/* Ratings */}
            <p className="text-yellow-400 text-xs flex items-center gap-1">
              <span>
                {"★".repeat(p.rating)}
                {"☆".repeat(Math.max(0, 5 - p.rating))}
              </span>
              <span className="text-gray-400 text-[10px] sm:text-xs">({p.reviews})</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;