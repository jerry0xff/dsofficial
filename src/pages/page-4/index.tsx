import PageFourDesktop from "./PageFourDesktop"
import PageFourMobile from "./PageFourMobile"

export default function PageFour() {
  return (
    <>
      <PageFourDesktop className="hidden md:flex" />
      <PageFourMobile className="flex md:hidden" />
    </>
  )
}
