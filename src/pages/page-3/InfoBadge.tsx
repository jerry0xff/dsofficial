export default function InfoBadge({ text = "Label" }: { text?: string }) {
  return (
    <div className="flex h-[84px] md:h-[123px] w-[128px] md:w-[244px] items-center justify-center bg-[#0A0A17] text-center p-4">
      <span className="text-[10px] md:text-[12px] font-bold md:font-medium leading-none text-white geist-mono">{text}</span>
    </div>
  )
}
