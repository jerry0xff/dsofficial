type Partner = {
  name: string
  logo: string
}

const partners: Partner[] = [
  { name: "Binance wallet", logo: "/assets/page-1/partners/binance.svg" },
  { name: "ICBC Capital", logo: "/assets/page-1/partners/icbc.svg" },
  { name: "BingX Ventures", logo: "/assets/page-1/partners/bingx.svg" },
  { name: "DG Capital", logo: "/assets/page-1/partners/dgcapital.svg" },
  { name: "OKX wallet", logo: "/assets/page-1/partners/okx.svg" },
  { name: "Gate Web3", logo: "/assets/page-1/partners/gate.svg" },
  { name: "IBKR", logo: "/assets/page-1/partners/ibkr.svg" },
  { name: "ITiger", logo: "/assets/page-1/partners/tiger.svg" },
]

export default function PartnersRow() {
  return (
    <div className="mt-[200px] md:mt-auto flex w-full max-w-[1200px] flex-col items-center gap-6 pb-[80px]">
      <div className="text-center text-[12px] font-[300] uppercase tracking-[0.02em] text-white/50 font-['DM_Sans',system-ui,sans-serif]">
        Investors & Partners
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-[300] tracking-[0.02em] text-white/50 font-['DM_Sans',system-ui,sans-serif]">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center gap-1">
            <img src={partner.logo} alt={partner.name} className="h-5 w-auto" />
            <span>{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
