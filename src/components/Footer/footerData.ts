export const currentYear = new Date().getFullYear()

export const footerTagline = ["Borderless, Barrier-Free", "Invest in Global Stocks On-Chain"]

export type FooterLink = {
  label: string
  href?: string
  target?: "_blank"
  rel?: string
}

export const footerSections: Array<{ title: string; links: FooterLink[] }> = [
  {
    title: "Documentation",
    links: [{ label: "Whitepaper", href: "https://doc.deshare.finance/", target: "_blank", rel: "noreferrer" }],
  },
  {
    title: "Community",
    links: [
      { label: "Telegram", href: "https://t.me/desharefinance", target: "_blank", rel: "noreferrer" },
      { label: "X (Twitter)", href: "https://x.com/Deshare_finance", target: "_blank", rel: "noreferrer" },
    ],
  },
]
