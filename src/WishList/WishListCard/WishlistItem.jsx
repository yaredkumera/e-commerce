import { Trash2 } from "lucide-react";
import { removeFromwishlist } from "./WishListSlice";
import { useState } from "react";
import { useCreateCartMutation } from "../../RTK/CartApi";

function WishlistItem({ item,index, cartdata, dispatch }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
const[addToCartDB]=useCreateCartMutation()
  return (
    <div className="bg-bg-secondary rounded-md shadow-md relative grid p-2"
    onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="relative w-full flex items-center justify-center h-48 bg-[#F5F5F5] rounded-md">
        {item.discount && (
          <span className="absolute top-2 left-2 z-20 bg-[#DB4444] text-white text-xs font-semibold px-2 py-1 rounded">
            -{item.discount}%
          </span>
        )}
        {item.isNew && (
          <span className="absolute top-2 left-2 z-20 bg-[#00FF66] text-[#FAFAFA] text-xs font-semibold px-2 py-1 rounded">
            NEW
          </span>
        )}
        <button
          onClick={() => dispatch(removeFromwishlist(item.id))}
          className="absolute top-2 right-2 rounded-full w-7 h-7 bg-white flex items-center justify-center hover:cursor-pointer hover:bg-red-300"
        >
          <Trash2 className="w-4 h-4 text-black" />
        </button>
        <img src={item.image} alt={item.name} className="h-30 w-30 object-contain" />
         {hoveredIndex === index &&(<div
          onClick={
addToCartDB(item)
            
          }
          className="absolute bottom-0 left-0 w-full bg-black text-white text-center rounded-md hover:opacity-90 py-2 cursor-pointer text-sm"
        >
          Add To Cart
        </div>)}
      </div>
      <p className="text-text-primary font-semibold">{item.name}</p>
      <div className="flex gap-2 items-center mb-1">
        <span className="text-red-500 font-semibold">${item.price}</span>
        {item.oldPrice && <span className="text-gray-400 line-through text-sm">${item.oldPrice}</span>}
      </div>
    </div>
  );
}

export default WishlistItem;