import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"

export default function MobileFeatureCard({
  title,
  subtitle,
  description,
  isOpen,
  onToggle,
}: {
  title: string
  subtitle: string
  description: string
  isOpen: boolean
  onToggle: () => void
}) {
  const { lang } = useLanguage()
  const { page2 } = getTexts(lang)

  return (
    <div
      className={[
        "w-full py-3 px-6",
        "transition-colors duration-[800ms] ease-out",
        isOpen ? "bg-[color:var(--ColorCyanDefault)]" : "",
      ].join(" ")}
    >
      <button type="button" className="flex w-full items-center justify-between" onClick={onToggle}>
        <div className="flex flex-col gap-1 text-left max-w-[70%]">
          <div className="text-[24px] font-bold leading-[120%] tracking-tight-sm text-white font-['TASA_Orbiter',system-ui,sans-serif]">
            {title}
          </div>
          <div
            className={[
              "text-[12px] font-medium leading-[150%] geist-mono transition-colors duration-[300ms] ease-out",
              isOpen ? "text-[#0A0A17]" : "text-[color:var(--ColorCyanDefault)]",
            ].join(" ")}
          >
            {subtitle}
          </div>
        </div>
        <img
          src={isOpen ? "/assets/page-5/arrow-card.svg" : "/assets/page-5/arrow.svg"}
          alt=""
          className={["h-[16px] w-[16px]", isOpen ? "" : "rotate-180"].join(" ")}
        />
      </button>

      <div
        className={[
          "grid transition-[grid-template-rows] duration-[800ms] ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div
            className={[
              "mt-3 text-[10px] font-normal leading-[150%] text-[#3B3B45] geist-mono",
              "transition-opacity duration-[300ms] ease-out",
              isOpen ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            {description}
          </div>
          <a
            href="https://app.deshare.finance/#/"
            className="mt-3 inline-flex items-center rounded-full bg-[#0A0A17] px-6 py-2 text-[12px] font-bold uppercase text-white geist-mono"
          >
            {page2.tradeNow}
          </a>
        </div>
      </div>
    </div>
  )
}
