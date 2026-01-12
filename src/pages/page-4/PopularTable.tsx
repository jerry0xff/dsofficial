import { useId } from "react"
import { CornerDots } from "../page-3/GlowCard"

type TrendPoint = number

export type PopularRow = {
  name: string
  symbol: string
  price: string
  change: string
  trend: TrendPoint[]
}

function buildSmoothPath(points: TrendPoint[], width: number, height: number) {
  const padding = 2
  const extraBottom = -2
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1

  const coords = points.map((value, index) => {
    const x = (index / (points.length - 1)) * width
    const rawY = height - padding + extraBottom - ((value - min) / range) * (height - padding * 2)
    const y = Math.max(padding, Math.min(height, rawY))
    return { x, y }
  })

  if (coords.length === 0) return ""
  if (coords.length === 1) return `M ${coords[0].x} ${coords[0].y}`

  const path = [`M ${coords[0].x.toFixed(2)} ${coords[0].y.toFixed(2)}`]

  for (let i = 0; i < coords.length - 1; i += 1) {
    const p0 = coords[i - 1] ?? coords[i]
    const p1 = coords[i]
    const p2 = coords[i + 1]
    const p3 = coords[i + 2] ?? p2

    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6

    path.push(
      `C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(
        2
      )}`
    )
  }

  return path.join(" ")
}

function Sparkline({ points, color, id }: { points: TrendPoint[]; color: string; id: string }) {
  const width = 54
  const height = 24
  const path = buildSmoothPath(points, width, height)
  const areaPath = `${path} L ${width} ${height} L 0 ${height} Z`
  const gradientId = `sparkline-${id}`

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function PopularTable({
  title = "Popular",
  rows,
  height,
  width = 548,
  widthClassName,
}: {
  title?: string
  rows: PopularRow[]
  height?: number
  width?: number
  widthClassName?: string
}) {
  const gradientPrefix = useId().replace(/:/g, "")
  const style = widthClassName ? (height ? { height } : undefined) : { width, ...(height ? { height } : {}) }

  return (
    <div
      className={["relative flex flex-col overflow-visible border border-[#3B3B45] bg-[#161623]", widthClassName]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <div className="px-2 pt-2 md:px-6 md:pt-3 text-[16px] font-extrabold text-white font-['TASA_Orbiter',system-ui,sans-serif]">
        {title}
      </div>
      <div className="flex-1 overflow-y-auto px-0 md:px-4 no-scrollbar mt-0">
        <div className="text-[10px] md:text-[12px] font-medium leading-none geist-mono tracking-[0.02em] text-white/80 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
          {rows.map((row, index) => {
            const isUp = row.change.startsWith("+")
            const trendColor = isUp ? "var(--ColorCyanDefault)" : "var(--ColorDownDefault)"

            return (
              <a
                key={`${row.symbol}-${index}`}
                href={`https://app.deshare.finance/#/trade?symbol=${encodeURIComponent(row.symbol)}`}
                className="flex items-center justify-between px-2 py-[5px] md:py-1 transition-colors duration-200 md:hover:bg-[#0A0A17] cursor-pointer"
              >
                <div className="w-[140px] truncate">{row.name}</div>
                <div className="w-[64px]">{row.symbol}</div>
                <div className="w-[80px]">{row.price}</div>
                <div className="w-[70px]" style={{ color: trendColor }}>
                  {row.change}
                </div>
                <div className="w-[54px]">
                  <Sparkline points={row.trend} color={trendColor} id={`${gradientPrefix}-${index}`} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <CornerDots />
    </div>
  )
}
