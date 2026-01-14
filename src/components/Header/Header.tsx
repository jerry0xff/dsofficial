import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile"

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 h-[60px] w-full bg-[var(--ColorBackDefault)] text-white">
      <div className="mx-auto flex h-full w-full items-center px-3 md:px-5">
        <img src="/assets/logo.svg" alt="DeShare" className="h-6 w-[129px]" />
        <HeaderDesktop />
        <HeaderMobile />
      </div>
    </header>
  )
}
