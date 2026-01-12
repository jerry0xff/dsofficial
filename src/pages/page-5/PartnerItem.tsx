export default function PartnerItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="" className="h-[21px] md:h-[32px] w-[21px] md:w-[32px]" />
      <span className="text-[8px] md:text-[10px] font-light tracking-tight-sm text-white/50 font-['DM_Sans',system-ui,sans-serif]">
        {name}
      </span>
    </div>
  )
}
