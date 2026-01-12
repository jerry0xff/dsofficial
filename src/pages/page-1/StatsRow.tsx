import { useCountUp } from "@/hooks/useCountUp"

type StatItem = {
  value: number
  label: string
}

const stats: StatItem[] = [
  { value: 1214, label: "HK STOCKS" },
  { value: 3789, label: "NASDAQ STOCKS" },
  { value: 500, label: "NEW YORK STOCKS" },
]

type StatsRowProps = {
  className?: string
  valueSize?: number
  valueWeight?: number
  labelSize?: number
  labelWeight?: number
  starWidth?: number
  buttonOffset?: number
  starTranslateY?: number
}

export default function StatsRow({
  className = "",
  valueSize = 48,
  valueWeight = 900,
  labelSize = 14,
  labelWeight = 400,
  starWidth = 400,
  buttonOffset = 40,
  starTranslateY = 50,
}: StatsRowProps) {
  return (
    <div className={`relative flex flex-wrap items-center justify-center gap-10 text-center text-white ${className}`}>
      <div
        className="absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 flex-col items-center w-[600px]"
        style={{ transform: `translate(-50%, -${starTranslateY}%)` }}
      >
        <img
          src="/assets/page-1/star.png"
          alt=""
          className="h-auto object-contain"
          style={{ width: starWidth }}
          aria-hidden="true"
        />
        <a
          href="https://app.deshare.finance/#/"
          className="inline-flex h-[40px] w-[135px] items-center gap-2 rounded-full bg-[color:var(--ColorCyanDefault)] px-6 text-[12px] font-[700] uppercase text-black geist-mono transition hover:bg-[#00FFFF]"
          style={{ marginTop: -buttonOffset }}
        >
          <img src="/assets/page-1/star.svg" alt="" className="h-[14px] w-[14px]" aria-hidden="true" />
          Trade now
        </a>
      </div>
      {stats.map((stat) => {
        const displayValue = useCountUp({ end: stat.value })
        return (
          <div key={stat.label} className="relative z-10">
            <div className="geist-mono" style={{ fontSize: valueSize, fontWeight: valueWeight }}>
              {displayValue}
            </div>
            <div className="mt-1 uppercase geist-mono" style={{ fontSize: labelSize, fontWeight: labelWeight }}>
              {stat.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
