import { useState } from "react"
import StateControler from "./StateControler"
import { FiChevronRight, FiChevronLeft} from "react-icons/fi"
const Mag=["/FirstHomePageIhmage.png","/About/TeamImagve/Tom.png","/About/TeamImagve/Emma.png"]
const categories = [
  { name: "Woman's Fashion", hasArrow: true, submenu: ["Dresses", "Tops", "Shoes"] },
  { name: "Men's Fashion", hasArrow: true, submenu: ["Shirts", "Pants", "Shoes"] },
  { name: "Electronics", hasArrow: false },
  { name: "Home & Lifestyle", hasArrow: false },
  { name: "Medicine", hasArrow: false },
  { name: "Sports & Outdoor", hasArrow: false },
  { name: "Baby's & Toys", hasArrow: false },
  { name: "Groceries & Pets", hasArrow: false },
  { name: "Health & Beauty", hasArrow: false },
]

function HomeForm() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <div className="grid md:grid-cols-[250px_1fr] gap-8 rounded-md overflow-hidden mx-10 my-8">
       <div className="divide-y divide-text-secondary py-2">
        {categories.map((cat, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative flex items-center justify-between py-2.5 px-5 hover:text-red-900 cursor-pointer text-sm"
          >
            <span>{cat.name}</span>
            {cat.hasArrow && <FiChevronRight className="text-xs" />}

            {cat.hasArrow && hoveredIndex === i && (
              <div className="absolute left-full top-0 bg-white divide-y divide-gray-200 shadow-md w-48 py-2 z-10">
                {cat.submenu.map((item, j) => (
                  <div key={j} className="px-4 py-2 hover:bg-gray-100 hover:text-red-500">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

       <div className="relative bg-black text-white flex items-center px-16 py-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl"></span>
            <span className="text-sm">iPhone 14 Series</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Up to 10% <br /> off Voucher
          </h1>
          <button className="flex items-center gap-2 border-b pb-1">
            Shop Now <span>→</span>
          </button>
        </div>

        <img
          src={Mag[activeSlide]}
          alt="iPhone 14"
 className="absolute right-10 top-1/2 -translate-y-1/2 h-[80%] object-contain z-10"        />
<StateControler Mag={Mag} setActiveSlide={setActiveSlide} activeSlide={activeSlide}/>


      </div>
    </div>
  )
}

export default HomeForm