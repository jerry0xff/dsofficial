import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"

type FeatureCardProps = {
  title: string
  subtitle: string
  description: string
}

export default function FeatureCard({ title, subtitle, description }: FeatureCardProps) {
  const { lang } = useLanguage()
  const { page2 } = getTexts(lang)

  return (
    <div className="feature-card flex h-[420px] w-[480px] flex-col items-center justify-center text-center text-white">
      <div className="feature-card__fill" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center -translate-y-16">
        <h3 className="text-[48px] font-bold text-white font-['TASA_Orbiter',system-ui,sans-serif] tracking-tight-sm">
          {title}
        </h3>
        <div className="feature-card__subtitle mt-3 text-[14px] font-bold geist-mono leading-[1.5]">{subtitle}</div>
        <p className="feature-card__desc mt-3 text-[12px] geist-mono leading-[1.5] px-4">{description}</p>
      </div>
      <a
        href="https://app.deshare.finance/#/"
        className="feature-card__button absolute bottom-[36px] left-1/2 z-10 -translate-x-1/2 -translate-y-16 rounded-full bg-[#0A0A17] px-6 py-2 text-[12px] font-bold uppercase geist-mono"
      >
        {page2.tradeNow}
      </a>
    </div>
  )
}
