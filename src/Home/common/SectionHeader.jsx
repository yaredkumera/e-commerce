import ButtonCreator from "../../common/ButtonCreator";
import useClock from "./useClock";

function SectionHeader({
  label,
  title,
  stat,
  Btn,
  hide,
  onclick,
  showall,
  handlenext,
  handleprev,
}) {
  const { hours, minutes, seconds, ampm } = useClock();

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 px-4 sm:px-8 py-4 my-4 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-7 sm:w-4 sm:h-8 bg-[#DB4444] rounded-sm"></div>
          <span className="text-[#DB4444] font-semibold text-xs sm:text-sm">{label}</span>
        </div>

        <div className="flex flex-wrap items-end gap-4 sm:gap-8">
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary">{title}</h2>

          {stat && (
            <div className="flex items-end gap-2 sm:gap-3">
              <div className="text-center">
                <p className="text-[9px] sm:text-[10px] text-gray-400">Hours</p>
                <p className="text-sm sm:text-lg font-bold text-text-primary">{pad(hours)}</p>
              </div>
              <span className="text-[#DB4444] text-base sm:text-xl font-bold mb-0.5">:</span>
              <div className="text-center">
                <p className="text-[9px] sm:text-[10px] text-gray-400">Minutes</p>
                <p className="text-sm sm:text-lg font-bold text-text-primary">{pad(minutes)}</p>
              </div>
              <span className="text-[#DB4444] text-base sm:text-xl font-bold mb-0.5">:</span>
              <div className="text-center">
                <p className="text-[9px] sm:text-[10px] text-gray-400">Seconds</p>
                <p className="text-sm sm:text-lg font-bold text-text-primary">{pad(seconds)}</p>
              </div>
              <div className="text-center">
                <p className="text-[9px] sm:text-[10px] text-gray-400">{ampm}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
        {Btn ? (
          <ButtonCreator
            onclick={onclick}
            STYLE="py-2 px-5 bg-[#DB4444] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
            children={showall ? "View Less" : "View All"}
          />
        ) : hide ? null : (
          <div className="flex gap-2">
            <button
              onClick={handleprev}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-text-primary transition-colors cursor-pointer text-sm"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={handlenext}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-text-primary transition-colors cursor-pointer text-sm"
              aria-label="Next"
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;