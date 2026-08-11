import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

function StateControler({ Mag, activeSlide, setActiveSlide }) {
  return (
    <>
      <button
        onClick={() => setActiveSlide(activeSlide === 0 ? Mag.length - 1 : (t) => t - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 z-20 transition-colors"
      >
        <FiChevronLeft className="text-white text-xl" />
      </button>

      <button
        onClick={() => setActiveSlide(activeSlide === Mag.length - 1 ? 0 : (t) => t + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 z-20 transition-colors"
      >
        <FiChevronRight className="text-white text-xl" />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {Mag.map((ee, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === activeSlide ? "bg-[#DB4444] w-6" : "bg-white/40 w-2 hover:bg-white/60"
            }`}
          ></button>
        ))}
      </div>
    </>
  )
}

export default StateControler