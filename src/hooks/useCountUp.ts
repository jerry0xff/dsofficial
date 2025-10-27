// src/hooks/useCountUp.ts
import { useEffect, useRef, useState } from "react"

interface UseCountUpOptions {
  start?: number // 默认0
  end: number    // 最终值，比如 1214
  duration?: number // ms，整段动画时长，默认 1500ms 左右
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
      // 进度 0~1
      let progress = elapsed / duration
      if (progress > 1) progress = 1

      // ease-out (可以换成别的缓动)
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

  // 返回格式化好的字符串，比如 1,214
  const formatted = new Intl.NumberFormat("en-US").format(Math.round(displayValue))

  return formatted
}
