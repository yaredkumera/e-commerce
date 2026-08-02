import ButtonCreator from "../../common/ButtonCreator"
import useClock from "./useClock"

function SectionHeader({ label, title,stat,Btn,hide,onclick,showall ,handlenext,handleprev}) {
  const { hours, minutes, seconds, ampm } = useClock()

  const pad = (num) => String(num).padStart(2, "0")

  return (
    <div className=" flex relative items-center justify-between px-8 py-6 mx-8 mt-12">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-8 bg-red-500 rounded-sm"></div>
          <span className="text-red-500 font-semibold text-sm">{label}</span>
        </div>

        <div className="flex items-end gap-6">
          <h2 className="text-2xl font-bold">{title}</h2>

     {stat&& <div className="flex items-end gap-4">
            <div className="text-center">
              <p className="text-[10px] text-gray-500">Hours</p>
              <p className="text-lg font-bold">{pad(hours)}</p>
            </div>
            <span className="text-red-500 text-xl">:</span>
            <div className="text-center">
              <p className="text-[10px] text-gray-500">Minutes</p>
              <p className="text-lg font-bold">{pad(minutes)}</p>
            </div>
            <span className="text-red-500 text-xl">:</span>
            <div className="text-center">
              <p className="text-[10px] text-gray-500">Seconds</p>
              <p className="text-lg font-bold">{pad(seconds)}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-gray-500">{ampm}</p>
            </div>
          </div>}

        </div>
      </div>
  
          <div className="flex absolute bottom-0 right-6 gap-3">
        
{Btn ? (
  <ButtonCreator onclick={onclick} STYLE="py-2 px-6 bg-[#DB4444] text-white w-32 rounded-md" children={`${showall?"View less":"View All"}`}/>
) : hide ? (
  null
) : (
  <>
    <button onClick={handleprev} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-black">←</button>
    <button  onClick={handlenext} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-black">→</button>
  </>
)} 
      </div>
    </div>
  )
}

export default SectionHeader