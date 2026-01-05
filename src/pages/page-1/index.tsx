import TickerStrip from "./TickerStrip"

export default function PageOne() {
  return (
    <section className="flex min-h-[calc(100vh-60px)] flex-col items-center px-4 pt-2 bg-[url('/assets/page-1/map-empty.svg')] bg-center bg-contain bg-no-repeat">
      <TickerStrip />
    </section>
  )
}
