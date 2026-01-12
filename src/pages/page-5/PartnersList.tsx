import PartnerItem from "./PartnerItem"

const partners = [
  { name: "Binance wallet", logo: "/assets/page-1/partners/binance.svg" },
  { name: "OKX wallet", logo: "/assets/page-1/partners/okx.svg" },
  { name: "Gate Web3", logo: "/assets/page-1/partners/gate.svg" },
]

export default function PartnersList() {
  return (
    <div className="mt-[12px] md:mt-[24px] flex items-center gap-8">
      {partners.map((partner) => (
        <PartnerItem key={partner.name} name={partner.name} logo={partner.logo} />
      ))}
    </div>
  )
}
