import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"

export default function GlobalAccessHeader() {
  const { lang } = useLanguage()
  const { page2 } = getTexts(lang)

  return (
    <div className="relative flex w-full flex-col items-center mb-[10px]">
      <div className="text-center text-[12px] font-[300] uppercase tracking-tight-sm text-[color:var(--ColorCyanDefault)] geist-mono mt-[80px] mt-0 md:mt-[180px] short:md:mt-[130px]">
        {page2.headerTag}
      </div>
      <div className="mt-[30px] short:mt-[20px] md:mt-[30px] short:md:mt-[20px] text-center text-[24px] md:text-[48px] font-bold tracking-tight-sm text-white font-['TASA_Orbiter',system-ui,sans-serif] shadow-[0px_4px_0px_0px_rgba(10,10,23,0.7)]">
        {page2.hero.titlePrefix} <br className="md:hidden" />
        <span className="relative inline-flex items-center justify-center overflow-visible leading-none">
          <img
            src="/assets/page-2/circle.svg"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: 230, height: 110, marginLeft: -9 }}
            aria-hidden="true"
          />
          <span className="relative z-10">{page2.hero.titleHighlight}</span>
        </span>{" "}
        {page2.hero.titleSuffix}
      </div>
      <div className="mt-[20px] short:mt-[14px] md:mt-[50px] short:md:mt-[34px] text-center text-[10px] font-medium md:text-[14px] md:font-[400] text-white/80 geist-mono shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
        <p>{page2.hero.line1}</p>
        <p className="mt-1">{page2.hero.line2}</p>
      </div>
    </div>
  )
}
