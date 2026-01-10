import FooterDesktop from "./FooterDesktop"
import FooterMobile from "./FooterMobile"

export default function Footer() {
  return (
    <>
      <FooterDesktop className="hidden md:flex" />
      <FooterMobile className="flex md:hidden" />
    </>
  )
}
