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
}

export default function StatsRow({ className = "" }: StatsRowProps) {
  return (
    <div className={`relative flex flex-wrap items-center justify-center gap-10 text-center text-white ${className}`}>
      <div className="absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <img src="/assets/page-1/star.png" alt="" className="h-[252px] w-[249px] object-none" aria-hidden="true" />
        <button
          type="button"
          className="mt-[10px] inline-flex h-[40px] w-[135px] items-center gap-2 rounded-full bg-[color:var(--ColorCyanDefault)] px-6 text-[12px] font-[700] uppercase text-black geist-mono transition hover:bg-[#00FFFF]"
        >
          <img src="/assets/page-1/star.svg" alt="" className="h-[14px] w-[14px]" aria-hidden="true" />
          Trade now
        </button>
      </div>
      {stats.map((stat) => {
        const displayValue = useCountUp({ end: stat.value })
        return (
          <div key={stat.label} className="relative z-10">
            <div className="text-[48px] font-black font-['DM_Sans',system-ui,sans-serif]">{displayValue}</div>
            <div className="mt-1 text-[14px] font-[400] uppercase font-['DM_Sans',system-ui,sans-serif]">
              {stat.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
