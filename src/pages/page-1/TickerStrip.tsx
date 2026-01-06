type TickerItem = {
  symbol: string
  price: string
  name: string
  change: string
  trend: "up" | "down"
}

const items: TickerItem[] = [
  { symbol: "0700.HK", price: "$40.10", name: "Tencent Holdings Holdings", change: "+1.14%", trend: "up" },
  { symbol: "9988.HK", price: "$9.39", name: "Alibaba Group", change: "-0.95%", trend: "down" },
  { symbol: "AAPL", price: "$192.45", name: "Apple Inc.", change: "+0.84%", trend: "up" },
  { symbol: "MSFT", price: "$412.30", name: "Microsoft Corp.", change: "-0.26%", trend: "down" },
  { symbol: "NVDA", price: "$585.90", name: "NVIDIA Corp.", change: "+2.31%", trend: "up" },
  { symbol: "7203.T", price: "$20.63", name: "Toyota Motor", change: "+1.28%", trend: "up" },
  { symbol: "TSLA", price: "$248.14", name: "Tesla, Inc.", change: "-1.12%", trend: "down" },
  { symbol: "BABA", price: "$77.52", name: "Alibaba ADR", change: "+0.44%", trend: "up" },
  { symbol: "AMZN", price: "$178.22", name: "Amazon.com, Inc.", change: "+0.62%", trend: "up" },
  { symbol: "GOOGL", price: "$142.37", name: "Alphabet Class A", change: "-0.18%", trend: "down" },
  { symbol: "META", price: "$468.05", name: "Meta Platforms", change: "+1.07%", trend: "up" },
]

export default function TickerStrip() {
  const speedPerItemSeconds = 0.3
  const durationSeconds = Math.max(items.length * speedPerItemSeconds, 12)

  return (
    <div className="w-full overflow-hidden">
      <div className="ticker-track pb-2" style={{ "--ticker-duration": `${durationSeconds}s` } as React.CSSProperties}>
        {[0, 1].map((group) => (
          <div key={group} className="ticker-group">
            {items.map((item) => (
              <div
                key={`${group}-${item.symbol}`}
                className="h-[60px] w-[197px] rounded-[20px] bg-[#161623] px-3 py-2 text-white/80"
              >
                <div className="flex items-center justify-between text-[16px] font-[700] tracking-[-0.02em] geist-mono">
                  <span className="text-white/80 ">{item.symbol}</span>
                  <span className="text-white/60 ">{item.price}</span>
                </div>
                <div
                  className={`mt-1 flex items-center justify-between text-[12px] tracking-[-0.02em] ${
                    item.trend === "up" ? "text-[#21D2D2]" : "text-[#E95F2D]"
                  }`}
                >
                  <span className="min-w-0 flex-1 truncate font-normal text-white/40 font-[400]">{item.name}</span>
                  <span className="ml-2 inline-flex items-center gap-1 whitespace-nowrap font-[700]">
                    <img
                      src={item.trend === "up" ? "/assets/page-1/up.svg" : "/assets/page-1/down.svg"}
                      alt={item.trend === "up" ? "Up" : "Down"}
                      className="h-[12px] w-[12px]"
                    />
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
