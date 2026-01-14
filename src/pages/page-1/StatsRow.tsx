import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import { useCountUp } from "@/hooks/useCountUp"

type StatItem = {
  value: number
  labelKey: "hkStocks" | "nasdaqStocks" | "newYorkStocks"
}

const stats: StatItem[] = [
  { value: 1214, labelKey: "hkStocks" },
  { value: 3789, labelKey: "nasdaqStocks" },
  { value: 500, labelKey: "newYorkStocks" },
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
  const { lang } = useLanguage()
  const { page1 } = getTexts(lang)

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
          className="group inline-flex h-[40px] w-[135px] items-center gap-2 rounded-full bg-[color:var(--ColorCyanDefault)] px-6 text-[12px] font-[700] uppercase text-black geist-mono transition hover:bg-[#00FFFF] whitespace-nowrap"
          style={{ marginTop: -buttonOffset }}
        >
          <img
            src="/assets/page-1/star.svg"
            alt=""
            className="h-[14px] w-[14px] transition-transform duration-200 group-hover:rotate-90"
            aria-hidden="true"
          />
          {page1.tradeNow}
        </a>
      </div>
      {stats.map((stat) => {
        const displayValue = useCountUp({ end: stat.value })
        return (
          <div key={stat.labelKey} className="relative z-0">
            <div className="geist-mono" style={{ fontSize: valueSize, fontWeight: valueWeight }}>
              {displayValue}
            </div>
            <div className="mt-1 uppercase geist-mono" style={{ fontSize: labelSize, fontWeight: labelWeight }}>
              {page1.stats[stat.labelKey]}
            </div>
          </div>
        )
      })}
    </div>
  )
}
