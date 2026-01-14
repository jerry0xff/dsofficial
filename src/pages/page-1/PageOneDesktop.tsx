import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import { useEffect, useRef, useState } from "react"
import MapCallout from "./MapCallout"
import PartnersRow from "./PartnersRow"
import StatsRow from "./StatsRow"
import TickerStrip from "./TickerStrip"
import { getMapConfigs } from "./data"

type PageOneDesktopProps = {
  className?: string
}

export default function PageOneDesktop({ className = "" }: PageOneDesktopProps) {
  const originalWidth = 1272.48
  const originalHeight = 660.6
  const { lang } = useLanguage()
  const { page1 } = getTexts(lang)
  const mapConfigs = getMapConfigs(page1.mapSubtitles)

  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const lastIndexRef = useRef(0)
  const fadeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setBackgroundIndex((current) => (current + 1) % mapConfigs.length)
    }, 5000)
    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const previous = lastIndexRef.current
    lastIndexRef.current = backgroundIndex
    setPrevIndex(previous)
    if (fadeTimeoutRef.current !== null) {
      window.clearTimeout(fadeTimeoutRef.current)
    }
    fadeTimeoutRef.current = window.setTimeout(() => {
      setPrevIndex(null)
    }, 300)
    return () => {
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current)
      }
    }
  }, [backgroundIndex])

  const currentConfig = mapConfigs[backgroundIndex] || mapConfigs[0]
  const previousConfig = prevIndex !== null ? mapConfigs[prevIndex] || mapConfigs[0] : null
  const canRenderCurrent = Boolean(currentConfig.point && currentConfig.data)
  const canRenderPrevious = Boolean(previousConfig?.point && previousConfig?.data)
  const leftPercent = canRenderCurrent && currentConfig.point ? (currentConfig.point.x / originalWidth) * 100 : 0
  const topPercent = canRenderCurrent && currentConfig.point ? (currentConfig.point.y / originalHeight) * 100 : 0

  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden bg-[var(--ColorBackDefault)]",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 flex items-center justify-center pointer-events-none",
          currentConfig.data ? "z-10" : "z-0",
        ].join(" ")}
        style={{ transform: "translateY(-5%)" }}
      >
        <div className="relative w-full max-w-[1272px] aspect-[1272.48/660.6]">
          <img src={currentConfig.src} className="w-full h-full object-fill" alt="" />
          {canRenderCurrent && currentConfig.data ? (
            <div
              className="absolute callout-fade-in z-50"
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: "translate(-50%, -100%)",
                pointerEvents: "auto",
              }}
            >
              <MapCallout data={currentConfig.data} />
            </div>
          ) : null}
          {canRenderPrevious && previousConfig?.data && previousConfig?.point ? (
            <div
              className="absolute callout-fade-out"
              style={{
                left: `${(previousConfig.point.x / originalWidth) * 100}%`,
                top: `${(previousConfig.point.y / originalHeight) * 100}%`,
                transform: "translate(-50%, -100%)",
                pointerEvents: "none",
              }}
            >
              <MapCallout data={previousConfig.data} />
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center">
        <TickerStrip />
        <div className="mt-[73px] text-center text-[48px] font-black uppercase text-white font-['DM_Sans',system-ui,sans-serif]">
          {page1.desktopHero.title}
        </div>
        <div className="mt-[30px] text-center text-[16px] font-medium uppercase tracking-[0.02em] text-white font-['DM_Sans',system-ui,sans-serif] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
          {page1.desktopHero.subtitle}
        </div>
        <StatsRow className="mt-[55px]" />
        <PartnersRow />
      </div>
    </section>
  )
}
