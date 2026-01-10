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
  return (
    <div className="mt-[20px] md:mt-[60px] flex w-full justify-center gap-[32px]">
      <PopularTable title="Popular" rows={popularRows} height={386} />
      <div className="flex flex-col gap-[32px]">
        <PopularTable title="Top Gainers" rows={topGainersRows} height={177} />
        <PopularTable title="New Listings" rows={newListingsRows} height={177} />
      </div>
    </div>
  )
}
