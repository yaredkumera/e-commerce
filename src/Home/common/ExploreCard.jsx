import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCreateCartMutation } from "../../RTK/CartApi";
import {
  useGetWhishListQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} from "../../RTK/WhishListApi";

function ExploreCard({ data: products = [] }) {
  const { data: wishlistData } = useGetWhishListQuery();
  const wishList = wishlistData?.wishlist ?? [];

  const [addToCartDB] = useCreateCartMutation();
  const [addToWishlistDB] = useAddToWishlistMutation();
  const [removeFromWishlistDB] = useRemoveFromWishlistMutation();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 my-4 w-full">
      {products.map((elem, i) => (
        <div
          key={elem._id}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="rounded-xl p-3 bg-bg-teritiary border border-gray-200 dark:border-gray-800 hover:-translate-y-1 transition-all duration-200 shadow-xs flex flex-col justify-between"
        >
          <div>
            {/* Image Container */}
            <div className="relative bg-[#F5F5F5] dark:bg-gray-800 h-40 sm:h-48 flex items-center justify-center mb-3 rounded-lg overflow-hidden group">
              {elem.isNew && (
                <p className="px-2 py-0.5 bg-green-600 text-white font-semibold rounded absolute top-2 left-2 text-[10px] z-10">
                  NEW
                </p>
              )}

              <button
                onClick={() => {
                  const inWishlist = wishList.find((e) => elem._id === e.product._id);
                  inWishlist
                    ? removeFromWishlistDB(elem._id)
                    : addToWishlistDB({ productId: elem._id });
                }}
                className="absolute top-2 right-2 flex items-center justify-center z-10 p-1.5 bg-white dark:bg-gray-900 rounded-full shadow-xs cursor-pointer"
                aria-label="Wishlist"
              >
                {wishList.find((e) => elem._id === e.product._id) ? (
                  <FaHeart className="text-[#DB4444] text-xs sm:text-sm" />
                ) : (
                  <FaRegHeart className="text-gray-400 text-xs sm:text-sm" />
                )}
              </button>

              <button
                className="w-7 h-7 bg-white dark:bg-gray-900 rounded-full shadow-xs absolute top-10 right-2 text-xs flex items-center justify-center text-gray-600 dark:text-gray-300 z-10"
                aria-label="Quick view"
              >
                👁
              </button>

              <img
                src={elem.image}
                alt={elem.name}
                className="h-28 sm:h-36 w-auto object-contain p-2"
              />

              {/* Slide-Up Add To Cart */}
              <button
                onClick={() => addToCartDB({ productId: elem._id })}
                className={`absolute bottom-0 left-0 w-full bg-black text-white text-center cursor-pointer py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                  hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                Add To Cart
              </button>
            </div>

            {/* Product Title */}
            <p className="font-semibold text-xs sm:text-sm text-text-primary truncate mb-1" title={elem.name}>
              {elem.name}
            </p>
          </div>

          <div>
            {/* Price & Rating */}
            <div className="flex items-center gap-2 text-xs sm:text-sm mb-1 flex-wrap">
              <span className="text-[#DB4444] font-bold">${elem.price}</span>
              <span className="text-yellow-400 text-xs flex items-center gap-1">
                {"★".repeat(elem.rating)}
                {"☆".repeat(Math.max(0, 5 - elem.rating))}
              </span>
              <span className="text-gray-400 text-[10px] sm:text-xs">({elem.reviews})</span>
            </div>

            {/* Color Swatches */}
            {elem.colors && elem.colors.length > 0 && (
              <div className="flex gap-1.5 pt-1">
                {elem.colors.map((color, _idx) => (
                  <span
                    key={_idx}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-gray-300 dark:border-gray-600"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreCard;