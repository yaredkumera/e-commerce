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

export default useClock