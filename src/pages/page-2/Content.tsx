export default function GlobalAccessHeader() {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="mt-[180px] text-center text-[12px] font-[300] uppercase tracking-tight-sm text-[color:var(--ColorCyanDefault)] geist-mono">
        [ GLOBAL ACCESS ]
      </div>
      <div className="mt-[30px] text-center text-[48px] font-bold tracking-tight-sm text-white font-['TASA_Orbiter',system-ui,sans-serif] shadow-[0px_4px_0px_0px_rgba(10,10,23,0.7)]">
        Trade Global Stocks{" "}
        <span className="relative inline-flex items-center justify-center overflow-visible leading-none">
          <img
            src="/assets/page-2/circle.svg"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: 230, height: 110, marginLeft: -9 }}
            aria-hidden="true"
          />
          <span className="relative z-10">On-Chain,</span>
        </span>{" "}
        Anytime
      </div>
      <div className="mt-[50px] text-center text-[14px] font-[400] text-white/80 geist-mono shadow-[0px_1px_0px_0px_rgba(0,0,0,0.25)]">
        <p>Barrier-free access to global markets, 24/7.</p>
        <p className="mt-1">Trade 5,000+ stocks in a truly decentralized way - no pre-deposit required.</p>
      </div>
    </div>
  )
}
