import { useLanguage } from "@/contexts/LanguageContext"
import { useMemo, useState } from "react"
import { languageOptions } from "../LanguagePicker"
import { mobileMenuItems } from "./headerData"

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false)
  const { langMenu, setLangMenu } = useLanguage()
  const currentLanguageLabel = useMemo(
    () => languageOptions.find((option) => option.value === langMenu)?.label ?? "English",
    [langMenu]
  )

  return (
    <>
      <button
        type="button"
        className="ml-auto flex h-8 w-8 items-center justify-center md:hidden"
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <img src="/assets/close.svg" alt="" className="h-[20px] w-[20px]" /> : null}
        {!isMenuOpen ? <img src="/assets/hamburger.svg" alt="" className="h-[20px] w-[20px]" /> : null}
      </button>

      <div
        className={[
          "fixed left-0 right-0 top-[60px] z-40 h-[calc(100%-60px)] bg-[#161623] md:hidden",
          "transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          className={[
            "px-6 pt-6 text-[12px] font-semibold text-[#FFFFFFD9] geist-mono",
            "transition-transform duration-300",
            isMenuOpen ? "translate-y-0" : "translate-y-2",
          ].join(" ")}
        >
          <div className="flex flex-col gap-6 uppercase">
            {mobileMenuItems.map((item) => {
              if (item.label === "PRE-IPO") {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    className="flex items-center gap-2"
                  >
                    <span>{item.label}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--ColorCyanDefault)] px-2 py-[2px] text-[10px] font-semibold text-[#0A0A17]">
                      <img src="/assets/page-1/star.svg" alt="" className="h-[7px] w-[7px]" />
                      NEW
                    </span>
                  </a>
                )
              }

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    onClick={item.label === "FAQ" ? () => setIsMenuOpen(false) : undefined}
                  >
                    {item.label}
                  </a>
                )
              }

              return <span key={item.label}>{item.label}</span>
            })}
            <div className="relative flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center justify-between"
                onClick={() => setIsMobileLangOpen((open) => !open)}
                aria-expanded={isMobileLangOpen}
              >
                <span>LANGUAGE</span>
                <span className="flex items-center gap-2 rounded-lg bg-[#0F0F1E] px-3 py-2 text-[12px] font-semibold text-white/85">
                  <span className="normal-case">{currentLanguageLabel}</span>
                  <img
                    src="/assets/page-5/arrow.svg"
                    alt=""
                    className={[
                      "h-[12px] w-[12px] transition-transform duration-200",
                      isMobileLangOpen ? "rotate-0" : "rotate-180",
                    ].join(" ")}
                  />
                </span>
              </button>
              <div
                className={[
                  "absolute right-0 top-full mt-2 w-[180px]",
                  "transition-all duration-200",
                  isMobileLangOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1",
                ].join(" ")}
              >
                <div className="rounded-lg border border-[#3B3B45] bg-[#1A1A2B] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                  <div className="flex flex-col gap-3 normal-case text-[#FFFFFFD9]">
                    {languageOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className="text-left"
                        onClick={() => {
                          setLangMenu(option.value)
                          setIsMobileLangOpen(false)
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
