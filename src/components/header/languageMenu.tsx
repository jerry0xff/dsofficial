import langSwitchNormal from "@/assets/lang-switch-normal.svg"
import langSwitchSelected from "@/assets/lang-switch-selected.svg"
import cx from "classnames"
import React, { useEffect, useMemo, useRef, useState } from "react"
import styles from "./languageMenu.module.less"

/** 你的项目里用哪个 key 存语言，这里统一一下 */
const LS_KEY = "lang"

export type LangCode = "en-AU" | "en-CA" | "en-GB" | "en-US" | "zh-CN" | "zh-TW"

export interface LanguageOption {
  code: LangCode
  label: string
  short?: string
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en-AU", label: "Australia - English", short: "EN-AU" },
  { code: "en-CA", label: "Canada - English", short: "EN-CA" },
  { code: "en-GB", label: "United Kingdom - English", short: "EN-GB" },
  { code: "en-US", label: "United States - English", short: "EN-US" },
  { code: "zh-CN", label: "简体中文（华语）", short: "简体" },
  { code: "zh-TW", label: "繁體中文（台灣）", short: "繁體" },
]

export function normalizeToSupported(code?: string): LangCode {
  if (!code) return "en-US"
  const lower = code.toLowerCase()

  if (lower.startsWith("zh-tw") || lower === "zh-hant" || lower === "zh_traditional") return "zh-TW"
  if (lower.startsWith("zh") || lower === "zh-cn" || lower === "zh-hans" || lower === "cn") return "zh-CN"

  if (lower.startsWith("en-au")) return "en-AU"
  if (lower.startsWith("en-ca")) return "en-CA"
  if (lower.startsWith("en-gb")) return "en-GB"
  if (lower.startsWith("en")) return "en-US"

  return "en-US"
}

function getInitialLang(propValue?: LangCode): LangCode {
  if (propValue) return propValue
  const fromLS = (typeof window !== "undefined" && window.localStorage.getItem(LS_KEY)) || ""
  if (fromLS) return normalizeToSupported(fromLS)
  const nav = (typeof navigator !== "undefined" && (navigator.language || (navigator as any).userLanguage)) || "en-US"
  return normalizeToSupported(nav)
}

export interface LanguageMenuProps {
  value?: LangCode
  onChange?: (next: LangCode) => void
  className?: string
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({ value, onChange, className }) => {
  const [open, setOpen] = useState(false)
  const [internalLang, setInternalLang] = useState<LangCode>(() => getInitialLang(value))
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  const current = value ?? internalLang
  const currentItem = useMemo(() => LANGUAGE_OPTIONS.find((o) => o.code === current) ?? LANGUAGE_OPTIONS[0], [current])

  useEffect(() => {
    if (value) setInternalLang(value)
  }, [value])

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      const path = (e as any).composedPath?.() || (e as any).path || []
      if (!menuRef.current || !btnRef.current) return setOpen(false)
      if (!path.includes(menuRef.current) && !path.includes(btnRef.current)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setActiveIndex((i) => Math.min(LANGUAGE_OPTIONS.length - 1, i + 1))
      }
      if (e.key === "ArrowUp") {
        e.preventDefault()
        setActiveIndex((i) => Math.max(0, i - 1))
      }
      if (e.key === "Enter" && activeIndex >= 0) {
        const opt = LANGUAGE_OPTIONS[activeIndex]
        handleSelect(opt.code)
      }
    }
    document.addEventListener("click", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("click", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [open, activeIndex])

  const handleSelect = (code: LangCode) => {
    if (onChange) {
      onChange(code)
    } else {
      try {
        window.localStorage.setItem(LS_KEY, code)
      } catch {}
      setInternalLang(code)
      window.location.reload()
    }
    setOpen(false)
  }

  return (
    <div className={cx(styles.wrap, className)}>
      <button
        ref={btnRef}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setOpen((v) => !v)
          const idx = LANGUAGE_OPTIONS.findIndex((o) => o.code === current)
          setActiveIndex(idx)
        }}
        className={styles.btn}
      >
        <img className={styles.icon} src={open ? langSwitchSelected : langSwitchNormal} alt="lang" />
        {/* 如需在大屏展示简短文案，解开下面这段并在 .btn 里对齐 */}
        {/* <span className={styles.short}>{currentItem.short ?? currentItem.label}</span> */}
      </button>

      {open && (
        <div ref={menuRef} role="listbox" className={styles.menu}>
          {LANGUAGE_OPTIONS.map((opt, idx) => {
            const isActive = opt.code === current
            const isHover = idx === activeIndex
            return (
              <div
                key={opt.code}
                role="option"
                aria-selected={isActive}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => handleSelect(opt.code)}
                className={cx(styles.option, {
                  [styles.active]: isActive,
                  [styles.hover]: isHover,
                })}
              >
                {opt.label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LanguageMenu
