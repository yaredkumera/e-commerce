import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useCreateCartMutation } from "../../RTK/CartApi";
import { useRemoveFromWishlistMutation } from "../../RTK/whishListApi";

function WishlistItem({ item }) {
  const [hovered, setHovered] = useState(false)
  const [addToCartDB] = useCreateCartMutation()
  const [removeFromWishlistDB] = useRemoveFromWishlistMutation()

  const product = item.product

  return (
    <div className="bg-bg-secondary rounded-md shadow-md relative grid p-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full flex items-center justify-center h-48 bg-[#F5F5F5] rounded-md">
        {product.discount &&product.discount > 0 && (
          <span className="absolute top-2 left-2 z-20 bg-[#DB4444] text-white text-xs font-semibold px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-2 left-2 z-20 bg-[#00FF66] text-[#FAFAFA] text-xs font-semibold px-2 py-1 rounded">
            NEW
          </span>
        )}
        <button
          onClick={() => removeFromWishlistDB(product._id)}
          className="absolute top-2 right-2 rounded-full w-7 h-7 bg-white flex items-center justify-center hover:cursor-pointer hover:bg-red-300"
        >
          <Trash2 className="w-4 h-4 text-black" />
        </button>
        <img src={product.image} alt={product.name} className="h-30 w-30 object-contain" />
        {hovered && (
          <div
            onClick={() => addToCartDB({ productId: product._id, quantity: 1 })}
            className="absolute bottom-0 left-0 w-full bg-black text-white text-center rounded-md hover:opacity-90 py-2 cursor-pointer text-sm"
          >
            Add To Cart
          </div>
        )}
      </div>
      <p className="text-text-primary font-semibold">{product.name}</p>
      <div className="flex gap-2 items-center mb-1">
        <span className="text-red-500 font-semibold">${product.price}</span>
        {product.oldPrice && <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>}
      </div>
    </div>
  );
}

export default WishlistItem;