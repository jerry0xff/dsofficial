import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import Content from "./Content"
import FeatureCard from "./FeatureCard"

type PageTwoDesktopProps = {
  className?: string
}

export default function PageTwoDesktop({ className = "" }: PageTwoDesktopProps) {
  const { lang } = useLanguage()
  const { page2 } = getTexts(lang)

  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden",
        className,
      ].join(" ")}
    >
      <Content />
      <div className="relative z-10 mt-auto flex w-full max-w-[1500px] flex-col items-center justify-center gap-0 px-4 md:flex-row md:items-start">
        {page2.featureCards.map((card) => (
          <FeatureCard key={card.title} title={card.title} subtitle={card.subtitle} description={card.description} />
        ))}
      </div>
    </section>
  )
}
