import TickerStrip from "./TickerStrip"

type PageOneMobileProps = {
  className?: string
}

export default function PageOneMobile({ className = "" }: PageOneMobileProps) {
  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-6 overflow-hidden bg-[#0A0A17]",
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
      <div className="mt-[90px] w-[100vw] -mx-4 overflow-hidden flex justify-center">
        <div className="h-[348px] w-[670px] flex-none">
          <img src="/assets/page-1/map-empty.svg" alt="" className="h-full w-full" />
        </div>
      </div>
    </section>
  )
}
