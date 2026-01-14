import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import { useEffect, useRef, useState } from "react"
import LanguagePicker from "../LanguagePicker"
import { getDesktopNavItems, getDesktopRightItems } from "./headerData"

export default function HeaderDesktop() {
  const navTextClass = "cursor-pointer text-white/85 hover:text-[#00FFFF]"
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const languageRef = useRef<HTMLDivElement | null>(null)
  const { lang } = useLanguage()
  const { header } = getTexts(lang)
  const desktopNavItems = getDesktopNavItems(header)
  const desktopRightItems = getDesktopRightItems(header)

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
    <div className="hidden md:flex flex-1 items-center justify-between pl-8">
      <nav className="flex items-center gap-6 text-[12px] font-semibold text-white/85 geist-mono">
        {desktopNavItems.map((item) =>
          item.href ? (
            <a key={item.label} href={item.href} className={navTextClass} target={item.target} rel={item.rel}>
              {item.label}
            </a>
          ) : (
            <span key={item.label} className={navTextClass}>
              {item.label}
            </span>
          )
        )}
        <a href="https://app.deshare.finance/#/pre-ipo" className="group relative h-6 w-[104px] cursor-pointer">
          <img src="/assets/preipo.svg" alt="Pre-IPO" className="h-6 w-[104px] transition group-hover:opacity-0" />
          <img
            src="/assets/preipohover.svg"
            alt="Pre-IPO"
            className="absolute left-0 top-0 h-6 w-[104px] opacity-0 transition group-hover:opacity-100"
          />
        </a>
      </nav>

      <div className="flex items-center gap-5 text-[12px] font-semibold text-white/85 geist-mono">
        {desktopRightItems.map((item) =>
          item.href ? (
            <a key={item.label} href={item.href} className={navTextClass} target={item.target} rel={item.rel}>
              {item.label}
            </a>
          ) : (
            <span key={item.label} className={navTextClass}>
              {item.label}
            </span>
          )
        )}
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
        <a
          href="https://app.deshare.finance/"
          className="h-[40px] w-[122px] rounded-full bg-[color:var(--ColorCyanDefault)] px-[10px] py-[8px] text-[12px] font-bold tracking-normal text-[#0b0c1c] transition hover:bg-[#00FFFF] flex items-center justify-center"
        >
          {header.launchApp}
        </a>
      </div>
    </div>
  )
}
