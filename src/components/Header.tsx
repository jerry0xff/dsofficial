import { useEffect, useRef, useState } from "react"
import LanguagePicker from "./LanguagePicker"

export default function Header() {
  const navTextClass = "cursor-pointer text-white/85 hover:text-[#00FFFF]"
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const languageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isLanguageOpen) return

    function handleClickOutside(event: MouseEvent) {
      if (!languageRef.current) return
      if (!languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isLanguageOpen])

  return (
    <header className="fixed left-0 top-0 z-50 h-[60px] w-full bg-[#0A0A17] text-white">
      <div className="mx-auto flex h-full items-center justify-between px-5">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.svg" alt="DeShare" className="h-6 w-[129px]" />
          </div>
          <nav className="hidden items-center gap-6 text-[12px] font-semibold text-white/85 md:flex geist-mono">
            <span className={navTextClass}>MARKET</span>
            <span className={navTextClass}>TRADE</span>
            <span className={navTextClass}>PORTFOLIO</span>
            <div className="group relative h-6 w-[104px] cursor-pointer">
              <img src="/assets/preipo.svg" alt="Pre-IPO" className="h-6 w-[104px] transition group-hover:opacity-0" />
              <img
                src="/assets/preipohover.svg"
                alt="Pre-IPO"
                className="absolute left-0 top-0 h-6 w-[104px] opacity-0 transition group-hover:opacity-100"
              />
            </div>
          </nav>
        </div>
        <div className="hidden items-center gap-5 text-[12px] font-semibold text-white/85 md:flex geist-mono">
          <span className={navTextClass}>FAQ</span>
          <span className={navTextClass}>WHITEPAPER</span>
          <div className="relative" ref={languageRef}>
            <button
              type="button"
              className="flex h-6 w-6 items-center justify-center text-white transition hover:text-[#00FFFF]"
              onClick={() => setIsLanguageOpen((open) => !open)}
              aria-expanded={isLanguageOpen}
              aria-haspopup="listbox"
            >
              <svg
                className="h-6 w-6"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9.99996 17.7083C14.2572 17.7083 17.7083 14.2572 17.7083 10C17.7083 5.7428 14.2572 2.29166 9.99996 2.29166M9.99996 17.7083C5.74276 17.7083 2.29163 14.2572 2.29163 10C2.29163 5.7428 5.74276 2.29166 9.99996 2.29166M9.99996 17.7083C8.04395 17.7083 6.45829 14.2572 6.45829 10C6.45829 5.7428 8.04395 2.29166 9.99996 2.29166M9.99996 17.7083C11.956 17.7083 13.5416 14.2572 13.5416 10C13.5416 5.7428 11.956 2.29166 9.99996 2.29166M17.5 10H2.49996"
                  stroke="currentColor"
                  strokeOpacity="0.8"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
            {isLanguageOpen ? <LanguagePicker onSelect={() => setIsLanguageOpen(false)} /> : null}
          </div>
          <button className="h-[40px] w-[122px] rounded-full bg-[color:var(--ColorCyanDefault)] px-[24px] py-[8px] text-[12px] font-bold tracking-normal text-[#0b0c1c] transition hover:bg-[#00FFFF]">
            LAUNCH APP
          </button>
        </div>
      </div>
    </header>
  )
}
