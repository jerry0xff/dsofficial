import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import PopularTable, { type PopularRow } from "./PopularTable"

function randomTrend() {
  let value = 50 + Math.random() * 10
  return Array.from({ length: 10 }, () => {
    value += (Math.random() - 0.5) * 4
    return value
  })
}

function makeRow(change: string): PopularRow {
  return {
    name: "Apple Inc.",
    symbol: "AAPL",
    price: "$192.45",
    change,
    trend: randomTrend(),
  }
}

const popularRows: PopularRow[] = [
  makeRow("+0.84%"),
  makeRow("+0.84%"),
  makeRow("-0.84%"),
  makeRow("+0.84%"),
  makeRow("-0.84%"),
  makeRow("+0.84%"),
  makeRow("+0.84%"),
]

const topGainersRows: PopularRow[] = [
  makeRow("+3.21%"),
  makeRow("+2.14%"),
  makeRow("+1.88%"),
  makeRow("+1.42%"),
]

const newListingsRows: PopularRow[] = [
  makeRow("+0.72%"),
  makeRow("-0.45%"),
  makeRow("+0.33%"),
  makeRow("+0.18%"),
]

export default function PopularTablesPanel() {
  const { lang } = useLanguage()
  const { page4 } = getTexts(lang)

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
