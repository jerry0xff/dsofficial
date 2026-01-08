type TrendPoint = number

type PopularRow = {
  name: string
  symbol: string
  price: string
  change: string
  trend: TrendPoint[]
}

function buildSmoothPath(points: TrendPoint[], width: number, height: number) {
  const padding = 2
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1

  const coords = points.map((value, index) => {
    const x = (index / (points.length - 1)) * width
    const y = height - padding - ((value - min) / range) * (height - padding * 2)
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

function Sparkline({ points, color }: { points: TrendPoint[]; color: string }) {
  const width = 54
  const height = 24
  const path = buildSmoothPath(points, width, height)

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function PopularTable({ title = "Popular" }: { title?: string }) {
  const randomTrend = () => {
    let value = 50 + Math.random() * 10
    return Array.from({ length: 10 }, () => {
      value += (Math.random() - 0.5) * 4
      return value
    })
  }

  const rows: PopularRow[] = [
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: "$192.45",
      change: "+0.84%",
      trend: randomTrend(),
    },
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: "$192.45",
      change: "+0.84%",
      trend: randomTrend(),
    },
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: "$192.45",
      change: "-0.84%",
      trend: randomTrend(),
    },
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: "$192.45",
      change: "+0.84%",
      trend: randomTrend(),
    },
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: "$192.45",
      change: "-0.84%",
      trend: randomTrend(),
    },
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: "$192.45",
      change: "+0.84%",
      trend: randomTrend(),
    },
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      price: "$192.45",
      change: "+0.84%",
      trend: randomTrend(),
    },
  ]

  return (
    <div className="w-[548px] overflow-hidden border border-[#3B3B45] bg-[#161623]">
      <div className="px-6 pt-5 text-[16px] font-extrabold text-white font-['TASA_Orbiter',system-ui,sans-serif]">
        {title}
      </div>
      <div className="max-h-[386px] overflow-y-auto px-6 pb-5 pt-4 no-scrollbar">
        <div className="text-[12px] font-medium leading-none geist-mono tracking-[0.02em] text-white/80 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
          {rows.map((row, index) => {
            const isUp = row.change.startsWith("+")
            const trendColor = isUp ? "var(--ColorCyanDefault)" : "var(--ColorDownDefault)"

            return (
              <div
                key={`${row.symbol}-${index}`}
                className="flex items-center justify-between px-2 py-3 transition-colors duration-200 hover:bg-[#0A0A17] cursor-pointer"
              >
                <div className="w-[140px] truncate">{row.name}</div>
                <div className="w-[64px]">{row.symbol}</div>
                <div className="w-[80px]">{row.price}</div>
                <div className="w-[70px]" style={{ color: trendColor }}>
                  {row.change}
                </div>
                <div className="w-[54px]">
                  <Sparkline points={row.trend} color={trendColor} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
