import Content from "./Content"

type PageThreeMobileProps = {
  className?: string
}

export default function PageThreeMobile({ className = "" }: PageThreeMobileProps) {
  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden bg-[var(--ColorBackDefault)]",
        className,
      ].join(" ")}
    >
      <div className="absolute left-1/2 top-[146px] w-[100vw] -translate-x-1/2 overflow-hidden flex justify-center pointer-events-none">
        <div className="h-[348px] w-[670px] flex-none">
          <img src="/assets/page-1/map-empty.svg" alt="" className="h-full w-full" />
        </div>
      </div>
      <Content />
    </section>
  )
}
