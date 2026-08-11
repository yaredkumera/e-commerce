import { useState } from "react"
import { useNavigate } from "react-router-dom"
import StateControler from "./StateControler"
import { FiChevronRight } from "react-icons/fi"

const Mag = ["/FirstHomePageIhmage.png", "/About/TeamImagve/Tom.png", "/About/TeamImagve/Emma.png"]
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
  const navigate = useNavigate()
  const [activeSlide, setActiveSlide] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="grid md:grid-cols-[260px_1fr] gap-6 mx-10 my-8">
      <div className="bg-bg-secondary border border-gray-200 dark:border-gray-700 rounded-xl divide-y divide-gray-200 dark:divide-gray-700 py-2 h-fit">
        {categories.map((cat, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => navigate(`/shop?category=${encodeURIComponent(cat.name)}`)}
            className="relative flex items-center justify-between py-2.5 px-5 cursor-pointer text-sm text-text-primary hover:text-[#DB4444] transition-colors"
          >
            <span>{cat.name}</span>
            {cat.hasArrow && <FiChevronRight className="text-xs text-gray-400" />}

            {cat.hasArrow && hoveredIndex === i && (
              <div className="absolute left-full top-0 bg-bg-primary border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700 shadow-lg rounded-lg w-48 py-2 z-10">
                {cat.submenu.map((item, j) => (
                  <div
                    key={j}
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/shop?category=${encodeURIComponent(item)}`)
                    }}
                    className="px-4 py-2 text-sm text-text-primary hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#DB4444] transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative bg-black text-white flex items-center px-16 py-10 rounded-xl overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-gray-300">iPhone 14 Series</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Up to 10% <br /> off Voucher
          </h1>
          <button className="flex items-center gap-2 border-b border-white pb-1 hover:opacity-80 transition-opacity">
            Shop Now <span>→</span>
          </button>
        </div>

        <img
          src={Mag[activeSlide]}
          alt="iPhone 14"
          className="absolute right-10 top-1/2 -translate-y-1/2 h-[80%] object-contain z-0"
        />
        <StateControler Mag={Mag} setActiveSlide={setActiveSlide} activeSlide={activeSlide} />
      </div>
    </div>
  )
}

export default HomeForm