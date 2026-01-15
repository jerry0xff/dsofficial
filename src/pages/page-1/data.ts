export type MapPoint = { x: number; y: number }

export type MapCalloutData = {
  title: string
  price: string
  subtitle: string
  change: string
}

export type MapSubtitles = {
  nyc: string
  sf: string
  sh: string
  tokyo: string
}

export type MapConfig = {
  src: string
  point: MapPoint | null
  data: MapCalloutData | null
}

export function getMapConfigs(subtitles: MapSubtitles): MapConfig[] {
  return [
    // {
    //   src: "/assets/page-1/map-empty.svg",
    //   point: null,
    //   data: null,
    // },
    {
      src: "/assets/page-1/map-sf.svg",
      point: { x: 168.5, y: 301.5 },
      data: {
        title: "SF",
        price: "$188.45",
        subtitle: subtitles.sf,
        change: "+0.82%",
      },
    },
    {
      src: "/assets/page-1/map-nyc.svg",
      point: { x: 391.5, y: 213.298 },
      data: {
        title: "NYC",
        price: "$412.30",
        subtitle: subtitles.nyc,
        change: "+1.24%",
      },
    },
    {
      src: "/assets/page-1/map-sh.svg",
      point: { x: 965.5, y: 300.5 },
      data: {
        title: "SH",
        price: "$96.18",
        subtitle: subtitles.sh,
        change: "-0.34%",
      },
    },
    {
      src: "/assets/page-1/map-tokyo.svg",
      point: { x: 1073.5, y: 270.5 },
      data: {
        title: "Tokyo",
        price: "$134.02",
        subtitle: subtitles.tokyo,
        change: "+1.02%",
      },
    },
  ]
}

export type TickerItem = {
  symbol: string
  price: string
  name: string
  change: string
  trend: "up" | "down"
}

export type TickerNames = {
  tencent: string
  alibabaGroup: string
  apple: string
  microsoft: string
  nvidia: string
  toyota: string
  tesla: string
  alibabaAdr: string
  amazon: string
  alphabet: string
  meta: string
}

export function getTickerItems(names: TickerNames): TickerItem[] {
  return [
    { symbol: "0700.HK", price: "$40.10", name: names.tencent, change: "+1.14%", trend: "up" },
    { symbol: "9988.HK", price: "$9.39", name: names.alibabaGroup, change: "-0.95%", trend: "down" },
    { symbol: "AAPL", price: "$192.45", name: names.apple, change: "+0.84%", trend: "up" },
    { symbol: "MSFT", price: "$412.30", name: names.microsoft, change: "-0.26%", trend: "down" },
    { symbol: "NVDA", price: "$585.90", name: names.nvidia, change: "+2.31%", trend: "up" },
    { symbol: "7203.T", price: "$20.63", name: names.toyota, change: "+1.28%", trend: "up" },
    { symbol: "TSLA", price: "$248.14", name: names.tesla, change: "-1.12%", trend: "down" },
    { symbol: "BABA", price: "$77.52", name: names.alibabaAdr, change: "+0.44%", trend: "up" },
    { symbol: "AMZN", price: "$178.22", name: names.amazon, change: "+0.62%", trend: "up" },
    { symbol: "GOOGL", price: "$142.37", name: names.alphabet, change: "-0.18%", trend: "down" },
    { symbol: "META", price: "$468.05", name: names.meta, change: "+1.07%", trend: "up" },
  ]
}
