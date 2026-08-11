import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function StateControler({ Mag, activeSlide, setActiveSlide }) {
  return (
    <>
      <button
        onClick={() => setActiveSlide(activeSlide === 0 ? Mag.length - 1 : (t) => t - 1)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-1.5 sm:p-2 z-20 transition-colors cursor-pointer"
        aria-label="Previous Slide"
      >
        <FiChevronLeft className="text-white text-lg sm:text-xl" />
      </button>

      <button
        onClick={() => setActiveSlide(activeSlide === Mag.length - 1 ? 0 : (t) => t + 1)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-1.5 sm:p-2 z-20 transition-colors cursor-pointer"
        aria-label="Next Slide"
      >
        <FiChevronRight className="text-white text-lg sm:text-xl" />
      </button>

      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {Mag.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
              i === activeSlide ? "bg-[#DB4444] w-5 sm:w-6" : "bg-white/40 w-1.5 sm:w-2 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default StateControler;