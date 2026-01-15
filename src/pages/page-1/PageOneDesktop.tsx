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
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    if (!isAtTop) return
    const intervalId = window.setInterval(() => {
      setBackgroundIndex((current) => (current + 1) % mapConfigs.length)
    }, 5000)
    return () => window.clearInterval(intervalId)
  }, [isAtTop, mapConfigs.length])

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

  useEffect(() => {
    function handleScroll() {
      const atTop = window.scrollY <= 2
      setIsAtTop(atTop)
      if (!atTop) {
        setBackgroundIndex(0)
        setPrevIndex(null)
        lastIndexRef.current = 0
      }
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentConfig = isAtTop ? mapConfigs[backgroundIndex] || mapConfigs[0] : mapConfigs[0]
  const previousConfig = isAtTop && prevIndex !== null ? mapConfigs[prevIndex] || mapConfigs[0] : null
  const canRenderCurrent = isAtTop && Boolean(currentConfig.point && currentConfig.data)
  const canRenderPrevious = isAtTop && Boolean(previousConfig?.point && previousConfig?.data)
  const leftPercent = canRenderCurrent && currentConfig.point ? (currentConfig.point.x / originalWidth) * 100 : 0
  const topPercent = canRenderCurrent && currentConfig.point ? (currentConfig.point.y / originalHeight) * 100 : 0

  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden",
        className,
      ].join(" ")}
    >
      {isAtTop ? (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
          style={{ transform: "translateY(-5%)" }}
        >
          <div className="relative w-full max-w-[1272px] aspect-[1272.48/660.6]">
            {currentConfig.src !== "/assets/page-1/map-empty.svg" ? (
              <img src={currentConfig.src} className="w-full h-full object-fill" alt="" />
            ) : null}
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
      ) : null}

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
