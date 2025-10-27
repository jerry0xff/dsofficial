import { useEffect, useState } from "react"
import styles from "./index.module.less"

interface RollingNumberProps {
  value: number | string
  baseDuration?: number
  delayBetweenDigits?: number
  extraTurnsFastest?: number
}

function buildDigitStrip(maxTurns: number) {
  // 我们渲染足够长的一条竖列
  // maxTurns = 个位数最多多滚几圈
  // 例：maxTurns=4 -> 我们渲染至少 4*10+10 = 50 个单元
  const repeatCount = maxTurns * 10 + 10
  const arr: number[] = []
  for (let i = 0; i < repeatCount; i++) {
    arr.push(i % 10)
  }
  return arr
}

export default function RollingNumber({
  value,
  baseDuration = 2000,
  delayBetweenDigits = 80,
  extraTurnsFastest = 3,
}: RollingNumberProps) {
  const formatted = new Intl.NumberFormat("en-US").format(typeof value === "number" ? value : parseInt(value, 10))
  const chars = formatted.split("")

  const [offsets, setOffsets] = useState<number[]>(() => chars.map(() => 0))
  const [durations, setDurations] = useState<number[]>(() => chars.map(() => baseDuration))
  const [delays, setDelays] = useState<number[]>(() => chars.map(() => 0))

  useEffect(() => {
    // 计算从右往左的位次 (0=个位,1=十位...)
    const digitPositionsFromRight: number[] = []
    {
      let rank = 0
      for (let i = chars.length - 1; i >= 0; i--) {
        const ch = chars[i]
        const d = parseInt(ch, 10)
        if (Number.isNaN(d)) {
          digitPositionsFromRight[i] = -1
        } else {
          digitPositionsFromRight[i] = rank
          rank++
        }
      }
    }

    const nextOffsets: number[] = []
    const nextDurations: number[] = []
    const nextDelays: number[] = []

    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i]
      const d = parseInt(ch, 10)

      if (Number.isNaN(d)) {
        nextOffsets[i] = 0
        nextDurations[i] = 0
        nextDelays[i] = 0
        continue
      }

      const rankFromRight = digitPositionsFromRight[i] // 0=个位,1=十位...

      // 这个位要多转几圈
      const turnsForThisDigit = Math.max(extraTurnsFastest - rankFromRight, 0)

      // 我们是向上滚，所以 offset 是总步数的负值
      // 注意：这次 totalSteps 还是 digit + turns*10
      // 现在因为我们渲染了很多个重复 0..9 的单元，所以这个大位移也有对应内容，不会滚出空白
      const totalSteps = d + turnsForThisDigit * 10
      nextOffsets[i] = totalSteps * -1

      // 不同位使用不同速度
      let speedFactor = 1
      if (rankFromRight === 0) speedFactor = 0.5 // 个位更快
      else if (rankFromRight === 1) speedFactor = 0.7
      else speedFactor = 1

      nextDurations[i] = baseDuration * speedFactor

      // 高位稍微晚点动，看起来像被后面的位“带动”
      nextDelays[i] = rankFromRight * delayBetweenDigits
    }

    setTimeout(() => {
      setOffsets(nextOffsets)
      setDurations(nextDurations)
      setDelays(nextDelays)
    }, 30)
  }, [chars, baseDuration, delayBetweenDigits, extraTurnsFastest])

  // 构建足够长的 0..9..0..9.. 列
  const digitStrip = buildDigitStrip(extraTurnsFastest ?? 3)

  return (
    <span className={styles.rollingNumberWrapper}>
      {chars.map((ch, idx) => {
        const n = parseInt(ch, 10)
        const isDigit = !Number.isNaN(n)

        return (
          <span key={idx} className={isDigit ? styles.digitWrapper : styles.digitComma}>
            {isDigit ? (
              <span
                className={styles.digitScroller}
                style={{
                  ["--targetOffset" as any]: offsets[idx],
                  ["--animDuration" as any]: `${durations[idx]}ms`,
                  ["--animDelay" as any]: `${delays[idx]}ms`,
                }}
              >
                {digitStrip.map((val, stripIndex) => (
                  <span key={stripIndex} className={styles.digitCell}>
                    {val}
                  </span>
                ))}
              </span>
            ) : (
              ch /* 逗号 */
            )}
          </span>
        )
      })}
    </span>
  )
}
