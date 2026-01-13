export const currentYear = new Date().getFullYear()

export type FooterText = {
  tagline: string[]
  sections: {
    documentation: {
      title: string
      whitepaper: string
    }
    community: {
      title: string
      telegram: string
      xTwitter: string
    }
  }
  copyright: string
}

export type FooterLink = {
  label: string
  href?: string
  target?: "_blank"
  rel?: string
}

export function getFooterTagline(text: FooterText) {
  return text.tagline
}

export function getFooterSections(text: FooterText): Array<{ title: string; links: FooterLink[] }> {
  return [
    {
      title: text.sections.documentation.title,
      links: [
        {
          label: text.sections.documentation.whitepaper,
          href: "https://doc.deshare.finance/",
          target: "_blank",
          rel: "noreferrer",
        },
      ],
    },
    {
      title: text.sections.community.title,
      links: [
        { label: text.sections.community.telegram, href: "https://t.me/desharefinance", target: "_blank", rel: "noreferrer" },
        { label: text.sections.community.xTwitter, href: "https://x.com/Deshare_finance", target: "_blank", rel: "noreferrer" },
      ],
    },
  ]
}
