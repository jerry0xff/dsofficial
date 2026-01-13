import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import PopularTablesPanel from "./PopularTablesPanel"

export default function GlobalAccessHeader() {
  const { lang } = useLanguage()
  const { page4 } = getTexts(lang)

  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="mt-[10px] md:mt-[180px] text-center text-[10px] md:text-[12px] font-[300] uppercase tracking-tight-sm text-[color:var(--ColorCyanDefault)] geist-mono">
        {page4.headerTag}
      </div>
      <div className="mt-[30px] text-center text-[24px] md:text-[48px] font-bold tracking-tight-sm text-white font-['TASA_Orbiter',system-ui,sans-serif] shadow-[0px_4px_0px_0px_rgba(10,10,23,0.7)]">
        {page4.hero.titlePrefix}{" "}
        <span className="relative inline-flex items-center justify-center overflow-visible leading-none">
          <img
            src="/assets/page-4/circle.svg"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
            style={{ width: 132, height: 76, marginLeft: 2 }}
            aria-hidden="true"
          />
          <span className="relative z-10">{page4.hero.titleHighlight}</span>
        </span>{" "}
        <span className="z-10 relative">{page4.hero.titleSuffix}</span>
      </div>
      <div className="mt-[16px] md:mt-[40px] text-center text-[10px] md:text-[14px] font-[400] text-white/80 geist-mono shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
        <p>{page4.hero.line1}</p>
        <p className="mt-1">{page4.hero.line2}</p>
      </div>
      <PopularTablesPanel />
    </div>
  )
}
