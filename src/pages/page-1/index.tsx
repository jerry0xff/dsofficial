import PageOneDesktop from "./PageOneDesktop"
import PageOneMobile from "./PageOneMobile"

export default function PageOne() {
  return (
    <>
      <PageOneDesktop className="hidden md:flex" />
      <PageOneMobile className="flex md:hidden" />
    </>
  )
}
