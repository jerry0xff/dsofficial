import { useLanguage } from "@/contexts/LanguageContext"
import { getTexts } from "@/contexts/texts"
import { currentYear, getFooterSections, getFooterTagline } from "./footerData"

type FooterDesktopProps = {
  className?: string
}

export default function FooterDesktop({ className = "" }: FooterDesktopProps) {
  const { lang } = useLanguage()
  const { footer } = getTexts(lang)
  const footerTagline = getFooterTagline({ ...footer, tagline: [...footer.tagline] })
  const footerSections = getFooterSections({ ...footer, tagline: [...footer.tagline] })

  return (
    <footer
      className={["basis-[300px] flex-none bg-[var(--ColorBackDefault)] text-white", className].join(" ")}
      style={{ height: 300, minHeight: 300 }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1200px] flex-col" style={{ padding: "100px 0 40px" }}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-5">
            <img src="/assets/logo.svg" alt="DeShare" className="h-[24px] w-[129px]" />
            <div className="flex flex-col gap-2 text-[12px] font-normal uppercase geist-mono text-white">
              {footerTagline.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>

          <div className="flex pr-4 text-[12px] uppercase geist-mono">
            {footerSections.map((section, index) => (
              <div key={section.title} className="flex flex-col gap-2" style={index === 0 ? { marginRight: "80px" } : undefined}>
                <span className="font-bold text-white">{section.title}</span>
                {section.links.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-normal text-white/80"
                      target={link.target}
                      rel={link.rel}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span key={link.label} className="font-normal text-white/80">
                      {link.label}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto text-center text-[12px] font-normal uppercase geist-mono text-white/80">
          {footer.copyright.replace("{year}", String(currentYear))}
        </div>
      </div>
    </footer>
  )
}
