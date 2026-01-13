import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import { getTickerItems } from "./data"

type TickerStripProps = {
  cardWidth?: number
  cardHeight?: number
  speedPerItemSeconds?: number
  minDurationSeconds?: number
  symbolSize?: number
  priceSize?: number
  nameSize?: number
  changeSize?: number
  changeIconSize?: number
}

export default function TickerStrip({
  cardWidth = 197,
  cardHeight = 60,
  speedPerItemSeconds = 0.3,
  minDurationSeconds = 12,
  symbolSize = 16,
  priceSize = 16,
  nameSize = 12,
  changeSize = 12,
  changeIconSize = 12,
}: TickerStripProps) {
  const { lang } = useLanguage()
  const { page1 } = getTexts(lang)
  const tickerItems = getTickerItems(page1.tickerNames)
  const durationSeconds = Math.max(tickerItems.length * speedPerItemSeconds, minDurationSeconds)

  return (
    <div className="w-full">
      <div className="ticker-track pb-2" style={{ "--ticker-duration": `${durationSeconds}s` } as React.CSSProperties}>
        {[0, 1].map((group) => (
          <div key={group} className="ticker-group">
            {tickerItems.map((item) => (
              <a
                key={`${group}-${item.symbol}`}
                href={`https://app.deshare.finance/#/trade?symbol=${encodeURIComponent(item.symbol)}`}
                className="rounded-[20px] bg-[#161623] px-3 py-2 text-white/80"
                style={{ width: cardWidth, height: cardHeight }}
              >
                <div className="flex items-center justify-between font-[700] tracking-tight-sm geist-mono">
                  <span className="text-white/80 " style={{ fontSize: symbolSize }}>
                    {item.symbol}
                  </span>
                  <span className="text-white/60 " style={{ fontSize: priceSize }}>
                    {item.price}
                  </span>
                </div>
                <div
                  className={`mt-1 flex items-center justify-between tracking-tight-sm ${
                    item.trend === "up" ? "text-[color:var(--ColorCyanDefault)]" : "text-[#E95F2D]"
                  }`}
                >
                  <span
                    className="min-w-0 flex-1 truncate font-normal text-white/40 font-[400]"
                    style={{ fontSize: nameSize }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="ml-2 inline-flex items-center gap-1 whitespace-nowrap font-[700]"
                    style={{ fontSize: changeSize }}
                  >
                    <img
                      src={item.trend === "up" ? "/assets/page-1/up.svg" : "/assets/page-1/down.svg"}
                      alt={item.trend === "up" ? page1.tickerAlt.up : page1.tickerAlt.down}
                      style={{ width: changeIconSize, height: changeIconSize }}
                    />
                    {item.change}
                  </span>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
