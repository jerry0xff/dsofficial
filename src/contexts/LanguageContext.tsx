import type { ReactNode } from "react"
import { createContext, useContext, useState } from "react"
import type { Lang } from "./texts"

/** 新增：下拉菜单可选值 */
export type LangMenu = "en-AU" | "en-CA" | "en-GB" | "en-US" | "zh-CN" | "zh-TW"

const LS_LANG = "lang" // 仍然保持原有 key（en/zh/zh-Hant）
const LS_LANG_MENU = "langMenu" // 新增，用于存菜单选项

/** 从菜单值映射到 Lang */
function menuToLang(m: LangMenu): Lang {
  if (m === "zh-CN") return "zh"
  if (m === "zh-TW") return "zh-Hant"
  return "en"
}

/** 从 Lang 映射到一个默认的菜单值（保证有确定性） */
function langToDefaultMenu(l: Lang): LangMenu {
  if (l === "zh-Hant") return "zh-TW"
  if (l === "zh") return "zh-CN"
  return "en-US"
}

/** 规范化：把任意浏览器语言字符串归并为菜单值 */
function normalizeNavigatorToMenu(nav?: string): LangMenu {
  const s = (nav || "").toLowerCase()
  if (s.startsWith("zh")) {
    if (s.includes("tw") || s.includes("hk") || s.includes("hant")) return "zh-TW"
    return "zh-CN"
  }
  if (s.startsWith("en-au")) return "en-AU"
  if (s.startsWith("en-ca")) return "en-CA"
  if (s.startsWith("en-gb")) return "en-GB"
  // 其它英文统一到 en-US
  return "en-US"
}

/** 初始化 Lang（沿用你原来的规则） */
function getInitialLang(): Lang {
  const stored = localStorage.getItem(LS_LANG) as Lang | null
  if (stored === "en" || stored === "zh" || stored === "zh-Hant") return stored

  const sys = navigator.language?.toLowerCase() || ""
  if (sys.startsWith("zh")) {
    if (sys.includes("tw") || sys.includes("hk") || sys.includes("hant")) return "zh-Hant"
    return "zh"
  }
  return "en"
}

/** 初始化菜单值：优先读 langMenu，其次由 lang 推断，再次由浏览器推断 */
function getInitialLangMenu(initialLang: Lang): LangMenu {
  const saved = localStorage.getItem(LS_LANG_MENU) as LangMenu | null
  if (
    saved === "en-AU" ||
    saved === "en-CA" ||
    saved === "en-GB" ||
    saved === "en-US" ||
    saved === "zh-CN" ||
    saved === "zh-TW"
  ) {
    return saved
  }
  // 没有保存时，先按 Lang 给一个合理默认
  if (initialLang) return langToDefaultMenu(initialLang)

  // 理论上不会走到这一步；兜底按浏览器
  return normalizeNavigatorToMenu(navigator.language)
}

type LanguageContextValue = {
  /** 旧的三态语言（用于你现有的文案/i18n） */
  lang: Lang
  setLang: (next: Lang) => void
  toggleLang: () => void

  /** 新增：菜单里的完整地域化语言值（用于 UI 展示/地区差异） */
  langMenu: LangMenu
  setLangMenu: (next: LangMenu) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 先按旧逻辑确定 Lang
  const [lang, setLangState] = useState<Lang>(() => getInitialLang())
  // 再初始化菜单（尽量复用 lang）
  const [langMenu, setLangMenuState] = useState<LangMenu>(() => getInitialLangMenu(getInitialLang()))

  /** 写入 localStorage 的小工具 */
  function persist(nextLang: Lang, nextMenu: LangMenu) {
    localStorage.setItem(LS_LANG, nextLang)
    localStorage.setItem(LS_LANG_MENU, nextMenu)
  }

  /** 对外：设置旧的三态语言，同时把菜单设为对应默认地域 */
  function setLang(next: Lang) {
    const nextMenu = langToDefaultMenu(next)
    setLangState(next)
    setLangMenuState(nextMenu)
    persist(next, nextMenu)
  }

  /** 对外：设置菜单值，自动映射并同步 Lang */
  function setLangMenu(next: LangMenu) {
    const mappedLang = menuToLang(next)
    setLangState(mappedLang)
    setLangMenuState(next)
    persist(mappedLang, next)
  }

  /** 沿用你的切换逻辑：en ↔ zh；若当前是 zh-Hant，切回 en；并把菜单设到默认地域 */
  function toggleLang() {
    if (lang === "en") {
      setLang("zh") // 会自动把菜单置为 zh-CN
    } else {
      setLang("en") // 会自动把菜单置为 en-US
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, langMenu, setLangMenu }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 小助手 hook
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>")
  }
  return ctx
}
