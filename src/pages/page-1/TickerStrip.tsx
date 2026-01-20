import { useEffect, useMemo, useRef, useState } from "react"
import { getHomepageHotCached, type HomepageStockItem } from "@/api/homepage"
import { toTraditionalIfNeeded, useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import { type TickerItem } from "./data"

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
  speedPerItemSeconds = 0.1,
  minDurationSeconds = 20,
  symbolSize = 16,
  priceSize = 16,
  nameSize = 12,
  changeSize = 12,
  changeIconSize = 12,
}: TickerStripProps) {
  const { lang } = useLanguage()
  const { page1 } = getTexts(lang)
  const [tickerItems, setTickerItems] = useState<TickerItem[]>([])
  const [animationKey, setAnimationKey] = useState(0)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let isActive = true

    function toTickerItems(items: HomepageStockItem[]): TickerItem[] {
      return (items ?? []).map((item) => {
        const isUp = item.change_pct >= 0
        const sign = isUp ? "+" : ""
        return {
          symbol: item.symbol,
          price: `$${item.price.toFixed(2)}`,
          name: lang.startsWith("zh") ? toTraditionalIfNeeded(item.name_cn, lang) : item.name,
          change: `${sign}${item.change_pct.toFixed(2)}%`,
          trend: isUp ? "up" : "down",
        }
      })
    }

    getHomepageHotCached()
      .then((data) => {
        if (!isActive) return
        setTickerItems(toTickerItems(data.items))
      })
      .catch((error) => {
        if (!isActive) return
        console.error("Failed to load ticker items", error)
      })

    return () => {
      isActive = false
    }
  }, [lang])

  useEffect(() => {
    if (!tickerItems.length) return
    const rafId = requestAnimationFrame(() => {
      if (trackRef.current) {
        void trackRef.current.offsetWidth
      }
      setAnimationKey((value) => value + 1)
    })
    return () => cancelAnimationFrame(rafId)
  }, [tickerItems.length])

  useEffect(() => {
    function refreshAnimation() {
      setAnimationKey((value) => value + 1)
    }

    document.addEventListener("visibilitychange", refreshAnimation)
    window.addEventListener("pagehide", refreshAnimation)
    window.addEventListener("pageshow", refreshAnimation)
    window.addEventListener("orientationchange", refreshAnimation)

    return () => {
      document.removeEventListener("visibilitychange", refreshAnimation)
      window.removeEventListener("pagehide", refreshAnimation)
      window.removeEventListener("pageshow", refreshAnimation)
      window.removeEventListener("orientationchange", refreshAnimation)
    }
  }, [])

  const durationSeconds = Math.max(tickerItems.length * speedPerItemSeconds, minDurationSeconds)
  const animationStyle = useMemo(
    () => ({ "--ticker-duration": `${durationSeconds}s` }) as React.CSSProperties,
    [durationSeconds]
  )

  return (
    <div className="w-full">
      <div className="ticker-viewport">
        <div ref={trackRef} key={animationKey} className="ticker-track pb-2" style={animationStyle}>
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
    </div>
  )
}
