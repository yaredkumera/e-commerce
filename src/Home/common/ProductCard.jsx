import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addTowishlist ,removeFromwishlist} from "../../WishList/WishListCard/WishListSlice";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../Carts/CartsDetal/cartsSlice";
function ProductCard({ data,hide,heart }) {
  const dispatch=useDispatch()
  const whishList=useSelector(state=>state.wishlist.items)
  const cartdata=useSelector(state=>state.cartslice.items)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mx-10 my-5 mb-8 ">
   
      {data.map((p, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`relative  rounded-md p-3  transition-colors duration-300 ease-out-in bg-bg-teritiary shadow-md`}
        >
          

          <div className="relative bg-[#F5F5F5] h-40 flex items-center justify-center mb-3  rounded-md">
          {!hide&& <span className="absolute top-2 left-2 z-20 bg-[#DB4444] text-white text-xs font-semibold px-2 py-1 rounded">
            -{p.discount}%
          </span>}

{!heart && (
  <button
    onClick={() => {
      whishList.find(e => p.id === e.id)
        ? dispatch(removeFromwishlist(p.id))
        : dispatch(addTowishlist(p));
    }}
    className="absolute top-2 right-2 flex items-center justify-center"
  >
    {whishList.find(e => p.id === e.id) ? (
      <FaHeart size={24} className="text-red-400 cursor-pointer" />
    ) : (
      <FaRegHeart size={24} className="text-blue-400 cursor-pointer" />
    )}
  </button>
)}
            <button className={`w-7 h-7 bg-white rounded-full shadow absolute ${heart?"top-2":"top-11"} right-2 text-sm`}>👁</button>
            <img src={p.image} alt={p.name} className="h-30 w-30 object-contain" />
           {hoveredIndex === i &&(
            <div 
            onClick={()=>{
              cartdata.find(e=>e.id===p.id)?"":dispatch(addToCart(p))
            }}
            className="absolute bottom-0 left-0 w-full bg-black text-white text-center rounded-md hover:opacity-90 cursor-pointer py-2 text-sm">
  Add To Cart  
</div> 
            )}
          </div>
          <p className="text-text-primary font-semibold mb-1">{p.name}</p>
          <div className="flex gap-2 items-center mb-1">
            <span className="text-red-500 font-semibold">${p.price}</span>
            <span className="text-gray-400 line-through text-sm">${p.oldPrice}</span>
          </div>
          <p className="text-yellow-400 text-sm">
            {"★".repeat(p.rating)}
            {"☆".repeat(5 - p.rating)}{" "}
            <span className="text-gray-400">({p.reviews})</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default ProductCard