import { useState, useEffect } from "react"

function getHours12(hours24) {
  let hours12 = hours24 % 12
  if (hours12 === 0) hours12 = 12
  return hours12
}

function useClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const hours24 = time.getHours()
  const hours12 = getHours12(hours24)
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours24 >= 12 ? "PM" : "AM"

  return { hours: hours12, minutes, seconds, ampm }
}

function SectionHeader({ label, title,stat }) {
  const { hours, minutes, seconds, ampm } = useClock()

  const pad = (num) => String(num).padStart(2, "0")

  return (
    <div className="flex relative items-center justify-between px-8 py-6 mx-11">
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

          <div className="flex absolute bottom-0 right-0 gap-3">
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">←</button>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">→</button>
      </div>
    </div>
  )
}

export default SectionHeader