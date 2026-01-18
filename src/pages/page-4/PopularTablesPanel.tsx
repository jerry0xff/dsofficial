import { useEffect, useMemo, useState } from "react"
import { getHomepageHotCached, getHomepageNewListings, getHomepageTopGainers, type HomepageStockItem } from "@/api/homepage"
import { toTraditionalIfNeeded, useLanguage } from "@/contexts/LanguageContext"
import { getTexts, Lang } from "@/contexts/texts"
import PopularTable, { type PopularRow } from "./PopularTable"

function formatChange(pct: number) {
  const sign = pct >= 0 ? "+" : ""
  return `${sign}${pct.toFixed(2)}%`
}

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`
}

function toPopularRows(items: HomepageStockItem[] | undefined, lang: string): PopularRow[] {
  return (items ?? []).map((item) => ({
    name: lang.startsWith("zh") ? toTraditionalIfNeeded(item.name_cn, lang as Lang) : item.name,
    symbol: item.symbol,
    price: formatPrice(item.price),
    change: formatChange(item.change_pct),
    trend: item.last_10_closes?.length
      ? item.last_10_closes
      : item.last_10_close?.length
        ? item.last_10_close
        : [item.price],
  }))
}

export default function PopularTablesPanel() {
  const { lang } = useLanguage()
  const { page4 } = getTexts(lang)
  const [popularRows, setPopularRows] = useState<PopularRow[]>([])
  const [topGainersRows, setTopGainersRows] = useState<PopularRow[]>([])
  const [newListingsRows, setNewListingsRows] = useState<PopularRow[]>([])

  const mapRows = useMemo(() => (items: HomepageStockItem[]) => toPopularRows(items, lang), [lang])

  useEffect(() => {
    const controller = new AbortController()

    Promise.all([
      getHomepageHotCached(),
      getHomepageTopGainers(controller.signal),
      getHomepageNewListings(controller.signal),
    ])
      .then(([hot, topGainers, newListings]) => {
        setPopularRows(mapRows(hot.items))
        setTopGainersRows(mapRows(topGainers.items))
        setNewListingsRows(mapRows(newListings.items))
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return
        console.error("Failed to load homepage tables", error)
      })

    return () => {
      controller.abort()
    }
  }, [mapRows])

  return (
    <div className="mt-[10px] md:mt-[60px] flex w-full flex-col items-center gap-[16px] md:flex-row md:justify-center md:gap-[38px]">
      <PopularTable title={page4.tables.popular} rows={popularRows} height={306} widthClassName="w-[345px] md:w-[548px]" />
      <div className="flex w-full flex-col items-center gap-[16px] md:w-auto md:gap-[38px]">
        <PopularTable title={page4.tables.topGainers} rows={topGainersRows} height={134} widthClassName="w-[345px] md:w-[548px]" />
        <PopularTable title={page4.tables.newListings} rows={newListingsRows} height={134} widthClassName="w-[345px] md:w-[548px]" />
      </div>
    </div>
  )
}
