import Content from "./Content"
import FeatureCard from "./FeatureCard"
import { featureCards } from "./data"

type PageTwoDesktopProps = {
  className?: string
}

export default function PageTwoDesktop({ className = "" }: PageTwoDesktopProps) {
  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden bg-[#0A0A17]",
        className,
      ].join(" ")}
    >
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ transform: "translateY(-5%)" }}
      >
        <div className="relative w-full h-full max-w-[1272px] max-h-[660px] aspect-[1272.48/660.6]">
          <img src="/assets/page-1/map-empty.svg" className="w-full h-full object-contain" alt="" />
        </div>
      </div>
      <Content />
      <div className="relative z-10 mt-auto flex w-full max-w-[1500px] flex-col items-center justify-center gap-0 px-4 md:flex-row md:items-start">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} title={card.title} subtitle={card.subtitle} description={card.description} />
        ))}
      </div>
    </section>
  )
}
