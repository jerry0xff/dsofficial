// src/i18n/texts.ts
export type Lang = "en" | "zh"

export const texts: Record<Lang, {
  header: {
    howItWorks: string
    faq: string
    whitePaper: string
    launchApp: string
  }
}> = {
  en: {
    header: {
      howItWorks: "How it works",
      faq: "FAQ",
      whitePaper: "White Paper",
      launchApp: "Launch App",
    },
  },
  zh: {
    header: {
      howItWorks: "机制介绍",
      faq: "常见问题",
      whitePaper: "白皮书",
      launchApp: "启动App",
    },
  },
}
