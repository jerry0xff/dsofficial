import { GlowCard } from "./GlowCard"
import { SlidingHighlightBar } from "./HighlightBar"
import InfoBadge from "./InfoBadge"

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
          whitespace-nowrap
          text-[12px] font-semibold leading-none geist-mono
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
  const cards = [
    {
      id: "top-left",
      height: 108,
      className: "col-start-1 row-start-1",
      text: "On-Chain Orders",
      badges: null,
      imageSrc: "/assets/page-3/card1.svg",
    },
    {
      id: "top-right",
      height: 108,
      className: "col-start-3 row-start-1",
      text: "Stock Tokens",
      badges: null,
      imageSrc: "/assets/page-3/card2.svg",
    },
    {
      id: "bottom-left",
      height: 241,
      className: "col-start-1 row-start-3",
      text: "Liquidity",
      badges: ["IBKR Broker Order Flow", "DeShare Order Flow"],
      imageSrc: "/assets/page-3/card3.svg",
    },
    {
      id: "bottom-right",
      height: 241,
      className: "col-start-3 row-start-3",
      text: "Backed by Real Stocks",
      badges: null,
      imageSrc: "/assets/page-3/card4.svg",
    },
  ] as const

  const horizontalBars = [
    { id: "top", className: "col-start-2 row-start-1" },
    { id: "bottom", className: "col-start-2 row-start-3" },
  ] as const

  const verticalGroups = [
    { id: "left", className: "col-start-1 row-start-2", label: "Broker-Consistent Pricing" },
    { id: "right", className: "col-start-3 row-start-2", label: "1:1 Real-Time Custody, Verifiable" },
  ] as const

  return (
    <div className="mt-[80px] flex w-full justify-center">
      <div className="grid grid-cols-[584px_32px_584px] grid-rows-[108px_32px_241px] items-center justify-items-center">
        {cards.map((card) => (
          <GlowCard key={card.id} height={card.height} className={card.className} imageSrc={card.imageSrc}>
            <div className="flex flex-col items-center gap-6">
              <div>{card.text}</div>
              {card.badges && (
                <div className="flex items-center gap-6">
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
