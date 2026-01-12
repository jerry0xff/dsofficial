export type HeaderLink = {
  label: string
  href?: string
  target?: "_blank"
  rel?: string
}

export const desktopNavItems: HeaderLink[] = [
  { label: "MARKET", href: "https://app.deshare.finance/" },
  { label: "TRADE", href: "https://app.deshare.finance/#/trade" },
  { label: "PORTFOLIO", href: "https://app.deshare.finance/#/portfolio" },
]

export const desktopRightItems: HeaderLink[] = [
  { label: "FAQ", href: "#page-5" },
  { label: "WHITEPAPER", href: "https://doc.deshare.finance/", target: "_blank", rel: "noreferrer" },
]

export const mobileMenuItems: HeaderLink[] = [
  { label: "MARKET", href: "https://app.deshare.finance/" },
  { label: "TRADE", href: "https://app.deshare.finance/#/trade" },
  { label: "PORTFOLIO", href: "https://app.deshare.finance/#/portfolio" },
  { label: "PRE-IPO", href: "https://app.deshare.finance/#/pre-ipo" },
  { label: "FAQ", href: "#page-5" },
  { label: "WHITEPAPER", href: "https://doc.deshare.finance/", target: "_blank", rel: "noreferrer" },
]
