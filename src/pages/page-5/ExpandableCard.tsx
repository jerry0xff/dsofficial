import { useState } from "react"
import { CornerDots } from "../page-3/GlowCard"

export default function ExpandableCard({
  title,
  content,
  defaultOpen = false,
}: {
  title: string
  content: string
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="relative w-[1200px] overflow-visible border border-[#3B3B45] bg-[#161623]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[14px] font-medium text-white geist-mono">{title}</span>
        <span
          className={[
            "inline-flex h-[20px] w-[20px] items-center justify-center",
            "transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        >
          <img src="/assets/page-5/arrow.svg" alt="" className="h-[12px] w-[12px]" />
        </span>
      </button>

      <div
        className={[
          "grid transition-[grid-template-rows] duration-300",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div
            className={[
              "px-6 pb-5 text-[12px] font-light leading-[150%] text-white/80 geist-mono",
              "transition-opacity duration-300",
              open ? "opacity-100" : "opacity-0",
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
