import PartnersRow from "./PartnersRow"
import StatsRow from "./StatsRow"
import TickerStrip from "./TickerStrip"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"

type PageOneMobileProps = {
  className?: string
}

export default function PageOneMobile({ className = "" }: PageOneMobileProps) {
  const { lang } = useLanguage()
  const { page1 } = getTexts(lang)

  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center p-6 overflow-hidden bg-[var(--ColorBackDefault)]",
        className,
      ].join(" ")}
    >
      <TickerStrip
        cardWidth={176}
        cardHeight={56}
        speedPerItemSeconds={0.45}
        minDurationSeconds={14}
        symbolSize={12}
        priceSize={12}
        nameSize={10}
        changeSize={10}
        changeIconSize={10}
      />
      <div className="absolute left-1/2 top-[146px] w-[100vw] -translate-x-1/2 overflow-hidden flex justify-center pointer-events-none">
        <div className="h-[348px] w-[670px] flex-none">
          <img src="/assets/page-1/map-empty.svg" alt="" className="h-full w-full" />
        </div>
      </div>
      <div className="z-10 mt-[70px] text-center text-[24px] font-bold leading-[140%] tracking-tight-sm text-white font-['TASA_Orbiter',system-ui,sans-serif] shadow-[0px_2px_0px_0px_rgba(10,10,23,0.5)] whitespace-nowrap">
        {page1.mobileHero.line1}
        <br />
        {page1.mobileHero.line2}
      </div>
      <div className="z-10 mt-[20px] text-center text-[10px] font-medium tracking-[0.02em] text-white/80 geist-mono shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
        {page1.mobileHero.subtitle}
      </div>
      <StatsRow
        className="mt-[40px]"
        valueSize={24}
        valueWeight={800}
        labelSize={10}
        labelWeight={400}
        starWidth={200}
        buttonOffset={15}
        starTranslateY={30}
      />
      <PartnersRow />
    </section>
  )
}
