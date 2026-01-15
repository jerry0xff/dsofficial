import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import GlowGrid from "./GlowGrid"

export default function GlobalAccessHeader() {
  const { lang } = useLanguage()
  const { page3 } = getTexts(lang)

  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="mt-[30px] short:mt-[20px] md:mt-[180px] short:md:mt-[130px] text-center text-[10px] md:text-[12px] font-[300] uppercase tracking-tight-sm text-[color:var(--ColorCyanDefault)] geist-mono">
        {page3.headerTag}
      </div>
      <div className="mt-[16px] short:mt-[12px] md:mt-[30px] short:md:mt-[15px] text-center text-[24px] md:text-[48px] font-bold tracking-tight-sm text-white font-['TASA_Orbiter',system-ui,sans-serif] shadow-[0px_4px_0px_0px_rgba(10,10,23,0.7)]">
        {page3.hero.titlePrefix} <br className="md:hidden" />
        <span className="relative inline-flex items-center justify-center overflow-visible leading-none">
          <img
            src="/assets/page-3/circle.svg"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: 132, height: 76, marginLeft: 10 }}
            aria-hidden="true"
          />
          <span className="relative z-10">{page3.hero.titleHighlight}</span>
        </span>{" "}
        {page3.hero.titleSuffix}
      </div>
      <div className="mt-[26px] short:mt-[18px] md:mt-[40px] short:md:mt-[13px] text-center text-[10px] md:text-[14px] leading-[1.5] font-[500] md:font-[400] text-white/80 geist-mono shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
        <p>{page3.hero.line1}</p>
        <p className="md:mt-1">{page3.hero.line2}</p>
      </div>
      <GlowGrid />
    </div>
  )
}
