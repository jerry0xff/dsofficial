export type CardHeight = 108 | 241

export function GlowCard({
  height = 108,
  imageSrc,
  imageY = "50%",
  className = "",
  children,
}: {
  height?: CardHeight
  imageSrc?: string
  imageY?: string // e.g. "50%", "40%", "60%", "20px"
  className?: string
  children?: React.ReactNode
}) {
  const heightClass = height === 108 ? "h-[108px]" : "h-[241px]"

  return (
    <div
      className={[
        "group relative",
        "w-[584px]",
        heightClass,
        "overflow-visible",
        className,
      ].join(" ")}
    >
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
            pointer-events-none
            absolute inset-0
            opacity-0
            transition-opacity duration-[3000ms] ease-linear
            group-hover:opacity-100
          "
          style={{
            boxShadow: "0px -20px 40px -15px var(--ColorCyanDefault) inset",
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
              -translate-x-1/2
              opacity-0
              transition-opacity duration-[3000ms] ease-linear
              group-hover:opacity-100
              z-[1]
            "
            style={{
              top: imageY,
            }}
          />
        )}

        {/* content */}
        <div className="relative z-[2]">{children}</div>
      </div>

      {/* corner dots */}
      <CornerDots />
    </div>
  )
}

function CornerDots() {
  const base = "absolute w-[4px] h-[4px] rounded-full bg-white border border-[#21D2D2]"

  return (
    <>
      <span className={`${base} left-0 top-0 -translate-x-1/2 -translate-y-1/2`} />
      <span className={`${base} right-0 top-0 translate-x-1/2 -translate-y-1/2`} />
      <span className={`${base} left-0 bottom-0 -translate-x-1/2 translate-y-1/2`} />
      <span className={`${base} right-0 bottom-0 translate-x-1/2 translate-y-1/2`} />
    </>
  )
}
