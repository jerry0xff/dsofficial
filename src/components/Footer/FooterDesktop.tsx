import { currentYear, footerSections, footerTagline } from "./footerData"

type FooterDesktopProps = {
  className?: string
}

export default function FooterDesktop({ className = "" }: FooterDesktopProps) {
  return (
    <footer
      className={["basis-[300px] flex-none bg-[#0A0A17] text-white", className].join(" ")}
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
          © {currentYear} DeShare International Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
