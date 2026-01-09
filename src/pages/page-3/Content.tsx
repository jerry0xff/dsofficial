import GlowGrid from "./GlowGrid"

export default function GlobalAccessHeader() {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="mt-[180px] text-center text-[12px] font-[300] uppercase tracking-tight-sm text-[color:var(--ColorCyanDefault)] geist-mono">
        [ Trusted Custody ]
      </div>
      <div className="mt-[30px] text-center text-[48px] font-bold tracking-tight-sm text-white font-['TASA_Orbiter',system-ui,sans-serif] shadow-[0px_4px_0px_0px_rgba(10,10,23,0.7)]">
        Your Assets, Held by{" "}
        <span className="relative inline-flex items-center justify-center overflow-visible leading-none">
          <img
            src="/assets/page-3/circle.svg"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: 132, height: 76, marginLeft: 10 }}
            aria-hidden="true"
          />
          <span className="relative z-10">Trusted</span>
        </span>{" "}
        Institutions
      </div>
      <div className="mt-[40px] text-center text-[14px] font-[400] text-white/80 geist-mono shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
        <p>
          All underlying assets are kept in segregated accounts at Interactive Brokers (IBKR), a NYSE-listed
          institution,
        </p>
        <p className="mt-1">ensuring your investments remain secure, transparent, and fully compliant.</p>
      </div>
      <GlowGrid />
    </div>
  )
}
