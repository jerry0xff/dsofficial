import { CornerDots } from "../page-3/GlowCard"

export default function ExpandableCard({
  title,
  content,
  isOpen,
  onToggle,
}: {
  title: string
  content: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="relative w-[345px] md:w-[1200px] overflow-visible border border-[#3B3B45] bg-[#161623]">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-center justify-between px-3 md:px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[12px] md:text-[14px] font-medium text-white geist-mono">{title}</span>
        <span
          className={[
            "inline-flex h-[20px] w-[20px] items-center justify-center",
            "transition-transform duration-300",
            isOpen ? "rotate-0" : "rotate-180",
          ].join(" ")}
        >
          <span className="relative h-[12px] w-[12px]">
            <img
              src="/assets/page-5/arrow.svg"
              alt=""
              className="h-[12px] w-[12px] transition-opacity duration-200 md:group-hover:opacity-0"
            />
            <img
              src="/assets/page-5/arrow-hover.svg"
              alt=""
              className="absolute left-0 top-0 h-[12px] w-[12px] opacity-0 transition-opacity duration-200 md:group-hover:opacity-100"
            />
          </span>
        </span>
      </button>

      <div
        className={[
          "grid transition-[grid-template-rows] duration-300",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div
            className={[
              "px-6 pb-5 text-[10px] md:text-[12px] font-light leading-[150%] text-white/80 geist-mono",
              "transition-opacity duration-300",
              isOpen ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            {content}
          </div>
        </div>
      </div>

      <CornerDots />
    </div>
  )
}
