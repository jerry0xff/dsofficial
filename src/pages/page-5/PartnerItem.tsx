export default function PartnerItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="" className="h-[32px] w-[32px]" />
      <span className="text-[10px] font-light tight-sm text-white/50 font-['DM_Sans',system-ui,sans-serif]">
        {name}
      </span>
    </div>
  )
}
