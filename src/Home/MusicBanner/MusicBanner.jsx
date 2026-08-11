import useCountdown from "../common/useCountdown";

function MusicBanner() {
  const targetDate = "2026-08-05T00:00:00";
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const pad = (num) => String(num).padStart(2, "0");

  const stats = [
    { value: pad(days), label: "Days" },
    { value: pad(hours), label: "Hours" },
    { value: pad(minutes), label: "Minutes" },
    { value: pad(seconds), label: "Seconds" },
  ];

  return (
    <div className="max-w-7xl mx-auto my-8 sm:my-14 px-4 sm:px-6 lg:px-8">
      <div className="bg-black text-white rounded-2xl grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-12 lg:px-16 py-8 sm:py-12 gap-8 overflow-hidden">
        {/* Content Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
          <p className="text-green-500 font-semibold text-xs sm:text-sm mb-3">Categories</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Enhance Your <br className="hidden sm:block" /> Music Experience
          </h2>

          <div className="flex flex-wrap justify-center md:justify-start gap-2.5 sm:gap-4 mb-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-black flex flex-col items-center justify-center text-xs shadow-sm"
              >
                <span className="font-bold text-xs sm:text-base leading-tight">{s.value}</span>
                <span className="text-[8px] sm:text-[10px] text-gray-600">{s.label}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#47B486] hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer text-sm shadow-sm">
            Buy Now!
          </button>
        </div>

        {/* Image Side */}
        <div className="flex items-center justify-center w-full h-56 sm:h-80 md:h-[380px]">
          <img
            src="/MusicBanner.png"
            alt="Speaker"
            className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)]"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicBanner;