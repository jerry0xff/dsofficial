import { useEffect, useRef, useState } from "react"

interface UseCountUpOptions {
  start?: number
  end: number
  duration?: number
}

export function useCountUp({ start = 0, end, duration = 1500 }: UseCountUpOptions) {
  const [displayValue, setDisplayValue] = useState(start)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    let frameId: number

    function tick(timestamp: number) {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }
      const elapsed = timestamp - startTimeRef.current
      let progress = elapsed / duration
      if (progress > 1) progress = 1

      const eased = 1 - Math.pow(1 - progress, 3)

      const currentVal = start + (end - start) * eased
      setDisplayValue(currentVal)

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [start, end, duration])

  const formatted = new Intl.NumberFormat("en-US").format(Math.round(displayValue))

  return formatted
}
