import { useEffect, useState } from "react"
import PartnersRow from "./PartnersRow"
import StatsRow from "./StatsRow"
import TickerStrip from "./TickerStrip"

export default function PageOne() {
  const backgrounds = [
    "/assets/page-1/map-empty.svg",
    "/assets/page-1/map-nyc.svg",
    "/assets/page-1/map-sf.svg",
    "/assets/page-1/map-sh.svg",
    "/assets/page-1/map-tokyo.svg",
  ]
  const [backgroundIndex, setBackgroundIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setBackgroundIndex((current) => (current + 1) % backgrounds.length)
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [backgrounds.length])

  return (
    <section
      className="flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url('${backgrounds[backgroundIndex]}')`,
        backgroundPosition: "center 70%",
      }}
    >
      <TickerStrip />
      <div className="mt-[73px] text-center text-[48px] font-black uppercase text-white font-['DM_Sans',system-ui,sans-serif]">
        Trade global stock with crypto
      </div>
      <div className="mt-[30px] text-center text-[16px] font-medium uppercase tracking-[0.02em] text-white font-['DM_Sans',system-ui,sans-serif] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
        The Most Comprehensive Tokenized Stock Trading Market
      </div>
      <StatsRow className="mt-[55px]" />
      <PartnersRow />
    </section>
  )
}
