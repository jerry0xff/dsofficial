export default function InfoBadge({ text = "Label" }: { text?: string }) {
  return (
    <div className="flex h-[123px] w-[244px] items-center justify-center bg-[#0A0A17]">
      <span className="text-[12px] font-medium leading-none text-white geist-mono">{text}</span>
    </div>
  )
}
