import PageTwoDesktop from "./PageTwoDesktop"
import PageTwoMobile from "./PageTwoMobile"

export default function PageTwo() {
  return (
    <>
      <PageTwoDesktop className="hidden md:flex" />
      <PageTwoMobile className="flex md:hidden" />
    </>
  )
}
