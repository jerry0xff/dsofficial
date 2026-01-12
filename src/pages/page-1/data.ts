export type MapPoint = { x: number; y: number }

export type MapCalloutData = {
  title: string
  price: string
  subtitle: string
  change: string
}

export const mapConfigs: Array<{
  src: string
  point: MapPoint | null
  data: MapCalloutData | null
}> = [
  {
    src: "/assets/page-1/map-empty.svg",
    point: null,
    data: null,
  },
  {
    src: "/assets/page-1/map-nyc.svg",
    point: { x: 293, y: 217 },
    data: {
      title: "NYC",
      price: "$412.30",
      subtitle: "Manhattan Exchange",
      change: "+1.24%",
    },
  },
  {
    src: "/assets/page-1/map-sf.svg",
    point: { x: 70, y: 300 },
    data: {
      title: "SF",
      price: "$188.45",
      subtitle: "Bay Area Hub",
      change: "+0.82%",
    },
  },
  {
    src: "/assets/page-1/map-sh.svg",
    point: { x: 867, y: 302 },
    data: {
      title: "SH",
      price: "$96.18",
      subtitle: "Pudong Market",
      change: "-0.34%",
    },
  },
  {
    src: "/assets/page-1/map-tokyo.svg",
    point: { x: 975, y: 275 },
    data: {
      title: "Tokyo",
      price: "$134.02",
      subtitle: "Shinjuku Desk",
      change: "+1.02%",
    },
  },
]

export type TickerItem = {
  symbol: string
  price: string
  name: string
  change: string
  trend: "up" | "down"
}

export const tickerItems: TickerItem[] = [
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
