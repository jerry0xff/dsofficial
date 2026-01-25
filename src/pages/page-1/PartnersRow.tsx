import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"

type Partner = {
  name: string
  logo: string
}

const partners: Partner[] = [
  { name: "ICBC Capital", logo: "/assets/page-1/partners/icbc.svg" },
  { name: "BingX Ventures", logo: "/assets/page-1/partners/bingx.svg" },
  { name: "DG Capital", logo: "/assets/page-1/partners/dgcapital.svg" },
  { name: "CEIC", logo: "/assets/page-1/partners/ceic.svg" },
]

export default function PartnersRow() {
  const { lang } = useLanguage()
  const { page1 } = getTexts(lang)

  return (
    <div className="mt-[160px] md:mt-[240px] flex w-full max-w-[1200px] flex-col items-center gap-2 md:gap-4 pb-[80px]">
      <div className="text-center text-[12px] font-[300] uppercase tracking-[0.02em] text-white/50 font-['DM_Sans',system-ui,sans-serif]">
        {page1.partnersTitle}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-[300] tracking-[0.02em] text-white/50 font-['DM_Sans',system-ui,sans-serif]">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center gap-1">
            <img src={partner.logo} alt={partner.name} className="h-[30px] w-auto" />
            {/* <span>{partner.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  )
}
