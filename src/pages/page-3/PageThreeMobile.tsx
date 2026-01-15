import Content from "./Content"

type PageThreeMobileProps = {
  className?: string
}

export default function PageThreeMobile({ className = "" }: PageThreeMobileProps) {
  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden",
        className,
      ].join(" ")}
    >
      <div className="absolute left-1/2 top-[146px] w-[100vw] -translate-x-1/2 overflow-hidden flex justify-center pointer-events-none" />
      <Content />
    </section>
  )
}
