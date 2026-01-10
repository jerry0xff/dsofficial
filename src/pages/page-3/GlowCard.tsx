export type CardHeight = 108 | 241

export type GlowCardProps = {
  height?: CardHeight
  width?: number
  imageSrc?: string
  imageY?: string // e.g. "50%", "40%", "60%", "20px"
  className?: string
  children?: React.ReactNode
}

export function GlowCard({
  height = 108,
  width = 584,
  imageSrc,
  imageY = "50%",
  className = "",
  children,
}: GlowCardProps) {
  const heightClass = `h-[${height}px]`
  const widthClass = `w-[${width}px]`

  return (
    <div className={["group relative", widthClass, heightClass, "overflow-visible", className].join(" ")}>
      <div
        className={[
          "relative",
          "h-full w-full",
          "bg-[#161623]",
          "border border-[#3B3B45]",
          "flex items-center justify-center",
          "overflow-hidden",
        ].join(" ")}
      >
        {/* hover inset glow */}
        <div
          className="
          z-10
            pointer-events-none
            absolute inset-0
            opacity-0
            transition-opacity duration-[2000ms] ease-linear
            md:group-hover:opacity-100
          "
          style={{
            boxShadow: `
    0px -20px 40px -15px var(--ColorCyanDefault) inset,
    0px -20px 40px -10px var(--ColorCyanDefault) inset
  `,
          }}
        />

        {/* center image (below content) */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt=""
            className="
              pointer-events-none
              absolute left-1/2
              -translate-x-1/2 -translate-y-1/2
              opacity-0
              transition-opacity duration-[2000ms] ease-linear
              md:group-hover:opacity-100
              z-100
            "
            style={{
              top: imageY,
            }}
          />
        )}

        {/* content */}
        <div className="relative z-[2] text-[12px] md:text-[14px] font-bold leading-none text-white geist-mono">{children}</div>
      </div>

      {/* corner dots */}
      <CornerDots />
    </div>
  )
}

export function CornerDots() {
  const base = "absolute w-[4px] h-[4px] rounded-full bg-white border border-[color:var(--ColorCyanDefault)]"

  return (
    <>
      <span className={`${base} left-0 top-0 -translate-x-1/2 -translate-y-1/2`} />
      <span className={`${base} right-0 top-0 translate-x-1/2 -translate-y-1/2`} />
      <span className={`${base} left-0 bottom-0 -translate-x-1/2 translate-y-1/2`} />
      <span className={`${base} right-0 bottom-0 translate-x-1/2 translate-y-1/2`} />
    </>
  )
}
