import Content from "./Content"

type PageFourDesktopProps = {
  className?: string
}

export default function PageFourDesktop({ className = "" }: PageFourDesktopProps) {
  return (
    <section
      className={[
        "relative flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 overflow-hidden",
        className,
      ].join(" ")}
    >
      <Content />
    </section>
  )
}
