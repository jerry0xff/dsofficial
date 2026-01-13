export type HeaderLink = {
  label: string
  href?: string
  target?: "_blank"
  rel?: string
}

type HeaderLabels = {
  market: string
  trade: string
  portfolio: string
  faq: string
  whitePaper: string
  launchApp: string
}

export function getDesktopNavItems(labels: HeaderLabels): HeaderLink[] {
  return [
    { label: labels.market, href: "https://app.deshare.finance/" },
    { label: labels.trade, href: "https://app.deshare.finance/#/trade" },
    { label: labels.portfolio, href: "https://app.deshare.finance/#/portfolio" },
  ]
}

export function getDesktopRightItems(labels: HeaderLabels): HeaderLink[] {
  return [
    { label: labels.faq, href: "#page-5" },
    { label: labels.whitePaper, href: "https://doc.deshare.finance/", target: "_blank", rel: "noreferrer" },
  ]
}

export function getMobileMenuItems(labels: HeaderLabels): HeaderLink[] {
  return [
    { label: labels.market, href: "https://app.deshare.finance/" },
    { label: labels.trade, href: "https://app.deshare.finance/#/trade" },
    { label: labels.portfolio, href: "https://app.deshare.finance/#/portfolio" },
    { label: "PRE-IPO", href: "https://app.deshare.finance/#/pre-ipo" },
    { label: labels.faq, href: "#page-5" },
    { label: labels.whitePaper, href: "https://doc.deshare.finance/", target: "_blank", rel: "noreferrer" },
  ]
}
