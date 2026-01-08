import { GlowCard } from "./GlowCard"
import { SlidingHighlightBar } from "./HighlightBar"

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
  return (
    <div className="mt-[80px] flex w-full justify-center">
      <div className="grid grid-cols-[584px_32px_584px] grid-rows-[108px_32px_241px] items-center justify-items-center">
        <GlowCard height={108} className="col-start-1 row-start-1">
          <div className="text-sm text-white/80 geist-mono">Default content</div>
        </GlowCard>
        <div className="col-start-2 row-start-1 flex items-center justify-center">
          <SlidingHighlightBar orientation="horizontal" direction="forward" />
        </div>
        <GlowCard height={108} className="col-start-3 row-start-1">
          <div className="text-sm text-white/80 geist-mono">Default content</div>
        </GlowCard>

        <div className="col-start-1 row-start-2 w-full h-full">
          <VerticalHighlightGroup label="Broker-Consistent Pricing" />
        </div>
        <div className="col-start-3 row-start-2 w-full h-full">
          <VerticalHighlightGroup label="1:1 Real-Time Custody, Verifiable" />
        </div>

        <GlowCard height={241} className="col-start-1 row-start-3">
          <div className="text-sm text-white/80 geist-mono">Default content</div>
        </GlowCard>
        <div className="col-start-2 row-start-3 flex items-center justify-center">
          <SlidingHighlightBar orientation="horizontal" direction="forward" />
        </div>
        <GlowCard height={241} className="col-start-3 row-start-3">
          <div className="text-sm text-white/80 geist-mono">Default content</div>
        </GlowCard>
      </div>
    </div>
  )
}
