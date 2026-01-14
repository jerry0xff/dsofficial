type MapCalloutData = {
  title: string
  price: string
  subtitle: string
  change: string
}

type MapCalloutProps = {
  style?: React.CSSProperties
  data: MapCalloutData
}

export default function MapCallout({ style, data }: MapCalloutProps) {
  return (
    <div className="absolute flex flex-col items-center z-100 -translate-x-1/2" style={style}>
      <div className="h-[32px] w-[2px] bg-[color:var(--ColorCyanDefault)]" />
      <div className="relative w-[197px] rounded-[20px] bg-[#26263A33] px-3 py-2 text-white/80 backdrop-blur-[40px]">
        <img
          src="/assets/page-1/callout-bg.svg"
          alt=""
          className="absolute -top-[30px] left-0 h-full w-full"
          aria-hidden="true"
        />
        <div className="flex items-center justify-between text-[16px] font-[700] tracking-[-0.02em] geist-mono">
          <span className="text-white/80">{data.title}</span>
          <span className="text-white/60">{data.price}</span>
        </div>
        <div className="mt-1 flex items-center justify-between text-[12px] tracking-[-0.02em] text-[color:var(--ColorCyanDefault)]">
          <span className="min-w-0 flex-1 truncate font-normal text-white/40">{data.subtitle}</span>
          <span
            className={`ml-2 inline-flex items-center gap-1 whitespace-nowrap font-[700] ${
              parseFloat(data.change) >= 0 ? "text-[color:var(--ColorCyanDefault)]" : "text-[#E95F2D]"
            }`}
          >
            <img
              src={parseFloat(data.change) >= 0 ? "/assets/page-1/up.svg" : "/assets/page-1/down.svg"}
              className="h-[12px] w-[12px]"
            />
            {data.change}
          </span>
        </div>
      </div>
    </div>
  )
}
