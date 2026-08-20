import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StateControler from "./StateControler";
import { FiChevronRight } from "react-icons/fi";

const Mag = ["/FirstHomePageIhmage.png", "/newArival1.png", "/newArival3.png", "/newArival3.png"];
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
];

function HomeForm() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-8 grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] gap-6">
      {/* Category Sidebar */}
      <div className="bg-bg-secondary border border-gray-200 dark:border-gray-800 rounded-xl divide-y divide-gray-200 dark:divide-gray-800 py-2 h-fit overflow-x-auto">
        <div className="flex md:flex-col min-w-max md:min-w-0">
          {categories.map((cat, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(`/shop?category=${encodeURIComponent(cat.name)}`)}
              className="relative flex items-center justify-between py-2.5 px-4 sm:px-5 cursor-pointer text-xs sm:text-sm text-text-primary hover:text-[#DB4444] transition-colors shrink-0 md:shrink"
            >
              <span>{cat.name}</span>
              {cat.hasArrow && <FiChevronRight className="hidden md:block text-xs text-gray-400 ml-2" />}

              {cat.hasArrow && hoveredIndex === i && (
                <div className="hidden md:block absolute left-full top-0 bg-bg-primary border border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800 shadow-xl rounded-lg w-48 py-2 z-30">
                  {cat.submenu.map((item, j) => (
                    <div
                      key={j}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/shop?category=${encodeURIComponent(item)}`);
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
      </div>

      {/* Hero Banner Carousel */}
      <div className="relative bg-black text-white flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 lg:px-16 py-8 sm:py-12 rounded-xl overflow-hidden min-h-[300px] sm:min-h-[360px]">
        <div className="relative z-10 max-w-xs sm:max-w-sm text-center sm:text-left mb-6 sm:mb-0">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
            <span className="text-xs sm:text-sm text-gray-300 tracking-wide">iPhone 14 Series</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Up to 10% <br className="hidden sm:block" /> off Voucher
          </h1>
          <button
            onClick={() => navigate("/shop")}
            className="inline-flex items-center gap-2 border-b border-white pb-1 hover:opacity-80 transition-opacity text-sm font-medium cursor-pointer"
          >
            Shop Now <span>→</span>
          </button>
        </div>

        <div className="relative w-full sm:w-1/2 h-40 sm:h-64 flex items-center justify-center z-0">
          <img
            src={Mag[activeSlide]}
            alt="Hero Banner Slide"
            className="h-full max-h-full object-contain"
          />
        </div>

        <StateControler Mag={Mag} setActiveSlide={setActiveSlide} activeSlide={activeSlide} />
      </div>
    </div>
  );
}

export default HomeForm;