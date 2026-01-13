import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import { GlowCard, type GlowCardProps } from "./GlowCard"
import { SlidingHighlightBar } from "./HighlightBar"
import InfoBadge from "./InfoBadge"

type GlowGridCard = {
  id: string
  text: string
  className: string
  badges?: readonly string[]
} & Pick<GlowCardProps, "height" | "imageSrc" | "imageY">

function VerticalHighlightGroup({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="flex items-center gap-[10px]">
        <SlidingHighlightBar orientation="vertical" direction="reverse" />
        <SlidingHighlightBar orientation="vertical" direction="forward" />
      </div>
      <span
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[100%] text-center
          text-[10px] md:text-[12px] font-semibold leading-none geist-mono
          text-[color:var(--ColorCyanDefault)]
          shadow-[0px_1px_0px_0px_rgba(10,10,23,0.5)]
        "
      >
        {label}
      </span>
    </div>
  )
}

export default function GlowGrid() {
  const { lang } = useLanguage()
  const { page3 } = getTexts(lang)
  const { cards: gridCards, verticalLabels } = page3.glowGrid

  const cards: GlowGridCard[] = [
    {
      id: "top-left",
      height: 108,
      className: "col-start-1 row-start-1",
      text: gridCards.topLeft.text,
      imageSrc: "/assets/page-3/card1.png",
    },
    {
      id: "top-right",
      height: 108,
      className: "col-start-3 row-start-1",
      text: gridCards.topRight.text,
      imageSrc: "/assets/page-3/card2.png",
    },
    {
      id: "bottom-left",
      height: 241,
      className: "col-start-1 row-start-3",
      text: gridCards.bottomLeft.text,
      badges: gridCards.bottomLeft.badges,
      imageSrc: "/assets/page-3/card3.png",
      imageY: "45px",
    },
    {
      id: "bottom-right",
      height: 241,
      className: "col-start-3 row-start-3",
      text: gridCards.bottomRight.text,
      imageSrc: "/assets/page-3/card4.png",
    },
  ]

  const horizontalBars = [
    { id: "top", className: "col-start-2 row-start-1" },
    { id: "bottom", className: "col-start-2 row-start-3" },
  ] as const

  const verticalGroups = [
    { id: "left", className: "col-start-1 row-start-2", label: verticalLabels.left },
    { id: "right", className: "col-start-3 row-start-2", label: verticalLabels.right },
  ] as const

  return (
    <div className="mt-[30px] md:mt-[80px] flex w-full justify-center">
      <div className="grid grid-cols-[152px_32px_152px] grid-rows-[52px_32px_248px] items-center justify-items-center md:grid-cols-[584px_32px_584px] md:grid-rows-[108px_32px_241px]">
        {cards.map((card) => (
          <GlowCard
            key={card.id}
            height={card.height}
            className={[
              card.className,
              card.height === 108
                ? "w-[152px] h-[52px] md:w-[584px] md:h-[108px]"
                : "w-[152px] h-[248px] md:w-[584px] md:h-[241px]",
            ].join(" ")}
            imageSrc={card.imageSrc}
            imageY={card.imageY}
          >
            <div className="flex flex-col items-center gap-3 md:gap-6">
              <div className="text-center">{card.text}</div>
              {card.badges && (
                <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:gap-6">
                  {card.badges.map((label) => (
                    <InfoBadge key={label} text={label} />
                  ))}
                </div>
              )}
            </div>
          </GlowCard>
        ))}
        {horizontalBars.map((bar) => (
          <div key={bar.id} className={`${bar.className} flex items-center justify-center`}>
            <SlidingHighlightBar orientation="horizontal" direction="forward" />
          </div>
        ))}

        {verticalGroups.map((group) => (
          <div key={group.id} className={`${group.className} w-full h-full`}>
            <VerticalHighlightGroup label={group.label} />
          </div>
        ))}
      </div>
    </div>
  )
}
