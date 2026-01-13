import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import ExpandableCard from "./ExpandableCard"

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { lang } = useLanguage()
  const { faq } = getTexts(lang)

  return (
    <div className="flex flex-col items-center gap-6">
      {faq.list.map((item, index) => (
        <ExpandableCard
          key={item.q}
          title={item.q}
          content={item.a}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
        />
      ))}
    </div>
  )
}
