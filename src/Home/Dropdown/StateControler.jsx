import { FiChevronRight, FiChevronLeft} from "react-icons/fi"

function StateControler({Mag, activeSlide, setActiveSlide}) {
  return (
   <div> 
    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 z-20">
  <button
    onClick={() => {
      if (activeSlide === 0) {
        setActiveSlide(Mag.length - 1)
      } else {
        setActiveSlide((t) => t - 1)
      }
    }}
    className="bg-white/20 hover:bg-white/40 rounded-full p-2"
  >
    <FiChevronLeft className="text-white text-xl" />
  </button>

  <button
    onClick={() => {
      if (activeSlide === Mag.length - 1) {
        setActiveSlide(0)
      } else {
        setActiveSlide((t) => t + 1)
      }
    }}
    className="bg-blue-600/20 hover:bg-blue-600/40 rounded-full p-2"
  >
    <FiChevronRight className="text-white text-xl" />
  </button>
</div>
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

          {
            Mag.map((ee, i)=>(
                 <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeSlide ? "bg-red-500" : "bg-gray-500"
              }`}
            ></button>
            ))
          }
        </div>
        </div>
  )
}
export default StateControler