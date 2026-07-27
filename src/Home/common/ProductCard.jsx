import { useState } from "react"

function ProductCard({ data,hide }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mx-10 my-5 mb-8 ">
   
      {data.map((p, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`relative hover:opacity-50 rounded-md p-3  transition-colors duration-300 ease-out-in`}
        >
          

          <div className="relative bg-[#F5F5F5] h-40 flex items-center justify-center mb-3">
          {!hide&& <span className="absolute top-2 left-2 z-20 bg-[#DB4444] text-white text-xs font-semibold px-2 py-1 rounded">
            -{p.discount}%
          </span>}
            <button className="w-7 h-7 bg-white rounded-full shadow absolute top-2 right-2 text-sm">♡</button>
            <button className="w-7 h-7 bg-white rounded-full shadow absolute top-11 right-2 text-sm">👁</button>
            <img src={p.image} alt={p.name} className="h-30 w-30 object-contain" />
            {hoveredIndex === i &&!hide &&(
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 bg-black text-white text-center rounded-md hover:opacity-90 py-3 cursor-pointer text-sm">
  Add To Cart 
</div> 
            )}
          </div>
          <p className="text-sm mb-1">{p.name}</p>
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