import FAQList from "./FAQList"
import PartnersList from "./PartnersList"

export default function PageFive() {
  return (
    <section
      id="page-5"
      className="relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden bg-[#0A0A17]"
    >
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ transform: "translateY(-5%)" }}
      />
      <div className="relative z-[1] mt-[80px] flex flex-col items-center">
        <div className="text-[24px] md:text-[48px] mb-[20px] font-bold tracking-tight-sm text-white font-['TASA_Orbiter',system-ui,sans-serif]">
          Frequently Asked Questions
        </div>
        <FAQList />
        <div className="mt-[60px] md:mt-[120px] text-[24px] md:text-[48px] font-bold tracking-tight-sm text-white font-['TASA_Orbiter',system-ui,sans-serif]">
          Partners
        </div>
        <PartnersList />
      </div>
    </section>
  )
}
