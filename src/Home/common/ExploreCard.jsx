import { useState } from "react"

function ExploreCard({data}) {
    const [hoveredIndex,setHoveredIndex]=useState(null)
  return (
       <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mx-12 my-5 mb-8 ">

       {
        data.map((elem,i)=>(
<div
   onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
className="grid gap-4 hover:-translate-y-1 hover:opacity-70 transition-all duration-300 shadow-md p-2">
    <div className="relative bg-[#F5F5F5] h-40 flex items-center justify-center mb-3 rounded-md">
    {elem.isNew&&<p className="w-16 py-1 px-2 bg-green-600 text-white font-semibold rounded-md absolute top-2 left-2 text-center hover:opacity-50 cursor-pointer">New</p>}
                <button className="w-7 h-7 bg-white rounded-full shadow absolute top-2 right-2 text-sm">♡</button>
            <button className="w-7 h-7 bg-white rounded-full shadow absolute top-11 right-2 text-sm">👁</button>
    <img src={elem.image} alt={elem.image} className="w-36 h-30 object-contain" />
    {
        hoveredIndex===i&&<button className=" absolute bottom-0 left-0 w-full text-center bg-black text-white font-semibold cursor-pointer py-2 rounded-md ">
            Add To Cart
        </button>
    }
</div>
<p className="font-semibold">{elem.name}</p>
<p className="flex gap-2 ">
    <span className="text-red-500">{'$'}{elem.price}</span>
    <span
    className="text-yellow-400 text-sm">
            {"★".repeat(elem.rating)}
            {"☆".repeat(5 - elem.rating)}{" "}
            </span>
    <span className="text-gray-500">({elem.reviews})</span>
</p>
{
  elem.colors && elem.colors.length > 0 && (
    <div className="flex gap-2">
      {elem.colors.map((color, idx) => (
        <button
          key={idx}
          className="w-5 h-5 rounded-full border border-gray-200"
          style={{ backgroundColor: color }}
        ></button>
      ))}
    </div>
  )
}
</div>
        ))
       } 
    </div>
  )
}

export default ExploreCard