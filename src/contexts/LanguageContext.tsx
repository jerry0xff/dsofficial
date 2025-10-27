import type { ReactNode } from "react"
import { createContext, useContext, useState } from "react"
import type { Lang } from "./texts"

type LanguageContextValue = {
  lang: Lang
  setLang: (next: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang") as Lang | null
    if (stored === "zh" || stored === "en") {
      return stored
    }
    return "en"
  })

  function setLang(next: Lang) {
    setLangState(next)
    localStorage.setItem("lang", next)
  }

  function toggleLang() {
    setLang(lang === "en" ? "zh" : "en")
  }

  return <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>{children}</LanguageContext.Provider>
}

// 小助手 hook，组件里直接用
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>")
  }
  return ctx
}
