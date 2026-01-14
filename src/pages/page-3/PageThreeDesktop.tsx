import Content from "./Content"

type PageThreeDesktopProps = {
  className?: string
}

export default function PageThreeDesktop({ className = "" }: PageThreeDesktopProps) {
  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden bg-[var(--ColorBackDefault)]",
        className,
      ].join(" ")}
    >
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ transform: "translateY(-5%)" }}
      >
        <div className="relative w-full h-full max-w-[1272px] max-h-[660px] aspect-[1272.48/660.6]">
          <img src="/assets/page-1/map-empty.svg" className="w-full h-full object-contain" alt="" />
        </div>
      </div>
      <Content />
    </section>
  )
}
