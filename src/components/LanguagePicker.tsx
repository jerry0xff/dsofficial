import type { LangMenu } from "@/contexts/LanguageContext"
import { useLanguage } from "@/contexts/LanguageContext"

export const languageOptions: Array<{ label: string; value: LangMenu }> = [
  { label: "English", value: "en-US" },
  { label: "简体中文（华语）", value: "zh-CN" },
  { label: "繁體中文（台灣）", value: "zh-TW" },
]

type LanguagePickerProps = {
  onSelect?: () => void
}

export default function LanguagePicker({ onSelect }: LanguagePickerProps) {
  const { langMenu, setLangMenu } = useLanguage()

  return (
    <div className="absolute left-1/2 top-full z-20 mt-4 w-[151px] -translate-x-1/2">
      <div className="animate-[fadeIn_160ms_ease-out] border border-[#3B3B45] bg-[#161623] px-[12px] py-[24px] text-[12px] text-white">
        <div className="text-center mb-2 font-[400] text-white/50 geist-mono">Language</div>
        <div role="listbox" className="geist-mono whitespace-nowrap">
          {languageOptions.map((language) => {
            const isSelected = language.value === langMenu
            return (
              <button
                key={language.label}
                type="button"
                role="option"
                aria-selected={isSelected}
                className="flex w-full items-center justify-between font-[400] px-2 py-2 text-left text-white transition hover:bg-[#2D2D39] whitespace-nowrap"
                onClick={() => {
                  setLangMenu(language.value)
                  onSelect?.()
                }}
              >
                <span>{language.label}</span>
              {isSelected ? (
                <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[color:var(--ColorCyanDefault)]" />
              ) : null}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
