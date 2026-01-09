import TickerStrip from "./TickerStrip"

type PageOneMobileProps = {
  className?: string
}

export default function PageOneMobile({ className = "" }: PageOneMobileProps) {
  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden bg-[#0A0A17]",
        className,
      ].join(" ")}
    >
      <TickerStrip
        cardWidth={176}
        cardHeight={56}
        speedPerItemSeconds={0.45}
        minDurationSeconds={14}
        symbolSize={12}
        priceSize={12}
        nameSize={10}
        changeSize={10}
        changeIconSize={10}
      />
    </section>
  )
}
