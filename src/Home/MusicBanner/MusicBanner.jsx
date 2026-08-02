import useCountdown from "../common/useCountdown"

function MusicBanner() {
  const targetDate = "2026-08-05T00:00:00" 
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  const pad = (num) => String(num).padStart(2, "0")

  const stats = [
    { value: pad(days), label: "Days" },
    { value: pad(hours), label: "Hours" },
    { value: pad(minutes), label: "Minutes" },
    { value: pad(seconds), label: "Seconds" },
  ]

  return (
    <div className="bg-black text-white grid md:grid-cols-2 items-center px-16 py-9 mx-10 mt-16   gap-8">
      <div>
        <p className="text-green-500 font-semibold mb-4">Categories</p>
        <h2 className="text-3xl font-bold mb-6   pb-6 w-fit">
          Enhance Your <br /> Music Experience 
        </h2>

        <div className="flex gap-3 mb-6">
          {stats.map((s, i) => (
            <div key={i} className="w-14 h-14 rounded-full bg-white text-black flex flex-col items-center justify-center text-xs">
              <span className="font-bold">{s.value}</span>
              <span className="text-[8px]">{s.label}</span>
            </div>
          ))}
        </div>

        <button className="bg-green-500 text-white font-semibold px-8 py-3 rounded-md hover:opacity-60">
          Buy Now!
        </button>
      </div>

      <img src="/MusicBanner.png" alt="Speaker" className="w-full h-[420px] object-contain" />
    </div>
  )
}
 
export default MusicBanner 