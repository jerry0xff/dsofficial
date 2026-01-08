type Orientation = "horizontal" | "vertical"
type Direction = "forward" | "reverse"
/**
 * horizontal:
 *  - forward  = left -> right
 *  - reverse  = right -> left
 * vertical:
 *  - forward  = top -> bottom
 *  - reverse  = bottom -> top
 */
export function SlidingHighlightBar({
  orientation = "horizontal",
  direction = "forward",
  durationMs = 4000,
  className = "",
  rounded = false,
}: {
  orientation?: Orientation
  direction?: Direction
  durationMs?: number
  className?: string
  rounded?: boolean
}) {
  const isH = orientation === "horizontal"
  const key = isH
    ? direction === "forward"
      ? "shineXRev"
      : "shineX"
    : direction === "forward"
    ? "shineYRev"
    : "shineY"

  // base size: 32 * 3 (px)
  const sizeClass = isH ? "w-[32px] h-[3px]" : "w-[3px] h-[32px]"

  // your highlight gradient:
  // horizontal => 90deg, vertical => 0deg (top->bottom axis)
  const highlightGradient = isH
    ? "linear-gradient(90deg, color-mix(in srgb, var(--ColorCyanDefault) 0%, transparent) 0%, var(--ColorCyanDefault) 50%, color-mix(in srgb, var(--ColorCyanDefault) 0%, transparent) 100%)"
    : "linear-gradient(0deg, color-mix(in srgb, var(--ColorCyanDefault) 0%, transparent) 0%, var(--ColorCyanDefault) 50%, color-mix(in srgb, var(--ColorCyanDefault) 0%, transparent) 100%)"

  return (
    <div
      className={["relative overflow-hidden", sizeClass, rounded ? "rounded-full" : "", className].join(" ")}
      style={{
        backgroundColor: "color-mix(in srgb, var(--ColorCyanDefault) 20%, transparent)",
      }}
    >
      {/* moving highlight */}
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: highlightGradient,
          backgroundSize: isH ? "200% 100%" : "100% 200%",
          backgroundRepeat: "no-repeat",
          animation: `${key} ${durationMs}ms linear infinite`,
        }}
      />

      {/* component-scoped keyframes */}
      <style>{`
        @keyframes shineX {
          from { background-position: -200% -100%; }
          to   { background-position: 200% 100%; }
        }
        @keyframes shineXRev {
          from { background-position: 200% 100%; }
          to   { background-position: -100% -200%; }
        }
        @keyframes shineY {
          from { background-position: -200% -100%; }
          to   { background-position: 100% 200%; }
        }
        @keyframes shineYRev {
          from { background-position: 100% 200%; }
          to   { background-position: -100% -200%; }
        }
      `}</style>
    </div>
  )
}

// <SlidingHighlightBar orientation="horizontal" direction="forward" />
//   <SlidingHighlightBar orientation="horizontal" direction="reverse" />
//   <SlidingHighlightBar orientation="vertical" direction="forward" />
//   <SlidingHighlightBar orientation="vertical" direction="reverse" />
