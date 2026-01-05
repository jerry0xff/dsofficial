export default function Header() {
  const navTextClass = "cursor-pointer text-white/70 hover:text-white"

  return (
    <header className="h-[60px] bg-[#0A0A17] text-white">
      <div className="mx-auto flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.svg" alt="DeShare" className="h-6 w-[129px]" />
          </div>
          <nav className="hidden items-center gap-6 text-[12px] font-semibold text-white/70 md:flex geist-mono">
            <span className={navTextClass}>MARKET</span>
            <span className={navTextClass}>TRADE</span>
            <span className={navTextClass}>PORTFOLIO</span>
            <img
              src="/assets/preipo.svg"
              alt="Pre-IPO"
              className="h-6 w-[104px] cursor-pointer transition hover:opacity-90"
            />
          </nav>
        </div>
        <div className="hidden items-center gap-5 text-[12px] font-semibold text-white/70 md:flex geist-mono">
          <span className={navTextClass}>FAQ</span>
          <span className={navTextClass}>WHITEPAPER</span>
          <img
            src="/assets/earth.svg"
            alt="Language"
            className="h-6 w-6 cursor-pointer opacity-100 transition hover:opacity-70"
          />
          <button className="h-[40px] w-[122px] rounded-full bg-[#21D2D2] px-[24px] py-[8px] text-[12px] font-bold tracking-normal text-[#0b0c1c] transition hover:opacity-90">
            LAUNCH APP
          </button>
        </div>
      </div>
    </header>
  )
}
