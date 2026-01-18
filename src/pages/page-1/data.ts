import type { HomepageIndexItem } from "@/api/homepage"

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

function formatIndexValue(value: number) {
  return `$${value.toFixed(2)}`
}

function formatIndexChange(changePct: number) {
  const sign = changePct >= 0 ? "+" : ""
  return `${sign}${changePct.toFixed(2)}%`
}

type MapConfigSeed = {
  src: string
  point: MapPoint
  subtitle: string
}

export function getMapConfigs(subtitles: MapSubtitles, indices?: HomepageIndexItem[]): MapConfig[] {
  const seeds: MapConfigSeed[] = [
    // {
    //   src: "/assets/page-1/map-empty.svg",
    //   point: null,
    //   data: null,
    // },
    {
      src: "/assets/page-1/map-sf.svg",
      point: { x: 169, y: 301.5 },
      subtitle: subtitles.nyc,
    },
    {
      src: "/assets/page-1/map-nyc.svg",
      point: { x: 392, y: 213.298 },
      subtitle: subtitles.sf,
    },
    {
      src: "/assets/page-1/map-sh.svg",
      point: { x: 965.5, y: 300.5 },
      subtitle: subtitles.sh,
    },
    {
      src: "/assets/page-1/map-tokyo.svg",
      point: { x: 1073.5, y: 270.5 },
      subtitle: subtitles.tokyo,
    },
  ]

  return seeds.map((seed, index) => {
    const item = indices?.[index]
    return {
      src: seed.src,
      point: seed.point,
      data: item
        ? {
            title: item.symbol,
            price: formatIndexValue(item.value),
            subtitle: seed.subtitle,
            change: formatIndexChange(item.change_pct),
          }
        : null,
    }
  })
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
