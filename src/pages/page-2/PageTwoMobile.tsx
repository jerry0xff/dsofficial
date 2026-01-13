import { useState } from "react"
import Content from "./Content"
import MobileFeatureCard from "./MobileFeatureCard"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"

type PageTwoMobileProps = {
  className?: string
}

export default function PageTwoMobile({ className = "" }: PageTwoMobileProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { lang } = useLanguage()
  const { page2 } = getTexts(lang)

  return (
    <section
      className={["relative flex min-h-[calc(100vh-60px)] flex-col items-center p-6  bg-[#0A0A17]", className].join(
        " "
      )}
    >
      <div className="absolute left-1/2 top-[146px] w-[100vw] -translate-x-1/2 overflow-hidden flex justify-center pointer-events-none">
        <div className="h-[348px] w-[670px] flex-none">
          <img src="/assets/page-1/map-empty.svg" alt="" className="h-full w-full" />
        </div>
      </div>
      <Content />
      <div className="z-10 mt-[40px] flex flex-col gap-4 -mx-6">
        {page2.featureCards.map((card, index) => (
          <MobileFeatureCard
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
          />
        ))}
      </div>
    </section>
  )
}
