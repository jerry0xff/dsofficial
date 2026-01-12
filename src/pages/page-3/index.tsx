import PageThreeDesktop from "./PageThreeDesktop"
import PageThreeMobile from "./PageThreeMobile"

export default function PageThree() {
  return (
    <>
      <PageThreeDesktop className="hidden md:flex" />
      <PageThreeMobile className="flex md:hidden" />
    </>
  )
}
